$(document).ready(function () {
  // Slick Slider
  $('.multiple-items-news').slick({
    infinite: true,
    prevArrow: '.arrow-prev',
    nextArrow: '.arrow-next',
    arrows: true,
    autoplay: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplaySpeed: 2000,
    responsive: [{
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        }
      },
      {
        breakpoint: 750,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  })
  $('.multiple-items').slick({
    infinite: true,
    arrows: false,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 5000,
    dots: true
  })
  $('.multiple-items-Combo01').slick({
    infinite: true,
    arrows: false,
    autoplay: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplaySpeed: 2000,
    dots: false,
    responsive: [{
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        }
      },
      {
        breakpoint: 750,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      }
    ]
  })
  $('.multiple-items-Combo02').slick({
    infinite: true,
    arrows: false,
    autoplay: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 2000,
    dots: false
  })
  // Mmenu mobi
  $('#my-menu').mmenu({});

  // Function  Back to top
  $("a").on('click', function (event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();
      // Store hash
      var hash = this.hash;
      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function () {
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});
window.onscroll = function () {
  scrollFunction();
};
var mybutton = document.getElementById("toTop");

var menutop = document.querySelector('#menu');
var banner = document.querySelector('#mainWeb');
var origOffsetY = banner.offsetTop;

function scrollFunction() {
  //Ẩn khi scroll top 
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }

  // Hiện menu sticky
  if (window.scrollY >= origOffsetY) {
    menutop.classList.add('sticky')
  } else {
    menutop.classList.remove('sticky');
  }
}