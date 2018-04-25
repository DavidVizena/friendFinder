var path = require('path');
// GET ROUTE TO /SURVEY and DEFAULT TO HOME

module.exports = function(app){
    app.get("/", function(req, res){
        res.sendFile(path.join(__dirname, "./../public/home.html"));
    });

    app.get("/survey", function(req, res){
        res.sendFile(path.join(__dirname, "./../public/survey.html"));
    });
};