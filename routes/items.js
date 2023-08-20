/*
 * All routes for Items are defined here
 * Since this file is loaded in server.js into /items,
 *   these routes are mounted onto /items
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require("express");
const router = express.Router();
const itemQueries = require("../db/queries/items");

//Gets all the items of the logged user
router.get("/", (req, res) => {
  //TODO: Implement the backend logic for getting all the list items
  if (req.cookies.user_id) {
    //parseInt to convert the cookie id from string to a number;
    let id = parseInt(req.cookies.user_id);
    itemQueries.getUserItems(id).then((result) => {
      console.log("result :", result);
      //the template variable for the ejs goes here
    });
  }
});

//Inserts a new item
router.post("/", (req, res) => {
  //TODO: Implement the backend logic for creating a new item in the list
  let id = parseInt(req.cookies.user_id);
  if (!id) {
    res.redirect("/");
  }
  const newItem = req.body;
  newItem.user_id = id;
  itemQueries
    .addNewItem(newItem)
    .then((item) => {
      res.send(item);
    })
    .catch((error) => {
      console.log(error);
      res.send(error);
    });
});

//Updates the checked property of the item
router.get("/:id/checked", (req, res) => {
  //TODO: Implement the backend logic for updating the checked property of an item
});

//Updates the category of the item
router.get("/:id/category", (req, res) => {
  let id = parseInt(req.cookies.user_id);

  if (!id) {
    res.redirect("../");
  }

  itemQueries
    //TODO: Depending on how the front end was implemented (drag & drop or a button), the parameter names may change
    .changeCategory(req.body.categoryId, req.body.itemId)
    .then((item) => {
      res.send(item);
    })
    .catch((error) => {
      console.log(error);
      res.send(error);
    });

  //TODO: Depending on how the front end was implemented, this function should redirect or render another page.
});

module.exports = router;
