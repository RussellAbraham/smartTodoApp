const db = require("../connection");

const getUserItems = (id) => {
  let queryString = `SELECT items.id,
                            description,
                            checked,
                            items.category_id,
                            categories.name
                      FROM items JOIN categories ON category_id=categories.id
                      WHERE user_id = $1
                      ORDER BY items.category_id, checked, items.id`;
  let options = [id];

  return db
    .query(queryString, options)
    .then((data) => {
      return data.rows;
    })
    .catch((error) => {
      console.log("error :", error.message);
    });
};

const addNewItem = function (item) {
  let queryString = `INSERT INTO items(description,checked,user_id,category_id) values ($1,$2,$3,$4) RETURNING *`;
  //since id is serial , it will be automatically added
  //for items.category_id i think this is where weneed to check the api for the category the item falls in before inserting it into the correct category
  let options = [
    item.description,
    item.checked,
    item.user_id,
    item.category_id,
  ];
  return db
    .query(queryString, options)
    .then((result) => {
      return result.rows[0];
    })
    .catch((error) => {
      console.log("error :", error.message);
    });
};

const changeCategory = (categoryId, id) => {
  let queryString = `UPDATE items
                     SET category_id = $1
                     WHERE id = $2
                     RETURNING * `;
  let options = [categoryId, id];

  return db
    .query(queryString, options)
    .then((data) => {
      return data.rows[0];
    })
    .catch((error) => {
      console.log("error :", error.message);
    });
};

const checkItem = (checked, id) => {
  let queryString = `UPDATE items
                     SET checked = $1
                     WHERE id = $2
                     RETURNING * `;
  let options = [checked, id];

  return db
    .query(queryString, options)
    .then((data) => {
      return data.rows[0];
    })
    .catch((error) => {
      console.log("error :", error.message);
    });
};

const updateItemCategory = (itemId, newCategoryId) => {
  const queryString = 'UPDATE items SET category_id = $1 WHERE id = $2';

  return db
    .query(queryString, [newCategoryId, itemId])
    .then(() => {
      console.log('Item category updated successfully');
    })
    .catch((error) => {
      console.error('Error updating item category:', error);
      throw error;
    });
};

module.exports = { getUserItems, addNewItem, changeCategory, checkItem, updateItemCategory };
