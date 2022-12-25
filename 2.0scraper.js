const axios = require("axios");
const cheerio = require("cheerio");

const getText = async () => {
  const response = await axios.get(
    "https://www.history.com/this-day-in-history"
  );
  const $ = cheerio.load(response.data);
  const text = $(".l-grid--content-body").text();
  return text;
};

module.exports = {
  getText,
};
