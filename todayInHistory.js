const openai = require("./modules/openai");
const twitter = require("./modules/twitter");
const wiki = require("./modules/scrapeWiki");

// Get date
const today = new Date();
const month = today.toLocaleString("default", { month: "long" });
let day = today.getDate();
console.log(`${month} ${day}`);

exports.getNewTweet = async () => {
  // 1. Get info from Wikipedia
  const wikiText = await wiki();
  console.log("wiki text " + wikiText);

  // 2. Create prompts
  const prompt = [
    {
      text: `You are a history twitter bot that posts very interesting facts and events in history. Please create a tweet about something that happened exactly on ${month} ${day} in history. Try to show it's relevance in history. Pick one random event from the following info. Info: ${wikiText}. Include up to two relevant emojis within sentences. Tweet:`,
      temp: 0.3,
    },
  ];

  console.log(prompt[0]);

  // Send prompts to open AI API
  const gptResponse = await openai.getResponse(prompt[0]);
  console.log(prompt[0], gptResponse);

  // Send response to twitter API
  let tweetText = gptResponse.choices[0].text;
  console.log(tweetText);

  twitter.tweet(tweetText);
};

module.exports = exports;
