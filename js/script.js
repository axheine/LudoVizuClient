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


	loadDatesMenu();



});



loadDatesMenu = function() {
	let menu = $("#slide-out");
	dates.forEach(function(date) {
		console.log("Date: "+JSON.stringify(date));

		menu.append("<li><a>"+date.date+" : "+date.title+"</a></li>");

	});
};