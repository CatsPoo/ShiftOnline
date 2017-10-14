var mongoose=require('mongoose');
var config=require('../config/database');

var bulletSchema=mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    dateOfCreation:{
        type: String,
        required: true
    },
    lastUpdate:{
        type: String,
        required: true
    },
    color:{
        type: String,
        required: true
    },
    content:{
        type: Object,
    }
});

module.exports=mongoose.model('Bullet',bulletSchema);

module.exports.getBulletById=function(id,callback){
    Bullet.findById(id,callback);
}

module.exports.getAllBullets=function(callback){
    this.find(callback);
}

module.exports.addBullet=function(newBullet,callback){
    newBullet.save(callback);
}

module.exports.addContentToBullet=function(bulletID,newContent,callback){;
    Bullet.findById(id,(err,bullet)=>{
    });
}

module.exports.removeBullet=function(bulletID,callback){
    console.log(bulletID);
    this.findById(bulletID).remove(callback);
}