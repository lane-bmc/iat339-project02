

$(document).ready(function(){

    var pageWidth = $(window).width();

    if (pageWidth < 560){
        $(".large").removeClass("hidden");
        $(".large").addClass("shown");
        $(".small").removeClass("shown");
        $(".small").addClass("hidden")
    }
});
