/**
 * nav.js — Injects the shared navigation and footer into every page.
 * Sets the active link based on the current page filename.
 */

(function () {
  const pages = [
    { href: "index.html",     label: "Home" },
    { href: "portfolio.html", label: "Portfolio" },
    { href: "store.html",     label: "Store" },
    { href: "about.html",     label: "About" },
    { href: "contact.html",   label: "Contact" },
  ];

  const current = location.pathname.split("/").pop() || "index.html";

  // Build nav links
  const linksHTML = pages
    .map(p => {
      const active = current === p.href || (current === "" && p.href === "index.html")
        ? ' class="active"' : '';
      return `<a href="${p.href}"${active}>${p.label}</a>`;
    })
    .join("");

  const drawerLinksHTML = pages
    .map(p => {
      const active = current === p.href ? ' class="active"' : '';
      return `<a href="${p.href}"${active}>${p.label}</a>`;
    })
    .join("");

  // Determine artist name (update once you have a name)
  const ARTIST_NAME = "Indigo Multerer";
  const YEAR = new Date().getFullYear();

  // Inject nav
  const navEl = document.getElementById("site-nav");
  if (navEl) {
    navEl.innerHTML = `
      <a class="nav-logo" href="index.html">${ARTIST_NAME}</a>
      <nav class="nav-links" aria-label="Main navigation">
        ${linksHTML}
      </nav>
      <button class="nav-toggle" aria-label="Toggle menu" aria-expanded="false">
        <span></span><span></span><span></span>
      </button>
    `;
  }

  // Inject drawer (mobile)
  const drawerEl = document.getElementById("nav-drawer");
  if (drawerEl) {
    drawerEl.innerHTML = drawerLinksHTML;
  }

  // Inject footer
  const footerEl = document.getElementById("site-footer");
  if (footerEl) {
    footerEl.innerHTML = `
      <span class="footer-logo">${ARTIST_NAME}</span>
      <span class="footer-copy">&copy; ${YEAR}. All rights reserved.</span>
      <div class="footer-social">
        <a href="#" aria-label="Instagram">Instagram</a>
        <a href="#" aria-label="Artsy">Artsy</a>
        <a href="contact.html">Contact</a>
      </div>
    `;
  }

  // Scroll behaviour: add .scrolled to nav
  const nav = document.querySelector(".nav");
  if (nav) {
    const onScroll = () => {
      nav.classList.toggle("scrolled", window.scrollY > 40);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }

  // Mobile toggle
  document.addEventListener("click", (e) => {
    const toggle = e.target.closest(".nav-toggle");
    if (toggle) {
      const open = toggle.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open);
      const drawer = document.getElementById("nav-drawer");
      if (drawer) drawer.classList.toggle("open", open);
      return;
    }
    // Close on outside click
    const drawer = document.getElementById("nav-drawer");
    if (drawer && drawer.classList.contains("open") && !e.target.closest("#nav-drawer")) {
      drawer.classList.remove("open");
      document.querySelector(".nav-toggle")?.classList.remove("open");
    }
  });

})();
