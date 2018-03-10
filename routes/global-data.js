var express = require('express');
var router = express.Router();
var bullet= require('../models/Bullets.js');

router.post('/getBasesList',function(req,res,next){
        res.json({ succsess: true, bases: ['1', '2', '4', '6', '8', '10', '15', '21', '25', '28', '30'] });
});

 module.exports = router;
