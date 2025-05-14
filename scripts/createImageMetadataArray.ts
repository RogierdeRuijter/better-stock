import fs from "node:fs";
import path from "path";
import sharp from "sharp";
import { IMAGE_NAMES } from "./filenames.ts";
import { getImageMetadata } from "./additionalMetadataImages.ts";

const directoryPath = "./convert-images/assets/transformed";

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
      const format = metadata.format;
      const basePath = "/better-stock/assets";
      const name = file.split("_")[0];

      if (!IMAGE_NAMES.includes(name)) {
        throw new Error(`File ${file} does not match any known image names.`);
      }

      const item = items.find((item) => item.name === name);

      if (item) {
        item.srcSetData.push({
          src: `${basePath}/${file}`,
          width,
          height,
          format,
        });
      } else {
        items.push({
          name,
          src: `${basePath}/${file}`,
          width,
          height,
          srcSetData: [
            {
              src: `${basePath}/${file}`,
              width,
              height,
              format,
            },
          ],
        });
      }
    } catch (error) {
      console.error(`Error processing file ${file}:`, error.message);
    }
  }

  for (const item of items) {
    item.srcSetAvif = item.srcSetData
      .filter((data) => data.format === "heif")
      .map((data) => `${data.src} ${data.width}w`)
      .join(", ");

    item.srcSetJpg = item.srcSetData
      .filter((data) => data.format === "jpeg")
      .map((data) => `${data.src} ${data.width}w`)
      .join(", ");
  }

  for (const item of items) {
    delete item.srcSetData;
  }

  for (const item of items) {
    const imageMetadata = getImageMetadata(item.name);

    Object.assign(item, imageMetadata);
  }

  const fileContent = `export const images = ${JSON.stringify(items, null, 2)};\n`;

  fs.writeFileSync("./dist/images.ts", fileContent);

  console.dir(items, { depth: null });
});
