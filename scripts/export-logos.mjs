import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { Resvg } from "@resvg/resvg-js";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");
const logosDir = join(root, "public", "logos");
const sizes = [512, 1024];

const concepts = [
  "concept-1-bridge",
  "concept-2-engine",
  "concept-3-nexus",
  "concept-4-architect",
  "concept-5-vector",
];

mkdirSync(logosDir, { recursive: true });

for (const concept of concepts) {
  const svgPath = join(logosDir, `${concept}.svg`);
  const svg = readFileSync(svgPath, "utf8");

  for (const size of sizes) {
    const resvg = new Resvg(svg, {
      fitTo: { mode: "width", value: size },
      background: "rgba(0,0,0,0)",
    });

    const pngData = resvg.render();
    const outPath = join(logosDir, `${concept}-${size}.png`);
    writeFileSync(outPath, pngData.asPng());
    console.log(`Wrote ${outPath}`);
  }
}
