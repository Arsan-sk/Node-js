const Home = require('../models/home');


exports.getHome = (req, res, next) => {
    console.log(' path /user is here', req.url);
    // res.sendFile(path.join(rootDir, 'views', 'home.html')); //serving static html file
    Home.fetchAll(registeredHomes => { // thisiscallback function in fetch all
        res.render('store/index', {
            registeredHomes: registeredHomes,
            pageTitle: 'AirBnB - Home'
            }); //serving dynamic ejs file where object in key values pairs can be passed

    console.log('Registered Homes:', registeredHomes);
    });
    };


exports.getHomeList = (req, res, next) => {
    Home.fetchAll(registeredHomes => {
        res.render('store/homeList', {
            registeredHomes: registeredHomes,
            pageTitle: 'AirBnB - HomeList'
            }); 
            });
    };

exports.getBookings = (req, res, next) => {
    Home.fetchAll(registeredHomes => {
        res.render('store/bookings', {
            registeredHomes: registeredHomes,
            pageTitle: 'AirBnB - Bookings'
            }); 
            });
    };

exports.getFavList = (req, res, next) => {
    Home.fetchAll(registeredHomes => {
        res.render('store/favList', {
            registeredHomes: registeredHomes,
            pageTitle: 'AirBnB - FavList'
            }); 
            });
    };

    exports.getReserves = (req, res, next) => {
    Home.fetchAll(registeredHomes => {
        res.render('store/reserve', {
            registeredHomes: registeredHomes,
            pageTitle: 'AirBnB - Reserve'
            }); 
            });
    };