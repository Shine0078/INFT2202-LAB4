//GROUP 4
// Name:       Samuel Abraham & Sandeep Kumar
// Student id: 100870571      & 100844683
// Web Development -CSS
// Durham college
// 19/04/2024
// LAB4
// INFT2202
// Student Final assignment


// Require the express library and assign it to the constant 'express'
const express = require('express');

// Require specific functions from the 'animal.controller.js' file and assign them to variables
const { 
    View_All_Animal, 
    EntryForm, 
    SubmitForm, 
    Upload_Edit_Animal_Data, 
    Update_All_Animal, 
    Delete_Animal 
} = require('../controllers/animal.controller.js');

// Create a router using the express.Router() method
const router = express.Router();

// Define a route to display all animals when the user navigates to the '/animal-list' page
router.get('/animal-list', View_All_Animal);

// Define a route to display the entry form when the user navigates to the '/Entry-Form' page
router.get('/Entry-Form', EntryForm);

// Define a route to handle form submission when the user submits the entry form
router.post('/Entry-Form', SubmitForm);

// Define a route to handle uploading and editing animal data
router.post('/Upload-animal', Upload_Edit_Animal_Data);

// Define a route to handle updating animal details
router.post('/update-animal-list', Update_All_Animal);

// Define a route to handle deleting an animal
router.post('/Animal-Delete', Delete_Animal);

// Export the router to be used in other files
module.exports = router;
