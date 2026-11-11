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
  await page.setViewport({ width: 390, height: 844, isMobile: true, hasTouch: true });
  page.on("pageerror", (e) => console.log("PAGEERROR", e.message.slice(0, 400)));
  page.on("console", (m) => {
    if (m.type() === "error") console.log("CONSOLE", m.text().slice(0, 300));
  });
  await page.goto("http://localhost:3100", { waitUntil: "networkidle2", timeout: 120000 });
  await new Promise((r) => setTimeout(r, 12000));

  const info = await page.evaluate(() => {
    const header = document.querySelector("header");
    const h1 = document.querySelector("h1");
    const first = document.querySelector("main, body > div");
    return {
      scrollTop: window.scrollY,
      docHeight: document.documentElement.scrollHeight,
      bodyWidth: document.body.scrollWidth,
      headerRect: header?.getBoundingClientRect().toJSON(),
      h1Text: h1?.textContent?.slice(0, 60),
      h1Rect: h1?.getBoundingClientRect().toJSON(),
      canvases: document.querySelectorAll("canvas").length,
      bodyBg: getComputedStyle(document.body).backgroundColor,
      childCount: document.body.children.length,
    };
  });
  console.log(JSON.stringify(info, null, 2));
  await page.screenshot({ path: "scripts/shots/mobile-debug.png" });
  await page.evaluate(() => window.scrollTo(0, 600));
  await new Promise((r) => setTimeout(r, 1500));
  await page.screenshot({ path: "scripts/shots/mobile-debug-600.png" });
  await browser.close();
})();
