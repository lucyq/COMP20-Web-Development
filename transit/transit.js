// 
// - - - CREATING THE MAP
// 



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
	map = new google.maps.Map(document.getElementById("map_canvas", myOptions));
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







//
// - - - JSON PARSING
//


function parse() {

str = '[{"line":"red","schedule":[{"TripID":"R9833841D","Destination":"Alewife",
"Position":{"Timestamp":1393877211,"Train":"1640","Lat":42.28458,"Long":-71.06377,"Heading":330},
"Predictions":[{"StopID":"70094","Stop":"Ashmont","Seconds":16},{"StopID":"70092","Stop":"Shawmut",
"Seconds":88},{"StopID":"70090","Stop":"Fields Corner","Seconds":201},{"StopID":"70088","Stop":"Savin Hill",
"Seconds":429},{"StopID":"70086","Stop":"JFK/UMass","Seconds":585}]},{"TripID":"R98338499","Destination":
"Ashmont","Predictions":[{"StopID":"70061","Stop":"Alewife","Seconds":272},{"StopID":"70063","Stop":"Davis",
"Seconds":382},{"StopID":"70065","Stop":"Porter Square","Seconds":504},{"StopID":"70067","Stop":"Harvard Square",
"Seconds":668},{"StopID":"70069","Stop":"Central Square","Seconds":891},{"StopID":"70071","Stop":"Kendall/MIT",
"Seconds":1030}]},{"TripID":"R98338456","Destination":"Ashmont","Position":{"Timestamp":1393877310,"Train":"1624",
"Lat":42.35648,"Long":-71.06265,"Heading":130},"Predictions":[{"StopID":"70077","Stop":"Downtown Crossing","Seconds":17},
{"StopID":"70079","Stop":"South Station","Seconds":111},{"StopID":"70081","Stop":"Broadway","Seconds":256},{"StopID":
"70083","Stop":"Andrew","Seconds":388},{"StopID":"70085","Stop":"JFK/UMass","Seconds":538},{"StopID":"70087",
"Stop":"Savin Hill","Seconds":685},{"StopID":"70089","Stop":"Fields Corner","Seconds":908},{"StopID":"70091","Stop":
"Shawmut","Seconds":1036},{"StopID":"70093","Stop":"Ashmont","Seconds":1187}]},{"TripID":"R983384CC","Destination":
"Alewife","Position":{"Timestamp":1393877349,"Train":"1830","Lat":42.35266,"Long":-71.05536,"Heading":290},"Predictions":
[{"StopID":"70078","Stop":"Downtown Crossing","Seconds":54},{"StopID":"70076","Stop":"Park Street","Seconds":144},
{"StopID":"70074","Stop":"Charles/MGH","Seconds":279},{"StopID":"70072","Stop":"Kendall/MIT","Seconds":421},
{"StopID":"70070","Stop":"Central Square","Seconds":572},{"StopID":"70068","Stop":"Harvard Square","Seconds":774},
{"StopID":"70066","Stop":"Porter Square","Seconds":965},{"StopID":"70064","Stop":"Davis","Seconds":1082}]},{"TripID":"R98338445",
"Destination":"Alewife","Predictions":[{"StopID":"70094","Stop":"Ashmont","Seconds":1156}]},{"TripID":"R98338444","Destination":
"Ashmont","Position":{"Timestamp":1393877360,"Train":"1883","Lat":42.30377,"Long":-71.05578,"Heading":195},"Predictions":[
{"StopID":"70089","Stop":"Fields Corner","Seconds":80},{"StopID":"70091","Stop":"Shawmut","Seconds":208},{"StopID":"70093","Stop":
"Ashmont","Seconds":359}]},{"TripID":"R98338498","Destination":"Alewife","Position":{"Timestamp":1393877372,"Train":"1730","Lat":
42.39788,"Long":-71.13665,"Heading":260},"Predictions":[{"StopID":"70061","Stop":"Alewife","Seconds":33}]},{"TripID":"R983384B4",
"Destination":"Ashmont","Predictions":[{"StopID":"70061","Stop":"Alewife","Seconds":796},{"StopID":"70063","Stop":"Davis",
"Seconds":906},{"StopID":"70065","Stop":"Porter Square","Seconds":1027},{"StopID":"70067","Stop":"Harvard Square","Seconds":1191}]},
{"TripID":"R983385D3","Destination":"Alewife","Position":{"Timestamp":1393877346,"Train":"1702","Lat":42.27582,"Long":-71.03012,
"Heading":315},"Predictions":[{"StopID":"70096","Stop":"JFK/UMass","Seconds":399},{"StopID":"70084","Stop":"Andrew","Seconds":620},
{"StopID":"70082","Stop":"Broadway","Seconds":757},{"StopID":"70080","Stop":"South Station","Seconds":917},{"StopID":"70078",
"Stop":"Downtown Crossing","Seconds":1006},{"StopID":"70076","Stop":"Park Street","Seconds":1096}]},{"TripID":"R98338486",
"Destination":"Ashmont","Position":{"Timestamp":1393877373,"Train":"1815","Lat":42.38826,"Long":-71.11895,"Heading":180},
"Predictions":[{"StopID":"70067","Stop":"Harvard Square","Seconds":153},{"StopID":"70069","Stop":"Central Square","Seconds":376},
{"StopID":"70071","Stop":"Kendall/MIT","Seconds":515},{"StopID":"70073","Stop":"Charles/MGH","Seconds":667},{"StopID":"70075",
"Stop":"Park Street","Seconds":788},{"StopID":"70077","Stop":"Downtown Crossing","Seconds":879},{"StopID":"70079","Stop":
"South Station","Seconds":973},{"StopID":"70081","Stop":"Broadway","Seconds":1118}]},{"TripID":"R983384F9","Destination":
"Alewife","Position":{"Timestamp":1393877364,"Train":"1859","Lat":42.32057,"Long":-71.05256,"Heading":350},"Predictions":
[{"StopID":"70084","Stop":"Andrew","Seconds":163},{"StopID":"70082","Stop":"Broadway","Seconds":300},{"StopID":"70080","Stop":
"South Station","Seconds":460},{"StopID":"70078","Stop":"Downtown Crossing","Seconds":549},{"StopID":"70076","Stop":"Park Street",
"Seconds":639},{"StopID":"70074","Stop":"Charles/MGH","Seconds":774},{"StopID":"70072","Stop":"Kendall/MIT","Seconds":916},
{"StopID":"70070","Stop":"Central Square","Seconds":1067}]},{"TripID":"R983385FC","Destination":"Alewife","Position":
{"Timestamp":1393877112,"Train":"1521","Lat":42.20749,"Long":-71.00173,"Heading":190},"Predictions":[{"StopID":"70105","Stop":
"Braintree","Seconds":256},{"StopID":"70104","Stop":"Quincy Adams","Seconds":490},{"StopID":"70102","Stop":"Quincy Center","
Seconds":683},{"StopID":"70100","Stop":"Wollaston","Seconds":851},{"StopID":"70098","Stop":"North Quincy","Seconds":969}]},
{"TripID":"R9833858D","Destination":"Braintree","Predictions":[{"StopID":"70061","Stop":"Alewife","Seconds":484},{"StopID":
"70063","Stop":"Davis","Seconds":594},{"StopID":"70065","Stop":"Porter Square","Seconds":716},{"StopID":"70067",
"Stop":"Harvard Square","Seconds":880},{"StopID":"70069","Stop":"Central Square","Seconds":1103}]},{"TripID":"R9833858C",
"Destination":"Alewife","Position":{"Timestamp":1393877374,"Train":"1729","Lat":42.38923,"Long":-71.11931,"Heading":0},
"Predictions":[{"StopID":"70064","Stop":"Davis","Seconds":89},{"StopID":"70061","Stop":"Alewife","Seconds":245}]},
{"TripID":"R983385C7","Destination":"Alewife","Position":{"Timestamp":1393877360,"Train":"1823","Lat":42.33107,
"Long":-71.057,"Heading":0},"Predictions":[{"StopID":"70082","Stop":"Broadway","Seconds":96},{"StopID":"70080","Stop":
"South Station","Seconds":256},{"StopID":"70078","Stop":"Downtown Crossing","Seconds":345},{"StopID":"70076","Stop":"Park Street","Seconds":435},{"StopID":"70074","Stop":"Charles/MGH","Seconds":570},{"StopID":"70072","Stop":"Kendall/MIT","Seconds":712},{"StopID":"70070","Stop":"Central Square","Seconds":863},{"StopID":"70068","Stop":"Harvard Square","Seconds":1065}]},{"TripID":"R98338575","Destination":"Braintree","Position":{"Timestamp":1393877274,"Train":"1619","Lat":42.39618,"Long":-71.14054,"Heading":265},"Predictions":[{"StopID":"70061","Stop":"Alewife","Seconds":96},{"StopID":"70063","Stop":"Davis","Seconds":206},{"StopID":"70065","Stop":"Porter Square","Seconds":327},{"StopID":"70067","Stop":"Harvard Square","Seconds":491},{"StopID":"70069","Stop":"Central Square","Seconds":714},{"StopID":"70071","Stop":"Kendall/MIT","Seconds":854}]},{"TripID":"R983384B3","Destination":"Alewife","Position":{"Timestamp":1393877349,"Train":"1820","Lat":42.36953,"Long":-71.11154,"Heading":300},"Predictions":[{"StopID":"70068","Stop":"Harvard Square","Seconds":58},{"StopID":"70066","Stop":"Porter Square","Seconds":249},{"StopID":"70064","Stop":"Davis","Seconds":366},{"StopID":"70061","Stop":"Alewife","Seconds":522}]},{"TripID":"R983385E1","Destination":"Alewife","Position":{"Timestamp":1393877373,"Train":"1750","Lat":42.22515,"Long":-71.00386,"Heading":330},"Predictions":[{"StopID":"70104","Stop":"Quincy Adams","Seconds":26},{"StopID":"70102","Stop":"Quincy Center","Seconds":219},{"StopID":"70100","Stop":"Wollaston","Seconds":391},{"StopID":"70098","Stop":"North Quincy","Seconds":516},{"StopID":"70096","Stop":"JFK/UMass","Seconds":953},{"StopID":"70084","Stop":"Andrew","Seconds":1174}]},{"TripID":"R98338523","Destination":"Braintree","Position":{"Timestamp":1393877327,"Train":"1825","Lat":42.25203,"Long":-71.00551,"Heading":150},"Predictions":[{"StopID":"70103","Stop":"Quincy Adams","Seconds":120},{"StopID":"70105","Stop":"Braintree","Seconds":368}]},{"TripID":"R983385AB","Destination":"Alewife","Position":{"Timestamp":1393877373,"Train":"1704","Lat":42.36246,"Long":-71.08581,"Heading":275},"Predictions":[{"StopID":"70070","Stop":"Central Square","Seconds":140},{"StopID":"70068","Stop":"Harvard Square","Seconds":342},{"StopID":"70066","Stop":"Porter Square","Seconds":533},{"StopID":"70064","Stop":"Davis","Seconds":650},{"StopID":"70061","Stop":"Alewife","Seconds":806}]},{"TripID":"R9833853C","Destination":"Braintree","Position":{"Timestamp":1393877348,"Train":"1620","Lat":42.34064,"Long":-71.05708,"Heading":175},"Predictions":[{"StopID":"70083","Stop":"Andrew","Seconds":18},{"StopID":"70095","Stop":"JFK/UMass","Seconds":167},{"StopID":"70097","Stop":"North Quincy","Seconds":595},{"StopID":"70099","Stop":"Wollaston","Seconds":726},{"StopID":"70101","Stop":"Quincy Center","Seconds":897},{"StopID":"70103","Stop":"Quincy Adams","Seconds":1074}]},{"TripID":"R9833855E","Destination":"Braintree","Position":{"Timestamp":1393877348,"Train":"1857","Lat":42.36289,"Long":-71.09249,"Heading":95},"Predictions":[{"StopID":"70071","Stop":"Kendall/MIT","Seconds":-4},{"StopID":"70073","Stop":"Charles/MGH","Seconds":148},{"StopID":"70075","Stop":"Park Street","Seconds":269},{"StopID":"70077","Stop":"Downtown Crossing","Seconds":360},{"StopID":"70079","Stop":"South Station","Seconds":454},{"StopID":"70081","Stop":"Broadway","Seconds":599},{"StopID":"70083","Stop":"Andrew","Seconds":734},{"StopID":"70095","Stop":"JFK/UMass","Seconds":883}]}]}']


var stations = JSON.parse(str);
}










