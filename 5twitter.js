const { TwitterApi } = require("twitter-api-v2");
require("dotenv").config();

const client = new TwitterApi({
  appKey: process.env.APP_KEY_Twitter,
  appSecret: process.env.APP_SECRET_Twitter,
  accessToken: process.env.ACCESS_TOKEN_Twitter,
  accessSecret: process.env.ACCESS_SECRET_Twitter,
});

const rwClient = client.readWrite;

exports.tweet = async (textData) => {
  try {
    await rwClient.v2.tweet(textData);
  } catch (e) {
    console.error(e);
  }
};
