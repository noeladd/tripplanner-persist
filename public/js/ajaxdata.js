var $optionsPanel = $('#options-panel');
var $hotelSelect = $optionsPanel.find('#hotel-choices');
var $restaurantSelect = $optionsPanel.find('#restaurant-choices');
var $activitySelect = $optionsPanel.find('#activity-choices');



// var hotels = []
$.get('/api/hotels')
.then(function (hotels) {
  hotels.forEach(makeOption, $hotelSelect);
//   hotels.forEach(function(hotel){
//     //   hotels.push(hotel);
//   })
})
.catch( console.error.bind(console) 
);


// var restaurants = []
$.get('/api/restaurants')
.then(function (restaurants) {
  restaurants.forEach(makeOption, $restaurantSelect);
//   restaurants.forEach(function(restaurant){
//     //   restaurants.push(restaurant);
//   })
})
.catch( console.error.bind(console) 
);

// var activities = []
$.get('/api/activities')
.then(function (activities) {
  activities.forEach(makeOption, $activitySelect);
//   activities.forEach(function(activity){
//     //   activities.push(activity);
//   })
})
.catch( console.error.bind(console) 
);

function makeOption (databaseAttraction) {
    var $option = $('<option></option>') // makes a new option tag
      .text(databaseAttraction.name)
      .val(databaseAttraction.id);
    this.append($option); // add the option to the specific select
  }