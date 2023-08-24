const createObject = function(name, response) {
  const item = {
    name : name,
    category : getCategory(response[0].classification)
  }

  return item;
};

const getCategory = function(data) {
  let maxP = -1;
  let maxClassName = '';
  let allSameP = true; //if the percentage value is equal it is uncategorizable

  data.forEach(item => {
      if (item.p !== data[0].p) {
          allSameP = false;
      }

      if (item.p > maxP) {
          maxP = item.p;
          maxClassName = item.className;
      }
  });

  if (allSameP) {
      return 'uncategorized';
  }

  return maxClassName;
};

module.exports = { createObject: createObject };
