import { AppShell } from './components'
import { BarChart3, History, PlusCircle } from 'lucide-react'

export default function ShellPreview() {
  const footerItems = [
    {
      label: 'Scorecard',
      href: '/scorecard',
      icon: <BarChart3 className="w-4 h-4" />,
      isActive: false,
    },
    {
      label: 'History',
      href: '/history',
      icon: <History className="w-4 h-4" />,
      isActive: false,
    },
    {
      label: 'New Analysis',
      href: '/new',
      icon: <PlusCircle className="w-4 h-4" />,
      isActive: true,
    },
  ]

  const user = {
    name: 'Alex Morgan',
    email: 'alex.morgan@example.com',
  }

  return (
    <AppShell
      footerItems={footerItems}
      user={user}
      onNavigate={(href) => console.log('Navigate to:', href)}
      onLogout={() => console.log('Logout')}
      onLogoClick={() => console.log('Logo clicked')}
    >
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-semibold text-neutral-900 dark:text-neutral-100">
            Content Area
          </h1>
          <p className="mt-2 text-neutral-600 dark:text-neutral-400">
            Section content will render here. This is a preview of the application shell with header and footer navigation.
          </p>
        </div>

        <div className="p-6 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900">
          <p className="text-sm text-neutral-500 dark:text-neutral-400">
            The shell provides:
          </p>
          <ul className="mt-3 space-y-2 text-sm text-neutral-700 dark:text-neutral-300">
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-teal-500" />
              Header with logo and user menu
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-teal-500" />
              Footer bar with Scorecard, History, and New Analysis buttons
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-teal-500" />
              Centered content area (max-width 768px)
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-teal-500" />
              Light and dark mode support
            </li>
          </ul>
        </div>
      </div>
    </AppShell>
  )
}
