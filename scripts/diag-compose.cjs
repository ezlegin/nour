const fs = require("fs");
let t = fs.readFileSync("scripts/3d/compose_set.py", "utf8");
t = t.replace('    bpy.ops.object.select_all(action="DESELECT")\n    for obj in keep:', '    print("### KEEP", [(o.name, [round(v*100,1) for v in o.dimensions]) for o in keep])\n    bpy.ops.object.select_all(action="DESELECT")\n    for obj in keep:');
t = t.replace('    print("### COMPOSED", out, flush=True)', '    print("### SELECTED", [o.name for o in bpy.context.selected_objects])\n    print("### COMPOSED", out, flush=True)');
fs.writeFileSync("scripts/3d/compose_set.py", t);
console.log("patched");
