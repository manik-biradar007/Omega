  jQuery(document).ready(function($) {
 
        $('#myCarousel').carousel({
                interval: 5000
        });
 
        $('#carousel-text').html($('#slide-content-0').html());
 
        //Handles the carousel thumbnails
       $('[id^=carousel-selector-]').click( function(){
            var id = this.id.substr(this.id.lastIndexOf("-") + 1);
            var id = parseInt(id);
            $('#myCarousel').carousel(id);
        });
 
 
        // When the carousel slides, auto update the text
        $('#myCarousel').on('slid.bs.carousel', function (e) {
                 var id = $('.item.active').data('slide-number');
                $('#carousel-text').html($('#slide-content-'+id).html());
        });
});

$(document).on('click', 'header a', function(event){
    event.preventDefault();

$('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top + -30
    }, 700);
});

$(window).scroll(function() {
    var scrolledY = $(window).scrollTop();
    console.log(scrolledY);
    if (scrolledY>=700)
        {
            $("header > div").addClass("addM");
             $('.return-to-top').fadeIn(200);
        }
        else 
        {
            $("header > div").removeClass("addM");
            $('.return-to-top').fadeOut(200);
        }
});

function move(){
     console.log("click");
    $('body,html').animate({scrollTop : 0}, 500);
}