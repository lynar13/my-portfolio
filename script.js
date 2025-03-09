document.addEventListener("DOMContentLoaded", function() {
    const navItems = document.querySelectorAll('.nav-item a');

    navItems.forEach(item => {
        item.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent default anchor click behavior
            const targetId = this.getAttribute('href').substring(1); // Get the target section id
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' }); // Scroll to the target section smoothly
            }

            navItems.forEach(link => link.classList.remove('active'));
            this.classList.add('active');
        });
    });
});

function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('show');
}

// JavaScript for Back to Top and Scroll Down buttons
document.getElementById('back-to-top').addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

document.getElementById('scroll-down').addEventListener('click', () => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
});

// Show or hide the back-to-top button based on scroll position
window.addEventListener('scroll', () => {
    const backToTopButton = document.getElementById('back-to-top');
    if (window.scrollY > 100) {
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
});

// Modal Elements
const modal = document.getElementById("project-modal");
const modalImg = document.getElementById("modal-img");
const modalTitle = document.getElementById("modal-title");
const modalDescription = document.getElementById("modal-description");
const modalLinks = document.getElementById("modal-links");
const closeBtn = document.querySelector(".close-btn");

// Project Cards
const projectCards = document.querySelectorAll(".project-card");

// Project Details
const projects = [
    {
        img: "images/store-app2.png",
        title: "Lyn Ellie Store",
        description: "Responsive e-commerce store app designed and developed for users to buy and search for products. The project showcases a functional, single-page site built with React.",
        links: [
            { url: "https://github.com/lynar13/lyn-ellie-store-app", text: "GitHub Repo" },
            { url: "https://lyn-ellie-store.netlify.app//", text: "Live Demo" }
        ]
    },
    {
        img: "images/auction-house.png",
        title: "Auction House",
        description: "Auction House is a responsive website designed and developed for users to login and register an account, view, create and edit listings. The project showcases a functional, multi-page site built with Vite.",
        links: [
            { url: "https://lynar13.github.io/auction-website", text: "GitHub Repo" },
            { url: "https://lynar13.github.io/auction-website/", text: "Live Demo" }
        ]
    },
    {
        img: "images/square-eyes-sc3.png",
        title: "Square Eyes",
        description: "Square Eyes is a responsive website designed and developed as part of the HTML & CSS course assignment. The project showcases a functional, multi-page site built from scratch without the use of frameworks, emphasizing semantic HTML, DRY CSS principles, and accessibility standards.",
        links: [
            { url: "https://github.com/NoroffFEU/html-css-course-assignment-lynar13", text: "GitHub Repo" },
            { url: "https://norofffeu.github.io/html-css-course-assignment-lynar13/home.html", text: "Live Demo" }
        ]
    },
    {
        img: "images/nannestad-science-museum-screenshot.png",
        title: "Nannestad Science Museum",
        description: "A museum website that provides information about exhibitions, events, and museum news. It offers an engaging user experience with responsive design and accessibility features.",
        links: [
            { url: "https://github.com/lynar13/nannestad-science-museum", text: "GitHub Repo" },
            { url: "https://lynar13.github.io/nannestad-science-museum/", text: "Live Demo" }
        ]
    },
    {
        img: "images/hotview-labs-screenshot.png",
        title: "HotView Labs",
        description: "A blogging platform where users can view, create, edit, and delete blog posts.",
        links: [
            { url: "https://github.com/NoroffFEU/FED1-PE1-lynar13", text: "GitHub Repo" },
            { url: "https://norofffeu.github.io/FED1-PE1-lynar13/", text: "Live Demo" }
        ]
    }
];

// Show Modal with Project Details
function showModal(index) {
    const project = projects[index];
    modalImg.src = project.img;
    modalTitle.textContent = project.title;
    modalDescription.textContent = project.description;
    modalLinks.innerHTML = project.links.map(link => `<a href="${link.url}" target="_blank">${link.text}</a>`).join(" | ");
    modal.style.display = "flex";
}

// Close Modal
closeBtn.onclick = function() {
    modal.style.display = "none";
};

// Click Event for Project Cards
projectCards.forEach((card, index) => {
    card.onclick = function() {
        showModal(index);
    };
});

// Close Modal on Outside Click
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};
