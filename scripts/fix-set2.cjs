const fs = require("fs");
const p = "components/home/SetStory.tsx";
let t = fs.readFileSync(p, "utf8");
t = t.replace(
  "    const eased = target < 0.5 ? 2 * target * target : 1 - Math.pow(-2 * target + 2, 2) / 2;",
  "    // open out, then settle back together by the end of the section\n    const eased = Math.sin(Math.PI * Math.min(1, Math.max(0, target)));",
);
t = t.replace('["نمک‌دان", "۱"],', '["دیس", "۲"],\n                  ["نمک‌دان", "۲"],');
fs.writeFileSync(p, t);
console.log(t.includes("Math.sin(Math.PI"), t.includes("دیس"));
