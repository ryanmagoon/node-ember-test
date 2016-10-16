// modules
const express = require('express');
const app = express();

// set our port
var port = process.env.PORT || 3000;

// set the static files location
app.use(express.static(__dirname + '/public'));

require('./app/routes')(app); // configure our routes

// start up our app at http://localhost:3000
app.listen(port);



// expose app
exports = module.exports = app;
