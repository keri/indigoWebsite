(function () {
  const grid = document.getElementById("store-grid");
  if (!grid) return;

  function formatPrice(item) {
    if (item.sold) return `<span class="store-card-price sold-price">Sold</span>`;
    if (item.inquiry) return `<span class="store-card-price">Price on request</span>`;
    return `<span class="store-card-price">$${item.price.toLocaleString()}</span>`;
  }

  grid.innerHTML = storeItems.map(item => `
    <article class="store-card">
      <div class="store-card-image">
        <img src="${item.image}"
             alt="${item.title}"
             loading="lazy"
             onerror="this.parentElement.style.background='#222'; this.style.display='none'">
        ${item.sold ? '<span class="store-card-badge sold">Sold</span>' : ''}
      </div>
      <div class="store-card-body">
        <h2 class="store-card-title">${item.title}</h2>
        <p class="store-card-medium">${item.medium} &nbsp;·&nbsp; ${item.dimensions} &nbsp;·&nbsp; ${item.year}</p>
        <p class="store-card-desc">${item.description}</p>
        <div class="store-card-footer">
          ${formatPrice(item)}
          ${item.sold
            ? `<button class="btn-contact" disabled>Sold</button>`
            : `<a href="contact.html?subject=${encodeURIComponent('Purchase: ' + item.title)}" class="btn-contact">Contact artist directly to arrange purchase</a>`
          }
        </div>
      </div>
    </article>
  `).join("");
})();
