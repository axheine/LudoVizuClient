var map = L.map('map').setView([51.5, -0.09], 10);
var layers = {
	'xxx': L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
		attribution: '',
		maxZoom: 18,
		id: 'mapbox.streets',
	})
};

layers.xxx.addTo(map);