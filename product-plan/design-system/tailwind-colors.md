# Tailwind Color Configuration

## Color Choices

| Role | Color | Usage |
|------|-------|-------|
| **Primary** | `teal` | Buttons, links, key accents, active states |
| **Secondary** | `emerald` | Success states, positive indicators, highlights |
| **Neutral** | `neutral` | Backgrounds, text, borders, cards |

## Usage Examples

### Primary (Teal)

```html
<!-- Primary button -->
<button class="bg-teal-600 hover:bg-teal-700 dark:bg-teal-500 dark:hover:bg-teal-600 text-white">
  Start Analysis
</button>

<!-- Primary link -->
<a class="text-teal-600 dark:text-teal-400 hover:text-teal-700 dark:hover:text-teal-300">
  View Details
</a>

<!-- Active state -->
<div class="border-teal-500 bg-teal-50 dark:bg-teal-950/50">
  Active item
</div>
```

### Secondary (Emerald)

```html
<!-- Success badge -->
<span class="bg-emerald-100 dark:bg-emerald-950/50 text-emerald-700 dark:text-emerald-400">
  Passed
</span>

<!-- Success message -->
<div class="bg-emerald-50 dark:bg-emerald-950/50 border-emerald-200 dark:border-emerald-800">
  Success!
</div>

<!-- High score indicator -->
<span class="text-emerald-600 dark:text-emerald-400">84%</span>
```

### Neutral

```html
<!-- Card background -->
<div class="bg-white dark:bg-neutral-900 border-neutral-200 dark:border-neutral-800">
  Card content
</div>

<!-- Body text -->
<p class="text-neutral-600 dark:text-neutral-400">
  Description text
</p>

<!-- Muted text -->
<span class="text-neutral-500 dark:text-neutral-500">
  Timestamp
</span>

<!-- Page background -->
<div class="bg-neutral-50 dark:bg-neutral-950">
  Page content
</div>
```

## Score Color Coding

Use these colors to indicate score levels:

| Score Range | Color | Class |
|-------------|-------|-------|
| 80%+ | Emerald | `text-emerald-600 dark:text-emerald-400` |
| 60-79% | Teal | `text-teal-600 dark:text-teal-400` |
| 40-59% | Amber | `text-amber-600 dark:text-amber-400` |
| Below 40% | Red | `text-red-600 dark:text-red-400` |

## Dark Mode

All colors support dark mode via the `dark:` variant. The UI automatically adapts based on system preference or manual toggle.

Key dark mode patterns:
- Backgrounds: `dark:bg-neutral-950` or `dark:bg-neutral-900`
- Cards: `dark:bg-neutral-900` with `dark:border-neutral-800`
- Text: `dark:text-white` for headings, `dark:text-neutral-400` for body
- Backdrop blur: `dark:bg-neutral-950/80` for translucent headers/footers
