import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Nav } from '../components/layout/Nav'
import { Footer } from '../components/layout/Footer'
import { Btn } from '../components/ui/Btn'
import { Arrow } from '../components/ui/Arrow'
import { GrainOverlay } from '../components/ui/GrainOverlay'
import { EXPERTISE, CASE_STUDIES, TEAM } from '../data'
import { fadeUp, slideLeft, slideRight, scaleIn, stagger, viewport } from '../lib/motion'

/* ─── Images (Exclusively Black Professionals / Nigerian Context) ─── */
const IMG = {
  heroMain: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1920&q=80', // Corporate boardroom team meeting
  heroSub1: 'https://images.unsplash.com/photo-1531384441138-2736e62e0919?auto=format&fit=crop&w=600&q=80',  // Black men collaborating
  case1:    'https://images.unsplash.com/photo-1556761175-5973dc0f32b7?auto=format&fit=crop&w=900&q=80',  // Corporate meeting
  case2:    'https://images.unsplash.com/photo-1573164574572-cb89e39749b4?auto=format&fit=crop&w=900&q=80',  // Man working at desk
  testiGroup: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=900&q=80', // Diverse black team
  testiProfile: 'https://images.unsplash.com/photo-1506803682981-6e718a9dd3ee?auto=format&fit=crop&w=256&q=80', // Smiling man portrait
}

export default function Home() {
  return (
    <div className="bg-[#f9f9f9] text-[#0a0a0a] min-h-screen font-sans selection:bg-[#f7941d] selection:text-white">
      <Nav variant="dark" />
      <BexonHero />
      <BexonLogos />
      <BexonStats />
      <BexonServices />
      <BexonProjects />
      <BexonTestimonial />
      <Footer dark />
    </div>
  )
}

/* ── Section 1: Hero ── */
function BexonHero() {
  return (
    <section className="relative bg-[#050505] min-h-screen overflow-hidden flex flex-col">
      <GrainOverlay opacity={0.04} />

      {/* Ambient glow */}
      <div className="absolute top-[-5%] left-[38%] w-[700px] h-[700px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(247,148,29,0.09) 0%, transparent 65%)' }}
      />

      {/* ── Main split grid ── */}
      <div className="relative z-10 flex-1 grid lg:grid-cols-[1.15fr_1fr]">

        {/* Left — content */}
        <div className="flex flex-col justify-between px-10 pt-[100px] pb-14 lg:px-16 lg:pt-[108px]">

          {/* Breadcrumb */}
          <div className="font-mono text-[11px] tracking-[0.14em] uppercase text-white/25 flex gap-3 items-center">
            <span>Digital World Corporate</span>
            <span>/</span>
            <span className="text-[#f7941d]">Corporate Training</span>
          </div>

          {/* Headline block */}
          <motion.div variants={stagger} initial="hidden" animate="show" className="mt-14 lg:mt-0 lg:my-auto">
            <motion.span
              variants={fadeUp}
              className="font-mono text-[11px] tracking-[0.14em] uppercase text-[#f7941d] mb-7 block"
            >
              Capacity Building · Strategic Consulting
            </motion.span>

            <motion.h1
              variants={fadeUp}
              className="font-display font-semibold tracking-[-0.035em] leading-[1.02] text-white"
              style={{ fontSize: 'clamp(48px, 5.8vw, 86px)' }}
            >
              Building the<br />
              <em className="not-italic text-[#f7941d]">capability</em><br />
              that moves<br />
              organizations.
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mt-8 text-[17px] leading-[1.65] text-white/50 max-w-[460px]"
            >
              Business-aligned training programs, strategic consulting, and leadership
              development that create measurable impact across your organization.
            </motion.p>

            <motion.div variants={fadeUp} className="mt-10 flex flex-wrap gap-4">
              <Link to="/case-studies">
                <Btn variant="primary" size="lg" arrow>Request a proposal</Btn>
              </Link>
              <Link to="/case-studies">
                <Btn variant="ghostDark" size="lg">See our work</Btn>
              </Link>
            </motion.div>
          </motion.div>

          {/* Bottom stats row */}
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="show"
            className="mt-14 pt-8 border-t border-white/10 grid grid-cols-3"
          >
            {[
              ['12+',  'Enterprise engagements'],
              ['500+', 'Professionals trained'],
              ['98%',  'Satisfaction rate'],
            ].map(([k, v], i) => (
              <motion.div
                key={v}
                variants={fadeUp}
                className={i > 0 ? 'pl-8 border-l border-white/10' : ''}
              >
                <div
                  className="font-display font-semibold tracking-[-0.02em] text-white leading-none"
                  style={{ fontSize: 'clamp(32px, 3vw, 44px)' }}
                >
                  {k}
                </div>
                <div className="mt-2 text-[12px] text-white/35 tracking-wide">{v}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Right — full-bleed image */}
        <motion.div
          variants={scaleIn}
          initial="hidden"
          animate="show"
          className="relative hidden lg:block"
        >
          <img
            src={IMG.heroMain}
            alt="Digital World professionals"
            className="absolute inset-0 w-full h-full object-cover object-top"
          />
          {/* Left blend */}
          <div className="absolute inset-0 pointer-events-none"
            style={{ background: 'linear-gradient(to right, #050505 0%, transparent 40%)' }}
          />
          {/* Bottom blend */}
          <div className="absolute inset-0 pointer-events-none"
            style={{ background: 'linear-gradient(to top, #050505 0%, transparent 28%)' }}
          />

          {/* Floating glass card — latest engagement */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0, transition: { delay: 0.9, duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] } }}
            className="absolute bottom-14 right-8 rounded-[18px] p-6 w-[270px]"
            style={{
              background: 'rgba(10,10,10,0.6)',
              backdropFilter: 'blur(24px)',
              border: '1px solid rgba(255,255,255,0.09)',
            }}
          >
            <div className="font-mono text-[10px] tracking-[0.14em] uppercase text-white/35 mb-3">
              Latest engagement
            </div>
            <div className="text-white font-semibold text-[15px] leading-[1.4]">
              Tech to Rural — CSR Digital Training for Youth
            </div>
            <div className="mt-4 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#f7941d] flex-shrink-0" />
              <span className="text-[12px] text-white/45">120+ youth trained · 6 tracks</span>
            </div>
          </motion.div>

          {/* Top-right label */}
          <div className="absolute top-10 right-8 font-mono text-[10px] tracking-[0.14em] uppercase text-white/20 text-right leading-[1.8]">
            Delivering impact<br />across Nigeria
          </div>
        </motion.div>
      </div>
    </section>
  )
}

/* ── Section 2: Trusted Logos — infinite marquee ── */
function BexonLogos() {
  const clients = [
    'LEVENE ENERGY', 'EGBIN ENERGY', 'MINISTRY OF WORKS',
    'TECHLAB NG', 'PARTNERS FOR GROWTH', 'OAK & LEDGER',
  ]
  // Duplicate so the loop is seamless: scroll -50% = exactly one copy's width
  const doubled = [...clients, ...clients]

  return (
    <section className="bg-white border-b border-gray-100 py-10 overflow-hidden">
      {/* Label */}
      <div className="flex justify-center mb-7">
        <div className="text-sm text-gray-500 rounded-full border border-gray-200 px-6 py-2 shadow-sm">
          Join Over{' '}
          <span className="text-[#f7941d] font-bold">1000+</span>{' '}
          Companies with Digital World Here
        </div>
      </div>

      {/* Marquee track */}
      <div className="relative">
        {/* Fade masks — left and right edges */}
        <div className="absolute left-0 top-0 bottom-0 w-40 z-10 pointer-events-none"
          style={{ background: 'linear-gradient(to right, #fff 0%, transparent 100%)' }}
        />
        <div className="absolute right-0 top-0 bottom-0 w-40 z-10 pointer-events-none"
          style={{ background: 'linear-gradient(to left, #fff 0%, transparent 100%)' }}
        />

        {/* Scrolling row */}
        <div className="flex animate-marquee">
          {doubled.map((c, i) => (
            <div
              key={i}
              className="flex-shrink-0 flex items-center gap-4 mx-10"
            >
              {/* Dot separator */}
              <span className="w-1.5 h-1.5 rounded-full bg-[#f7941d]/40 flex-shrink-0" />
              <span className="font-display font-bold text-[17px] tracking-[0.06em] text-black/30 hover:text-black/60 transition-colors duration-300 whitespace-nowrap">
                {c}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ── Section 3: Floating Stats Cards (Bexon Image 5 layout) ── */
function BexonStats() {
  return (
    <section className="bg-[#f9f9f9] py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        
        <div className="grid lg:grid-cols-[1fr_1.5fr] gap-12 items-center mb-16">
          <motion.div variants={slideLeft} initial="hidden" whileInView="show" viewport={viewport}>
            <div className="inline-block bg-white text-[#f7941d] font-mono text-xs font-bold tracking-widest px-3 py-1 mb-6 shadow-sm border border-gray-100 uppercase">
              Get to know us
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold tracking-tight text-[#050505] leading-tight">
              Driving into Excellence & Innovation: Your Trusted Partner.
            </h2>
          </motion.div>
        </div>

        <motion.div 
          variants={stagger} initial="hidden" whileInView="show" viewport={viewport}
          className="grid md:grid-cols-3 gap-6"
        >
          {/* Card 1 */}
          <motion.div variants={fadeUp} className="bg-white rounded-3xl p-10 shadow-sm border border-gray-100 flex flex-col justify-between aspect-square">
            <div className="flex justify-between items-start">
              <div className="w-16 h-16 rounded-full bg-orange-50 flex items-center justify-center text-[#f7941d]">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
              <span className="text-gray-400 font-bold text-xl">01.</span>
            </div>
            <div>
              <div className="text-gray-500 mb-2">Projects Completed.</div>
              <div className="text-6xl font-bold text-[#050505]">93%</div>
            </div>
          </motion.div>

          {/* Card 2 (Image Card) */}
          <motion.div variants={fadeUp} className="bg-[#f7941d] rounded-3xl p-10 shadow-lg relative overflow-hidden text-white flex flex-col justify-end aspect-square">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=900&q=80')] bg-cover bg-center mix-blend-overlay opacity-20" />
            <div className="relative z-10">
              <div className="flex -space-x-4 mb-6">
                {[1,2,3].map(i => (
                  <img key={i} className="w-14 h-14 rounded-full border-4 border-[#f7941d] object-cover" src={IMG.testiProfile} alt="User" />
                ))}
                <div className="w-14 h-14 rounded-full border-4 border-[#f7941d] bg-black flex items-center justify-center font-bold">+</div>
              </div>
              <h3 className="text-2xl font-bold leading-tight">We have 100+ happy customers.</h3>
            </div>
          </motion.div>

          {/* Card 3 */}
          <motion.div variants={fadeUp} className="bg-white rounded-3xl p-10 shadow-sm border border-gray-100 flex flex-col justify-between aspect-square">
            <div className="flex justify-between items-start">
              <div className="w-16 h-16 rounded-full bg-orange-50 flex items-center justify-center text-[#f7941d]">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
              </div>
              <span className="text-gray-400 font-bold text-xl">02.</span>
            </div>
            <div>
              <div className="text-gray-500 mb-2">Reach Worldwide</div>
              <div className="text-6xl font-bold text-[#050505]">20M</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

/* ── Section 4: Solutions (Dark theme with grid cards from Image 4) ── */
function BexonServices() {
  return (
    <section className="bg-[#050505] text-white py-24 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#f7941d]/5 blur-[150px] rounded-full" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10 grid lg:grid-cols-[1fr_2fr] gap-16">
        
        {/* Left Sticky Title */}
        <motion.div variants={slideLeft} initial="hidden" whileInView="show" viewport={viewport} className="lg:sticky top-32 h-fit">
          <div className="inline-block bg-white/10 text-[#f7941d] font-mono text-xs font-bold tracking-widest px-3 py-1 mb-6 rounded uppercase">
            Our Solutions
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold tracking-tight leading-tight mb-8">
            Tailored Business Solutions for our Corporates.
          </h2>
          <Btn className="bg-[#f7941d] hover:bg-[#e0861a] text-black font-semibold px-6 py-3 rounded-full flex items-center w-fit gap-2">
            More Services <Arrow className="w-4 h-4 rotate-45" />
          </Btn>
        </motion.div>

        {/* Right Cards Grid */}
        <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={viewport} className="grid md:grid-cols-2 gap-6">
          {EXPERTISE.slice(0,4).map((exp, i) => (
            <motion.div 
              key={i} variants={fadeUp}
              className="bg-[#0a0a0a] border border-white/10 rounded-2xl p-8 hover:border-[#f7941d]/50 transition-colors group"
            >
              <div className="w-14 h-14 bg-[#111] rounded-xl flex items-center justify-center mb-6 text-[#f7941d] group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"><path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" /></svg>
              </div>
              <h3 className="text-xl font-bold mb-4">{exp.title}</h3>
              <p className="text-white/50 text-sm leading-relaxed mb-6">
                {exp.body}
              </p>
              <ul className="space-y-2">
                {['Expansion Strategies', 'Operational Efficiency', 'Competitive Edge'].map((bullet, idx) => (
                  <li key={idx} className="flex items-center text-sm text-white/70">
                    <span className="text-[#f7941d] mr-2">»</span> {bullet}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}

/* ── Section 5: Proud Projects (Light gallery from Image 3) ── */
function BexonProjects() {
  return (
    <section className="bg-white py-24 text-center">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="inline-block text-[#f7941d] font-mono text-xs font-bold tracking-widest px-3 py-1 mb-4 uppercase border border-gray-200 rounded">
          Proud Projects
        </div>
        <h2 className="text-4xl lg:text-5xl font-bold tracking-tight text-[#050505] mb-16">
          Breaking Boundaries, Building <span className="text-[#f7941d]">Dreams.</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          <motion.div whileHover={{ y: -10 }} className="h-[400px] rounded-3xl overflow-hidden relative shadow-lg">
            <img src={IMG.case1} alt="Project 1" className="w-full h-full object-cover" />
          </motion.div>
          <motion.div whileHover={{ y: -10 }} className="h-[450px] -mt-6 rounded-3xl overflow-hidden relative shadow-lg">
            <img src={IMG.case2} alt="Project 2" className="w-full h-full object-cover" />
          </motion.div>
          <motion.div whileHover={{ y: -10 }} className="h-[400px] rounded-3xl overflow-hidden relative shadow-lg">
            <img src={IMG.testiGroup} alt="Project 3" className="w-full h-full object-cover" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

/* ── Section 6: Testimonials (Split quote card from Image 2) ── */
function BexonTestimonial() {
  return (
    <section className="bg-[#f0f2f5] py-24">
      <div className="max-w-6xl mx-auto px-6 lg:px-10 grid md:grid-cols-2 gap-10">
        
        {/* Left Image Card */}
        <motion.div variants={slideLeft} initial="hidden" whileInView="show" viewport={viewport} className="relative rounded-3xl overflow-hidden h-[500px] shadow-xl">
          <img src={IMG.testiGroup} alt="Customers" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute top-10 left-10">
            <h3 className="text-4xl font-bold text-white leading-tight">Hear from Our<br/><span className="text-[#f7941d]">Customer</span></h3>
          </div>
          {/* Orange Stats overlay */}
          <div className="absolute bottom-0 right-0 bg-[#f7941d] p-8 rounded-tl-3xl text-white">
            <div className="text-6xl font-bold mb-2">4.9</div>
            <div className="flex gap-1 text-white mb-2 text-xl">★★★★★</div>
            <div className="text-sm font-medium">(80+ Clients Reviews)</div>
          </div>
        </motion.div>

        {/* Right Quote Card */}
        <motion.div variants={slideRight} initial="hidden" whileInView="show" viewport={viewport} className="bg-white rounded-3xl p-12 shadow-xl flex flex-col justify-center relative">
          <div className="text-[120px] leading-none text-[#f7941d] font-serif absolute top-4 left-8 opacity-20">"</div>
          <p className="text-gray-600 text-xl leading-relaxed relative z-10 mb-10 mt-8">
            "The results we've seen after partnering with Digital World are beyond our expectations. They not only understood our vision but also brought new ideas to the table that have taken our business to the next level."
          </p>
          
          <div className="flex items-center gap-4 pt-8 border-t border-gray-100">
            <img src={IMG.testiProfile} alt="Client" className="w-16 h-16 rounded-full object-cover shadow-md" />
            <div>
              <div className="font-bold text-xl text-[#050505]">Ralph Edwards</div>
              <div className="text-gray-500 text-sm">Co. Founder</div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  )
}