var map = L.map('map').setView([51.505, -0.09], 13);

map.layers = {}

for (var date in dates){
	date = dates[date];
	if (date.georeferenced){
		map.layers["" + date.date] = L.tileLayer(date.url);
	}
	else{
		map.layers["" + date.date] = L.imageOverlay(date.url, date.extent);
	}
}