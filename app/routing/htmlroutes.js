var express = require('express');
var path = require("path");
var bodyParser = require('body-parser');

var app = express();
var PORT =  process.env.PORT || 3000;


// Sets up for express to handle data parsing
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());
// 

// GET ROUTE TO /SURVEY and DEFAULT TO HOME
app.get("/", function(req, res){
    res.sendFile(path.join(__dirname, "home.html"));
});

app.get("/survey", function(req, res){
    res.sendFile(path.join(__dirname, "survey.html"));
});
// 