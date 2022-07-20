const fs = require('fs');
const path = require('path');

function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

module.exports = function () {
    const database = JSON.parse(fs.readFileSync(path.join(__dirname, './db.json')));
    return database[getRandom(0, database.length)];

}