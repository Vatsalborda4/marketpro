const fs = require('fs');
const sharp = require('sharp');
const path = require('path');

const inputFolder = './images'; // ✅ Ensure this folder exists and has .png files

fs.readdirSync(inputFolder).forEach(file => {
  if (path.extname(file).toLowerCase() === '.png') {
    const inputPath = path.join(inputFolder, file);
    const outputPath = path.join(inputFolder, path.basename(file, '.png') + '.webp');

    sharp(inputPath)
      .toFile(outputPath)
      .then(() => {
        console.log(`Converted: ${file} -> ${path.basename(outputPath)}`);
        fs.unlinkSync(inputPath); // ✅ delete the original .png
      })
      .catch(err => console.error(`Error converting ${file}:`, err));
  }
});
