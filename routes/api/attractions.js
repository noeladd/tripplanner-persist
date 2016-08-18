var express = require('express');
var router = express.Router();
var Hotel = require('../../models/hotel.js');
var Activity = require('../../models/activity.js');
var Restaurant = require('../../models/restaurant.js');
module.exports = router;

router.get('/hotels', function(req, res, next) {
    Hotel.findAll().then(function(hotels){
        res.json(hotels);
    })
    .catch(next);
});


router.get('/restaurants', function(req, res, next) {
    Restaurant.findAll().then(function (restaurants){
        res.json(restaurants);
    })
    .catch(next);
});

// $.get('/api/restaurants')
// .then(function (restaurants) {
//   restaurants.forEach(function(restaurant){
//     console.log(restaurant.name);
//   });
// })
// .catch( console.error.bind(console) );

router.get('/activities', function(req, res, next) {
    Activity.findAll().then( function(activities){
        res.json(activities);
    })
    .catch(next);
});
