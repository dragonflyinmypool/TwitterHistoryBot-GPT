// axios require
const axios = require("axios");

async function getImage(search) {
  try {
    const response = await axios({
      method: "get",
      url: "https://api.bing.microsoft.com/v7.0/images/search?",
      headers: {
        "Ocp-Apim-Subscription-Key": "265cab104953490eb3afce7731dc077a",
      },
      params: {
        q: search,
        count: 1,
      },
    });

    return response.data.value[0].contentUrl;
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  getImage,
};
