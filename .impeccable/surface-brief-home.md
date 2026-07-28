# Surface Brief: HATZ Website

## 1. Job and Audience

Two equal audiences arrive at hatz.com: (a) global brand executives evaluating emerging-market entry, in an exploratory/research state of mind, and (b) Syrian/regional local stakeholders assessing HATZ's network and credibility. **Mode: Persuade + Experience** — the site's own craft must demonstrate HATZ's quality while convincing both audiences to act.

## 2. Outcome and Proof

The visitor must walk away trusting HATZ's bridge-building capability. Success = they request a conversation (contact form). Proof = the site itself demonstrates architectural integrity, precision, and the cross-border connectivity concept through its own design.

## 3. Selected Direction

**Bridge Engineering** — the brand's own visual concept, pinned by the identity PDF. Deep Teal `#13544a` as committed primary, Warm Copper `#a87143` as accent, Dark Charcoal `#191919` for body text, White `#ffffff` background. Montserrat throughout with generous letter spacing. Clean perpendicular geometry, anchored by the elongated horizontal stroke motif. The incumbent PULSE layout (sidebar nav, scroll timeline, project slider) is preserved as a functional scaffold but wears the HATZ brand entirely.

## 4. Scope and Boundaries

- **Full site rebrand** — all pages and components (Home, About, Insights, contact popup, spinner, social bar, navigation)
- **Fidelity**: Production-ready — all states, full content
- **Untouched**: Layout structure, scroll behavior, timeline/project slider interaction — these match the reference site and must remain functional
- **Anti-goals**: No new pages, no layout restructuring, no replacing the PULSE interaction model

## 5. States and Ranges

- Loading: branded spinner with "HATZ — Cross-Border Connectivity"
- Hover: all interactive elements (nav links, buttons, social icons, timeline items, project cards)
- Focus: keyboard focus states on all interactive controls
- Error: form validation on contact popup
- Success: form submission feedback
- Empty: blog and publications with no entries (graceful empty state)
- Responsive: single-column mobile, multi-column tablet/desktop

## 6. Interaction and Layout

- **Navigation**: Vertical sidebar (desktop) / horizontal top bar (mobile) with HATZ logo icon at top
- **Hero**: Split layout — left: brand copy, right: background image; gradient text for the HATZ name using teal-to-copper
- **About**: Scroll-triggered moving text overlay on desktop; three pillar cards (Connectivity, Integrity, Expansion)
- **Timeline**: Horizontal scroll with prev/next buttons, active item detail below
- **Projects**: Auto-advancing slider with progress bar, hover pause, thumbnail preview
- **Skills**: Accordion with progress bars
- **Contact**: Slide-in panel from right with form

## 7. Constraints and Open Decisions

- **Platform**: Web — React 19 + TypeScript + Vite 6
- **Framework**: No design system library — plain CSS custom properties
- **Content**: User has real partner names, data points, and photos ready to replace placeholder imagery
- **Font**: Montserrat (Google Fonts) — English + Arabic weights loaded in index.html
- **Icons**: Inline SVGs throughout
- **Open**: Exact hero background image, partner logos, team photos — user to provide real assets
