var mongoose=require('mongoose');
var config=require('../config/database');

var hanhayatSchema=mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    startDate:{
        type: String,
        required: true
    },
    endDate:{
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

module.exports=mongoose.model('Hanhaya',hanhayatSchema);

module.exports.getAllHanhayot=function(callback){
    this.find(callback);
}

module.exports.removeHanhaya=function(id,callback){
//TODO remove the bullet by it's id
}

module.exports.saveHanhaya=function (id,content,callback){
    //TODO set the new content of hanhaya by id
}

module.exports.addNewHanhaya=function(hanhaya,callback){
    
}