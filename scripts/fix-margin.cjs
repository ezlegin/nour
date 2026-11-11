const fs = require("fs");
let st = fs.readFileSync("components/three/Stage.tsx", "utf8");
st = st.replace("  dpr?: [number, number];", "  dpr?: [number, number];\n  margin?: number;");
st = st.replace("  dpr = [1, 1.8],", "  dpr = [1, 1.8],\n  margin = 1.4,");
st = st.replace("<Bounds fit clip observe margin={1.4}>", "<Bounds fit clip observe margin={margin}>");
fs.writeFileSync("components/three/Stage.tsx", st);

let s = fs.readFileSync("components/home/SetStory.tsx", "utf8");
s = s.replace("                  camera={[0, 1.02, 5.6]}", "                  camera={[0, 1.02, 5.6]}\n                  margin={1.02}");
s = s.replace("const spread = span * (0.07 + (index % 3) * 0.03) * eased;", "const spread = span * (0.04 + (index % 3) * 0.02) * eased;");
s = s.replace("const lift = span * (0.05 + (index % 4) * 0.025) * eased;", "const lift = span * (0.025 + (index % 4) * 0.012) * eased;");
fs.writeFileSync("components/home/SetStory.tsx", s);
console.log("ok", st.includes("margin = 1.4"), s.includes("margin={1.02}"));
