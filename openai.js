const OpenAI = require("openai-api");
require("dotenv").config();

// Load your key from an environment variable or secret management service
// (do not include your key directly in your code)
const openai = new OpenAI(process.env.API_KEY_OpenAI);

exports.getResponse = async () => {
  const gptResponse = await openai.complete({
    engine: "text-davinci-003",
    prompt:
      "Create a tweet for a character called Azazel who is based on the Angel in the bible. He is a trouble maker, likes to have fun and tweets short stories in poetic form. Talk about enjoyments of life (pick a random food, activity). Limit tweet to 280 characters. Tweet:'",
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
