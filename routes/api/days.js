var express = require('express');
var router = express.Router();
var Day = require('../../models/day.js');
module.exports = router;

// Gets all the days
router.get('/days', function(req, res, next) {
    Day.findAll().then(function(days){
        res.json(days);
    })
    .catch(next);
});

// Gets specific day
router.get('/days/:id', function(req, res, next) {
    Day.findOne({where:
        {id: req.params.id}
    }).then(function(day){
        res.json(day);
 })
 .catch(next);
});

// Create a new day
router.post('/days', function(req, res, next) {
    Day.findAll().then(function(days){
       if (days.length === 0){
           Day.create({
               number: 1
           });
       } else {
        Day.create({
            number: +days[days.length-1].number + 1
        });
       }
    });
});

// Add attraction to a specific day
router.post('/days/:id/:attractionType/:attractionId', function(req, res, next) {
    
});

// Delete a whole day
router.delete('/days/:id', function(req, res, next) {
   Day.findOne({where:
    {id: req.params.id}   
    }).then(function(day){
        return day.destroy();
    })
});

// Delete a particular attraction on a day
router.delete('/days/:id/:attractionType/:attractionId', function(req, res, next) {
    console.log('DELETE AN ATTRACTION');
});
