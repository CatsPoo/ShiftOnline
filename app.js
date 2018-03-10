var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose=require('mongoose');
var config=require('./config/database');
var router=express.Router();

var bullets = require('./routes/bullets');
var hanhayot= require('./routes/hanhayot');
var globalData=require('./routes/global-data');
//const api = require('./');
var app = express();


var port=3000;
app.listen(port,function(){
  console.log("Start server on port: "+port);

  //here
});

app.use(function(req,res,next){
  res.header('Access-Control-Allow-Origin',"*");
  res.header('Access-Control-Allow-Methods','GET,PUT,POST,DELETE,OPTIONS');
  res.header('Access-Control-Allow-Headers','Content-Type');
  next();
});

mongoose.connect(config.database);

mongoose.connection.on('connected',()=>{
  console.log('Connected to MongoDB');
});

mongoose.connection.on('error',()=>{
  console.log('Failed to connect  MongoDB');
});

function mainPage(req, res) {
  res.redirect('/');
}


app.get('/events-list', mainPage); 
app.get('/hanhayot', mainPage);
app.get('/faults', mainPage); 


// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('common'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/bullets', bullets);
app.use('/api/hanhayot', hanhayot);
app.use('/api/global-data',globalData);
//app.use('/api', api);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});



module.exports = app;
