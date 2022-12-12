process.on("unhandledRejection", function (error) {
  console.error(error);
  proccess.exit();
});

const getTweet = require("./index.js");

var cron = require("node-cron");

// cron job twice a day once at 8am and once at 8pm
cron.schedule("0 8,20 * * *", () => {
  console.log("running task at specific time");
  getTweet.getNewTeet();
});
