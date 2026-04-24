import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Nav } from '../components/layout/Nav'
import { Footer } from '../components/layout/Footer'
import { Eyebrow } from '../components/ui/Eyebrow'
import { Btn } from '../components/ui/Btn'
import { Arrow } from '../components/ui/Arrow'
import { GrainOverlay } from '../components/ui/GrainOverlay'
import { EXPERTISE } from '../data'
import { fadeUp, slideLeft, slideRight, scaleIn, stagger, staggerFast, viewport } from '../lib/motion'

const DETAILS = [
  { includes: ['Needs-based program design','On-site & hybrid delivery','Custom learning materials','Hands-on labs & simulations'], outcomes: ['Improved day-to-day performance','Faster adoption of digital tools','Measurable skill uplift'] },
  { includes: ['Skills audits & role mapping','Digital maturity benchmarks','Readiness scoring','Gap-priority roadmap'], outcomes: ['Targeted investment of training budget','Clear baseline for measuring growth','Leadership visibility into capability'] },
  { includes: ['Competency framework design','Role-specific learning paths','Modular content architecture','Assessment blueprints'], outcomes: ['Curriculum aligned to strategy','Reusable learning assets','Reduced onboarding time'] },
  { includes: ['Post-session coaching','Impact tracking dashboards','Executive reports','Learning adoption reviews'], outcomes: ['Evidence of ROI on learning','Sustained behavior change','Leadership confidence in outcomes'] },
  { includes: ['Strategic leadership modules','Digital readiness for execs','Change management programs','Performance optimization'], outcomes: ['Leaders equipped to drive transformation','Stronger decision-making under change','Aligned senior team'] },
  { includes: ['CSR strategy design','Program structuring & budgeting','Community implementation','Impact reporting'], outcomes: ['Brand strengthened by purpose','Verifiable community impact','Stakeholder trust & reporting'] },
]

export default function Expertise() {
  const [active, setActive] = useState(0)
  return (
    <div className="bg-paper text-ink overflow-x-hidden">
      <Nav variant="dark" />
      <ExpertiseHero />
      <ExpertiseInteractive active={active} setActive={setActive} />
      <ExpertiseApproach />
      <ExpertiseCTA />
      <Footer dark />
    </div>
  )
}

function ExpertiseHero() {
  return (
    <section className="relative bg-ink text-white overflow-hidden px-6 lg:px-10 pt-[80px] pb-12 lg:pb-[80px]">
      <GrainOverlay opacity={0.045} />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(247,148,29,0.15) 0%, transparent 65%)' }}
      />
      <div className="relative z-10 max-w-container mx-auto">
        <div className="flex gap-2 font-mono text-[11px] tracking-[0.12em] uppercase text-white/30 flex-wrap">
          <span>Home</span><span>/</span><span className="text-brand">Core Expertise</span>
        </div>
        <motion.div variants={stagger} initial="hidden" animate="show"
          className="grid lg:grid-cols-[1.25fr_1fr] gap-10 lg:gap-20 items-end mt-10 lg:mt-12"
        >
          <motion.div variants={slideLeft}>
            <Eyebrow color="#f7941d">Our core expertise</Eyebrow>
            <h1 className="mt-5 font-semibold tracking-[-0.035em] leading-[1.02] text-white"
              style={{ fontSize: 'clamp(38px, 6.4vw, 92px)' }}>
              Six disciplines<span className="text-brand">.</span><br />
              Designed to<br />
              work <span className="italic font-display font-medium text-brand">together</span>.
            </h1>
          </motion.div>
          <motion.p variants={slideRight} className="text-[15px] lg:text-[17px] leading-[1.6] text-white/60">
            Digital World Corporate delivers focused, business-aligned solutions designed to
            strengthen organizational capability and support sustainable growth. Our core expertise
            is structured into clearly defined areas that provide transparency, depth, and
            measurable value to organizations.
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}

function ExpertiseInteractive({ active, setActive }: { active: number; setActive: (i: number) => void }) {
  const a = EXPERTISE[active]
  const d = DETAILS[active]

  return (
    <section className="px-6 lg:px-10 py-16 lg:py-24 bg-paper-2">
      <div className="max-w-container mx-auto grid lg:grid-cols-[1fr_1.6fr] gap-8 lg:gap-12">
        {/* Left rail */}
        <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={viewport}
          className="border-t-2 border-ink"
        >
          {EXPERTISE.map((e, i) => (
            <motion.button key={e.n} variants={fadeUp}
              onMouseEnter={() => setActive(i)}
              onClick={() => setActive(i)}
              className="w-full text-left py-5 border-b border-line-2 grid grid-cols-[36px_1fr_20px] gap-3 items-center group transition-colors duration-200"
              style={{ color: active === i ? '#0a0a0a' : '#6b6b6b' }}
            >
              <span className="font-mono text-[11px]" style={{ color: active === i ? '#d97906' : '#9a9a9a' }}>{e.n}</span>
              <span className="text-[15px] lg:text-[17px] tracking-[-0.01em]" style={{ fontWeight: active === i ? 600 : 500 }}>{e.title}</span>
              <span style={{ color: active === i ? '#d97906' : '#d0ccc4' }}><Arrow size={14} /></span>
            </motion.button>
          ))}
        </motion.div>

        {/* Right panel */}
        <motion.div key={active} variants={scaleIn} initial="hidden" animate="show"
          className="rounded-r-xl p-6 lg:p-12 lg:sticky top-[100px] shadow-lg"
          style={{ background: '#fff', border: '1px solid #e6e3dd' }}
        >
          <div className="flex justify-between items-center">
            <span className="font-mono text-[11px] tracking-[0.14em] text-brand-dark">Core Expertise · {a.n}</span>
            <span className="font-mono text-[11px] text-muted">0{active + 1} of 0{EXPERTISE.length}</span>
          </div>
          <h2 className="mt-5 font-semibold tracking-[-0.02em] leading-[1.15]"
            style={{ fontSize: 'clamp(22px, 3vw, 40px)' }}>{a.title}</h2>
          <p className="mt-4 text-ink-3 text-[15px] lg:text-[17px] leading-[1.65]">{a.body}</p>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
            <div>
              <div className="font-mono text-[10px] tracking-[0.14em] uppercase text-muted mb-4">What's included</div>
              <ul className="list-none p-0 grid gap-[10px]">
                {d.includes.map(x => (
                  <li key={x} className="grid grid-cols-[16px_1fr] gap-[10px] text-[14px] leading-[1.5]">
                    <span className="mt-[6px] w-1.5 h-1.5 rounded-full bg-brand flex-shrink-0" />{x}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <div className="font-mono text-[10px] tracking-[0.14em] uppercase text-muted mb-4">Expected outcomes</div>
              <ul className="list-none p-0 grid gap-[10px]">
                {d.outcomes.map(x => (
                  <li key={x} className="grid grid-cols-[16px_1fr] gap-[10px] text-[14px] leading-[1.5]">
                    <span className="mt-[6px] w-1.5 h-1.5 rounded-[2px] bg-ink flex-shrink-0" />{x}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-8 lg:mt-10 pt-6 border-t border-line">
            <Link to="/get-proposal"><Btn variant="ink" arrow>Request a proposal</Btn></Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function ExpertiseApproach() {
  const steps = [
    ['Discovery', 'We assess existing capability, map gaps, and identify organizational priorities.'],
    ['Design',    'Custom curriculum and delivery framework built around role, context, and objective.'],
    ['Deliver',   'Facilitated training, hands-on workshops, and executive sessions — on-site or hybrid.'],
    ['Measure',   'Structured evaluation, impact tracking, and reporting back to leadership.'],
  ]

  return (
    <section className="relative px-6 lg:px-10 py-16 lg:py-24 bg-ink text-white overflow-hidden">
      <GrainOverlay opacity={0.04} />
      <div className="relative z-10 max-w-container mx-auto">
        <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={viewport}
          className="grid lg:grid-cols-[180px_1fr] gap-6 lg:gap-16 mb-10 lg:mb-14"
        >
          <motion.div variants={slideLeft}>
            <div className="font-mono text-[11px] tracking-[0.14em] uppercase text-brand mb-2">§02</div>
            <div className="font-display text-[22px] font-semibold text-white">How we work</div>
          </motion.div>
          <motion.h2 variants={slideRight}
            className="font-medium tracking-[-0.02em] max-w-[720px] text-white"
            style={{ fontSize: 'clamp(28px, 4vw, 52px)' }}>
            From capability gap to measurable outcome.
          </motion.h2>
        </motion.div>

        <motion.div variants={staggerFast} initial="hidden" whileInView="show" viewport={viewport}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 relative"
        >
          <div className="absolute top-6 left-[6%] right-[6%] h-px bg-white/10 hidden lg:block" />
          {steps.map(([t, b], i) => (
            <motion.div key={t as string} variants={fadeUp} className="relative">
              <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-full border border-white/20 grid place-items-center font-display font-bold text-[16px] lg:text-[18px] relative z-10"
                style={{ background: i === 0 ? '#f7941d' : 'rgba(255,255,255,0.06)', color: i === 0 ? '#0a0a0a' : '#fff' }}>
                {i + 1}
              </div>
              <div className="mt-4 text-[16px] lg:text-[20px] font-semibold tracking-[-0.01em] text-white">{t}</div>
              <div className="mt-2 text-white/50 leading-[1.55] text-[13px] lg:text-[14px]">{b}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

function ExpertiseCTA() {
  return (
    <section className="px-4 lg:px-10 py-6 lg:py-10 bg-paper">
      <motion.div variants={scaleIn} initial="hidden" whileInView="show" viewport={viewport}
        className="max-w-container mx-auto relative overflow-hidden rounded-r-xl px-6 lg:px-16 py-12 lg:py-[72px] grid lg:grid-cols-[1.4fr_1fr] gap-8 lg:gap-12 items-center"
        style={{ background: 'linear-gradient(135deg, #f7941d 0%, #e8820a 100%)' }}
      >
        <GrainOverlay opacity={0.06} />
        <h2 className="relative z-10 font-medium tracking-[-0.02em] leading-[1.1] text-ink"
          style={{ fontSize: 'clamp(26px, 4vw, 48px)' }}>
          Need more than one discipline? That's how we usually work.
        </h2>
        <div className="relative z-10">
          <p className="text-ink/75 text-[15px] lg:text-[16px] leading-[1.6]">
            Every engagement is customized. Tell us the objective — we'll propose the combination that fits.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <Link to="/get-proposal"><Btn variant="ink" size="lg" arrow>Request a proposal</Btn></Link>
            <Link to="/case-studies"><Btn variant="ghost" size="lg">See case studies</Btn></Link>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
