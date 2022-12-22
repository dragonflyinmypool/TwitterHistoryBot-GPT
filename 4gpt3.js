const GPT3Lib = require("openai-api");
require("dotenv").config();

// Load key
const gpt3 = new GPT3Lib(process.env.API_KEY_OpenAI);

// Call OpenAI API
exports.getResponse = async (prompt) => {
  const gpt3Response = await gpt3.complete({
    engine: "text-davinci-003",
    prompt: prompt.text,
    maxTokens: 150,
    temperature: prompt.temp,
    topP: 1,
    presencePenalty: 0,
    frequencyPenalty: 0,
    bestOf: 1,
    n: 1,
    stream: false,
  });

  //Return GPT3 reply
  return gpt3Response.data.choices[0].text;
};
