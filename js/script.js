document.addEventListener('DOMContentLoaded', () => {
    const bookingForm = document.getElementById('bookingForm');

    bookingForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Basic form validation
        const name = e.target[0].value;
        const email = e.target[1].value;
        const phone = e.target[2].value;
        const service = e.target[3].value;
        const date = e.target[4].value;

        if (!name || !email || !phone || !service || !date) {
            alert('Please fill out all fields');
            return;
        }

        // Simulate booking submission
        alert(`Thank you, ${name}! Your ${service} appointment is booked for ${date}.`);
        bookingForm.reset();
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});



    // Mobile Menu Toggle
    const menuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');

    menuButton.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });