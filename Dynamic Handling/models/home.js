//core modules
const fs = require('fs');
const path = require('path');

const rootDir = require('../utils/pathUtils');
const { error } = require('console');

const homeDataPath = path.join(rootDir, 'data', 'homes.json');


module.exports = class Home {
    constructor(title, description, price, imageUrl) {
        this.title = title;
        this.description = description;
        this.price = price;
        this.imageUrl = imageUrl;
    }

    save() {
        Home.fetchAll((registeredHomes) => {
            if (this.id){ // edit home case
                registeredHomes = registeredHomes.map(home => // check each home one by one
                    home.id === this.id ? this : home // what happens is if the home id matches then update it with this else keep it same
                );
            } else { // add home case
                this.id = Math.random().toString(); // generating random id for each home
                registeredHomes.push(this);
        }
        fs.writeFile(homeDataPath, JSON.stringify(registeredHomes), (error) => {
            if (error) {
                console.error('Error writing home data to file:', error);
            } else {
                console.log('Home data saved successfully to file.');
            }
        });
        })
        
    }

    static fetchAll(callback) {  // kind a callback function as parameter which is inside the main function it self
        fs.readFile(homeDataPath, (error, data) => {
            // console.log("file Read:", error, data); // debug: commented to avoid noisy Buffer logs in console
            // callback(!error ? JSON.parse(data) : []); // this callback is called after reading file
            if (!error) {
                callback(JSON.parse(data)); // return the parsed data from file
            } else {
            callback([]);
            }
        });
    }

    static findById(homeId, callback) {
        this.fetchAll(homes =>{
            // IDs are saved as `id` (lowercase) and generated as strings
            const foundHome = homes.find(home => String(home.id) === String(homeId));
            callback(foundHome);
        })
    }

    static deleteById(homeId, callback) {
         this.fetchAll(homes =>{
            homes = homes.filter(home => home.id !== homeId) // filter and store only those with non matching id hence deleting the one with matching id
             fs.writeFile(homeDataPath, JSON.stringify(homes), callback);
        })
    }
}

















// error in  below code is its async so basically returm nothing to the caller
//  static fetchAll() {
//         const homeDataPath = path.join(rootDir, 'data', 'homes.json');
//         fs.readFile(homeDataPath, (error, data) => {
//             console.log("file Read:", error, data);
//             if (!error) {
//                 registeredHomes = JSON.parse(data); // return the parsed data from file
//             }
//             return registeredHomes;
//         });
//     }
// }