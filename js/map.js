var map = L.map('map').setView([51.505, -0.09], 13);

var maps = {}

maps[9999] = L.tileLayer('http://{s}.tile.openstreetmap.de/tiles/osmde/{z}/{x}/{y}.png', {
	maxZoom: 18,
	attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
});

for (var date in dates){
	if (date.georeferenced){
		maps[date.date] = L.tileLayer(date.url);
	}
	else{
		maps[date.date] = L.imageOverlay(date.url, date.extent);
	}
}