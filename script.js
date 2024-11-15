// Toggle the navbar when hamburger is clicked
const hamburger = document.getElementById('hamburger');
const navbar = document.getElementById('navbar');

// Show/hide navbar when hamburger is clicked
hamburger.addEventListener('click', () => {
  navbar.classList.toggle('active');
});
