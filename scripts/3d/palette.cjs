const fs = require("fs");
const path = require("path");
const dir = process.argv[2];
const files = fs.readdirSync(dir).filter((f) => f.endsWith(".json") && f !== "export-index.json");
const mats = new Map();
for (const f of files) {
  const meta = JSON.parse(fs.readFileSync(path.join(dir, f), "utf8"));
  for (const [name, info] of Object.entries(meta.materials || {})) {
    if (!mats.has(name)) mats.set(name, { hex: info.hex, metallic: info.metallic, roughness: info.roughness, files: [] });
    mats.get(name).files.push(meta.slug);
  }
}
const rows = [...mats.entries()]
  .map(([name, v]) => ({ name, hex: v.hex, metal: v.metallic, rough: v.roughness, n: v.files.length }))
  .sort((a, b) => b.n - a.n);
console.table(rows);
