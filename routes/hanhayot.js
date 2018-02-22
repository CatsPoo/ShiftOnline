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
      res.json({succsess: false, msg:'Failed to add bullet  <br>'+err});
    }
    else{
      res.json({succsess: true, msg:'Bullet added',id:bullet.id});
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


module.exports = router;
