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