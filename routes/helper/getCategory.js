const request = require('request');

const API_KEY ='AIzaSyDF2g-IEWqr1Wc31dhYikJsbwEw9QgbyKo';

const QUERY = 'The Boys'

const API_URL = `https://kgsearch.googleapis.com/v1/entities:search?query=${encodeURIComponent(QUERY)}&key=${API_KEY}&limit=1&indent=True`;


request(API_URL, (error, response, body) => {
  if (error) {
    console.error(error);
  } else {
    const data = JSON.parse(body);
    console.log(JSON.stringify(data));
  }
});
