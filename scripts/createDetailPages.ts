import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";

const directoryPath = "./convert-images/assets/processed";
const outputPath = "./dist/pages/";

fs.readdir(directoryPath, async (err, files) => {
  if (err) {
    console.error("Error reading directory:", err);
    return;
  }

  const pngs = files.filter((file) => file.endsWith(".png"));

  console.log(`Found ${pngs.length} PNG files.`);

  for (const png of pngs) {
    const filePath = path.join(directoryPath, png);

    console.log(`Processing file ${png}...`);

    try {
      const metadata = await sharp(filePath).metadata();

      const width = metadata.width ?? 1;
      const height = metadata.height ?? 1;
      const name = png.split(".")[0];
      const widths = [600, 1400, 2400];

      const page = `---
filename: ${name}
width: ${width},
height: ${height},
widths: ${widths},
layout: "../../layout/ImageLayout.astro"
---`;
      fs.writeFileSync(outputPath + name + ".md", page);
    } catch (error) {
      console.error(`Error processing file ${png}:`, error.message);
    }
  }
});
