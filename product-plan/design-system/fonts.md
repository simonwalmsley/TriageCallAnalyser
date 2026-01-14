# Typography Configuration

## Font Choices

| Role | Font | Usage |
|------|------|-------|
| **Heading** | Inter | Page titles, section headings, card titles |
| **Body** | Inter | Paragraphs, descriptions, form labels |
| **Mono** | JetBrains Mono | Code snippets, timestamps, technical data |

## Google Fonts Import

Add to your HTML `<head>`:

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">
```

Or in CSS:

```css
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap');
```

## Font Stack

```css
:root {
  --font-heading: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  --font-body: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  --font-mono: 'JetBrains Mono', 'SF Mono', 'Fira Code', monospace;
}
```

## Tailwind Configuration

In your CSS with Tailwind v4:

```css
@theme {
  --font-sans: 'Inter', sans-serif;
  --font-mono: 'JetBrains Mono', monospace;
}
```

## Font Weight Usage

| Weight | Class | Usage |
|--------|-------|-------|
| 400 | `font-normal` | Body text, descriptions |
| 500 | `font-medium` | Form labels, button text, emphasis |
| 600 | `font-semibold` | Card titles, section headings |
| 700 | `font-bold` | Page titles, brand name |

## Typography Scale

The UI uses Tailwind's default text sizing:

| Element | Class | Size |
|---------|-------|------|
| Page title | `text-2xl sm:text-3xl` | 24px / 30px |
| Section heading | `text-xl` | 20px |
| Card title | `text-lg` | 18px |
| Body text | `text-base` | 16px |
| Small text | `text-sm` | 14px |
| Micro text | `text-xs` | 12px |
