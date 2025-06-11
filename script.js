// script.js - Add interactive transitions or effects

document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll(".nav-links a");

  links.forEach(link => {
    link.addEventListener("mouseenter", () => {
      link.style.transform = "scale(1.05)";
      link.style.transition = "transform 0.3s ease";
    });

    link.addEventListener("mouseleave", () => {
      link.style.transform = "scale(1)";
    });
  });

  // Scroll-based fade-in effect for sections
  const sections = document.querySelectorAll("section");
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("fade-in");
      }
    });
  }, {
    threshold: 0.1
  });

  sections.forEach(section => {
    section.classList.remove("fade-in"); // reset before observing
    observer.observe(section);
  });
});
