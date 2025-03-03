// Scroll animation for smooth navigation
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        window.scrollTo({
            top: targetElement.offsetTop - 70, // Adjust for sticky header
            behavior: 'smooth'
        });
    });
});

// Log information about each revolution (optional functionality)
const sections = document.querySelectorAll('section');
sections.forEach((section, index) => {
    console.log(`Revolusi Industri ${index + 1}: ${section.querySelector('h2').textContent}`);
});
