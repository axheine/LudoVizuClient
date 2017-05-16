<<<<<<< HEAD
var map = L.map('map').setView([51.5, -0.09], 10);
var layers = {
	'xxx': L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
		attribution: '',
		maxZoom: 18,
		id: 'mapbox.streets',
	})
};

layers.xxx.addTo(map);
=======


$(function() {
	 $('.button-collapse').sideNav({
      menuWidth: 350, // Default is 300
      edge: 'right', // Choose the horizontal origin
      closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
      draggable: true // Choose whether you can drag to open on touch screens
    }
  );
});
>>>>>>> origin/master
