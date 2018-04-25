var path = require('path');
var friends = require('./../data/friends');
// Sets up for express to handle data parsing
// =============================================================

// ROUTES
// =============================================================
app.get("api/friends", function (req, res) {
    return res.json(friends.friends);
});

app.post("/api/friends", function (req, res) {
    let userData = req.body;

    userData.routeName = userData.name.replace(/\s+/g, "").toLowerCase();
    console.log(userData);

});
