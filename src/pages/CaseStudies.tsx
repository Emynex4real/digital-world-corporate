import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Nav } from '../components/layout/Nav'
import { Footer } from '../components/layout/Footer'
import { Eyebrow } from '../components/ui/Eyebrow'
import { Btn } from '../components/ui/Btn'
import { GrainOverlay } from '../components/ui/GrainOverlay'
import { CASE_STUDIES, TESTIMONIALS } from '../data'
import { fadeUp, slideLeft, slideRight, scaleIn, stagger, staggerFast, viewport } from '../lib/motion'

const IMG = {
  hero:  'https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1920&q=80',
  case1: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=80',
  case2: 'https://images.unsplash.com/photo-1531482615713-2aef69af7cbf?auto=format&fit=crop&w=900&q=80',
}

const DETAILS = [
  {
    sector: 'Energy · Oil & Gas', duration: '3 months',
    scope: ['Business Insights','Reporting Training','Operational Data','Post-training Review'],
    long: "We delivered a Business Insights & Reporting Training program designed specifically for Levene Energy's operational and management teams. The training focused on developing the ability to transform operational data into actionable insight, improve reporting accuracy, and support decision-making across daily business activities. The program included hands-on exercises using real operational data, interactive workshops on reporting best practices, and post-training follow-up to ensure adoption. Within three months, participants demonstrated improved reporting accuracy, faster decision-making, and greater alignment between operational activity and strategic objectives.",
    outcomes: [['+34%','Reporting accuracy'],['2.4×','Faster decisions'],['100%','Cohort completion']],
  },
  {
    sector: 'Energy · CSR Program', duration: '6 tracks · end-to-end',
    scope: ['ICT Fundamentals','Graphics Design','Cybersecurity','Web Development','Digital Marketing','Data Analysis'],
    long: 'Digital World Corporate partnered with Egbin Energy to implement Tech to Rural — a CSR initiative providing technology-focused training for youth in rural communities. The program combined classroom instruction, hands-on labs, and project-based learning so participants could apply new skills in real-world contexts. We also provided mentorship, follow-up guidance, and a showcase platform where participants demonstrated their projects — reinforcing confidence and employability. Young people gained market-relevant digital competencies, opening pathways into the digital economy.',
    outcomes: [['6','Learning tracks'],['120+','Youth trained'],['1','Showcase demo day']],
  },
]

export default function CaseStudies() {
  return (
    <div className="bg-paper text-ink overflow-x-hidden">
      <Nav variant="dark" />
      <CSHero />
      <CSFeatured />
      <CSTestimonials />
      <CSCTA />
      <Footer dark />
    </div>
  )
}

function CSHero() {
  return (
    <section className="relative bg-ink text-white overflow-hidden">
      <div className="absolute inset-0">
        <img src={IMG.hero} alt="" className="w-full h-full object-cover opacity-15" />
        <div className="absolute inset-0 bg-gradient-to-br from-ink via-ink/95 to-ink/80" />
      </div>
      <GrainOverlay opacity={0.045} />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(247,148,29,0.14) 0%, transparent 65%)' }}
      />
      <div className="relative z-10 max-w-container mx-auto px-6 lg:px-10 pt-[80px] pb-12 lg:pb-[80px]">
        <div className="flex gap-2 font-mono text-[11px] tracking-[0.12em] uppercase text-white/30 flex-wrap">
          <span>Home</span><span>/</span><span className="text-brand">Case Studies</span>
        </div>
        <motion.div variants={stagger} initial="hidden" animate="show"
          className="grid lg:grid-cols-[1.25fr_1fr] gap-10 lg:gap-20 items-end mt-10 lg:mt-12"
        >
          <motion.div variants={slideLeft}>
            <Eyebrow color="#f7941d">Past projects</Eyebrow>
            <h1 className="mt-5 font-semibold tracking-[-0.035em] leading-[1.02] text-white"
              style={{ fontSize: 'clamp(38px, 6.4vw, 92px)' }}>
              Engagements<br />that moved<br />the{' '}
              <span className="italic font-display font-medium text-brand">needle</span>
              <span className="text-brand">.</span>
            </h1>
          </motion.div>
          <motion.p variants={slideRight} className="text-[15px] lg:text-[17px] leading-[1.6] text-white/60">
            Digital World Corporate has a proven track record of delivering practical,
            business-aligned solutions. Every engagement combines capability building, strategic
            guidance, and measurable outcomes to create real organizational impact.
          </motion.p>
        </motion.div>

        {/* Stats row */}
        <motion.div variants={staggerFast} initial="hidden" animate="show"
          className="mt-12 pt-6 border-t border-white/10 grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-10"
        >
          {[['12+','Enterprise engagements'],['500+','Professionals trained'],['6','Expertise areas'],['98%','Satisfaction rate']].map(([k,v]) => (
            <motion.div key={v} variants={fadeUp}>
              <div className="font-display text-[36px] lg:text-[48px] font-semibold tracking-[-0.02em] text-white leading-none">{k}</div>
              <div className="mt-2 text-[12px] text-white/50">{v}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

function CSFeatured() {
  return (
    <section className="px-6 lg:px-10 py-16 lg:py-24 bg-paper">
      <div className="max-w-container mx-auto grid gap-12 lg:gap-20">
        {CASE_STUDIES.map((c, i) => {
          const d = DETAILS[i]
          return (
            <motion.article key={c.client} variants={fadeUp} initial="hidden" whileInView="show" viewport={viewport}
              className="rounded-r-xl overflow-hidden border border-line"
            >
              {/* Image banner */}
              <div className="relative overflow-hidden h-[180px] sm:h-[240px] lg:h-auto lg:aspect-[21/7]">
                <img src={i === 0 ? IMG.case1 : IMG.case2} alt={`${c.client} engagement`}
                  className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-r from-ink/80 via-ink/40 to-transparent" />
                <div className="absolute inset-0 flex items-end p-5 lg:p-10">
                  <div>
                    <span className="font-mono text-[11px] tracking-[0.14em] uppercase text-brand">
                      Case 0{i + 1} · {c.tag}
                    </span>
                    <h2 className="mt-2 font-semibold tracking-[-0.02em] leading-[1.1] text-white"
                      style={{ fontSize: 'clamp(20px, 3vw, 42px)' }}>{c.title}</h2>
                    <div className="mt-1 font-display text-[16px] lg:text-[20px] font-semibold text-white/80">{c.client}</div>
                  </div>
                </div>
              </div>

              {/* Details */}
              <div className="grid lg:grid-cols-[180px_1fr] gap-6 lg:gap-14 p-6 lg:p-10 bg-paper">
                <div>
                  <div className="font-mono text-[11px] tracking-[0.14em] uppercase text-muted mb-1">Sector</div>
                  <div className="text-[14px] font-medium">{d.sector}</div>
                  <div className="font-mono text-[11px] tracking-[0.12em] uppercase text-muted mt-4 mb-1">Duration</div>
                  <div className="text-[14px]">{d.duration}</div>
                  <div className="font-mono text-[11px] tracking-[0.12em] uppercase text-muted mt-4 mb-2">Scope</div>
                  <ul className="list-none p-0 grid gap-1 text-[13px] text-ink-3">
                    {d.scope.map(s => <li key={s}>· {s}</li>)}
                  </ul>
                </div>
                <div>
                  <p className="text-[14px] lg:text-[16px] leading-[1.7] text-ink-3">{d.long}</p>
                  <div className="mt-7 grid grid-cols-3 gap-4 lg:gap-8 pt-6 border-t border-line">
                    {d.outcomes.map(([k, v]) => (
                      <div key={v}>
                        <div className="font-display text-[28px] lg:text-[40px] font-semibold text-brand-dark tracking-[-0.02em] leading-none">{k}</div>
                        <div className="text-[12px] lg:text-[13px] text-muted mt-2">{v}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.article>
          )
        })}
      </div>
    </section>
  )
}

function CSTestimonials() {
  return (
    <section className="relative px-6 lg:px-10 py-16 lg:py-24 bg-ink overflow-hidden">
      <GrainOverlay opacity={0.04} />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(247,148,29,0.1) 0%, transparent 70%)' }}
      />
      <div className="relative z-10 max-w-container mx-auto">
        <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={viewport}
          className="grid lg:grid-cols-[180px_1fr] gap-6 lg:gap-16 mb-10 lg:mb-12"
        >
          <motion.div variants={slideLeft}>
            <div className="font-mono text-[11px] tracking-[0.14em] uppercase text-brand mb-2">§02</div>
            <div className="font-display text-[22px] font-semibold text-white">Client voice</div>
          </motion.div>
          <motion.h2 variants={slideRight}
            className="font-medium tracking-[-0.02em] max-w-[640px] text-white"
            style={{ fontSize: 'clamp(26px, 3.6vw, 48px)' }}>
            Words from the people we've worked alongside.
          </motion.h2>
        </motion.div>

        <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={viewport}
          className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-6"
        >
          {TESTIMONIALS.map((t, i) => (
            <motion.div key={i} variants={fadeUp}
              whileHover={{ y: -4, transition: { duration: 0.25 } }}
              className="rounded-r-xl p-6 lg:p-10"
              style={{ background: 'rgba(255,255,255,0.04)', backdropFilter: 'blur(20px)', border: '1px solid rgba(255,255,255,0.08)' }}
            >
              <div className="font-display text-brand leading-[0.5] mb-4" style={{ fontSize: 56 }}>"</div>
              <p className="font-display text-[16px] lg:text-[19px] leading-[1.5] font-medium tracking-[-0.01em] text-white">{t.quote}</p>
              <div className="mt-6 pt-5 border-t border-white/10">
                <div className="text-[14px] font-semibold text-white">{t.name}</div>
                <div className="text-[12px] text-white/40 mt-0.5">{t.org}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

function CSCTA() {
  return (
    <section className="px-4 lg:px-10 py-6 lg:py-10 bg-paper">
      <motion.div variants={scaleIn} initial="hidden" whileInView="show" viewport={viewport}
        className="max-w-container mx-auto relative overflow-hidden rounded-r-xl px-6 lg:px-16 py-12 lg:py-[72px] grid lg:grid-cols-[1.4fr_1fr] gap-8 lg:gap-12 items-center"
        style={{ background: 'linear-gradient(135deg, #f7941d 0%, #e8820a 100%)' }}
      >
        <GrainOverlay opacity={0.06} />
        <h2 className="relative z-10 font-medium tracking-[-0.02em] leading-[1.1] text-ink"
          style={{ fontSize: 'clamp(26px, 4vw, 48px)' }}>
          Your engagement could be the next case study.
        </h2>
        <div className="relative z-10">
          <p className="text-ink/75 text-[15px] lg:text-[16px] leading-[1.6]">
            Start the conversation — proposal in 3 business days.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <Link to="/get-proposal"><Btn variant="ink" size="lg" arrow>Request a proposal</Btn></Link>
            <Link to="/expertise"><Btn variant="ghost" size="lg">See expertise</Btn></Link>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
