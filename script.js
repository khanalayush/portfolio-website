const toggleBtn = document.querySelector(".toggle-button");
const dropDown = document.querySelector(".dropdown-menu");
const menuLinks = document.querySelectorAll(".dropdown-menu a");

// Toggle dropdown on button click
toggleBtn.addEventListener("click", () => {
  dropDown.classList.toggle("hidden");
});

// Close dropdown when a link is clicked
menuLinks.forEach((link) => {
  link.addEventListener("click", () => {
    dropDown.classList.add("hidden");
  });
});

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop-100;
    const sectionHeight = section.offsetHeight;

    if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
      current = section.id;
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active-link");

    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active-link");
    }
  });
});