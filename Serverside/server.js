var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var secretRoute = require('./routes/route');
var app = express();
app.use(express.static('../Clientside'));
app.use(bodyParser.urlencoded({ extend: true }));
app.use(bodyParser.json());
app.get('/', function (req, res) {
    res.send("Hello World!");
});
app.listen(3000, function () {
    console.log("wubalubadubdub");
});
