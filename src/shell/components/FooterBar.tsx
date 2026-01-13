import type { NavigationItem } from './AppShell'

export interface FooterBarProps {
  items: NavigationItem[]
  onNavigate?: (href: string) => void
}

export function FooterBar({ items, onNavigate }: FooterBarProps) {
  return (
    <footer className="sticky bottom-0 z-10 bg-neutral-50/80 dark:bg-neutral-950/80 backdrop-blur-sm border-t border-neutral-200 dark:border-neutral-800">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center gap-2 h-16">
          {items.map((item) => (
            <button
              key={item.href}
              onClick={() => onNavigate?.(item.href)}
              className={`
                flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors
                ${
                  item.isActive
                    ? 'bg-teal-500 text-white'
                    : 'text-neutral-600 dark:text-neutral-400 hover:bg-neutral-200 dark:hover:bg-neutral-800 hover:text-neutral-900 dark:hover:text-neutral-100'
                }
              `}
            >
              {item.icon}
              <span>{item.label}</span>
            </button>
          ))}
        </div>
      </div>
    </footer>
  )
}
