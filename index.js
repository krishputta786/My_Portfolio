// Initialize Animations
AOS.init({ duration: 800, once: true });

// Mobile Hamburger Menu
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Close menu on click
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => navLinks.classList.remove('active'));
});

// Testimonial Carousel
let slideIndex = 0;
const slides = document.querySelectorAll('.carousel-item');

function rotateSlides() {
    slides.forEach(s => s.classList.remove('active'));
    slideIndex = (slideIndex + 1) % slides.length;
    slides[slideIndex].classList.add('active');
}
setInterval(rotateSlides, 4000);

// Navbar Scroll Effect
window.onscroll = () => {
    const nav = document.querySelector('.navbar');
    if (window.scrollY > 100) nav.style.background = "#0b132b";
    else nav.style.background = "rgba(11, 19, 43, 0.95)";
};