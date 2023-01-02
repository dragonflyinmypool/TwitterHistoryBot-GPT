const cron = require("node-cron");

const date = new Date();
console.log(`Cron running, started ${date.toLocaleString()}`);

exports.cronScheduler = (name, timing, f) => {
  cron.schedule(timing, () => {
    // Log the time and task name
    console.log(`Cron runninng => ${name} => ${date.toLocaleString()}`);

    // Run the function
    f();
  });
};
