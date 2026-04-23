import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { cn } from '../../lib/cn'
import { Wordmark } from '../ui/Logo'
import { Btn } from '../ui/Btn'

const NAV_ITEMS = [
  { label: 'Home',         to: '/' },
  { label: 'About',        to: '/about' },
  { label: 'Expertise',    to: '/expertise' },
  { label: 'Team',         to: '/team' },
  { label: 'Case Studies', to: '/case-studies' },
]

interface NavProps {
  variant?: 'light' | 'dark'
}

export function Nav({ variant = 'light' }: NavProps) {
  const { pathname } = useLocation()
  const dark = variant === 'dark'
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 64)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const isActive = (to: string) =>
    to === '/' ? pathname === '/' : pathname.startsWith(to)

  const showBg = !dark || scrolled

  return (
    <header
      className={cn(
        'fixed top-0 inset-x-0 z-50 transition-all duration-300',
        showBg
          ? cn('backdrop-blur-[14px] backdrop-saturate-[160%]',
              dark
                ? 'bg-[rgba(10,10,10,.76)] border-b border-white/10'
                : 'bg-[rgba(255,255,255,.88)] border-b border-line')
          : 'bg-transparent border-b border-transparent',
      )}
    >
      <div className="max-w-container mx-auto px-10 py-4 flex items-center justify-between">
        <Link to="/">
          <Wordmark inverse={dark} small />
        </Link>

        <nav className="flex items-center gap-0.5">
          {NAV_ITEMS.map(item => {
            const active = isActive(item.to)
            return (
              <Link
                key={item.to}
                to={item.to}
                className={cn(
                  'px-[14px] py-2 text-[14px] rounded-full transition-colors duration-200',
                  dark
                    ? active
                      ? 'text-white font-semibold bg-white/[0.08]'
                      : 'text-white/70 font-medium hover:text-white'
                    : active
                    ? 'text-ink font-semibold bg-paper-3'
                    : 'text-ink/70 font-medium hover:text-ink',
                )}
              >
                {item.label}
              </Link>
            )
          })}
        </nav>

        <div className="flex items-center gap-[10px]">
          <Link to="/book-call">
            <Btn variant={dark ? 'ghostDark' : 'ghost'} size="sm">Book a call</Btn>
          </Link>
          <Link to="/get-proposal">
            <Btn variant="primary" size="sm" arrow>Get Proposal</Btn>
          </Link>
        </div>
      </div>
    </header>
  )
}
