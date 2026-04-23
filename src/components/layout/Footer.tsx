import { Link } from 'react-router-dom'
import { Wordmark } from '../ui/Logo'

const EXPLORE_LINKS = [
  { label: 'Home',          to: '/' },
  { label: 'About',         to: '/about' },
  { label: 'Core Expertise',to: '/expertise' },
  { label: 'Team',          to: '/team' },
  { label: 'Case Studies',  to: '/case-studies' },
]

const SERVICES = [
  'Corporate Training',
  'Workforce Assessment',
  'Curriculum Design',
  'Leadership Programs',
  'CSR Implementation',
]

const SOCIALS = ['Li', 'Ig', 'Fb', 'X']

interface FooterProps {
  dark?: boolean
}

export function Footer({ dark = true }: FooterProps) {
  return (
    <footer
      className="px-10 pt-[72px] pb-8"
      style={{ background: dark ? '#0a0a0a' : '#fafaf7', color: dark ? '#fff' : '#0a0a0a' }}
    >
      <div className="max-w-container mx-auto">
        <div className="grid grid-cols-[1.4fr_1fr_1fr_1fr] gap-[60px] mb-[60px]">
          {/* Brand column */}
          <div>
            <Wordmark inverse={dark} />
            <p
              className="mt-5 text-[14px] leading-[1.6] max-w-[320px]"
              style={{ color: dark ? 'rgba(255,255,255,.55)' : '#6b6b6b' }}
            >
              A trusted partner for organizations navigating digital transformation through
              structured, practical, and impact-driven capacity building.
            </p>
            <div className="mt-6 flex gap-2">
              {SOCIALS.map(s => (
                <a
                  key={s}
                  href="#"
                  className="w-9 h-9 rounded-full grid place-items-center text-[11px] font-mono transition-opacity hover:opacity-100"
                  style={{
                    border: `1px solid ${dark ? 'rgba(255,255,255,.1)' : '#e6e3dd'}`,
                    color: dark ? 'rgba(255,255,255,.55)' : '#6b6b6b',
                  }}
                >
                  {s}
                </a>
              ))}
            </div>
          </div>

          {/* Explore */}
          <FooterCol title="Explore" dark={dark}>
            {EXPLORE_LINKS.map(l => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  className="text-[14px] opacity-85 hover:opacity-100 transition-opacity"
                  style={{ color: dark ? '#fff' : '#0a0a0a' }}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </FooterCol>

          {/* Services */}
          <FooterCol title="Services" dark={dark}>
            {SERVICES.map(s => (
              <li key={s}>
                <span
                  className="text-[14px] opacity-85"
                  style={{ color: dark ? '#fff' : '#0a0a0a' }}
                >
                  {s}
                </span>
              </li>
            ))}
          </FooterCol>

          {/* Contact */}
          <div>
            <div
              className="font-mono text-[11px] tracking-[0.14em] uppercase mb-4"
              style={{ color: dark ? 'rgba(255,255,255,.55)' : '#6b6b6b' }}
            >
              Contact
            </div>
            <ul className="list-none p-0 m-0 grid gap-[10px] text-[14px]">
              <li style={{ color: dark ? '#fff' : '#0a0a0a' }}>corporate@digitalworldtech.academy</li>
              <li style={{ color: dark ? '#fff' : '#0a0a0a' }}>+234 808 196 4962</li>
              <li style={{ color: dark ? 'rgba(255,255,255,.55)' : '#6b6b6b' }}>digitalworldtech.academy/corporate</li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="pt-6 flex justify-between items-center text-[12px] font-mono tracking-[0.02em]"
          style={{
            borderTop: `1px solid ${dark ? 'rgba(255,255,255,.1)' : '#e6e3dd'}`,
            color: dark ? 'rgba(255,255,255,.55)' : '#6b6b6b',
          }}
        >
          <span>© 2026 Digital World Corporate. All rights reserved.</span>
          <span>ENTERPRISE-READY · CAPACITY-LED · OUTCOME-DRIVEN</span>
        </div>
      </div>
    </footer>
  )
}

function FooterCol({
  title,
  dark,
  children,
}: {
  title: string
  dark: boolean
  children: React.ReactNode
}) {
  return (
    <div>
      <div
        className="font-mono text-[11px] tracking-[0.14em] uppercase mb-4"
        style={{ color: dark ? 'rgba(255,255,255,.55)' : '#6b6b6b' }}
      >
        {title}
      </div>
      <ul className="list-none p-0 m-0 grid gap-[10px]">{children}</ul>
    </div>
  )
}
