"""Compose a front-facing 30-piece set from 30PCS.blend.

The studio scene stores three plates tipped up on their edge (rotated 80° about
Y), which is why the section reads as a side view. Here we lay the scene out
again: plates standing upright and facing the camera, bowls and cups in front,
everything grounded on z = 0.

Usage:
  blender -b 3D/30PCS.blend --python compose_set.py -- <out.glb>
"""
import math
import os
import sys

import bpy
from mathutils import Vector

STAGE_MATS = {"brownplane", "plane", "bg gray", "wood", "backdrop"}
SWATCH_DIM = 0.0447


def product_objects():
    keep = []
    for obj in list(bpy.context.view_layer.objects):
        if obj.type not in {"MESH", "CURVE"}:
            continue
        if obj.hide_render:
            continue
        if any(c.name == "Color Guides" for c in obj.users_collection):
            continue
        if obj.name.lower().startswith("sphere"):
            dim = max(obj.dimensions)
            if abs(dim - SWATCH_DIM) < 0.004 or dim > 1.0:
                continue
        if obj.name.lower().startswith("plane") and max(obj.dimensions) > 0.5:
            continue
        mats = {s.material.name.lower() for s in obj.material_slots if s.material}
        if mats and mats <= STAGE_MATS and max(obj.dimensions) > 0.5:
            continue
        # the teapot assembly parked far left of the stage
        if obj.matrix_world.translation.x < -0.6:
            continue
        # stage primitives
        if not obj.material_slots and len(obj.data.polygons) <= 40:
            continue
        keep.append(obj)
    return keep


TRI_BUDGET = 110_000


def tri_count(obj):
    return sum(max(0, len(p.vertices) - 2) for p in obj.data.polygons)


def bake(objects):
    for obj in objects:
        for mod in obj.modifiers:
            if mod.type == "SUBSURF":
                mod.levels = min(mod.levels, 2)
                mod.render_levels = min(mod.render_levels, 2)
    bpy.ops.object.select_all(action="DESELECT")
    for obj in objects:
        obj.select_set(True)
    bpy.context.view_layer.objects.active = objects[0]
    bpy.ops.object.convert(target="MESH")
    objects = [o for o in objects if o.type == "MESH"]

    total = sum(tri_count(o) for o in objects)
    if total > TRI_BUDGET:
        scale = TRI_BUDGET / total
        for obj in objects:
            tris = tri_count(obj)
            if tris < 400:
                continue
            mod = obj.modifiers.new("web-decimate", "DECIMATE")
            mod.ratio = max(0.05, min(1.0, scale))
            mod.use_collapse_triangulate = True
            bpy.context.view_layer.objects.active = obj
            bpy.ops.object.modifier_apply(modifier=mod.name)
    for obj in objects:
        for poly in obj.data.polygons:
            poly.use_smooth = True
    print("### TRIS", sum(tri_count(o) for o in objects), flush=True)
    return objects


def ground(obj, z=0.0):
    """Drop the object so its lowest point sits at z."""
    bpy.context.view_layer.update()
    box = [obj.matrix_world @ Vector(c) for c in obj.bound_box]
    low = min(v.z for v in box)
    obj.location.z += z - low
    bpy.context.view_layer.update()


def local_size(obj):
    bpy.context.view_layer.update()
    box = [obj.matrix_world @ Vector(c) for c in obj.bound_box]
    lo = Vector((min(v[i] for v in box) for i in range(3)))
    hi = Vector((max(v[i] for v in box) for i in range(3)))
    return hi - lo


def place(obj, x, y, z=0.0):
    obj.location.x = x
    obj.location.y = y
    obj.location.z = z
    ground(obj, 0.0)


def main():
    out = sys.argv[sys.argv.index("--") + 1]
    keep = bake(product_objects())

    plates = {
        "Circle.006": (0.0, math.radians(6)),
        "Circle.005": (-0.34, math.radians(-3)),
        "Circle.003": (0.34, math.radians(4)),
    }

    placed = set()

    # standing plates: faces turned to the camera (-Y), small fan tilt
    for name, (x, tilt) in plates.items():
        obj = bpy.data.objects.get(name)
        if not obj:
            continue
        obj.rotation_euler = (math.radians(90) + tilt, 0, math.radians(-8) * (x / 0.34 or 0))
        obj.location = (x, 0.34, 0)
        ground(obj)
        placed.add(name)

    # the big deep plate stays flat at the back
    if bpy.data.objects.get("Circle"):
        obj = bpy.data.objects["Circle"]
        obj.rotation_euler = (0, 0, 0)
        place(obj, 0.0, 0.52)
        placed.add("Circle")

    # saucer + cup
    saucer = bpy.data.objects.get("NAALBAKI")
    cup = bpy.data.objects.get("CUP")
    if saucer:
        saucer.rotation_euler = (0, 0, 0)
        place(saucer, -0.06, -0.26)
        placed.add("NAALBAKI")
    if cup:
        cup.rotation_euler = (0, 0, math.radians(190))
        cup.location = (-0.06, -0.26, 0)
        ground(cup)
        cup.location.z = (saucer.location.z + local_size(saucer).z) if saucer else 0.0
        placed.add("CUP")

    # small plates, flat, front left / right
    for name, x, y in (("Circle.004", -0.46, -0.14), ("Circle.002", 0.5, -0.08)):
        obj = bpy.data.objects.get(name)
        if not obj:
            continue
        obj.rotation_euler = (0, 0, 0)
        place(obj, x, y)
        placed.add(name)

    # bowls and the rest upright in the front row
    for name, x, y, turn in (
        ("Cylinder.002", -0.26, -0.34, 12),
        ("Cylinder.007", 0.46, -0.34, -18),
        ("Salt Shaker 0", 0.12, -0.5, 0),
    ):
        obj = bpy.data.objects.get(name)
        if not obj:
            continue
        obj.rotation_euler = (0, 0, math.radians(turn))
        place(obj, x, y)
        placed.add(name)

    # anything left over (small helpers) tucked behind
    leftovers = [o for o in keep if o.name not in placed and not o.name.startswith("Circle")]
    for index, obj in enumerate(leftovers):
        obj.rotation_euler = (0, 0, 0)
        place(obj, 0.55 + index * 0.12, 0.1)

    print("### KEEP", [(o.name, [round(v*100,1) for v in o.dimensions]) for o in keep])
    bpy.ops.object.select_all(action="DESELECT")
    for obj in keep:
        obj.hide_set(False)
        obj.select_set(True)
    bpy.context.view_layer.objects.active = keep[0]

    bpy.ops.export_scene.gltf(
        filepath=out,
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
        export_image_format="NONE",
    )
    print("### SELECTED", [o.name for o in bpy.context.selected_objects])
    print("### COMPOSED", out, flush=True)


main()
