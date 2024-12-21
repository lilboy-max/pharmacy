// Modal functionality
const modal = document.getElementById('signupModal');
const signupBtn = document.getElementById('signupBtn');
const closeBtn = document.getElementsByClassName('close')[0];
const signupForm = document.getElementById('signupForm');

signupBtn.onclick = function() {
    modal.style.display = "block";
}

closeBtn.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

signupForm.onsubmit = function(e) {
    e.preventDefault();
    alert('Account created successfully!');
    modal.style.display = "none";
    signupForm.reset();
}

// Add to cart functionality
const addToCartButtons = document.querySelectorAll('.product-card button');
addToCartButtons.forEach(button => {
    button.addEventListener('click', () => {
        alert('Product added to cart!');
    });
});
