//Toggle Hamburger Menu
const toggleButton = document.getElementsByClassName('toggle-button')[0];
const navbarLinks = document.getElementsByClassName('navbar-links')[0];
const weatherAlertLink = document.querySelector('weather-alert');
const alertLink = document.querySelector('on');

toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('toggle')
 
})
alertLink.addEventListener('click', () => {
    weatherAlertLink.classList.toggle('off')
})