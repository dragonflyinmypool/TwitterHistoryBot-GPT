const { cron_scheduler } = require('./helpers/cron_scheduler');
const { scrapper_API } = require('./API_callers/scrapper_API.js');
const { prompt } = require('./helpers/prompt.js');
const { GPT3_API } = require('./API_callers/GPT3_API.js');
const { bing_API } = require('./API_callers/bing_API.js');
const { image_downloader } = require('./helpers/image_downloader.js');
const { twitter_API } = require('./API_callers/twitter_API.js');

const generalBot = async () => {
  // 1. Get article from history.com with zenscrape API
  const historyText = await scrapper_API();
  // 2. Create the prompt with text and history.com article
  const gpt3Prompt = prompt(historyText);
  // // 3. Send prompt to GPT3 and save response (3 tweets, 1 search query)
  const tweetObject = await GPT3_API(gpt3Prompt);
  // // 4. Send the search query to Bing Image search API and save 5 urls
  const imageURLs = await bing_API(tweetObject.SearchQuery);
  // // 5. Try downloading an image, keep trying untill one is succesful`
  for (let i = 0; i < imageURLs.length; i++) {
    try {
      const image = await image_downloader(imageURLs[i].contentUrl);
      console.log('=== Image downloaded succesfully  ===');
      break;
    } catch (error) {
      console.log(error);
    }
  }
  // // Post the 3 tweets and the image to
  twitter_API(tweetObject.tweets);
};

generalBot();
// const timing = '0 22 17 * * *';
// cron_scheduler('5:50pm once a day', timing, generalBot);
