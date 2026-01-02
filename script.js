// script.js

// Wait for the DOM to load
document.addEventListener('DOMContentLoaded', () => {
    
    const menuBtn = document.getElementById('menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    // Toggle Mobile Menu
    menuBtn.addEventListener('click', () => {
        // Toggle the 'hidden' class on the menu
        mobileMenu.classList.toggle('hidden');
    });

    // Close menu when clicking a link
    mobileMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
        });
    });
});