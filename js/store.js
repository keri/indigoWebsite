(function () {
  const grid = document.getElementById("store-grid");
  if (!grid) return;

  function formatPrice(item) {
    if (item.sold) return `<span class="store-card-price sold-price">Sold</span>`;
    if (item.inquiry) return `<span class="store-card-price">Price on request</span>`;
    return `<span class="store-card-price">$${item.price.toLocaleString()}</span>`;
  }

  function formatActions(item) {
    if (item.sold) {
      return `<button class="btn-contact" disabled>Sold</button>`;
    }
    if (item.inquiry) {
      return `<a href="contact.html?subject=${encodeURIComponent('Purchase: ' + item.title)}" class="btn-contact">Contact artist directly to arrange purchase</a>`;
    }
    if (item.paymentLink) {
      return `
        <a href="${item.paymentLink}" class="btn-buy" target="_blank" rel="noopener noreferrer">
          Buy Now
        </a>
        <span class="btn-buy-methods">
          <svg class="pay-icon" viewBox="0 0 48 20" aria-hidden="true"><text y="16" font-size="14" font-family="-apple-system,sans-serif" fill="currentColor"> Pay</text></svg>
          <span class="pay-divider">·</span>
          <svg class="pay-icon gpay-icon" viewBox="0 0 50 20" aria-hidden="true"><text y="16" font-size="13" font-family="sans-serif" fill="currentColor">G Pay</text></svg>
          <span class="pay-divider">·</span>
          <span>Card</span>
        </span>`;
    }
    return `<a href="contact.html?subject=${encodeURIComponent('Purchase: ' + item.title)}" class="btn-contact">Contact artist directly to arrange purchase</a>`;
  }

  grid.innerHTML = storeItems.map(item => `
    <article class="store-card">
      <div class="store-card-image">
        <img src="${item.image}"
             alt="${item.title}"
             loading="lazy"
             data-lightbox="${item.image}"
             data-title="${item.title}"
             onerror="this.parentElement.style.background='#222'; this.style.display='none'">
        ${item.sold ? '<span class="store-card-badge sold">Sold</span>' : ''}
      </div>
      <div class="store-card-body">
        <h2 class="store-card-title">${item.title}</h2>
        <p class="store-card-medium">${item.medium} &nbsp;·&nbsp; ${item.dimensions} &nbsp;·&nbsp; ${item.year}</p>
        ${item.description ? `<p class="store-card-desc">${item.description}</p>` : ''}
        <div class="store-card-footer">
          ${formatPrice(item)}
          ${formatActions(item)}
        </div>
      </div>
    </article>
  `).join("");

  // Lightbox
  const lb = document.createElement("div");
  lb.className = "store-lightbox";
  lb.setAttribute("role", "dialog");
  lb.setAttribute("aria-modal", "true");
  lb.innerHTML = `
    <button class="store-lightbox-close" aria-label="Close">&times;</button>
    <img class="store-lightbox-img" src="" alt="">
    <p class="store-lightbox-caption"></p>
  `;
  document.body.appendChild(lb);

  const lbImg = lb.querySelector(".store-lightbox-img");
  const lbCaption = lb.querySelector(".store-lightbox-caption");

  function openLightbox(src, title) {
    lbImg.src = src;
    lbImg.alt = title;
    lbCaption.textContent = title;
    lb.classList.add("open");
    document.body.style.overflow = "hidden";
  }

  function closeLightbox() {
    lb.classList.remove("open");
    document.body.style.overflow = "";
  }

  grid.addEventListener("click", e => {
    const img = e.target.closest("[data-lightbox]");
    if (img) openLightbox(img.dataset.lightbox, img.dataset.title);
  });

  lb.querySelector(".store-lightbox-close").addEventListener("click", closeLightbox);
  lb.addEventListener("click", e => { if (e.target === lb) closeLightbox(); });
  document.addEventListener("keydown", e => { if (e.key === "Escape") closeLightbox(); });
})();
