$(document).ready(function(){
    $('.autoplay').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: true,
        nextArrow: '<span class="slider-top__arrow slider-top__arrow_right" aria-label="Next" ></span>',
        prevArrow: '<span class="slider-top__arrow slider-top__arrow_left" aria-label="Previous" ></span>',
    });
});

