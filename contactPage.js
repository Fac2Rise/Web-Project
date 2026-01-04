// Hamburger menu functionality (copied from your other pages)
const menuToggle = document.getElementById('menu__toggle');
const menuBox = document.querySelector('.menu__box');

// Form handling
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    // Simple validation (HTML required attributes handle most, but you can add more here)
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (name && email && message) {
        alert('Thank you for your message! We\'ll get back to you soon.');
        contactForm.reset(); // Clear the form
    } else {
        alert('Please fill in all required fields.');
    }
});
