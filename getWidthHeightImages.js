const fs = require("node:fs");
const path = require("path");
const sharp = require("sharp");

const directoryPath = "./assets/originals"; // Change to your directory path

fs.readdir(directoryPath, async (err, files) => {
  if (err) {
    console.error("Error reading directory:", err);
    return;
  }

  const widescreenFiles = [];
  const squareFiles = [];
  const portraitFiles = [];

  for (const file of files) {
    const filePath = path.join(directoryPath, file);

    try {
      const metadata = await sharp(filePath).metadata();
      const aspectRatio = (metadata.width / metadata.height).toFixed(2);

      if (aspectRatio > 1.2) {
        widescreenFiles.push({metadata, file});
      } else if (aspectRatio < 0.8) {
        portraitFiles.push({metadata, file});
      } else {
        squareFiles.push({metadata, file});
      }
    } catch (error) {
      console.error(`Error processing file ${file}:`, error.message);
    }
  }

  console.log("Format: width / height");

  console.log("Widescreen");
  widescreenFiles.forEach(({file, metadata}) => {
    console.log(`File: ${file}: ${metadata.width}/${metadata.height}`);
  });

  console.log("Square");
  squareFiles.forEach(({file, metadata}) => {
    console.log(`File: ${file}: ${metadata.width}/${metadata.height}`);
  });

  console.log("Portrait");
  portraitFiles.forEach(({file, metadata}) => {
    console.log(`File: ${file}: ${metadata.width}/${metadata.height}`);
  });
});
