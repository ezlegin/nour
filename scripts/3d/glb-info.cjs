const fs = require("fs");
const path = require("path");

function readGlb(file) {
  const buf = fs.readFileSync(file);
  const magic = buf.readUInt32LE(0);
  const version = buf.readUInt32LE(4);
  const length = buf.readUInt32LE(8);
  let offset = 12;
  let json = null;
  while (offset < length) {
    const chunkLength = buf.readUInt32LE(offset);
    const chunkType = buf.readUInt32LE(offset + 4);
    const data = buf.subarray(offset + 8, offset + 8 + chunkLength);
    if (chunkType === 0x4e4f534a) json = JSON.parse(data.toString("utf8"));
    offset += 8 + chunkLength + ((4 - (chunkLength % 4)) % 4);
  }
  return { magic, version, length, json };
}

const dir = process.argv[2];
const files = fs.readdirSync(dir).filter((f) => f.endsWith(".glb"));
const rows = [];
for (const f of files) {
  const { length, json } = readGlb(path.join(dir, f));
  const images = (json.images || []).length;
  const meshes = (json.meshes || []).length;
  const prims = (json.meshes || []).reduce((n, m) => n + m.primitives.length, 0);
  const mats = (json.materials || []).map((m) => m.name);
  rows.push({
    file: f,
    mb: (length / 1048576).toFixed(1),
    images,
    meshes,
    prims,
    mats: mats.join(","),
  });
}
rows.sort((a, b) => b.mb - a.mb);
console.table(rows.slice(0, 30));
console.log("total", rows.length, "files");
