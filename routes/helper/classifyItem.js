const request = require('request');


const createObject = require('./createObject');

const { response } = require('express');
const { error } = require('console');

const readKey = '8ysE02L4zpcx'; //read

const classifyItem = function(query, callback) {
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

  request(classify, (error, response, body) => {
    if (error) {
      console.error('Error:', error);
      callback(error, null);
      return;
    }

    const item = createObject.createObject(query, body);
    const id = item.categoryID;
    callback(null, id);
  });
}

module.exports = { classifyItem: classifyItem };
