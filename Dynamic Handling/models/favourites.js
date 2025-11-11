//core modules
const fs = require('fs');
const path = require('path');

const rootDir = require('../utils/pathUtils');
const { error } = require('console');

const favouriteDataPath = path.join(rootDir, 'data', 'favourites.json');


module.exports = class Favourite {

    static addToFavourite(homeId, callback){
        Favourite.getFavourites((favourites) => {
            if(favourites.includes(homeId)){
                callback('Home already in favourites');
            } else {
                favourites.push(homeId);
                console.log("homeId added to favourites:", homeId);
                fs.writeFile(favouriteDataPath, JSON.stringify(favourites), callback)
            }
        });
    }

    static getFavourites(callback){
        fs.readFile(favouriteDataPath, (error, data) => {
            // console.log("file Read:", error, data);
            callback(!error ? JSON.parse(data) : []); // this callback is called after reading file
        });
    }

     static favouriteDelete(homeId, callback) {
        Favourite.getFavourites((favourites) => {
            const updatedFavourites = favourites.filter(id => id !== homeId); // filter out the removed homeId
            fs.writeFile(favouriteDataPath, JSON.stringify(updatedFavourites), callback);
        });
        }
    
}

