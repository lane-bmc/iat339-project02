

$(document).ready(function(){

    var pageWidth = $(window).width();

    if (pageWidth < 560){
        $(".large").removeClass("hidden");
        $(".large").addClass("shown");
        $(".small").removeClass("shown");
        $(".small").addClass("hidden")
    }
});

/*
test case 1

$(document).ready(function() {
    function imageresize() {
        var contentwidth = $(window).width();
        if ((contentwidth) < '700'){
            $('.fluidimage').each(function(){
                var thisImg = $(this);
                var newSrc = thisImg.attr('src').replace('x2', 'x1');
                thisImg.attr('src', newSrc);
            });
        } else {
            $('.fluidimage').each(function(){
                var thisImg = $(this);
                var newSrc = thisImg.attr('src').replace('x1', 'x2');
                thisImg.attr('src', newSrc);
            });
        }
    }

    imageresize();//Triggers when document first loads

    $(window).resize(imageresize);
 }); 


test case 2

function resize() {
    if ($window.width() < 750) {
        $img.attr('src', 'img/illu4.jpg');
    }
    else if ($window.width() > 750) {
        $img.attr('src', 'img/illu2.jpg');
    }
}

*/
