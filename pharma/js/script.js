// Contact Form Handling
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Thank you for your message! We will get back to you soon.');
        contactForm.reset();
    });
}

// Enhanced Sign Up Validation
const signupForm = document.getElementById('signupForm');
if (signupForm) {
    signupForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const password = signupForm.querySelector('input[type="password"]').value;
        if (password.length < 8) {
            alert('Password must be at least 8 characters long');
            return;
        }
        
        alert('Account created successfully! Welcome to MediCare Pharmacy.');
        signupForm.reset();
        modal.style.display = "none";
    });
}

// Smooth Scroll for Navigation
document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});