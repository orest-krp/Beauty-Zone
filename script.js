const menuToggle = document.querySelector(".header__menu-toggle");
const mobileNavigation = document.querySelector(".header__mobile-nav");

let isOpen = false;

menuToggle.addEventListener("click", () => {
  isOpen = !isOpen;
  menuToggle.classList.toggle("active");
  mobileNavigation.classList.toggle("active");
  mobileNavigation.setAttribute("aria-hidden", !isOpen);
  const links = mobileNavigation.querySelectorAll(".header__nav-link");
  links.forEach((link) => {
    link.setAttribute("tabindex", isOpen ? "0" : "-1");
  });
});

const form = document.querySelector(".contacts__form");
const fields = form.querySelectorAll(".contacts__field");
const successMsg = form.querySelector(".contacts__success");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  let isValid = true;

  fields.forEach((field) => {
    const input = field.querySelector(".contacts__input");
    const error = field.querySelector(".contacts__error");

    error.style.display = "none";
    input.classList.remove("contacts__input--error");

    if (!input.value.trim()) {
      error.textContent = "Це поле обов’язкове";
      error.style.display = "block";
      input.classList.add("contacts__input--error");
      isValid = false;
    } else {
      if (input.type === "email") {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(input.value.trim())) {
          error.textContent = "Не правильна електронна пошта";
          error.style.display = "block";
          input.classList.add("contacts__input--error");
          isValid = false;
        }
      }

      if (input.type === "tel") {
        const phoneRegex = /^\+?\d{10,15}$/;
        if (!phoneRegex.test(input.value.trim())) {
          error.textContent = "Неправильний номер телефону";
          error.style.display = "block";
          input.classList.add("contacts__input--error");
          isValid = false;
        }
      }
    }
  });

  if (isValid) {
    successMsg.textContent = "Форма успішно відправлена!";
    successMsg.style.display = "block";
    form.reset();
  }
});

fields.forEach((field) => {
  const input = field.querySelector(".contacts__input");
  const error = field.querySelector(".contacts__error");

  input.addEventListener("input", () => {
    error.style.display = "none";
    input.classList.remove("contacts__input--error");
    successMsg.style.display = "none";
  });
});
