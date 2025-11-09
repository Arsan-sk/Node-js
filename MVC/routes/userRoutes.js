//external modules
const userRouter = require('express').Router();
//local modules
// const rootDir = require('../utils/pathUtils');

const homesController = require('../controller/homes');

const { registeredHomes } = require('./hostRoutes');

userRouter.get('/', homesController.getHome);

module.exports = userRouter;