const request = require('request-promise');

const createObject = require('./createObject');

const { response } = require('express');
const { error } = require('console');

const readKey = '8ysE02L4zpcx'; //read

const classifyItem = function(query) {
  const classify = {
    method: 'POST',
    uri: 'https://api.uclassify.com/v1/tjdude/smart-classifier/classify',
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
      return error;
    });
}

module.exports = { classifyItem: classifyItem };
