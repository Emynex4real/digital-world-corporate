/* global React, Nav, Footer, ImgPlaceholder, Btn, Eyebrow, Arrow, TEAM */
/* Team page — editorial grid with expandable bios */

function TeamPage() {
  const [open, setOpen] = React.useState(null);
  return (
    <div style={{ background: 'var(--paper)', color: 'var(--ink)' }}>
      <Nav variant="light" current="team"/>
      <TeamHero/>
      <TeamGrid open={open} setOpen={setOpen}/>
      <JoinUs/>
      <Footer dark/>
    </div>
  );
}

function TeamHero() {
  return (
    <section style={{ padding: '72px 40px 64px', borderBottom: '1px solid var(--border)' }}>
      <div style={{ maxWidth: 1320, margin: '0 auto' }}>
        <div style={{
          display: 'flex', gap: 14, fontFamily: 'var(--font-mono)', fontSize: 11,
          letterSpacing: '.14em', textTransform: 'uppercase', color: 'var(--muted)',
        }}>
          <span>Home</span><span>/</span><span style={{ color: 'var(--brand-dark)' }}>Meet the Team</span>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1.25fr 1fr', gap: 80, alignItems: 'end', marginTop: 48 }}>
          <div>
            <Eyebrow>Meet the team</Eyebrow>
            <h1 style={{ marginTop: 20, fontSize: 'clamp(52px, 6.4vw, 92px)', letterSpacing: '-0.035em', lineHeight: 1.02, fontWeight: 600 }}>
              Practitioners<br/>
              who have done<br/>
              the <span style={{ fontStyle: 'italic', fontFamily: 'var(--font-display)', fontWeight: 500 }}>work</span><span style={{ color: 'var(--brand)' }}>.</span>
            </h1>
          </div>
          <p style={{ fontSize: 17, lineHeight: 1.6, color: 'var(--ink-3)' }}>
            Our team blends strategic thinking, execution discipline, and human-centered design.
            Industry experts, senior practitioners, and curriculum designers with real-world
            experience across business, technology, and operations.
          </p>
        </div>
      </div>
    </section>
  );
}

function TeamGrid({ open, setOpen }) {
  return (
    <section style={{ padding: '96px 40px' }}>
      <div style={{ maxWidth: 1320, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 28 }}>
          {TEAM.map((m, i) => {
            const isOpen = open === i;
            return (
              <article key={m.name} style={{
                gridColumn: isOpen ? 'span 3' : 'auto',
                display: 'grid',
                gridTemplateColumns: isOpen ? '1fr 1.4fr' : '1fr',
                gap: isOpen ? 40 : 0,
                border: '1px solid var(--border)', borderRadius: 'var(--r-lg)',
                overflow: 'hidden', background: 'var(--paper)',
                transition: 'all .3s',
              }}>
                <div style={{ position: 'relative' }}>
                  <ImgPlaceholder label={m.name} ratio={isOpen ? '1/1.1' : '3/4'} tone={m.tone} rounded="0"/>
                  <div style={{ position: 'absolute', left: 16, top: 16, fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '.12em', textTransform: 'uppercase', background: 'var(--paper)', padding: '4px 10px', borderRadius: 999, border: '1px solid var(--border)' }}>
                    0{i+1} / 0{TEAM.length}
                  </div>
                </div>
                <div style={{ padding: isOpen ? '40px 40px 40px 0' : 24 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                    <div>
                      <h3 style={{ fontSize: isOpen ? 34 : 22, fontWeight: 600, letterSpacing: '-.01em', lineHeight: 1.15 }}>{m.name}</h3>
                      <div style={{ marginTop: 6, fontSize: 14, color: 'var(--brand-dark)', fontFamily: 'var(--font-mono)', letterSpacing: '.04em' }}>{m.role}</div>
                    </div>
                    <button onClick={() => setOpen(isOpen ? null : i)} style={{
                      width: 36, height: 36, borderRadius: 999, border: '1px solid var(--border-2)',
                      display: 'grid', placeItems: 'center', color: 'var(--ink)',
                      background: isOpen ? 'var(--ink)' : 'transparent',
                      color: isOpen ? '#fff' : 'var(--ink)',
                    }}>{isOpen ? '−' : '+'}</button>
                  </div>
                  {isOpen && (
                    <div style={{ marginTop: 24 }}>
                      <p style={{ fontSize: 16, lineHeight: 1.65, color: 'var(--ink-3)' }}>{m.bio}</p>
                      <div style={{ marginTop: 28, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32 }}>
                        <div>
                          <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '.14em', textTransform: 'uppercase', color: 'var(--muted)' }}>Core expertise</div>
                          <ul style={{ listStyle: 'none', padding: 0, margin: '12px 0 0', display: 'grid', gap: 8 }}>
                            {m.expertise.map(e => (
                              <li key={e} style={{ display: 'grid', gridTemplateColumns: '16px 1fr', gap: 10, fontSize: 14 }}>
                                <span style={{ marginTop: 6, width: 6, height: 6, borderRadius: 999, background: 'var(--brand)' }}/>
                                {e}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '.14em', textTransform: 'uppercase', color: 'var(--muted)' }}>Off the clock</div>
                          <p style={{ marginTop: 12, fontSize: 14, lineHeight: 1.6, color: 'var(--ink-3)' }}>{m.off}</p>
                        </div>
                      </div>
                      <blockquote style={{
                        marginTop: 28, padding: '20px 0 0', borderTop: '1px solid var(--border)',
                        fontFamily: 'var(--font-display)', fontSize: 20, fontWeight: 500,
                        letterSpacing: '-.01em', fontStyle: 'italic', color: 'var(--ink)', lineHeight: 1.4,
                      }}>
                        <span style={{ color: 'var(--brand)', marginRight: 6 }}>"</span>{m.quote}<span style={{ color: 'var(--brand)' }}>"</span>
                      </blockquote>
                    </div>
                  )}
                  {!isOpen && (
                    <p style={{ marginTop: 16, fontSize: 14, color: 'var(--ink-3)', lineHeight: 1.55, display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>{m.bio}</p>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function JoinUs() {
  return (
    <section style={{ padding: '40px' }}>
      <div style={{
        maxWidth: 1320, margin: '0 auto', padding: '72px 64px',
        background: 'var(--brand)', borderRadius: 'var(--r-xl)',
        display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 48, alignItems: 'center',
      }}>
        <h2 style={{ fontSize: 'clamp(32px, 4vw, 48px)', letterSpacing: '-0.02em', fontWeight: 500, lineHeight: 1.1 }}>
          The team grows with the work. Interested in joining us?
        </h2>
        <div>
          <p style={{ color: 'var(--ink-2)', fontSize: 16, lineHeight: 1.6 }}>
            We're always looking for practitioners who can combine strategic thinking with hands-on delivery.
          </p>
          <div style={{ marginTop: 20, display: 'flex', gap: 12 }}>
            <Btn variant="ink" size="lg" arrow>See open roles</Btn>
            <Btn variant="ghost" size="lg">Send a CV</Btn>
          </div>
        </div>
      </div>
    </section>
  );
}

window.TeamPage = TeamPage;
