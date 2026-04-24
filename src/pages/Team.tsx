import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Nav } from '../components/layout/Nav'
import { Footer } from '../components/layout/Footer'
import { Eyebrow } from '../components/ui/Eyebrow'
import { Btn } from '../components/ui/Btn'
import { GrainOverlay } from '../components/ui/GrainOverlay'
import { TEAM } from '../data'
import { fadeUp, slideLeft, slideRight, scaleIn, stagger, staggerFast, viewport } from '../lib/motion'

const TONE_MAP = {
  warm:  { bg: '#f0ece5', dot: '#c9bfaa', fg: '#8a7e6b' },
  cool:  { bg: '#e8ecef', dot: '#b7c2cb', fg: '#6d7a84' },
  ink:   { bg: '#1a1a1a', dot: '#3a3a3a', fg: '#8a8a8a' },
  brand: { bg: '#fef3e3', dot: '#f7c87a', fg: '#b26a08' },
  paper: { bg: '#fafaf7', dot: '#dcd8d0', fg: '#9a9a9a' },
}

export default function Team() {
  const [open, setOpen] = useState<number | null>(null)
  return (
    <div className="bg-paper text-ink overflow-x-hidden">
      <Nav variant="dark" />
      <TeamHero />
      <TeamGrid open={open} setOpen={setOpen} />
      <JoinUs />
      <Footer dark />
    </div>
  )
}

function TeamHero() {
  return (
    <section className="relative bg-ink text-white overflow-hidden px-6 lg:px-10 pt-[80px] pb-12 lg:pb-[80px]">
      <GrainOverlay opacity={0.045} />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(247,148,29,0.14) 0%, transparent 65%)' }}
      />
      <div className="relative z-10 max-w-container mx-auto">
        <div className="flex gap-2 font-mono text-[11px] tracking-[0.12em] uppercase text-white/30 flex-wrap">
          <span>Home</span><span>/</span><span className="text-brand">Meet the Team</span>
        </div>
        <motion.div variants={stagger} initial="hidden" animate="show"
          className="grid lg:grid-cols-[1.25fr_1fr] gap-10 lg:gap-20 items-end mt-10 lg:mt-12"
        >
          <motion.div variants={slideLeft}>
            <Eyebrow color="#f7941d">Meet the team</Eyebrow>
            <h1 className="mt-5 font-semibold tracking-[-0.035em] leading-[1.02] text-white"
              style={{ fontSize: 'clamp(38px, 6.4vw, 92px)' }}>
              Practitioners<br />
              who have done<br />
              the <span className="italic font-display font-medium text-brand">work</span>
              <span className="text-brand">.</span>
            </h1>
          </motion.div>
          <motion.p variants={slideRight} className="text-[15px] lg:text-[17px] leading-[1.6] text-white/60">
            Our team blends strategic thinking, execution discipline, and human-centered design.
            Industry experts, senior practitioners, and curriculum designers with real-world
            experience across business, technology, and operations.
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}

function TeamGrid({ open, setOpen }: { open: number | null; setOpen: (i: number | null) => void }) {
  return (
    <section className="px-6 lg:px-10 py-16 lg:py-24 bg-paper">
      <div className="max-w-container mx-auto">
        <motion.div variants={staggerFast} initial="hidden" whileInView="show" viewport={viewport}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-7"
        >
          {TEAM.map((m, i) => {
            const isOpen = open === i
            const t = TONE_MAP[m.tone]
            return (
              <motion.article
                key={m.name}
                layout
                variants={fadeUp}
                className={[
                  'border border-line rounded-r-xl overflow-hidden bg-paper hover:shadow-lg transition-shadow duration-300',
                  isOpen ? 'col-span-1 sm:col-span-2 lg:col-span-3' : '',
                ].join(' ')}
              >
                <div className={['grid', isOpen ? 'lg:grid-cols-[1fr_1.4fr]' : ''].join(' ')}>
                  {/* Photo area */}
                  <div className="relative">
                    <div className="w-full grid place-items-center relative overflow-hidden"
                      style={{
                        aspectRatio: isOpen ? '16/7' : '3/4',
                        background: t.bg,
                        backgroundImage: `radial-gradient(${t.dot} 1px, transparent 1px)`,
                        backgroundSize: '20px 20px',
                      }}
                    >
                      <div className="font-display font-bold text-[72px] leading-none select-none"
                        style={{ color: t.fg, opacity: 0.18 }}>{m.initials}</div>
                      <div className="absolute w-16 h-16 lg:w-20 lg:h-20 rounded-full grid place-items-center font-display font-bold text-[22px] lg:text-[26px]"
                        style={{ background: 'rgba(255,255,255,0.7)', backdropFilter: 'blur(10px)', color: t.fg }}>
                        {m.initials}
                      </div>
                    </div>
                    <div className="absolute left-3 top-3 font-mono text-[10px] tracking-[0.12em] uppercase bg-paper/90 px-[10px] py-1 rounded-full border border-line"
                      style={{ backdropFilter: 'blur(8px)' }}>
                      0{i + 1} / 0{TEAM.length}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5 lg:p-6" style={isOpen ? { paddingLeft: 0 } : {}}>
                    <div style={isOpen ? { padding: '28px 28px 28px 0' } : { padding: 20 }}>
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-semibold tracking-[-0.01em] leading-[1.15]"
                            style={{ fontSize: isOpen ? 24 : 18 }}>{m.name}</h3>
                          <div className="mt-1.5 text-[12px] text-brand-dark font-mono tracking-[0.04em]">{m.role}</div>
                        </div>
                        <button onClick={() => setOpen(isOpen ? null : i)}
                          className="w-8 h-8 lg:w-9 lg:h-9 rounded-full border border-line-2 grid place-items-center text-[16px] font-light transition-all duration-200 hover:border-ink flex-shrink-0"
                          style={{ background: isOpen ? '#0a0a0a' : 'transparent', color: isOpen ? '#fff' : '#0a0a0a' }}>
                          {isOpen ? '−' : '+'}
                        </button>
                      </div>

                      <AnimatePresence>
                        {isOpen && (
                          <motion.div
                            initial={{ opacity: 0, y: 16 }}
                            animate={{ opacity: 1, y: 0, transition: { duration: 0.4, delay: 0.1 } }}
                            exit={{ opacity: 0, y: 8 }}
                            className="mt-5"
                          >
                            <p className="text-[14px] lg:text-[15px] leading-[1.65] text-ink-3">{m.bio}</p>
                            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
                              <div>
                                <div className="font-mono text-[11px] tracking-[0.14em] uppercase text-muted mb-3">Core expertise</div>
                                <ul className="list-none p-0 grid gap-2">
                                  {m.expertise.map(e => (
                                    <li key={e} className="grid grid-cols-[16px_1fr] gap-[10px] text-[13px]">
                                      <span className="mt-[6px] w-1.5 h-1.5 rounded-full bg-brand flex-shrink-0" />{e}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                              <div>
                                <div className="font-mono text-[11px] tracking-[0.14em] uppercase text-muted mb-3">Off the clock</div>
                                <p className="text-[13px] leading-[1.6] text-ink-3">{m.off}</p>
                              </div>
                            </div>
                            <blockquote className="mt-6 pt-6 border-t border-line font-display font-medium tracking-[-0.01em] italic text-ink leading-[1.4] m-0 text-[16px] lg:text-[18px]">
                              <span className="text-brand mr-1.5">"</span>{m.quote}<span className="text-brand">"</span>
                            </blockquote>
                          </motion.div>
                        )}
                      </AnimatePresence>

                      {!isOpen && (
                        <p className="mt-3 text-[13px] text-ink-3 leading-[1.55] overflow-hidden"
                          style={{ display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical' }}>
                          {m.bio}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </motion.article>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

function JoinUs() {
  return (
    <section className="px-4 lg:px-10 py-6 lg:py-10">
      <motion.div variants={scaleIn} initial="hidden" whileInView="show" viewport={viewport}
        className="max-w-container mx-auto relative overflow-hidden rounded-r-xl px-6 lg:px-16 py-12 lg:py-[72px] grid lg:grid-cols-[1.4fr_1fr] gap-8 lg:gap-12 items-center"
        style={{ background: 'linear-gradient(135deg, #f7941d 0%, #e8820a 100%)' }}
      >
        <GrainOverlay opacity={0.06} />
        <h2 className="relative z-10 font-medium tracking-[-0.02em] leading-[1.1] text-ink"
          style={{ fontSize: 'clamp(26px, 4vw, 48px)' }}>
          The team grows with the work. Interested in joining us?
        </h2>
        <div className="relative z-10">
          <p className="text-ink/75 text-[15px] lg:text-[16px] leading-[1.6]">
            We're always looking for practitioners who can combine strategic thinking with hands-on delivery.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <Btn variant="ink" size="lg" arrow>See open roles</Btn>
            <Btn variant="ghost" size="lg">Send a CV</Btn>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
