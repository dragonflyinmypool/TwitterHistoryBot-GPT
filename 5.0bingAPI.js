// get image url from bing
const axios = require('axios');

const searchTerms = 'angry stupid people in cars';

// create a new async function
const getImageUrl = async (searchTerms) => {
  // get the image url
  const image = await axios({
    method: 'get',
    url: 'https://api.bing.microsoft.com/v7.0/images/search?',
    headers: {
      'Ocp-Apim-Subscription-Key': '265cab104953490eb3afce7731dc077a',
    },
    params: {
      q: searchTerms,
      count: 1,
    },
  });
  console.log(image.data.value[0].contentUrl);
  return image.data.value[0].contentUrl;
};

// export the function
module.exports = {
  getImageUrl,
};
