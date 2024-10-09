// Responsive Navigation Toggle
const navToggle = document.createElement('button');
navToggle.textContent = '☰'; // Hamburger icon
navToggle.classList.add('nav-toggle');
document.querySelector('header').appendChild(navToggle);

const navLinks = document.querySelector('nav ul');

navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Hide navigation when clicking outside
document.addEventListener('click', (event) => {
    if (!navToggle.contains(event.target) && !navLinks.contains(event.target)) {
        navLinks.classList.remove('active');
    }
});

// Smooth scrolling for anchor links
const smoothScroll = (event) => {
    event.preventDefault();
    const targetId = event.currentTarget.getAttribute('href');
    const targetElement = document.querySelector(targetId);
    targetElement.scrollIntoView({ behavior: 'smooth' });
};

const links = document.querySelectorAll('nav a');
links.forEach(link => {
    link.addEventListener('click', smoothScroll);
});
