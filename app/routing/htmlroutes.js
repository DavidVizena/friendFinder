var express = require('express');
var app = express();

var bodyParser = require('body-parser');
var PORT =  process.env.PORT || 3000;


// Sets up for express to handle data parsing
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());
// 

// GET ROUTE TO /SURVEY and DEFAULT TO HOME
app.get("/survey", function(req, res){
    res.sendFile(path.join(__dirname, "survey.html"));
});
// 