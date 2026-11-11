"""Batch inspection of every .blend in the 3D/ folder.

One Blender process, sequential file loads. Writes one JSON report per file to
scripts/3d/reports/<name>.json plus a combined index.json.

Usage:
  blender -b --factory-startup --python inspect_all.py -- <3D dir> <report dir>
"""
import json
import os
import re
import sys
import traceback

import bpy


def argv_after_dashes() -> list[str]:
    if "--" in sys.argv:
        return sys.argv[sys.argv.index("--") + 1 :]
    return []


def principled_info(mat: bpy.types.Material) -> dict:
    info = {
        "use_nodes": mat.use_nodes,
        "diffuse": [round(c, 4) for c in mat.diffuse_color],
        "metallic": round(mat.metallic, 3),
        "roughness": round(mat.roughness, 3),
        "nodes": [],
    }
    if not mat.use_nodes or not mat.node_tree:
        return info
    for node in mat.node_tree.nodes:
        entry = {"type": node.type, "name": node.name}
        if node.type == "BSDF_PRINCIPLED":
            base = node.inputs.get("Base Color")
            metal = node.inputs.get("Metallic")
            rough = node.inputs.get("Roughness")
            coat = node.inputs.get("Coat Weight")
            if base is not None:
                entry["base_color"] = [round(v, 4) for v in base.default_value]
                entry["base_linked"] = base.is_linked
            if metal is not None:
                entry["metallic"] = round(metal.default_value, 3)
            if rough is not None:
                entry["roughness"] = round(rough.default_value, 3)
                entry["roughness_linked"] = rough.is_linked
            if coat is not None:
                entry["coat"] = round(coat.default_value, 3)
        elif node.type == "TEX_IMAGE":
            entry["image"] = node.image.name if node.image else None
            entry["size"] = list(node.image.size) if node.image else None
        info["nodes"].append(entry)
    return info


def srgb_to_hex(rgba) -> str:
    def to_srgb(c: float) -> float:
        c = max(0.0, min(1.0, c))
        return 12.92 * c if c <= 0.0031308 else 1.055 * (c ** (1 / 2.4)) - 0.055

    r, g, b = (int(round(to_srgb(v) * 255)) for v in rgba[:3])
    return f"#{r:02X}{g:02X}{b:02X}"


def inspect(path: str) -> dict:
    bpy.ops.wm.open_mainfile(filepath=path, load_ui=False)
    report = {
        "file": path,
        "unit_scale": bpy.context.scene.unit_settings.scale_length,
        "objects": [],
        "materials": {},
        "collections": sorted(c.name for c in bpy.data.collections),
        "images": sorted(i.name for i in bpy.data.images if i.type == "IMAGE"),
    }

    for obj in bpy.data.objects:
        entry = {
            "name": obj.name,
            "type": obj.type,
            "parent": obj.parent.name if obj.parent else None,
            "dim_cm": [round(v * 100, 2) for v in obj.dimensions],
            "loc": [round(v, 4) for v in obj.location],
            "hide_render": obj.hide_render,
            "collections": [c.name for c in obj.users_collection],
        }
        if obj.type == "MESH":
            entry["verts"] = len(obj.data.vertices)
            entry["polys"] = len(obj.data.polygons)
            entry["mats"] = [
                slot.material.name if slot.material else None
                for slot in obj.material_slots
            ]
            entry["modifiers"] = [m.type for m in obj.modifiers]
        report["objects"].append(entry)

    for mat in bpy.data.materials:
        if not mat.users:
            continue
        info = principled_info(mat)
        base = None
        for node in info["nodes"]:
            if node["type"] == "BSDF_PRINCIPLED" and "base_color" in node:
                base = node["base_color"]
        info["hex"] = srgb_to_hex(base or mat.diffuse_color)
        report["materials"][mat.name] = info

    return report


def slugify(name: str) -> str:
    slug = re.sub(r"[^a-z0-9]+", "-", name.lower()).strip("-")
    return slug or "scene"


def main() -> None:
    args = argv_after_dashes()
    root = args[0]
    out_dir = args[1]
    os.makedirs(out_dir, exist_ok=True)

    files = []
    for dirpath, _dirnames, filenames in os.walk(root):
        for filename in filenames:
            if filename.lower().endswith(".blend"):
                files.append(os.path.join(dirpath, filename))
    files.sort()

    index = []
    for path in files:
        rel = os.path.relpath(path, root)
        slug = slugify(os.path.splitext(rel)[0])
        print(f"### INSPECT {rel}", flush=True)
        try:
            report = inspect(path)
            report["rel"] = rel
            report["slug"] = slug
            with open(os.path.join(out_dir, f"{slug}.json"), "w", encoding="utf-8") as fh:
                json.dump(report, fh, ensure_ascii=False, indent=1)
            meshes = [o for o in report["objects"] if o["type"] == "MESH"]
            index.append(
                {
                    "rel": rel,
                    "slug": slug,
                    "meshes": len(meshes),
                    "polys": sum(o.get("polys", 0) for o in meshes),
                    "objects": [o["name"] for o in meshes],
                    "materials": sorted(report["materials"]),
                }
            )
        except Exception:  # noqa: BLE001
            print(f"### FAILED {rel}", flush=True)
            traceback.print_exc()
            index.append({"rel": rel, "slug": slug, "error": traceback.format_exc(limit=2)})

    with open(os.path.join(out_dir, "index.json"), "w", encoding="utf-8") as fh:
        json.dump(index, fh, ensure_ascii=False, indent=1)
    print("### INSPECTION COMPLETE", flush=True)


main()
