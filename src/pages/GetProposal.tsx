import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Nav } from '../components/layout/Nav'
import { Footer } from '../components/layout/Footer'
import { Eyebrow } from '../components/ui/Eyebrow'
import { Btn } from '../components/ui/Btn'
import { GrainOverlay } from '../components/ui/GrainOverlay'
import { EXPERTISE } from '../data'
import { fadeUp, slideLeft, slideRight, scaleIn, stagger, staggerFast, viewport } from '../lib/motion'

const BUDGETS = ['Under ₦1M', '₦1M – ₦5M', '₦5M – ₦15M', '₦15M – ₦50M', '₦50M+', 'Not sure yet']
const TIMELINES = ['ASAP', 'Within 1 month', '1–3 months', '3–6 months', 'Flexible']

export default function GetProposal() {
  const [selectedAreas, setSelectedAreas] = useState<string[]>([])
  const [selectedBudget, setSelectedBudget] = useState<string | null>(null)
  const [selectedTimeline, setSelectedTimeline] = useState<string | null>(null)
  const [submitted, setSubmitted] = useState(false)

  const toggleArea = (title: string) =>
    setSelectedAreas(prev =>
      prev.includes(title) ? prev.filter(a => a !== title) : [...prev, title]
    )

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className="bg-paper text-ink">
      <Nav variant="dark" />
      <ProposalHero />
      <ProposalForm
        selectedAreas={selectedAreas}
        toggleArea={toggleArea}
        selectedBudget={selectedBudget}
        setSelectedBudget={setSelectedBudget}
        selectedTimeline={selectedTimeline}
        setSelectedTimeline={setSelectedTimeline}
        submitted={submitted}
        onSubmit={handleSubmit}
      />
      <ProposalProcess />
      <Footer dark />
    </div>
  )
}

function ProposalHero() {
  return (
    <section className="relative bg-ink text-white overflow-hidden">
      <GrainOverlay opacity={0.045} />
      <div className="absolute top-0 left-0 w-[600px] h-[600px] pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(247,148,29,0.11) 0%, transparent 65%)' }}
      />
      <div className="relative z-10 max-w-container mx-auto px-10 pt-[80px] pb-[72px]">
        <div className="flex gap-3.5 font-mono text-[11px] tracking-[0.14em] uppercase text-white/30">
          <span>Home</span><span>/</span><span className="text-brand">Get a Proposal</span>
        </div>
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="show"
          className="grid grid-cols-[1.25fr_1fr] gap-20 items-end mt-12"
        >
          <motion.div variants={slideLeft}>
            <Eyebrow color="#f7941d">Request a proposal</Eyebrow>
            <h1
              className="mt-5 font-semibold tracking-[-0.035em] leading-[1.02] text-white"
              style={{ fontSize: 'clamp(48px, 5.8vw, 84px)' }}
            >
              Tell us what you<br />
              need. We'll design<br />
              the <em className="not-italic text-brand">solution</em>.
            </h1>
          </motion.div>
          <motion.p variants={slideRight} className="text-[17px] leading-[1.65] text-white/55">
            Share your objectives, constraints, and context — and we'll respond with a tailored
            proposal within 3 business days. No templates, no guesswork.
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerFast}
          initial="hidden"
          animate="show"
          className="mt-14 pt-6 border-t border-white/10 grid grid-cols-3 gap-10"
        >
          {[
            ['3 days',   'Proposal turnaround'],
            ['Tailored', 'No one-size-fits-all'],
            ['Free',     'Zero cost to request'],
          ].map(([k, v]) => (
            <motion.div key={v} variants={fadeUp}>
              <div className="font-display text-[40px] font-semibold tracking-[-0.02em] text-white leading-none">{k}</div>
              <div className="mt-2 text-[13px] text-white/45">{v}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

interface FormProps {
  selectedAreas: string[]
  toggleArea: (t: string) => void
  selectedBudget: string | null
  setSelectedBudget: (b: string | null) => void
  selectedTimeline: string | null
  setSelectedTimeline: (t: string | null) => void
  submitted: boolean
  onSubmit: (e: React.FormEvent) => void
}

function ProposalForm({
  selectedAreas, toggleArea,
  selectedBudget, setSelectedBudget,
  selectedTimeline, setSelectedTimeline,
  submitted, onSubmit,
}: FormProps) {
  if (submitted) {
    return (
      <section className="px-10 py-24 bg-paper">
        <motion.div variants={scaleIn} initial="hidden" animate="show" className="max-w-[640px] mx-auto text-center">
          <div className="w-16 h-16 rounded-full bg-brand/10 flex items-center justify-center mx-auto mb-6">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#f7941d" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </div>
          <h2 className="font-display text-[36px] font-semibold tracking-[-0.02em] text-ink">
            Proposal request received.
          </h2>
          <p className="mt-4 text-[17px] leading-[1.65] text-ink-3">
            Our team will review your requirements and send a tailored proposal to your inbox within 3 business days.
          </p>
          <div className="mt-8 flex gap-3 justify-center">
            <Link to="/"><Btn variant="ink" size="lg" arrow>Back to home</Btn></Link>
            <Link to="/case-studies"><Btn variant="ghost" size="lg">See case studies</Btn></Link>
          </div>
        </motion.div>
      </section>
    )
  }

  return (
    <section className="px-10 py-20 bg-paper">
      <div className="max-w-container mx-auto">
        <motion.form
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          onSubmit={onSubmit}
          className="grid grid-cols-[1fr_1.15fr] gap-16 items-start"
        >
          {/* Left column */}
          <div className="grid gap-8">
            {/* Contact */}
            <motion.div variants={fadeUp} className="rounded-r-xl border border-line bg-white p-8 shadow-sm">
              <div className="font-mono text-[11px] tracking-[0.14em] uppercase text-muted mb-6">01 — Contact</div>
              <div className="grid grid-cols-2 gap-5">
                <Field label="First name" name="first" required placeholder="Emeka" />
                <Field label="Last name" name="last" required placeholder="Okonkwo" />
              </div>
              <div className="mt-5"><Field label="Work email" name="email" type="email" required placeholder="emeka@company.ng" /></div>
              <div className="mt-5"><Field label="Phone number" name="phone" type="tel" placeholder="+234 800 000 0000" /></div>
              <div className="mt-5"><Field label="Organization" name="org" required placeholder="Company name" /></div>
              <div className="mt-5"><Field label="Your role / title" name="role" placeholder="e.g. Head of HR, CEO" /></div>
            </motion.div>

            {/* Budget & Timeline */}
            <motion.div variants={fadeUp} className="rounded-r-xl border border-line bg-white p-8 shadow-sm">
              <div className="font-mono text-[11px] tracking-[0.14em] uppercase text-muted mb-6">02 — Budget &amp; Timeline</div>

              <label className="block font-mono text-[11px] tracking-[0.12em] uppercase text-muted mb-3">
                Approximate budget range
              </label>
              <div className="grid grid-cols-3 gap-2 mb-7">
                {BUDGETS.map(b => (
                  <button key={b} type="button" onClick={() => setSelectedBudget(selectedBudget === b ? null : b)}
                    className="px-3 py-2.5 rounded-lg border text-[13px] transition-all duration-150 text-center"
                    style={{
                      borderColor: selectedBudget === b ? '#f7941d' : '#e6e3dd',
                      background: selectedBudget === b ? 'rgba(247,148,29,0.07)' : '#fff',
                      color: selectedBudget === b ? '#0a0a0a' : '#6b6b6b',
                      fontWeight: selectedBudget === b ? 600 : 400,
                    }}
                  >{b}</button>
                ))}
              </div>

              <label className="block font-mono text-[11px] tracking-[0.12em] uppercase text-muted mb-3">
                When do you need this?
              </label>
              <div className="flex flex-wrap gap-2">
                {TIMELINES.map(t => (
                  <button key={t} type="button" onClick={() => setSelectedTimeline(selectedTimeline === t ? null : t)}
                    className="px-4 py-2 rounded-full border text-[13px] transition-all duration-150"
                    style={{
                      borderColor: selectedTimeline === t ? '#f7941d' : '#e6e3dd',
                      background: selectedTimeline === t ? '#f7941d' : '#fff',
                      color: selectedTimeline === t ? '#0a0a0a' : '#6b6b6b',
                      fontWeight: selectedTimeline === t ? 600 : 400,
                    }}
                  >{t}</button>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right column */}
          <div className="grid gap-8">
            {/* Expertise areas */}
            <motion.div variants={fadeUp} className="rounded-r-xl border border-line bg-white p-8 shadow-sm">
              <div className="font-mono text-[11px] tracking-[0.14em] uppercase text-muted mb-2">03 — Areas of focus</div>
              <p className="text-[13px] text-ink-3 mb-6">Select all that apply — you can choose more than one.</p>
              <div className="grid grid-cols-2 gap-2">
                {EXPERTISE.map(e => (
                  <button
                    key={e.title}
                    type="button"
                    onClick={() => toggleArea(e.title)}
                    className="text-left px-4 py-4 rounded-xl border transition-all duration-150"
                    style={{
                      borderColor: selectedAreas.includes(e.title) ? '#f7941d' : '#e6e3dd',
                      background: selectedAreas.includes(e.title) ? 'rgba(247,148,29,0.06)' : '#fafaf7',
                    }}
                  >
                    <div className="flex items-start gap-3">
                      <div
                        className="mt-0.5 w-4 h-4 rounded border-2 flex-shrink-0 grid place-items-center transition-colors"
                        style={{
                          borderColor: selectedAreas.includes(e.title) ? '#f7941d' : '#d0ccc4',
                          background: selectedAreas.includes(e.title) ? '#f7941d' : 'transparent',
                        }}
                      >
                        {selectedAreas.includes(e.title) && (
                          <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                            <polyline points="1.5 5 4 7.5 8.5 2.5" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        )}
                      </div>
                      <div>
                        <div className="font-semibold text-[13px] text-ink leading-[1.3]">{e.title}</div>
                        <div className="mt-1 font-mono text-[10px] text-muted">{e.n}</div>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </motion.div>

            {/* Objective */}
            <motion.div variants={fadeUp} className="rounded-r-xl border border-line bg-white p-8 shadow-sm">
              <div className="font-mono text-[11px] tracking-[0.14em] uppercase text-muted mb-6">04 — Your objective</div>

              <div className="mb-5">
                <label htmlFor="objective" className="block font-mono text-[11px] tracking-[0.12em] uppercase text-muted mb-2">
                  What problem are you solving? <span className="text-brand">*</span>
                </label>
                <textarea
                  id="objective"
                  name="objective"
                  required
                  rows={4}
                  placeholder="Describe the challenge, gap, or goal you want to address. The more context you give, the more precise our proposal."
                  className="w-full rounded-lg border border-line px-4 py-3 text-[14px] text-ink placeholder:text-muted resize-none outline-none focus:border-brand transition-colors"
                />
              </div>

              <div>
                <label htmlFor="team_size" className="block font-mono text-[11px] tracking-[0.12em] uppercase text-muted mb-2">
                  Approximate team / participant size
                </label>
                <input
                  id="team_size"
                  name="team_size"
                  type="text"
                  placeholder="e.g. 20 managers, 150 operational staff"
                  className="w-full rounded-lg border border-line px-4 py-3 text-[14px] text-ink placeholder:text-muted outline-none focus:border-brand transition-colors"
                />
              </div>

              <div className="mt-8 pt-6 border-t border-line">
                <Btn type="submit" variant="primary" size="lg" arrow className="w-full justify-center">
                  Send proposal request
                </Btn>
                <p className="mt-3 text-center text-[12px] text-muted">
                  We respond within 3 business days with a fully tailored proposal.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.form>
      </div>
    </section>
  )
}

interface FieldProps {
  label: string; name: string; type?: string; required?: boolean; placeholder?: string
}

function Field({ label, name, type = 'text', required, placeholder }: FieldProps) {
  return (
    <div>
      <label htmlFor={name} className="block font-mono text-[11px] tracking-[0.12em] uppercase text-muted mb-2">
        {label}{required && <span className="text-brand ml-1">*</span>}
      </label>
      <input
        id={name} name={name} type={type} required={required} placeholder={placeholder}
        className="w-full rounded-lg border border-line px-4 py-3 text-[14px] text-ink placeholder:text-muted outline-none focus:border-brand transition-colors bg-white"
      />
    </div>
  )
}

function ProposalProcess() {
  return (
    <section className="relative px-10 py-24 bg-ink overflow-hidden">
      <GrainOverlay opacity={0.04} />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(247,148,29,0.09) 0%, transparent 70%)' }}
      />
      <div className="relative z-10 max-w-container mx-auto">
        <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={viewport}
          className="grid grid-cols-[180px_1fr] gap-16 mb-14"
        >
          <motion.div variants={slideLeft}>
            <div className="font-mono text-[11px] tracking-[0.14em] uppercase text-brand mb-2">§ Process</div>
            <div className="font-display text-[22px] font-semibold text-white">After you submit</div>
          </motion.div>
          <motion.h2 variants={slideRight}
            className="font-medium tracking-[-0.02em] max-w-[640px] text-white"
            style={{ fontSize: 'clamp(28px, 3.2vw, 44px)' }}
          >
            What happens between your submission and your proposal.
          </motion.h2>
        </motion.div>

        <motion.div variants={staggerFast} initial="hidden" whileInView="show" viewport={viewport}
          className="grid grid-cols-4 gap-6 relative"
        >
          <div className="absolute top-5 left-[6%] right-[6%] h-px bg-white/10" />
          {[
            ['Review', 'We read your brief carefully and identify the right team members for your engagement.'],
            ['Scoping', 'We define the delivery model, timeline, and approach based on your objective.'],
            ['Proposal draft', 'A tailored document covering scope, methodology, team, and investment.'],
            ['Delivery', 'Proposal lands in your inbox — with a follow-up call offer if you have questions.'],
          ].map(([t, b], i) => (
            <motion.div key={t as string} variants={fadeUp} className="relative">
              <div
                className="w-10 h-10 rounded-full border border-white/20 grid place-items-center font-display font-bold text-[16px] relative z-10"
                style={{ background: i === 0 ? '#f7941d' : 'rgba(255,255,255,0.06)', color: i === 0 ? '#0a0a0a' : '#fff' }}
              >
                {i + 1}
              </div>
              <div className="mt-5 text-[17px] font-semibold tracking-[-0.01em] text-white">{t}</div>
              <div className="mt-2 text-white/45 leading-[1.6] text-[14px]">{b}</div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={viewport}
          className="mt-16 pt-8 border-t border-white/10 flex items-center justify-between"
        >
          <p className="text-white/45 text-[14px]">Prefer to talk first?</p>
          <Link to="/book-call">
            <Btn variant="ghostDark" size="md" arrow>Book a discovery call instead</Btn>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
