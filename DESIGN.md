<!-- SEED: established with the user before implementation; re-run /impeccable document once there's code to capture the actual tokens and components. -->

# Design System: HATZ

## Overview

**Creative North Star: "The Bridge"**

HATZ's visual identity is rooted in bridge engineering — clean perpendicular geometry, structural stability, and the idea of connection across boundaries. The system is restrained and architectural: deep teal as the committed hue, warm copper as a deliberate accent, generous white space, and Montserrat's geometric precision with elevated letter spacing. Every element should feel engineered, not decorated. The incumbent PULSE layout structure is preserved as a functional scaffold but reclad entirely in HATZ's material language.

**Key Characteristics:**
- Architectural — right angles, structural lines, precise spacing
- Restrained — monochromatic base with one committed color and one accent
- Connected — elongated horizontal lines as visual anchors, cross-border motifs
- Professional — elevated tracking, clean hierarchy, minimal ornament

## Colors

Monochromatic palette anchored by Deep Teal with Warm Copper as the single accent. White background keeps the site airy and editorial.

### Primary
- **Deep Teal** (`#13544a` / rgb(19,84,74)): Primary brand color. Used for major surfaces (timeline bar, project bottom bar, sidebar), primary buttons, section backgrounds, scrollbar, and active interactive elements.

### Secondary
- **Warm Copper** (`#a87143`): Accent color. Used sparingly for gradient text partners (hero name, section titles), icon highlights, and small decorative elements. Its rarity is the point.

### Neutral
- **Dark Charcoal** (`#191919`): Body text, headings, and high-contrast UI text.
- **White** (`#ffffff`): Page background, card surfaces, social bar background.
- **Light Teal Tint** (rgb(240,248,246)): Subtle section background alternation, spinner background.
- **Medium Teal** (rgb(56,118,108)): Muted text on dark surfaces, hover states for nav labels.
- **Warm Light** (rgb(215,235,231)): Hero left background, timeline description row, skills/publications accordion content.

### Named Rules
**The Copper Accent Rule.** Warm Copper appears on no more than ~10% of any given viewport. It exists to draw attention to the most important elements (hero name, section kickers) and loses its power when overused.

## Typography

**Display Font:** Montserrat (with system-ui and sans-serif fallback)
**Body Font:** Montserrat (inherited)

**Character:** Geometric, modern, authoritative. Montserrat's clean sans-serif forms mirror the architectural precision of the brand. Generous letter spacing (tracking) on uppercase text evokes luxury, stability, and administrative efficiency.

### Hierarchy
- **Display** (300 weight, clamp(48px,10vw,100px), line-height 1): Hero name only. Uses the teal-to-copper gradient.
- **Headline** (300/700 weight, clamp(28px,4vw,48px), line-height 1.25): Section main titles. Light weight for "ABOUT" / heavy weight for "HATZ" pairing.
- **Title** (400 weight, clamp(22px,3vw,30px), line-height 1.25): About pillar headings, project card titles, timeline titles.
- **Body** (300 weight, clamp(15px,1.5vw,17px), line-height 2): Paragraph text. Max line length ~65ch.
- **Label** (400 weight, 13px, 2px letter-spacing, uppercase): Navigation labels, button text, metadata, tags.

## Layout

The layout follows the PULSE reference structure: fixed sidebar navigation (vertical on desktop, horizontal on mobile), social bar below sidebar, main content area with background grid lines (7-column). Max content width 1140px. The layout is preserved exactly — only visual tokens change.

### Spacing Rhythm
- Tight groups (8-16px within components)
- Generous separation (30-50px between sections)
- More space above headings than below them

## Elevation & Depth

No shadows on surfaces — the system is flat. Depth is conveyed through color layering (white cards on light teal sections, teal timeline on white page). The only shadow is the subtle box-shadow on the social bar (0 1px 3px rgba(0,0,0,.08)).

## Shapes

All corners are 0 (square/right angles) — reinforcing the architectural, structural grid language. The sole exceptions are the skill bar track (3px border-radius) and the pulsing status dot (circle). Buttons, cards, inputs, and containers all use square corners.

## Components

### Buttons
- **Shape:** Square corners (0px border-radius)
- **Primary:** Deep Teal background, white text, 12px font, 2px letter-spacing, uppercase, 50px height, 2rem horizontal padding
- **Hover:** Darker teal (d2) background
- **Ghost/Text:** None — only primary button style exists

### Navigation (Sidebar)
- **Shape:** Square. Vertical labels on desktop, horizontal on mobile.
- **Style:** Deep teal (d3) background, white uppercase labels with 2px spacing
- **Hover:** Label shifts to medium teal (b2)
- **Active:** White label

### Timeline Items
- **Track:** Deep teal background (primary)
- **Slider row:** Dark teal (d3) background
- **Items:** White text, clickable, active item at full opacity
- **Description row:** Warm light (b3) background
- **Nav buttons:** Dark teal (d1) with white arrow icons

### Project Cards
- **Card:** Background image with dark gradient overlay, white text
- **Progress/detail bar:** Deep teal (primary) background
- **Thumbnail overlay:** Dark gradient (d5) with white text
- **Bottom bar:** Dark teal (d3) background

### Inputs
- **Shape:** Square corners, 1px solid #e5e7eb border, 50px height
- **Focus:** Deep Teal border
- **Background:** White

## Do's and Don'ts

### Do:
- **Do** use Deep Teal as the dominant color across major surfaces
- **Do** reserve Warm Copper for gradient headlines and minimal accent moments
- **Do** use Montserrat with generous letter spacing on all uppercase text
- **Do** keep corners square (0 radius) to reinforce the structural grid
- **Do** maintain the 7-column background grid line pattern

### Don't:
- **Don't** use rounded corners on buttons, cards, or containers
- **Don't** use shadows for depth — rely on color layering
- **Don't** overuse Warm Copper — it is an accent, not a secondary surface color
- **Don't** use the PULSE green (#127B66) or navy (#212A4D) anywhere
- **Don't** add glass, blur, gradient text outside hero titles, or decorative animations
