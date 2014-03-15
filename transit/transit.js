//
// - - - BLUE LINE LOCATIONS
//

var blueLine = [{"id": 0, "Name": "Wonderland" , "Lat": 42.41342, "Lng": -70.991648},
				{"id": 1, "Name": "Revere Beach", "Lat": 42.40784254,"Lng": -70.99253321},
				{"id": 2, "Name": "Beachmont", "Lat": 42.39754234, "Lng": -70.99231944},
				{"id": 3, "Name": "Suffolk Downs", "Lat": 42.39050067, "Lng": -70.99712259},
				{"id": 4, "Name": "Orient Heights", "Lat": 42.386867, "Lng": -71.004736},
				{"id": 5, "Name": "Wood Island", "Lat": 42.3796403, "Lng": -71.02286539},
				{"id": 6, "Name": "Airport", "Lat": 42.374262, "Lng": -71.030395},		
				{"id": 7, "Name": "Maverick", "Lat": 42.3691186, "Lng": -71.03952958},
				{"id": 8, "Name": "Aquarium", "Lat": 42.359784, "Lng": -71.051652},
				{"id": 9, "Name": "State Street", "Lat": 42.358978, "Lng": -71.057598},
				{"id": 10, "Name": "Government Center", "Lat": 42.359705, "Lng": -71.059215},
				{"id": 11, "Name": "Bowdoin", "Lat": 42.361365 , "Lng": -71.062037}];


//
// - - - ORANGE LINE LOCATIONS
//

var orangeLine = [{"id": 0, "Name": "Oak Grove", "Lat":42.43668 , "Lng": -71.071097 },
				{"id": 1, "Name": "Malden Center", "Lat": 42.426632, "Lng": -71.07411},
				{"id": 2, "Name": "Wellington", "Lat": 42.40237 , "Lng": -71.077082},
				{"id": 3, "Name": "Sullivan", "Lat": 42.383975, "Lng": -71.076994},
				{"id": 4, "Name": "Community College", "Lat": 42.373622, "Lng": -71.069533},
				{"id": 5, "Name": "North Station" , "Lat": 42.365577, "Lng": -71.06129},
				{"id": 6, "Name": "Haymarket", "Lat": 42.363021, "Lng": -71.05829},
				{"id": 7, "Name": "State Street", "Lat": 42.358978, "Lng": -71.057598},
				{"id": 8, "Name": "Downtown Crossing", "Lat": 42.355518, "Lng": -71.060225},
				{"id": 9, "Name": "Chinatown", "Lat": 42.352547, "Lng": -71.062752},
				{"id": 10, "Name": "Tufts Medical", "Lat": 42.349662, "Lng": -71.063917},
				{"id": 11, "Name": "Back Bay", "Lat": 42.34735, "Lng": -71.075727},
				{"id": 12, "Name": "Mass Ave", "Lat": 42.341512, "Lng":  -71.083423},
				{"id": 13, "Name": "Ruggles", "Lat": 42.336377, "Lng": -71.088961},
				{"id": 14, "Name": "Roxbury Crossing", "Lat": 42.331397, "Lng": -71.095451},
				{"id": 15, "Name": "Jackson Square", "Lat": 42.323132,"Lng": -71.099592},
				{"id": 16, "Name": "Stony Brook", "Lat":42.317062, "Lng": -71.104248},
				{"id": 17, "Name": "Green Street", "Lat": 42.310525, "Lng": -71.107414},			
				{"id": 18, "Name": "Forest Hills", "Lat": 42.300523, "Lng": -71.113686}];
			



//
// - - - RED LINE LOCATIONS
//

var redLine = [{"id": 0, "Name": "Alewife", "Lat": 42.395428, "Lng": -71.142483},
			{"id": 1, "Name": "Davis", "Lat": 42.39674, "Lng": -71.121815},
			{"id": 2, "Name": "Porter Square", "Lat": 42.3884, "Lng": -71.119149}, 
			{"id": 3, "Name": "Harvard Square", "Lat": 42.373362, "Lng": -71.118956},
			{"id": 4, "Name": "Central Square", "Lat": 42.365486, "Lng": -71.103802},
			{"id": 5, "Name": "Kendall/MIT", "Lat": 42.36249079, "Lng": -71.08617653},
			{"id": 6, "Name": "Charles/MGH", "Lat": 42.361166, "Lng": -71.070628},
			{"id": 7, "Name": "Park Street", "Lat": 42.35639457, "Lng": -71.0624242},
			{"id": 8, "Name": "Downtown Crossing", "Lat": 42.355518, "Lng":	-71.060225},
			{"id": 9, "Name": "South Station", "Lat": 42.352271, "Lng": -71.055242},
			{"id": 10, "Name": "Broadway", "Lat": 42.342622, "Lng": -71.056967},
			{"id": 11, "Name": "Andrew", "Lat": 42.330154, "Lng":-71.057655},
			{"id": 12, "Name": "JFK/UMass", "Lat": 42.320685, "Lng": -71.052391},
			// First branch
			{"id": 13, "Name": "North Quincy", "Lat": 42.275275, "Lng": -71.029583},
			{"id": 14, "Name": "Wollaston", "Lat": 42.2665139, "Lng":-71.0203369},
			{"id": 15, "Name": "Quincy Center", "Lat": 42.251809, "Lng": -71.005409},
			{"id": 16, "Name": "Quincy Adams", "Lat": 42.233391, "Lng":	-71.007153},
			{"id": 17, "Name": "Braintree", "Lat": 42.2078543, "Lng": -71.0011385},
			// Second branch					
			{"id": 18, "Name": "Savin Hill", "Lat": 42.31129, "Lng": -71.053331},
			{"id": 19, "Name": "Fields Corner", "Lat": 42.300093, "Lng": -71.061667},
			{"id": 20, "Name": "Shawmut", "Lat": 42.29312583, "Lng": -71.06573796},
			{"id": 21, "Name": "Ashmont", "Lat": 42.284652, "Lng":-71.064489}]




//
// - - - DECLARING VARIABLES USED FOR MAP
//

var me; // user
var myLat = 0; // user's latitude
var myLng = 0; // user's longitude
var map; // the map
var marker; // user's marker
var infowindow = new google.maps.InfoWindow();
var data; // data from parsing the schedule


//
// - - - INITIALIZING MAP
//

// settings for the map
var mapOptions = {
		zoom: 13,
		center: me,
		mapTypeId: google.maps.MapTypeId.ROADMAP
	};


// purpose: create a new map within "map_canvas"
function initialize() {
	map = new google.maps.Map(document.getElementById('map_canvas'), mapOptions);
	getLocation();

	var request = new XMLHttpRequest();
	request.open("GET", "http://mbtamap.herokuapp.com/mapper/rodeo.json", true);
	request.send();
	request.onreadystatechange = function() {
		if (request.readyState==4 && request.status==200) {
			data = JSON.parse(request.responseText);
			createMarkers();
		}
	};
}


// use geolocation to get your GPS coordinates
function getLocation() {
	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(function(position) {
			myLat = position.coords.latitude;
			myLng = position.coords.longitude;
			renderMap();
		});
	} else {
		alert("Geolocation is not supported by your browser. So sad!");
	}

}

// loading the actual map
function renderMap() {
	// create map
	me = new google.maps.LatLng(myLat, myLng);
	// update map and go there!
	map.panTo(me);

	var image = 'me.png';
	// create a marker 
	marker = new google.maps.Marker({
		position: me,
		icon: image,
		map: map,
		title: "HI, YOU FOUND ME!"
	});

	// open an info window on click of marker
	google.maps.event.addListener(marker, 'click', function() {
		infowindow.setContent(marker.title);
		infowindow.open(map, marker);
	});

}


function createMarkers() {
	var line = data["line"];
	var length;

	if (line == "blue") {
		length = blueLine.length;
		icon = 'blue.png';
		color = '#0000FF';
		genMarkers(length, blueLine, icon, color);
	}
	if (line == "orange") {
		length = orangeLine.length;
		icon = "orange.png";
		color = "#FFA500";
		genMarkers(length, orangeLine, icon, color);
	} 
	if (line == "red") {
		length = redLine.length;
		icon = "red.png";
		color = '#FF0000';
		genMarkers(length, redLine, icon, color);
	}
}


function genMarkers(length, colorLine, icon, color){
	var stationArray = new Array();
	for (var i = 0; i < length; i++) {
		station = new google.maps.LatLng(colorLine[i]["Lat"], colorLine[i]["Lng"]);
		stationArray[i] = station;
		
		var stationMark = new google.maps.Marker({
			position: station,
			icon: icon,
			map: map
		});
	}
	var flightPath = new google.maps.Polyline({
		path: stationArray,
		geodesic: true,
		strokeColor: color,
		strokeOpacity: 1.0,
		strokeWeight: 6,
		map: map
	});

}








			
		/*	// open an info window on click of marker
			google.maps.event.addListener(redMarker, 'click', function() {
			infowindow.setContent(redMarker.title);
			infowindow.open(map, redMarker);
			});
		*/

/*

function drawLine() {
	var c = document.getElementById("myCanvas");
	var ctx = c.getContext("2d");
	ctx.fillStyle = "#FF0000";
	ctx.fillRect(0,0,150,75);
}





// DISPLAY INFO ON TRAINS COMING INTO STATION. 
//WHen you click on a marker, you only want the trains coming 
// and going into the station

// view-source:mbtamap.herokuapp.com

// NOTE: make sure you fix the error from JSON parsing.


content 






//
// CODE FROM CLASS
// 
data = JSON.parse (responseText);

// to print out a line:
// console.log(data.line);

//  Demo
stop_of_interest = "Davis";


// Step 1: go through each train destination
for (i = 0; i < data["schedule"].length; i++) {
	destination = data["schedule"][i];

	// step 2: get list of stops 
	stops = destination["Predictions"];
	for (j = 0; j < stops.length; j++) {
		s = stops[j];
		if (s == stop_of_interest) {
			console.log(s["Seconds"]);
			console.log(destination["Destination"]);
		}
	}
}







 NOTES
google.maps.Map - The map object (duh!)
google.maps.LatLng - An object that contains the latitude and longitude pair
google.maps.Marker - A marker
google.maps.InfoWindow - An info window
google.maps.Polyline - A linear overlay
google.maps.event - An event listener for Google Maps


*/


