
	//Deklarasi Map
	var mymap = L.map('mapid').setView([1.311054, 124.796944], 13);

			L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
				attribution: 'Map data&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
				maxZoom: 18,
				id: 'mapbox.streets',
				accessToken: 'pk.eyJ1IjoibWFyY2VsbGthbGl0b3V3IiwiYSI6ImNqbWM3Z2k4OTA3NXIza256OWY4MXM1cWQifQ.ZuXcoyil-xRQl1JRGdl69g'
			}).addTo(mymap);


	var marker = L.marker([1.315548, 124.799058]).addTo(mymap);

	var polygon = L.polygon([
		[1.318734, 124.800678],
		[1.312041, 124.801150],
    [1.309123, 124.800292],
    [1.302344, 124.791237],
		[1.305476, 124.791923],
		[1.309123, 124.794326],
		[1.315387, 124.793082],
		[1.318734, 124.800678]
	]).addTo(mymap);

	 marker.bindPopup("<b>Kantor Kelurahan Woloan 3</b>").openPopup();
	//circle.bindPopup("ini sebuah circle.");
	polygon.bindPopup("Ini Wilayah kelurahan Woloan 3");

	var popup = L.popup();
	function onMapClick(e) {popup
		.setLatLng(e.latlng)
		.setContent("Lokasi yang dipilih: " + e.latlng.toString())
		.openOn(mymap);
	}

	mymap.on('click', onMapClick);
