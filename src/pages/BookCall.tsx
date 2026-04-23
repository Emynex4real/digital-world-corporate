import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Nav } from '../components/layout/Nav'
import { Footer } from '../components/layout/Footer'
import { Eyebrow } from '../components/ui/Eyebrow'
import { Btn } from '../components/ui/Btn'
import { GrainOverlay } from '../components/ui/GrainOverlay'
import { fadeUp, slideLeft, slideRight, scaleIn, stagger, staggerFast, viewport } from '../lib/motion'

const TIMES = ['09:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', '02:00 PM', '03:00 PM', '04:00 PM', '05:00 PM']

const TOPICS = [
  'Corporate Training Program',
  'Capability Assessment',
  'Leadership Development',
  'CSR Program Design',
  'Strategic Consulting',
  'Other / Not sure yet',
]

export default function BookCall() {
  const [selectedTime, setSelectedTime] = useState<string | null>(null)
  const [selectedTopic, setSelectedTopic] = useState<string | null>(null)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className="bg-paper text-ink">
      <Nav variant="dark" />
      <BookHero />
      <BookForm
        selectedTime={selectedTime}
        setSelectedTime={setSelectedTime}
        selectedTopic={selectedTopic}
        setSelectedTopic={setSelectedTopic}
        submitted={submitted}
        onSubmit={handleSubmit}
      />
      <BookReassurance />
      <Footer dark />
    </div>
  )
}

function BookHero() {
  return (
    <section className="relative bg-ink text-white overflow-hidden">
      <GrainOverlay opacity={0.045} />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(247,148,29,0.13) 0%, transparent 65%)' }}
      />
      <div className="relative z-10 max-w-container mx-auto px-10 pt-[80px] pb-[72px]">
        <div className="flex gap-3.5 font-mono text-[11px] tracking-[0.14em] uppercase text-white/30">
          <span>Home</span><span>/</span><span className="text-brand">Book a Call</span>
        </div>
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="show"
          className="grid grid-cols-[1.25fr_1fr] gap-20 items-end mt-12"
        >
          <motion.div variants={slideLeft}>
            <Eyebrow color="#f7941d">Schedule a call</Eyebrow>
            <h1
              className="mt-5 font-semibold tracking-[-0.035em] leading-[1.02] text-white"
              style={{ fontSize: 'clamp(48px, 5.8vw, 84px)' }}
            >
              Let's talk about<br />
              your <em className="not-italic text-brand">organization</em>.
            </h1>
          </motion.div>
          <motion.p variants={slideRight} className="text-[17px] leading-[1.65] text-white/55">
            A focused 30-minute call to understand your goals and explore how Digital World
            Corporate can build real capability across your organization.
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerFast}
          initial="hidden"
          animate="show"
          className="mt-14 pt-6 border-t border-white/10 grid grid-cols-3 gap-10"
        >
          {[
            ['30 min', 'Focused discovery call'],
            ['3 days', 'Proposal turnaround'],
            ['No cost', 'Completely free to start'],
          ].map(([k, v]) => (
            <motion.div key={v} variants={fadeUp}>
              <div className="font-display text-[40px] font-semibold tracking-[-0.02em] text-white leading-none">
                {k}
              </div>
              <div className="mt-2 text-[13px] text-white/45">{v}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

interface FormProps {
  selectedTime: string | null
  setSelectedTime: (t: string | null) => void
  selectedTopic: string | null
  setSelectedTopic: (t: string | null) => void
  submitted: boolean
  onSubmit: (e: React.FormEvent) => void
}

function BookForm({ selectedTime, setSelectedTime, selectedTopic, setSelectedTopic, submitted, onSubmit }: FormProps) {
  if (submitted) {
    return (
      <section className="px-10 py-24 bg-paper">
        <motion.div
          variants={scaleIn}
          initial="hidden"
          animate="show"
          className="max-w-[640px] mx-auto text-center"
        >
          <div className="w-16 h-16 rounded-full bg-brand/10 flex items-center justify-center mx-auto mb-6">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#f7941d" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </div>
          <h2 className="font-display text-[36px] font-semibold tracking-[-0.02em] text-ink">
            Call request received.
          </h2>
          <p className="mt-4 text-[17px] leading-[1.65] text-ink-3">
            We'll confirm your slot within one business day and send a calendar invite with a video link.
          </p>
          <div className="mt-8 flex gap-3 justify-center">
            <Link to="/"><Btn variant="ink" size="lg" arrow>Back to home</Btn></Link>
            <Link to="/expertise"><Btn variant="ghost" size="lg">Explore expertise</Btn></Link>
          </div>
        </motion.div>
      </section>
    )
  }

  return (
    <section className="px-10 py-20 bg-paper">
      <div className="max-w-container mx-auto grid grid-cols-[1fr_1.1fr] gap-16 items-start">

        {/* Left — what to expect */}
        <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={viewport}>
          <motion.div variants={fadeUp}>
            <Eyebrow>What happens next</Eyebrow>
            <h2
              className="mt-5 font-semibold tracking-[-0.025em] leading-[1.12]"
              style={{ fontSize: 'clamp(28px, 3vw, 40px)' }}
            >
              Three steps to get started.
            </h2>
          </motion.div>

          <motion.ol variants={stagger} className="mt-10 grid gap-0">
            {[
              ['Submit this form', 'Tell us a bit about your organization and the challenge you are facing.'],
              ['We confirm your slot', 'A team member will reach out within one business day to lock in the time.'],
              ['30-minute discovery call', 'We listen, ask the right questions, and outline how we can help.'],
            ].map(([t, b], i) => (
              <motion.li
                key={t}
                variants={fadeUp}
                className="grid grid-cols-[48px_1fr] gap-4 py-7 border-b border-line"
              >
                <div className="w-10 h-10 rounded-full border border-line-2 grid place-items-center font-display font-semibold text-[16px] text-ink flex-shrink-0">
                  {i + 1}
                </div>
                <div>
                  <div className="font-semibold text-[16px] text-ink">{t}</div>
                  <div className="mt-1.5 text-[14px] leading-[1.6] text-ink-3">{b}</div>
                </div>
              </motion.li>
            ))}
          </motion.ol>

          <motion.div variants={fadeUp} className="mt-10 rounded-r-xl p-6 border border-line bg-paper-2">
            <div className="font-mono text-[11px] tracking-[0.14em] uppercase text-muted mb-3">
              Already know what you need?
            </div>
            <p className="text-[14px] leading-[1.6] text-ink-3 mb-4">
              Skip the call — go straight to a proposal and we'll respond in 3 business days.
            </p>
            <Link to="/get-proposal">
              <Btn variant="ghost" size="sm" arrow>Request a proposal instead</Btn>
            </Link>
          </motion.div>
        </motion.div>

        {/* Right — form */}
        <motion.form
          variants={scaleIn}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          onSubmit={onSubmit}
          className="rounded-r-xl border border-line bg-white p-10 shadow-sm"
        >
          <div className="font-mono text-[11px] tracking-[0.14em] uppercase text-muted mb-8">
            Your details
          </div>

          <div className="grid grid-cols-2 gap-5">
            <Field label="First name" name="first" required placeholder="Emeka" />
            <Field label="Last name" name="last" required placeholder="Okonkwo" />
          </div>
          <div className="mt-5">
            <Field label="Work email" name="email" type="email" required placeholder="emeka@company.ng" />
          </div>
          <div className="mt-5">
            <Field label="Organization" name="org" required placeholder="Your company name" />
          </div>
          <div className="mt-5">
            <Field label="Phone number" name="phone" type="tel" placeholder="+234 800 000 0000" />
          </div>

          {/* Topic selector */}
          <div className="mt-8">
            <label className="block font-mono text-[11px] tracking-[0.12em] uppercase text-muted mb-3">
              What would you like to discuss?
            </label>
            <div className="grid grid-cols-2 gap-2">
              {TOPICS.map(t => (
                <button
                  key={t}
                  type="button"
                  onClick={() => setSelectedTopic(selectedTopic === t ? null : t)}
                  className="text-left px-4 py-3 rounded-lg border text-[13px] leading-[1.4] transition-all duration-150"
                  style={{
                    borderColor: selectedTopic === t ? '#f7941d' : '#e6e3dd',
                    background: selectedTopic === t ? 'rgba(247,148,29,0.06)' : '#fff',
                    color: selectedTopic === t ? '#0a0a0a' : '#6b6b6b',
                    fontWeight: selectedTopic === t ? 600 : 400,
                  }}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>

          {/* Time picker */}
          <div className="mt-8">
            <label className="block font-mono text-[11px] tracking-[0.12em] uppercase text-muted mb-3">
              Preferred call time (WAT)
            </label>
            <div className="grid grid-cols-4 gap-2">
              {TIMES.map(t => (
                <button
                  key={t}
                  type="button"
                  onClick={() => setSelectedTime(selectedTime === t ? null : t)}
                  className="px-3 py-2.5 rounded-lg border text-[13px] font-mono transition-all duration-150"
                  style={{
                    borderColor: selectedTime === t ? '#f7941d' : '#e6e3dd',
                    background: selectedTime === t ? '#f7941d' : '#fff',
                    color: selectedTime === t ? '#0a0a0a' : '#6b6b6b',
                    fontWeight: selectedTime === t ? 600 : 400,
                  }}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-8">
            <label className="block font-mono text-[11px] tracking-[0.12em] uppercase text-muted mb-2">
              Anything else we should know? <span className="normal-case tracking-normal">(optional)</span>
            </label>
            <textarea
              name="notes"
              rows={3}
              placeholder="Team size, current challenges, timeline..."
              className="w-full rounded-lg border border-line px-4 py-3 text-[14px] text-ink placeholder:text-muted resize-none outline-none focus:border-brand transition-colors"
            />
          </div>

          <div className="mt-8">
            <Btn type="submit" variant="primary" size="lg" arrow className="w-full justify-center">
              Book my call
            </Btn>
            <p className="mt-3 text-center text-[12px] text-muted">
              No commitment required. We'll follow up within one business day.
            </p>
          </div>
        </motion.form>
      </div>
    </section>
  )
}

interface FieldProps {
  label: string
  name: string
  type?: string
  required?: boolean
  placeholder?: string
}

function Field({ label, name, type = 'text', required, placeholder }: FieldProps) {
  return (
    <div>
      <label htmlFor={name} className="block font-mono text-[11px] tracking-[0.12em] uppercase text-muted mb-2">
        {label}{required && <span className="text-brand ml-1">*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="w-full rounded-lg border border-line px-4 py-3 text-[14px] text-ink placeholder:text-muted outline-none focus:border-brand transition-colors bg-white"
      />
    </div>
  )
}

function BookReassurance() {
  return (
    <section className="relative px-10 py-20 bg-ink overflow-hidden">
      <GrainOverlay opacity={0.04} />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(247,148,29,0.09) 0%, transparent 70%)' }}
      />
      <motion.div
        variants={staggerFast}
        initial="hidden"
        whileInView="show"
        viewport={viewport}
        className="relative z-10 max-w-container mx-auto grid grid-cols-3 gap-10"
      >
        {[
          ['Confidential', 'Everything discussed on the call stays between us. No data is shared or sold.'],
          ['No hard sell', 'Our goal is to understand your situation — not push a package. If we are not the right fit, we will say so.'],
          ['Fast follow-through', 'If we are a match, you will have a tailored proposal in your inbox within 3 business days.'],
        ].map(([t, b]) => (
          <motion.div key={t as string} variants={fadeUp} className="border-t border-white/10 pt-8">
            <div className="w-8 h-8 rounded-full bg-brand/15 grid place-items-center mb-5">
              <span className="w-2 h-2 rounded-full bg-brand block" />
            </div>
            <div className="font-semibold text-[18px] text-white mb-3">{t}</div>
            <div className="text-[14px] leading-[1.65] text-white/50">{b}</div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
