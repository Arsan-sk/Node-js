//cORE imports
const path = require('path');

//External imports
const express = require('express');
const hostRouter = express.Router();

//Local imports
const rootDir = require('../utils/pathUtils');

hostRouter.get('/add-home', (req, res, next) => {
    console.log(' path /host/add-home is here', req.url)
    res.render('addHome', { pageTitle: 'AirBnB - Add Home' });
});

const registeredHomes = [];

hostRouter.post('/add-home', (req, res, next) => {
    console.log(' path /add-home is here', req.url)
    res.render('homeAdded', { pageTitle: 'AirBnB - Home Added' });
    console.log('Received new home data:', req.body);
    registeredHomes.push({
        title: req.body.title,
        description: req.body.description,
        price: req.body.price,
        imgURL: req.body.imageUrl
    })
});

exports.hostRouter = hostRouter;
exports.registeredHomes = registeredHomes;