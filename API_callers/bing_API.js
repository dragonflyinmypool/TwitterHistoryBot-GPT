const axios = require('axios');

exports.getImageUrl = async (searchTerms) => {
  // get 5 image urls
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

  // Return the image urls
  return image.data.value;
};
