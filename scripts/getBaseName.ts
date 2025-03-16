import fs from "node:fs";

const directoryPath = "../stock-images/pexels/assets";

fs.readdir(directoryPath, async (err, files) => {
  if (err) {
    console.error("Error reading directory:", err);
    return;
  }

  const items: any[] = [];

  const images = files.filter((file) => file.endsWith(".avif"));

  for (const image of images) {
    items.push(image.split("_")[0]);
  }

  console.log(items);
});
