//GROUP 4
// Name:       Samuel Abraham & Sandeep Kumar
// Student id: 100870571      & 100844683
// Web Development -CSS
// Durham college
// 19/04/2024
// LAB4
// INFT2202
// Student Final assignment

const mongoose = require('mongoose');
require('dotenv').config();

// Connect to database
mongoose.Promise = global.Promise;
mongoose.connect(process.env.DB_STRING);

// Create schema variable
let Schema = mongoose.Schema;
// Define a new schema for the animal data
let animalSchema = new Schema(
    {
        // Define a field for the zoo where the animal resides
        zoo: {
            type: String,
            required: true
        },
        // Define a field for the scientific name of the animal
        scientificName: {
            type: String,
            required: true
        },
        // Define a field for the common name of the animal
        commonName: {
            type: String,
            required: true
        },
        // Define a field for the given name of the animal
        givenName: {
            type: String,
            required: true
        },
        // Define a field for the gender of the animal
        gender: {
            type: String,
            required: true
        },
        // Define a field for the date of birth of the animal
        dateOfBirth: {
            type: Date,
            required: true
        },
        // Define a field for the age of the animal
        age: {
            type: Number,
            required: true
        },
        // Define a field for whether the animal is transportable or not
        isTransportable: {
            type: Boolean,
            required: true
        }
    },
    // Specify additional options for the schema, such as collection name
    {
        collection: 'animals'
    }
);



module.exports.Animal = mongoose.model('animal', animalSchema);