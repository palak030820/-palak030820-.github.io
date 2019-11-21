// JavaScript Document
//Autofill
$(document).ready(function () {
	var availableTags = [
		"Palak",
		"Goyal",
		"Satellite Tower",
		"goyalpalak3@gmail.com",
		"flim city road",
	];
	$("#inputname").autocomplete({
		source: availableTags
	});
});
