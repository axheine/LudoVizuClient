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



loadDatesMenu = function() {
	let menu = $("#slide-out");
	dates.forEach(function(date) {

		menu.append("<li><a id='date_"+date.date+"'>"+date.date+" : "+date.title+"</a></li>");
		$("#date_"+date.date).click(function() {
			refreshContent(date);
			map.eachLayer(function(layer){
				layer.remove();
			});
			map.addLayer(map.layers["" + date.date]);
		});
	});
};

refreshContent = function(date) {
	let contentTitleLarge = $("#content-title-large");
	let contentValueLarge = $("#content-value-large");

	let contentTitleSM = $("#content-title-sm");
	let contentValueSM = $("#content-value-sm");

	let contentTitleToggleSM = $("#content-title-toggle-sm");

	let arrow_down = '<i class="material-icons">keyboard_arrow_down</i>';
	let arrow_up = '<i class="material-icons">keyboard_arrow_up</i>';

	contentTitleLarge.html(date.title);
	contentValueLarge.html(date.content);

	contentTitleSM.html(arrow_down + date.title);
	contentValueSM.html(date.content);
	contentTitleToggleSM.html(arrow_up + date.title);
}
