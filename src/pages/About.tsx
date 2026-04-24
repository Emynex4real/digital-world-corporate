import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Nav } from '../components/layout/Nav'
import { Footer } from '../components/layout/Footer'
import { Eyebrow } from '../components/ui/Eyebrow'
import { Btn } from '../components/ui/Btn'
import { GrainOverlay } from '../components/ui/GrainOverlay'
import { fadeUp, slideLeft, slideRight, scaleIn, stagger, staggerFast, viewport } from '../lib/motion'

const IMG = {
  hero: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1200&q=80',
}

export default function About() {
  return (
    <div className="bg-paper text-ink overflow-x-hidden">
      <Nav variant="dark" />
      <AboutHero />
      <AboutLede />
      <VisionMission />
      <WhyUs />
      <AboutCTA />
      <Footer dark />
    </div>
  )
}

function AboutHero() {
  return (
    <section className="relative bg-ink text-white overflow-hidden">
      <GrainOverlay opacity={0.045} />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(247,148,29,0.14) 0%, transparent 65%)' }}
      />
      <div className="relative z-10 max-w-container mx-auto px-6 lg:px-10 pt-[80px] pb-12 lg:pb-[80px]">
        <div className="flex gap-2 font-mono text-[11px] tracking-[0.12em] uppercase text-white/30 flex-wrap">
          <span>Home</span><span>/</span>
          <span className="text-brand">About</span>
        </div>

        <div className="grid lg:grid-cols-[1.2fr_1fr] gap-10 lg:gap-16 items-center mt-10 lg:mt-12">
          <motion.div variants={stagger} initial="hidden" animate="show">
            <motion.div variants={fadeUp}>
              <Eyebrow color="#f7941d">About Digital World Corporate</Eyebrow>
            </motion.div>
            <motion.h1
              variants={fadeUp}
              className="mt-5 font-semibold tracking-[-0.035em] leading-[1.02] text-white"
              style={{ fontSize: 'clamp(38px, 6vw, 92px)' }}
            >
              A capability<br />
              partner for<br />
              <span className="italic font-display font-medium text-brand">enterprise</span>
              <span className="text-brand">.</span>
            </motion.h1>
          </motion.div>

          <motion.div variants={scaleIn} initial="hidden" animate="show">
            <div className="relative overflow-hidden rounded-r-xl" style={{ aspectRatio: '4/3' }}>
              <img src={IMG.hero} alt="Corporate workspace" className="w-full h-full object-cover" style={{ opacity: 0.85 }} />
              <div className="absolute inset-0 bg-gradient-to-tl from-ink/40 to-transparent" />
              <div
                className="absolute bottom-4 left-4 right-4 px-4 py-3 rounded-[12px]"
                style={{ background: 'rgba(10,10,10,0.55)', backdropFilter: 'blur(14px)', border: '1px solid rgba(255,255,255,0.12)' }}
              >
                <p className="text-[13px] lg:text-[15px] leading-[1.6] text-white/85">
                  A professional digital capacity and enterprise solutions organization — strengthening internal capability, improving operational efficiency, and enabling sustainable growth.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function AboutLede() {
  return (
    <section className="px-6 lg:px-10 py-16 lg:py-24 bg-paper">
      <div className="max-w-[1100px] mx-auto grid lg:grid-cols-[180px_1fr] gap-8 lg:gap-16">
        <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={viewport}>
          <div className="font-mono text-[11px] tracking-[0.14em] uppercase text-brand-dark mb-2">§01</div>
          <div className="font-display text-[22px] font-semibold tracking-[-0.01em]">The story</div>
          <div className="mt-2 text-muted text-[13px]">Why we exist</div>
        </motion.div>

        <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={viewport}>
          <motion.p
            variants={fadeUp}
            className="font-display font-medium leading-[1.32] tracking-[-0.01em] text-ink"
            style={{ fontSize: 'clamp(18px, 2.4vw, 30px)' }}
          >
            <span className="float-left font-semibold text-brand mr-3"
              style={{ fontSize: '4em', lineHeight: 0.88, marginTop: 4 }}>D</span>
            igital World Corporate was founded to address a persistent challenge across corporate
            and institutional environments: the growing disconnect between business strategy and
            digital execution. While organizations adopt new systems, platforms, and data tools,
            many teams lack the practical skills, governance frameworks, and strategic alignment
            required to extract real value.
          </motion.p>
          <motion.p variants={fadeUp} className="mt-8 text-[15px] lg:text-[17px] leading-[1.7] text-ink-3">
            Our approach is grounded in partnership, practicality, and performance. We believe
            digital capability must be built within the context of each organization's structure,
            culture, and goals. We combine advisory insight, structured training, and implementation
            support to ensure that learning and transformation efforts lead to measurable outcomes —
            moving organizations from intent to execution with clarity and confidence.
          </motion.p>
          <motion.p variants={fadeUp} className="mt-6 text-[15px] lg:text-[17px] leading-[1.7] text-ink-3">
            What distinguishes Digital World Corporate is our deep understanding of enterprise
            realities. We do not offer generic digital interventions. Instead, we deliver customized
            solutions that reflect industry context, operational maturity, and strategic priorities.
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}

function VisionMission() {
  const cards = [
    { tag: 'Vision', title: 'Digitally capable solutions', body: 'To build digitally capable solutions that confidently drive innovation, efficiency, and sustainable growth across industries and regions.', tone: 'paper' as const },
    { tag: 'Mission', title: 'Business-aligned training & advisory', body: 'To deliver business-aligned digital training, advisory, and capacity-building solutions that equip corporate teams with practical skill, strategic insight, and execution readiness required to succeed in a technology-driven economy.', tone: 'brand' as const },
    { tag: 'Brand Promise', title: 'Clear outcomes. Relevant expertise.', body: 'Consistent value. Every engagement is designed around client objective, delivered by experienced professionals, and focused on measurable impact that supports long-term organizational performance.', tone: 'ink' as const },
  ]

  return (
    <section className="relative px-6 lg:px-10 py-16 lg:py-24 bg-ink overflow-hidden">
      <GrainOverlay opacity={0.04} />
      <div className="relative z-10 max-w-container mx-auto">
        <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={viewport}
          className="grid lg:grid-cols-[180px_1fr] gap-6 lg:gap-16 mb-10 lg:mb-14"
        >
          <motion.div variants={slideLeft}>
            <div className="font-mono text-[11px] tracking-[0.14em] uppercase text-brand mb-2">§02</div>
            <div className="font-display text-[22px] font-semibold text-white">What drives us</div>
          </motion.div>
          <motion.h2 variants={slideRight}
            className="font-medium tracking-[-0.02em] max-w-[720px] text-white"
            style={{ fontSize: 'clamp(28px, 4vw, 52px)' }}
          >
            Vision, mission, and the brand promise we hold ourselves to.
          </motion.h2>
        </motion.div>

        <motion.div variants={staggerFast} initial="hidden" whileInView="show" viewport={viewport}
          className="grid grid-cols-1 lg:grid-cols-3 gap-5"
        >
          {cards.map((c, i) => {
            const isInk   = c.tone === 'ink'
            const isBrand = c.tone === 'brand'
            return (
              <motion.div key={c.tag} variants={fadeUp}
                whileHover={{ y: -6, transition: { duration: 0.25 } }}
                className="rounded-r-lg p-7 lg:p-9 flex flex-col gap-5"
                style={{
                  background: isInk ? 'rgba(255,255,255,0.06)' : isBrand ? '#f7941d' : 'rgba(255,255,255,0.04)',
                  border: isInk ? '1px solid rgba(255,255,255,0.1)' : isBrand ? 'none' : '1px solid rgba(255,255,255,0.08)',
                  backdropFilter: !isBrand ? 'blur(16px)' : 'none',
                }}
              >
                <div className="flex justify-between items-center">
                  <span className="font-mono text-[11px] tracking-[0.14em] uppercase"
                    style={{ color: isBrand ? '#1a1a1a' : '#f7941d' }}>— {c.tag}</span>
                  <span className="font-mono text-[11px] tracking-[0.12em] opacity-50 text-white">0{i + 1}</span>
                </div>
                <h3 className="text-[22px] lg:text-[26px] font-semibold tracking-[-0.01em] leading-[1.15]"
                  style={{ color: isBrand ? '#0a0a0a' : '#fff' }}>{c.title}</h3>
                <p className="text-[14px] lg:text-[15px] leading-[1.6] flex-1"
                  style={{ color: isBrand ? 'rgba(10,10,10,0.75)' : 'rgba(255,255,255,0.6)' }}>{c.body}</p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

function WhyUs() {
  const reasons = [
    ['Proven Experience', 'Hands-on experience working with corporate organizations, institutions, and development-focused entities across sectors. We understand enterprise structure, decision-making, and operational reality.'],
    ['Tailored, Business-Aligned Solutions', 'Every engagement is customized — built around organizational objectives, workforce maturity, and industry context. Ensuring relevance, adoption, and sustained value.'],
    ['Measurable Impact & Accountability', 'Assessment, evaluation, and reporting are integrated into every engagement so clients gain clear visibility into impact at both individual and organizational level.'],
    ['Deep Industry & Sector Insight', 'Industry-informed perspective applied to every solution — allowing us to anticipate challenges, manage change, and support strategic decision-making.'],
    ['Partnership-Driven Approach', 'We work as a long-term partner, not a transactional provider. Our model ensures alignment with leadership and sustained capability beyond the engagement lifecycle.'],
  ]

  return (
    <section className="px-6 lg:px-10 py-16 lg:py-24 bg-paper">
      <div className="max-w-container mx-auto">
        <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={viewport}
          className="grid lg:grid-cols-[180px_1fr] gap-6 lg:gap-16 mb-10 lg:mb-14"
        >
          <motion.div variants={slideLeft}>
            <div className="font-mono text-[11px] tracking-[0.14em] uppercase text-brand-dark mb-2">§03</div>
            <div className="font-display text-[22px] font-semibold">Why choose us</div>
          </motion.div>
          <motion.h2 variants={slideRight}
            className="font-medium tracking-[-0.02em] max-w-[720px]"
            style={{ fontSize: 'clamp(28px, 4vw, 52px)' }}
          >
            Strategic insight. Practical execution. Accountability.
          </motion.h2>
        </motion.div>

        <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={viewport} className="border-t-2 border-ink">
          {reasons.map(([t, b], i) => (
            <motion.div key={t} variants={fadeUp}
              className="py-6 lg:py-8 border-b border-line group hover:bg-paper-2 transition-colors duration-200 px-2 -mx-2 rounded"
            >
              <div className="grid lg:grid-cols-[80px_1fr_2fr] gap-3 lg:gap-10">
                <div className="font-mono text-[12px] text-brand-dark font-medium">0{i + 1}</div>
                <h3 className="text-[17px] lg:text-[20px] font-semibold tracking-[-0.01em] group-hover:text-brand-dark transition-colors">{t}</h3>
                <p className="text-ink-3 text-[14px] lg:text-[16px] leading-[1.6] mt-1 lg:mt-0">{b}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

function AboutCTA() {
  return (
    <section className="px-4 lg:px-10 py-6 lg:py-10">
      <motion.div variants={scaleIn} initial="hidden" whileInView="show" viewport={viewport}
        className="max-w-container mx-auto relative overflow-hidden rounded-r-xl px-6 lg:px-16 py-12 lg:py-[72px] grid lg:grid-cols-[1.4fr_1fr] gap-8 lg:gap-12 items-center"
        style={{ background: 'linear-gradient(135deg, #f7941d 0%, #e8820a 100%)' }}
      >
        <GrainOverlay opacity={0.06} />
        <h2 className="relative z-10 font-medium tracking-[-0.02em] leading-[1.1] text-ink"
          style={{ fontSize: 'clamp(26px, 4vw, 48px)' }}>
          Let's design the program your organization actually needs.
        </h2>
        <div className="relative z-10">
          <p className="text-ink/75 text-[15px] lg:text-[16px] leading-[1.6]">
            Share your capability objectives. We'll come back with a structured, business-aligned proposal.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <Link to="/book-call"><Btn variant="ink" size="lg" arrow>Book a discovery call</Btn></Link>
            <Link to="/case-studies"><Btn variant="ghost" size="lg">See our work</Btn></Link>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
