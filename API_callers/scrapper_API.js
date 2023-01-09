const axios = require('axios');
const cheerio = require('cheerio');

exports.downloadImage = async (url) => {
  const headers = {
    apikey: 'ba0ac990-8eee-11ed-9356-ad3b28196789',
  };

  const options = {
    url: 'https://app.zenscrape.com/api/v1/get?&url=https://www.history.com/this-day-in-history&location=na&premium=true',
    headers: headers,
  };

  const response = await axios(options);
  const $ = await cheerio.load(response.data);
  const text = $('.l-grid--content-body').text();

  return text;
};
