$(document).ready(function() {
  function getPlaces(event) {
    
    event.preventDefault();
    $("#resultsContainer").empty();

    var city = $("#placeInput").val();
    var queryUrl = "https://api.foursquare.com/v2/venues/explore?near=" + city + "&client_id=CQKCUPKTJE0SLVISTYVAQVEFLRKZ35VR3I1UUEPABKDGTEF1&client_secret=52IQTN3AR0DC22MA52IQUSHJTGELILYWLGMD0KR5HSTVWD5W&v=20200919";
    
    $.ajax({
              url: queryUrl,
              method: "GET",
      
    }).then(function(response) {
      console.log(response)
      for (var i =0; i < 10; i++){
      var venueId = response.response.groups[0].items[i].venue.id;
      console.log(venueId)

      var recomendURL = "https://api.foursquare.com/v2/venues/" + venueId + "/?&c&client_id=CQKCUPKTJE0SLVISTYVAQVEFLRKZ35VR3I1UUEPABKDGTEF1&client_secret=52IQTN3AR0DC22MA52IQUSHJTGELILYWLGMD0KR5HSTVWD5W&v=20200919";

      $.ajax({
        url: recomendURL,
        method: "GET"
      }).then(function(data) {
        console.log(data);

        var name = data.response.venue.name;
        var location = data.response.venue.location.formattedAddress[0] + " " + data.response.venue.location.formattedAddress[1];
        var rating = data.response.venue.rating;
        var url = data.response.venue.url;
        // var bestPhoto = data.response.venue.bestPhoto.prefix+data.response.venue.bestPhoto.source.suffix;

        var card = $("<div>").addClass("card");
        var title = $("<h3>").addClass("card-title").text(name);
        card.append(title);
        var body = $("<div>").addClass("card-body");
        var rating = $("<h6>").addClass("card-text").text("Rating: " + rating);
        body.append(rating);
        var address  = $("<p>").addClass("card-text").text("Address: " + location);
        body.append(address);
        var urlTag = $("<a>").addClass("card-text").text("URL: " + url).attr("href", url);
        body.append(urlTag);
        // var image = $("<img>").addClass("card-text").text("URL: " + bestPhoto).attr("href" + bestPhoto);
        // body.append(image);
        card.append(body);
        $("#resultsContainer").append(card);


      });

    };


    });

  };


  $(".submitCity").on("click", getPlaces);




});