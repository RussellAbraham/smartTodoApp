/*
 * All routes for logging in are defined here
 * Since this file is loaded in server.js into /login,
 *   these routes are mounted onto /login
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const router  = express.Router();

//Logs the user. No password or username are required at this point.
//This route should be replaced for POST '/:id' when the proper logic is implemented.
router.get('/:id', (req, res) => {
  //TODO: Implement the Login route. The lecture notes shows how to easily do it.
}); 

module.exports = router;
