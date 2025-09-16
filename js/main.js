// main.js - JavaScript for interactivity
// Organized and commented for production best practices

document.addEventListener('DOMContentLoaded', function () {
    // Responsive menu toggle
    function setupMenuToggle() {
        const menuToggle = document.getElementById('menuToggle');
        const navLinks = document.getElementById('navLinks');
        if (menuToggle && navLinks) {
            menuToggle.addEventListener('click', function () {
                navLinks.classList.toggle('active');
            });
        }
    }

    // Learn More button animation
    function setupLearnMoreButton() {
        const learnMoreBtn = document.getElementById('learnMoreBtn');
        if (learnMoreBtn) {
            learnMoreBtn.addEventListener('click', function () {
                learnMoreBtn.textContent = 'Loading...';
                setTimeout(() => {
                    learnMoreBtn.textContent = 'Thanks for your interest!';
                }, 1200);
            });
        }
    }

    // Contact form validation and feedback
    function setupContactForm() {
        const contactForm = document.getElementById('contactForm');
        const formMessage = document.getElementById('formMessage');
        if (contactForm && formMessage) {
            contactForm.addEventListener('submit', function (e) {
                e.preventDefault();
                const name = contactForm.name.value.trim();
                const email = contactForm.email.value.trim();
                const message = contactForm.message.value.trim();
                // Validate all fields
                if (!name || !email || !message) {
                    formMessage.textContent = 'Please fill in all fields.';
                    formMessage.style.color = 'red';
                    return;
                }
                // Simple email validation
                const emailPattern = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
                if (!emailPattern.test(email)) {
                    formMessage.textContent = 'Please enter a valid email address.';
                    formMessage.style.color = 'red';
                    return;
                }
                formMessage.textContent = 'Message sent! We will get back to you soon.';
                formMessage.style.color = '#2d89ef';
                contactForm.reset();
            });
        }
    }

    // Animation on scroll (fade in)
    function setupRevealOnScroll() {
        function revealOnScroll() {
            const reveals = document.querySelectorAll('.hero, .about, .contact');
            for (let i = 0; i < reveals.length; i++) {
                const windowHeight = window.innerHeight;
                const elementTop = reveals[i].getBoundingClientRect().top;
                const elementVisible = 100;
                if (elementTop < windowHeight - elementVisible) {
                    reveals[i].classList.add('active');
                } else {
                    reveals[i].classList.remove('active');
                }
            }
        }
        window.addEventListener('scroll', revealOnScroll);
        revealOnScroll();
    }

    // Initialize all interactive features
    setupMenuToggle();
    setupLearnMoreButton();
    setupContactForm();
    setupRevealOnScroll();
});
