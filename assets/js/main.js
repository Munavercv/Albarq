    // move top
    
    // When the user scrolls down 20px from the top of the document, show the button
    window.onscroll = function () {
        scrollFunction()
    };

    function scrollFunction() {
        if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
            document.getElementById("movetop").style.display = "block";
        } else {
            document.getElementById("movetop").style.display = "none";
        }
    }

    // When the user clicks on the button, scroll to the top of the document
    function topFunction() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }

    // move top


    // menu js

    $(window).on("scroll", function () {
        var scroll = $(window).scrollTop();

        if (scroll >= 80) {
            $("#site-header").addClass("nav-fixed");
        } else {
            $("#site-header").removeClass("nav-fixed");
        }
    });

    //Main navigation Active Class Add Remove
    // $(".navbar-toggler").on("click", function () {
    //     $("header").toggleClass("active");
    // });
    // $(document).on("ready", function () {
    //     if ($(window).width() > 991) {
    //         $("header").removeClass("active");
    //     }
    //     $(window).on("resize", function () {
    //         if ($(window).width() > 991) {
    //             $("header").removeClass("active");
    //         }
    //     });
    // });

        // menu js



        //disable body scroll which navbar is in active

        $(function () {
            $('.navbar-toggler').click(function () {
                $('body').toggleClass('noscroll');
            })
        });

     //disable body scroll which navbar is in active



    //  preloader function

     /*function hidePreloaderAndShowContent() {
        var preloader = document.getElementById('loader');
        var content = document.getElementById('main-body');

        preloader.style.display = 'none';

        content.style.display = 'block';
    }

    setTimeout(hidePreloaderAndShowContent, 3000);*/

    //  preloader function




    // testimonial
    // $(document).ready(function() {
    //     $("#owl-demo1").owlCarousel({
    //         loop: true,
    //         nav: false,
    //         responsiveClass: true,
    //         responsive: {
    //             0: {
    //                 items: 1,
    //                 nav: false
    //             },
    //             736: {
    //                 items: 1,
    //                 nav: false
    //             }
    //         }
    //     })
    // })
    // testimonial



    // owl carosel
    $(document).ready(function ($) {
        $("#owl-demo1").owlCarousel({
            items: 1, // Number of items to show
            loop: true, // Enable looping
            autoplay: true, // Enable automatic sliding
            autoplayTimeout: 7000, // Set the autoplay timeout in milliseconds (e.g., 5000 for 5 seconds)
            autoplayHoverPause: true, // Pause on hover
            autoplaySpeed: 800,
            slideSpeed: 800, // Slide speed in milliseconds
            nav: true, // Show navigation arrows
            dots: true, // Show dots navigation
            responsive: {
                0: {
                    items: 1,
                },
                600: {
                    items: 1,
                },
                1000: {
                    items: 1,
                },
            },
        });
    });
    // owl carosel

        // NAVBAR DROPDOWN TOGGLE
        let dropdownLink = document.getElementById('navbarDropdownMenuLink');
        let dropmenu = document.getElementById('dropmenu');
        let flag = false;
        
        dropdownLink.addEventListener('mouseover', function () {
            dropmenu.style.opacity = 1;
            flag = true;
        });
    
        dropdownLink.addEventListener('mouseleave', function () {
            dropmenu.style.opacity = 0;
        });
        
        dropmenu.addEventListener('mouseover', function () {
            if (flag) {
                dropmenu.style.opacity = 1;
            }
        });
    
        dropmenu.addEventListener('mouseleave', function () {
            dropmenu.style.opacity = 0;
            flag = false;
        });
        // NAVBAR DROPDOWN TOGGLE