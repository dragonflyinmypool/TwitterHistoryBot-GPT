const generalFact = require("./generalFact.js");
const todayInHistory = require("./todayInHistory.js");
const cron = require("node-cron");

const date = new Date();

// General Fact twitter post
cron.schedule("0 8,13,18 * * * ", () => {
  console.log(`Running general facts at ${date.toLocaleString()}`);
  generalFact.getNewTeet();
});

// Today in history twitter post
cron.schedule("0 12 * * * ", () => {
  console.log(`Cron runninng => Today in history at ${date.toLocaleString()}`);
  todayInHistory.getNewTeet();
});

// Today in history twitter post
cron.schedule("*/5 * * * * * ", () => {
  console.log(`Test at ${date.toLocaleString()}`);
  generalFact.getNewTeet();
  todayInHistory.getNewTeet();
});

console.log(`Cron running, started ${date.toLocaleString()}`);
