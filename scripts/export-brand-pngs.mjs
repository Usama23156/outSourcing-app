import { mkdir } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const root = path.resolve("public/brand");
const outDir = path.join(root, "png");

const assets = [
  { name: "a1-icon", svg: "a1-icon.svg", widths: { small: 64, medium: 256, large: 1024 } },
  { name: "a1-logo", svg: "a1-logo.svg", widths: { small: 200, medium: 600, large: 1200 } },
];

await mkdir(outDir, { recursive: true });

for (const asset of assets) {
  const svgPath = path.join(root, asset.svg);
  const svg = await sharp(svgPath);

  for (const [size, width] of Object.entries(asset.widths)) {
    const output = path.join(outDir, `${asset.name}-${size}.png`);
    await svg
      .clone()
      .resize({ width, withoutEnlargement: false })
      .png()
      .toFile(output);

    const meta = await sharp(output).metadata();
    console.log(`Wrote ${output} (${meta.width}x${meta.height})`);
  }
}
