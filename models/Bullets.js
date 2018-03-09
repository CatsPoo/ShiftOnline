var mongoose = require('mongoose');
var config = require('../config/database');

var bulletSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    dateOfCreation: {
        type: String,
        required: true
    },
    lastUpdate: {
        type: String,
        required: true
    },
    color: {
        type: String,
        required: true
    },
    content: {
        type: Object,
    }
});

module.exports = mongoose.model('Bullet', bulletSchema);

module.exports.getBulletById = function(id, callback) {
    Bullet.findById(id, callback);
}

module.exports.getAllBullets = function(callback) {
    this.find(callback);
}

module.exports.addBullet = function(newBullet, callback) {
    newBullet.save(callback);
}

module.exports.removeBullet = function(bulletID, callback) {
    console.log(bulletID);
    this.findById(bulletID).remove(callback);
}

module.exports.addNewContentToBullet = function(bulletID, content, callback) {
    this.findById(bulletID).update({ _id: bulletID }, { $push: { "content": content } }, callback);
}

module.exports.updateTodayContentOfBullet = function(bulletID, content, callback) {
    console.log(content);
    this.findById(bulletID).update({ _id: bulletID }, { $pop: { "content": 1 } }, (err, res) => {});
    this.findById(bulletID).update({ _id: bulletID }, { $push: { "content": content } }, callback);
}
module.exports.updateLastUpdate = function(bulletID, lastUpdate, callback) {
    let lastUpdateString = lastUpdate._day + "/" + lastUpdate._mounth + "/" + lastUpdate._year;
    this.findById(bulletID).update({ _id: bulletID }, { $set: { "lastUpdate": lastUpdateString } }, callback);

}
module.exports.updateNewName = function(bulletID, newName, callback) {
    console.log(newName);
    this.findById(bulletID).update({ _id: bulletID }, { $set: { "name": newName } }, callback);

}