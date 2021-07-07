$(document).ready(function () {
  // Slick Slider
  $('.multiple-items').slick({
    infinite: true,
    arrows: false,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 2000,
    dots: true,
    responsive: [{
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        }
      },
      {
        breakpoint: 740,
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
  $('.multiple-items-banner').slick({
    infinite: true,
    arrows: false,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 2000,
    dots: true,
  })
  $('.multiple-items-product').slick({
    infinite: true,
    arrows: false,
    autoplay: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplaySpeed: 2000,
    dots: false,
    arrows: true,
    prevArrow: '.prev',
    nextArrow: '.next',
    responsive: [{
        breakpoint: 769,
        settings: {
          arrows: false,
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  })
  $('.multiple-items-reviews').slick({
    infinite: true,
    arrows: false,
    autoplay: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplaySpeed: 2000,
    dots: true,
    responsive: [{
        breakpoint: 769,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
    ]
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

// Define visible sticky menu
var menutop = document.querySelector('#menu');
var banner = document.querySelector('#banner');
var origOffsetY = banner.offsetTop;

// Define visible back to top
var mybutton = document.getElementById("to-Top");

function scrollFunction() {
  // Visible sticky menu
  if (window.scrollY >= origOffsetY) {
    menutop.classList.add('sticky')
  } else {
    menutop.classList.remove('sticky');
  }

  // Visible sticky back to top
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}