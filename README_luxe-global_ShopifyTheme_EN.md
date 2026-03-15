# LUXE Global — Premium Shopify Theme for Cross-Border E-Commerce

> **What:** A Shopify Online Store 2.0 theme with dark mode, multilingual support, and a luxury design system for cross-border commerce
> **Who:** Shopify Plus merchants and D2C brands expanding globally
> **Tech:** Shopify Online Store 2.0 · Liquid · Vanilla CSS (CSS Custom Properties) · Vanilla JS · Google Fonts

**Source Code:** [github.com/mer-prog/luxe-global](https://github.com/mer-prog/luxe-global)

---

## Skills Demonstrated

| Skill | Implementation |
|-------|---------------|
| Shopify Theme Development | Online Store 2.0 compliant with JSON templates, 58 sections, and 39 reusable snippets in a modular architecture |
| Design System Engineering | Centralized CSS custom properties for colors, typography, and spacing with full light/dark mode support |
| Responsive Design | Mobile-first approach (375px baseline), four breakpoints, 44px minimum touch targets guaranteed |
| Internationalization (i18n) | 51-language support via Shopify Locales API with zero hardcoded strings across all templates |
| Performance Optimization | Per-section CSS loading, native lazy loading, zero external dependencies for minimal page weight |
| Accessibility | WCAG 2.1 compliance with skip links, focus trapping, keyboard navigation, and semantic HTML |
| Frontend Engineering | Advanced UI patterns (drawer menus, accordions, hover image swap) built with pure Vanilla CSS/JS — no frameworks |

---

## Tech Stack

| Category | Technology | Purpose |
|----------|-----------|---------|
| Platform | Shopify Online Store 2.0 | E-commerce foundation with JSON template-based section management |
| Templating | Liquid | Dynamic HTML rendering, product/cart/account data binding |
| Styling | Vanilla CSS (CSS Custom Properties, BEM naming) | Design token management, per-section isolated stylesheets (69 files / 14,086 lines) |
| JavaScript | Vanilla JS (ES6+) | Drawer menu, cart operations, search, localization (33 files / 5,438 lines) |
| Fonts | Google Fonts | Cormorant Garamond (headings), DM Sans (body) |
| i18n | Shopify Locales API | 51-language JSON file management, `{{ 'key' \| t }}` translation filter |
| Dev Tools | Shopify CLI | Local dev server, theme linting, deployment |

---

## Architecture Overview

```
┌─────────────────────────────────────────────────────────────────┐
│                       Shopify Storefront                        │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  ┌──────────────┐    ┌──────────────────────────────────────┐   │
│  │ layout/      │    │ templates/ (JSON)                    │   │
│  │ theme.liquid │───▶│ index.json / product.json / etc.     │   │
│  │  (HTML shell)│    │  (section layout definitions)        │   │
│  └──────────────┘    └──────────┬───────────────────────────┘   │
│                                 │                               │
│                    ┌────────────▼────────────┐                  │
│                    │ sections/ (58 Liquid)   │                  │
│                    │ hero-banner / header /  │                  │
│                    │ featured-collection /   │                  │
│                    │ product-grid / faq /    │                  │
│                    │ brand-story / footer    │                  │
│                    └────────────┬────────────┘                  │
│                                 │                               │
│              ┌──────────────────┼──────────────────┐            │
│              ▼                  ▼                   ▼           │
│  ┌────────────────┐  ┌─────────────────┐  ┌────────────────┐   │
│  │ snippets/ (39) │  │ assets/         │  │ locales/ (51)  │   │
│  │ product-card   │  │ base.css        │  │ en.default.json│   │
│  │ language-      │  │ section-*.css   │  │ ja.json        │   │
│  │   selector     │  │ theme.js        │  │ de/fr/ko/...   │   │
│  │ cart-drawer    │  │ global.js       │  │                │   │
│  └────────────────┘  └─────────────────┘  └────────────────┘   │
│                                                                 │
│  ┌──────────────────────────────────────────────────────────┐   │
│  │ config/settings_schema.json (1,455 lines)                │   │
│  │  Theme settings schema: logo / color schemes /           │   │
│  │  typography / social / section settings                   │   │
│  └──────────────────────────────────────────────────────────┘   │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

---

## Key Features

### 1. Hero Banner (`sections/hero-banner.liquid` — 114 lines)
Full-viewport image/video background with overlay text and a CTA button. Overlay opacity is adjustable from 0 to 100% via schema settings. The section renders at 80vh on mobile and 100vh on desktop. `section-hero.css` (102 lines) applies fluid typography with `clamp(2.5rem, 7vw, 5rem)` for the heading.

### 2. Featured Collection (`sections/featured-collection.liquid` — 103 lines)
Displays 4 to 12 products from a selected collection in a responsive grid: 2 columns on mobile, 3 on tablet, and 3–4 on desktop. Uses the `product-card` snippet with secondary image hover swap. Includes a "View All" link with an arrow icon.

### 3. Product Card (`snippets/product-card.liquid` — 92 lines)
Shows vendor, title, and price. When a second product image exists, a pure CSS hover swap reveals it on desktop. Sale and sold-out badges are supported. Uses `@media (hover: hover)` to disable hover effects on touch devices.

### 4. Brand Story (`sections/brand-story.liquid` — 100 lines)
Two-column layout with image and text. Image position is toggleable between left and right using a CSS Grid `direction: rtl` technique. Collapses to a single column on mobile. `section-brand-story.css` (74 lines) enforces a 4:5 aspect ratio on the image.

### 5. FAQ Accordion (`sections/faq.liquid` — 92 lines)
Built with native `<details>/<summary>` HTML elements — no JavaScript required. Supports up to 10 block items. `section-faq.css` (97 lines) animates a plus icon rotating 45 degrees on open.

### 6. Newsletter Signup (`sections/newsletter.liquid` — 143 lines)
Dark-themed email signup form that posts to Shopify's customer creation endpoint and tags contacts with "newsletter." Self-contained with inline CSS. Input and button stack vertically on mobile.

### 7. Dark Mode
Toggled via a `data-theme` attribute on the `<html>` element. CSS variables switch automatically between light (#FFFFFF background, #C9A96E gold accent) and dark (#1A1A1A background, #D4AF37 gold accent). Preference is persisted in `localStorage` and auto-detected from `prefers-color-scheme`.

### 8. Multilingual Support
Powered by the Shopify Locales API. `language-selector.liquid` (38 lines) renders a dropdown language switcher. All template text uses the `{{ 'key' | t }}` filter — zero hardcoded strings. Ships with 51 language JSON files.

### 9. Mobile Menu Drawer
Implemented in `theme.js` (40 lines). A fixed overlay slide-in menu triggered by `data-menu-toggle` / `data-menu-drawer` data attributes. Controls `body` overflow on open/close.

### 10. Sticky Header (`sections/header.liquid` — 301 lines)
Fixed header at z-index 100 with logo, desktop navigation, theme toggle, language selector, and cart icon with badge. Collapses to a hamburger menu on mobile.

---

## Design System

### Color Palette

| Element | Light Mode | Dark Mode |
|---------|-----------|-----------|
| Background | `#FFFFFF` | `#1A1A1A` |
| Text | `#1A1A1A` | `#F5F5F5` |
| Muted Text | `#6B6B6B` | `#A0A0A0` |
| Gold Accent | `#C9A96E` | `#D4AF37` |
| Accent Hover | `#B8963F` | `#E0C068` |
| Border | `#E5E5E5` | `#333333` |
| Overlay | `rgba(0,0,0,0.45)` | `rgba(0,0,0,0.6)` |

### Typography

| Usage | Font | Weights | Details |
|-------|------|---------|---------|
| Headings | Cormorant Garamond (serif) | 400, 500, 600 | `letter-spacing: 0.02em`, fluid sizing via `clamp()` |
| Body | DM Sans (sans-serif) | 400, 500, 700 | `line-height: 1.6` |

### Spacing Scale

```
--space-xs:  0.25rem (4px)    --space-lg:  2rem   (32px)
--space-sm:  0.5rem  (8px)    --space-xl:  4rem   (64px)
--space-md:  1rem    (16px)   --space-2xl: 6rem   (96px)
                              --space-3xl: 8rem   (128px)
```

### Responsive Breakpoints

| Name | Width | Target |
|------|-------|--------|
| Base | 375px+ | Mobile (design baseline) |
| sm | 640px | Mobile landscape |
| md | 768px | Tablet |
| lg | 1024px | Desktop |
| xl | 1280px (`--page-width`) | Large screens |

---

## Project Structure

```
luxe-global/                    382 files
├── assets/                     CSS: 69 files (14,086 lines) / JS: 33 files (5,438 lines)
│   ├── base.css                241 lines  Design tokens, resets, shared styles
│   ├── section-hero.css        102 lines  Hero banner styles
│   ├── section-product-grid.css 174 lines  Product grid and card styles
│   ├── section-brand-story.css  74 lines  Brand story layout styles
│   ├── section-faq.css          97 lines  FAQ accordion styles
│   ├── theme.js                 40 lines  Drawer menu control (LUXE custom)
│   ├── global.js             1,332 lines  Utilities, events, focus management
│   ├── cart.js                 297 lines  Cart state and API calls
│   ├── product-info.js         429 lines  Product display and interactions
│   ├── facets.js               365 lines  Collection filtering (AJAX)
│   ├── predictive-search.js    277 lines  Live search suggestions
│   └── ...                     Additional CSS/JS files
├── config/
│   ├── settings_schema.json  1,455 lines  Theme settings schema definitions
│   └── settings_data.json           Current theme setting values
├── layout/
│   └── theme.liquid            110 lines  HTML shell, font loading, dark mode init
├── locales/                    51 files (87,297 lines)
│   ├── en.default.json         539 lines  English (default)
│   ├── ja.json                 539 lines  Japanese
│   └── *.json                        de/fr/es/ko/zh-CN and 46 more languages
├── sections/                   58 files (22,563 lines total Liquid)
│   ├── hero-banner.liquid      114 lines  Full-screen hero section
│   ├── featured-collection.liquid 103 lines  Collection product showcase
│   ├── product-grid.liquid      80 lines  Product grid with pagination
│   ├── brand-story.liquid      100 lines  Two-column brand narrative
│   ├── faq.liquid               92 lines  FAQ accordion
│   ├── newsletter.liquid       143 lines  Email signup form
│   ├── header.liquid           301 lines  Sticky header with navigation
│   ├── footer.liquid           208 lines  Footer
│   └── ...                           Product detail, cart, blog, customer accounts, etc.
├── snippets/                   39 files
│   ├── product-card.liquid      92 lines  Product card with hover image swap
│   ├── language-selector.liquid 38 lines  Language switcher dropdown
│   └── ...                           Cart drawer, pagination, etc.
└── templates/                  20 files
    ├── index.json               78 lines  Homepage section layout
    ├── product.json             88 lines  Product detail page
    ├── collection.json          23 lines  Collection page
    └── ...                           Cart, blog, customer accounts, etc.
```

---

## Setup

### Prerequisites

- [Shopify CLI](https://shopify.dev/docs/themes/tools/cli) installed
- Access to a Shopify development store

### Installation

```bash
# Clone the repository
git clone https://github.com/mer-prog/luxe-global.git
cd luxe-global

# Start local development server
shopify theme dev --store your-store-name

# Run theme linting
shopify theme check

# Deploy to store
shopify theme push --store your-store-name
```

### Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `--store` | Store name passed to Shopify CLI commands | Yes |

No external API keys or `.env` files are needed. All functionality runs entirely on the Shopify platform.

---

## Design Decisions

| Decision | Rationale |
|----------|-----------|
| No CSS framework (Vanilla CSS) | Zero external dependencies for minimal weight. CSS custom properties provide a centralized design system that makes dark mode switching trivial |
| No JS framework (Vanilla JS) | Shopify themes should be lightweight. `theme.js` achieves full functionality in 40 lines. `global.js` is Shopify's standard utility layer |
| Per-section CSS files | Aligns with Shopify's on-demand loading — unused sections incur no CSS cost |
| Native `<details>/<summary>` for accordions | JavaScript-free, accessible by default, and supported across all modern browsers |
| `data-theme` attribute for dark mode | One CSS selector switches all variables. `localStorage` persists the choice, `prefers-color-scheme` respects OS settings |
| BEM-like CSS naming | Prevents class name collisions across sections. `.section-hero__title` makes component ownership explicit |
| Mobile-first design | Cross-border e-commerce has high mobile traffic. 375px baseline with progressive `min-width` enhancement |
| Google Fonts (Cormorant Garamond + DM Sans) | Free, high-quality typefaces. Serif/sans-serif pairing conveys luxury |
| `clamp()` fluid typography | Smooth scaling without breakpoints. Headings look optimal at every viewport width |

---

## Running Costs

| Service | Plan | Monthly Cost |
|---------|------|-------------|
| Shopify | Development Store | Free |
| Google Fonts | Free tier | $0 |
| External APIs / Services | None | $0 |
| **Total** | | **$0** |

Production stores require a Shopify subscription (Basic $39+ / Shopify Plus $2,300+).

---

## Author

[@mer-prog](https://github.com/mer-prog)
