
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// 2. Scroll Reveal Animation
// This detects when your project cards are on screen and fades them in
const observerOptions = {
    threshold: 0.1 // Triggers when 10% of the element is visible
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
}, observerOptions);

// Target all elements with the 'card' class
const hiddenElements = document.querySelectorAll('.card');
hiddenElements.forEach((el) => observer.observe(el));

// 3. Navbar Background Change on Scroll
// Adds a shadow to the navbar once you start scrolling down
window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
        nav.style.backgroundColor = 'rgba(15, 23, 42, 0.95)';
        nav.style.boxShadow = '0 2px 10px rgba(0,0,0,0.3)';
    } else {
        nav.style.backgroundColor = 'rgba(15, 23, 42, 0.9)';
        nav.style.boxShadow = 'none';
    }
});