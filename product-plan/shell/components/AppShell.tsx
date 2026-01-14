import { Header } from './Header'
import { FooterBar } from './FooterBar'

export interface NavigationItem {
  label: string
  href: string
  icon?: React.ReactNode
  isActive?: boolean
}

export interface AppShellProps {
  children: React.ReactNode
  user?: {
    name: string
    email?: string
    avatarUrl?: string
  }
  footerItems?: NavigationItem[]
  showFooter?: boolean
  onNavigate?: (href: string) => void
  onLogout?: () => void
  onLogoClick?: () => void
}

export function AppShell({
  children,
  user,
  footerItems = [],
  showFooter = true,
  onNavigate,
  onLogout,
  onLogoClick,
}: AppShellProps) {
  return (
    <div className="min-h-screen flex flex-col bg-neutral-50 dark:bg-neutral-950 font-['Inter',sans-serif]">
      <Header
        user={user}
        onLogout={onLogout}
        onLogoClick={onLogoClick}
      />

      <main className="flex-1 overflow-auto">
        <div className="max-w-3xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
          {children}
        </div>
      </main>

      {showFooter && footerItems.length > 0 && (
        <FooterBar
          items={footerItems}
          onNavigate={onNavigate}
        />
      )}
    </div>
  )
}
