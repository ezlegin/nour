const fs = require("fs");
const p = "components/three/Model.tsx";
let t = fs.readFileSync(p, "utf8");

t = t.replace(
  `      material.color.set(color);
      material.roughness = finish === "gloss" ? 0.32 : 0.62;
      material.clearcoat = finish === "gloss" ? 0.35 : 0.05;
      material.clearcoatRoughness = finish === "gloss" ? 0.3 : 0.6;`,
  `      material.color.set(color).lerp(new THREE.Color("#ffffff"), 0.06);
      material.roughness = finish === "gloss" ? 0.09 : 0.48;
      material.clearcoat = finish === "gloss" ? 1 : 0.15;
      material.clearcoatRoughness = finish === "gloss" ? 0.035 : 0.42;
      material.envMapIntensity = finish === "gloss" ? 1.25 : 0.7;`,
);

t = t.replace(
  `      if (goldRim) {
        material.metalness = 0.95;
        material.roughness = 0.32;
        material.clearcoat = 0.15;
        material.color.set("#c9a24b");
      } else {
        material.metalness = 0;
        material.roughness = finish === "gloss" ? 0.32 : 0.62;
        material.clearcoat = finish === "gloss" ? 0.35 : 0.05;
        material.clearcoatRoughness = finish === "gloss" ? 0.3 : 0.6;
        material.color.set(color);
      }`,
  `      if (goldRim) {
        material.metalness = 1;
        material.roughness = 0.18;
        material.clearcoat = 0.4;
        material.color.set("#c9a24b");
      } else {
        material.metalness = 0;
        material.roughness = finish === "gloss" ? 0.09 : 0.48;
        material.clearcoat = finish === "gloss" ? 1 : 0.15;
        material.clearcoatRoughness = finish === "gloss" ? 0.035 : 0.42;
        material.color.set(color).lerp(new THREE.Color("#ffffff"), 0.06);
      }`,
);

fs.writeFileSync(p, t);
console.log("gloss 0.09:", t.includes("0.09"), "| lerp:", (t.match(/lerp/g) || []).length);
