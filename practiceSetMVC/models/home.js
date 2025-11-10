//core modules
const fs = require('fs');
const path = require('path');

const rootDir = require('../utils/pathUtils');
const { error } = require('console');


module.exports = class Home {
    constructor(title, description, price, imageUrl) {
        this.title = title;
        this.description = description;
        this.price = price;
        this.imageUrl = imageUrl;
    }

    save() {
        Home.fetchAll((registeredHomes) => {
        registeredHomes.push(this);
        const homeDataPath = path.join(rootDir, 'data', 'homes.json');
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
        const homeDataPath = path.join(rootDir, 'data', 'homes.json');
        fs.readFile(homeDataPath, (error, data) => {
            console.log("file Read:", error, data);
            // callback(!error ? JSON.parse(data) : []); // this callback is called after reading file
            if (!error) {
                callback(JSON.parse(data)); // return the parsed data from file
            } else {
            callback([]);
            }
        });
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