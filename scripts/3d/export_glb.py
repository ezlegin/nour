"""Export clean product GLBs from the studio .blend scenes.

For each .blend:
  * drop lights, cameras, backdrops, colour-guide spheres, studio risers
  * convert curves (gold trims) to mesh so they survive glTF
  * apply modifiers (solidify / subsurf / array)
  * export a single .glb with original material names

Usage:
  blender -b --factory-startup --python export_glb.py -- <3D dir> <out dir> <report dir>
"""
import json
import math
import os
import re
import sys
import traceback

import bpy
from mathutils import Vector

STAGE_MATS = {"brownplane", "plane", "bg gray", "wood", "backdrop", "studio floor"}
SWATCH_DIM = 0.0447
TRI_BUDGET = 110_000
SUBSURF_MAX = 2


def argv_after_dashes() -> list[str]:
    if "--" in sys.argv:
        return sys.argv[sys.argv.index("--") + 1 :]
    return []


def slugify(name: str) -> str:
    slug = re.sub(r"[^a-z0-9]+", "-", name.lower()).strip("-")
    return slug or "scene"


def is_swatch(obj) -> bool:
    if not obj.name.lower().startswith("sphere"):
        return False
    dim = max(obj.dimensions)
    return abs(dim - SWATCH_DIM) < 0.004 or dim > 1.0


def is_backdrop(obj) -> bool:
    if obj.name.lower().startswith("plane"):
        return len(obj.data.polygons) <= 4 or max(obj.dimensions) > 0.5
    if obj.name.lower().startswith("cube") and len(obj.data.polygons) <= 8:
        return True
    mats = {s.material.name.lower() for s in obj.material_slots if s.material}
    if mats and mats <= STAGE_MATS and max(obj.dimensions) > 0.5:
        return True
    return False


def trim_outliers(objects):
    """Remove stray set-dressing that survived the name filters."""
    pairs = sorted(((max(o.dimensions), o.name, o) for o in objects), key=lambda item: item[0])
    if len(pairs) < 4:
        return objects
    median = pairs[len(pairs) // 2][0]
    limit = max(median * 4.0, 0.9)
    keep = []
    for diameter, _name, obj in pairs:
        if diameter <= limit:
            keep.append(obj)
        else:
            print(f"###   trimmed outlier {obj.name} ({diameter:.2f}m)", flush=True)
    return keep


def ensure_material(objects) -> None:
    """Meshes without a slot would export as untextured grey; give them glaze."""
    for obj in objects:
        if obj.material_slots and any(slot.material for slot in obj.material_slots):
            continue
        mat = bpy.data.materials.get("Glaze") or bpy.data.materials.new("Glaze")
        mat.use_nodes = True
        bsdf = next((n for n in mat.node_tree.nodes if n.type == "BSDF_PRINCIPLED"), None)
        if bsdf:
            bsdf.inputs["Base Color"].default_value = (0.55, 0.5, 0.45, 1)
            bsdf.inputs["Roughness"].default_value = 0.15
        obj.data.materials.clear()
        obj.data.materials.append(mat)


def is_studio_prop(obj) -> bool:
    """Primitive risers/blocks left over from the render stage."""
    if obj.material_slots:
        return False
    if len(obj.data.polygons) > 80:
        return False
    return max(obj.dimensions) < 0.6


def product_objects() -> tuple[list, list]:
    keep, drop = [], []
    for obj in list(bpy.context.view_layer.objects):
        if obj.type not in {"MESH", "CURVE"}:
            drop.append((obj.name, obj.type.lower()))
            continue
        if obj.hide_render:
            drop.append((obj.name, "hidden"))
            continue
        if any(c.name == "Color Guides" for c in obj.users_collection) or is_swatch(obj):
            drop.append((obj.name, "swatch"))
            continue
        if obj.type == "MESH" and is_backdrop(obj):
            drop.append((obj.name, "backdrop"))
            continue
        if obj.type == "MESH" and is_studio_prop(obj):
            drop.append((obj.name, "studio-prop"))
            continue
        keep.append(obj)
    return keep, drop


def convert_curves(objects) -> None:
    curves = [o for o in objects if o.type == "CURVE"]
    if not curves:
        return
    bpy.ops.object.select_all(action="DESELECT")
    for obj in curves:
        obj.select_set(True)
    bpy.context.view_layer.objects.active = curves[0]
    bpy.ops.object.convert(target="MESH")


def tri_count(obj) -> int:
    return sum(max(0, len(p.vertices) - 2) for p in obj.data.polygons)


def bake_geometry(objects) -> None:
    """Clamp subdivision, apply every modifier, smooth shade, decimate to budget."""
    for obj in objects:
        for mod in obj.modifiers:
            if mod.type == "SUBSURF":
                mod.levels = min(mod.levels, SUBSURF_MAX)
                mod.render_levels = min(mod.render_levels, SUBSURF_MAX)

    bpy.ops.object.select_all(action="DESELECT")
    for obj in objects:
        obj.select_set(True)
    bpy.context.view_layer.objects.active = objects[0]
    bpy.ops.object.convert(target="MESH")

    total = sum(tri_count(o) for o in objects)
    print(f"###   tris after bake: {total}", flush=True)
    if total <= TRI_BUDGET:
        for obj in objects:
            for poly in obj.data.polygons:
                poly.use_smooth = True
        return

    scale = TRI_BUDGET / total
    for obj in objects:
        tris = tri_count(obj)
        if tris < 400:
            continue
        ratio = max(0.05, min(1.0, (tris * scale) / tris))
        mod = obj.modifiers.new("web-decimate", "DECIMATE")
        mod.ratio = ratio
        mod.use_collapse_triangulate = True
        bpy.context.view_layer.objects.active = obj
        bpy.ops.object.modifier_apply(modifier=mod.name)
        for poly in obj.data.polygons:
            poly.use_smooth = True

    print(f"###   tris after decimate: {sum(tri_count(o) for o in objects)}", flush=True)


def bbox_of(objects) -> tuple[list, list]:
    lo = Vector((1e9, 1e9, 1e9))
    hi = Vector((-1e9, -1e9, -1e9))
    for obj in objects:
        for corner in obj.bound_box:
            world = obj.matrix_world @ Vector(corner)
            lo = Vector((min(lo[i], world[i]) for i in range(3)))
            hi = Vector((max(hi[i], world[i]) for i in range(3)))
    return list(lo), list(hi)


def material_table(objects) -> dict:
    names = set()
    for obj in objects:
        for slot in obj.material_slots:
            if slot.material:
                names.add(slot.material.name)
    table = {}
    for name in sorted(names):
        mat = bpy.data.materials[name]
        base = mat.diffuse_color
        info = {"hex": None, "roughness": round(mat.roughness, 3), "metallic": round(mat.metallic, 3)}
        if mat.use_nodes and mat.node_tree:
            for node in mat.node_tree.nodes:
                if node.type == "BSDF_PRINCIPLED":
                    base = node.inputs["Base Color"].default_value
                    info["roughness"] = round(node.inputs["Roughness"].default_value, 3)
                    info["metallic"] = round(node.inputs["Metallic"].default_value, 3)
                    break
        def lin_to_srgb(c):
            c = max(0.0, min(1.0, c))
            return 12.92 * c if c <= 0.0031308 else 1.055 * (c ** (1 / 2.4)) - 0.055

        r, g, b = (int(round(lin_to_srgb(v) * 255)) for v in base[:3])
        info["hex"] = f"#{r:02X}{g:02X}{b:02X}"
        table[name] = info
    return table


def export_one(path: str, out_dir: str) -> dict:
    bpy.ops.wm.open_mainfile(filepath=path, load_ui=False)
    keep, drop = product_objects()
    convert_curves(keep)
    keep = [o for o in keep if o.type == "MESH" and not o.hide_render]
    if not keep:
        raise RuntimeError("no product objects kept")

    bake_geometry(keep)
    keep = [o for o in keep if o.type == "MESH"]
    keep = trim_outliers(keep)
    ensure_material(keep)

    bpy.ops.object.select_all(action="DESELECT")
    for obj in keep:
        obj.hide_set(False)
        obj.select_set(True)
    bpy.context.view_layer.objects.active = keep[0]

    lo, hi = bbox_of(keep)
    size = [round(hi[i] - lo[i], 4) for i in range(3)]
    polys = sum(len(o.data.polygons) for o in keep)

    slug = slugify(os.path.splitext(os.path.relpath(path, args[0]))[0])
    target = os.path.join(out_dir, f"{slug}.glb")
    bpy.ops.export_scene.gltf(
        filepath=target,
        export_format="GLB",
        use_selection=True,
        export_apply=False,
        export_yup=True,
        export_cameras=False,
        export_lights=False,
        export_materials="EXPORT",
        export_extras=True,
        export_animations=False,
        export_texcoords=False,
        export_normals=True,
        export_image_format="NONE",
        export_optimize_animation_size=False,
    )

    meta = {
        "slug": slug,
        "source": os.path.relpath(path, args[0]),
        "glb": os.path.basename(target),
        "bytes": os.path.getsize(target),
        "polys": polys,
        "objects": [o.name for o in keep],
        "size_m": size,
        "bbox_min": lo,
        "bbox_max": hi,
        "materials": material_table(keep),
        "dropped": drop,
    }
    return meta


def main() -> None:
    global args
    args = argv_after_dashes()
    root, out_dir, report_dir = args[0], args[1], args[2]
    os.makedirs(out_dir, exist_ok=True)
    os.makedirs(report_dir, exist_ok=True)

    files = []
    for dirpath, _dirnames, filenames in os.walk(root):
        for filename in filenames:
            if filename.lower().endswith(".blend"):
                files.append(os.path.join(dirpath, filename))
    files.sort()

    index = []
    for path in files:
        rel = os.path.relpath(path, root)
        print(f"### EXPORT {rel}", flush=True)
        try:
            meta = export_one(path, out_dir)
            with open(os.path.join(report_dir, f"{meta['slug']}.json"), "w", encoding="utf-8") as fh:
                json.dump(meta, fh, ensure_ascii=False, indent=1)
            index.append(
                {
                    "slug": meta["slug"],
                    "bytes": meta["bytes"],
                    "polys": meta["polys"],
                    "size_m": meta["size_m"],
                    "objects": len(meta["objects"]),
                    "materials": sorted(meta["materials"]),
                }
            )
            print(f"###   ok {meta['bytes']/1024:.0f}KB {meta['polys']} polys", flush=True)
        except Exception:  # noqa: BLE001
            print(f"### FAILED {rel}", flush=True)
            traceback.print_exc()
            index.append({"slug": slugify(rel), "error": traceback.format_exc(limit=1)})

    with open(os.path.join(report_dir, "export-index.json"), "w", encoding="utf-8") as fh:
        json.dump(index, fh, ensure_ascii=False, indent=1)
    print("### EXPORT COMPLETE", flush=True)


main()
