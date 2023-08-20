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
});

//Updates the checked property of the item
router.get("/:id/checked", (req, res) => {
  //TODO: Implement the backend logic for updating the checked property of an item
});

//Updates the category of the item
router.get("/:id/category", (req, res) => {
  //TODO: Implement the backend logic for updating the category of an item
});

module.exports = router;
