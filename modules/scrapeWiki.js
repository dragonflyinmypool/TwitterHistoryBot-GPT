const cheerio = require("cheerio");
const axios = require("axios");

const getOnThisDay = async () => {
  let pageContent;

  try {
    const response = await axios.get("https://en.wikipedia.org/wiki/Main_Page");
    pageContent = response.data;
  } catch (err) {
    console.error(err);
  }

  const $ = cheerio.load(pageContent);

  const onThisDay = $("h2")
    .filter((i, el) => $(el).text() === "On this day")
    .next()
    .text()
    .replace(/<(?:.|\n)*?>/gm, "")
    .split("More anniversaries")[0];

  return onThisDay;
};

// getOnThisDay();
module.exports = getOnThisDay;
