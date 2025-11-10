const Home = require('../models/home');

exports.getAddHome = (req, res, next) => {
    console.log(' path /host/add-home is here', req.url)
    res.render('host/addHome', { pageTitle: 'AirBnB - Add Home' });
};


exports.postAddHome =  (req, res, next) => {
    console.log(' path /add-home is here', req.url)
    console.log('Received new home data:', req.body);
    const { title, description, price, imageUrl } = req.body;
    const home = new Home(
        title,
        description,
        price,
        imageUrl
    )
    home.save()
    res.render('host/homeAdded', { pageTitle: 'AirBnB - Home Added' });
};

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


