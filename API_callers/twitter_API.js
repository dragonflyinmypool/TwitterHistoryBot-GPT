const fs = require('fs');
const { TwitterApi } = require('twitter-api-v2');
require('dotenv').config();

const client = new TwitterApi({
  appKey: process.env.APP_KEY_Twitter,
  appSecret: process.env.APP_SECRET_Twitter,
  accessToken: process.env.ACCESS_TOKEN_Twitter,
  accessSecret: process.env.ACCESS_SECRET_Twitter,
});

const rwClient = client.readWrite;

exports.postTweet = async (textData) => {
  try {
    // First, post all your images to Twitter
    const mediaId = await client.v1.uploadMedia('./image/1.jpg');

    await client.v2.tweetThread([
      {
        text: textData[0],
        media: { media_ids: [mediaId] },
      },
      textData[1],
      textData[2],
    ]);

    deleteImage();
  } catch (e) {
    console.error(e);
  }
};

function deleteImage() {
  fs.unlink('./image/1.jpg', (err) => {
    if (err) {
      console.error(err);
      return;
    }
  });
}
