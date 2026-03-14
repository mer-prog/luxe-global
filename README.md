# LUXE Global

**A premium Shopify theme built for cross-border e-commerce.**

![LUXE Global Screenshot](docs/screenshots/luxe-global-preview.png)

## Features

- **Online Store 2.0** — Fully compliant with Shopify's latest theme architecture and JSON templates
- **Dark Mode** — One-click toggle between light and dark themes with gold accent colors
- **Bilingual (EN/JA)** — Full i18n support via Shopify Locales with zero hardcoded text
- **Mobile-First Responsive** — Optimized from 375px up with 44px+ touch targets
- **Luxury Design System** — Minimal black x gold x white palette with Cormorant Garamond + DM Sans typography
- **Modular Sections** — Hero banner, featured collection, product grid with hover image swap, brand story, FAQ accordion, newsletter signup
- **No External Dependencies** — Pure Vanilla CSS (CSS custom properties) and Vanilla JS, zero frameworks

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Platform | Shopify Online Store 2.0 |
| Templating | Liquid |
| Styling | Vanilla CSS (CSS Custom Properties, BEM naming) |
| JavaScript | Vanilla JS (no frameworks) |
| Fonts | Google Fonts (Cormorant Garamond / DM Sans) |
| i18n | Shopify Locales API |

## Getting Started

### Prerequisites

- [Shopify CLI](https://shopify.dev/docs/themes/tools/cli) installed
- A Shopify development store

### Development

```bash
# Start local development server
shopify theme dev --store your-store-name

# Run theme linting
shopify theme check

# Deploy to store
shopify theme push --store your-store-name
```

## Architecture

```
luxe-global/
├── assets/          # CSS (per-section) & JS
├── config/          # Theme settings schema
├── layout/          # Theme wrapper (theme.liquid)
├── locales/         # i18n translations (en, ja)
├── sections/        # Modular Liquid sections
├── snippets/        # Reusable partials (product card, icons)
└── templates/       # JSON templates (index, product, collection)
```

Each section has its own CSS file loaded on demand. All design tokens (colors, spacing, typography) are centralized in `base.css` via CSS custom properties.

## License

MIT
