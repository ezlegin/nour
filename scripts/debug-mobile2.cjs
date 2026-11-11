const puppeteer = require("puppeteer-core");
(async () => {
  const browser = await puppeteer.launch({ executablePath: "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe", headless: "new", args: ["--hide-scrollbars","--no-first-run"], protocolTimeout: 120000 });
  const page = await browser.newPage();
  await page.setViewport({ width: 390, height: 844, isMobile: true });
  await page.goto("http://localhost:3100", { waitUntil: "domcontentloaded", timeout: 120000 });
  await new Promise(r => setTimeout(r, 8000));
  const info = await page.evaluate(() => {
    const links = [...document.querySelectorAll("a")].filter(a => a.textContent.includes("استودیوی رنگ"));
    const track = document.querySelector(".marquee-track");
    return {
      links: links.map(l => ({ html: l.outerHTML.slice(0, 300), color: getComputedStyle(l).color, bg: getComputedStyle(l).backgroundColor, display: getComputedStyle(l).display })),
      track: track ? { w: track.getBoundingClientRect().width, display: getComputedStyle(track).display, widthCss: getComputedStyle(track).width, ws: getComputedStyle(track).whiteSpace } : null,
      sheets: document.styleSheets.length,
      cssHref: [...document.querySelectorAll('link[rel=stylesheet]')].map(l => l.href),
    };
  });
  console.log(JSON.stringify(info, null, 1));
  await browser.close();
})();
