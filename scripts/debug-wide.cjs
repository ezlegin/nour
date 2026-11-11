const puppeteer = require("puppeteer-core");
(async () => {
  const browser = await puppeteer.launch({ executablePath: "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe", headless: "new", args: ["--hide-scrollbars","--no-first-run"], protocolTimeout: 120000 });
  const page = await browser.newPage();
  await page.setViewport({ width: 390, height: 844, isMobile: true });
  await page.goto("http://localhost:3100", { waitUntil: "networkidle2", timeout: 120000 });
  await new Promise(r => setTimeout(r, 4000));
  const res = await page.evaluate(() => {
    let max = null;
    for (const el of document.querySelectorAll("*")) {
      const r = el.getBoundingClientRect();
      if (!max || r.right > max.r) max = { tag: el.tagName, cls: (el.className?.toString()||"").slice(0,80), w: Math.round(r.width), l: Math.round(r.left), r: Math.round(r.right), path: (el.parentElement?.tagName||"") + "." + (el.parentElement?.className?.toString()||"").slice(0,60) };
    }
    const header = document.querySelector("header");
    return { max, bodyW: document.body.scrollWidth, headerLeft: header?.getBoundingClientRect().left, dir: getComputedStyle(document.body).direction };
  });
  console.log(JSON.stringify(res, null, 1));
  await browser.close();
})();
