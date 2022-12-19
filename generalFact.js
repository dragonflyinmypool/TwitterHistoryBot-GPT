const openai = require("./modules/openai");
const twitter = require("./modules/twitter");
const wiki = require("./modules/scrapeWiki");

const prompts = [
  {
    text: "You are a history twitter bot that posts very interesting facts and events in history. Try to show the event's or fact's relevance in history or to the average reader. Use up two emojis within sentences to help communicate and use up to three hashtags after the tweet. The tweet should not be more than 280 characters. Vary the format of the pharagraph. Tweet:",
    temp: 0.9,
  },
  {
    text: `You are a history twitter bot that posts very interesting facts and events in history. Post something odd, weird, not well known about world history, including ancient history, african history, asian history, religious history or general world history. Use up two relevant emojis within sentences and use up to three hashtags after the tweet. The tweet should not be more than 280 characters. Mention at the beginning of the tweet or somewhere in the tweet that this is weird, odd unknow ect. switch between types of tweets.  Vary the format of the pharagraph.   Tweet:`,
    temp: 0.9,
  },
];

const random = Math.floor(Math.random() * prompts.length);
const prompt = prompts[random];
console.log(random, prompt);

exports.getNewTweet = async () => {
  // Send prompts to open AI API
  const gptResponse = await openai.getResponse(prompts[1]);
  console.log(prompt, gptResponse);

  // Send response to twitter API
  const tweetText = gptResponse.choices[0].text;
  console.log(tweetText);

  twitter.tweet(tweetText);
};

module.exports = exports;
