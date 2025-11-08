//core modules
const path = require('path');
//external modules
const userRouter = require('express').Router();
//local modules
const rootDir = require('../utils/pathUtils');
const { registeredHomes } = require('./hostRoutes');

userRouter.get('/', (req, res, next) => {
    console.log(' path /user is here', req.url);
    // res.sendFile(path.join(rootDir, 'views', 'home.html')); //serving static html file
    res.render('home', {registeredHomes: registeredHomes, pageTitle: 'AirBnB - Home'}); //serving dynamic ejs file where object in key values pairs can be passed
    console.log('Registered Homes:', registeredHomes);
    });

module.exports = userRouter;