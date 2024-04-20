//GROUP 4
// Name:       Samuel Abraham & Sandeep Kumar
// Student id: 100870571      & 100844683
// Web Development -CSS
// Durham college
// 19/04/2024
// LAB4
// INFT2202
// Student Final assignment

const {animalModel} = require('../models/Animal');
// Exporting all the  Funtions Below
module.exports = {
    View_All_Animal,
    EntryForm,
    SubmitForm,
    Upload_Edit_Animal_Data,
    Update_All_Animal,
    Delete_Animal
}

/**
 * This function loads data about animals onto the animal-list page.
 * @param {*} req 
 * @param {*} res 
 */
function loadAnimalData(req, res) {
    animalModel.Animal.find({}).then(function(animalList) {
        res.render('./animals/animal-list', {pageTitle: 'Animals',animals: animalList})})}

/**
 * Here, we're loading the data necessary for editing an animal.
 * @param {*} req 
 * @param {*} res 
 */
function Upload_Edit_Animal_Data(req, res) {
    const animalId = req.params.animalId; 
    
    
    const animal = req.body.animal;
    res.render('./animals/Upload-animal', {
        pageTitle: 'Edit Animal Entry',
        animalId: animalId, // Pass the animalId to the view
        animal: animal // Pass the animal object to the view
    });
    
}

/**
 * We load the animal entry form onto the Entry-Form page.
 * @param {*} req 
 * @param {*} res 
 */
function loadAnimalEntryForm(req, res) {
    res.render('./animals/Entry-Form', {
        pageTitle: 'Animal Entry Form'
    })}

/**
 * Displays the animal-list page.
 * @param {*} req 
 * @param {*} res 
 */
function View_All_Animal(req, res) {
    loadAnimalData(req, res);}

/**
 * Displays the Entry-Form page.
 * @param {*} req 
 * @param {*} res 
 */
function EntryForm(req, res) {
    loadAnimalEntryForm(req, res);}

/**
 * Submits the form data for an animal.
 * @param {*} req 
 * @param {*} res 
 */
function SubmitForm(req, res) {
    console.log(req.body);
    const formData = req.body;

    console.log('Form Data:', formData);

    // Create a new Animal document
    const newAnimal = new animalModel.Animal({
        zoo: formData.zoo,scientificName: formData.scientificName,commonName: formData.commonName,givenName: formData.givenName,gender: formData.gender,
        dateOfBirth: formData.dateOfBirth,age: formData.age,isTransportable: formData.isTransportable === 'Available'
    });

    // Save the newAnimal to the database
    newAnimal.save()
        .then(() => {
            console.log('The Data of the animal has been  saved:', newAnimal);

            // Redirect to all animals page after submission
            res.redirect('/animal-list');
        })
        .catch(err => {
            console.error(err);
            res.status(500).send('Oops! Something went wrong while saving your data. Please try again .');
        });
}

/**
 * Loads data for editing an animal.
 * @param {*} req 
 * @param {*} res 
 */
function Upload_Edit_Animal_Data(req, res) {
    const animalId = req.body.id;
    console.log("Received animalId:", animalId);
    
    // Find an animal by id and pass it to the page
    animalModel.Animal.findById(animalId)
        .then(animal => {
            if (!animal) {
                return res.status(404).send('Oops! We couldn\'t find the requested animal.');
            }
            res.render('./animals/Upload-animal', {
                pageTitle: 'Edit Animal',animal: animal
            });
        })
        .catch(err => {
            console.error("Error fetching animal data:", err);
            res.status(500).send('Oops! Something went wrong while fetching the animal data.');
        });
        
}

/**
 * Updates animal data.
 * @param {*} req 
 * @param {*} res 
 */
function Update_All_Animal(req, res) {
    // Create an animal using data passed from form
    const animalId = req.body._id;
    const updatedAnimal = {
        zoo: req.body.zoo,
        scientificName: req.body.scientificName,
        commonName: req.body.commonName,
        givenName: req.body.givenName,
        gender: req.body.gender,
        dateOfBirth: req.body.dateOfBirth,
        age: req.body.age,
        // Here we are Converting the string to boolean
        isTransportable: req.body.isTransportable === 'true', 
    };

    // Find the animal by id and update it with the new animal 
    animalModel.Animal.Find_Id&UpdateAnimal(animalId, updatedAnimal, { new: true })
    .then((updatedText) => {
        if (!updatedText) {
            return res.status(404).send('Error: Animal not found');
        }
        console.log('Animal updated successfully:', updatedText);
        res.redirect('/animal-list');
    })
    
        .catch((err) => {
            console.error('Error updating animal:', err);
            res.status(500).send('Oops! Something went wrong while updating the animal.');
        });
        
}

/**
 * Deletes animal data.
 * @param {*} req 
 * @param {*} res 
 */

function Delete_Animal(req, res) {
    const animalId = req.body._id;// Here in the Delete Funtion we are Removing the animal from the database
    animalModel.Animal.findByIdAndDelete(id)
        .then(() => {
            console.log("Deleted animal with ID:", animalId); // After delting the animal we make sure the user reaches  animals page .
            res.redirect('/animal-list');})
        .catch((err) => {
            console.error(err);
            res.status(500).send('Error has occured here in Animal page');
        });
}


