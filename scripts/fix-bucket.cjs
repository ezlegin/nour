const fs = require("fs");
const p = "hooks/useScrollProgress.ts";
let t = fs.readFileSync(p, "utf8");
t = t.replace(
  '      const eased = Math.min(1, Math.max(0, (next - (1 - start)) / (start - end)));\n      const bucket = eased < 0.18 ? 0 : eased < 0.45 ? 1 : eased < 0.78 ? 2 : 3;',
  '      const bucket = next < 0.3 ? 0 : next < 0.58 ? 1 : next < 0.82 ? 2 : 3;',
);
fs.writeFileSync(p, t);
console.log(t.includes("next < 0.3"));
