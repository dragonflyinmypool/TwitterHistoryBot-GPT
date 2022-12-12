const openai = require("./openai");
const twitter = require("./twitter");

exports.getNewTeet = async () => {
  const gptResponse = await openai.getResponse();
  console.log(gptResponse);
  let tweetText = gptResponse.choices[0].text;
  console.log(tweetText);

  twitter.tweet(tweetText);
};

module.exports = exports;
