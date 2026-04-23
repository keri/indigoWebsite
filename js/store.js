/**
 * store.js — Renders store grid from data/store.js and handles modal.
 * Expects storeItems[] to be defined by data/store.js loaded before this.
 */

(function () {
  const grid = document.getElementById("store-grid");
  const modal = document.getElementById("store-modal");
  if (!grid || !modal) return;

  function formatPrice(item) {
    if (item.sold) return `<span class="store-card-price sold-price">$${item.price.toLocaleString()}</span>`;
    if (item.inquiry) return `<span class="store-card-price">Inquire</span>`;
    return `<span class="store-card-price">$${item.price.toLocaleString()}</span>`;
  }

  function badgeHTML(item) {
    if (item.sold) return `<span class="store-card-badge sold">Sold</span>`;
    return `<span class="store-card-badge">Available</span>`;
  }

  function renderGrid() {
    grid.innerHTML = storeItems.map(item => `
      <article class="store-card" data-id="${item.id}" tabindex="0" role="button"
               aria-label="View ${item.title}">
        <div class="store-card-image">
          <img src="${item.image}"
               alt="${item.title}"
               loading="lazy"
               onerror="this.parentElement.style.background='#222'; this.style.display='none'">
          ${badgeHTML(item)}
        </div>
        <div class="store-card-body">
          <h2 class="store-card-title">${item.title}</h2>
          <p class="store-card-medium">${item.medium} &nbsp;·&nbsp; ${item.dimensions} &nbsp;·&nbsp; ${item.year}</p>
          <p class="store-card-desc">${item.description}</p>
          <div class="store-card-footer">
            ${formatPrice(item)}
            <button class="btn-sm" ${item.sold ? "disabled" : ""} data-action="inquire" data-id="${item.id}">
              ${item.sold ? "Sold" : item.inquiry ? "Inquire" : "Purchase"}
            </button>
          </div>
        </div>
      </article>
    `).join("");
  }

  function openModal(id) {
    const item = storeItems.find(i => i.id === id);
    if (!item) return;

    modal.querySelector(".store-modal-image img").src = item.image;
    modal.querySelector(".store-modal-image img").alt = item.title;
    modal.querySelector(".store-modal-title").textContent = item.title;
    modal.querySelector(".store-modal-meta").textContent =
      `${item.medium} · ${item.dimensions} · ${item.year}`;
    modal.querySelector(".store-modal-desc").textContent = item.description;

    const priceEl = modal.querySelector(".store-modal-price");
    if (item.sold) priceEl.textContent = "Sold";
    else if (item.inquiry) priceEl.textContent = "Inquire for pricing";
    else priceEl.textContent = `$${item.price.toLocaleString()}`;

    const actionBtn = modal.querySelector(".store-modal-action");
    if (item.sold) {
      actionBtn.textContent = "Sold";
      actionBtn.disabled = true;
    } else if (item.inquiry) {
      actionBtn.textContent = "Send Inquiry";
      actionBtn.disabled = false;
      actionBtn.onclick = () => {
        window.location.href = `contact.html?subject=${encodeURIComponent("Inquiry: " + item.title)}`;
      };
    } else {
      actionBtn.textContent = "Purchase Inquiry";
      actionBtn.disabled = false;
      actionBtn.onclick = () => {
        window.location.href = `contact.html?subject=${encodeURIComponent("Purchase: " + item.title)}`;
      };
    }

    modal.classList.add("open");
    document.body.style.overflow = "hidden";
  }

  function closeModal() {
    modal.classList.remove("open");
    document.body.style.overflow = "";
  }

  renderGrid();

  // Event delegation — card click opens modal
  grid.addEventListener("click", (e) => {
    const card = e.target.closest(".store-card");
    const action = e.target.closest("[data-action]");
    if (action) {
      e.stopPropagation();
      const id = action.dataset.id;
      const item = storeItems.find(i => i.id === id);
      if (item && !item.sold) {
        const subject = item.inquiry
          ? `Inquiry: ${item.title}`
          : `Purchase: ${item.title}`;
        window.location.href = `contact.html?subject=${encodeURIComponent(subject)}`;
      }
      return;
    }
    if (card) openModal(card.dataset.id);
  });

  grid.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      const card = e.target.closest(".store-card");
      if (card) { e.preventDefault(); openModal(card.dataset.id); }
    }
  });

  // Close modal
  modal.querySelector(".store-modal-close").addEventListener("click", closeModal);
  modal.addEventListener("click", (e) => {
    if (e.target === modal) closeModal();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeModal();
  });
})();
