/*

JavaScript code for the collapsing menu on the mobile view

*/

$(document).ready(function () {
	var pageWidth = $(window).width();

	if (pageWidth < 680) {
		$(".nav-toggle").removeClass("hidden");
		$(".nav-toggle").addClass("shown");

		$(".nav-mobile-hidden").hide();
	}

	$(".nav-toggle").click(function () {
		$(".nav-mobile-hidden").slideToggle(500);
	})
})

$(window).resize(function () {
	var pageWidth = $(window).width();

	if (pageWidth < 680) {
		$(".nav-toggle").removeClass("hidden");
		$(".nav-toggle").addClass("shown");

		$(".nav-mobile-hidden").hide();
	}

	if (pageWidth >= 680) {
		$(".nav-toggle").removeClass("shown");
		$(".nav-toggle").addClass("hidden");

		$(".nav-mobile-hidden").show();
	}
})