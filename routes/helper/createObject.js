/*
('To Watch');  -- ID 1
('To Eat');    -- ID 2
('To Read');   -- ID 3
('To Buy');    -- ID 4
*/


const createObject = function(name, response) {
  const categoryInfo = determineCategory(response[0].classification);

  const item = {
    name: name,
    category: categoryInfo.name,
    categoryID: categoryInfo.id,
  };

  return item;
};

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
    return { name: 'uncategorized', id: null };
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

  return { name: className, id: categoryID };
};

module.exports = { createObject: createObject };


