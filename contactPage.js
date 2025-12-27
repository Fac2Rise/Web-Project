// Hamburger menu toggle (copied from homePage.js logic)
const menuToggle = document.getElementById('menu__toggle');
const menuBox = document.querySelector('.menu__box');

menuToggle.addEventListener('change', function() {
    if (this.checked) {
        menuBox.style.visibility = 'visible';
        menuBox.style.left = '0';
    } else {
        menuBox.style.visibility = 'hidden';
        menuBox.style.left = '-100%';
    }
});

// Optional: Add form submission alert
const contactForm = document.querySelector('.contact-form form');
contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for your message! We\'ll get back to you soon.');
});
