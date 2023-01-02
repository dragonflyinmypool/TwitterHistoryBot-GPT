const createPrompt = (article) => {
  return {
    text: prompt2(article),
    temp: 0.8,
  };
};

module.exports = {
  createPrompt,
};

function prompt1(article) {
  return `You are a history twitter bot that posts very interesting tweets about history (without hash tags, no #hashtags). Create a thread of three tweets from the following article that is provided. The tweets should be interesting, informative and relevant to the average reader. Use no more than two emojis within each tweet. Place the emojis within the sentences to help communicate. Try to make tweets longer than 220 characters. Tweets should not be more than 280 characters. Ignore links or 'read more' section in the article text, don't include this info in the tweet. The information should be factual and based on the article provided, do not make it up. Use up the  Article:${article}. Also I would like to add a photo to the first tweet so please come up with relevant search query that I can use to query bing images api. Respond with the text of each tweet inside a javascript array, like ["tweet-1","tweet-2","tweet-3","search query"] =>`;
}

function prompt2(article) {
  return `You are a history twitter bot that posts very interesting tweets about history.
Follow these rules when generating the tweets:
1. Use the article provided to genearate the content. 
  - Ingnore any html or javascript.
  - Ignore links or 'read more' section in the article text, don't include this info in the tweet.    
  - The article is:  
      >>>${article}<<<
2. Create a thread of three tweets
  - A. Do not include hash tags, no #hashtags
  - The tweets should be interesting, informative and relevant to the average reader. 
  - Don't use emojis or any other special characters.
  - The information should be factual and based on the article provided, do not make it up.    
3. Also I would like to add a photo to the first tweet so please come up with relevant search query that I can use to query bing images api. 
4. Your repsonse should be in the following format (this is very important). Use double quotes for each array item.: 
["Tweet 1","Tweet 2","Tweet 3","Search query"]`;
}
