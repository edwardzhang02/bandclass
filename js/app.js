$(function () {
    $(window).on('scroll', function () {
        if ( $(window).scrollTop() > 40 && $(window).scrollTop() < 700 ) {
            $('.navbar').removeClass('active-black');
            $('.navbar').addClass('active');
        } else if($(window).scrollTop() >= 700 ){
            $('.navbar').removeClass('active');
            $('.navbar').addClass('active-black');
        }
        else{
            $('.navbar').removeClass('active');
        }
    });
});