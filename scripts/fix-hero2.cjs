const fs = require("fs");

let h = fs.readFileSync("components/home/HeroStage.tsx", "utf8");
h = h.replace("rotationY={-0.55}", "rotationY={0.62}");
h = h.replace("camera={[0, 1.02, 4.6]}", "camera={[0, 0.82, 4.6]}");
fs.writeFileSync("components/home/HeroStage.tsx", h);

let s = fs.readFileSync("components/three/Studio.tsx", "utf8");
s = s.replace("body.lerp(new THREE.Color(\"#ffffff\"), gloss ? 0.1 : 0.04);", "body.lerp(new THREE.Color(\"#ffffff\"), gloss ? 0.04 : 0.03);");
fs.writeFileSync("components/three/Studio.tsx", s);

let m = fs.readFileSync("components/three/Model.tsx", "utf8");
m = m.replace(/\.lerp\(new THREE\.Color\("#ffffff"\), 0\.1\)/g, '.lerp(new THREE.Color("#ffffff"), 0.04)');
fs.writeFileSync("components/three/Model.tsx", m);

let st = fs.readFileSync("components/three/Stage.tsx", "utf8");
st = st.replace('<shadowMaterial transparent opacity={0.26} color="#3a2f22" />', '<shadowMaterial transparent opacity={0.34} color="#3a2f22" />');
st = st.replace("opacity={0.14}", "opacity={0.1}");
fs.writeFileSync("components/three/Stage.tsx", st);
console.log("ok");
