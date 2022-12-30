async function getImage() {
  try {
    const response = await axios({
      method: "get",
      url: "https://api.bing.microsoft.com/v7.0/images/search?",
      headers: {
        "Ocp-Apim-Subscription-Key": "265cab104953490eb3afce7731dc077a",
      },
      params: {
        q: "soviet",
        count: 1,
      },
    });
  } catch (error) {
    console.log(error);
  }
  return response.data.value[0].contentUrl;
}
