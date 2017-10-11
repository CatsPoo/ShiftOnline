var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var bodyParser=require('body-parser');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var cors=require('cors');

var bullets = require('./routes/bullets');

var app = express();

var port=3000;

app.use(cors());
app.use(bodyParser.json());
app.listen(port,function(){
  console.log('Server run on port:'+port);
});
app.use(express.static(path.join(__dirname,'public/src')));
app.use('/',bullets);

module.exports = app;
