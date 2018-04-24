var server = require("../../server");
var friends = require("../data/friends");


// Sets up for express to handle data parsing
// =============================================================
server.app.use(server.bodyParser.urlencoded({ extended: true }));
server.app.use(server.bodyParser.json());
// 

// ROUTES
// =============================================================
server.app.get("api/friends", function (req, res) {
    return res.json(friends.friends);
});

server.app.post("/api/friends", function (req, res) {
    let newfriend = req.body;

    newfriend.routeName = newfriend.name.replace(/\s+/g, "").toLowerCase();
    console.log(newfriend);

});

server.listen;