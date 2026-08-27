import "@phosphor-icons/web/regular";
import "@phosphor-icons/web/fill";
import "./style.css";

function initMobileNav() {
  const toggle = document.querySelector("[data-nav-toggle]");
  const panel = document.querySelector("[data-nav-panel]");
  if (!toggle || !panel) return;

  toggle.addEventListener("click", () => {
    const isOpen = panel.dataset.open === "true";
    panel.dataset.open = String(!isOpen);
    toggle.setAttribute("aria-expanded", String(!isOpen));
    panel.classList.toggle("hidden", isOpen);
  });
}

function initTestimonialCarousel() {
  const track = document.querySelector("[data-testimonial-track]");
  const prevBtn = document.querySelector("[data-testimonial-prev]");
  const nextBtn = document.querySelector("[data-testimonial-next]");
  if (!track || !prevBtn || !nextBtn) return;

  const scrollByCard = (direction) => {
    const card = track.querySelector("[data-testimonial-card]");
    if (!card) return;
    const gap = parseFloat(getComputedStyle(track).columnGap || "0");
    const distance = card.getBoundingClientRect().width + gap;
    track.scrollBy({ left: direction * distance, behavior: "smooth" });
  };

  prevBtn.addEventListener("click", () => scrollByCard(-1));
  nextBtn.addEventListener("click", () => scrollByCard(1));
}

function initNewsletterForm() {
  const form = document.querySelector("[data-newsletter-form]");
  if (!form) return;

  const status = form.querySelector("[data-newsletter-status]");

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const input = form.querySelector("input[type='email']");
    const email = input?.value.trim() ?? "";
    const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    if (!status) return;

    if (!isValid) {
      status.textContent = "Enter a valid email address.";
      status.dataset.state = "error";
      input?.focus();
      return;
    }

    status.textContent = "You're in. Check your inbox to confirm.";
    status.dataset.state = "success";
    form.reset();
  });
}

function initYear() {
  const el = document.querySelector("[data-current-year]");
  if (el) el.textContent = String(new Date().getFullYear());
}

initMobileNav();
initTestimonialCarousel();
initNewsletterForm();
initYear();
