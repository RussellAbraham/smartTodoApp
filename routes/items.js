/*
 * All routes for Items are defined here
 * Since this file is loaded in server.js into /items,
 *   these routes are mounted onto /items
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require("express");
const router = express.Router();
const itemQueries = require("../db/queries/items");
const classifyItem = require("./helper/classifyItem");

//Gets all the items of the logged user
router.get("/", (req, res) => {
  //TODO: Implement the backend logic for getting all the list items
  if (req.cookies.user_id) {
    //parseInt to convert the cookie id from string to a number;
    let id = parseInt(req.cookies.user_id);
    itemQueries.getUserItems(id).then((result) => {

      const loggedInUser = req.cookies;
      const itemsList = result;
      res.render("index", { loggedInUser, itemsList });
      //the template variable for the ejs goes here
      console.log(loggedInUser);
      console.log(result);
    });
  }
});

//Inserts a new item
router.post("/", (req, res) => {
  //TODO: Implement the backend logic for creating a new item in the list
  const id = parseInt(req.cookies.user_id);
  if (!id) {
    res.redirect("/");
  }

  const item = req.body.text; //error checking?

  const newItem = {
    description : req.body.text,
    // TODO : change properties to use api
    checked : 'FALSE',
    user_id : id,
    category_id : classifyItem.classifyItem(item),
  };
  itemQueries
    .addNewItem(newItem)
    .then((item) => {
      //res.redirect("/items");
      res.json(newItem);
    })
    .catch((error) => {
      console.log(error);
      res.send(error);
    });
});

//Updates the checked property of the item
router.post("/:id/checked", (req, res) => {
  let id = parseInt(req.cookies.user_id);

  if (!id) {
    res.redirect("../");
  }

  itemQueries
    .checkItem(req.body.checked, req.body.itemId)
    .then((item) => {
      res.send(item);
    })
    .catch((error) => {
      console.log(error);
      res.send(error);
    });
});

//Updates the category of the item
router.post("/:id/category", (req, res) => {
  //TODO: Implement the backend logic for updating the category of an item
});

module.exports = router;
