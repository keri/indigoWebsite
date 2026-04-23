/**
 * STORE ITEMS
 * Add or remove items here. Images should live in media/store/
 *
 * Fields:
 *   id        — unique identifier (string)
 *   title     — artwork title
 *   medium    — e.g. "Oil on canvas"
 *   dimensions— e.g. '24" × 36"'
 *   year      — year created
 *   price     — number (USD), or null if inquiry-only
 *   sold      — true / false
 *   inquiry   — true if price is hidden; contact for pricing
 *   description — short paragraph
 *   image     — path relative to site root, e.g. "media/store/piece-01.jpg"
 */

const storeItems = [
  {
    id: "s01",
    title: "Tidal Memory",
    medium: "Oil on linen",
    dimensions: '36" × 48"',
    year: 2024,
    price: 3800,
    sold: false,
    inquiry: false,
    description: "Layers of translucent glaze build a coastal horizon half-remembered, half-invented — blues drifting into the warmth of aged umber.",
    image: "media/store/tidal-memory.jpg"
  },
  {
    id: "s02",
    title: "Interval I",
    medium: "Acrylic & graphite on panel",
    dimensions: '18" × 24"',
    year: 2024,
    price: 1650,
    sold: false,
    inquiry: false,
    description: "A study in silence: geometric planes interrupted by a single gestural mark, exploring the tension between order and instinct.",
    image: "media/store/interval-i.jpg"
  },
  {
    id: "s03",
    title: "Inheritance",
    medium: "Oil on canvas",
    dimensions: '48" × 60"',
    year: 2023,
    price: null,
    sold: false,
    inquiry: true,
    description: "A large-scale meditation on family and landscape, combining photographic memory with abstract gesture. Inquiry for pricing.",
    image: "media/store/inheritance.jpg"
  },
  {
    id: "s04",
    title: "Dusk Archive",
    medium: "Mixed media on paper",
    dimensions: '22" × 30"',
    year: 2023,
    price: 920,
    sold: true,
    inquiry: false,
    description: "Monotype, collage, and oil stick create a record of a single evening's light — documentary and elegy at once.",
    image: "media/store/dusk-archive.jpg"
  },
  {
    id: "s05",
    title: "Salt Plane",
    medium: "Encaustic on board",
    dimensions: '12" × 12"',
    year: 2024,
    price: 680,
    sold: false,
    inquiry: false,
    description: "Beeswax and pigment fused with heat, capturing the crystalline flatness of desert evaporation in miniature.",
    image: "media/store/salt-plane.jpg"
  },
  {
    id: "s06",
    title: "Pale Witness",
    medium: "Charcoal & oil on canvas",
    dimensions: '30" × 40"',
    year: 2024,
    price: 2400,
    sold: false,
    inquiry: false,
    description: "A figurative work emerging from abstraction — the suggestion of a face in a field of charcoal grey and unworked linen.",
    image: "media/store/pale-witness.jpg"
  }
];
