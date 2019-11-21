// JavaScript Document

//Draggable and droppable
$(document).ready(function () {
	$("#draggable").draggable();
	$("#droppable").droppable({
		drop: function (event, ui) {
			$(this)
				.addClass("fa fa-cart-plus")
				.find("i")
				//            .html( "fa fa-cart-plus" );
		}
	});
});


$( function() {
    $( "#accordion" ).accordion({
      collapsible: true
    });
  } );


//Tab menu
$(function () {
	$("#tabs").tabs();
});
