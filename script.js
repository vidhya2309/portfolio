// Smooth Scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        // Scroll to the target section smoothly
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

// Sticky Navigation Bar on Scroll
const nav = document.querySelector('header');
const sticky = nav.offsetTop; // Get the offset position of the navigation bar

// Add sticky class when you reach the scroll position
window.onscroll = function() {
    if (window.pageYOffset > sticky) {
        nav.classList.add("sticky");
    } else {
        nav.classList.remove("sticky");
    }
};

// Highlight active section in navigation when scrolling
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('header nav ul li a');

window.addEventListener('scroll', () => {
    let current = "";
    
    // Loop through all sections to find which one is currently in view
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (window.scrollY >= sectionTop - sectionHeight / 3) {
            current = section.getAttribute("id");
        }
    });

    // Remove the active class from all links and add it to the current link
    navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href").includes(current)) {
            link.classList.add("active");
        }
    });
});

// Optional: Smoothly highlight the contact me link when clicked
const contactLink = document.querySelector('a[href="#contact"]');
if (contactLink) {
    contactLink.addEventListener('click', () => {
        contactLink.style.backgroundColor = '#007bff'; // Change color or add effect
        setTimeout(() => contactLink.style.backgroundColor = '', 500); // Reset after 500ms
    });
}