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
  const id = parseInt(req.cookies.user_id);
  if (!id) {
    res.redirect("/");
    return;
  }

  const item = req.body.text;

  classifyItem.classifyItem(item, (error, category_id) => { //use callback based request
    if (error) {
      console.error('error classifying item :', error);
      res.status(500).send('error classifying item');
      return;
    }

    const newItem = {
      description: req.body.text,
      checked: false,
      user_id: id,
      category_id: category_id,
    };

    itemQueries
      .addNewItem(newItem)
      .then((item) => {
        //res.json(newItem);
        res.redirect('/items');
      })
      .catch((error) => {
        console.error('Error adding new item:', error);
        res.status(500).send('Error adding new item');
      });
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
//Updates the category of the item
router.post("/:id/category", (req, res) => {
  const itemId = req.params.id;
  const newCategoryId = req.body.category_id; // Assuming you're sending the new category_id in the request body

  itemQueries.updateItemCategory(itemId, newCategoryId)
    .then(() => {
      res.sendStatus(200);
    })
    .catch((error) => {
      console.error(error);
      res.sendStatus(500);
    });
});


module.exports = router;
