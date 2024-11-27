
$(document).ready(function () {
    $('.slider').slick({
        dots: true,
        infinite: true,
        slidesToShow: 1,
        centerMode: true,
        variableWidth: true,
        autoplay: true,
        autoplaySpeed: 2000,
        draggable: true,
        prevArrow: `<button type='button' class='slick-prev slider-arrow'><i class="fa-solid fa-arrow-left"></i></button>`,
        nextArrow: `<button type='button' class='slick-next slider-arrow'><i class="fa-solid fa-arrow-right"></i></button>`,
        responsive: [
            {
                breakpoint: 740,
                settings: {
                    arrows: false,
                    variableWidth: false,
                    centerMode: false,
                }
            }
        ]
    });

});
