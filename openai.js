const OpenAI = require("openai-api");
require("dotenv").config();

// Load your key from an environment variable or secret management service
// (do not include your key directly in your code)
const openai = new OpenAI(process.env.API_KEY_OpenAI);

exports.getResponse = async () => {
  const gptResponse = await openai.complete({
    engine: "text-davinci-003",
    prompt:
      "You are a history twitter bot that posts very interesting facts and events in history everyday. Tweet:",
    maxTokens: 150,
    temperature: 0.9,
    topP: 1,
    presencePenalty: 0,
    frequencyPenalty: 0,
    bestOf: 1,
    n: 1,
    stream: false,
  });

  return gptResponse.data;
};
