/* global React, Nav, Footer, Wordmark, LogoMark, ImgPlaceholder, Btn, Eyebrow, Arrow, EXPERTISE, TEAM, STATS, CASE_STUDIES, TESTIMONIALS */
/*
  DIRECTION B — Dark premium, split hero with interactive diagram
  Vibe: Linear / Vercel meets enterprise. Deep ink background up top, brand orange as
  signal color. Hero has a live "capability map" visual on the right.
*/

const { useState: useStateB, useEffect: useEffectB } = React;

function DirectionB() {
  return (
    <div style={{ background: 'var(--paper)', color: 'var(--ink)', minHeight: '100%' }}>
      <div style={{ background: 'var(--ink)' }}>
        <Nav variant="dark" current="home" />
        <HeroB />
      </div>
      <MarqueeB />
      <PillarsB />
      <ExpertiseB />
      <ProcessB />
      <CaseStudiesB />
      <TeamB />
      <TestimonialB />
      <CTAB />
      <Footer dark />
    </div>
  );
}

function HeroB() {
  return (
    <section style={{ padding: '100px 40px 120px', color: '#fff', position: 'relative', overflow: 'hidden' }}>
      {/* subtle grid */}
      <div aria-hidden style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        backgroundImage: 'linear-gradient(rgba(255,255,255,.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.04) 1px, transparent 1px)',
        backgroundSize: '64px 64px',
        maskImage: 'radial-gradient(ellipse at 70% 40%, #000 40%, transparent 80%)',
      }}/>
      <div style={{ maxWidth: 1320, margin: '0 auto', position: 'relative' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center' }}>
          <div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 10, padding: '6px 14px', borderRadius: 999, border: '1px solid rgba(255,255,255,.18)', background: 'rgba(255,255,255,.03)', fontSize: 12, fontFamily: 'var(--font-mono)', letterSpacing: '.08em', textTransform: 'uppercase' }}>
              <span style={{ width: 6, height: 6, borderRadius: 999, background: 'var(--brand)' }}/>
              Enterprise capacity, delivered
            </div>
            <h1 style={{
              marginTop: 28, fontSize: 'clamp(52px, 6.2vw, 88px)', letterSpacing: '-0.035em',
              lineHeight: 1.02, fontWeight: 600,
            }}>
              Build the team<br/>
              your <span style={{ color: 'var(--brand)' }}>strategy</span> already<br/>
              assumes you have.
            </h1>
            <p style={{ marginTop: 28, fontSize: 18, lineHeight: 1.6, color: 'rgba(255,255,255,.7)', maxWidth: 520 }}>
              Role-specific training, curriculum design, and capability-building for corporate,
              government, and institutional teams. From assessment to post-delivery impact.
            </p>
            <div style={{ marginTop: 36, display: 'flex', gap: 12 }}>
              <Btn variant="primary" size="lg" arrow>Request a proposal</Btn>
              <Btn variant="ghostDark" size="lg">Our expertise →</Btn>
            </div>
            {/* tiny trust row */}
            <div style={{ marginTop: 56, display: 'flex', gap: 40, paddingTop: 24, borderTop: '1px solid rgba(255,255,255,.1)' }}>
              {[['500+','trained'],['6','expertise areas'],['98%','satisfaction']].map(([k,v]) => (
                <div key={v}>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: 28, fontWeight: 600 }}>{k}</div>
                  <div style={{ fontSize: 12, color: 'rgba(255,255,255,.6)', marginTop: 2 }}>{v}</div>
                </div>
              ))}
            </div>
          </div>
          {/* interactive capability map */}
          <CapabilityMap />
        </div>
      </div>
    </section>
  );
}

function CapabilityMap() {
  const [active, setActive] = useStateB(0);
  useEffectB(() => {
    const t = setInterval(() => setActive(a => (a + 1) % EXPERTISE.length), 2400);
    return () => clearInterval(t);
  }, []);
  return (
    <div style={{
      position: 'relative', background: 'rgba(255,255,255,.02)',
      border: '1px solid rgba(255,255,255,.1)', borderRadius: 'var(--r-xl)',
      padding: 32, aspectRatio: '1/1',
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24 }}>
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '.14em', textTransform: 'uppercase', color: 'rgba(255,255,255,.5)' }}>
          Capability Map
        </div>
        <div style={{ display: 'flex', gap: 6 }}>
          {EXPERTISE.map((_, i) => (
            <span key={i} style={{
              width: i === active ? 18 : 6, height: 6, borderRadius: 999,
              background: i === active ? 'var(--brand)' : 'rgba(255,255,255,.2)',
              transition: 'all .3s',
            }}/>
          ))}
        </div>
      </div>
      {/* central ring */}
      <div style={{ position: 'relative', height: 'calc(100% - 48px)', display: 'grid', placeItems: 'center' }}>
        <svg viewBox="0 0 400 400" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}>
          <defs>
            <radialGradient id="bglow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#f7941d" stopOpacity="0.25"/>
              <stop offset="100%" stopColor="#f7941d" stopOpacity="0"/>
            </radialGradient>
          </defs>
          <circle cx="200" cy="200" r="160" fill="url(#bglow)"/>
          <circle cx="200" cy="200" r="160" fill="none" stroke="rgba(255,255,255,.08)"/>
          <circle cx="200" cy="200" r="110" fill="none" stroke="rgba(255,255,255,.06)"/>
          <circle cx="200" cy="200" r="60" fill="none" stroke="rgba(255,255,255,.05)"/>
          {EXPERTISE.map((_, i) => {
            const a = (i / EXPERTISE.length) * Math.PI * 2 - Math.PI/2;
            const x = 200 + Math.cos(a) * 160;
            const y = 200 + Math.sin(a) * 160;
            const isActive = i === active;
            return (
              <g key={i}>
                <line x1="200" y1="200" x2={x} y2={y} stroke={isActive ? '#f7941d' : 'rgba(255,255,255,.08)'} strokeWidth={isActive ? 1.5 : 1}/>
                <circle cx={x} cy={y} r={isActive ? 8 : 5} fill={isActive ? '#f7941d' : 'rgba(255,255,255,.2)'} style={{ transition: 'all .3s' }}/>
              </g>
            );
          })}
          <circle cx="200" cy="200" r="24" fill="#f7941d"/>
          <text x="200" y="205" textAnchor="middle" fontFamily="var(--font-display)" fontSize="16" fontWeight="700" fill="#0a0a0a">DW</text>
        </svg>
        {/* active label */}
        <div style={{
          position: 'absolute', left: '50%', bottom: 0, transform: 'translateX(-50%)',
          background: 'rgba(255,255,255,.05)', border: '1px solid rgba(255,255,255,.1)',
          padding: '14px 18px', borderRadius: 12, width: '90%', backdropFilter: 'blur(8px)',
        }}>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '.14em', color: 'var(--brand)', textTransform: 'uppercase' }}>
            {EXPERTISE[active].n} / Core Expertise
          </div>
          <div style={{ marginTop: 4, fontSize: 15, fontWeight: 600 }}>{EXPERTISE[active].title}</div>
        </div>
      </div>
    </div>
  );
}

function MarqueeB() {
  const items = ['LEVENE ENERGY','EGBIN ENERGY','MINISTRY OF WORKS','TECHLAB NG','PARTNERS FOR GROWTH','OAK & LEDGER','NORTHWAVE','OCEAN BANK'];
  return (
    <section style={{ padding: '24px 0', borderBottom: '1px solid var(--border)', overflow: 'hidden' }}>
      <div style={{
        display: 'flex', gap: 80, whiteSpace: 'nowrap',
        animation: 'dwMarquee 40s linear infinite',
        fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 20, color: 'var(--ink-3)', opacity: .55, letterSpacing: '.05em',
      }}>
        {[...items, ...items, ...items].map((c, i) => (
          <span key={i} style={{ display: 'inline-flex', alignItems: 'center', gap: 80 }}>
            {c}<span style={{ width: 6, height: 6, borderRadius: 999, background: 'var(--brand)' }}/>
          </span>
        ))}
      </div>
      <style>{`@keyframes dwMarquee { from{transform:translateX(0)} to{transform:translateX(-33.33%)} }`}</style>
    </section>
  );
}

function PillarsB() {
  return (
    <section style={{ padding: '120px 40px' }}>
      <div style={{ maxWidth: 1320, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80 }}>
          <div>
            <Eyebrow>What we stand for</Eyebrow>
            <h2 style={{ marginTop: 14, fontSize: 'clamp(36px, 4.4vw, 56px)', letterSpacing: '-0.02em', fontWeight: 500, lineHeight: 1.1 }}>
              Not a training vendor. A capability partner.
            </h2>
          </div>
          <div style={{ display: 'grid', gap: 24 }}>
            {[
              ['Partnership','We work as a long-term partner, not a transactional provider.'],
              ['Practicality','Solutions that reflect industry context and operational maturity.'],
              ['Performance','Every engagement is measured, evaluated, and reported.'],
            ].map(([t,b], i) => (
              <div key={t} style={{
                display: 'grid', gridTemplateColumns: '60px 1fr', gap: 20, alignItems: 'start',
                paddingBottom: 24, borderBottom: i < 2 ? '1px solid var(--border)' : 'none',
              }}>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '.14em', color: 'var(--brand-dark)' }}>0{i+1}</div>
                <div>
                  <div style={{ fontSize: 22, fontWeight: 600, letterSpacing: '-.01em' }}>{t}</div>
                  <div style={{ marginTop: 8, color: 'var(--ink-3)', lineHeight: 1.6 }}>{b}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ExpertiseB() {
  const [hover, setHover] = useStateB(null);
  return (
    <section style={{ padding: '120px 40px', background: 'var(--paper-2)' }}>
      <div style={{ maxWidth: 1320, margin: '0 auto' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'end', marginBottom: 48 }}>
          <div>
            <Eyebrow>Core expertise</Eyebrow>
            <h2 style={{ marginTop: 14, fontSize: 'clamp(36px, 4.4vw, 56px)', letterSpacing: '-0.02em', fontWeight: 500 }}>
              Six capabilities. One engagement.
            </h2>
          </div>
          <Btn variant="ghost" arrow>All services</Btn>
        </div>
        <div style={{ borderTop: '1px solid var(--border-2)' }}>
          {EXPERTISE.map((e, i) => (
            <div key={e.n}
              onMouseEnter={() => setHover(i)} onMouseLeave={() => setHover(null)}
              style={{
                display: 'grid', gridTemplateColumns: '80px 1.5fr 2fr 80px', gap: 32, alignItems: 'center',
                padding: '28px 0', borderBottom: '1px solid var(--border-2)',
                background: hover === i ? 'var(--paper)' : 'transparent', transition: 'background .2s',
                cursor: 'pointer', margin: '0 -16px', padding: '28px 16px',
              }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 13, color: hover === i ? 'var(--brand-dark)' : 'var(--muted)' }}>{e.n}</div>
              <div style={{ fontSize: 22, fontWeight: 600, letterSpacing: '-.01em' }}>{e.title}</div>
              <div style={{ color: 'var(--ink-3)', lineHeight: 1.55, fontSize: 15 }}>{e.body}</div>
              <div style={{ textAlign: 'right', color: hover === i ? 'var(--brand-dark)' : 'var(--muted)', transition: 'color .2s' }}>
                <Arrow size={16}/>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProcessB() {
  const steps = [
    ['Discovery','We assess existing capability, map gaps, and identify organizational priorities.'],
    ['Design','Custom curriculum and delivery framework built around role, context, and objective.'],
    ['Deliver','Facilitated training, hands-on workshops, and executive sessions—on-site or hybrid.'],
    ['Measure','Structured evaluation, impact tracking, and reporting back to leadership.'],
  ];
  return (
    <section style={{ padding: '120px 40px' }}>
      <div style={{ maxWidth: 1320, margin: '0 auto' }}>
        <Eyebrow>How we work</Eyebrow>
        <h2 style={{ marginTop: 14, fontSize: 'clamp(36px, 4.4vw, 56px)', letterSpacing: '-0.02em', fontWeight: 500, maxWidth: 720 }}>
          From capability gap to measurable outcome.
        </h2>
        <div style={{ marginTop: 64, display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 24, position: 'relative' }}>
          {/* connector line */}
          <div style={{ position: 'absolute', top: 24, left: '10%', right: '10%', height: 1, background: 'var(--border-2)' }}/>
          {steps.map(([t,b], i) => (
            <div key={t} style={{ position: 'relative' }}>
              <div style={{
                width: 48, height: 48, borderRadius: 999, background: i === 0 ? 'var(--brand)' : 'var(--paper)',
                border: '1px solid var(--border-2)', display: 'grid', placeItems: 'center',
                fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 18,
                position: 'relative', zIndex: 1,
              }}>{i+1}</div>
              <div style={{ marginTop: 20, fontSize: 20, fontWeight: 600, letterSpacing: '-.01em' }}>{t}</div>
              <div style={{ marginTop: 8, color: 'var(--ink-3)', lineHeight: 1.55, fontSize: 14 }}>{b}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CaseStudiesB() {
  return (
    <section style={{ padding: '120px 40px', background: 'var(--ink)', color: '#fff' }}>
      <div style={{ maxWidth: 1320, margin: '0 auto' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'end', marginBottom: 48 }}>
          <div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '.16em', textTransform: 'uppercase', color: 'var(--brand)' }}>
              <span style={{ display: 'inline-block', width: 18, height: 1, background: 'var(--brand)', opacity: .6, marginRight: 8, verticalAlign: 'middle' }}/>
              Selected work
            </div>
            <h2 style={{ marginTop: 14, fontSize: 'clamp(36px, 4.4vw, 56px)', letterSpacing: '-0.02em', fontWeight: 500 }}>
              What measurable impact looks like.
            </h2>
          </div>
          <Btn variant="ghostDark" arrow>All case studies</Btn>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
          {CASE_STUDIES.map((c, i) => (
            <article key={c.client} style={{
              border: '1px solid rgba(255,255,255,.1)', borderRadius: 'var(--r-lg)',
              overflow: 'hidden', background: 'rgba(255,255,255,.03)',
            }}>
              <ImgPlaceholder label={`${c.client} — engagement`} ratio="16/9" tone="ink" rounded="0" />
              <div style={{ padding: 32 }}>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '.14em', textTransform: 'uppercase', color: 'rgba(255,255,255,.5)' }}>{c.client} · {c.tag}</div>
                <h3 style={{ marginTop: 12, fontSize: 26, fontWeight: 600 }}>{c.title}</h3>
                <p style={{ marginTop: 12, color: 'rgba(255,255,255,.7)', lineHeight: 1.6 }}>{c.body}</p>
                <div style={{ marginTop: 24, display: 'flex', alignItems: 'center', gap: 24 }}>
                  <div>
                    <div style={{ fontFamily: 'var(--font-display)', fontSize: 32, fontWeight: 600, color: 'var(--brand)' }}>{c.metric}</div>
                    <div style={{ fontSize: 12, color: 'rgba(255,255,255,.5)', marginTop: 2 }}>{c.metricLabel}</div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function TeamB() {
  return (
    <section style={{ padding: '120px 40px' }}>
      <div style={{ maxWidth: 1320, margin: '0 auto' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'end', marginBottom: 48 }}>
          <div>
            <Eyebrow>Meet the team</Eyebrow>
            <h2 style={{ marginTop: 14, fontSize: 'clamp(36px, 4.4vw, 56px)', letterSpacing: '-0.02em', fontWeight: 500, maxWidth: 680 }}>
              Practitioners first. Facilitators second.
            </h2>
          </div>
          <Btn variant="ghost" arrow>Full team</Btn>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 16 }}>
          {TEAM.map(m => (
            <div key={m.name} style={{ position: 'relative' }}>
              <ImgPlaceholder label={m.name} ratio="4/5" tone={m.tone}/>
              <div style={{ marginTop: 14 }}>
                <div style={{ fontSize: 15, fontWeight: 600, letterSpacing: '-.01em' }}>{m.name}</div>
                <div style={{ fontSize: 12, color: 'var(--muted)', marginTop: 2 }}>{m.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TestimonialB() {
  return (
    <section style={{ padding: '120px 40px', background: 'var(--paper-2)' }}>
      <div style={{ maxWidth: 1320, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
        {TESTIMONIALS.map((t, i) => (
          <div key={i} style={{
            background: 'var(--paper)', border: '1px solid var(--border)', borderRadius: 'var(--r-lg)',
            padding: 40,
          }}>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: 64, lineHeight: .6, color: 'var(--brand)', marginBottom: 8 }}>"</div>
            <p style={{ fontFamily: 'var(--font-display)', fontSize: 22, lineHeight: 1.4, fontWeight: 500, letterSpacing: '-.01em' }}>
              {t.quote}
            </p>
            <div style={{ marginTop: 24, paddingTop: 20, borderTop: '1px solid var(--border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <div style={{ fontSize: 14, fontWeight: 600 }}>{t.name}</div>
                <div style={{ fontSize: 12, color: 'var(--muted)' }}>{t.org}</div>
              </div>
              <div style={{ fontFamily: 'var(--font-display)', fontWeight: 600, letterSpacing: '.04em', color: 'var(--ink-3)', opacity: .6 }}>
                {t.org.toUpperCase().split(' ')[0]}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function CTAB() {
  return (
    <section style={{ padding: '120px 40px', background: 'var(--ink)', color: '#fff', textAlign: 'center' }}>
      <div style={{ maxWidth: 900, margin: '0 auto' }}>
        <Eyebrow color="var(--brand)">Start the conversation</Eyebrow>
        <h2 style={{ marginTop: 20, fontSize: 'clamp(44px, 5.5vw, 80px)', letterSpacing: '-0.03em', lineHeight: 1.05, fontWeight: 600 }}>
          Where should your<br/>
          team be <span style={{ color: 'var(--brand)' }}>twelve months</span> from now?
        </h2>
        <p style={{ marginTop: 24, color: 'rgba(255,255,255,.7)', fontSize: 18, maxWidth: 600, margin: '24px auto 0' }}>
          Tell us about the capability gap you want to close. We'll propose a structured path in 3 business days.
        </p>
        <div style={{ marginTop: 40, display: 'flex', gap: 12, justifyContent: 'center' }}>
          <Btn variant="primary" size="lg" arrow>Request a proposal</Btn>
          <Btn variant="ghostDark" size="lg">Book a discovery call</Btn>
        </div>
      </div>
    </section>
  );
}

window.DirectionB = DirectionB;
