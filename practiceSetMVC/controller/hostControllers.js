const Home = require('../models/home');

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

exports.getAddHome = (req, res, next) => {
    console.log(' path /host/add-home is here', req.url)
    res.render('host/addHome', { pageTitle: 'AirBnB - Add Home' });
};

exports.getHostHomes = (req, res, next) => {
    res.render('host/hostHomeList', { pageTitle: 'AirBnB - Host Home List' });
};

exports.getEditHome = (req, res, next) => {
    res.render('host/editHome', { pageTitle: 'AirBnB - Edit Home' });
}