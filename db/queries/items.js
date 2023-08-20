const db = require("../connection");

const getUserItems = (id) => {
  let queryString = `SELECT categories.name,description FROM items JOIN categories ON category_id=categories.id WHERE user_id = $1 GROUP BY categories.name,description`;
  let options = [id];

  return db
    .query(queryString, options)
    .then((data) => {
      return data.rows;
    })
    .catch((error) => {
      console.log(error.message);
    });
};

module.exports = { getUserItems };
