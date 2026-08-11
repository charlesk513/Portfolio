const body = document.body;
const themeToggle = document.getElementById("themeToggle");
const themeIcon = document.getElementById("themeIcon");
const menuToggle = document.getElementById("menuToggle");
const mobileNav = document.getElementById("mobileNav");

const savedTheme = localStorage.getItem("portfolio-theme");
if (savedTheme === "light") body.classList.add("light");

function updateThemeIcon() {
  themeIcon.textContent = body.classList.contains("light") ? "☀" : "☾";
  themeToggle.setAttribute("aria-label", body.classList.contains("light")
    ? "Switch to dark mode" : "Switch to light mode");
}
updateThemeIcon();

themeToggle.addEventListener("click", () => {
  body.classList.toggle("light");
  localStorage.setItem("portfolio-theme", body.classList.contains("light") ? "light" : "dark");
  updateThemeIcon();
});

menuToggle.addEventListener("click", () => {
  const open = mobileNav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(open));
  menuToggle.textContent = open ? "×" : "☰";
});

mobileNav.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    mobileNav.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.textContent = "☰";
  });
});

document.querySelectorAll(".js-project-link").forEach(link => {
  link.addEventListener("click", (event) => {
    const url = link.dataset.url;
    if (!url || url.includes("example.com")) {
      event.preventDefault();
      alert("This project is still being prepared. Replace the placeholder demo link in index.html when the demo/video is ready.");
    }
  });
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll(".reveal").forEach((el, index) => {
  el.style.transitionDelay = `${Math.min(index % 6, 5) * 60}ms`;
  observer.observe(el);
});

document.getElementById("year").textContent = new Date().getFullYear();
