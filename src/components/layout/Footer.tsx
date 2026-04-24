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
  const muted = dark ? 'rgba(255,255,255,.45)' : '#6b6b6b'
  const text  = dark ? '#fff' : '#0a0a0a'
  const border = dark ? 'rgba(255,255,255,.08)' : '#e6e3dd'

  return (
    <footer
      className="px-6 lg:px-10 pt-14 lg:pt-[72px] pb-8"
      style={{ background: dark ? '#0a0a0a' : '#fafaf7', color: text }}
    >
      <div className="max-w-container mx-auto">

        {/* Top section — brand full width on mobile, 4-col on desktop */}
        <div className="grid grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr] gap-10 lg:gap-[60px] mb-10 lg:mb-[60px]">

          {/* Brand column — full width on mobile */}
          <div className="col-span-2 lg:col-span-1">
            <Wordmark inverse={dark} />
            <p className="mt-4 text-[14px] leading-[1.65] max-w-[340px]" style={{ color: muted }}>
              A trusted partner for organizations navigating digital transformation through
              structured, practical, and impact-driven capacity building.
            </p>
            <div className="mt-5 flex gap-2">
              {SOCIALS.map(s => (
                <a key={s} href="#"
                  className="w-9 h-9 rounded-full grid place-items-center text-[11px] font-mono transition-opacity hover:opacity-100"
                  style={{ border: `1px solid ${border}`, color: muted }}
                >
                  {s}
                </a>
              ))}
            </div>
          </div>

          {/* Explore */}
          <FooterCol title="Explore" muted={muted} text={text}>
            {EXPLORE_LINKS.map(l => (
              <li key={l.to}>
                <Link to={l.to}
                  className="text-[14px] transition-opacity hover:opacity-100"
                  style={{ color: text, opacity: 0.8 }}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </FooterCol>

          {/* Services */}
          <FooterCol title="Services" muted={muted} text={text}>
            {SERVICES.map(s => (
              <li key={s}>
                <span className="text-[14px]" style={{ color: text, opacity: 0.8 }}>{s}</span>
              </li>
            ))}
          </FooterCol>

          {/* Contact — full width on mobile */}
          <div className="col-span-2 lg:col-span-1">
            <div className="font-mono text-[11px] tracking-[0.14em] uppercase mb-4" style={{ color: muted }}>
              Contact
            </div>
            <ul className="list-none p-0 m-0 grid gap-[10px] text-[14px]">
              <li style={{ color: text, wordBreak: 'break-all' }}>corporate@digitalworldtech.academy</li>
              <li style={{ color: text }}>+234 808 196 4962</li>
              <li style={{ color: muted }}>digitalworldtech.academy/corporate</li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="pt-6 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 text-[11px] lg:text-[12px] font-mono tracking-[0.02em]"
          style={{ borderTop: `1px solid ${border}`, color: muted }}
        >
          <span>© 2026 Digital World Corporate. All rights reserved.</span>
          <span className="tracking-[0.06em] text-[10px]">ENTERPRISE-READY · CAPACITY-LED · OUTCOME-DRIVEN</span>
        </div>
      </div>
    </footer>
  )
}

function FooterCol({
  title, muted, text, children,
}: {
  title: string
  muted: string
  text: string
  children: React.ReactNode
}) {
  return (
    <div>
      <div className="font-mono text-[11px] tracking-[0.14em] uppercase mb-4" style={{ color: muted }}>
        {title}
      </div>
      <ul className="list-none p-0 m-0 grid gap-[10px]">{children}</ul>
    </div>
  )
}
