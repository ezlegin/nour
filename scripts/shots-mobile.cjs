const puppeteer = require("puppeteer-core");
const path = require("path");
(async () => {
  const browser = await puppeteer.launch({ executablePath: "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe", headless: "new", args: ["--enable-unsafe-swiftshader","--use-angle=swiftshader","--hide-scrollbars","--no-first-run"], protocolTimeout: 240000 });
  const page = await browser.newPage();
  await page.setViewport({ width: 390, height: 844, isMobile: true, hasTouch: true });
  await page.goto("http://localhost:3100", { waitUntil: "networkidle2", timeout: 120000 });
  await new Promise(r => setTimeout(r, 12000));
  for (const y of [700, 1500, 2600, 3900]) {
    await page.evaluate((t) => window.scrollTo(0, t), y);
    await new Promise(r => setTimeout(r, 2500));
    await page.screenshot({ path: path.join("scripts", "shots", `m-${y}.png`) });
  }
  console.log("mobile shots done", await page.evaluate(() => document.body.scrollWidth));
  await browser.close();
})();
