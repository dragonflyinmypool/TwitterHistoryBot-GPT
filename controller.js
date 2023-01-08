const { scheduleTask } = require('./helpers/cron_scheduler');
const { getHistoryText } = require('./scrappers/scrapper_API.js');
const { createPrompt } = require('./helpers/prompt.js');
const { generateTweetGPT3 } = require('./API_callers/GPT3_API.js');
const { getImageUrl } = require('./API_callers/bing_API.js');
const { downloadImage } = require('./scrappers/image_downloader.js');
const { postTweet } = require('./API_callers/twitter_API.js');

const generalBot = async () => {
  // 1. Get the article

  // Try to get the article 5 times, if it fails wait 5 minutes and try again
  let historyText = '';
  for (let i = 0; i < 5; i++) {
    try {
      historyText = await getHistoryText();
      break;
    } catch (error) {
      console.log(error);
      await new Promise((resolve) => setTimeout(resolve, 300000));
    }
  }


  console.log(historyText);
  // 2. Create the prompt
  const gpt3Prompt = createPrompt(historyText);
  // 3. Generate the tweet with GPT3 using history text
  const tweetObject = await generateTweetGPT3(gpt3Prompt);
  // 4. Get the image
  const imageURLs = await getImageUrl(tweetObject.SearchQuery);
  // 5. Download the image
  // Try to download one image, start with the first if it fails try the second, etc.
  // use await downloadImage(imageURLs[i])
  for (let i = 0; i < imageURLs.length; i++) {
    try {
      const image = await downloadImage(imageURLs[i].contentUrl);
      break;
    } catch (error) {
      console.log(error);
    }
  }
  //
  // 6. Post the tweet
  postTweet(tweetObject.tweets);
};

// cron job at 5:22pm every day

// cron at 6pm every day
// const timing = '0 22 17 * * *';
// const name = '6pm once a day';
generalBot();
// scheduleTask('5:50pm once a day', timing, generalBot);
// console.log(timing);
