// Dependencies
const express = require('express');
const fs = require('fs');
const path = require('path');

//sets express app
const app = express();
const port = process.env.port || 3001;

const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = resuire('./routes/htmlRoutes');

//middleware for parsing JSON and urlencoded from incoming data 
app.use(express.urlencoded({extended: true}));
//parsing incoming json data 
app.use(express.json);
app.use(express.static('public'));

//use routes
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);
//starts the server to begin listenig
app.listen(port, () => {
    console.log(`API server now on port ${port}!`);
});