/* global React */
// Shared: Nav, Footer, ImgPlaceholder, Logo, utility atoms

const { useState, useEffect, useRef } = React;

/* ── Logo ───────────────────────────────────────────── */
function LogoMark({ size = 28, inverse = false }) {
  // Compact mark from the logo: "DW" in display type, with brand orange on the W
  const fg = inverse ? '#fff' : 'var(--ink)';
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'baseline', gap: 0,
      fontFamily: 'var(--font-display)', fontWeight: 700,
      fontSize: size, lineHeight: 1, letterSpacing: '-0.04em', color: fg,
    }}>
      D<span style={{ color: 'var(--brand)' }}>W</span>
    </span>
  );
}

function Wordmark({ inverse = false, small = false }) {
  const fg = inverse ? '#fff' : 'var(--ink)';
  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', gap: 10 }}>
      <LogoMark size={small ? 22 : 28} inverse={inverse} />
      <span style={{
        display: 'flex', flexDirection: 'column', lineHeight: 1, gap: 2,
      }}>
        <span style={{
          fontFamily: 'var(--font-display)', fontWeight: 600,
          fontSize: small ? 14 : 16, letterSpacing: '-0.01em', color: fg,
        }}>Digital World</span>
        <span style={{
          fontFamily: 'var(--font-mono)', fontWeight: 500,
          fontSize: small ? 9 : 10, letterSpacing: '0.12em', textTransform: 'uppercase',
          color: 'var(--brand)',
        }}>Corporate</span>
      </span>
    </span>
  );
}

/* ── Image placeholder ─────────────────────────────── */
// Tasteful neutral block with subtle grain + a label. User replaces later.
function ImgPlaceholder({ label, ratio = '4/3', tone = 'warm', className = '', style = {}, rounded = 'var(--r-md)' }) {
  const tones = {
    warm:    { bg: '#f0ece5', fg: '#8a7e6b', dot: '#c9bfaa' },
    cool:    { bg: '#e8ecef', fg: '#6d7a84', dot: '#b7c2cb' },
    ink:     { bg: '#1a1a1a', fg: '#8a8a8a', dot: '#3a3a3a' },
    brand:   { bg: '#fef3e3', fg: '#b26a08', dot: '#f7c87a' },
    paper:   { bg: '#fafaf7', fg: '#9a9a9a', dot: '#dcd8d0' },
  };
  const t = tones[tone] || tones.warm;
  return (
    <div className={className} style={{
      position: 'relative', aspectRatio: ratio, width: '100%',
      background: t.bg, color: t.fg, borderRadius: rounded, overflow: 'hidden',
      backgroundImage: `radial-gradient(${t.dot} 1px, transparent 1px)`,
      backgroundSize: '20px 20px',
      ...style,
    }}>
      <div style={{
        position: 'absolute', inset: 0,
        display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
        padding: '14px 16px',
      }}>
        <div style={{
          fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.12em',
          textTransform: 'uppercase', opacity: 0.7,
        }}>Image ▢</div>
        <div style={{
          fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.02em',
          opacity: 0.85,
        }}>{label}</div>
      </div>
    </div>
  );
}

/* ── Buttons ───────────────────────────────────────── */
function Btn({ children, variant = 'primary', size = 'md', arrow = false, ...rest }) {
  const sizes = {
    sm: { padding: '8px 14px', fontSize: 13, height: 34 },
    md: { padding: '12px 20px', fontSize: 14, height: 44 },
    lg: { padding: '16px 26px', fontSize: 15, height: 54 },
  };
  const variants = {
    primary:  { background: 'var(--brand)', color: 'var(--ink)', border: '1px solid var(--brand)' },
    ink:      { background: 'var(--ink)', color: '#fff', border: '1px solid var(--ink)' },
    ghost:    { background: 'transparent', color: 'var(--ink)', border: '1px solid var(--border-2)' },
    ghostDark:{ background: 'transparent', color: '#fff', border: '1px solid rgba(255,255,255,.25)' },
    link:     { background: 'transparent', color: 'var(--ink)', border: 0, padding: 0, height: 'auto' },
  };
  return (
    <button {...rest} style={{
      display: 'inline-flex', alignItems: 'center', gap: 10,
      fontFamily: 'var(--font-sans)', fontWeight: 500,
      borderRadius: 999, whiteSpace: 'nowrap',
      transition: 'transform .15s ease, background .2s',
      ...sizes[size], ...variants[variant], ...(rest.style || {}),
    }}>
      {children}
      {arrow && <Arrow />}
    </button>
  );
}

function Arrow({ size = 14 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" aria-hidden>
      <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

/* ── Section label / eyebrow ───────────────────────── */
function Eyebrow({ children, color = 'var(--brand-dark)' }) {
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', gap: 8,
      fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.16em',
      textTransform: 'uppercase', color,
    }}>
      <span style={{ width: 18, height: 1, background: color, opacity: .6 }}/>
      {children}
    </span>
  );
}

/* ── Nav ───────────────────────────────────────────── */
function Nav({ variant = 'light', current = 'home' }) {
  const items = [
    { id: 'home', label: 'Home', href: 'Home.html' },
    { id: 'about', label: 'About', href: 'About.html' },
    { id: 'expertise', label: 'Expertise', href: 'Expertise.html' },
    { id: 'team', label: 'Team', href: 'Team.html' },
    { id: 'case-studies', label: 'Case Studies', href: 'Case Studies.html' },
  ];
  const dark = variant === 'dark';
  const fg = dark ? '#fff' : 'var(--ink)';
  const border = dark ? 'rgba(255,255,255,.1)' : 'var(--border)';
  return (
    <header style={{
      position: 'sticky', top: 0, zIndex: 50,
      background: dark ? 'rgba(10,10,10,.72)' : 'rgba(255,255,255,.82)',
      backdropFilter: 'saturate(160%) blur(14px)',
      WebkitBackdropFilter: 'saturate(160%) blur(14px)',
      borderBottom: `1px solid ${border}`,
    }}>
      <div style={{
        maxWidth: 1320, margin: '0 auto', padding: '16px 40px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      }}>
        <Wordmark inverse={dark} small />
        <nav style={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          {items.map(i => (
            <a key={i.id} href={i.href} style={{
              padding: '8px 14px', fontSize: 14, color: fg,
              fontWeight: current === i.id ? 600 : 500,
              opacity: current === i.id ? 1 : 0.72,
              borderRadius: 999,
              background: current === i.id ? (dark ? 'rgba(255,255,255,.08)' : 'var(--paper-3)') : 'transparent',
            }}>{i.label}</a>
          ))}
        </nav>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <Btn variant={dark ? 'ghostDark' : 'ghost'} size="sm">Book a call</Btn>
          <Btn variant="primary" size="sm" arrow>Get Proposal</Btn>
        </div>
      </div>
    </header>
  );
}

/* ── Footer ────────────────────────────────────────── */
function Footer({ dark = true }) {
  const bg = dark ? 'var(--ink)' : 'var(--paper-2)';
  const fg = dark ? '#fff' : 'var(--ink)';
  const mute = dark ? 'rgba(255,255,255,.55)' : 'var(--muted)';
  const border = dark ? 'rgba(255,255,255,.1)' : 'var(--border)';
  return (
    <footer style={{ background: bg, color: fg, padding: '72px 40px 32px' }}>
      <div style={{ maxWidth: 1320, margin: '0 auto' }}>
        <div style={{
          display: 'grid', gridTemplateColumns: '1.4fr 1fr 1fr 1fr', gap: 60, marginBottom: 60,
        }}>
          <div>
            <Wordmark inverse={dark} />
            <p style={{ marginTop: 20, color: mute, maxWidth: 320, fontSize: 14, lineHeight: 1.6 }}>
              A trusted partner for organizations navigating digital transformation through structured, practical, and impact-driven capacity building.
            </p>
            <div style={{ marginTop: 24, display: 'flex', gap: 8 }}>
              {['Li','Ig','Fb','X'].map(s => (
                <a key={s} href="#" style={{
                  width: 36, height: 36, borderRadius: 999, border: `1px solid ${border}`,
                  display: 'grid', placeItems: 'center', fontSize: 11, fontFamily: 'var(--font-mono)',
                  color: mute,
                }}>{s}</a>
              ))}
            </div>
          </div>
          <FooterCol title="Explore" items={['Home','About','Core Expertise','Team','Case Studies']} mute={mute} fg={fg} />
          <FooterCol title="Services" items={['Corporate Training','Workforce Assessment','Curriculum Design','Leadership Programs','CSR Implementation']} mute={mute} fg={fg} />
          <div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '.14em', textTransform: 'uppercase', color: mute, marginBottom: 16 }}>Contact</div>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: 10, fontSize: 14 }}>
              <li style={{ color: fg }}>corporate@digitalworldtech.academy</li>
              <li style={{ color: fg }}>+234 808 196 4962</li>
              <li style={{ color: mute }}>digitalworldtech.academy/corporate</li>
            </ul>
          </div>
        </div>
        <div style={{
          borderTop: `1px solid ${border}`, paddingTop: 24,
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          fontSize: 12, color: mute, fontFamily: 'var(--font-mono)', letterSpacing: '.02em',
        }}>
          <span>© 2026 Digital World Corporate. All rights reserved.</span>
          <span>ENTERPRISE-READY · CAPACITY-LED · OUTCOME-DRIVEN</span>
        </div>
      </div>
    </footer>
  );
}
function FooterCol({ title, items, mute, fg }) {
  return (
    <div>
      <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '.14em', textTransform: 'uppercase', color: mute, marginBottom: 16 }}>{title}</div>
      <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: 10, fontSize: 14 }}>
        {items.map(i => <li key={i}><a href="#" style={{ color: fg, opacity: .85 }}>{i}</a></li>)}
      </ul>
    </div>
  );
}

/* ── Data shared across directions ─────────────────── */
const EXPERTISE = [
  { n: '01', title: 'Corporate Training & Staff Development', body: 'Customized training programs that enhance digital, analytical, and operational capability across teams.' },
  { n: '02', title: 'Workforce Capability & Needs Assessment', body: 'Structured assessments that evaluate workforce skill, identify gaps, and determine readiness for transformation.' },
  { n: '03', title: 'Customized Curriculum & Learning Design', body: 'Tailored learning frameworks based on organizational context, role requirements, and strategic objectives.' },
  { n: '04', title: 'Post-Training Support, Evaluation & Reporting', body: 'Structured evaluation, impact tracking, and reporting to measure effectiveness and return on learning investment.' },
  { n: '05', title: 'Leadership & Management Programs', body: 'Executive development focused on strategic leadership, digital readiness, and performance optimization.' },
  { n: '06', title: 'CSR Strategy & Implementation', body: 'Design, structure, and execute impactful CSR initiatives aligned with corporate value and stakeholder expectation.' },
];

const TEAM = [
  {
    name: 'Alex Uwodi', role: 'Growth Head', tone: 'warm', initials: 'AU',
    bio: "As our Growth Head, Alex is the driving force behind our market expansion. He leverages deep expertise in growth marketing to build high-impact sales strategies and scale customer acquisition. Alex doesn't just deliver results; he empowers our entire team by training staff to master online visibility and navigate the complexities of digital development.",
    expertise: ['Growth Marketing', 'Digital Strategy', 'Team Training & Development'],
    quote: 'All the customers you need are already online; you just need the right strategy to find them.',
    off: "When he isn't scaling brands, Alex is likely enjoying the outdoors or sharpening his focus over a game of table tennis.",
  },
  {
    name: 'Akeem Abiodun', role: 'Head of Academics', tone: 'cool', initials: 'AA',
    bio: 'Akeem oversees the architectural design of our learning programs. With a focus on pedagogical excellence, he ensures that our curriculum remains at the cutting edge of industry standards — transforming complex technical concepts into structured, high-impact learning paths.',
    expertise: ['Curriculum Development', 'Academic Leadership', 'Educational Strategy & Mentorship'],
    quote: 'True education is not just the learning of facts, but the training of the mind to think critically and innovate.',
    off: "When he isn't shaping the minds of the future, Akeem is a passionate chess player and a dedicated collector of historical biographies.",
  },
  {
    name: 'Nwanga Kingsley', role: 'Head of Finance', tone: 'paper', initials: 'NK',
    bio: "As Head of Finance, Kingsley is the steward of our organization's fiscal health and long-term sustainability. He brings a meticulous approach to financial planning, risk management, and strategic investment, translating data into decisions that keep the company lean, profitable, and ready for growth.",
    expertise: ['Financial Planning & Analysis', 'Risk Management', 'Strategic Resource Allocation'],
    quote: 'Financial integrity and strategic foresight are the pillars upon which every successful enterprise is built.',
    off: 'Outside the boardroom, Kingsley enjoys the discipline of long-distance cycling and has a keen interest in urban photography.',
  },
  {
    name: 'Jimoh Babajide', role: 'Corporate Team Lead', tone: 'warm', initials: 'JB',
    bio: 'Babajide provides the vision and oversight necessary to steer our most significant initiatives. He excels at aligning departmental goals with high-level corporate objectives, ensuring every project is delivered with excellence — defined by team synergy and a focus on sustainable results for corporate partners.',
    expertise: ['Corporate Leadership & Oversight', 'Strategic Project Management', 'Cross-Functional Team Synergy'],
    quote: 'Great leadership is about providing the vision and the tools for others to succeed.',
    off: 'A true sports enthusiast, Babajide finds his inspiration in the strategy and teamwork of the soccer pitch, rarely missing a major match.',
  },
  {
    name: 'Somade Temiloluwa', role: 'Business Development Manager', tone: 'brand', initials: 'ST',
    bio: 'Temiloluwa is the architect of our strategic partnerships and market growth. She specializes in identifying high-value opportunities and building long-term relationships that drive revenue — blending market intelligence with a client-first approach to keep business solutions aligned with evolving needs.',
    expertise: ['Strategic Partnership Building', 'Market Expansion & Analysis', 'Relationship Management'],
    quote: 'Success in business is found at the intersection of curiosity, strategic planning, and consistent value delivery.',
    off: 'A woman of many interests — a skilled keyboardist who also enjoys new destinations, a good book, or offering a critical eye to the latest cinema.',
  },
];

const STATS = [
  { k: '500+', v: 'Professionals trained' },
  { k: '6', v: 'Core expertise areas' },
  { k: '12+', v: 'Enterprise engagements' },
  { k: '98%', v: 'Satisfaction rate' },
];

const CASE_STUDIES = [
  {
    client: 'Levene Energy',
    tag: 'Training Program',
    title: 'Business Insights & Reporting Training',
    body: 'Enabled operational and management teams to transform raw data into decisions that matter. Within three months, reporting accuracy improved and strategic alignment sharpened.',
    metric: '3 months',
    metricLabel: 'to measurable impact',
  },
  {
    client: 'Egbin Energy',
    tag: 'CSR Initiative',
    title: 'Tech to Rural — youth capacity program',
    body: 'A full curriculum of ICT, Graphics, Cybersecurity, Web, Digital Marketing and Data Analysis for rural youth, with mentorship and project-based learning.',
    metric: '6 tracks',
    metricLabel: 'delivered end-to-end',
  },
];

const TESTIMONIALS = [
  {
    quote: 'The Digital World Corporate team delivered an exceptional training program that enabled our operations team to extract actionable insights from data and improve daily decision-making.',
    name: 'Operations Manager',
    org: 'Levene Energy',
  },
  {
    quote: 'Partnering with Digital World Corporate for our CSR initiative was a game-changer. Their tech program empowered local youth and strengthened our community engagement efforts.',
    name: 'CSR Lead',
    org: 'Egbin Energy',
  },
];

/* Export to window for cross-file access */
Object.assign(window, {
  LogoMark, Wordmark, ImgPlaceholder, Btn, Arrow, Eyebrow,
  Nav, Footer,
  EXPERTISE, TEAM, STATS, CASE_STUDIES, TESTIMONIALS,
});
