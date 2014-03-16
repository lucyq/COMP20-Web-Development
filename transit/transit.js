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
// - - - GLOBAL VARIABLES
//
// basics
var map; // the map
var data; // data from parsing the schedule

// user
var me; 
var myLat = 0; // user's latitude
var myLng = 0; // user's longitude
var marker; // user's marker
var infowindow = new google.maps.InfoWindow(); // user's infowindow

// variables modified by helper functions
var stationArray = new Array(); // stores station locations, used for polylines
var foundStation; // stores closest station to user
var foundSeconds = new Array();
var endPoint = new Array(); // destinations
var predictions = new Array(); // predictions for each destination
var tableArray = new Array(); // table storing schedule info

//
// - - - INITIALIZING MAP
//

// settings for the map
var mapOptions = {
		zoom: 13,
		center: me,
		mapTypeId: google.maps.MapTypeId.ROADMAP
	};


// Purpose: sets up the map. also checks the status and parses information
function initialize() {
	map = new google.maps.Map(document.getElementById('map_canvas'), mapOptions);

	var request = new XMLHttpRequest();
	request.open("GET", "http://mbtamap.herokuapp.com/mapper/rodeo.json", true);
	request.send();
	request.onreadystatechange = function() {
		if (request.readyState==4 && request.status==200) {
			getLocation();
			data = JSON.parse(request.responseText);	
		}
	};


}


// Purpose: use geolocation to get user's GPS coordinates. calls functions
//			create various markers
function getLocation() {
	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(function(position) {
			myLat = position.coords.latitude;
			myLng = position.coords.longitude;
			manageLines();
			renderMap();
		
		});
	} else {
		alert("Geolocation is not supported by your browser. So sad!");
	}

}

// Purpose: creates marker with user's coordinates
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
		map: map
	});

	var meDiv = document.createElement("div");
	meDiv.id = "meDiv";
	meDiv.innerHTML = foundStation;


	// open an info window on click of marker
	google.maps.event.addListener(marker, 'click', function() {
		infowindow.setContent(meDiv);
		infowindow.open(map, marker);
	});

}

//
// - - - SETTING UP STATION MARKERS
//

// Purpose: checks the line and then calls functions to 
//			generate markers and calculate distances
function manageLines() {
	var line = data["line"];
	var length;

	if (line == "blue") {
		length = blueLine.length;
		icon = 'blue.png';
		color = '#0000FF';
		genMarkers(length, blueLine, icon, color);
		manageDistances(length, blueLine);
	}
	if (line == "orange") {
		length = orangeLine.length;
		icon = "orange.png";
		color = "#FFA500";
		genMarkers(length, orangeLine, icon, color);
		manageDistances(length, orangeLine);
	} 
	if (line == "red") {
		length = redLine.length;
		icon = "red.png";
		color = '#FF0000';
		genMarkers(length, redLine, icon, color);
		manageDistances(length, redLine);
	}
}

// Purpose: Creates the individual markers depending on the line
function genMarkers(length, colorLine, icon, color){
	var list;
	var listItem;

	// creating stations locations & markers
	for (var i = 0; i < length; i++) {
		station = new google.maps.LatLng(colorLine[i]["Lat"], colorLine[i]["Lng"]);
		stationArray[i] = station;
		
		// create markers
		var stationMark = new google.maps.Marker({
			position: station,
			icon: icon,
			map: map
		}); 
		// CREATE TABLE
		findInfo(colorLine[i]["Name"]);

		var stationWindow = new google.maps.InfoWindow();

		var infoList = document.createElement("ul");
		infoList.id = "infoDiv";
		infoList.innerHTML = colorLine[i]["Name"];

		for (var j = 0; j < tableArray.length; j++) {
			list = document.createElement("ul");
			list.innerHTML = "Direction: " + tableArray[j]["Direction"];
			listItem = document.createElement("li");
			listItem.innerHTML = "Arriving in: " + tableArray[j]["Seconds"] + " minutes";
			list.appendChild(listItem);
			infoList.appendChild(list); 
		}
		

		// create the actual infowindows
		google.maps.event.addListener(stationMark, 'click', (function(infoList, i) {
			return function() {
				stationWindow.setContent(infoList);
				stationWindow.open(map, this);
			}
		})(infoList, i));
	}
	createPolylines(color);
}
// Argument: variable for the color of the line
// Purpose: Create polylines depending on line
function createPolylines(color) {
	var line = data["line"];
	if (line == "red") {
		red1 = new Array();
		red2 = new Array();

		red2[0] = stationArray[12];
		var j = 18;
		for (var i = 1; i < 5; i++) {
			red2[i] = stationArray[j];
			j++;
		}
		for (var k = 0; k < 18; k++) {
			red1[k] = stationArray[k];
		}

		var redPath1 = new google.maps.Polyline({
		path: red1,
		geodesic: true,
		strokeColor: color,
		strokeOpacity: 1.0,
		strokeWeight: 6,
		map: map
		});
		var redPath2 = new google.maps.Polyline({
		path: red2,
		geodesic: true,
		strokeColor: color,
		strokeOpacity: 1.0,
		strokeWeight: 6,
		map: map
		});
	} else {
		var flightPath = new google.maps.Polyline({
		path: stationArray,
		geodesic: true,
		strokeColor: color,
		strokeOpacity: 1.0,
		strokeWeight: 6,
		map: map
		});
	}

}

// Purpose: searches the data for relevant information. Finds 
//			direction and times
function findInfo(findStop) {

	var count = 0;
	for (var j = 0; j < data["schedule"].length; j++) {
		endPoint[j] = data["schedule"][j]["Destination"]
		predictions[j] = data["schedule"][j]["Predictions"];
		for (var k = 1; k < predictions[j].length; k++) {
			var s = predictions[j][k]["Stop"];
			if (s == findStop) {
				foundSeconds = predictions[j][k]["Seconds"];
				minSecs = Math.floor(foundSeconds/60);
				foundSeconds = foundSeconds % 60;     
				
				tableArray[count] = {"Direction": endPoint[j], 
									 "Seconds": foundSeconds};
				count++;
			}
		}
	}
}



//
// - - - FINDING DISTANCES
//


// Purpose: manages finding shortest distance between user and station
//			converts kilometers to miles
function manageDistances(length, colorLine) {
	var distances = new Array();

	var i = 0;
	var j = 0;
	var a = new Array();
	var convertedD;

	distances[i] = findDistance(myLat, colorLine[i]["Lat"], 
									myLng, colorLine[i]["Lng"]);

	for (i = 1; i < length; i++) {
		distances[i] = findDistance(myLat, colorLine[i]["Lat"], 
									myLng, colorLine[i]["Lng"]);
		if (distances[i] <= distances[i-1]) {
			a[j] = i;
			j++;
		}
	}

	var index = a[j-2];
	convertedD = convertMiles(distances[index]);
	foundStation = "Closest T Station: " + colorLine[index]["Name"] + 
					". It is approximately " + convertedD + " miles away from you";
}
// Argument: user's latitude, station's latitude, user's long, station's long
// Purpose: finds the shortest distance between you and station
// Returns: the distance
function findDistance (lat1, lat2, lon1, lon2) {
	var R = 6371; // km
	var dLat = toRad(lat2-lat1);
	var dLon = toRad(lon2-lon1);
	var lat1 = toRad(lat1);
	var lat2 = toRad(lat2);

	var a = Math.sin(dLat/2) * Math.sin(dLat/2) +
    	    Math.sin(dLon/2) * Math.sin(dLon/2) * Math.cos(lat1) * Math.cos(lat2); 
	var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
	var d = R * c;

	return d;
}
// Purpose: convert to radians
function toRad(x) {
   return x * Math.PI / 180;
}

// convert km to miles
function convertMiles(distance) {
	distance = distance * 0.621371;
	return distance;
}