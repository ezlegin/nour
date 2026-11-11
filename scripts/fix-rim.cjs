const fs = require("fs");
let h = fs.readFileSync("components/home/HeroStage.tsx", "utf8");
h = h.replace("rotationY={2.25}", "rotationY={-0.92}");
h = h.replace("camera={[0, 0.82, 4.6]}", "camera={[0, 0.72, 4.55]}");
fs.writeFileSync("components/home/HeroStage.tsx", h);

let s = fs.readFileSync("components/three/Studio.tsx", "utf8");
s = s.replace("    bumpScale: 0.0005,", "    bumpScale: 0.00015,\n    polygonOffset: true,\n    polygonOffsetFactor: 1,\n    polygonOffsetUnits: 1,");
fs.writeFileSync("components/three/Studio.tsx", s);
console.log("ok");
