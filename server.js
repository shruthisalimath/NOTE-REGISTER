// Dependencies
const express = require('express');

//express configuration - tells node that we are creating an express server
const app = express();
//sets initial port
const port = process.env.port || 3001;

//middleware for parsing JSON and urlencoded from incoming data 
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static('public'));

//use routes
require('./Develop/routes/apiRoutes')(app);
require('./Develop/routes/htmlRoutes')(app);
//app.use('/api', apiRoutes);
//app.use('/', htmlRoutes);

//starts the server to begin listenig
app.listen(port, () => {
    console.log(`API server now on port: ${port}!`);
});