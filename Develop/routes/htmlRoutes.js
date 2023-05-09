const path = require('path');
//const router = require('express').Router();

//routing 
module.exports = (app) => {
    //Get /notes returns notes.html file
    app.get('/notes', (req, res) => {
        res.sendFile(path.join(_dirname, '../Develop/public/notes.html'));
    });

    //Get * returns index.html file
    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, '../Develop/public/index.html'));
    });
};
