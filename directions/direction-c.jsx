/* global React, Nav, Footer, Wordmark, ImgPlaceholder, Btn, Eyebrow, Arrow, EXPERTISE, TEAM, STATS, CASE_STUDIES, TESTIMONIALS */
/*
  DIRECTION C — Bold statement, warm paper
  Vibe: Stripe × NYT. Huge editorial display type on warm paper. Orange is the narrative
  voice — used as punctuation, underlines, marks. Feels premium, human, quietly expensive.
*/

function DirectionC() {
  return (
    <div style={{ background: 'var(--paper-2)', color: 'var(--ink)', minHeight: '100%' }}>
      <Nav variant="light" current="home" />
      <HeroC />
      <LedeC />
      <ExpertiseC />
      <NumbersC />
      <CaseStudiesC />
      <TeamC />
      <ManifestoC />
      <FooterCTAC />
      <Footer dark={false} />
    </div>
  );
}

function HeroC() {
  return (
    <section style={{ padding: '64px 40px 96px', position: 'relative' }}>
      <div style={{ maxWidth: 1320, margin: '0 auto' }}>
        {/* top meta row */}
        <div style={{
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          paddingBottom: 32, borderBottom: '1px solid var(--border-2)',
          fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--muted)',
        }}>
          <span>Est. 2023 · Lagos, Nigeria</span>
          <span>Capacity · Training · Advisory</span>
          <span>Vol. 01 — Capability report</span>
        </div>
        {/* giant headline */}
        <h1 style={{
          marginTop: 64,
          fontSize: 'clamp(72px, 10vw, 180px)',
          letterSpacing: '-0.045em', lineHeight: .96, fontWeight: 600,
        }}>
          The work<br/>
          of <span style={{ position: 'relative', whiteSpace: 'nowrap' }}>
            building<span style={{
              position: 'absolute', left: 0, right: 0, bottom: '0.08em',
              height: '0.12em', background: 'var(--brand)', zIndex: -1, opacity: .85,
            }}/>
          </span><br/>
          a digitally capable<br/>
          <span style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', fontWeight: 500 }}>enterprise.</span>
        </h1>
        <div style={{
          marginTop: 64,
          display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 48, alignItems: 'end',
        }}>
          <div style={{ gridColumn: '1 / 2' }}>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '.14em', textTransform: 'uppercase', color: 'var(--brand-dark)' }}>— The practice</div>
            <p style={{ marginTop: 16, fontSize: 18, lineHeight: 1.55, color: 'var(--ink-3)' }}>
              Digital World Corporate equips corporate, government, and institutional teams with the
              structured, practical capability they need to convert strategy into performance.
            </p>
            <div style={{ marginTop: 28, display: 'flex', gap: 12 }}>
              <Btn variant="ink" size="lg" arrow>Start a project</Btn>
              <Btn variant="link" size="md">Read our approach ↓</Btn>
            </div>
          </div>
          <div style={{ gridColumn: '2 / 4', position: 'relative' }}>
            <ImgPlaceholder label="Cohort workshop — Lagos, Q1 2026" ratio="21/9" tone="warm" />
            <div style={{
              position: 'absolute', left: 24, bottom: 24, padding: '10px 14px',
              background: 'var(--paper)', borderRadius: 999, border: '1px solid var(--border)',
              fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '.08em',
            }}>
              FIG 01 · Enterprise cohort in session
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function LedeC() {
  return (
    <section style={{ padding: '120px 40px', borderTop: '1px solid var(--border-2)' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: '200px 1fr', gap: 64 }}>
        <div>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '.14em', textTransform: 'uppercase', color: 'var(--brand-dark)', marginBottom: 8 }}>§01</div>
          <div style={{ fontFamily: 'var(--font-display)', fontSize: 22, fontWeight: 600, letterSpacing: '-.01em' }}>The lede</div>
          <div style={{ marginTop: 8, color: 'var(--muted)', fontSize: 13 }}>Why we exist</div>
        </div>
        <div>
          <p style={{
            fontFamily: 'var(--font-display)', fontWeight: 500,
            fontSize: 'clamp(24px, 2.6vw, 34px)', lineHeight: 1.32, letterSpacing: '-.01em',
          }}>
            <span style={{
              float: 'left', fontSize: '4.5em', lineHeight: .88,
              marginRight: 12, marginTop: 6, fontWeight: 600, color: 'var(--brand)',
            }}>O</span>rganizations adopt new systems, platforms, and data tools faster than their
            teams can adopt them. The result is a quiet, expensive gap between what strategy
            <em style={{ fontStyle: 'italic' }}> assumes</em> and what teams can actually execute.
            Our entire practice is organized around closing that gap—role by role,
            objective by objective, measurable outcome by measurable outcome.
          </p>
          <div style={{
            marginTop: 40, paddingTop: 32, borderTop: '1px solid var(--border-2)',
            display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 40,
          }}>
            {[
              ['Relevance','Built around objective and context — never templated.'],
              ['Accountability','Evaluation, tracking and reporting inside every engagement.'],
              ['Outcome','Measurable performance improvement. Full stop.'],
            ].map(([t,b]) => (
              <div key={t}>
                <div style={{ fontSize: 18, fontWeight: 600 }}>{t}</div>
                <div style={{ marginTop: 6, color: 'var(--ink-3)', fontSize: 14, lineHeight: 1.55 }}>{b}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ExpertiseC() {
  return (
    <section style={{ padding: '120px 40px', background: 'var(--paper)', borderTop: '1px solid var(--border-2)', borderBottom: '1px solid var(--border-2)' }}>
      <div style={{ maxWidth: 1320, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '200px 1fr', gap: 64, marginBottom: 56 }}>
          <div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '.14em', textTransform: 'uppercase', color: 'var(--brand-dark)', marginBottom: 8 }}>§02</div>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: 22, fontWeight: 600, letterSpacing: '-.01em' }}>Core expertise</div>
            <div style={{ marginTop: 8, color: 'var(--muted)', fontSize: 13 }}>Six disciplines</div>
          </div>
          <h2 style={{ fontSize: 'clamp(36px, 4vw, 52px)', letterSpacing: '-.02em', fontWeight: 500, lineHeight: 1.1, maxWidth: 720 }}>
            Clearly defined areas of practice — <span style={{ color: 'var(--brand-dark)' }}>transparent, deep, and measurable.</span>
          </h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '40px 64px' }}>
          {EXPERTISE.map(e => (
            <div key={e.n} style={{
              paddingTop: 32, borderTop: '1px solid var(--ink)',
              display: 'grid', gridTemplateColumns: '80px 1fr', gap: 24,
            }}>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: 48, fontWeight: 500, letterSpacing: '-.02em', color: 'var(--brand)' }}>
                {e.n}
              </div>
              <div>
                <h3 style={{ fontSize: 22, fontWeight: 600, letterSpacing: '-.01em', lineHeight: 1.25 }}>{e.title}</h3>
                <p style={{ marginTop: 12, color: 'var(--ink-3)', lineHeight: 1.6 }}>{e.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function NumbersC() {
  return (
    <section style={{ padding: '120px 40px' }}>
      <div style={{ maxWidth: 1320, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '200px 1fr', gap: 64, marginBottom: 56 }}>
          <div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '.14em', textTransform: 'uppercase', color: 'var(--brand-dark)', marginBottom: 8 }}>§03</div>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: 22, fontWeight: 600, letterSpacing: '-.01em' }}>The numbers</div>
          </div>
          <h2 style={{ fontSize: 'clamp(36px, 4vw, 52px)', letterSpacing: '-.02em', fontWeight: 500, lineHeight: 1.1, maxWidth: 720 }}>
            Impact you can put in a board pack.
          </h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 0, border: '1px solid var(--ink)' }}>
          {STATS.map((s, i) => (
            <div key={s.v} style={{
              padding: 40,
              borderRight: i < 3 ? '1px solid var(--ink)' : 'none',
              background: i % 2 === 0 ? 'var(--paper)' : 'transparent',
            }}>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: 88, fontWeight: 500, letterSpacing: '-.03em', lineHeight: 1 }}>
                {s.k}
              </div>
              <div style={{ marginTop: 16, color: 'var(--ink-3)', fontSize: 14, lineHeight: 1.5 }}>{s.v}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CaseStudiesC() {
  return (
    <section style={{ padding: '120px 40px', background: 'var(--paper)', borderTop: '1px solid var(--border-2)' }}>
      <div style={{ maxWidth: 1320, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '200px 1fr', gap: 64, marginBottom: 56 }}>
          <div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '.14em', textTransform: 'uppercase', color: 'var(--brand-dark)', marginBottom: 8 }}>§04</div>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: 22, fontWeight: 600, letterSpacing: '-.01em' }}>Field notes</div>
            <div style={{ marginTop: 8, color: 'var(--muted)', fontSize: 13 }}>Selected engagements</div>
          </div>
          <h2 style={{ fontSize: 'clamp(36px, 4vw, 52px)', letterSpacing: '-.02em', fontWeight: 500, lineHeight: 1.1, maxWidth: 720 }}>
            Two stories from inside the work.
          </h2>
        </div>
        <div style={{ display: 'grid', gap: 80 }}>
          {CASE_STUDIES.map((c, i) => (
            <article key={c.client} style={{
              display: 'grid', gridTemplateColumns: i % 2 === 0 ? '1.1fr 1fr' : '1fr 1.1fr',
              gap: 56, alignItems: 'center',
            }}>
              <div style={{ order: i % 2 === 0 ? 1 : 2 }}>
                <ImgPlaceholder label={`${c.client} — ${c.tag}`} ratio="4/3" tone={i === 0 ? 'cool' : 'brand'} />
              </div>
              <div style={{ order: i % 2 === 0 ? 2 : 1 }}>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '.14em', textTransform: 'uppercase', color: 'var(--brand-dark)' }}>
                  Case {String(i+1).padStart(2,'0')} · {c.client}
                </div>
                <h3 style={{ marginTop: 14, fontSize: 'clamp(28px, 3vw, 40px)', fontWeight: 500, letterSpacing: '-.02em', lineHeight: 1.15 }}>
                  {c.title}
                </h3>
                <p style={{ marginTop: 18, color: 'var(--ink-3)', fontSize: 16, lineHeight: 1.65 }}>
                  {c.body}
                </p>
                <div style={{ marginTop: 28, display: 'flex', gap: 40, paddingTop: 20, borderTop: '1px solid var(--border-2)' }}>
                  <div>
                    <div style={{ fontFamily: 'var(--font-display)', fontSize: 36, fontWeight: 600, color: 'var(--brand-dark)' }}>{c.metric}</div>
                    <div style={{ fontSize: 12, color: 'var(--muted)' }}>{c.metricLabel}</div>
                  </div>
                  <Btn variant="link" arrow>Read the full story</Btn>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function TeamC() {
  return (
    <section style={{ padding: '120px 40px', borderTop: '1px solid var(--border-2)' }}>
      <div style={{ maxWidth: 1320, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '200px 1fr', gap: 64, marginBottom: 56 }}>
          <div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '.14em', textTransform: 'uppercase', color: 'var(--brand-dark)', marginBottom: 8 }}>§05</div>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: 22, fontWeight: 600, letterSpacing: '-.01em' }}>Masthead</div>
            <div style={{ marginTop: 8, color: 'var(--muted)', fontSize: 13 }}>The team</div>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'end' }}>
            <h2 style={{ fontSize: 'clamp(36px, 4vw, 52px)', letterSpacing: '-.02em', fontWeight: 500, lineHeight: 1.1, maxWidth: 640 }}>
              Senior practitioners with hands-on corporate experience.
            </h2>
            <Btn variant="ghost" arrow>Meet the full team</Btn>
          </div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 20 }}>
          {TEAM.map(m => (
            <div key={m.name}>
              <ImgPlaceholder label={m.name} ratio="3/4" tone={m.tone} />
              <div style={{ marginTop: 14, paddingTop: 12, borderTop: '1px solid var(--ink)' }}>
                <div style={{ fontSize: 16, fontWeight: 600, letterSpacing: '-.01em' }}>{m.name}</div>
                <div style={{ fontSize: 12, color: 'var(--muted)', marginTop: 2, fontFamily: 'var(--font-mono)', letterSpacing: '.04em' }}>{m.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ManifestoC() {
  return (
    <section style={{ padding: '160px 40px', background: 'var(--ink)', color: '#fff' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '.16em', textTransform: 'uppercase', color: 'var(--brand)' }}>
          — Brand promise
        </div>
        <blockquote style={{
          margin: '32px 0 0', fontFamily: 'var(--font-display)', fontWeight: 500,
          fontSize: 'clamp(36px, 4.8vw, 64px)', letterSpacing: '-.025em', lineHeight: 1.12,
        }}>
          Clear outcomes. Relevant expertise.<br/>
          <span style={{ color: 'var(--brand)' }}>Consistent value.</span> Every engagement is
          designed around client objective, delivered by experienced professionals, and focused
          on measurable impact.
        </blockquote>
        <div style={{ marginTop: 56, display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: 32, borderTop: '1px solid rgba(255,255,255,.15)' }}>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: 12, letterSpacing: '.04em', color: 'rgba(255,255,255,.6)' }}>
            Digital World Corporate — Brand promise, 2026
          </div>
          <Btn variant="primary" arrow>Begin an engagement</Btn>
        </div>
      </div>
    </section>
  );
}

function FooterCTAC() {
  return (
    <section style={{ padding: '120px 40px', textAlign: 'center' }}>
      <div style={{ maxWidth: 900, margin: '0 auto' }}>
        <h2 style={{
          fontSize: 'clamp(48px, 6vw, 96px)', letterSpacing: '-0.035em', lineHeight: 1, fontWeight: 600,
        }}>
          Ready when<br/>
          you are<span style={{ color: 'var(--brand)' }}>.</span>
        </h2>
        <p style={{ marginTop: 28, color: 'var(--ink-3)', fontSize: 18, maxWidth: 560, margin: '28px auto 0' }}>
          Tell us about the capability gap you want to close. We'll propose a structured path in 3 business days.
        </p>
        <div style={{ marginTop: 36, display: 'flex', gap: 12, justifyContent: 'center' }}>
          <Btn variant="ink" size="lg" arrow>Request a proposal</Btn>
          <Btn variant="ghost" size="lg">corporate@digitalworldtech.academy</Btn>
        </div>
      </div>
    </section>
  );
}

window.DirectionC = DirectionC;
