'use client'

import Link from 'next/link'
import ThemeToggle from './ThemeToggle'

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/70 transition-colors duration-300">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-2xl font-extrabold text-accent dark:text-accent-dark transition-colors duration-300">
            MiniBlog
          </span>
        </Link>

        <div className="flex items-center gap-6">
          <Link href="/" className="text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-accent dark:hover:text-accent-dark transition-colors duration-300">
            Главная
          </Link>
          <Link href="/about" className="text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-accent dark:hover:text-accent-dark transition-colors duration-300">
            О проекте
          </Link>
          <Link href="/profile" className="text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-accent dark:hover:text-accent-dark transition-colors duration-300">
            Профиль
          </Link>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  )
}
