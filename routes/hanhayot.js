var express = require('express');
var router = express.Router();
var hanhaya= require('../models/Hanhaya');

router.post('/getAllHanhayot', function (req, res, next) {
    hanhaya.getAllHanhayot((err,hanhayot)=>{
       if(err){
         res.json({succsess: false, msg:'Failed to get hanhayot'+err});
       }
       else{
         res.json({succsess: true, hanhayot:hanhayot});
       }
     }); 
    /* let hanhayot = [{
        _id:1,
         _name:"ok",
         _content:"aaa",
    }, {
        _id:2,
        _name:"BB",
        _content:"bbb"
    }];
    res.json({ succsess: true, hanhayot: hanhayot });*/

});

router.post('/addHanhaya', function(req, res, next) {
  var newHanhaya=new hanhaya({
    name: req.body.name,
    startDate: req.body.startDate,
    endDate: req.body.endDate,
    color: 'red',
    content: req.body.content
  });
  hanhaya.addNewHanhaya(newHanhaya,(err,bullet)=>{
    if(err){
      res.json({succsess: false, msg:'Failed to add hanhaya  <br>'+err});
    }
    else{
      res.json({succsess: true, msg:'Hanhaya added',id:bullet.id});
    }
  });
});

router.post('/removeHanhaya',function(req,res,next){
  let id=req.body.id;
  hanhaya.removeHanhaya(id,(err,hanhaya)=>{
    if(err){
      res.json({succsess: false, msg:'Failed to remove Hanhaya'+err});
    }
    else{
      res.json({succsess: true, msg:'Hanhaya removed Seccessfully'});
    }
  });
});

router.post('/removeHanhaya',function(req,res,next){
  let id=req.body.id;
  hanhaya.removeHanhaya(id,(err,bullet)=>{
    if(err){
      res.json({succsess: false, msg:'Failed to remove hanhaya'+err});
    }
    else{
      res.json({succsess: true, msg:'hanhaya removed Seccessfully'});
    }
  });
});

router.post('/updateContent',function(req,res,next){
  let id=req.body.hanhayaID;
  let content=req.body.content;
  hanhaya.updateContent(id,content,(err,hanhaya)=>{
    if(err){
      res.json({succsess: false, msg:'Failed to update hanhaya'+err});
    }
    else{
      res.json({succsess: true, msg:'hanhaya updated Seccessfully'});
    }
  });
});

router.post('/updateHanhaya',function(req,res,next){
  let id=req.body.hanhayaID;
  let name=req.body.name;
  let startDate=req.body.startDate;
  let endDate=req.body.endDate;

  hanhaya.updateHanhaya(id,name,startDate,endDate,(err,hanhaya)=>{
    if(err){
      res.json({succsess: false, msg:'Failed to update hanhaya'+err});
    }
    else{
      res.json({succsess: true, msg:'hanhaya updated Seccessfully'});
    }
  });
});


module.exports = router;
