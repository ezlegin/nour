const fs = require("fs");
const p = "components/home/SetStory.tsx";
let t = fs.readFileSync(p, "utf8");
t = t.replace('const SET_MODEL = "/models/30pcs.glb";', 'const SET_MODEL = "/models/set-front.glb";');
t = t.replace("camera={[0, 1.35, 6.1]}", "camera={[0, 1.02, 5.6]}");
t = t.replace("                    fit={1.9}", "                    fit={1.95}");
fs.writeFileSync(p, t);
console.log(t.includes("set-front"), t.includes("5.6"));
