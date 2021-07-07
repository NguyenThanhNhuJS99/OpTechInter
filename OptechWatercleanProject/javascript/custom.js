// JavaScript Document

$(document).ready(function(){
	// Owl Carousel Banner lớn
	$("#banner").owlCarousel({
		items:1,
		interval: 5000,
		autoplay: true
	});
	// Owl Carousel Ý kiến khách hàng
	$("#kh-nhanxet").owlCarousel({
		autoplay: true,
		responsive:{
			0:{
				items:1,
			},
			736:{
				items:2,
			},
			1024:{
				items:3,
			}
		}
	});
	// Owl Carousel các khách hàng đã từng hợp tác
	$("#bannerkh").owlCarousel({
		autoplay: true,
		margin: 5,
		dots: false,
		responsive:{
			0:{
				items:1,
			},
			667:{
				items:3,
			},
			736:{
				items:3,
			},
			1024:{
				items:4,
			}
		}
	});
	// Owl Carousel Video
	$("#video-introduce").owlCarousel({
		items:1,
	});
	// Function  back to top
	$("a").on('click', function(event) {

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
		  }, 800, function(){
	   
			// Add hash (#) to URL when done scrolling (default click behavior)
			window.location.hash = hash;
		  });
		} // End if
	  });
})

// Ẩn khi back to top nằm ở vị trí top
mybutton = document.getElementById("toTop");
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
