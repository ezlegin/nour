const fs = require("fs");
const path = require("path");
const puppeteer = require("puppeteer-core");

const CHROME = "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";
const OUT = path.join(process.cwd(), "scripts", "shots");

const TARGETS = [
  { name: "product", url: "http://localhost:3100/products/round-plate-26/", width: 1440, height: 980 },
  { name: "catalog", url: "http://localhost:3100/products/", width: 1440, height: 980 },
  { name: "mobile-home", url: "http://localhost:3100/", width: 390, height: 844, mobile: true },
  { name: "mobile-product", url: "http://localhost:3100/products/mug-350/", width: 390, height: 844, mobile: true },
];

async function main() {
  fs.mkdirSync(OUT, { recursive: true });
  const browser = await puppeteer.launch({
    executablePath: CHROME,
    headless: "new",
    args: ["--enable-unsafe-swiftshader", "--use-angle=swiftshader", "--hide-scrollbars", "--no-first-run"],
    protocolTimeout: 240000,
  });

  for (const target of TARGETS) {
    const page = await browser.newPage();
    await page.setViewport({
      width: target.width,
      height: target.height,
      isMobile: Boolean(target.mobile),
      hasTouch: Boolean(target.mobile),
      deviceScaleFactor: 1,
    });
    const errors = [];
    page.on("pageerror", (error) => errors.push(error.message));
    page.on("console", (message) => {
      if (message.type() === "error" && !message.text().includes("404")) errors.push(message.text());
    });

    await page.goto(target.url, { waitUntil: "networkidle2", timeout: 150000 });
    await new Promise((resolve) => setTimeout(resolve, 5000));
    const deadline = Date.now() + 45000;
    while (Date.now() < deadline) {
      try {
        const count = await page.evaluate(() => document.querySelectorAll("canvas").length);
        if (count > 0) break;
      } catch {
        await page.goto(target.url, { waitUntil: "networkidle2", timeout: 150000 }).catch(() => {});
      }
      await new Promise((resolve) => setTimeout(resolve, 1500));
    }
    await new Promise((resolve) => setTimeout(resolve, 6000));
    await page.screenshot({ path: path.join(OUT, `${target.name}.png`) });
    console.log(target.name, "height", await page.evaluate(() => document.body.scrollHeight));
    if (errors.length) console.log(" errors:", errors.slice(0, 5));
    await page.close();
  }

  await browser.close();
}

main().catch((error) => {
  console.error("FAILED", error);
  process.exit(1);
});
