'use strict';
const Fs = require('fs');
const Path = require('path');
const Axios = require('axios');

async function downloadImage(url) {
  const path = Path.resolve(__dirname, 'image', '1.jpg');
  const writer = Fs.createWriteStream(path);

  const response = await Axios(url, {
    method: 'GET',
    responseType: 'stream',
  });

  response.data.pipe(writer);

  return new Promise((resolve, reject) => {
    writer.on('finish', resolve);
    writer.on('error', reject);
  });
}

module.exports = {
  downloadImage,
};
