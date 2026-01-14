# Application Shell

## Overview

TriageCall Analyser uses a minimal, ChatGPT-inspired shell with a clean header and persistent footer bar. The design prioritizes the content while providing easy access to key actions.

## Components

- `AppShell.tsx` — Main layout wrapper that combines header, content area, and footer
- `Header.tsx` — Sticky header with logo and user menu
- `FooterBar.tsx` — Sticky footer with navigation buttons
- `UserMenu.tsx` — Dropdown menu with user info and logout

## Navigation Structure

The shell provides navigation via the footer bar:

| Button | Destination | Description |
|--------|-------------|-------------|
| Scorecard | `/scorecard` | View 9-competency scoring |
| History | `/history` | Browse past analyses |
| New | `/` | Start new analysis |

## Usage

```tsx
import { AppShell } from './components/AppShell'

function App() {
  const user = { name: 'Jane Doe', email: 'jane@example.com' }

  const footerItems = [
    { label: 'Scorecard', href: '/scorecard', isActive: false },
    { label: 'History', href: '/history', isActive: false },
    { label: 'New', href: '/', isActive: true },
  ]

  return (
    <AppShell
      user={user}
      footerItems={footerItems}
      onNavigate={(href) => router.push(href)}
      onLogout={() => signOut()}
      onLogoClick={() => router.push('/')}
    >
      <YourPageContent />
    </AppShell>
  )
}
```

## Props

### AppShellProps

| Prop | Type | Description |
|------|------|-------------|
| `children` | `ReactNode` | Page content |
| `user` | `{ name, email?, avatarUrl? }` | Current user (shows user menu) |
| `footerItems` | `NavigationItem[]` | Footer navigation buttons |
| `showFooter` | `boolean` | Whether to show footer (default: true) |
| `onNavigate` | `(href: string) => void` | Called when footer nav clicked |
| `onLogout` | `() => void` | Called when logout clicked |
| `onLogoClick` | `() => void` | Called when logo clicked |

## Design Notes

- Uses teal as primary accent
- Neutral gray palette for backgrounds and text
- Inter font for all UI text
- Dark mode supported via `dark:` variants
- Header and footer use backdrop blur for depth
- Maximum content width of 768px (max-w-3xl)

## Shell-Enabled Sections

These sections render inside the shell:
- Analysis Results
- Scorecard
- History

These sections render standalone (no shell):
- Authentication
- Call Input
