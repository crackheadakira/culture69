const fs = require('fs');

function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

module.exports = function () {
    const database = JSON.parse(fs.readFileSync('./db.json'));
    return database[getRandom(0, database.length)];

}