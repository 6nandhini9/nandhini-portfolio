// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
            // Update active navigation link
            document.querySelectorAll('.nav-links a').forEach(link => {
                link.classList.remove('active');
            });
            this.classList.add('active');
        }
    });
});

// Navbar scroll effect
const navbar = document.querySelector('.navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll <= 0) {
        navbar.classList.remove('scrolled');
        return;
    }

    if (currentScroll > lastScroll && !navbar.classList.contains('scrolling-down')) {
        // Scrolling down
        navbar.classList.remove('scrolled');
        navbar.classList.add('scrolling-down');
    } else if (currentScroll < lastScroll && navbar.classList.contains('scrolling-down')) {
        // Scrolling up
        navbar.classList.add('scrolled');
        navbar.classList.remove('scrolling-down');
    }
    lastScroll = currentScroll;
});

// Add animation classes when elements come into view
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-fadeInUp');
        }
    });
}, {
    threshold: 0.1
});

document.querySelectorAll('.project-card').forEach((card) => {
    observer.observe(card);
});

// Initialize AOS (Animate On Scroll)
AOS.init({
    duration: 800,
    easing: 'ease-in-out',
    once: true
});
