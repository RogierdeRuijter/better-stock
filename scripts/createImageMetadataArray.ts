import fs from "node:fs";
import path from "path";
import sharp from "sharp";

const directoryPath = "../stock-images/pexels/assets";

// TODO: How do we adhere to some order?
fs.readdir(directoryPath, async (err, files) => {
  if (err) {
    console.error("Error reading directory:", err);
    return;
  }

  const items: any[] = [];

  for (const file of files) {
    const filePath = path.join(directoryPath, file);

    console.log(`Processing file ${file}...`);

    try {
      const metadata = await sharp(filePath).metadata();
      const width = metadata.width ?? 1;
      const height = metadata.height ?? 1;
      const basePath = "${basePath}";

      items.push({
        path: `${basePath}/${file}`,
        width,
        height,

      });
    } catch (error) {
      console.error(`Error processing file ${file}:`, error.message);
    }
  }

  console.log(items);
});

