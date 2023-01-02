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
      'Ocp-Apim-Subscription-Key': process.env.BING_API_KEY,
    },
    params: {
      q: searchTerms,
      count: 5,
    },
  });
  // console.log(image.data.value);
  return image.data.value;
};

// export the function
module.exports = {
  getImageUrl,
};
