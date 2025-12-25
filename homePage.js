// Get the image container element
const imageContainer1 = document.getElementById('clickableImage1');
const imageContainer2 = document.getElementById('clickableImage2');
const imageContainer3 = document.getElementById('clickableImage3');
const imageContainer4 = document.getElementById('clickableImage4');

// Default URL to navigate to when image is clicked
let targetUrl = '';

// Function to handle click on the image
function handleImageClick() {
    if(this === imageContainer1) {
        alert('Navigating to About Page');
        //window.location.href = 'aboutPage.html';
    } else if(this === imageContainer2) {
        alert('Navigating to News Page');
        //window.location.href = 'newsPage.html';
    } else if(this === imageContainer3) {
        alert('Navigating to Contact Page');
        //window.location.href = 'contactPage.html';
    } else if(this === imageContainer4) {
        alert('Navigating to Review Page');
        //window.location.href = 'reviewPage.html';
    }
}

// Add click event listener to the image container
imageContainer1.addEventListener('click', handleImageClick);
imageContainer2.addEventListener('click', handleImageClick);
imageContainer3.addEventListener('click', handleImageClick);
imageContainer4.addEventListener('click', handleImageClick);

// Add keyboard navigation support
document.addEventListener('keydown', function(e) {
    // Space or Enter key triggers image click
    if ((e.key === ' ' || e.key === 'Enter') && 
        document.activeElement === imageContainer) {
        e.preventDefault();
        handleImageClick();
    }
});

// Make the image container focusable for accessibility
imageContainer.setAttribute('tabindex', '0');
imageContainer.setAttribute('role', 'button');
imageContainer.setAttribute('aria-label', 'Article: Requiem for the Rangefinder - An iPhone Air Review. Click to read the full article.');
