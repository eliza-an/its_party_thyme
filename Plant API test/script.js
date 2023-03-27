//plant list
var APIKey1 = "sk-htIX6419d1b8cfc9f275";
var queryURL1 = "https://perenual.com/api/species-list?page=1&key=" + APIKey1;

// Here we run our AJAX call to the OpenWeatherMap API
$.ajax({
  url: queryURL1,
  method: "GET"
})
  // We store all of the retrieved data inside of an object called "response"
  .then(function(response) {


    //plant details
    const id = response.data[0].id

    var APIKey2 = "sk-htIX6419d1b8cfc9f275";
    var queryURL2 = "https://perenual.com/api/species/details/" + id + "?key=" + APIKey2;

    $.ajax({
      url: queryURL2,
      method: "GET"
    })
    .then(function(response2) {
    // console.log(id);
    // console.log(response2.indoor);
    // console.log(response2.care_level);

    // Transfer content to HTML
    $(".common-name").html("<h1>" + response.data[0].common_name + "</h1>");
    $(".water").text("Watering: " + response.data[0].watering);
    $(".water").text("Watering: " + response.data[0].watering);
    $(".care").text("Maintenance: " + response2.care_level);

    });
        
  });