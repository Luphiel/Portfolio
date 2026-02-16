// PRELOADER
window.addEventListener("load", () => {
  document.getElementById("preloader").style.display = "none";
});

// MOBILE MENU
const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

menuBtn.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});

// CLOSE MENU WHEN CLICK LINK
document.querySelectorAll(".nav-link").forEach(link => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("active");
  });
});

// TYPING EFFECT
const typingText = document.getElementById("typingText");
const roles = ["Junior Web Developer", "Frontend Developer", "Backend Learner", "Problem Solver"];
let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
  const currentRole = roles[roleIndex];

  if (!isDeleting) {
    typingText.textContent = currentRole.substring(0, charIndex++);
    if (charIndex > currentRole.length) {
      isDeleting = true;
      setTimeout(typeEffect, 1200);
      return;
    }
  } else {
    typingText.textContent = currentRole.substring(0, charIndex--);
    if (charIndex < 0) {
      isDeleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
    }
  }

  setTimeout(typeEffect, isDeleting ? 50 : 110);
}

typeEffect();

// PROJECT DATA TEMPLATE
const projects = [
  {
    title: "Coming Soon",
    desc: "This project will be added soon. Stay tuned for updates.",
    github: "#",
    demo: "#"
  },
  {
    title: "Coming Soon",
    desc: "This project will be added soon. Stay tuned for updates.",
    github: "#",
    demo: "#"
  },
  {
    title: "Coming Soon",
    desc: "This project will be added soon. Stay tuned for updates.",
    github: "#",
    demo: "#"
  }
];

// RENDER PROJECTS
const projectsGrid = document.getElementById("projectsGrid");

projects.forEach((project, index) => {
  const card = document.createElement("div");
  card.classList.add("project-card");

  card.innerHTML = `
    <h3>${project.title}</h3>
    <p>${project.desc}</p>
    <button class="btn primary" onclick="openModal(${index})">View Details</button>
  `;

  projectsGrid.appendChild(card);
});

// MODAL
const modal = document.getElementById("projectModal");
const closeModalBtn = document.getElementById("closeModal");

const modalTitle = document.getElementById("modalTitle");
const modalDesc = document.getElementById("modalDesc");
const modalGithub = document.getElementById("modalGithub");
const modalDemo = document.getElementById("modalDemo");

function openModal(index) {
  modal.style.display = "flex";
  modalTitle.textContent = projects[index].title;
  modalDesc.textContent = projects[index].desc;
  modalGithub.href = projects[index].github;
  modalDemo.href = projects[index].demo;
}

closeModalBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("click", (e) => {
  if (e.target === modal) modal.style.display = "none";
});

// CONTACT FORM
const contactForm = document.getElementById("contactForm");
const formStatus = document.getElementById("formStatus");
const sendBtn = document.getElementById("sendBtn");

contactForm.addEventListener("submit", (e) => {
  e.preventDefault();

  sendBtn.textContent = "Sending...";
  sendBtn.disabled = true;

  setTimeout(() => {
    formStatus.textContent = "✅ Message Sent Successfully! (Demo Mode)";
    contactForm.reset();
    sendBtn.textContent = "Send Message";
    sendBtn.disabled = false;
  }, 1500);
});

// BACK TO TOP
const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
  backToTop.style.display = window.scrollY > 300 ? "block" : "none";
});

backToTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// SCROLL REVEAL
const revealElements = document.querySelectorAll(".reveal");

function revealOnScroll() {
  revealElements.forEach(el => {
    const rect = el.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (rect < windowHeight - 100) {
      el.classList.add("show");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();

// ACTIVE NAV LINK
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    if (pageYOffset >= sectionTop - 150) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }
  });
});
