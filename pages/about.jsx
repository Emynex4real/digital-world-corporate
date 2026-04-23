/* global React, Nav, Footer, Wordmark, ImgPlaceholder, Btn, Eyebrow, Arrow */
/* About page — Vision, Mission, Brand Promise, story */

function AboutPage() {
  return (
    <div style={{ background: 'var(--paper)', color: 'var(--ink)' }}>
      <Nav variant="light" current="about"/>
      <AboutHero/>
      <AboutLede/>
      <VisionMission/>
      <WhyUs/>
      <AboutCTA/>
      <Footer dark/>
    </div>
  );
}

function AboutHero() {
  return (
    <section style={{ padding: '72px 40px 48px', borderBottom: '1px solid var(--border)' }}>
      <div style={{ maxWidth: 1320, margin: '0 auto' }}>
        <div style={{
          display: 'flex', gap: 14, fontFamily: 'var(--font-mono)', fontSize: 11,
          letterSpacing: '.14em', textTransform: 'uppercase', color: 'var(--muted)',
        }}>
          <span>Home</span><span>/</span><span style={{ color: 'var(--brand-dark)' }}>About</span>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1.3fr 1fr', gap: 80, alignItems: 'end', marginTop: 48 }}>
          <div>
            <Eyebrow>About Digital World Corporate</Eyebrow>
            <h1 style={{
              marginTop: 20, fontSize: 'clamp(52px, 6.4vw, 92px)',
              letterSpacing: '-0.035em', lineHeight: 1.02, fontWeight: 600,
            }}>
              A capability<br/>
              partner for<br/>
              <span style={{ fontStyle: 'italic', fontFamily: 'var(--font-display)', fontWeight: 500 }}>enterprise</span>
              <span style={{ color: 'var(--brand)' }}>.</span>
            </h1>
          </div>
          <p style={{ fontSize: 18, lineHeight: 1.6, color: 'var(--ink-3)' }}>
            Digital World Corporate is a professional digital capacity and enterprise solutions
            organization. We work closely with institutions to strengthen internal capability,
            improve operational efficiency, and enable sustainable growth through structured
            digital transformation initiatives.
          </p>
        </div>
      </div>
    </section>
  );
}

function AboutLede() {
  return (
    <section style={{ padding: '96px 40px' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: '180px 1fr', gap: 64 }}>
        <div>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '.14em', textTransform: 'uppercase', color: 'var(--brand-dark)', marginBottom: 8 }}>§01</div>
          <div style={{ fontFamily: 'var(--font-display)', fontSize: 22, fontWeight: 600, letterSpacing: '-.01em' }}>The story</div>
          <div style={{ marginTop: 8, color: 'var(--muted)', fontSize: 13 }}>Why we exist</div>
        </div>
        <div>
          <p style={{
            fontFamily: 'var(--font-display)', fontWeight: 500,
            fontSize: 'clamp(22px, 2.4vw, 30px)', lineHeight: 1.32, letterSpacing: '-.01em',
            color: 'var(--ink)',
          }}>
            <span style={{
              float: 'left', fontSize: '4.5em', lineHeight: .88,
              marginRight: 14, marginTop: 6, fontWeight: 600, color: 'var(--brand)',
            }}>D</span>igital World Corporate was founded to address a persistent challenge across
            corporate and institutional environments: the growing disconnect between business
            strategy and digital execution. While organizations adopt new systems, platforms, and
            data tools, many teams lack the practical skills, governance frameworks, and strategic
            alignment required to extract real value.
          </p>
          <p style={{ marginTop: 32, fontSize: 17, lineHeight: 1.7, color: 'var(--ink-3)' }}>
            Our approach is grounded in partnership, practicality, and performance. We believe
            digital capability must be built within the context of each organization's structure,
            culture, and goals. We combine advisory insight, structured training, and implementation
            support to ensure that learning and transformation efforts lead to measurable outcomes —
            moving organizations from intent to execution with clarity and confidence.
          </p>
          <p style={{ marginTop: 24, fontSize: 17, lineHeight: 1.7, color: 'var(--ink-3)' }}>
            What distinguishes Digital World Corporate is our deep understanding of enterprise
            realities. We do not offer generic digital interventions. Instead, we deliver customized
            solutions that reflect industry context, operational maturity, and strategic priorities.
          </p>
        </div>
      </div>
    </section>
  );
}

function VisionMission() {
  const cards = [
    {
      tag: 'Vision',
      title: 'Digitally capable solutions',
      body: 'To build digitally capable solutions that confidently drive innovation, efficiency, and sustainable growth across industries and regions.',
      tone: 'paper',
    },
    {
      tag: 'Mission',
      title: 'Business-aligned training & advisory',
      body: 'To deliver business-aligned digital training, advisory, and capacity-building solutions that equip corporate teams with practical skill, strategic insight, and execution readiness required to succeed in a technology-driven economy.',
      tone: 'brand',
    },
    {
      tag: 'Brand Promise',
      title: 'Clear outcomes. Relevant expertise.',
      body: 'Consistent value. Every engagement is designed around client objective, delivered by experienced professionals, and focused on measurable impact that supports long-term organizational performance.',
      tone: 'ink',
    },
  ];
  return (
    <section style={{ padding: '96px 40px', background: 'var(--paper-2)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
      <div style={{ maxWidth: 1320, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '180px 1fr', gap: 64, marginBottom: 56 }}>
          <div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '.14em', textTransform: 'uppercase', color: 'var(--brand-dark)', marginBottom: 8 }}>§02</div>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: 22, fontWeight: 600 }}>What drives us</div>
          </div>
          <h2 style={{ fontSize: 'clamp(36px, 4vw, 52px)', letterSpacing: '-.02em', fontWeight: 500, maxWidth: 720 }}>
            Vision, mission, and the brand promise we hold ourselves to.
          </h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
          {cards.map((c, i) => {
            const isInk = c.tone === 'ink';
            const isBrand = c.tone === 'brand';
            return (
              <div key={c.tag} style={{
                background: isInk ? 'var(--ink)' : isBrand ? 'var(--brand)' : 'var(--paper)',
                color: isInk ? '#fff' : 'var(--ink)',
                border: isInk || isBrand ? 'none' : '1px solid var(--border)',
                borderRadius: 'var(--r-lg)', padding: 36, minHeight: 340,
                display: 'flex', flexDirection: 'column', gap: 20,
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{
                    fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '.14em', textTransform: 'uppercase',
                    color: isInk ? 'var(--brand)' : isBrand ? 'var(--ink-2)' : 'var(--brand-dark)',
                  }}>— {c.tag}</span>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '.12em', opacity: .6 }}>0{i+1}</span>
                </div>
                <h3 style={{
                  fontSize: 28, fontWeight: 600, letterSpacing: '-.01em', lineHeight: 1.15, flex: 0,
                }}>{c.title}</h3>
                <p style={{
                  fontSize: 15, lineHeight: 1.6,
                  color: isInk ? 'rgba(255,255,255,.75)' : isBrand ? 'var(--ink-2)' : 'var(--ink-3)',
                  flex: 1,
                }}>{c.body}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function WhyUs() {
  const reasons = [
    ['Proven Experience','Hands-on experience working with corporate organizations, institutions, and development-focused entities across sectors. We understand enterprise structure, decision-making, and operational reality.'],
    ['Tailored, Business-Aligned Solutions','Every engagement is customized — built around organizational objectives, workforce maturity, and industry context. Ensuring relevance, adoption, and sustained value.'],
    ['Measurable Impact & Accountability','Assessment, evaluation, and reporting are integrated into every engagement so clients gain clear visibility into impact at both individual and organizational level.'],
    ['Deep Industry & Sector Insight','Industry-informed perspective applied to every solution — allowing us to anticipate challenges, manage change, and support strategic decision-making.'],
    ['Partnership-Driven Approach','We work as a long-term partner, not a transactional provider. Our model ensures alignment with leadership and sustained capability beyond the engagement lifecycle.'],
  ];
  return (
    <section style={{ padding: '96px 40px' }}>
      <div style={{ maxWidth: 1320, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '180px 1fr', gap: 64, marginBottom: 56 }}>
          <div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '.14em', textTransform: 'uppercase', color: 'var(--brand-dark)', marginBottom: 8 }}>§03</div>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: 22, fontWeight: 600 }}>Why choose us</div>
          </div>
          <h2 style={{ fontSize: 'clamp(36px, 4vw, 52px)', letterSpacing: '-.02em', fontWeight: 500, maxWidth: 720 }}>
            Strategic insight. Practical execution. Accountability.
          </h2>
        </div>
        <div style={{ borderTop: '1px solid var(--ink)' }}>
          {reasons.map(([t,b], i) => (
            <div key={t} style={{
              display: 'grid', gridTemplateColumns: '80px 1fr 2fr', gap: 40,
              padding: '32px 0', borderBottom: '1px solid var(--border-2)',
            }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--brand-dark)' }}>
                0{i+1}
              </div>
              <h3 style={{ fontSize: 22, fontWeight: 600, letterSpacing: '-.01em' }}>{t}</h3>
              <p style={{ color: 'var(--ink-3)', fontSize: 16, lineHeight: 1.6 }}>{b}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AboutCTA() {
  return (
    <section style={{ padding: '40px' }}>
      <div style={{
        maxWidth: 1320, margin: '0 auto', padding: '72px 64px',
        background: 'var(--brand)', borderRadius: 'var(--r-xl)',
        display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 48, alignItems: 'center',
      }}>
        <h2 style={{ fontSize: 'clamp(32px, 4vw, 48px)', letterSpacing: '-0.02em', fontWeight: 500, lineHeight: 1.1 }}>
          Let's design the program your organization actually needs.
        </h2>
        <div>
          <p style={{ color: 'var(--ink-2)', fontSize: 16, lineHeight: 1.6 }}>
            Share your capability objectives. We'll come back with a structured, business-aligned proposal.
          </p>
          <div style={{ marginTop: 20, display: 'flex', gap: 12 }}>
            <Btn variant="ink" size="lg" arrow>Book a discovery call</Btn>
            <Btn variant="ghost" size="lg">See our work</Btn>
          </div>
        </div>
      </div>
    </section>
  );
}

window.AboutPage = AboutPage;
