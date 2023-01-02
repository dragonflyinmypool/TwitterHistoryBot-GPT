const { cronScheduler } = require('./1.5cron.js');
const { getText } = require('./2.0scraper.js');
const { createPrompt } = require('./4.0prompts.js');
const { getResponse } = require('./4.5gpt3.js');
const { getImageUrl } = require('./5.0BingAPI.js');
const { downloadImage } = require('./5.5DownloadImage.js');
const { thread } = require('./6.0twitter.js');

const generalBot = async () => {
  // Get the article
  const article = await getText();
  // console.log(article);

  // Create the prompt
  const prompt = await createPrompt(article);
  // console.log(prompt);

  // Create the tweet
  const gpt = await getResponse(prompt);
  console.log('Gpt out put:');
  console.log(gpt);

  // get the image
  const imageURL = await getImageUrl(gpt[3]);
  console.log('Image: ');
  console.log(imageURL);

  // Download the image
  const image = await downloadImage(imageURL);

  // Post the tweet
  thread(gpt);
};

// cronScheduler("generalBot", "0 */10 * * *", generalBot);
generalBot();
