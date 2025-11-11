const Home = require('../models/home');
const Favourite = require('../models/favourites');


exports.getHome = (req, res, next) => {
    console.log(' path /user is here', req.url);
    // res.sendFile(path.join(rootDir, 'views', 'home.html')); //serving static html file
    Home.fetchAll(registeredHomes => { // thisiscallback function in fetch all
        res.render('store/index', {
            registeredHomes: registeredHomes,
            pageTitle: 'AirBnB - Home'
            }); //serving dynamic ejs file where object in key values pairs can be passed

    // console.log('Registered Homes:', registeredHomes);
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
    Favourite.getFavourites(favourites => {
    Home.fetchAll(registeredHomes => {
        const favouriteHomes = registeredHomes.filter(home => favourites.includes(home.id))
        res.render('store/favList', {
            favouriteHomes: favouriteHomes,
            pageTitle: 'AirBnB - FavList'
            }); 
            });
            })
    };

exports.postAddToFavourite = (req, res, next) => {
    // console.log("Home ID to be added to favourites:", req.body);
    Favourite.addToFavourite(req.body.id, error => {
        console.log("Error adding to favourites:", error);
    })
        return res.redirect('/FavList'); // ensure URL matches destination
    };

exports.getReserves = (req, res, next) => {
Home.fetchAll(registeredHomes => {
    res.render('store/reserve', {
        registeredHomes: registeredHomes,
        pageTitle: 'AirBnB - Reserve'
        }); 
        });
};

exports.getHomeDetails = (req, res, next) => {
    const homeId = req.params.homeId;
    // console.log("Home ID Details Page:", homeId);
    Home.findById(homeId, home => {
        console.log("Found Home:", home);
        if(!home){
            // If the home doesn't exist, redirect to the canonical Home List URL
            return res.redirect('/homeList');
        } else {
        res.render('store/homeDetails', {
            pageTitle: home ? `AirBnB - ${home.title}` : 'AirBnB - Home Not Found',
            homeId: homeId,
            home: home,
            notFound: !home
        }); 
    }
    })
};

exports.postDeleteFromFavourite = (req, res, next) => {
    const homeId = req.body.id;
    console.log("Home ID to be deleted from favourites:", homeId);
    Favourite.favouriteDelete(homeId, error => {
        console.log("Error deleting from favourites:", error);
    })
    return res.redirect('/FavList'); // ensure URL matches destination
}
