const axios = require('axios');
const cheerio = require('cheerio');

const scrapper_API = async (url) => {
  const headers = {
    apikey: process.env.ZEN_SCRAPE_API,
  };

  const options = {
    url: 'https://app.zenscrape.com/api/v1/get?&url=https://www.history.com/this-day-in-history/&render=true&premium=true',
    headers: headers,
  };

  const response = await axios(options);
  const $ = await cheerio.load(response.data);
  const text = $('.l-grid--content-body').text();
  // remove all text after "WATCH:"
  const textIndex = text.indexOf('WATCH:');
  const textTrimmed = text.slice(0, textIndex);

  console.log(`
  ----------------------------------------------------------------------
  1. History text created:
  ----------------------------------------------------------------------
  ${textTrimmed.slice(0, 300)}...
  `);

  return textTrimmed;
};

exports.scrapper_API = scrapper_API;
