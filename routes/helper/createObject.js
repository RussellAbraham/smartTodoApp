/*
('To Watch');  -- ID 1
('To Eat');    -- ID 2
('To Read');   -- ID 3
('To Buy');    -- ID 4
*/
function getKeywordID(keyword) {
  const keywordsToIDs = {
    'watch': 1,
    'eat': 2,
    'read': 3,
    'buy': 4,
    'purchase': 4
  };

  return keywordsToIDs[keyword.toLowerCase()] || null;
}

const determineCategory = function(data) {
  let maxP = -1;
  let maxClassName = '';
  let allSameP = true; // If the percentage value is equal, it is uncategorizable

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
    return { query: 'uncategorized', id: null };
  }

  return getCategoryInfo(maxClassName);
};

const getCategoryInfo = function(className) {
  let categoryID;

  if (className === 'To_Watch') {
    categoryID = 1;
  } else if (className === 'To_Eat') {
    categoryID = 2;
  } else if (className === 'To_Read') {
    categoryID = 3;
  } else if (className === 'To_Buy') {
    categoryID = 4;
  }

  return { query: className, id: categoryID };
};

const createObject = function(query, response) {
  const firstWord = query.trim().split(' ')[0];
  const categoryID = getKeywordID(firstWord);

  if (categoryID !== null) {
    return {
      query: query,
      category: firstWord,
      categoryID: categoryID
    };
  } else {
    const categoryInfo = determineCategory(response[0].classification);

    const item = {
      query: query,
      category: categoryInfo.query,
      categoryID: categoryInfo.id,
    };

    return item;
  }
};


module.exports = { createObject: createObject };


