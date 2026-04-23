/**
 * portfolio.js — Renders portfolio grid with filtering and lightbox.
 * Expects portfolioItems[] and mediumFilters[] from data/portfolio.js.
 */

(function () {
  const filtersEl = document.getElementById("portfolio-filters");
  const gridEl = document.getElementById("portfolio-grid");
  const lightbox = document.getElementById("portfolio-lightbox");
  if (!gridEl || !lightbox) return;

  let activeFilter = "all";
  let lightboxIndex = 0;

  // Visible items (respects current filter)
  function visibleItems() {
    if (activeFilter === "all") return portfolioItems;
    return portfolioItems.filter(i => i.medium === activeFilter);
  }

  // Build filter buttons
  if (filtersEl && mediumFilters) {
    filtersEl.innerHTML = mediumFilters.map(f => `
      <button class="filter-btn${f.key === "all" ? " active" : ""}"
              data-filter="${f.key}">${f.label}</button>
    `).join("");

    filtersEl.addEventListener("click", (e) => {
      const btn = e.target.closest(".filter-btn");
      if (!btn) return;
      activeFilter = btn.dataset.filter;
      filtersEl.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      applyFilter();
    });
  }

  function renderGrid() {
    gridEl.innerHTML = portfolioItems.map((item, index) => `
      <figure class="portfolio-item" data-medium="${item.medium}" data-index="${index}"
              tabindex="0" role="button" aria-label="View ${item.title}">
        <img src="${item.thumb || item.image}"
             alt="${item.title}"
             loading="lazy"
             onerror="this.parentElement.style.minHeight='200px'; this.style.display='none'">
        <figcaption class="portfolio-item-overlay">
          <span class="portfolio-item-title">${item.title}</span>
          <span class="portfolio-item-medium">${item.medium.replace(/-/g," ")} · ${item.year}</span>
          ${item.description ? `<span class="portfolio-item-desc">${item.description}</span>` : ""}
        </figcaption>
      </figure>
    `).join("");
  }

  function applyFilter() {
    gridEl.querySelectorAll(".portfolio-item").forEach(el => {
      const match = activeFilter === "all" || el.dataset.medium === activeFilter;
      el.classList.toggle("hidden", !match);
    });
  }

  function openLightbox(index) {
    const visible = visibleItems();
    if (!visible.length) return;
    lightboxIndex = index;
    const item = visible[lightboxIndex];
    lightbox.querySelector(".lightbox-img").src = item.image;
    lightbox.querySelector(".lightbox-img").alt = item.title;
    lightbox.querySelector(".lightbox-title").textContent = item.title;
    lightbox.querySelector(".lightbox-meta").textContent =
      `${item.medium.replace(/-/g," ")} · ${item.dimensions} · ${item.year}`;
    lightbox.classList.add("open");
    document.body.style.overflow = "hidden";
  }

  function closeLightbox() {
    lightbox.classList.remove("open");
    document.body.style.overflow = "";
  }

  function stepLightbox(dir) {
    const visible = visibleItems();
    lightboxIndex = (lightboxIndex + dir + visible.length) % visible.length;
    const item = visible[lightboxIndex];
    const img = lightbox.querySelector(".lightbox-img");
    img.style.opacity = "0";
    setTimeout(() => {
      img.src = item.image;
      img.alt = item.title;
      lightbox.querySelector(".lightbox-title").textContent = item.title;
      lightbox.querySelector(".lightbox-meta").textContent =
        `${item.medium.replace(/-/g," ")} · ${item.dimensions} · ${item.year}`;
      img.style.opacity = "1";
    }, 180);
  }

  renderGrid();

  // Click to open lightbox
  gridEl.addEventListener("click", (e) => {
    const item = e.target.closest(".portfolio-item");
    if (!item) return;
    const globalIndex = parseInt(item.dataset.index, 10);
    const visible = visibleItems();
    // Map global index to visible index
    const visIdx = visible.findIndex(v => portfolioItems.indexOf(v) === globalIndex);
    openLightbox(visIdx >= 0 ? visIdx : 0);
  });

  gridEl.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      const item = e.target.closest(".portfolio-item");
      if (item) { e.preventDefault(); item.click(); }
    }
  });

  // Lightbox controls
  lightbox.querySelector(".lightbox-close").addEventListener("click", closeLightbox);
  lightbox.querySelector(".lightbox-prev").addEventListener("click", () => stepLightbox(-1));
  lightbox.querySelector(".lightbox-next").addEventListener("click", () => stepLightbox(1));
  lightbox.addEventListener("click", (e) => { if (e.target === lightbox) closeLightbox(); });

  document.addEventListener("keydown", (e) => {
    if (!lightbox.classList.contains("open")) return;
    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowLeft") stepLightbox(-1);
    if (e.key === "ArrowRight") stepLightbox(1);
  });

  // Transition for lightbox image
  lightbox.querySelector(".lightbox-img").style.transition = "opacity 0.18s";
})();
