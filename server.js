var bodyParser = require('body-parser');
var express = require("express");
var favicon = require("serve-favicon");
var morgan = require("morgan");
var path = require("path");
var request = require("request");
//require("request-debug")(request);

var app = express();

app.use(bodyParser.json());

app.use(morgan("combined", {
    skip: function(req, res) {
        return res.statuscode < 400;
    }
}));

app.use(express.static(path.join(__dirname, "app")));
app.use(favicon(__dirname + "/app/assets/imgs/favicon.ico"));

app.use(function(req, res, next) {
    console.log("/" + req.method);
    next();
});

var getLocation = function(req, res, next) {
    var url = "http://ipinfo.io";

    request.get({url: url, json: true, headers: {"User-Agent": "request"}}, function(err, data) {
        if (err) { return err; }
        if (!err) {
            res.setHeader("Content-Type", "application/json");
            req.data
            return next();
        }
    });
};

app.get("/api/weather/connect", getLocation, function(req, res) {
    var userLocation = req.data;
    console.log(userLocation);

    var zipCountry = "37187" + "," + "US";

    var url = "http://api.openweathermap.org/data/2.5/weather?q=" + zipCountry + "&APPID=f72650c40fef189a346723016e3b5ca6&units=imperial";

    request.get({url: url, json: true, headers: {"User-Agent": "request"}}, function(err, data) {
        if (err) { return err; }
        if(!err) {
            res.setHeader("Content-Type", "application/json");
            res.send(data);
        }
    });
});

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname + "/index.html"));
});

app.get("*", function(req, res) {
    res.status(404).send("No such page");
});

app.listen(3000, function() {
    console.log("Listening on port 3000")
});
