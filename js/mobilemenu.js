/*

JavaScript code for the collapsing menu on the mobile view

*/

$(document).ready(function () {
	var pageWidth = $(window).width();

	if (pageWidth < 664) {
		$(".nav-toggle").removeClass("hidden");
		$(".nav-toggle").addClass("shown");
		$("body").removeClass("mobile-shown");
		$("body").addClass("mobile-hidden");

		$(".nav-mobile-hidden").hide();
	}

	$(".nav-toggle").click(function () {
		$(".nav-mobile-hidden").slideToggle(500);
	})
})

$(window).resize(function () {
	var pageWidth = $(window).width();

	if (pageWidth < 664) {
		$(".nav-toggle").removeClass("hidden");
		$(".nav-toggle").addClass("shown");
		$("body").removeClass("mobile-shown");
		$("body").addClass("mobile-hidden");

		$(".nav-mobile-hidden").hide();
	}

	if (pageWidth >= 664) {
		$(".nav-toggle").removeClass("shown");
		$(".nav-toggle").addClass("hidden");
		$("body").removeClass("mobile-hidden");
		$("body").addClass("mobile-shown");

		$(".nav-mobile-hidden").show();
	}
})