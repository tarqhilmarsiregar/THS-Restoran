const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const target = path.resolve(__dirname, 'src/public/images/heros');
const destination = path.resolve(__dirname, 'dist/images/heros');

if (!fs.existsSync(destination)) {
  fs.mkdirSync(destination);
}

fs.readdirSync(target)
  .forEach((image) => {
    // mengubah ukuran gambar dengan lebar 1445px, dengan prefix -large.jpg
    sharp(`${target}/${image}`)
      .resize(1445)
      .toFile(path.resolve(
        __dirname,
        `${destination}/${image.split('.').slice(0, -1).join('.')}-large.jpg`,
      ));

    // mengubah ukuran gambar dengan lebar 1445px, dengan prefix -large.webp
    sharp(`${target}/${image}`)
      .resize(1445)
      .toFile(path.resolve(
        __dirname,
        `${destination}/${image.split('.').slice(0, -1).join('.')}-large.webp`,
      ));

    // mengubah ukuran gambar dengan lebar 475px, dengan prefix -small.jpg
    sharp(`${target}/${image}`)
      .resize(475)
      .toFile(path.resolve(
        __dirname,
        `${destination}/${image.split('.').slice(0, -1).join('.')}-small.jpg`,
      ));

    // mengubah ukuran gambar dengan lebar 475px, dengan prefix -small.webp
    sharp(`${target}/${image}`)
      .resize(475)
      .toFile(path.resolve(
        __dirname,
        `${destination}/${image.split('.').slice(0, -1).join('.')}-small.webp`,
      ));
  });
