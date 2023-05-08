const path = require('path');
const router = require('express').Router();

//Get /notes returns notes.html file
router.get('/notes', (req, res) => {
    res.sendFile(path.join(_dirname, '../../public/notes.html'));
});

//Get * returns index.html file
router.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/index.html'));
});

module.export = router;