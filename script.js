const menuToggle = document.querySelector(".menu-toggle");
const mobileNavigation = document.querySelector(".mobile-nav");
menuToggle.addEventListener("click", () => {
  menuToggle.classList.toggle("active");
  mobileNavigation.classList.toggle("active");
});
