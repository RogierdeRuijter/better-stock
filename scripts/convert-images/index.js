import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";

export const convert = () => {
  const baseFolderPath = `./assets`;
  const originalsFolderPath = path.join(baseFolderPath, "originals");
  const convertedFolderPath = path.join(baseFolderPath, "processed");
  const outputFolderPath = path.join(baseFolderPath, "transformed");
  const sizes = [2400];

  console.log(path.basename(process.cwd()));

  // Create output folder if it doesn't exist
  if (!fs.existsSync(outputFolderPath)) {
    fs.mkdirSync(outputFolderPath, { recursive: true });
  }

  // Create converted folder if it doesn't exist
  if (!fs.existsSync(convertedFolderPath)) {
    fs.mkdirSync(convertedFolderPath, { recursive: true });
  }

  // Create output folder if it doesn't exist
  if (!fs.existsSync(originalsFolderPath)) {
    fs.mkdirSync(originalsFolderPath, { recursive: true });
  }

  console.log("Converting images...");
  console.log("Originals folder:", originalsFolderPath);
  console.log("Output folder:", outputFolderPath);
  console.log("Converted folder:", convertedFolderPath);

  // Get list of files in input folder
  fs.readdir(originalsFolderPath, (err, files) => {
    if (err) {
      console.error("Error reading input folder:", err);
      return;
    }

    // Filter only .png and .jpg files
    const imageFiles = files.filter(
      (file) =>
        path.extname(file).toLowerCase() === ".png" ||
        path.extname(file).toLowerCase() === ".jpg",
    );

    console.log("image files found:", imageFiles);
    // Iterate through each images
    imageFiles.forEach((file) => {
      const inputFilePath = path.join(originalsFolderPath, file);

      sizes.forEach((size) => {
        // Convert image to JPEG
        /*
        sharp(inputFilePath)
          .resize({ width: size })
          .jpeg()
          .toFile(
            path.join(
              outputFolderPath,
              `${path.parse(file).name}_${size}px.jpg`,
            ),
            (err, info) => {
              if (err) {
                console.error(`Error converting ${file} to JPEG:`, err);
              } else {
                console.log(`Converted ${file} to JPEG:`, info);
              }
            },
          );
        */

        // Convert image to AVIF
        sharp(inputFilePath)
          .resize({ width: size })
          .avif()
          .toFile(
            path.join(
              outputFolderPath,
              `${path.parse(file).name}_${size}px.avif`,
            ),
            (err, info) => {
              if (err) {
                console.error(`Error converting ${file} to AVIF:`, err);
              } else {
                console.log(`Converted ${file} to AVIF:`, info);
              }
            },
          );
      });
    });

    fs.readdir(originalsFolderPath, (err, files) => {
      if (err) {
        console.error("Error reading input folder:", err);
        return;
      }

      const imageFiles = files.filter(
        (file) =>
          path.extname(file).toLowerCase() === ".png" ||
          path.extname(file).toLowerCase() === ".jpg",
      );

      imageFiles.forEach((file) => {
        const inputFilePath = path.join(originalsFolderPath, file);

        fs.renameSync(inputFilePath, path.join(convertedFolderPath, file));
      });
    });
  });
};

convert();
