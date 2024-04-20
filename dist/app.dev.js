"use strict";

//GROUP 4
// Name:       Samuel Abraham & Sandeep Kumar
// Student id: 100870571      & 100844683
// Web Development -CSS
// Durham college
// 19/04/2024
// LAB4
// INFT2202
// Student Final assignment
var express = require('express');

var session = require('express-session');

var MongoStore = require('connect-mongo');

var mongoose = require('mongoose');

var pug = require('pug');

var animal = require('animal-list');

var routes = require('./routes/animal.router.js');

require('dotenv').config();

require('./config/passport');

var app = express();
app.use(express.urlencoded({
  extended: false
})); // Set PORT using env file or 3000 if env is not found

var PORT = process.env.PORT || 3000; // configure animal

app.use("/", animal); // Setup template engine

app.set("views", "".concat(__dirname, "/views"));
app.set("view engine", "pug"); // Define route for the home page

app.get('/', function (req, res) {
  // Render the home page view
  res.render('./animals/home', {
    pageTitle: "Home Page"
  });
}); // Listent on port

app.listen(PORT, function () {
  console.log("Port 3000");
});
//# sourceMappingURL=app.dev.js.map
