//Dependencies
const path = require('path');
//const router = require('express').Router();
const fs = require('fs');
//npm package
const { v4: uuidv4 } = require('uuid');

//routing 
module.exports = (app) => {
    //API Get request that should read the db.json file and return all saved notes as JSON
    app.get('/api/notes', (req, res) => {
        console.log("\n GET note request");
        let data = JSON.parse(fs.readFileSync('./Develop/db/d.json', 'utf8'));
        res.json(data);
    });
//}

    //API POST request that should recieve a new note to save on request body
    app.post('/api/notes', (req, res) => {
    //extracted new note from the body
        let newNote = {
            title: req.body.title,
            text: req.body.text,
            //Assigned unique id obtained from the uuid package.
            newNote_id: uuidv4(),
        };
    console.log("\n New Note :" + JSON.stringify(newNote));

    //read data fron db.json file
    let data = JSON.parse(fs.readFileSync('./Develop/db/d.json', 'utf8'));

    //pushed new note in notes file db.json
    data.push(newNote);

    //writing new notes data in db.json file
    fs.writeFileSync('./Develop/db/d.json',JSON.stringify(data));
    console.log('\n Successfully added new note!');

    //send response
    res.json(data);
     
    });

    //API delete request that should receive a query parameter containing the id of a note to delete.
    app.delete('/api/notes', (req, res) => {
        // fetch id to delete
        let delNoteId = request.params.id.toString();
        console.log(`\n Delete note with id: ${delNoteId}`);

        //read data fron db.json file
        let data = JSON.parse(fs.readFileSync('./Develop/db/d.json', 'utf8'));

        //filter data to get notes except the one to delete
        const newData = data.filter( note => note.id.toString() !== delNoteId );

        // Write new data to 'db.json' file
        fs.writeFileSync('./Develop/db/db.json', JSON.stringify(newData));
        
        console.log(`\nSuccessfully added new note!: ${delNoteId}`);
 
        // Send response
         response.json(newData);
    });
};