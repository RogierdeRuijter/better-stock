import fs from "node:fs";
import { images } from "./dist/images.ts";
const outputPath = "./dist/pages/";

images.forEach(({ name, displayName, width, height }) => {
  try {
    const widths = [600, 1400, 2400];

    const page = `---
name: ${name}
width: ${width}
height: ${height}
displayName: ${displayName}
widths: [${widths}]
layout: ../../layouts/DetailLayout.astro
---`;

    fs.writeFileSync(outputPath + name + ".md", page);
    console.log(`File ${name} created successfully.`);
  } catch (error) {
    console.error(`Error processing file ${name}:`, error.message);
  }
});
