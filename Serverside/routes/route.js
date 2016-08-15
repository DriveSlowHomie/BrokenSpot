"use strict";
var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Geocoord = mongoose.model('Geocoord', {
    longitude: Number,
    latitude: Number,
    date_created: Date,
    date_deleted: {
        type: Date,
        default: null
    }
});
router.post('/movies', function (req, res, next) {
    var geo_coords = new Geocoord({
        longitude: req.body.longitude,
        latitude: req.body.latitude,
        date_created: new Date()
    });
    geo_coords.save(function (err, res) {
        if (err) {
            console.log(err);
        }
        else {
            console.log(res);
        }
    });
    res.sendStatus(200);
});
module.exports = router;
