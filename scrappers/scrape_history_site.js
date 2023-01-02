const axios = require('axios');
const cheerio = require('cheerio');

const getHistoryText = async () => {
  const response = await axios.get(
    'https://www.history.com/this-day-in-history'
  );
  const $ = cheerio.load(response.data);
  const text = $('.l-grid--content-body').text();

  console.log('---');
  console.log('1. History text scrapped: ');
  console.log(text);
  console.log('---');

  return text;
};

module.exports = {
  getHistoryText,
};
