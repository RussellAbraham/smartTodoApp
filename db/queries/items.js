const db = require("../connection");

const getUserItems = () => {
  let queryString =
    "SELECT categories.name,description FROM items JOIN categories ON category_id=categories.id WHERE user_id = 3 GROUP BY categories.name,description;";

  return db.query(queryString).then((data) => {
    return data.rows;
  });
};

module.exports = { getUserItems };
