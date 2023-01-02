const GPT3Lib = require('openai-api');
require('dotenv').config();

// Load key
const gpt3 = new GPT3Lib(process.env.API_KEY_OpenAI);

// Call OpenAI API
exports.generateTweetGPT3 = async (prompt) => {
  const gpt3Response = await gpt3.complete({
    engine: 'text-davinci-003',
    prompt: prompt.text,
    maxTokens: 350,
    temperature: prompt.temp,
    topP: 1,
    presencePenalty: 0,
    frequencyPenalty: 0,
    bestOf: 1,
    n: 1,
    stream: false,
  });

  const thread = stringToArray(gpt3Response.data.choices[0].text);
  //Return GPT3 reply
  return thread;
};

// convert string to array ["string 1","string 2","string 3"]
function stringToArray(gpt) {
  const arr = JSON.parse(gpt);
  return arr;
}
