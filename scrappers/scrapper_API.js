const axios = require('axios');
const cheerio = require('cheerio');

// .then((response) => {
//
// });
const url =
  'https://app.zenscrape.com/api/v1/get?&url=https://www.history.com/this-day-in-history';
const apikey = 'ba0ac990-8eee-11ed-9356-ad3b28196789';

// create an async function with axios that 'get' the API

const getHistoryText = async () => {
  try {
    const reponse = await axios.get(url, { headers: { apikey: apikey } });

    const $ = cheerio.load(reponse.data);
    const text = $('.l-grid--content-body').text();
    return text;
  } catch (error) {
    console.log(error);
  }
};
