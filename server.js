var express = require('express');
var path = require("path");
var bodyParser = require('body-parser');

var app = express();
var PORT =  process.env.PORT || 3000;


var listen = app.listen(PORT, function(){
    console.log("App listeneing on PORT" + PORT);
});


module.exports ={
    express: express,
    path: path,
    bodyParser: bodyParser,
    app: app,
    PORT: PORT,
    listen: listen,
};
