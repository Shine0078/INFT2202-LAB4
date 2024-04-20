//GROUP 4
// Name:       Samuel Abraham & Sandeep Kumar
// Student id: 100870571      & 100844683
// Web Development -CSS
// Durham college
// 19/04/2024
// LAB4
// INFT2202
// Student Final assignment


const express = require('express');
const session = require('express-session');
const MongoStore = require('connect-mongo');
const mongoose = require('mongoose');
const pug = require('pug');
const animal = require('animal-list');
const routes = require('./routes/animal.router.js');
require('dotenv').config();
require('./config/passport');
const app = express();

app.use(express.urlencoded({ extended: false }));

// Set PORT using env file or 3000 if env is not found
const PORT = process.env.PORT || 3000;

// configure animal
app.use("/", animal);

// Setup template engine
app.set("views", `${__dirname}/views`);
app.set("view engine", "pug");

// Define route for the home page
app.get('/', (req, res) => {
    // Render the home page view
    res.render('./animals/home', {pageTitle: "Home Page"}
);
});

// Listent on port
app.listen(PORT, () => {
    console.log(`Port 3000`);
})