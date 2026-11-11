const fs = require("fs");
let s = fs.readFileSync("components/home/SetStory.tsx", "utf8");
s = s.replace("const glaze = GLAZES[1];", "const glaze = GLAZES[2];");
s = s.replace("const spread = span * (0.2 + (index % 3) * 0.075) * eased;", "const spread = span * (0.07 + (index % 3) * 0.03) * eased;");
s = s.replace("const lift = span * (0.13 + (index % 4) * 0.07) * eased;", "const lift = span * (0.05 + (index % 4) * 0.025) * eased;");
s = s.replace("eased * (index % 2 === 0 ? 0.5 : -0.5)", "eased * (index % 2 === 0 ? 0.16 : -0.16)");
fs.writeFileSync("components/home/SetStory.tsx", s);

let st = fs.readFileSync("components/three/Studio.tsx", "utf8");
st = st.replace('<directionalLight position={[-3.6, 1.8, -2.4]} intensity={0.45 * intensity} color="#d9e6f2" />',
'<directionalLight position={[-3.6, 1.8, -2.4]} intensity={0.45 * intensity} color="#d9e6f2" />\n      {/* frontal fill so faces turned to the camera are not in shadow */}\n      <directionalLight position={[0, 2.2, 6]} intensity={0.55 * intensity} color="#fff8ee" />');
fs.writeFileSync("components/three/Studio.tsx", st);
console.log("ok", s.includes("GLAZES[2]"), st.includes("[0, 2.2, 6]"));
