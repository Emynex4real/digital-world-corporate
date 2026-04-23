/* global React, Nav, Footer, Wordmark, ImgPlaceholder, Btn, Eyebrow, Arrow, EXPERTISE */
/* Core Expertise page — detailed service breakdown */

function ExpertisePage() {
  const [active, setActive] = React.useState(0);
  return (
    <div style={{ background: 'var(--paper)', color: 'var(--ink)' }}>
      <Nav variant="light" current="expertise"/>
      <ExpertiseHero/>
      <ExpertiseInteractive active={active} setActive={setActive}/>
      <ExpertiseApproach/>
      <ExpertiseCTA/>
      <Footer dark/>
    </div>
  );
}

function ExpertiseHero() {
  return (
    <section style={{ padding: '72px 40px 64px', borderBottom: '1px solid var(--border)' }}>
      <div style={{ maxWidth: 1320, margin: '0 auto' }}>
        <div style={{
          display: 'flex', gap: 14, fontFamily: 'var(--font-mono)', fontSize: 11,
          letterSpacing: '.14em', textTransform: 'uppercase', color: 'var(--muted)',
        }}>
          <span>Home</span><span>/</span><span style={{ color: 'var(--brand-dark)' }}>Core Expertise</span>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1.25fr 1fr', gap: 80, alignItems: 'end', marginTop: 48 }}>
          <div>
            <Eyebrow>Our core expertise</Eyebrow>
            <h1 style={{
              marginTop: 20, fontSize: 'clamp(52px, 6.4vw, 92px)',
              letterSpacing: '-0.035em', lineHeight: 1.02, fontWeight: 600,
            }}>
              Six disciplines<span style={{ color: 'var(--brand)' }}>.</span><br/>
              Designed to<br/>
              work <span style={{ fontStyle: 'italic', fontFamily: 'var(--font-display)', fontWeight: 500 }}>together</span>.
            </h1>
          </div>
          <p style={{ fontSize: 17, lineHeight: 1.6, color: 'var(--ink-3)' }}>
            Digital World Corporate delivers focused, business-aligned solutions designed to
            strengthen organizational capability and support sustainable growth. Our core expertise
            is structured into clearly defined areas that provide transparency, depth, and measurable
            value to organizations.
          </p>
        </div>
      </div>
    </section>
  );
}

function ExpertiseInteractive({ active, setActive }) {
  const detail = [
    {
      includes: ['Needs-based program design','On-site & hybrid delivery','Custom learning materials','Hands-on labs & simulations'],
      outcomes: ['Improved day-to-day performance','Faster adoption of digital tools','Measurable skill uplift'],
    },
    {
      includes: ['Skills audits & role mapping','Digital maturity benchmarks','Readiness scoring','Gap-priority roadmap'],
      outcomes: ['Targeted investment of training budget','Clear baseline for measuring growth','Leadership visibility into capability'],
    },
    {
      includes: ['Competency framework design','Role-specific learning paths','Modular content architecture','Assessment blueprints'],
      outcomes: ['Curriculum aligned to strategy','Reusable learning assets','Reduced onboarding time'],
    },
    {
      includes: ['Post-session coaching','Impact tracking dashboards','Executive reports','Learning adoption reviews'],
      outcomes: ['Evidence of ROI on learning','Sustained behavior change','Leadership confidence in outcomes'],
    },
    {
      includes: ['Strategic leadership modules','Digital readiness for execs','Change management programs','Performance optimization'],
      outcomes: ['Leaders equipped to drive transformation','Stronger decision-making under change','Aligned senior team'],
    },
    {
      includes: ['CSR strategy design','Program structuring & budgeting','Community implementation','Impact reporting'],
      outcomes: ['Brand strengthened by purpose','Verifiable community impact','Stakeholder trust & reporting'],
    },
  ];
  const a = EXPERTISE[active];
  const d = detail[active];
  return (
    <section style={{ padding: '96px 40px', background: 'var(--paper-2)' }}>
      <div style={{ maxWidth: 1320, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1.6fr', gap: 48 }}>
        {/* left rail — list */}
        <div style={{ borderTop: '1px solid var(--ink)' }}>
          {EXPERTISE.map((e, i) => (
            <button key={e.n} onMouseEnter={() => setActive(i)} onClick={() => setActive(i)} style={{
              width: '100%', textAlign: 'left', padding: '24px 0',
              borderBottom: '1px solid var(--border-2)', display: 'grid',
              gridTemplateColumns: '40px 1fr 20px', gap: 16, alignItems: 'center',
              color: active === i ? 'var(--ink)' : 'var(--muted)',
              transition: 'color .2s',
            }}>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: active === i ? 'var(--brand-dark)' : 'var(--muted)' }}>{e.n}</span>
              <span style={{ fontSize: 18, fontWeight: active === i ? 600 : 500, letterSpacing: '-.01em' }}>{e.title}</span>
              <span style={{ color: active === i ? 'var(--brand-dark)' : 'var(--muted)' }}><Arrow size={14}/></span>
            </button>
          ))}
        </div>
        {/* right panel — detail */}
        <div style={{
          background: 'var(--paper)', border: '1px solid var(--border)',
          borderRadius: 'var(--r-lg)', padding: 48, position: 'sticky', top: 100,
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '.14em', color: 'var(--brand-dark)' }}>Core Expertise · {a.n}</span>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--muted)' }}>0{active+1} of 0{EXPERTISE.length}</span>
          </div>
          <h2 style={{ marginTop: 20, fontSize: 'clamp(32px, 3.4vw, 44px)', letterSpacing: '-.02em', fontWeight: 600, lineHeight: 1.15 }}>
            {a.title}
          </h2>
          <p style={{ marginTop: 16, color: 'var(--ink-3)', fontSize: 17, lineHeight: 1.65 }}>{a.body}</p>
          <div style={{ marginTop: 32, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32 }}>
            <div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '.14em', textTransform: 'uppercase', color: 'var(--muted)' }}>What's included</div>
              <ul style={{ listStyle: 'none', padding: 0, margin: '16px 0 0', display: 'grid', gap: 10 }}>
                {d.includes.map(x => (
                  <li key={x} style={{ display: 'grid', gridTemplateColumns: '16px 1fr', gap: 10, fontSize: 14, lineHeight: 1.5 }}>
                    <span style={{ marginTop: 6, width: 6, height: 6, borderRadius: 999, background: 'var(--brand)' }}/>
                    {x}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '.14em', textTransform: 'uppercase', color: 'var(--muted)' }}>Expected outcomes</div>
              <ul style={{ listStyle: 'none', padding: 0, margin: '16px 0 0', display: 'grid', gap: 10 }}>
                {d.outcomes.map(x => (
                  <li key={x} style={{ display: 'grid', gridTemplateColumns: '16px 1fr', gap: 10, fontSize: 14, lineHeight: 1.5 }}>
                    <span style={{ marginTop: 6, width: 6, height: 6, borderRadius: 2, background: 'var(--ink)' }}/>
                    {x}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div style={{ marginTop: 40, paddingTop: 24, borderTop: '1px solid var(--border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Btn variant="ink" arrow>Request a proposal</Btn>
            <ImgPlaceholder label={`Illustration — ${a.title}`} ratio="1/1" tone="brand" style={{ width: 80, height: 80 }}/>
          </div>
        </div>
      </div>
    </section>
  );
}

function ExpertiseApproach() {
  const steps = [
    ['Discovery','We assess existing capability, map gaps, and identify organizational priorities.'],
    ['Design','Custom curriculum and delivery framework built around role, context, and objective.'],
    ['Deliver','Facilitated training, hands-on workshops, and executive sessions — on-site or hybrid.'],
    ['Measure','Structured evaluation, impact tracking, and reporting back to leadership.'],
  ];
  return (
    <section style={{ padding: '96px 40px' }}>
      <div style={{ maxWidth: 1320, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '180px 1fr', gap: 64, marginBottom: 56 }}>
          <div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '.14em', textTransform: 'uppercase', color: 'var(--brand-dark)', marginBottom: 8 }}>§02</div>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: 22, fontWeight: 600 }}>How we work</div>
          </div>
          <h2 style={{ fontSize: 'clamp(36px, 4vw, 52px)', letterSpacing: '-.02em', fontWeight: 500, maxWidth: 720 }}>
            From capability gap to measurable outcome.
          </h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 24, position: 'relative' }}>
          <div style={{ position: 'absolute', top: 24, left: '6%', right: '6%', height: 1, background: 'var(--border-2)' }}/>
          {steps.map(([t,b], i) => (
            <div key={t} style={{ position: 'relative' }}>
              <div style={{
                width: 48, height: 48, borderRadius: 999, background: i === 0 ? 'var(--brand)' : 'var(--paper)',
                border: '1px solid var(--ink)', display: 'grid', placeItems: 'center',
                fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 18, position: 'relative', zIndex: 1,
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

function ExpertiseCTA() {
  return (
    <section style={{ padding: '40px' }}>
      <div style={{
        maxWidth: 1320, margin: '0 auto', padding: '72px 64px',
        background: 'var(--ink)', color: '#fff', borderRadius: 'var(--r-xl)',
        display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 48, alignItems: 'center',
      }}>
        <h2 style={{ fontSize: 'clamp(32px, 4vw, 48px)', letterSpacing: '-0.02em', fontWeight: 500, lineHeight: 1.1 }}>
          Need more than one discipline? That's how we usually work.
        </h2>
        <div>
          <p style={{ color: 'rgba(255,255,255,.7)', fontSize: 16, lineHeight: 1.6 }}>
            Every engagement is customized. Tell us the objective — we'll propose the combination that fits.
          </p>
          <div style={{ marginTop: 20, display: 'flex', gap: 12 }}>
            <Btn variant="primary" size="lg" arrow>Request a proposal</Btn>
            <Btn variant="ghostDark" size="lg">See case studies</Btn>
          </div>
        </div>
      </div>
    </section>
  );
}

window.ExpertisePage = ExpertisePage;
