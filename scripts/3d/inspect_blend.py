"""Headless inspection of a .blend file: objects, materials, dimensions.

Usage: blender -b "file.blend" --python inspect_blend.py
"""
import json
import sys

import bpy


def main() -> None:
    report = {"file": bpy.data.filepath, "blender": bpy.app.version_string}
    objects = []
    for obj in bpy.data.objects:
        entry = {
            "name": obj.name,
            "type": obj.type,
            "parent": obj.parent.name if obj.parent else None,
            "dimensions": [round(v, 4) for v in obj.dimensions],
            "location": [round(v, 4) for v in obj.location],
            "hide_render": obj.hide_render,
            "collections": [c.name for c in obj.users_collection],
        }
        if obj.type == "MESH":
            entry["verts"] = len(obj.data.vertices)
            entry["polys"] = len(obj.data.polygons)
            entry["materials"] = [ms.material.name if ms.material else None for ms in obj.material_slots]
        objects.append(entry)

    report["objects"] = objects
    report["materials"] = sorted({m.name for m in bpy.data.materials})
    report["collections"] = sorted({c.name for c in bpy.data.collections})
    report["images"] = sorted({i.name for i in bpy.data.images if i.name != "Render Result"})
    report["scene_unit"] = bpy.context.scene.unit_settings.system
    report["scene_scale"] = bpy.context.scene.unit_settings.scale_length

    print("=== BLEND REPORT START ===")
    print(json.dumps(report, ensure_ascii=False, indent=2))
    print("=== BLEND REPORT END ===")
    sys.stdout.flush()


main()
