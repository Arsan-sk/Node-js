//external modules
const userRouter = require('express').Router();
//local modules
// const rootDir = require('../utils/pathUtils');

const userControllers = require('../controller/userConrollers');

const { registeredHomes } = require('./hostRoutes');

userRouter.get('/', userControllers.getHome);
userRouter.get('/homeList', userControllers.getHomeList);
userRouter.get('/bookings', userControllers.getBookings);
userRouter.get('/FavList', userControllers.getFavList);
userRouter.get('/reserve', userControllers.getReserves);

userRouter.get('/homeDetails/:homeId', userControllers.getHomeDetails);

userRouter.post('/favorites', userControllers.postAddToFavourite);

userRouter.post('/favoritesDelete', userControllers.postDeleteFromFavourite);



module.exports = userRouter;