const fs = require("fs");
const path = require("path");
const puppeteer = require("puppeteer-core");

const CHROME = "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";
const BASE = process.env.SHOT_URL || "http://localhost:3100";
const OUT = path.join(process.cwd(), "scripts", "shots");

const VIEWPORT = { width: 1440, height: 900, deviceScaleFactor: 1 };

async function main() {
  fs.mkdirSync(OUT, { recursive: true });
  const browser = await puppeteer.launch({
    executablePath: CHROME,
    headless: "new",
    args: [
      "--enable-unsafe-swiftshader",
      "--use-angle=swiftshader",
      "--hide-scrollbars",
      "--no-first-run",
      "--no-default-browser-check",
      "--disable-dev-shm-usage",
    ],
    protocolTimeout: 180000,
  });
  const page = await browser.newPage();
  await page.setViewport(VIEWPORT);

  const messages = [];
  page.on("console", (message) => {
    if (["error", "warning"].includes(message.type())) messages.push(`[${message.type()}] ${message.text()}`);
  });
  page.on("pageerror", (error) => messages.push(`[pageerror] ${error.message}`));

  await page.goto(BASE, { waitUntil: "networkidle2", timeout: 120000 });

  // software WebGL is slow to boot: wait until every stage has its canvas
  const deadline = Date.now() + 150000;
  while (Date.now() < deadline) {
    const count = await page.evaluate(() => document.querySelectorAll("canvas").length);
    if (count >= 3) break;
    await new Promise((resolve) => setTimeout(resolve, 2000));
  }
  await new Promise((resolve) => setTimeout(resolve, 8000));

  await page.screenshot({ path: path.join(OUT, "hero.png") });

  const height = await page.evaluate(() => document.body.scrollHeight);
  console.log("page height", height);

  // walk down the page in viewport steps so sticky / lazy sections render
  const stops = process.argv.slice(2).map(Number);
  const targets = stops.length ? stops : [];
  for (const y of targets) {
    try {
      await page.evaluate((top) => window.scrollTo({ top, behavior: "instant" }), y);
    } catch {
      console.log("context reset, waiting for reload");
      await new Promise((resolve) => setTimeout(resolve, 4000));
      await page.evaluate((top) => window.scrollTo({ top, behavior: "instant" }), y).catch(() => {});
    }
    await new Promise((resolve) => setTimeout(resolve, 2600));
    await page.screenshot({ path: path.join(OUT, `y-${y}.png`) });
    console.log("shot at", y);
  }

  console.log("CONSOLE:\n" + (messages.slice(0, 40).join("\n") || "(clean)"));
  await browser.close();
}

main().catch((error) => {
  console.error("SHOT FAILED", error);
  process.exit(1);
});
