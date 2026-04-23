import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
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
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 64)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close menu on route change
  useEffect(() => { setMenuOpen(false) }, [pathname])

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const isActive = (to: string) =>
    to === '/' ? pathname === '/' : pathname.startsWith(to)

  const showBg = !dark || scrolled || menuOpen

  return (
    <>
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
        <div className="max-w-container mx-auto px-6 lg:px-10 py-4 flex items-center justify-between">
          <Link to="/">
            <Wordmark inverse={dark} small />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-0.5">
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

          {/* Desktop CTAs */}
          <div className="hidden lg:flex items-center gap-[10px]">
            <Link to="/book-call">
              <Btn variant={dark ? 'ghostDark' : 'ghost'} size="sm">Book a call</Btn>
            </Link>
            <Link to="/get-proposal">
              <Btn variant="primary" size="sm" arrow>Get Proposal</Btn>
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(o => !o)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            className="lg:hidden w-10 h-10 flex flex-col justify-center items-center gap-[5px] rounded-full border transition-colors duration-200"
            style={{
              borderColor: dark ? 'rgba(255,255,255,0.15)' : '#e6e3dd',
              background: menuOpen ? (dark ? 'rgba(255,255,255,0.08)' : '#f0ece5') : 'transparent',
            }}
          >
            <span
              className="block w-5 h-px rounded-full transition-all duration-300 origin-center"
              style={{
                background: dark ? '#fff' : '#0a0a0a',
                transform: menuOpen ? 'translateY(3px) rotate(45deg)' : 'none',
              }}
            />
            <span
              className="block h-px rounded-full transition-all duration-300"
              style={{
                background: dark ? '#fff' : '#0a0a0a',
                width: menuOpen ? '0px' : '14px',
                opacity: menuOpen ? 0 : 1,
              }}
            />
            <span
              className="block w-5 h-px rounded-full transition-all duration-300 origin-center"
              style={{
                background: dark ? '#fff' : '#0a0a0a',
                transform: menuOpen ? 'translateY(-3px) rotate(-45deg)' : 'none',
              }}
            />
          </button>
        </div>
      </header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 bg-black/60 lg:hidden"
              onClick={() => setMenuOpen(false)}
            />

            {/* Drawer panel */}
            <motion.div
              key="drawer"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 28, stiffness: 280 }}
              className="fixed top-0 right-0 bottom-0 z-50 w-[80vw] max-w-[340px] flex flex-col lg:hidden"
              style={{
                background: dark ? '#0a0a0a' : '#faf9f7',
                borderLeft: dark ? '1px solid rgba(255,255,255,0.08)' : '1px solid #e6e3dd',
              }}
            >
              {/* Drawer header */}
              <div className="flex items-center justify-between px-6 py-4 border-b"
                style={{ borderColor: dark ? 'rgba(255,255,255,0.08)' : '#e6e3dd' }}
              >
                <Link to="/" onClick={() => setMenuOpen(false)}>
                  <Wordmark inverse={dark} small />
                </Link>
                <button
                  onClick={() => setMenuOpen(false)}
                  className="w-9 h-9 rounded-full grid place-items-center transition-colors"
                  style={{ background: dark ? 'rgba(255,255,255,0.06)' : '#f0ece5' }}
                  aria-label="Close menu"
                >
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M1 1l12 12M13 1L1 13" stroke={dark ? '#fff' : '#0a0a0a'} strokeWidth="1.8" strokeLinecap="round" />
                  </svg>
                </button>
              </div>

              {/* Nav links */}
              <nav className="flex-1 overflow-y-auto px-4 py-6 grid gap-1 content-start">
                {NAV_ITEMS.map((item, i) => {
                  const active = isActive(item.to)
                  return (
                    <motion.div
                      key={item.to}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0, transition: { delay: i * 0.05 + 0.1 } }}
                    >
                      <Link
                        to={item.to}
                        className="flex items-center justify-between px-4 py-4 rounded-xl transition-colors duration-150"
                        style={{
                          background: active
                            ? (dark ? 'rgba(247,148,29,0.1)' : 'rgba(247,148,29,0.08)')
                            : 'transparent',
                        }}
                      >
                        <span
                          className="text-[17px] font-medium"
                          style={{ color: active ? '#f7941d' : (dark ? 'rgba(255,255,255,0.85)' : '#0a0a0a') }}
                        >
                          {item.label}
                        </span>
                        {active && (
                          <span className="w-1.5 h-1.5 rounded-full bg-brand flex-shrink-0" />
                        )}
                      </Link>
                    </motion.div>
                  )
                })}
              </nav>

              {/* Bottom CTAs */}
              <div className="px-4 py-6 border-t grid gap-3"
                style={{ borderColor: dark ? 'rgba(255,255,255,0.08)' : '#e6e3dd' }}
              >
                <Link to="/book-call" className="block">
                  <Btn variant={dark ? 'ghostDark' : 'ghost'} size="lg" className="w-full justify-center">
                    Book a call
                  </Btn>
                </Link>
                <Link to="/get-proposal" className="block">
                  <Btn variant="primary" size="lg" arrow className="w-full justify-center">
                    Get Proposal
                  </Btn>
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
