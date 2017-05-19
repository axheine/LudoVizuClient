var map = L.map('map', {
	maxBoundsViscosity: 1.0
}).setView([51.505, -0.09], 13);
map.layers = {};

$(function() {

	$('.button-collapse').sideNav({
		menuWidth: "auto", // Default is 300
		edge: 'right', // Choose the horizontal origin
		closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
		draggable: true // Choose whether you can drag to open on touch screens
	});

	$('.modal').modal();


	$('.modal > .content-min-header').on('click', function() {
		$('.modal').modal('close');
	});


	// Fix slideNav hiding behavior on bigger widths
	$("#slide-out").off("click").click(function() {
		if(window.innerWidth <= 993) {
			$("slide-out").sideNav('hide');
		}
	});

	loadDatesMenu();



});

setContentIntro = function() {
	if ($('#content-title-large').html() === "") {
		let map = $('#map');
		let intro = $('#intro');

		map.removeClass("hide");
		intro.addClass("hide");
	}
}

loadDatesMenu = function() {
	let menu = $("#slide-out");
	dates.forEach(function(date) {

		loadDateLayer(date);
		menu.append('<li><a id="date_'+date.date+'"> <svg width="16" height="48">'
   			+'<line x1="8" y1="0" x2="8" y2="50" stroke="grey" />'
   			+'<circle cx="8" cy="24" r="5" stroke="grey" stroke-width="2" fill="'+date.color+'" />'
		+'</svg> <span>'+date.date+" "+date.title+"</span></a></li>");
		$("#date_"+date.date).click(function() {
			refreshContent(date);
			map.eachLayer(function(layer){
				layer.remove();
			});
			map.addLayer(map.layers["" + date.date]);
			map.fitBounds(date.extent);
			map.setMaxBounds(date.extent);
			map.setMinZoom(date.minZoom);
		});
	});
};

loadDateLayer = function(date){
	if (date.georeferenced){
		map.layers["" + date.date] = L.tileLayer(date.url, {
			minZoom: date.minZoom,
			maxZoom: date.maxZoom
		});
	}
	else{
		map.layers["" + date.date] = L.imageOverlay(date.url, date.extent);
	}
};

refreshContent = function(date) {
	setContentIntro();
	let contentTitleLarge = $("#content-title-large");
	let contentValueLarge = $("#content-value-large");

	let contentTitleSM = $("#content-title-sm");
	let contentValueSM = $("#content-value-sm");

	let contentTitleToggleSM = $("#content-title-toggle-sm");

	let arrow_down = '<i class="material-icons arrow">keyboard_arrow_down</i>';
	let arrow_up = '<i class="material-icons arrow">keyboard_arrow_up</i>';

	contentTitleLarge.html(date.date + " : " + date.title + " - " + date.author);
	contentValueLarge.html(date.content);

	contentTitleSM.html(arrow_down + date.date + " : " + date.title + " - " + date.author);
	contentValueSM.html(date.content);
	contentTitleToggleSM.html(arrow_up + date.date + " : " + date.title + " - " + date.author);
}
