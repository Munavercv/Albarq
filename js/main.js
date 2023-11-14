// preloader hide function
// document.addEventListener("DOMContentLoaded", function () {
//   var preloader = document.querySelector('.loader');
//   preloader.style.display = 'none';
// });


// this script makes the navbar sticky on scroll
window.onscroll = function() {
    makeNavbarSticky();
  };

  var navbar = document.getElementById("navbar");
  var sticky = navbar.offsetTop;

  function makeNavbarSticky() {
    if (window.pageYOffset >= sticky) {
      navbar.classList.add("sticky");
    } else {
      navbar.classList.remove("sticky");
    }
  }


  $('ul.dropdown-menu li').hover(function () {
    $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn(500);
}, function () {
    $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut(500);
});


// Flexisel-js for-testimonials
$(window).load(function() {
    $("#flexiselDemo1").flexisel({
        visibleItems:1,
        animationSpeed: 1000,
        autoPlay: false,
        autoPlaySpeed: 3000,    		
        pauseOnHover: true,
        enableResponsiveBreakpoints: true,
        responsiveBreakpoints: { 
            portrait: { 
                changePoint:480,
                visibleItems: 1
            }, 
            landscape: { 
                changePoint:640,
                visibleItems:1
            },
            tablet: { 
                changePoint:768,
                visibleItems: 1
            }
        }
    });
    
});



$('.counter').countUp();