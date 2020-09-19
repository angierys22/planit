$(document).ready(function() {

var queryUrl ="https://api.foursquare.com/v2/venues/search?ll=40.7,-74&client_id="
+"2OFOIP1A1GDY3B4FAGF5BK5QOIYCJTEZCWQD3BMXQ2VJZQ44&client_secret="+
"EOAEF4LRDHTTBXMCHQIFX2TAA4KJW0UPAYWFTNRR5EWROITL&v=YYYYMMDD";
// // var CLIENT_ID = "2OFOIP1A1GDY3B4FAGF5BK5QOIYCJTEZCWQD3BMXQ2VJZQ44";
// // var CLIENT_SECRET ="EOAEF4LRDHTTBXMCHQIFX2TAA4KJW0UPAYWFTNRR5EWROITL";

// var parse = function (categories) {
//   categories.forEach(function (category) {
//       if (category.categories && category.categories.length) {
//           console.group(category.name);
//           parse(category.categories);
//           console.groupEnd(category.name);
//       } else {
//           console.log(category.name);
//       }
//   });
// }; 
// $.getJSON("https://api.foursquare.com/v2/venues/categories?&client_id=" 
// +"2OFOIP1A1GDY3B4FAGF5BK5QOIYCJTEZCWQD3BMXQ2VJZQ44&client_secret="+
// "EOAEF4LRDHTTBXMCHQIFX2TAA4KJW0UPAYWFTNRR5EWROITL&v&v=20130713&callback=?", 
// function (data) {
//   parse(data.response.categories);
// });
$("#submitCity").on("click", function () {
  getPlaces() 
})
  console.log("Clicked")



// function getPlaces(){
//   var data = $("#city").val();
// $.ajax({
//   url: queryUrl,
//   method: "GET", 
// })
// .then(function(data) {
//   $.each(data.response.venues, function(i,venues){
//       content = '<p>' + venues.name + '</p>';
//       $(content).appendTo("#names");
// });
// });

// }
// })


// ________________



// var Foursquare = function () {
//       var init = function (client_id,client_secret) {
//       clientId = "2OFOIP1A1GDY3B4FAGF5BK5QOIYCJTEZCWQD3BMXQ2VJZQ44";
//       clientSecret = "EOAEF4LRDHTTBXMCHQIFX2TAA4KJW0UPAYWFTNRR5EWROITL&v=YYYYMMDD";
//       version = getVersionString();
//       defaultLngLat = '40.7,-74';
//   }
//   /*The Foursquare api changes. Passing a "v" parameter on the call
//     means you are requesting the most recent from ths date. 
//     This creates a version string based on todays date
//   */
//   var getVersionString=function()
//   {
//       // Foursquare wants the format YYYYMMDD
//       var today = new Date()
//       var day = today.getDate().toString();
//       var month = today.getMonth() + 1;
//       month = (month < 10) ? '0' + month.toString() : month.toString();
//       var year = today.getFullYear().toString();
//       var dateString = year + month + day;
//       return(dateString);
//   }

//   var endPoints = {
//       'getVenueDetailById': 'https://api.foursquare.com/v2/venues/',
//       'getVenueCategories': 'https://api.foursquare.com/v2/venues/categories',
//       'getPopularVenues': 'https://api.foursquare.com/v2/venues/explore',
//       'searchVenues': 'https://api.foursquare.com/v2/venues/search',
//       'getTrendingVenues': 'https://api.foursquare.com/v2/venues/trending',
//   }

  
//   var getVenueDetailById = function (venue_id) {
    
//       var url = endPoints['getVenueDetailById'] + venue_id;
//       return (makeJSONRequest(newUrl));
//   }


//   var getVenueCategories = function () {
//       var url = endPoints['getVenueCategories'];
//       return (makeJSONRequest(url));
//   }

//   /*
//   Please refer to https://developer.foursquare.com/docs/venues/explore for the option parameters that can be sent
//   */
//   var getPopularVenues = function (options) {
  
//       var url = endPoints['getPopularVenues'];
//       if (!options) {
//           options = { 'll': defaultLngLat };
//       }
    
//       return (makeJSONRequest(url, options));
//   }
//   //https://developer.foursquare.com/docs/venues/search
//   var searchVenues = function (options) {
//       // needs to be sorted
//       var url = endPoints['searchVenues'];
//       if (!options) {
//           options = {'ll':defaultLngLat};
//       }
//       return (makeJSONRequest(url, options));
//   }
//   var getTrendingVenues = function (options) {
//       if (!options) {
//           options = { 'll': defaultLngLat };
//       }
//       var url = endPoints['getTrendingVenues']
      
//       return (makeJSONRequest(url, options));
//   }


//   var makeJSONRequest = function (url, data) {
//       var self = this;
//       if (!data) { data = {} }
    
//       data.client_id = clientId;
//       data.client_secret = clientSecret;
//       data.v = version;
    
//       var jqxhr = $.getJSON(url, data);
      
//       return (jqxhr);

//   }

//   return {
//       // public properties
//       init: init,
//       getTrendingVenues: getTrendingVenues,
//       searchVenues:searchVenues,
//       getPopularVenues: getPopularVenues,
//       getVenueCategories:getVenueCategories

//   }
// }();

})