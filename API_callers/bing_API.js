const axios = require('axios');

exports.bing_API = async (searchTerms) => {
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

  console.log(`
  ----------------------------------------------------------------------
  3. Pulled urls from Bing 
  ----------------------------------------------------------------------
  
  ${image.data.value}`);

  // Return the image urls
  return image.data.value;
};
