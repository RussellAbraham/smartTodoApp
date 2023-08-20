/*
 * All routes for logging in are defined here
 * Since this file is loaded in server.js into /login,
 *   these routes are mounted onto /login
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

// Import required modules
const express = require("express");
const router = express.Router();
const userQueries = require("../db/queries/users");

// GET route to render the login page
router.get("/", (req, res) => {
  res.render("login");
});

// GET route to log the user (Interim solution)
router.get("/:id", (req, res) => {
  // Check if user is already logged in (cookie exists)
  if (req.cookies.user_id) {
    // Redirect to the home page
    res.redirect("/");
  } else {
    userQueries
      .getUsers()
      .then((users) => {
        const userId = parseInt(req.params.id);
        const user = users.find((u) => u.id === userId);
        if (!user) {
          res.status(404).render("error", { errorMessage: "User not found!" });
        } else {
          res.cookie("user_id", user.id);
          res.cookie("user_name", user.name);
          res.redirect("/items");
        }
      })
      .catch((err) => {
        console.error(err);
        res.status(500).render("error", { errorMessage: "An error occured!" });
      });
  }
});

// POST route to handle user authentication
router.post("/", (req, res) => {
  // implement later or delete
});

module.exports = router;
