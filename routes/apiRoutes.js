//Dependencies
const path = require('path');
const router = require('express').Router();
// const express = require('express')
// const router = express();
const fs = require('fs');

//npm package
const { v4: uuidv4 } = require('uuid');

//routing 
//module.exports = (app) => {
    //API Get request that should read the db.json file and return all saved notes as JSON
    router.get('/notes', (req, res) => {
        console.log("\n GET note request");
        let data = JSON.parse(fs.readFileSync('./db/db.json', 'utf8'));
        res.json(data);
    });
//}

    //API POST request that should recieve a new note to save on request body
    router.post('/notes', (req, res) => {
        console.log("--- POST ");
        //extracted new note from the body
        let newNote = {
            title: req.body.title,
            text: req.body.text,
            //Assigned unique id obtained from the uuid package.
            id: uuidv4(),
        };
        console.log("\n New Note :" + JSON.stringify(newNote));

        //read data fron db.json file
        let data = JSON.parse(fs.readFileSync('./db/db.json', 'utf8'));

        //pushed new note in notes file db.json
        data.push(newNote);

        //writing new notes data in db.json file
        fs.writeFileSync('./db/db.json',JSON.stringify(data));
        console.log('\n Successfully added new note!');

        //send response
        res.json(newNote);
    });

    //API delete request that should receive a query parameter containing the id of a note to delete.
    router.delete('/notes/:id', (req, res) => {
        console.log("-- Delete")
        // fetch id to delete
        let delNoteId = req.params.id.toString();
        console.log(`\n Delete note with id: ${delNoteId}`);

        //read data fron db.json file
        let data = JSON.parse(fs.readFileSync('./db/db.json', 'utf8'));

        //filter data to get notes except the one to delete
        const newData = data.filter( note => note.id.toString() !== delNoteId );

        // Write new data to 'db.json' file
        fs.writeFileSync('./db/db.json', JSON.stringify(newData));
        
        console.log(`\nSuccessfully deleted new note!: ${delNoteId}`);
 
        // Send response
         res.json(newData);
    });
    module.exports = router;