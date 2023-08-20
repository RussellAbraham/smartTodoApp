/*
 * All routes for logging in are defined here
 * Since this file is loaded in server.js into /login,
 *   these routes are mounted onto /login
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

// Import required modules
const express = require('express');
const http = require('http'); // Import the http module
const router = express.Router();

// GET route to render the login page
router.get('/', (req, res) => {
  // Check if user is already logged in (cookie exists)
  if (req.cookies.user) {
    // Redirect to the home page
    res.redirect('/');
  } else {
    res.locals.title = 'Smart Todo Login';
    res.render('login');
  }
});

// POST route to handle user authentication
router.post('/', (req, res) => {
  const username = req.body.username;

  try {
    // Create an HTTP request to fetch user data
    const requestOptions = {
      hostname: 'localhost',
      port: 8080,
      path: '/api/users',
      method: 'GET'
    };

    // Make an HTTP request
    const httpRequest = http.request(requestOptions, (httpResponse) => {
      let data = '';

      // Collect response data in chunks
      httpResponse.on('data', (chunk) => {
        data += chunk;
      });

      // Once all data is received
      httpResponse.on('end', () => {
        try {
          const jsonData = JSON.parse(data);
          const users = jsonData.users;

          // Find the user based on the provided username
          const user = users.find(u => u.name === username);
          if (!user) {
            // User not found, show an error message
            res.locals.title = 'Smart Todo Login';
            res.render('login', { errorMessage: 'User not found!' });
          } else {
            // Set a cookie for the logged-in user and redirect
            res.cookie('user', user.name);
            res.redirect('/');
          }
        } catch (error) {
          // Handle JSON parsing errors
          console.error(error);
          res.status(500).render('error', { errorMessage: 'An error occurred' });
        }
      });
    });

    // Handle HTTP request errors
    httpRequest.on('error', (error) => {
      console.error(error);
      res.status(500).render('error', { errorMessage: 'An error occurred' });
    });

    // Send the HTTP request
    httpRequest.end();
  } catch (error) {
    // Handle unexpected errors
    console.error(error);
    res.status(500).render('error', { errorMessage: 'An error occurred' });
  }
});

module.exports = router;
