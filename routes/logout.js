const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  // Clear the user's cookie by setting an expired cookie
  res.clearCookie('user');

  // Redirect the user to the login page
  res.redirect('/login');
});

module.exports = router;
