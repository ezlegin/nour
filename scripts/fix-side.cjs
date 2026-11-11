const fs = require("fs");
let s = fs.readFileSync("components/three/Studio.tsx", "utf8");
s = s.replace(/side: THREE\.FrontSide,/g, "side: THREE.DoubleSide,");
fs.writeFileSync("components/three/Studio.tsx", s);
console.log((s.match(/DoubleSide/g) || []).length);
