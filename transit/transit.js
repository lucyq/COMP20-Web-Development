
var request = new XMLHttpRequest();
var me = new google.maps.LatLng(myLat, myLng);
var myOptions = {
	zoom: 13,
	center: me,
	mapTypeId: google.maps.MapTypeId.ROADMAP

};

var map;
var marker;
var infowindow=new google.maps.InfoWindow();
var places;




function init() // create the map
{
	map = new google.maps.Map(document.getElementById("map_canvas", myOptions);
		getMyLocation();
}

function getMyLocation() // get user's location
{
	if (navigator.geolocation) { // if geolocation is supported
		navigator.geolocation.getCurrentPosition(function(position){
			myLat = position.coords.latitude;
			myLng = position.coords.longitude;
			renderMap();
		});

	}
	else {
		alert("Geolocation is not supported by your web browser. Sorry!");
	}
}

function renderMap() 
{
	me = new google.maps.LatLng(myLat,myLng);
	// update map and go there


	// create new marker
	marker = new google.maps.Marker({
		position: me,
		title: "Here I Am!"

	 });
	marker.setMap(map);

	// Open info window on click of marker
				google.maps.event.addListener(marker, 'click', function() {
					infowindow.setContent(marker.title);
					infowindow.open(map, marker);
				});

				// Calling Google Places API
				var request = {
					location: me,
					radius: '500',
					types: ['food']
				};
				service = new google.maps.places.PlacesService(map);
				service.search(request, callback);
}
	// Taken from http://code.google.com/apis/maps/documentation/javascript/places.html
function callback(results, status)
{
	if (status == google.maps.places.PlacesServiceStatus.OK) {
		alert("Got places back!");
		places = results;
		for (var i = 0; i < results.length; i++) {
		createMarker(results[i]);
		}
	}
}

















