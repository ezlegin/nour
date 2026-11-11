const fs = require("fs");
const p = "components/home/HeroStage.tsx";
let t = fs.readFileSync(p, "utf8");
t = t.replace(`                camera={[0, 1.25, 3.9]}
                fov={30}
                orbit
                zoom={false}
                limited
                autoRotate
                autoRotateSpeed={0.45}
              >
                <Model
                  src={HERO_MODEL}
                  color={glaze.hex}
                  fit={1.55}
                  float
                  quality="hero"
                  castShadow
                />`,
`                camera={[0, 1.02, 4.6]}
                fov={30}
                orbit
                zoom={false}
                limited
              >
                <Model
                  src={HERO_MODEL}
                  color={glaze.hex}
                  fit={1.32}
                  rotationY={-0.55}
                  parallax={0.32}
                  preserveAccents
                  quality="hero"
                  castShadow
                />`);
fs.writeFileSync(p, t);
console.log(t.includes("preserveAccents"), t.includes("autoRotate"));
