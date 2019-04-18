
	//Deklarasi Map
	var mymap = L.map('mapid').setView([1.313067, 124.831040], 13);

			L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
				attribution: 'Map data&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
				maxZoom: 18,
				id: 'mapbox.streets',
				accessToken: 'pk.eyJ1IjoibWFyY2VsbGthbGl0b3V3IiwiYSI6ImNqbWM3Z2k4OTA3NXIza256OWY4MXM1cWQifQ.ZuXcoyil-xRQl1JRGdl69g'
			}).addTo(mymap);


	var marker = L.marker([1.313647, 124.832727]).addTo(mymap);

	var polygon = L.polygon([
		[1.321949, 124.833250],
		[1.321533, 124.833862],
    [1.320557, 124.833668],
    [1.320256, 124.834741],
		[1.320793, 124.834827],
		[1.320664, 124.835664],
		[1.320138, 124.836769],
		[1.319784, 124.836512],
		[1.318873, 124.836136],
		[1.318079, 124.836125],
		[1.317446, 124.835975],
		[1.316127, 124.835128],
		[1.315076, 124.834924],
		[1.314743, 124.835128],
		[1.312104, 124.834784],
		[1.306278, 124.832263],
		[1.305763, 124.832832],
		[1.303146, 124.830632],
		[1.304047, 124.829559],
		[1.305012, 124.829613],
		[1.305956, 124.829098],
		[1.306203, 124.828712],
		[1.306417, 124.828615],
		[1.307039, 124.828572],
		[1.310697, 124.826577],
		[1.311716, 124.826609],
		[1.312885, 124.826051],
		[1.314859, 124.825654],
		[1.317283, 124.825804],
		[1.317562, 124.825933],
		[1.317798, 124.830750],
		[1.317326, 124.829012],
		[1.321949, 124.833250]
	]).addTo(mymap);

	 marker.bindPopup("<b>Kantor Kelurahan Kolongan 1</b>").openPopup();
	//circle.bindPopup("ini sebuah circle.");
	polygon.bindPopup("Ini Wilayah kelurahan Kolongan 1");

	var popup = L.popup();
	function onMapClick(e) {popup
		.setLatLng(e.latlng)
		.setContent("Lokasi yang dipilih: " + e.latlng.toString())
		.openOn(mymap);
	}

	mymap.on('click', onMapClick);
