const puppeteer = require("puppeteer-core");
const CHROME = "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";

(async () => {
  const browser = await puppeteer.launch({
    executablePath: CHROME,
    headless: "new",
    args: ["--enable-unsafe-swiftshader", "--use-angle=swiftshader", "--hide-scrollbars", "--no-first-run"],
    protocolTimeout: 180000,
  });
  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });
  page.on("console", (m) => {
    if (m.type() === "error" || m.type() === "warning") console.log("PAGE", m.type(), m.text().slice(0, 300));
  });
  page.on("pageerror", (e) => console.log("PAGEERROR", e.message.slice(0, 300)));
  await page.goto("http://localhost:3100", { waitUntil: "networkidle2", timeout: 120000 });

  for (let i = 0; i < 10; i++) {
    await new Promise((r) => setTimeout(r, 2000));
    const state = await page.evaluate(() => ({
      t: Math.round(performance.now()),
      canvases: [...document.querySelectorAll("canvas")].map((c) => `${c.clientWidth}x${c.clientHeight}`),
      heroStage: document.querySelectorAll(".aspect-\\[4\\/4\\.4\\] canvas").length,
    }));
    console.log(i, JSON.stringify(state));
  }
  await page.screenshot({ path: "scripts/shots/debug.png" });
  await browser.close();
})();
