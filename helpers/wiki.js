const axios = require('axios');
const cheerio = require('cheerio');

const url = 'https://en.wikipedia.org/wiki/Dravidian_architecture';

async function scrapeWiki() {
  try {
    const response = await axios.get(url);
    const $ = cheerio.load(response.data);

    const pageTitle = $('title').text();
    console.log(`Page Title: ${pageTitle}\n`);

    const paragraphs = $('div.mw-parser-output > p');

    let allText = '';

    paragraphs.each((index, element) => {
      const paragraphText = $(element).text();
      allText += paragraphText;
      // console.log(`Paragraph ${index + 1}: ${paragraphText}\n`);
    });

    console.log(allText);

    // cut of text after 2000 characters
    allText = allText.slice(0, 2000);

    allText = allText + 'url: ' + url;

    return allText;
  } catch (error) {
    console.error(error);
  }
}

module.exports = { scrapeWiki };

// run the function
scrapeWiki();
