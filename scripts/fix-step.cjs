const fs = require("fs");
const p = "components/home/SetStory.tsx";
let t = fs.readFileSync(p, "utf8");
t = t.replace("  const glaze = GLAZES[1];", "  const glaze = GLAZES[1];\n  const activeStep = Math.min(step, STEPS.length - 1);");
t = t.replace(/step === index/g, "activeStep === index");
fs.writeFileSync(p, t);
console.log((t.match(/activeStep/g) || []).length);
