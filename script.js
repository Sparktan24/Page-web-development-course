const closeButton = document.querySelector('#close-mobile-menu');
const mobileMenuDisplay = document.querySelector('#mobile-menu-display');
const mobileMenuButton = document.querySelector('.mobile-menu-button');

mobileMenuButton.addEventListener('click', () => {
  mobileMenuDisplay.classList.toggle('display-none');
});

closeButton.addEventListener('click', () => {
  mobileMenuDisplay.classList.toggle('display-none');
});