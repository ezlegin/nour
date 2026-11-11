"""Render a catalog thumbnail for every exported GLB (QA of the web assets).

Usage:
  blender -b --factory-startup --python render_glb.py -- <glb dir> <png dir>
"""
import math
import os
import sys

import bpy
from mathutils import Vector


def argv_after_dashes() -> list[str]:
    if "--" in sys.argv:
        return sys.argv[sys.argv.index("--") + 1 :]
    return []


def clear_scene() -> None:
    bpy.ops.object.select_all(action="SELECT")
    bpy.ops.object.delete(use_global=False)
    for block in (bpy.data.meshes, bpy.data.materials, bpy.data.images):
        for item in list(block):
            if item.users == 0:
                block.remove(item)


def setup_render(size: int) -> None:
    scene = bpy.context.scene
    scene.render.engine = "CYCLES"
    scene.cycles.device = "CPU"
    scene.cycles.samples = 48
    scene.cycles.use_denoising = True
    scene.cycles.max_bounces = 4
    scene.render.resolution_x = size
    scene.render.resolution_y = size
    scene.render.resolution_percentage = 100
    scene.render.film_transparent = False
    scene.view_settings.view_transform = "AgX"
    scene.view_settings.look = "AgX - Medium High Contrast"
    scene.view_settings.exposure = 0

    world = bpy.data.worlds.new("W")
    world.use_nodes = True
    bg = world.node_tree.nodes["Background"]
    bg.inputs[0].default_value = (0.96, 0.94, 0.91, 1)
    bg.inputs[1].default_value = 0.55
    scene.world = world


def add_lights() -> None:
    bpy.ops.object.light_add(type="SUN", location=(2.4, -3.2, 4.0))
    sun = bpy.context.object
    sun.data.energy = 3.2
    sun.data.angle = math.radians(22)
    sun.rotation_euler = (math.radians(48), 0, math.radians(38))

    specs = [
        ((-2.4, -2.0, 2.2), 55, 2.4),
        ((2.8, -0.8, 1.6), 26, 2.8),
    ]
    for i, (loc, power, size) in enumerate(specs):
        light = bpy.data.lights.new(f"Key{i}", "AREA")
        light.energy = power
        light.size = size
        obj = bpy.data.objects.new(f"Key{i}", light)
        bpy.context.collection.objects.link(obj)
        obj.location = loc
        direction = Vector((0, 0, 0.12)) - Vector(loc)
        obj.rotation_euler = direction.to_track_quat("-Z", "Y").to_euler()


def add_floor() -> None:
    bpy.ops.mesh.primitive_plane_add(size=40, location=(0, 0, 0))
    plane = bpy.context.object
    mat = bpy.data.materials.new("Floor")
    mat.use_nodes = True
    bsdf = mat.node_tree.nodes["Principled BSDF"]
    bsdf.inputs["Base Color"].default_value = (0.93, 0.91, 0.88, 1)
    bsdf.inputs["Roughness"].default_value = 0.65
    plane.data.materials.append(mat)


def frame_camera(objs) -> None:
    lo = Vector((1e9, 1e9, 1e9))
    hi = Vector((-1e9, -1e9, -1e9))
    for obj in objs:
        for corner in obj.bound_box:
            world = obj.matrix_world @ Vector(corner)
            lo = Vector((min(lo[i], world[i]) for i in range(3)))
            hi = Vector((max(hi[i], world[i]) for i in range(3)))

    centre = (lo + hi) / 2
    radius = max((hi - lo).length / 2, 0.02)

    cam_data = bpy.data.cameras.new("Cam")
    cam_data.lens = 70
    cam = bpy.data.objects.new("Cam", cam_data)
    bpy.context.collection.objects.link(cam)
    bpy.context.scene.camera = cam

    az, el = math.radians(38), math.radians(22)
    half_fov = math.atan(18 / cam_data.lens)
    dist = (radius / math.tan(half_fov)) * 1.18
    cam.location = centre + Vector(
        (
            math.sin(az) * math.cos(el) * dist,
            -math.cos(az) * math.cos(el) * dist,
            math.sin(el) * dist + radius * 0.05,
        )
    )
    cam.rotation_euler = (centre - cam.location).to_track_quat("-Z", "Y").to_euler()

    # ground the object on the floor
    for obj in objs:
        obj.location.z -= lo.z


def render_one(glb: str, target: str) -> None:
    clear_scene()
    setup_render(512)
    add_lights()
    add_floor()

    before = set(bpy.data.objects)
    bpy.ops.import_scene.gltf(filepath=glb)
    imported = [o for o in bpy.data.objects if o not in before and o.type == "MESH"]
    if not imported:
        raise RuntimeError("empty glb")
    frame_camera(imported)

    bpy.context.scene.render.filepath = target
    bpy.ops.render.render(write_still=True)


def main() -> None:
    args = argv_after_dashes()
    src, out = args[0], args[1]
    os.makedirs(out, exist_ok=True)
    files = sorted(f for f in os.listdir(src) if f.endswith(".glb"))
    for name in files:
        target = os.path.join(out, name.replace(".glb", ".png"))
        print(f"### RENDER {name}", flush=True)
        try:
            render_one(os.path.join(src, name), target)
        except Exception as exc:  # noqa: BLE001
            print(f"### FAILED {name}: {exc}", flush=True)
    print("### RENDER COMPLETE", flush=True)


main()
