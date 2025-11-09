//External imports
const express = require('express');
const hostRouter = express.Router();

//Local imports
const rootDir = require('../utils/pathUtils');
const homesController = require('../controller/homes');

hostRouter.get('/add-home', homesController.getAddHome);

hostRouter.post('/add-home', homesController.postAddHome);

exports.hostRouter = hostRouter;
