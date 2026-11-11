const fs = require("fs");
let s = fs.readFileSync("components/three/Studio.tsx", "utf8");
s = s.replace(/side: THREE\.DoubleSide,/g, "side: THREE.FrontSide,");
fs.writeFileSync("components/three/Studio.tsx", s);
