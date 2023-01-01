const hamMenu = document.getElementById('hamburger-menu');
const offScreenMenu = document.querySelector('.off-screen');
hamMenu.addEventListener('click', () => {
	hamMenu.classList.toggle('active');
	offScreenMenu.classList.toggle('active');
});

/* Adding class to navigation bar on scroll */
$(window).scroll(function() {
    var nav = $('#main-nav');
    var top = 200;
    if ($(window).scrollTop() >= top) {

        nav.addClass('illuminated-nav');

    } else {
        nav.removeClass('illuminated-nav');
    }
});

// awards section slider
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    dots:false,
    autoplay:true,
    autoplayTimeout:60000,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:1
        }
    }
})