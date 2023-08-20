const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  // Clear the user's cookie by setting an expired cookie
  res.clearCookie('user_id');

  // Redirect the user to the login page
  res.redirect('/');
});

module.exports = router;
