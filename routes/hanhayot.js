var express = require('express');
var router = express.Router();
//var bullet= require('../models/Bullets.js');

/* GET home page. */
/*router.post('/addHanhaya', function(req, res, next) {
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

}); */

router.post('/getAllHanhayot', function (req, res, next) {
    /* bullet.getAllBullets((err,bullets)=>{
       if(err){
         res.json({succsess: false, msg:'Failed to get bullets'+err});
       }
       else{
         res.json({succsess: true, bullets:bullets});
       }
     }); */
    let hanhayot = [{
        _id:1,
         _name:"ok",
         _content:"aaa",
    }, {
        _id:2,
        _name:"BB",
        _content:"bbb"
    }];
    res.json({ succsess: true, hanhayot: hanhayot });

});


module.exports = router;
