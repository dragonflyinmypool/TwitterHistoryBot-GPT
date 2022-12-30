const { getText } = require("./2.0scraper.js");
const { createPrompt } = require("./2.5prompts.js");
const { cronScheduler } = require("./3cron.js");
const { getResponse } = require("./4gpt3.js");
const { axios } = require("./4.5imagescrapper.js");
const { thread } = require("./5twitter.js");

const generalBot = async () => {
  // Get the article
  const article = await getText();
  // console.log(article);

  // Create the prompt
  const prompt = await createPrompt(article);
  // console.log(prompt);

  // Create the tweet
  const gpt = await getResponse(prompt);

  console.log(gpt);

  // get the image
  const { axios } = await require("./4.5imagescrapper.js");

  // Post the tweet
  thread(gpt);
};

cronScheduler("generalBot", "0 */10 * * *", generalBot);
