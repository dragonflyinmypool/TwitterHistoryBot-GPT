const getTweet = require("./index.js");

var cron = require("node-cron");

// cron job three times a day 8am 12 noon and 6pm
cron.schedule("0 12 * * *", () => {
  console.log("running task at specific time");
  getTweet.getNewTeet();
});
