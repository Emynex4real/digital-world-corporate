/* global React, Nav, Footer, ImgPlaceholder, Btn, Eyebrow, Arrow, CASE_STUDIES, TESTIMONIALS */

function CaseStudiesPage() {
  return (
    <div style={{ background: 'var(--paper)', color: 'var(--ink)' }}>
      <Nav variant="light" current="case-studies"/>
      <CSHero/>
      <CSFeatured/>
      <CSTestimonials/>
      <CSCTA/>
      <Footer dark/>
    </div>
  );
}

function CSHero() {
  return (
    <section style={{ padding: '72px 40px 64px', borderBottom: '1px solid var(--border)' }}>
      <div style={{ maxWidth: 1320, margin: '0 auto' }}>
        <div style={{ display: 'flex', gap: 14, fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '.14em', textTransform: 'uppercase', color: 'var(--muted)' }}>
          <span>Home</span><span>/</span><span style={{ color: 'var(--brand-dark)' }}>Case Studies</span>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1.25fr 1fr', gap: 80, alignItems: 'end', marginTop: 48 }}>
          <div>
            <Eyebrow>Past projects</Eyebrow>
            <h1 style={{ marginTop: 20, fontSize: 'clamp(52px, 6.4vw, 92px)', letterSpacing: '-0.035em', lineHeight: 1.02, fontWeight: 600 }}>
              Engagements<br/>that moved<br/>the <span style={{ fontStyle: 'italic', fontFamily: 'var(--font-display)', fontWeight: 500 }}>needle</span><span style={{ color: 'var(--brand)' }}>.</span>
            </h1>
          </div>
          <p style={{ fontSize: 17, lineHeight: 1.6, color: 'var(--ink-3)' }}>
            Digital World Corporate has a proven track record of delivering practical,
            business-aligned solutions. Every engagement combines capability building, strategic
            guidance, and measurable outcomes to create real organizational impact.
          </p>
        </div>
        <div style={{ marginTop: 64, paddingTop: 24, borderTop: '1px solid var(--border)', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 40 }}>
          {[['12+','Enterprise engagements'],['500+','Professionals trained'],['6','Expertise areas'],['98%','Satisfaction rate']].map(([k,v]) => (
            <div key={v}>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: 48, fontWeight: 600, letterSpacing: '-.02em' }}>{k}</div>
              <div style={{ marginTop: 8, fontSize: 13, color: 'var(--muted)' }}>{v}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CSFeatured() {
  const details = [
    {
      sector: 'Energy · Oil & Gas',
      duration: '3 months',
      scope: ['Business Insights','Reporting Training','Operational Data','Post-training Review'],
      long: 'We delivered a Business Insights & Reporting Training program designed specifically for Levene Energy\'s operational and management teams. The training focused on developing the ability to transform operational data into actionable insight, improve reporting accuracy, and support decision-making across daily business activities. The program included hands-on exercises using real operational data, interactive workshops on reporting best practices, and post-training follow-up to ensure adoption. Within three months, participants demonstrated improved reporting accuracy, faster decision-making, and greater alignment between operational activity and strategic objectives.',
      outcomes: [['+34%','Reporting accuracy'],['2.4×','Faster decisions'],['100%','Cohort completion']],
    },
    {
      sector: 'Energy · CSR Program',
      duration: '6 tracks · end-to-end',
      scope: ['ICT Fundamentals','Graphics Design','Cybersecurity','Web Development','Digital Marketing','Data Analysis'],
      long: 'Digital World Corporate partnered with Egbin Energy to implement Tech to Rural — a CSR initiative providing technology-focused training for youth in rural communities. The program combined classroom instruction, hands-on labs, and project-based learning so participants could apply new skills in real-world contexts. We also provided mentorship, follow-up guidance, and a showcase platform where participants demonstrated their projects — reinforcing confidence and employability. Young people gained market-relevant digital competencies, opening pathways into the digital economy.',
      outcomes: [['6','Learning tracks'],['120+','Youth trained'],['1','Showcase demo day']],
    },
  ];
  return (
    <section style={{ padding: '96px 40px' }}>
      <div style={{ maxWidth: 1320, margin: '0 auto', display: 'grid', gap: 96 }}>
        {CASE_STUDIES.map((c, i) => {
          const d = details[i];
          return (
            <article key={c.client} style={{ borderTop: '1px solid var(--ink)', paddingTop: 32 }}>
              <div style={{ display: 'grid', gridTemplateColumns: '180px 1fr', gap: 56 }}>
                <div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '.14em', textTransform: 'uppercase', color: 'var(--brand-dark)', marginBottom: 8 }}>
                    Case 0{i+1}
                  </div>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: 20, fontWeight: 600 }}>{c.client}</div>
                  <div style={{ marginTop: 4, fontSize: 13, color: 'var(--muted)' }}>{d.sector}</div>
                  <div style={{ marginTop: 24, fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--muted)' }}>Duration</div>
                  <div style={{ marginTop: 4, fontSize: 14 }}>{d.duration}</div>
                  <div style={{ marginTop: 20, fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--muted)' }}>Scope</div>
                  <ul style={{ listStyle: 'none', padding: 0, margin: '8px 0 0', display: 'grid', gap: 4, fontSize: 13, color: 'var(--ink-3)' }}>
                    {d.scope.map(s => <li key={s}>· {s}</li>)}
                  </ul>
                </div>
                <div>
                  <h2 style={{ fontSize: 'clamp(32px, 3.6vw, 48px)', fontWeight: 500, letterSpacing: '-.02em', lineHeight: 1.1 }}>
                    {c.title}
                  </h2>
                  <div style={{ marginTop: 24, display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: 40 }}>
                    <ImgPlaceholder label={`${c.client} — ${c.tag}`} ratio="4/3" tone={i === 0 ? 'cool' : 'brand'}/>
                    <div>
                      <p style={{ fontSize: 15, lineHeight: 1.7, color: 'var(--ink-3)' }}>{d.long}</p>
                    </div>
                  </div>
                  <div style={{ marginTop: 32, padding: '24px 0', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 40 }}>
                    {d.outcomes.map(([k,v]) => (
                      <div key={v}>
                        <div style={{ fontFamily: 'var(--font-display)', fontSize: 36, fontWeight: 600, color: 'var(--brand-dark)', letterSpacing: '-.02em' }}>{k}</div>
                        <div style={{ fontSize: 13, color: 'var(--muted)', marginTop: 2 }}>{v}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

function CSTestimonials() {
  return (
    <section style={{ padding: '96px 40px', background: 'var(--paper-2)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
      <div style={{ maxWidth: 1320, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '180px 1fr', gap: 64, marginBottom: 48 }}>
          <div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '.14em', textTransform: 'uppercase', color: 'var(--brand-dark)', marginBottom: 8 }}>§02</div>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: 22, fontWeight: 600 }}>Client voice</div>
          </div>
          <h2 style={{ fontSize: 'clamp(32px, 3.6vw, 48px)', letterSpacing: '-.02em', fontWeight: 500, maxWidth: 640 }}>
            Words from the people we've worked alongside.
          </h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
          {TESTIMONIALS.map((t, i) => (
            <div key={i} style={{ background: 'var(--paper)', border: '1px solid var(--border)', borderRadius: 'var(--r-lg)', padding: 40 }}>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: 64, lineHeight: .5, color: 'var(--brand)', marginBottom: 12 }}>"</div>
              <p style={{ fontFamily: 'var(--font-display)', fontSize: 20, lineHeight: 1.45, fontWeight: 500, letterSpacing: '-.01em' }}>{t.quote}</p>
              <div style={{ marginTop: 24, paddingTop: 20, borderTop: '1px solid var(--border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <div style={{ fontSize: 14, fontWeight: 600 }}>{t.name}</div>
                  <div style={{ fontSize: 12, color: 'var(--muted)' }}>{t.org}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CSCTA() {
  return (
    <section style={{ padding: '40px' }}>
      <div style={{ maxWidth: 1320, margin: '0 auto', padding: '72px 64px', background: 'var(--ink)', color: '#fff', borderRadius: 'var(--r-xl)', display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 48, alignItems: 'center' }}>
        <h2 style={{ fontSize: 'clamp(32px, 4vw, 48px)', letterSpacing: '-0.02em', fontWeight: 500, lineHeight: 1.1 }}>
          Your engagement could be the next case study.
        </h2>
        <div>
          <p style={{ color: 'rgba(255,255,255,.7)', fontSize: 16, lineHeight: 1.6 }}>
            Start the conversation — proposal in 3 business days.
          </p>
          <div style={{ marginTop: 20, display: 'flex', gap: 12 }}>
            <Btn variant="primary" size="lg" arrow>Request a proposal</Btn>
            <Btn variant="ghostDark" size="lg">See expertise</Btn>
          </div>
        </div>
      </div>
    </section>
  );
}

window.CaseStudiesPage = CaseStudiesPage;
