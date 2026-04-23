/**
 * main.js — Homepage-specific JS
 * Hero parallax, hero bg reveal animation.
 */

(function () {
  // Hero bg: trigger scale animation after image loads
  const heroBg = document.querySelector(".hero-bg");
  if (heroBg) {
    const img = new Image();
    img.src = window.getComputedStyle(heroBg).backgroundImage
      .replace(/url\(["']?/, "").replace(/["']?\)/, "");
    img.onload = () => heroBg.classList.add("loaded");
    // Fallback in case bg image is already cached
    setTimeout(() => heroBg.classList.add("loaded"), 200);
  }

  // Subtle parallax on hero bg
  const hero = document.querySelector(".hero");
  if (hero) {
    window.addEventListener("scroll", () => {
      const scrolled = window.scrollY;
      if (heroBg && scrolled < window.innerHeight) {
        heroBg.style.transform = `translateY(${scrolled * 0.25}px) scale(1)`;
      }
    }, { passive: true });
  }

  // Smooth scroll for hero CTA
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", (e) => {
      const target = document.querySelector(anchor.getAttribute("href"));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  });
})();
