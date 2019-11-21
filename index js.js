// JavaScript Document
//search autocomplete
$(document).ready(function () {
	var availableTags = [
		"Sofas",
		"Sofa Cum bed",
		"Beds",
		"Living room",
		"Furniture",
	];
	$("#tags").autocomplete({
		source: availableTags
	});
});

//SHOP NOW BUTTON
$(function () {
	$("button, input, a").click(function (event) {
		event.preventDefault();
	});
});
