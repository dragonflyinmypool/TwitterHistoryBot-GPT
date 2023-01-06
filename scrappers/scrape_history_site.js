const axios = require('axios');
const cheerio = require('cheerio');

console.log('Attempting to scrape history.com...');

const getHistoryText = async () => {
  const url = 'https://www.history.com/this-day-in-history';

  user_agents_list = [
    'Mozilla/5.0 (iPad; CPU OS 12_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148',
    'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.4844.83 Safari/537.36',
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.4844.51 Safari/537.36',
  ];

  HEADERS = {
    'User-Agent':
      user_agents_list[Math.floor(Math.random() * user_agents_list.length)],
    Accept:
      'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8',
    'Accept-Language': 'en-US,en;q=0.5',
    'Accept-Encoding': 'gzip, deflate',
    Connection: 'keep-alive',
    'Upgrade-Insecure-Requests': '1',
    'Sec-Fetch-Dest': 'document',
    'Sec-Fetch-Mode': 'navigate',
    'Sec-Fetch-Site': 'none',
    'Sec-Fetch-User': '?1',
    'Cache-Control': 'max-age=0',
  };

  let config = {
    headers: HEADERS,
  };

  let data;

  const response = await axios.get(url, data, config);
  const $ = cheerio.load(response.data);
  const text = $('.l-grid--content-body').text();

  console.log('---');
  console.log('1. History text scrapped: ');
  // console.log(text);
  console.log('---');

  return text;
};

module.exports = {
  getHistoryText,
};
