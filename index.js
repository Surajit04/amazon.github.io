// Logo click
document.querySelector('.nav-logo').addEventListener('click', function () {
    alert("Returning to home page");
});

// Deliver to (Location) click
document.querySelector('.nav-address').addEventListener('click', function () {
    alert('Choose your delivery location...');
});

// Search bar
document.querySelector('.search-icon').addEventListener('click', function () {
    const searchInput = document.querySelector('.search-input').value;
    if (searchInput) {
        alert('You searched for: ' + searchInput);
    } else {
        alert('Please enter a search term.');
    }
});

// Language dropdown change
document.querySelector('.location-select').addEventListener('change', function () {
    alert('Language changed to ' + this.value);
});

// Account & Lists click
document.querySelector('.nav-signin').addEventListener('click', function () {
    alert('Navigate to Sign In or Account & Lists...');
});

// Returns & Orders click
document.querySelector('.nav-return').addEventListener('click', function () {
    alert('Navigate to Returns & Orders...');
});

// Cart click
document.querySelector('.nav-cart').addEventListener('click', function () {
    alert('Opening Cart...');
});

// Panel options (e.g., Today’s Deals)
document.querySelectorAll('.panel-options p').forEach(option => {
    option.addEventListener('click', function () {
        alert('Navigating to ' + this.innerText);
    });
});

// Hero message link
document.querySelector('.hero-msg a').addEventListener('click', function (event) {
    event.preventDefault();  // Prevent default link action
    alert('Navigating to Amazon India...');
});

// Shop section boxes click (e.g., Clothes, Health & Personal Care)
document.querySelectorAll('.shop-section .box').forEach(box => {
    box.addEventListener('click', function () {
        const category = this.querySelector('h2').innerText;
        alert('Viewing more in ' + category);
    });
});

// Footer links hover effect
document.querySelectorAll('footer a').forEach(link => {
    link.addEventListener('mouseenter', function () {
        link.style.color = '#00aaff'; // Change color on hover
    });
    link.addEventListener('mouseleave', function () {
        link.style.color = '#dddddd'; // Reset color on mouse leave
    });
});

// Footer "Back to Top" click
document.querySelector('.foot-panel1').addEventListener('click', function () {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Footer panels links (e.g., "Get to Know Us", "Connect With Us")
document.querySelectorAll('.foot-panel2 ul').forEach(panel => {
    panel.addEventListener('click', function () {
        alert('Navigating to more options under ' + this.querySelector('p').innerText);
    });
});

// Footer policy links click
document.querySelectorAll('.foot-panel4 .pages a').forEach(policyLink => {
    policyLink.addEventListener('click', function (event) {
        event.preventDefault();  // Prevent default link action
        alert('Navigating to ' + this.innerText);
    });
});