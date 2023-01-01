// axios require
const axios = require('axios');
const fs = require('fs');

async function getImage(search) {
  try {
    const response = await axios({
      method: 'get',
      url: 'https://api.bing.microsoft.com/v7.0/images/search?',
      headers: {
        'Ocp-Apim-Subscription-Key': '265cab104953490eb3afce7731dc077a',
      },
      params: {
        q: search,
        count: 1,
      },
    });
    // download the image
    const image = await axios({
      method: 'get',
      url: response.data.value[0].contentUrl,
      responseType: 'stream',
    });
    // save the image
    image.data.pipe(fs.createWriteStream(`./image/1.jpg`));
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  getImage,
};
