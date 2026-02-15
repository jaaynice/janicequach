# Visual System

systematic design tokens extracted from index.html

## Type Scale

```css
--text-xl:   2.5rem    /* h1 */
--text-lg:   1.3rem    /* h2 */
--text-base: 1rem      /* body, p */
--text-sm:   1.1rem    /* tagline */
--text-xs:   0.9rem    /* footer */
```

Weight: 500 (medium) for headings, default for body.
Casing: lowercase enforced on h1, h2.
Line height: 1.7 (body).

## Color System

### Neutrals
```css
--neutral-900: #1a1a1a   /* primary text */
--neutral-800: #2a2a2a   /* h2 */
--neutral-600: #444      /* body text */
--neutral-500: #666      /* tagline */
--neutral-400: #999      /* list markers, footer */
--neutral-200: #ddd      /* borders */
--neutral-50:  #fafafa   /* background */
--white:       #ffffff   /* card backgrounds */
```

### Accent
```css
--accent:      #0066cc   /* links, interactive */
```

## Spacing Scale

```css
--space-xs:  0.5rem
--space-sm:  0.75rem
--space-md:  1rem
--space-lg:  1.5rem
--space-xl:  2rem
--space-2xl: 3rem
--space-3xl: 4rem
```

**Applied:**
- Section margin-bottom: 3rem
- Header margin-bottom: 3rem
- Paragraph margin-bottom: 1rem
- Page padding: 2rem 1rem

## Layout

```css
--container-max: 680px   /* main content */
--prose-max:     580px   /* intro text for readability */
```

## Components

### Principle Card
- Background: white
- Border-left: 3px solid #333
- Padding: 1.5rem
- Margin: 1.5rem 0

### Link States
- Default: #0066cc, no underline
- Hover: border-bottom 1px solid #0066cc
- Transition: border-color 0.2s

### List Markers
- Prefix: "→ " (arrow + space)
- Color: #999
- Margin-right: 0.5rem

## Breakpoints

```css
@media (max-width: 600px) {
  h1: 2rem (from 2.5rem)
  .contact: flex-direction column, gap 1rem
}
```

## Font Stack

```css
-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif
```

System fonts — no web fonts, zero load overhead.

## Principles Applied

- **Clarity over cleverness**: system fonts, no decorative complexity
- **Structure creates speed**: tokenized values, not magic numbers
- **Quality reflects intent**: deliberate spacing, readable line-height (1.7)

## Usage

When extending the site:
1. Use tokens, not raw values
2. Maintain 8px spacing grid (0.5rem increments)
3. Keep type scale (don't add arbitrary sizes)
4. Neutral palette only — accent sparingly
5. Lowercase headings (reflects casual voice)

## What's Missing (Intentional)

- No icons (add only if necessary)
- No animations (fast > fancy)
- No hero images (copy-first)
- No color variations (neutrals + single accent)
- No dark mode (ship first, add later if requested)

---

Extracted: 2026-02-15 | From: index.html (c4c03c58)
