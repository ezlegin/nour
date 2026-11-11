"""Inspect product objects' world rotation and size in a blend scene."""
import json
import sys

import bpy
from mathutils import Vector

path = sys.argv[sys.argv.index("--") + 1]
bpy.ops.wm.open_mainfile(filepath=path, load_ui=False)

rows = []
for obj in bpy.context.view_layer.objects:
    if obj.type != "MESH":
        continue
    if any(c.name == "Color Guides" for c in obj.users_collection):
        continue
    if obj.name.lower().startswith("sphere"):
        continue
    if obj.name.lower().startswith("plane"):
        continue
    dims = [round(v * 100, 2) for v in obj.dimensions]
    euler = [round(v * 57.2958, 1) for v in obj.rotation_euler]
    world = obj.matrix_world
    centre = [round(v * 100, 1) for v in world.translation]
    rows.append(
        {
            "name": obj.name,
            "dims_cm": dims,
            "rot_deg": euler,
            "loc_cm": centre,
            "mats": [s.material.name if s.material else None for s in obj.material_slots],
            "polys": len(obj.data.polygons),
        }
    )

rows.sort(key=lambda r: max(r["dims_cm"]), reverse=True)
print("### COMPOSE REPORT START")
print(json.dumps(rows, ensure_ascii=False, indent=1))
print("### COMPOSE REPORT END")
