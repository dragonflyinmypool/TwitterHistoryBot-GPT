const { TwitterApi } = require("twitter-api-v2");

const client = new TwitterApi({
  appKey: "1M1fAHrxhPwMgse0aFcs07Dtg",
  appSecret: "ACeqT9DPtNZs6sBn49ET76RwT7rQGPkDiW07e90gScT31ttPtt",
  accessToken: "1600485454456946694-cc9Qu5JCCUCVWbIouVrwx6Fks9X0dZ",
  accessSecret: "KVo0Tu2QUk7Ueo9oFpUm5rnvl1dPUkF3MVL0mid61ly0E",
});

const rwClient = client.readWrite;

exports.tweet = async (textData) => {
  try {
    await rwClient.v2.tweet(textData);
  } catch (e) {
    console.error(e);
  }
};
