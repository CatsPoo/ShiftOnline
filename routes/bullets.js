var express = require('express');
var router = express.Router();
var bullet= require('../models/Bullets.js');

/* GET home page. */
router.post('/addBullet', function(req, res, next) {
  var newBullet=new bullet({
    name: req.body.name,
    dateOfCreate: req.body.dateOfCreate,
    lastUpdate: req.body.lastUpdate,
    color: req.body.color,
    content: req.body.content
  });

  bullet.addBullet(newBullet,(err,bullet)=>{
    if(err){
      res.json({succsess: false, msg:'Failed to add bullet  '+err});
    }
    else{
      res.json({succsess: true, msg:'Bullet added'});
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
