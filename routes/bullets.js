var express = require('express');
var router = express.Router();
var bullet= require('../models/Bullets.js');

/* GET home page. */
router.post('/addBullet', function(req, res, next) {
  var newBullet=new bullet({
    name: req.body.name,
    dateOfCreation: req.body.dateOfCreation,
    lastUpdate: req.body.lastUpdate,
    color: req.body.color,
    content: req.body.content
  });

  bullet.addBullet(newBullet,(err,bullet)=>{
    if(err){
      res.json({succsess: false, msg:'Failed to add bullet  <br>'+err});
    }
    else{
      res.json({succsess: true, msg:'Bullet added',id:bullet.id});
    }
  });

});
router.post('/getAllBullets', function(req, res, next) {
  bullet.getAllBullets((err,bullets)=>{
    if(err){
      res.json({succsess: false, msg:'Failed to get bullets'+err});
    }
    else{
      res.json({succsess: true, bullets:bullets});
    }
  });

});

router.post('/removeBullet',function(req,res,next){
  let id=req.body.id;
  bullet.removeBullet(id,(err,bullet)=>{
    if(err){
      res.json({succsess: false, msg:'Failed to remove bullet'+err});
    }
    else{
      res.json({succsess: true, msg:'Bullet removed Seccessfully'});
    }
  });
});

router.post('/getTime',function(req,res,next){
  let date=new Date();
  res.json({
    year: date.getFullYear(),
    mounth: (date.getMonth()+1),
    day:date.getDate()
  });
});


module.exports = router;
