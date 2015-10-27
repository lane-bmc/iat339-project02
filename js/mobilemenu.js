/*

JavaScript code for the collapsing menu on the mobile view

*/

/* Function that runs on the original page load */
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

/* We also need to check and see if the menu needs to be adjusted every time the window is resized */
$(window).resize(function () {
	var pageWidth = $(window).width();

	if (pageWidth < 664) {
		$(".nav-toggle").removeClass("hidden"); /* If the screen is small enough, show the menu button and hide the menu items */
		$(".nav-toggle").addClass("shown");
		$("body").removeClass("mobile-shown"); /* If the screen is small enough, shrink the top body padding down to the reduced menu */
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