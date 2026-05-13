const toggleBtn = document.querySelector(".toggle-button");
const dropDown = document.querySelector(".dropdown-menu");

toggleBtn.addEventListener("click", () => {
  dropDown.classList.toggle("hidden");
});

