const axios = require('axios');
const cheerio = require('cheerio');

const scrapper_API = async (url) => {
  // const headers = {
  //   apikey: 'ba0ac990-8eee-11ed-9356-ad3b28196789',
  // };

  // const options = {
  //   url: 'https://app.zenscrape.com/api/v1/get?&url=https://www.history.com/this-day-in-history&location=na',
  //   headers: headers,
  // };

  // const response = await axios(options);
  // const $ = await cheerio.load(response.data);
  // const text = $('.l-grid--content-body').text();
  // // remove all text after "WATCH:"
  // const textIndex = text.indexOf('WATCH:');
  // const textTrimmed = text.slice(0, textIndex);

  console.log(`
  ----------------------------------------------------------------------
  1. History text created:
  ----------------------------------------------------------------------
  ${dummyTest.slice(0, 300)}...
  `);

  return dummyTest;
};

exports.scrapper_API = scrapper_API;

const dummyTest = `On January 9, 1493, explorer Christopher Columbus, sailing near what is now the Dominican Republic, sees three “mermaids”—in reality manatees—and describes them as “not half as beautiful as they are painted.” Six months earlier, Columbus (1451-1506) set off from Spain across the Atlantic Ocean with the Nina, Pinta and Santa Maria, hoping to find a western trade route to Asia. Instead, his voyage, the first of four he would make, led him to the Americas, or “New World.”

Mermaids, mythical half-female, half-fish creatures, have existed in seafaring cultures at least since the time of the ancient Greeks. Typically depicted as having a woman’s head and torso, a fishtail instead of legs and holding a mirror and comb, mermaids live in the ocean and, according to some legends, can take on a human shape and marry mortal men. Mermaids are closely linked to sirens, another folkloric figure, part-woman, part-bird, who live on islands and sing seductive songs to lure sailors to their deaths.

Mermaid sightings by sailors, when they weren’t made up, were most likely manatees, dugongs or Steller’s sea cows (which became extinct by the 1760s due to over-hunting). Manatees are slow-moving aquatic mammals with human-like eyes, bulbous faces and paddle-like tails. It is likely that manatees evolved from an ancestor they share with the elephant. The three species of manatee (West Indian, West African and Amazonian) and one species of dugong belong to the Sirenia order. As adults, they’re typically 10 to 12 feet long and weigh 800 to 1,200 pounds. They’re plant-eaters, have a slow metabolism and can only survive in warm water.


Manatees live an average of 50 to 60 years in the wild and have no natural predators. However, they are an endangered species. In the U.S., the majority of manatees are found in Florida, where scores of them die or are injured each year due to collisions with boats.`;
