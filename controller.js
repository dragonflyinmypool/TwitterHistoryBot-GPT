const { scheduleTask } = require('./helpers/cron_scheduler');
const { getHistoryText } = require('./scrappers/scrape_history_site.js');
const { createPrompt } = require('./helpers/prompt.js');
const { generateTweetGPT3 } = require('./API_callers/GPT3_API.js');
const { getImageUrl } = require('./API_callers/bing_API.js');
const { downloadImage } = require('./scrappers/image_downloader.js');
const { postTweet } = require('./API_callers/twitter_API.js');

const generalBot = async () => {
  // 1. Get the article
  const historyText = await getHistoryText();
  // 2. Create the prompt
  const gpt3Prompt = createPrompt(historyText);
  // 3. Generate the tweet with GPT3 using history text
  const tweetArray = await generateTweetGPT3(gpt3Prompt);
  // 4. Get the image
  const imageURL = await getImageUrl(tweetArray[3]);
  // 5. Download the image
  const image = await downloadImage(imageURL);
  // 6. Post the tweet
  postTweet(tweetArray);
};

// scheduleTask("generalBot", "0 */10 * * *", generalBot);
generalBot();
