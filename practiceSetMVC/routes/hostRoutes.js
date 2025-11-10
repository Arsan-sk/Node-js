//External imports
const express = require('express');
const hostRouter = express.Router();

//Local imports
const rootDir = require('../utils/pathUtils');
const hostController = require('../controller/hostControllers');

hostRouter.post('/add-home', hostController.postAddHome);
hostRouter.get('/add-home', hostController.getAddHome);
hostRouter.get('/hostHomes', hostController.getHostHomes);
hostRouter.get('/editHome', hostController.getEditHome);


exports.hostRouter = hostRouter;
