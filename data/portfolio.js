/**
 * PORTFOLIO ITEMS
 * Images should live in media/portfolio/
 * Use the "medium" field (matching mediumFilters below) to enable filtering.
 *
 * Fields:
 *   id        — unique identifier
 *   title     — artwork title
 *   medium    — must match one of the filter keys below
 *   year      — year created
 *   dimensions— display string
 *   description — short caption shown on hover and in lightbox
 *   image     — path from site root, e.g. "media/portfolio/work-01.jpg"
 *   thumb     — optional separate thumbnail; if omitted, image is used
 */

// Filters shown as tabs above the grid
const mediumFilters = [
  { key: "all",       label: "All Works" },
  { key: "oil",       label: "Oil" },
  { key: "acrylic",   label: "Acrylic" },
  { key: "mixed",     label: "Mixed Media" },
  { key: "works-on-paper", label: "Works on Paper" },
  { key: "sculpture", label: "Sculpture" },
];

const portfolioItems = [
  {
    id: "p01",
    title: "Erosion Study #3",
    medium: "oil",
    year: 2024,
    dimensions: '24" × 36"',
    description: "Oil on linen — geological strata rendered in warm ochre and raw sienna.",
    image: "media/painting1.png"
  },
  {
    id: "p02",
    title: "Blue Ground",
    medium: "acrylic",
    year: 2023,
    dimensions: '48" × 48"',
    description: "Large-scale acrylic exploration of chromatic depth and spatial ambiguity.",
    image: "media/painting2.png"
  },
  {
    id: "p03",
    title: "Cartography of Forgetting",
    medium: "mixed",
    year: 2024,
    dimensions: '30" × 22"',
    description: "Map fragments, encaustic, and oil pastel on paper. Part of an ongoing archive series.",
    image: "media/painting-1.png"
  },
  {
    id: "p04",
    title: "Fugue State I",
    medium: "works-on-paper",
    year: 2022,
    dimensions: '18" × 24"',
    description: "Ink wash and graphite. First in a series exploring repetition and musical structure.",
    image: "media/painting-2.png"
  },
  {
    id: "p05",
    title: "Sediment",
    medium: "sculpture",
    year: 2023,
    dimensions: '14" × 8" × 8"',
    description: "Cast resin with embedded pigment and mineral inclusions. Edition of 5.",
    image: "media/portfolio/sediment.jpg"
  },
  {
    id: "p06",
    title: "Afternoon Interior",
    medium: "oil",
    year: 2022,
    dimensions: '20" × 16"',
    description: "Oil on board. Domestic light, the quiet hour before dusk.",
    image: "media/portfolio/afternoon-interior.jpg"
  },
  {
    id: "p07",
    title: "Soft Architecture",
    medium: "acrylic",
    year: 2024,
    dimensions: '60" × 40"',
    description: "Monumental acrylic on canvas — structural forms dissolved into colour field.",
    image: "media/portfolio/soft-architecture.jpg"
  },
  {
    id: "p08",
    title: "Ghost Line",
    medium: "works-on-paper",
    year: 2024,
    dimensions: '11" × 17"',
    description: "Lithograph, edition of 12. Residual mark-making on Japanese kozo paper.",
    image: "media/portfolio/ghost-line.jpg"
  },
  {
    id: "p09",
    title: "Root Memory",
    medium: "mixed",
    year: 2023,
    dimensions: '36" × 36"',
    description: "Soil, beeswax, oil, and photographic transfer on wood panel.",
    image: "media/portfolio/root-memory.jpg"
  },
  {
    id: "p10",
    title: "Threshold",
    medium: "sculpture",
    year: 2024,
    dimensions: '24" × 6" × 6"',
    description: "Bronze with patina. Unique cast. Exploring liminal passage.",
    image: "media/portfolio/threshold.jpg"
  },
  {
    id: "p11",
    title: "Mineral Study V",
    medium: "oil",
    year: 2023,
    dimensions: '16" × 12"',
    description: "Oil on copper. The fifth in an ongoing study of geological texture.",
    image: "media/portfolio/mineral-study-v.jpg"
  },
  {
    id: "p12",
    title: "Residue",
    medium: "works-on-paper",
    year: 2022,
    dimensions: '22" × 30"',
    description: "Monotype with hand-applied oil pastel. One of a kind.",
    image: "media/portfolio/residue.jpg"
  }
];
