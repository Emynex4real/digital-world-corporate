/* global React, Nav, Footer, Wordmark, LogoMark, ImgPlaceholder, Btn, Eyebrow, Arrow, EXPERTISE, TEAM, STATS, CASE_STUDIES, TESTIMONIALS */
/*
  DIRECTION A — Editorial Corporate
  Vibe: Accenture / IBM meets a modern magazine. Asymmetric hero with oversized display
  wordmark, left-aligned statement, quietly confident. Orange used as accent only.
*/

function DirectionA() {
  return (
    <div style={{ background: 'var(--paper)', color: 'var(--ink)', minHeight: '100%' }}>
      <Nav variant="light" current="home" />
      <HeroA />
      <LogosA />
      <StatementA />
      <ExpertiseA />
      <StatsA />
      <CaseStudiesA />
      <TeamTeaseA />
      <TestimonialA />
      <CTABandA />
      <Footer dark />
    </div>
  );
}

/* HERO — editorial, asymmetric */
function HeroA() {
  return (
    <section style={{ padding: '72px 40px 96px', borderBottom: '1px solid var(--border)' }}>
      <div style={{ maxWidth: 1320, margin: '0 auto' }}>
        <div style={{
          display: 'grid', gridTemplateColumns: '1.25fr 1fr', gap: 64, alignItems: 'center',
        }}>
          <div>
            <Eyebrow>Digital capacity, built for enterprise</Eyebrow>
            <h1 style={{
              fontSize: 'clamp(52px, 6.4vw, 96px)', letterSpacing: '-0.035em',
              marginTop: 24, fontWeight: 600,
            }}>
              Technology capability<br/>
              is a <span style={{ fontStyle: 'italic', fontFamily: 'var(--font-display)', fontWeight: 500 }}>business</span> advantage<span style={{ color: 'var(--brand)' }}>.</span><br/>
              not a support function.
            </h1>
            <p style={{
              marginTop: 32, maxWidth: 540, fontSize: 18, lineHeight: 1.55, color: 'var(--ink-3)',
            }}>
              Digital World Corporate equips organizations with the structured, practical, and
              measurable capability needed to translate technology investment into real business
              performance.
            </p>
            <div style={{ marginTop: 36, display: 'flex', gap: 12 }}>
              <Btn variant="ink" size="lg" arrow>Get a training proposal</Btn>
              <Btn variant="ghost" size="lg">Explore our expertise</Btn>
            </div>
          </div>
          <HeroCapabilityMap/>
        </div>
        {/* sub hero meta */}
        <div style={{
          marginTop: 80, paddingTop: 24, borderTop: '1px solid var(--border)',
          display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 40,
        }}>
          {[
            ['Corporate teams','From exec leadership to operational staff'],
            ['Government & NGO','Capacity programs aligned to mandate'],
            ['Institutions','Digital maturity, role by role'],
            ['Development partners','Impact-driven delivery & reporting'],
          ].map(([t,b]) => (
            <div key={t}>
              <div style={{ fontSize: 13, fontWeight: 600, letterSpacing: '.01em' }}>{t}</div>
              <div style={{ marginTop: 6, fontSize: 13, color: 'var(--muted)', lineHeight: 1.5 }}>{b}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* Animated capability map — quiet orbit */
function HeroCapabilityMap() {
  const [active, setActive] = React.useState(0);
  React.useEffect(() => {
    const t = setInterval(() => setActive(a => (a + 1) % EXPERTISE.length), 2600);
    return () => clearInterval(t);
  }, []);
  return (
    <div style={{
      position: 'relative', background: 'var(--paper-2)',
      border: '1px solid var(--border)', borderRadius: 'var(--r-xl)',
      padding: 28, aspectRatio: '1/1', maxWidth: 520, marginLeft: 'auto',
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '.14em', textTransform: 'uppercase', color: 'var(--muted)' }}>
          Capability Map
        </div>
        <div style={{ display: 'flex', gap: 6 }}>
          {EXPERTISE.map((_, i) => (
            <span key={i} style={{
              width: i === active ? 18 : 6, height: 6, borderRadius: 999,
              background: i === active ? 'var(--brand)' : 'var(--border-2)',
              transition: 'all .3s',
            }}/>
          ))}
        </div>
      </div>
      <div style={{ position: 'relative', height: 'calc(100% - 40px)' }}>
        <svg viewBox="0 0 400 400" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}>
          <defs>
            <radialGradient id="heroGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#f7941d" stopOpacity="0.15"/>
              <stop offset="100%" stopColor="#f7941d" stopOpacity="0"/>
            </radialGradient>
          </defs>
          <circle cx="200" cy="200" r="170" fill="url(#heroGlow)"/>
          <circle cx="200" cy="200" r="160" fill="none" stroke="var(--border-2)" strokeDasharray="2 4"/>
          <circle cx="200" cy="200" r="110" fill="none" stroke="var(--border)"/>
          <circle cx="200" cy="200" r="60" fill="none" stroke="var(--border)"/>
          {EXPERTISE.map((_, i) => {
            const a = (i / EXPERTISE.length) * Math.PI * 2 - Math.PI/2;
            const x = 200 + Math.cos(a) * 160;
            const y = 200 + Math.sin(a) * 160;
            const isA = i === active;
            return (
              <g key={i}>
                <line x1="200" y1="200" x2={x} y2={y} stroke={isA ? '#f7941d' : 'var(--border-2)'} strokeWidth={isA ? 1.5 : 1} opacity={isA ? 1 : .5}/>
                <circle cx={x} cy={y} r={isA ? 9 : 5} fill={isA ? '#f7941d' : 'var(--border-2)'} style={{ transition: 'all .3s' }}/>
              </g>
            );
          })}
          <circle cx="200" cy="200" r="28" fill="var(--ink)"/>
          <text x="200" y="207" textAnchor="middle" fontFamily="var(--font-display)" fontSize="18" fontWeight="700" fill="#fff">D<tspan fill="#f7941d">W</tspan></text>
        </svg>
        <div style={{
          position: 'absolute', left: 0, right: 0, bottom: 0,
          background: 'var(--paper)', border: '1px solid var(--border)',
          padding: '12px 16px', borderRadius: 12,
        }}>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '.14em', color: 'var(--brand-dark)', textTransform: 'uppercase' }}>
            {EXPERTISE[active].n} · Core Expertise
          </div>
          <div style={{ marginTop: 4, fontSize: 14, fontWeight: 600, letterSpacing: '-.01em' }}>{EXPERTISE[active].title}</div>
        </div>
      </div>
    </div>
  );
}

/* LOGO strip */
function LogosA() {
  const clients = ['LEVENE ENERGY','EGBIN ENERGY','MINISTRY OF WORKS','TECHLAB NG','PARTNERS FOR GROWTH','OAK & LEDGER'];
  return (
    <section style={{ padding: '40px 40px', borderBottom: '1px solid var(--border)' }}>
      <div style={{ maxWidth: 1320, margin: '0 auto', display: 'flex', alignItems: 'center', gap: 40 }}>
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '.16em', textTransform: 'uppercase', color: 'var(--muted)', whiteSpace: 'nowrap' }}>
          Trusted by
        </div>
        <div style={{ display: 'flex', gap: 48, flex: 1, justifyContent: 'space-between', flexWrap: 'wrap' }}>
          {clients.map(c => (
            <div key={c} style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 18, letterSpacing: '.04em', color: 'var(--ink-3)', opacity: .55 }}>{c}</div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* Statement section */
function StatementA() {
  return (
    <section style={{ padding: '120px 40px', background: 'var(--paper-2)' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <Eyebrow>Why we exist</Eyebrow>
        <h2 style={{
          marginTop: 20, fontSize: 'clamp(36px, 4.4vw, 56px)', letterSpacing: '-0.02em',
          fontWeight: 500, lineHeight: 1.12,
        }}>
          Organizations adopt new systems faster than their teams can use them. We close the
          gap between <span style={{ color: 'var(--brand-dark)' }}>business objective</span> and
          <span style={{ color: 'var(--brand-dark)' }}> digital execution</span>—with role-specific training that actually lands.
        </h2>
        <div style={{
          marginTop: 56, display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 40,
        }}>
          {[
            ['Relevance','Every engagement is designed around client objectives, not templates.'],
            ['Accountability','Assessment, evaluation and reporting are built into delivery.'],
            ['Outcome','Learning translates into measurable performance improvement.'],
          ].map(([t,b]) => (
            <div key={t} style={{ paddingTop: 24, borderTop: '1px solid var(--border-2)' }}>
              <div style={{ fontSize: 20, fontWeight: 600, letterSpacing: '-.01em' }}>{t}</div>
              <div style={{ marginTop: 10, color: 'var(--ink-3)', lineHeight: 1.6 }}>{b}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* Expertise grid */
function ExpertiseA() {
  return (
    <section style={{ padding: '120px 40px' }}>
      <div style={{ maxWidth: 1320, margin: '0 auto' }}>
        <div style={{ display: 'flex', alignItems: 'end', justifyContent: 'space-between', marginBottom: 56 }}>
          <div>
            <Eyebrow>Our core expertise</Eyebrow>
            <h2 style={{ marginTop: 14, fontSize: 'clamp(32px, 3.8vw, 48px)', letterSpacing: '-0.02em', fontWeight: 500, maxWidth: 600 }}>
              Six disciplines, designed to work together.
            </h2>
          </div>
          <Btn variant="ghost" arrow>See all services</Btn>
        </div>
        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 0,
          border: '1px solid var(--border)', borderRadius: 'var(--r-lg)', overflow: 'hidden',
        }}>
          {EXPERTISE.map((e, i) => (
            <div key={e.n} style={{
              padding: 32, background: 'var(--paper)',
              borderRight: (i % 3 !== 2) ? '1px solid var(--border)' : 'none',
              borderBottom: (i < 3) ? '1px solid var(--border)' : 'none',
              display: 'flex', flexDirection: 'column', gap: 24, minHeight: 280,
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--brand-dark)', letterSpacing: '.1em' }}>{e.n}</span>
                <Arrow />
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 22, letterSpacing: '-.01em', lineHeight: 1.2 }}>{e.title}</div>
                <div style={{ marginTop: 12, color: 'var(--muted)', fontSize: 14, lineHeight: 1.6 }}>{e.body}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* Stats band */
function StatsA() {
  return (
    <section style={{ padding: '96px 40px', background: 'var(--ink)', color: '#fff' }}>
      <div style={{ maxWidth: 1320, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 40 }}>
          {STATS.map(s => (
            <div key={s.v} style={{ paddingTop: 20, borderTop: '1px solid rgba(255,255,255,.15)' }}>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: 72, fontWeight: 500, letterSpacing: '-.03em', lineHeight: 1 }}>
                {s.k.match(/\d+/) ? (
                  <><span>{s.k.replace(/[^\d]/g,'')}</span><span style={{ color: 'var(--brand)' }}>{s.k.replace(/[\d]/g,'')}</span></>
                ) : s.k}
              </div>
              <div style={{ marginTop: 16, color: 'rgba(255,255,255,.7)', fontSize: 14 }}>{s.v}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* Case studies */
function CaseStudiesA() {
  return (
    <section style={{ padding: '120px 40px' }}>
      <div style={{ maxWidth: 1320, margin: '0 auto' }}>
        <div style={{ display: 'flex', alignItems: 'end', justifyContent: 'space-between', marginBottom: 56 }}>
          <div>
            <Eyebrow>Selected work</Eyebrow>
            <h2 style={{ marginTop: 14, fontSize: 'clamp(32px, 3.8vw, 48px)', letterSpacing: '-0.02em', fontWeight: 500 }}>
              Engagements that moved the needle.
            </h2>
          </div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
          {CASE_STUDIES.map((c, i) => (
            <article key={c.client} style={{
              border: '1px solid var(--border)', borderRadius: 'var(--r-lg)', overflow: 'hidden',
              background: 'var(--paper)', display: 'flex', flexDirection: 'column',
            }}>
              <ImgPlaceholder label={`${c.client} — engagement photography`} ratio="16/10" tone={i === 0 ? 'cool' : 'brand'} rounded="0" />
              <div style={{ padding: 28 }}>
                <div style={{ display: 'flex', gap: 10, alignItems: 'center', fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--muted)' }}>
                  <span>{c.client}</span>
                  <span style={{ width: 3, height: 3, borderRadius: 999, background: 'var(--muted)' }}/>
                  <span>{c.tag}</span>
                </div>
                <h3 style={{ marginTop: 12, fontSize: 26, fontWeight: 600, letterSpacing: '-.01em' }}>{c.title}</h3>
                <p style={{ marginTop: 12, color: 'var(--ink-3)', lineHeight: 1.6 }}>{c.body}</p>
                <div style={{ marginTop: 24, paddingTop: 20, borderTop: '1px solid var(--border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div>
                    <div style={{ fontFamily: 'var(--font-display)', fontSize: 28, fontWeight: 600, color: 'var(--brand-dark)' }}>{c.metric}</div>
                    <div style={{ fontSize: 12, color: 'var(--muted)', marginTop: 2 }}>{c.metricLabel}</div>
                  </div>
                  <Btn variant="ghost" size="sm" arrow>Read case study</Btn>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* Team tease */
function TeamTeaseA() {
  return (
    <section style={{ padding: '120px 40px', background: 'var(--paper-2)' }}>
      <div style={{ maxWidth: 1320, margin: '0 auto' }}>
        <div style={{ display: 'flex', alignItems: 'end', justifyContent: 'space-between', marginBottom: 48 }}>
          <div>
            <Eyebrow>Meet the team</Eyebrow>
            <h2 style={{ marginTop: 14, fontSize: 'clamp(32px, 3.8vw, 48px)', letterSpacing: '-0.02em', fontWeight: 500, maxWidth: 640 }}>
              Senior practitioners who have done the work.
            </h2>
          </div>
          <Btn variant="ghost" arrow>Meet the full team</Btn>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 16 }}>
          {TEAM.map(m => (
            <div key={m.name}>
              <ImgPlaceholder label={m.name} ratio="3/4" tone={m.tone} />
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

/* Testimonial */
function TestimonialA() {
  return (
    <section style={{ padding: '120px 40px' }}>
      <div style={{ maxWidth: 960, margin: '0 auto', textAlign: 'left' }}>
        <div style={{ fontFamily: 'var(--font-display)', fontSize: 120, lineHeight: 1, color: 'var(--brand)', marginBottom: -20 }}>"</div>
        <blockquote style={{
          fontFamily: 'var(--font-display)', fontSize: 'clamp(28px, 3.4vw, 42px)',
          letterSpacing: '-0.02em', lineHeight: 1.25, fontWeight: 500, margin: 0,
        }}>
          {TESTIMONIALS[0].quote}
        </blockquote>
        <div style={{ marginTop: 32, display: 'flex', alignItems: 'center', gap: 16 }}>
          <div style={{ width: 48, height: 48, borderRadius: 999, background: 'var(--paper-3)', display: 'grid', placeItems: 'center', fontWeight: 600 }}>
            OM
          </div>
          <div>
            <div style={{ fontWeight: 600, fontSize: 15 }}>{TESTIMONIALS[0].name}</div>
            <div style={{ color: 'var(--muted)', fontSize: 13 }}>{TESTIMONIALS[0].org}</div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* CTA band */
function CTABandA() {
  return (
    <section style={{ padding: '40px' }}>
      <div style={{
        maxWidth: 1320, margin: '0 auto', padding: '80px 72px',
        background: 'var(--brand)', borderRadius: 'var(--r-xl)',
        display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 60, alignItems: 'center',
      }}>
        <h2 style={{ fontSize: 'clamp(36px, 4.5vw, 56px)', letterSpacing: '-0.02em', fontWeight: 500, lineHeight: 1.1 }}>
          Ready to move from intent to execution?
        </h2>
        <div>
          <p style={{ color: 'var(--ink-2)', fontSize: 16, lineHeight: 1.6, maxWidth: 420 }}>
            Tell us about the capability gap you want to close. We'll propose a structured path in 3 business days.
          </p>
          <div style={{ marginTop: 24, display: 'flex', gap: 12 }}>
            <Btn variant="ink" size="lg" arrow>Book a discovery call</Btn>
            <Btn variant="ghost" size="lg">Download capability deck</Btn>
          </div>
        </div>
      </div>
    </section>
  );
}

window.DirectionA = DirectionA;
