/**
 * STORE ITEMS
 * Add or remove items here. Images should live in media/
 *
 * Fields:
 *   id          — unique identifier (string)
 *   title       — artwork title
 *   medium      — e.g. "Oil on canvas"
 *   dimensions  — e.g. '120 cm × 85 cm'
 *   year        — year created
 *   price       — number (NZD), or null if inquiry-only
 *   sold        — true / false
 *   inquiry     — true if price is hidden; contact for pricing
 *   description — short paragraph (optional)
 *   image       — path relative to site root, e.g. "media/horseshoe.png"
 *   paymentLink — Stripe Payment Link URL (supports Apple Pay, Google Pay,
 *                 and card). Create at dashboard.stripe.com → Payment Links.
 *                 Set to null to show contact button instead.
 */

const storeItems = [
  {
    id: "s02",
    title: "Horseshoe",
    medium: "Acrylic on canvas",
    dimensions: '120 cm × 85 cm',
    year: 2025,
    price: 3800,
    sold: false,
    inquiry: false,
    image: "media/horseshoe.png",
    paymentLink: null
  },
  {
    id: "s01",
    title: "The Crab",
    medium: "Acrylic on canvas",
    dimensions: '120 cm × 135 cm',
    year: 2022,
    price: 1650,
    sold: false,
    inquiry: false,
    image: "media/crab.png",
    paymentLink: null
  },
  {
    id: "s03",
    title: "Lagoon",
    medium: "Acrylic on canvas",
    dimensions: '120 cm × 90 cm',
    year: 2024,
    price: null,
    sold: false,
    inquiry: true,
    image: "media/lagoon.png",
    paymentLink: null
  },
  {
    id: "s04",
    title: "Jackpot",
    medium: "Acrylic on canvas",
    dimensions: '120 cm x 60 cm',
    year: 2025,
    price: 920,
    sold: true,
    inquiry: false,
    image: "media/jackpot.png",
    paymentLink: null
  },
  {
    id: "s05",
    title: "Web",
    medium: "Oil on canvas",
    dimensions: '40 cm x 35 cm',
    year: 2025,
    price: 680,
    sold: false,
    inquiry: false,
    image: "media/web.png",
    paymentLink: null
  },
  {
    id: "s06",
    title: "Portal",
    medium: "Oil on canvas",
    dimensions: '115 cm x 60 cm',
    year: 2026,
    price: 2400,
    sold: false,
    inquiry: false,
    image: "media/portal.png",
    paymentLink: null
  },
  {
    id: "s07",
    title: "Garden",
    medium: "Oil on canvas",
    dimensions: '25 cm x 25 cm',
    year: 2026,
    price: 2400,
    sold: false,
    inquiry: false,
    image: "media/garden.png",
    paymentLink: null
  },
  {
    id: "s08",
    title: "Anemone Flowers",
    medium: "Oil on canvas",
    dimensions: '31 cm x 25 cm',
    year: 2026,
    price: 2400,
    sold: false,
    inquiry: false,
    image: "media/anemoneFlowers.png",
    paymentLink: null
  },
  {
    id: "s09",
    title: "Roses",
    medium: "Oil on canvas",
    dimensions: '45 cm x 35 cm',
    year: 2026,
    price: 2400,
    sold: false,
    inquiry: false,
    image: "media/roses.png",
    paymentLink: null
  },
  {
    id: "s10",
    title: "Iris",
    medium: "Oil on canvas",
    dimensions: '40 cm x 25 cm',
    year: 2026,
    price: 2400,
    sold: false,
    inquiry: false,
    image: "media/iris.png",
    paymentLink: null
  },
  {
    id: "s11",
    title: "The Prairie",
    medium: "Oil on canvas",
    dimensions: '45 cm x 45 cm',
    year: 2026,
    price: 2400,
    sold: false,
    inquiry: false,
    image: "media/thePrairie.png",
    paymentLink: null
  },
  {
    id: "s12",
    title: "Orchid",
    medium: "Oil on canvas",
    dimensions: '75 cm x 45 cm',
    year: 2026,
    price: 2400,
    sold: false,
    inquiry: false,
    image: "media/orchid.png",
    paymentLink: null
  }
];
