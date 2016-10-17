// modules
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// set our port
var port = process.env.PORT || 3000;

// set up mongoose, assume it is locally installed
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/RESTServer');

// set the static files location for our Ember application
app.use(express.static(__dirname + '/public'));

// bodyParser middleware to allow different encoding requests
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());  // to support JSON-encoded bodies

// Routes API
const router = express.Router();
app.use('/', router);
require('./app/routes')(router); // configure our routes

// start up our app at http://localhost:3000
app.listen(port);



// expose app
exports = module.exports = app;
