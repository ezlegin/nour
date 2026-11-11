"""Front-view preview of a composed GLB (checks orientation, not beauty)."""
import math
import sys

import bpy
from mathutils import Vector

args = sys.argv[sys.argv.index("--") + 1 :]
glb, out = args[0], args[1]

bpy.ops.wm.read_factory_settings(use_empty=True)
scene = bpy.context.scene
scene.render.engine = "CYCLES"
scene.cycles.samples = 32
scene.cycles.device = "CPU"
scene.render.resolution_x = 900
scene.render.resolution_y = 620
scene.view_settings.view_transform = "AgX"

world = bpy.data.worlds.new("W")
world.use_nodes = True
world.node_tree.nodes["Background"].inputs[0].default_value = (0.95, 0.93, 0.89, 1)
world.node_tree.nodes["Background"].inputs[1].default_value = 0.7
scene.world = world

for loc, power in (((2.6, -3.4, 3.4), 220), ((-3.2, -2.4, 2.0), 90)):
    light = bpy.data.lights.new("L", "AREA")
    light.energy = power
    light.size = 3
    obj = bpy.data.objects.new("L", light)
    bpy.context.collection.objects.link(obj)
    obj.location = loc
    obj.rotation_euler = (Vector((0, 0, 0.25)) - Vector(loc)).to_track_quat("-Z", "Y").to_euler()

bpy.ops.import_scene.gltf(filepath=glb)
meshes = [o for o in bpy.data.objects if o.type == "MESH"]
print("### OBJECTS")
for o in meshes:
    print("###  ", o.name, [round(v*100,1) for v in o.dimensions], "polys", len(o.data.polygons))

lo = Vector((1e9, 1e9, 1e9))
hi = Vector((-1e9, -1e9, -1e9))
for obj in meshes:
    for corner in obj.bound_box:
        p = obj.matrix_world @ Vector(corner)
        lo = Vector((min(lo[i], p[i]) for i in range(3)))
        hi = Vector((max(hi[i], p[i]) for i in range(3)))
centre = (lo + hi) / 2
radius = max((hi - lo).length / 2, 0.05)

cam_data = bpy.data.cameras.new("C")
cam_data.lens = 55
cam = bpy.data.objects.new("C", cam_data)
bpy.context.collection.objects.link(cam)
scene.camera = cam

# straight-on front, slightly above (glTF is Y-up: front is +Z)
cam.location = centre + Vector((0, -radius * 2.9, radius * 0.45))
cam.rotation_euler = (centre - cam.location).to_track_quat("-Z", "Y").to_euler()

bpy.ops.mesh.primitive_plane_add(size=30, location=(0, lo.y, 0))
floor = bpy.context.object
mat = bpy.data.materials.new("F")
mat.use_nodes = True
mat.node_tree.nodes["Principled BSDF"].inputs["Base Color"].default_value = (0.94, 0.92, 0.88, 1)
floor.data.materials.append(mat)

scene.render.filepath = out
bpy.ops.render.render(write_still=True)
print("### FRONT RENDER", out)
