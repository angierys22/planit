$(document).ready(function() {
  function getPlaces(event) {
    event.preventDefault();

    var city = $("#placeInput").val();
    var queryUrl = "https://api.foursquare.com/v2/venues/explore?near=" + city + "&client_id=2OFOIP1A1GDY3B4FAGF5BK5QOIYCJTEZCWQD3BMXQ2VJZQ44&client_secret=EOAEF4LRDHTTBXMCHQIFX2TAA4KJW0UPAYWFTNRR5EWROITL&v=20200919";
    
    $.ajax({
              url: queryUrl,
              method: "GET",
      
    }).then(function(response) {
      console.log(response)

    //                 // create html containers for search results
    
    //                 var card = $("<div>").addClass("card");
    //                 var body = $("<div>").addClass("card-body");
    //                 var title = $("<h3>").addClass("card-title").text(bestPhoto);
    //                 var name = $("<p>").addClass("card-text").text(name);
    //                 var address  = $("<p>").addClass("card-text").text(locaion.address);
    //                 var rating = $("<p>").addClass("card-text").text(rating);
    //                 var url = $("<p>").addClass("card-text").text(url);
    //                 // merge and add to the page
    //                 card.append(body);
    //                 // title.append(tilte);
    //                 body.append(title, name, address, cat);
    //                 $("#resultsContainer").append(card);
    });
    
    // $("#resultsContainer").empty();
  };

$(".submitCity").on("click", getPlaces);
console.log("click")

// function getLinks(event) {
//   event.preventDefault();
  
//   var city = $("#placeInput").val();
//   var queryUrl = "https://https://api.foursquare.com/v2/venues/VENUE_ID/links=" + city + "&client_id=2OFOIP1A1GDY3B4FAGF5BK5QOIYCJTEZCWQD3BMXQ2VJZQ44&client_secret=EOAEF4LRDHTTBXMCHQIFX2TAA4KJW0UPAYWFTNRR5EWROITL&v=20200919";
//   $.ajax({
//       url: queryUrl,
//       method: "GET",
//     }).then(function(response) {
//       console.log(response)
//   });
// };

});