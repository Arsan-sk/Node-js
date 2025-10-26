//cORE imports
const path = require('path');

//External imports
const express = require('express');
const hostRouter = express.Router();

//Local imports
const rootDir = require('../utils/pathUtils');

hostRouter.get('/add-home', (req, res, next) => {
    console.log(' path /host/add-home is here', req.url)
    res.sendFile(path.join(rootDir, 'views', 'addHome.html'));
});

hostRouter.post('/add-home', (req, res, next) => {
    console.log(' path /add-home is here', req.url)
    res.sendFile(path.join(rootDir, 'views', 'homeAdded.html'));
    console.log('Received new home data:', req.body, req.body.duration * req.body.price
     );
});

module.exports = hostRouter;