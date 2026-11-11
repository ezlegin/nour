/**
 * Zero-dependency static server for the exported site.
 *
 *   npm run preview            → http://localhost:3000
 *   npm run preview -- 8080    → http://localhost:8080
 *
 * Serves ./out (Next's static export). No install, no network.
 */
import { createServer } from "node:http";
import { createReadStream, existsSync, statSync } from "node:fs";
import { extname, join, normalize, resolve, sep } from "node:path";

const ROOT = resolve(process.cwd(), "out");
const PORT = Number(process.argv[2] || process.env.PORT || 3000);

const MIME = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".mjs": "text/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".webp": "image/webp",
  ".ico": "image/x-icon",
  ".woff": "font/woff",
  ".woff2": "font/woff2",
  ".ttf": "font/ttf",
  ".glb": "model/gltf-binary",
  ".gltf": "model/gltf+json",
  ".txt": "text/plain; charset=utf-8",
  ".map": "application/json; charset=utf-8",
};

if (!existsSync(ROOT)) {
  console.error(`✗ No export found at ${ROOT}\n  Run "npm run build" first.`);
  process.exit(1);
}

const send = (res, status, body, type = "text/plain; charset=utf-8") => {
  res.writeHead(status, { "Content-Type": type, "Cache-Control": "no-cache" });
  res.end(body);
};

const server = createServer((req, res) => {
  const url = new URL(req.url ?? "/", `http://${req.headers.host ?? "localhost"}`);
  let pathname = decodeURIComponent(url.pathname);

  // resolve safely inside ./out
  const candidate = normalize(join(ROOT, pathname));
  if (!candidate.startsWith(ROOT + sep) && candidate !== ROOT) {
    return send(res, 403, "Forbidden");
  }

  const tryFile = (path) => (existsSync(path) && statSync(path).isFile() ? path : null);

  let file =
    tryFile(candidate) ??
    tryFile(join(candidate, "index.html")) ??
    tryFile(`${candidate}.html`);

  if (!file) {
    const notFound = join(ROOT, "404.html");
    res.writeHead(404, {
      "Content-Type": MIME[".html"],
      "Cache-Control": "no-cache",
    });
    if (existsSync(notFound)) createReadStream(notFound).pipe(res);
    else res.end("Not found");
    return;
  }

  res.writeHead(200, {
    "Content-Type": MIME[extname(file).toLowerCase()] ?? "application/octet-stream",
    "Cache-Control": "no-cache",
  });
  createReadStream(file).pipe(res);
});

const listen = (port, attempt = 0) => {
  server.once("error", (error) => {
    if (error.code === "EADDRINUSE" && attempt < 10) {
      listen(port + 1, attempt + 1);
      return;
    }
    console.error(`✗ ${error.message}`);
    process.exit(1);
  });
  server.listen(port, () => {
    console.log(`\n  ▲ Nour porcelain — static preview`);
    console.log(`  →  http://localhost:${port}\n`);
  });
};

listen(PORT);
