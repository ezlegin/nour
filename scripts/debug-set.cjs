const puppeteer = require("puppeteer-core");
(async () => {
  const b = await puppeteer.launch({ executablePath: "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe", headless: "new", args: ["--hide-scrollbars","--no-first-run"], protocolTimeout: 120000 });
  const p = await b.newPage();
  await p.setViewport({ width: 1440, height: 900 });
  await p.goto("http://localhost:3100/", { waitUntil: "networkidle2", timeout: 120000 });
  await new Promise(r => setTimeout(r, 6000));
  await p.evaluate(() => window.scrollTo(0, 3000));
  await new Promise(r => setTimeout(r, 2500));
  const info = await p.evaluate(() => {
    const h2s = [...document.querySelectorAll("#set h2")];
    return h2s.map(h => ({ text: h.textContent.trim().slice(0,40), rect: h.getBoundingClientRect().toJSON(), color: getComputedStyle(h).color, opacity: getComputedStyle(h.parentElement).opacity, display: getComputedStyle(h).display }));
  });
  console.log(JSON.stringify(info, null, 1));
  await b.close();
})();
