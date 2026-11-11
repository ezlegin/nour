const fs = require("fs");
let t = fs.readFileSync("scripts/3d/compose_set.py", "utf8");

// clamp subdivision + decimate, same budget as the web exports
t = t.replace('def bake(objects):', `TRI_BUDGET = 110_000


def tri_count(obj):
    return sum(max(0, len(p.vertices) - 2) for p in obj.data.polygons)


def bake(objects):
    for obj in objects:
        for mod in obj.modifiers:
            if mod.type == "SUBSURF":
                mod.levels = min(mod.levels, 2)
                mod.render_levels = min(mod.render_levels, 2)`);

t = t.replace(`    bpy.ops.object.convert(target="MESH")
    return [o for o in objects if o.type == "MESH"]`,
`    bpy.ops.object.convert(target="MESH")
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
    return objects`);

// layout tweaks: bring the cup and salt forward, tuck the small bowl to the right
t = t.replace('place(saucer, -0.06, 0.02)', 'place(saucer, -0.06, -0.26)');
t = t.replace('cup.location = (-0.06, 0.02, 0)', 'cup.location = (-0.06, -0.26, 0)');
t = t.replace('("Cylinder.002", -0.24, -0.26, 12),', '("Cylinder.002", -0.26, -0.34, 12),');
t = t.replace('("Cylinder.007", 0.24, -0.24, -18),', '("Cylinder.007", 0.46, -0.34, -18),');
t = t.replace('("Salt Shaker 0", 0.02, -0.42, 0),', '("Salt Shaker 0", 0.12, -0.5, 0),');
t = t.replace('("Circle.004", -0.44, -0.05), ("Circle.002", 0.46, -0.02)', '("Circle.004", -0.46, -0.14), ("Circle.002", 0.5, -0.08)');
fs.writeFileSync("scripts/3d/compose_set.py", t);
console.log("patched", t.includes("TRI_BUDGET"), t.includes("-0.26"));
