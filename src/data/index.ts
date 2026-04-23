/* ── Types ─────────────────────────────────────────────────────── */

export interface ExpertiseItem {
  n: string
  title: string
  body: string
}

export interface TeamMember {
  name: string
  role: string
  tone: 'warm' | 'cool' | 'paper' | 'brand' | 'ink'
  initials: string
  bio: string
  expertise: string[]
  quote: string
  off: string
}

export interface Stat {
  k: string
  v: string
}

export interface CaseStudy {
  client: string
  tag: string
  title: string
  body: string
  metric: string
  metricLabel: string
}

export interface Testimonial {
  quote: string
  name: string
  org: string
}

/* ── Data ──────────────────────────────────────────────────────── */

export const EXPERTISE: ExpertiseItem[] = [
  {
    n: '01',
    title: 'Corporate Training & Staff Development',
    body: 'Customized training programs that enhance digital, analytical, and operational capability across teams.',
  },
  {
    n: '02',
    title: 'Workforce Capability & Needs Assessment',
    body: 'Structured assessments that evaluate workforce skill, identify gaps, and determine readiness for transformation.',
  },
  {
    n: '03',
    title: 'Customized Curriculum & Learning Design',
    body: 'Tailored learning frameworks based on organizational context, role requirements, and strategic objectives.',
  },
  {
    n: '04',
    title: 'Post-Training Support, Evaluation & Reporting',
    body: 'Structured evaluation, impact tracking, and reporting to measure effectiveness and return on learning investment.',
  },
  {
    n: '05',
    title: 'Leadership & Management Programs',
    body: 'Executive development focused on strategic leadership, digital readiness, and performance optimization.',
  },
  {
    n: '06',
    title: 'CSR Strategy & Implementation',
    body: 'Design, structure, and execute impactful CSR initiatives aligned with corporate value and stakeholder expectation.',
  },
]

export const TEAM: TeamMember[] = [
  {
    name: 'Alex Uwodi',
    role: 'Growth Head',
    tone: 'warm',
    initials: 'AU',
    bio: "As our Growth Head, Alex is the driving force behind our market expansion. He leverages deep expertise in growth marketing to build high-impact sales strategies and scale customer acquisition. Alex doesn't just deliver results; he empowers our entire team by training staff to master online visibility and navigate the complexities of digital development.",
    expertise: ['Growth Marketing', 'Digital Strategy', 'Team Training & Development'],
    quote: 'All the customers you need are already online; you just need the right strategy to find them.',
    off: "When he isn't scaling brands, Alex is likely enjoying the outdoors or sharpening his focus over a game of table tennis.",
  },
  {
    name: 'Akeem Abiodun',
    role: 'Head of Academics',
    tone: 'cool',
    initials: 'AA',
    bio: 'Akeem oversees the architectural design of our learning programs. With a focus on pedagogical excellence, he ensures that our curriculum remains at the cutting edge of industry standards — transforming complex technical concepts into structured, high-impact learning paths.',
    expertise: ['Curriculum Development', 'Academic Leadership', 'Educational Strategy & Mentorship'],
    quote: 'True education is not just the learning of facts, but the training of the mind to think critically and innovate.',
    off: "When he isn't shaping the minds of the future, Akeem is a passionate chess player and a dedicated collector of historical biographies.",
  },
  {
    name: 'Nwanga Kingsley',
    role: 'Head of Finance',
    tone: 'paper',
    initials: 'NK',
    bio: "As Head of Finance, Kingsley is the steward of our organization's fiscal health and long-term sustainability. He brings a meticulous approach to financial planning, risk management, and strategic investment, translating data into decisions that keep the company lean, profitable, and ready for growth.",
    expertise: ['Financial Planning & Analysis', 'Risk Management', 'Strategic Resource Allocation'],
    quote: 'Financial integrity and strategic foresight are the pillars upon which every successful enterprise is built.',
    off: 'Outside the boardroom, Kingsley enjoys the discipline of long-distance cycling and has a keen interest in urban photography.',
  },
  {
    name: 'Jimoh Babajide',
    role: 'Corporate Team Lead',
    tone: 'warm',
    initials: 'JB',
    bio: 'Babajide provides the vision and oversight necessary to steer our most significant initiatives. He excels at aligning departmental goals with high-level corporate objectives, ensuring every project is delivered with excellence — defined by team synergy and a focus on sustainable results for corporate partners.',
    expertise: ['Corporate Leadership & Oversight', 'Strategic Project Management', 'Cross-Functional Team Synergy'],
    quote: 'Great leadership is about providing the vision and the tools for others to succeed.',
    off: 'A true sports enthusiast, Babajide finds his inspiration in the strategy and teamwork of the soccer pitch, rarely missing a major match.',
  },
  {
    name: 'Somade Temiloluwa',
    role: 'Business Development Manager',
    tone: 'brand',
    initials: 'ST',
    bio: 'Temiloluwa is the architect of our strategic partnerships and market growth. She specializes in identifying high-value opportunities and building long-term relationships that drive revenue — blending market intelligence with a client-first approach to keep business solutions aligned with evolving needs.',
    expertise: ['Strategic Partnership Building', 'Market Expansion & Analysis', 'Relationship Management'],
    quote: 'Success in business is found at the intersection of curiosity, strategic planning, and consistent value delivery.',
    off: 'A woman of many interests — a skilled keyboardist who also enjoys new destinations, a good book, or offering a critical eye to the latest cinema.',
  },
]

export const STATS: Stat[] = [
  { k: '500+', v: 'Professionals trained' },
  { k: '6',    v: 'Core expertise areas' },
  { k: '12+',  v: 'Enterprise engagements' },
  { k: '98%',  v: 'Satisfaction rate' },
]

export const CASE_STUDIES: CaseStudy[] = [
  {
    client: 'Levene Energy',
    tag: 'Training Program',
    title: 'Business Insights & Reporting Training',
    body: 'Enabled operational and management teams to transform raw data into decisions that matter. Within three months, reporting accuracy improved and strategic alignment sharpened.',
    metric: '3 months',
    metricLabel: 'to measurable impact',
  },
  {
    client: 'Egbin Energy',
    tag: 'CSR Initiative',
    title: 'Tech to Rural — youth capacity program',
    body: 'A full curriculum of ICT, Graphics, Cybersecurity, Web, Digital Marketing and Data Analysis for rural youth, with mentorship and project-based learning.',
    metric: '6 tracks',
    metricLabel: 'delivered end-to-end',
  },
]

export const TESTIMONIALS: Testimonial[] = [
  {
    quote: 'The Digital World Corporate team delivered an exceptional training program that enabled our operations team to extract actionable insights from data and improve daily decision-making.',
    name: 'Operations Manager',
    org: 'Levene Energy',
  },
  {
    quote: 'Partnering with Digital World Corporate for our CSR initiative was a game-changer. Their tech program empowered local youth and strengthened our community engagement efforts.',
    name: 'CSR Lead',
    org: 'Egbin Energy',
  },
]
