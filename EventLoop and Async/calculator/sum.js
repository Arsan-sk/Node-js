const fs = require('fs');

function sumFromFile() {
    const data = fs.readFileSync('numbers.txt', 'utf-8');
    console.log("data",data);
    const numbers = JSON.parse(data);
    console.log("numbers",  numbers);
    const num1 = parseFloat(numbers.num1);
    const num2 = parseFloat(numbers.num2);
    return num1 + num2;
}
module.exports = sumFromFile;