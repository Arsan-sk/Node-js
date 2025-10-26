//core modules
const path = require('path');
//external modules
const userRouter = require('express').Router();
//local modules
const rootDir = require('../utils/pathUtils');

userRouter.get('/', (req, res, next) => {
    console.log(' path /user is here', req.url);
    res.sendFile(path.join(rootDir, 'views', 'home.html'));
    });

module.exports = userRouter;