const request = require('request-promise');

const createObject = require('./createObject');

//const process = require('process'); //for testing
const { response } = require('express');
const { error } = require('console');

const readKey = '8ysE02L4zpcx'; //read

//const QUERY = process.argv[2]; //for testing

const classifyItem = function(query) {
  const classify = {
    method: 'POST',
    uri: 'https://api.uclassify.com/v1/tjdude/smart-classifier/classify', //or /keywords
    headers: {
      Authorization: `Token ${readKey}`,
      'Content-Type': 'application/json',
    },
    json: true,
    body: {
      texts: [`${query}`]
      ,
    },
  };

  request(classify)
    .then((response) => {
      const item = createObject.createObject(query,response);
      return item.categoryID;
    })
    .catch((error) => {
      console.error('Error:', error);
    });
}

module.exports = { classifyItem: classifyItem };
