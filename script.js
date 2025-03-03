document.addEventListener('DOMContentLoaded', () => {
    // Toggle navigation menu for mobile view
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('show');
    });

    // Smooth scrolling for navigation links
    const links = document.querySelectorAll('nav a[href^="#"]');

    links.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 50,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Highlight navigation item on scroll
    const sections = document.querySelectorAll('section');

    window.addEventListener('scroll', () => {
        let scrollPosition = window.scrollY + 60;

        sections.forEach(section => {
            if (
                scrollPosition > section.offsetTop &&
                scrollPosition < section.offsetTop + section.offsetHeight
            ) {
                document.querySelector('a.active')?.classList.remove('active');
                document.querySelector(`a[href="#${section.id}"]`).classList.add('active');
            }
        });
    });

    // Submit form
    const form = document.querySelector('form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Thank you for your message! We will get back to you soon.');
        form.reset();
    });
});
