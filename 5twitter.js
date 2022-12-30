const { TwitterApi } = require("twitter-api-v2");
require("dotenv").config();

const client = new TwitterApi({
  appKey: process.env.APP_KEY_Twitter,
  appSecret: process.env.APP_SECRET_Twitter,
  accessToken: process.env.ACCESS_TOKEN_Twitter,
  accessSecret: process.env.ACCESS_SECRET_Twitter,
});

const rwClient = client.readWrite;

exports.thread = async (textData) => {
  try {
    await client.v2.tweetThread([textData[0], textData[1], textData[2]]);
  } catch (e) {
    console.error(e);
  }
};
