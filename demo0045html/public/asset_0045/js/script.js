$(document).ready(function() {
    //banner top
    $('.bannerSlide').slick({
        infinite: true,
        autoplay: false,
        speed: 800,
        arrows: false,
        dots: false,
    });
    //project
    $('.projectSlick').slick({
        autoplay: false,
        speed: 800,
        lazyLoad: 'progressive',
        arrows: false,
        dots: false,
        centerMode: true,
        centerPadding: '25%',
        slidesToShow: 1,
        responsive: [
            {
                breakpoint: 540,
                settings: {
                    arrows: false,
                    lazyLoad: 'progressive',
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: true,
                    centerPadding: '8%',
                }
            }
        ]
    }).slickAnimation();
    $('.same-next').click(function() {
        $(".projectSlick").slick('slickNext');
    });
    $('.same-prev').click(function() {
        $(".projectSlick").slick('slickPrev');
    });
    // partner
    $('.partner_slider').slick({
        infinite: true,
        autoplay: false,
        speed: 800,
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows: true,
        dots: false,
        prevArrow: "<button type='button' class='partner_prev btn_np_partner'><i class='fas fa-chevron-left'></i></button>",
        nextArrow: "<button type='button' class='partner_next btn_np_partner'><i class='fas fa-chevron-right'></i></button>",
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 1,
                }
            }, {
                breakpoint: 813,
                settings: {
                    arrows: false,
                    dots: true,
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 540,
                settings: {
                    arrows: false,
                    dots: true,
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 400,
                settings: {
                    arrows: false,
                    dots: true,
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            }
        ]
    });
    // scroll to top 
    $('.go__top').click(function(event) {
        event.preventDefault();
        $('html, body').animate({ scrollTop: 0 }, 300);
    });

});


//back to top
$(window).scroll(function() {
    if ($(this).scrollTop() > 200) {
        $('.go__top').fadeIn(200);
    } else {
        $('.go__top').fadeOut(200);
    }
    ScollHeader();
});
//sticky menu
let navbar = document.getElementById("main_header");

function ScollHeader() {
    if (window.pageYOffset >= 2) {
        navbar.classList.add("sticky")
    } else {
        navbar.classList.remove("sticky");
    }
}