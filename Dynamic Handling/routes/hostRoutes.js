//External imports
const express = require('express');
const hostRouter = express.Router();

//Local imports
const rootDir = require('../utils/pathUtils');
const hostController = require('../controller/hostControllers');

hostRouter.post('/addHome', hostController.postAddHome);
hostRouter.get('/editHome', hostController.getAddHome);
hostRouter.get('/hostHomeList', hostController.getHostHomes);
hostRouter.get('/editHome/:homeId/editing', hostController.getEditHome);
hostRouter.post('/editHome', hostController.postEditHome);
hostRouter.post('/deleteHome/:HomeId', hostController.postDeleteHome)


exports.hostRouter = hostRouter;
