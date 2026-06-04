# Clover Moda - Design System Specifications

## 1. Brand Vision
Clover Moda is a digital-native retail brand focused on a high-performance, mobile-first static catalog experience. The aesthetic is clean, modern, and high-contrast, utilizing a vibrant secondary palette against a minimalist monochrome base.

## 2. Color Palette
The system uses a core monochrome foundation with three strategic brand accents.

### Core Foundation
- **Surface (White):** `#FFFFFF` - Used for primary backgrounds and high-readiness areas.
- **On-Surface (Black):** `#000000` - Used for primary typography, icons, and deep contrast elements.
- **Surface-Dim:** `#F3F3F4` - Used for subtle section backgrounds and card containers.

### Brand Accents
- **Purple (Primary Action):** `#7C3AED` - The main call-to-action color (buttons, active states).
- **Blue (Info/Trust):** `#3B82F6` - Used for secondary highlights, delivery info, and specific tags.
- **Yellow (Attention):** `#FACC15` - Used for "View on Map" highlights and high-urgency notifications.

## 3. Typography
- **Primary Font:** `Hanken Grotesk` (Sans-serif)
- **Hierarchy:**
  - **Display/Headline:** Bold, Uppercase for hero sections (e.g., "UNFILTERED STYLE"). Tracking: -0.02em.
  - **Subheadings:** Medium weight, Sentence case for section titles.
  - **Body:** Regular weight for product descriptions and info text.
  - **Labels:** Bold, Uppercase for small UI elements like tags (e.g., "NEW", "BESTSELLER").

## 4. Spacing & Grid
- **Grid System:** 
  - Mobile: 2-column product grid.
  - Desktop: 4-column product grid.
- **Container Padding:** Standardized 1.5rem (24px) horizontal padding for mobile viewports.
- **Vertical Rhythm:** 2rem (32px) spacing between major sections.
- **Border Radius:** `ROUND_FOUR` (4px) for cards, buttons, and input fields to maintain a crisp, modern look.

## 5. UI Components
### Navigation
- **Header:** Sticky, minimalist logo on the left, horizontal scrollable category navigation in the center, and utility icons (search, profile, bag) on the right.
- **Category Bar:** Uses a subtle bottom border for active states (`border-b-2 border-purple-600`).

### Product Cards
- **Structure:** Full-width image container (aspect-ratio: 1/1) with floating labels (top-left).
- **Details:** Name and sub-category/series in small text, followed by price.
- **Action:** Circular or rounded square "Add to Cart" button (Purple background) positioned bottom-right.

### Buttons
- **Primary:** Purple background (`#7C3AED`), white text, bold, uppercase.
- **Secondary:** Transparent background with border, or dim surface background for "Favorite" actions.

## 6. Layout Patterns
- **Hero Sections:** Large lifestyle imagery with overlaid high-contrast typography and a clear CTA button.
- **Information Blocks:** Clean layouts with icon-based communication (e.g., shipping info, payment security).
- **Product Details:** Vertical split on desktop (Image left, info right); stacked on mobile with image carousel.

## 7. Responsive Guardrails
- **Mobile-First:** All styles are defined for mobile (360px-430px) and scaled up using Tailwind breakpoints.
- **Interactive States:** Subtle scale-down effects (`active:scale-95`) and color transitions on hover/tap.