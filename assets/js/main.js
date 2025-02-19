// Move to top

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = () => scrollFunction();

const scrollFunction = () => {
    const moveTop = document.getElementById("movetop");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        moveTop.style.display = "block";
    } else {
        moveTop.style.display = "none";
    }
};

// When the user clicks on the button, scroll to the top of the document
const topFunction = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
};

// Move to top


// Menu JS
$(window).on("scroll", () => {
    let scroll = $(window).scrollTop();
    const siteHeader = $("#site-header");

    scroll >= 100 ? siteHeader.addClass("nav-fixed") : siteHeader.removeClass("nav-fixed");
});


// Disable body scroll when navbar is active
$(() => {
    $(".navbar-toggler").click(() => {
        $("body").toggleClass("noscroll");
    });
});


// Preloader function (Commented Out)
/*
const hidePreloaderAndShowContent = () => {
    const preloader = document.getElementById("loader");
    const content = document.getElementById("main-body");

    preloader.style.display = "none";
    content.style.display = "block";
};

setTimeout(hidePreloaderAndShowContent, 3000);
*/


// Owl Carousel
$(document).ready(($) => {
    $("#owl-demo1").owlCarousel({
        items: 1,
        loop: true,
        autoplay: true,
        autoplayTimeout: 7000,
        autoplayHoverPause: true,
        autoplaySpeed: 800,
        slideSpeed: 800,
        nav: true,
        dots: true,
        responsive: {
            0: { items: 1 },
            600: { items: 1 },
            1000: { items: 1 },
        },
    });
});


// Navbar Dropdown Toggle
const dropdownLink = document.getElementById("navbarDropdownMenuLink");
const dropmenu = document.getElementById("dropmenu");
let flag = false;

dropdownLink.addEventListener("mouseover", () => {
    dropmenu.style.opacity = 1;
    flag = true;
});

dropdownLink.addEventListener("mouseleave", () => {
    dropmenu.style.opacity = 0;
});

dropmenu.addEventListener("mouseover", () => {
    if (flag) {
        dropmenu.style.opacity = 1;
    }
});

dropmenu.addEventListener("mouseleave", () => {
    dropmenu.style.opacity = 0;
    flag = false;
});

// Function to add numbers
const addNumbers = (a, b) => a + b;

const sum = addNumbers(12, 4);
console.log(sum);
