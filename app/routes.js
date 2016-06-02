// Global imports
var routes = require('express').Router();

// Home page route
routes.get('/', function(req, res) {
  res.render('index');
});

// About page route
routes.get('/about', function(req, res) {
  res.render('about');
});

// About page route with parameters
routes.get('/about/:name', function(req, res) {
  // Get the request parameters
  var username = req.params.name;
  // Send the respose to the page
  res.render('about', {name : username});
});

// Contact page route
routes.get('/contact', function(req, res) {
  res.render('contact');
});

// Export the module
module.exports = routes;
