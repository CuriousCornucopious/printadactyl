import type { Metadata } from 'next'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Printadactyl - Your ideas, printed.',
  description: 'The print-on-demand marketplace where designers post jobs and makers compete with bids.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen bg-background">
          {/* Header */}
          <header className="border-b border-surface">
            <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
              <a href="/" className="text-2xl font-bold text-primary">
                🦕 Printadactyl
              </a>
              <nav className="flex items-center gap-6">
                <a href="/jobs" className="hover:text-primary transition-colors">
                  Browse Jobs
                </a>
                <a href="/post-job" className="hover:text-primary transition-colors">
                  Post a Job
                </a>
                <a href="/dashboard" className="hover:text-primary transition-colors">
                  Dashboard
                </a>
                <a
                  href="/login"
                  className="px-4 py-2 bg-primary text-background font-semibold rounded-lg hover:opacity-90 transition-opacity"
                >
                  Login
                </a>
              </nav>
            </div>
          </header>

          {/* Main content */}
          <main>{children}</main>

          {/* Footer */}
          <footer className="border-t border-surface mt-20">
            <div className="max-w-6xl mx-auto px-4 py-8 text-center text-gray-400">
              <p>© 2026 Printadactyl. Your ideas, printed.</p>
            </div>
          </footer>
        </div>
      </body>
    </html>
  )
}
