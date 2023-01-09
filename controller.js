const { scheduleTask } = require('./helpers/cron_scheduler');
const { getHistoryText } = require('./scrappers/scrapper_API.js');
const { createPrompt } = require('./helpers/prompt.js');
const { generateTweetGPT3 } = require('./API_callers/GPT3_API.js');
const { getImageUrl } = require('./API_callers/bing_API.js');
const { downloadImage } = require('./scrappers/image_downloader.js');
const { postTweet } = require('./API_callers/twitter_API.js');

const generalBot = async () => {
  // 1. Get article from history.com with zenscrape API
  const historyText = await getHistoryText();
  // 2. Create the prompt with text and history.com article
  const gpt3Prompt = createPrompt(historyText);
  // 3. Send prompt to GPT3 and save response (3 tweets, 1 search query)
  const tweetObject = await generateTweetGPT3(gpt3Prompt);
  // 4. Send the search query to Bing Image search API and save 5 urls
  const imageURLs = await getImageUrl(tweetObject.SearchQuery);
  // 5. Try downloading an image, keep trying untill one is succesful
  for (let i = 0; i < imageURLs.length; i++) {
    try {
      const image = await downloadImage(imageURLs[i].contentUrl);
      break;
    } catch (error) {
      console.log(error);
    }
  }
  // Post the 3 tweets and the image to
  postTweet(tweetObject.tweets);
};

generalBot();
// const timing = '0 22 17 * * *';
// scheduleTask('5:50pm once a day', timing, generalBot);
