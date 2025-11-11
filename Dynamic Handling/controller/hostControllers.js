const Home = require('../models/home');
const Favourite = require('../models/favourites');

exports.postAddHome =  (req, res, next) => {
    // console.log(' path /add-home is here', req.url)
    console.log('Received new home data:', req.body);
    const { title, description, price, imageUrl } = req.body;
    const home = new Home(
        title,
        description,
        price,
        imageUrl
    )
    home.save()
    // Use PRG pattern so the URL reflects the destination page
    return res.redirect('/host/hostHomeList');
};

exports.getAddHome = (req, res, next) => {
    const editing = false
    res.render('host/editHome', { 
        pageTitle: 'AirBnB - Add Home',
        editing: editing
    });
};

exports.getHostHomes = (req, res, next) => {
    Home.fetchAll(registeredHomes => {
        res.render('host/hostHomeList', {
            registeredHomes: registeredHomes,
            pageTitle: 'AirBnB - HomeList'
            }); 
            });
};

exports.getEditHome = (req, res, next) => {
    const homeId = req.params.homeId;
    const editing = req.query.editing;
    const home = Home.findById(homeId, home => {
        if(!home){
            // If the home doesn't exist, redirect to the canonical Home List URL
            return res.redirect('/host/hostHomeList');
        } else {
        console.log(`Editing Home ID: ${homeId}, Editing Mode: ${editing}`);
        res.render('host/editHome', {
             pageTitle: 'AirBnB - Edit Home',
             editing: editing,
             home: home
            });
        }
    });
};

exports.postEditHome = (req, res, next) => {
    const { id, title, description, price, imageUrl } = req.body;
    const home = new Home(
        title,
        description,
        price,
        imageUrl
    )
    home.id = id; // Assign the existing ID to the home instance
    home.save()
    return res.redirect('/host/hostHomeList');
};

exports.postDeleteHome = (req, res, next) => {
    const homeId = req.params.HomeId;
    console.log(`Deleted Home ID: ${homeId}`);
    Home.deleteById(homeId, error => {
        if (error) {
            console.error('Error deleting home:', error);
        } else {
                Favourite.favouriteDelete(homeId, error => {
                    if (error) {
                        console.error('Error deleting from favourites:', error);
                    } else {
                        console.log('Successfully deleted home from favourites if it existed.');
                    }
                })
            }
        return res.redirect('/host/hostHomeList');
    });
};