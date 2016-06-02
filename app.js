// Global imports
var express  = require('express');
// Import our custom created rotes
var routes  = require('./app/routes');
var app      = express();
// Configure the ports
var port     = process.env.PORT || 8080;

// Configure EJS for Express
app.set('view engine', 'ejs'); // set up ejs for templating

// Configure the routes
app.use('/', routes);

app.listen(port, function(){
    console.log('The magic happens on port ' + port);
});
