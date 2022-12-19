const generalFacts = require("./generalFact.js");
const todayInHistory = require("./todayInHistory.js");
const cron = require("node-cron");

// General Fact twitter post
cron.schedule("0 8,13,18 * * * ", () => {
  console.log("running task at specific time");
  generalFacts.getNewTeet();
});

// Today in history twitter post
cron.schedule("0 12 * * * ", () => {
  console.log("running task at specific time");
  todayInHistory.getNewTeet();
});
