'use strict';
const Fs = require('fs');
const Path = require('path');
const Axios = require('axios');

async function downloadImage(url) {
  const path = Path.resolve(__dirname, 'files', 'image.jpg');
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

const testUrl =
  'https://i.pinimg.com/originals/3f/66/d0/3f66d0357400f5c75412f9e46f09362b.jpg';

downloadImage(testUrl).then(console.log('Image downloaded: ' + testUrl));
