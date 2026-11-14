/**
 * Renders a still photo of every product in every glaze for the product grid.
 * Needs the dev server: `npm run dev`, then `node scripts/capture-cards.cjs`.
 * Optional: CAPTURE_ONLY=mug-350,teapot-800 to redo a few products.
 *
 * Each frame is trimmed to the piece (and its shadow), then centred on a
 * square with even padding, so every card sits the same way.
 */
const fs = require("fs");
const path = require("path");
const puppeteer = require("puppeteer-core");
const sharp = require("sharp");

const CHROME = "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";
const BASE = process.env.CAPTURE_URL || "http://localhost:3000";
const OUT = path.join(process.cwd(), "public", "cards");
const SIZE = 720;
const PAD = 0.1; // share of the side left empty around the piece

async function main() {
  const browser = await puppeteer.launch({
    executablePath: CHROME,
    headless: "new",
    args: ["--hide-scrollbars", "--no-first-run", "--enable-unsafe-swiftshader", "--ignore-gpu-blocklist"],
    protocolTimeout: 300000,
  });
  const page = await browser.newPage();
  await page.setViewport({ width: 1000, height: 1000, deviceScaleFactor: 1 });
  page.on("pageerror", (error) => console.error("[pageerror]", error.message));
  await page.goto(`${BASE}/capture/`, { waitUntil: "networkidle2", timeout: 180000 });
  await page.waitForFunction(() => typeof window.__shoot === "function", { timeout: 180000 });

  const { products, glazes } = readCatalogue();
  const only = process.env.CAPTURE_ONLY?.split(",");

  for (const product of products) {
    if (only && !only.includes(product)) continue;
    fs.mkdirSync(path.join(OUT, product), { recursive: true });
    for (const glaze of glazes) {
      let png = null;
      // zoom out until nothing touches the frame edge
      for (let margin = 1.6; margin < 6 && !png; margin *= 1.35) {
        const shot = await page.evaluate(
          (next) =>
            Promise.race([
              window.__shoot(next).then(() => "ok"),
              new Promise((resolve) => setTimeout(() => resolve("timeout"), 90000)),
            ]),
          { product, glaze, margin },
        );
        if (shot !== "ok") break;
        const data = await page.evaluate(() => document.querySelector("canvas").toDataURL("image/png"));
        const frame = Buffer.from(data.split(",")[1], "base64");
        if (!(await touchesEdge(frame))) png = frame;
      }
      if (!png) {
        console.error(`${product}/${glaze}: failed`);
        continue;
      }
      if (process.env.CAPTURE_RAW) fs.writeFileSync(path.join(process.env.CAPTURE_RAW, `${product}-${glaze}.png`), png);
      const box = await opaqueBox(png);
      const { width, height } = box;
      const side = Math.round(Math.max(width, height) / (1 - PAD * 2));
      // sharp resizes before it extends, so pad in a first pass and scale in a second
      const padded = await sharp(png)
        .extract(box)
        .extend({
          top: Math.floor((side - height) / 2),
          bottom: Math.ceil((side - height) / 2),
          left: Math.floor((side - width) / 2),
          right: Math.ceil((side - width) / 2),
          background: { r: 0, g: 0, b: 0, alpha: 0 },
        })
        .png()
        .toBuffer();
      await sharp(padded)
        .resize(SIZE, SIZE)
        .webp({ quality: 82, alphaQuality: 90 })
        .toFile(path.join(OUT, product, `${glaze}.webp`));
      console.log(`${product}/${glaze}`);
    }
  }
  await browser.close();
}

/** true when an opaque pixel sits on the outer border (the piece is clipped) */
async function touchesEdge(png) {
  const { data, info } = await sharp(png).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
  const { width, height } = info;
  const solid = (x, y) => data[(y * width + x) * 4 + 3] > 40;
  for (let i = 0; i < width; i++) if (solid(i, 0) || solid(i, height - 1)) return true;
  for (let i = 0; i < height; i++) if (solid(0, i) || solid(width - 1, i)) return true;
  return false;
}

/** the box around every pixel that is not fully transparent (piece and shadow) */
async function opaqueBox(png) {
  const { data, info } = await sharp(png).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
  let left = info.width, top = info.height, right = -1, bottom = -1;
  for (let y = 0; y < info.height; y++) {
    for (let x = 0; x < info.width; x++) {
      if (data[(y * info.width + x) * 4 + 3] < 8) continue;
      if (x < left) left = x;
      if (x > right) right = x;
      if (y < top) top = y;
      if (y > bottom) bottom = y;
    }
  }
  return { left, top, width: right - left + 1, height: bottom - top + 1 };
}

/** product urls and glaze slugs, read from the source so no build step is needed */
function readCatalogue() {
  const showcase = fs.readFileSync(path.join(process.cwd(), "data", "showcase.ts"), "utf8");
  const glazes = fs.readFileSync(path.join(process.cwd(), "lib", "glazes.ts"), "utf8");
  return {
    products: [...showcase.matchAll(/^\s*\["([a-z0-9-]+)",/gm)].map((m) => m[1]),
    glazes: [...glazes.matchAll(/^    slug: "([a-z0-9-]+)"/gm)].map((m) => m[1]),
  };
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
