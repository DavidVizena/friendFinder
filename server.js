var express = require('express');
var path = require("path");
var bodyParser = require('body-parser');

var app = express();
var PORT =  process.env.PORT || 3000;
var public = require('path').join(__dirname, '/app/public');


// Sets up for express to handle data parsing
app.use(express.static(public));
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());
// 
require('./app/routing/htmlroutes')(app);


var listen = app.listen(PORT, function(){
    console.log("App listeneing on PORT " + PORT);
});


