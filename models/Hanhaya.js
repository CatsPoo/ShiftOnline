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
    console.log(id);
    this.findById(id).remove(callback);
}

module.exports.updateContent=function (id,content,callback){
    console.log(content);
    this.findById(id).update({_id:id} ,{"content": content},callback);

}


module.exports.addNewHanhaya=function(newHanhaya,callback){
    newHanhaya.save(callback);
}