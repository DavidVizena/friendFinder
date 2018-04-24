var server = require("../../server");
var friends = require("../data/friends");


// Sets up for express to handle data parsing
server.app.use(server.bodyParser.urlencoded({ extended: true}));
server.app.use(server.bodyParser.json());
// 

// GET ROUTE TO /SURVEY and DEFAULT TO HOME
server.app.get("/", function(req, res){
    res.sendFile(path.join(__dirname, "home.html"));
});

server.app.get("/survey", function(req, res){
    res.sendFile(path.join(__dirname, "survey.html"));
});
// 




server.listen;