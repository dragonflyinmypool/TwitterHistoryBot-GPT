const { scheduleTask } = require('./helpers/cron_scheduler');
const { getHistoryText } = require('./scrappers/scrapper_API.js');
const { createPrompt } = require('./helpers/prompt.js');
const { generateTweetGPT3 } = require('./API_callers/GPT3_API.js');
const { getImageUrl } = require('./API_callers/bing_API.js');
const { downloadImage } = require('./scrappers/image_downloader.js');
const { postTweet } = require('./API_callers/twitter_API.js');

const generalBot = async () => {
  const historyText = await getHistoryText();
  const gpt3Prompt = createPrompt(historyText);
  const tweetObject = await generateTweetGPT3(gpt3Prompt);
  const imageURLs = await getImageUrl(tweetObject.SearchQuery);

  for (let i = 0; i < imageURLs.length; i++) {
    try {
      const image = await downloadImage(imageURLs[i].contentUrl);
      break;
    } catch (error) {
      console.log(error);
    }
  }
  postTweet(tweetObject.tweets);
};

generalBot();
// const timing = '0 22 17 * * *';
// scheduleTask('5:50pm once a day', timing, generalBot);
