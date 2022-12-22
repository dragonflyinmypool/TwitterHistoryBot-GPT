const { prompts } = require("./2prompts.js");
const { cronScheduler } = require("./3cron.js");
const { getResponse } = require("./4gpt3.js");
const { tweet } = require("./5twitter.js");

const generalBot = async () => {
  const gpt = await getResponse(prompts[0]);
  console.log(gpt);
  tweet(gpt);
};

cronScheduler("generalBot", "0 8,14,18 * * * ", generalBot);
