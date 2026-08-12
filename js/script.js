const buttonToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
const allNavLinks = document.querySelectorAll(".nav-links a");
const revealElements = document.querySelectorAll(".reveal");

buttonToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");

  const isOpen = navLinks.classList.contains("active");

  buttonToggle.textContent = isOpen ? "✕" : "☰";
  buttonToggle.setAttribute(
    "aria-label",
    isOpen ? "Fechar menu" : "Abrir menu",
  );
  buttonToggle.setAttribute("aria-expanded", isOpen);
});

allNavLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
    buttonToggle.textContent = "☰";
    buttonToggle.setAttribute("aria-label", "Abrir menu");
    buttonToggle.setAttribute("aria-expanded", "false");
  });
});

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");

      revealObserver.unobserve(entry.target);

      entry.target.addEventListener("animationend", () => {
        entry.target.classList.remove("reveal");
      });
    }
  });
});

revealElements.forEach((element) => {
  revealObserver.observe(element);
});
