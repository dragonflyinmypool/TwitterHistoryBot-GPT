process.on("unhandledRejection", function (error) {
  console.error(error);
  proccess.exit();
});

const getTweet = require("./index.js");

var cron = require("node-cron");

// cron job three times a day 8am 12 noon and 6pm
cron.schedule("0 8,12,18 * * *", () => {
  console.log("running task at specific time");
  getTweet.getNewTeet();
});

// // cron job for every hour
// cron.schedule("* * * * * *", () => {
//   console.log("running task every min");
//   getTweet.getNewTeet();
// });
