$(document).ready(function() {
    //banner top
    $('.bannerSlide').slick({
        infinite: true,
        autoplay: false,
        speed: 800,
        arrows: false,
        dots: false,
    });
    // partner
    $('.categorySlide').slick({
        infinite: true,
        autoplay: false,
        speed: 800,
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        responsive: [{
                breakpoint: 1025,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            }, {
                breakpoint: 813,
                settings: {
                    arrows: false,
                    dots: true,
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 540,
                settings: {
                    arrows: false,
                    dots: true,
                    slidesToShow: 1,
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
let navbar = document.getElementById("header_bottom");
let header_top = document.querySelector(".header_top").offsetHeight;
function ScollHeader() {
    if (window.pageYOffset > header_top) {
        navbar.classList.add("sticky")
    } else {
        navbar.classList.remove("sticky");
    }
}