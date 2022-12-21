const hamMenu = document.getElementById('hamburger-menu');
const offScreenMenu = document.querySelector('.off-screen');
hamMenu.addEventListener('click', () => {
	hamMenu.classList.toggle('active');
	offScreenMenu.classList.toggle('active');
});