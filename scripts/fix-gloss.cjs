const fs = require("fs");

let s = fs.readFileSync("components/three/Studio.tsx", "utf8");
s = s.replace('intensity={7 * intensity}\n          color="#fff8ec"', 'intensity={11 * intensity}\n          color="#fff8ec"');
s = s.replace('      <hemisphereLight args={["#fdf8ef", "#7d7468", 0.45 * intensity]} />\n      <ambientLight intensity={0.12 * intensity} />', '      <hemisphereLight args={["#fdf8ef", "#6f675c", 0.32 * intensity]} />\n      <ambientLight intensity={0.08 * intensity} />');
s = s.replace("    roughness: gloss ? 0.09 : 0.48,", "    roughness: gloss ? 0.065 : 0.48,");
s = s.replace("    clearcoatRoughness: gloss ? 0.035 : 0.42,", "    clearcoatRoughness: gloss ? 0.022 : 0.42,");
s = s.replace("    envMapIntensity: gloss ? 1.25 : 0.7,", "    envMapIntensity: gloss ? 1.45 : 0.7,");
fs.writeFileSync("components/three/Studio.tsx", s);

let m = fs.readFileSync("components/three/Model.tsx", "utf8");
m = m.replace(/material\.roughness = finish === "gloss" \? 0\.09 : 0\.48;/g, 'material.roughness = finish === "gloss" ? 0.065 : 0.48;');
m = m.replace(/material\.clearcoatRoughness = finish === "gloss" \? 0\.035 : 0\.42;/g, 'material.clearcoatRoughness = finish === "gloss" ? 0.022 : 0.42;');
m = m.replace(/material\.envMapIntensity = finish === "gloss" \? 1\.25 : 0\.7;/g, 'material.envMapIntensity = finish === "gloss" ? 1.45 : 0.7;');
fs.writeFileSync("components/three/Model.tsx", m);

let st = fs.readFileSync("components/three/Stage.tsx", "utf8");
st = st.replace('<shadowMaterial transparent opacity={0.3} color="#3a2f22" />', '<shadowMaterial transparent opacity={0.26} color="#3a2f22" />');
fs.writeFileSync("components/three/Stage.tsx", st);
console.log("ok", s.includes("1.45"), m.includes("1.45"));
