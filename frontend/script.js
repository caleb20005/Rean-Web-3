// Navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled-nav');
    } else {
        navbar.classList.remove('scrolled-nav');
    }
});

// Mobile menu toggle
function toggleMobileMenu() {
    const menu = document.getElementById('mobile-menu');
    menu.classList.toggle('hidden');
}

// Smooth scroll
function scrollToSection(id) {
    const element = document.getElementById(id);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
    
    // Close mobile menu if open
    const mobileMenu = document.getElementById('mobile-menu');
    if (!mobileMenu.classList.contains('hidden')) {
        mobileMenu.classList.add('hidden');
    }
}

// Form submission
function handleSubmit(e) {
    e.preventDefault();
    alert('Asante! Thank you for your interest. We will contact you shortly with admission information.');
    e.target.reset();
}

// Close mobile menu when clicking on a link
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('#mobile-menu a').forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            if (href && href.startsWith('#')) {
                e.preventDefault();
                scrollToSection(href.substring(1));
            }
        });
    });

    const heroSlides = document.querySelectorAll('.hero-slide');
    if (heroSlides.length > 1) {
        let activeIndex = 0;
        setInterval(() => {
            heroSlides[activeIndex].classList.remove('opacity-100');
            heroSlides[activeIndex].classList.add('opacity-0');
            activeIndex = (activeIndex + 1) % heroSlides.length;
            heroSlides[activeIndex].classList.remove('opacity-0');
            heroSlides[activeIndex].classList.add('opacity-100');
        }, 3000);
    }
});
