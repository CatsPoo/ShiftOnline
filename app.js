import { Routes } from '@angular/router';
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose=require('mongoose');
var config=require('./config/database');

var bullets = require('./routes/bullets');
var app = express();

var port=3000;
app.listen(port,function(){
  console.log("Start server on port: "+port);
});

mongoose.connect(config.database);

mongoose.connection.on('connected',()=>{
  console.log('Connected to MongoDB');
});

mongoose.connection.on('error',()=>{
  console.log('Failed to connect  MongoDB');
});



// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/bullets', bullets);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.post('/getTime',(req,res)=>{
  let date=new Date();
  res.json({
    year: date.getFullYear,
    mounth:date.getMonth,
    day:date.getDay
  });
});

module.exports = app;
