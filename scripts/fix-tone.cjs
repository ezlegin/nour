const fs = require("fs");
let s = fs.readFileSync("components/home/SetStory.tsx", "utf8");
s = s.replace("const glaze = GLAZES[2];", "const glaze = GLAZES[1];");
s = s.replace("margin={1.02}", "margin={0.95}");
fs.writeFileSync("components/home/SetStory.tsx", s);
console.log("ok");
