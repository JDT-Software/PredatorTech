import { useState, useEffect, useRef } from 'react'
import { FancyButton } from './FancyButton'
import { Link } from 'react-router'
import {
  Shield, AlertTriangle, Lock, Globe, Cloud, Server,
  Eye, ArrowRight, CheckCircle, Star, ChevronLeft, ChevronRight,
  Activity, Download, Phone, Clock, Users, Award,
  Zap, Database, Wifi, Target, TrendingUp, HardDrive,
  Building2, Truck, Factory, Heart, DollarSign, Package, Cpu,
} from 'lucide-react'
import {
  AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer,
  CartesianGrid, BarChart, Bar,
} from 'recharts'

// ── Data ──────────────────────────────────────────────────────────
const threatChartData = [
  { h: '00', blocked: 42 }, { h: '02', blocked: 38 }, { h: '04', blocked: 25 },
  { h: '06', blocked: 67 }, { h: '08', blocked: 134 }, { h: '10', blocked: 189 },
  { h: '12', blocked: 221 }, { h: '14', blocked: 198 }, { h: '16', blocked: 245 },
  { h: '18', blocked: 176 }, { h: '20', blocked: 143 }, { h: '22', blocked: 89 },
]

const severityData = [
  { label: 'Critical', count: 3, color: '#ef4444' },
  { label: 'High', count: 18, color: '#f59e0b' },
  { label: 'Medium', count: 54, color: '#00bcd4' },
  { label: 'Low', count: 112, color: '#00e676' },
]

const liveLog = [
  { t: '16:48:32', type: 'BLOCKED', msg: 'Ransomware payload — WRH-204', c: '#ef4444' },
  { t: '16:48:19', type: 'ALERT', msg: 'Lateral movement 192.168.1.44', c: '#f59e0b' },
  { t: '16:48:07', type: 'BLOCKED', msg: 'Phishing DNS sinkhole active', c: '#ef4444' },
  { t: '16:47:55', type: 'INFO', msg: 'Patch sweep: 38 endpoints done', c: '#00e676' },
  { t: '16:47:41', type: 'BLOCKED', msg: 'RDP brute-force neutralized', c: '#ef4444' },
]

const services = [
  { num: '01', icon: Shield, title: 'Endpoint Protection', desc: 'AI-driven EDR that stops zero-days, fileless attacks, and ransomware before they execute.', color: '#bf2424' },
  { num: '02', icon: Eye, title: '24/7 Threat Monitoring', desc: 'Dedicated SOC analysts watching your environment every minute. 15-minute response guarantee.', color: '#00bcd4' },
  { num: '03', icon: Lock, title: 'Network Security', desc: 'Next-gen firewall management, IDS/IPS, and zero-trust micro-segmentation at every layer.', color: '#7c3aed' },
  { num: '04', icon: Cloud, title: 'Cloud Security', desc: 'CSPM and CWPP across AWS, Azure, and GCP. Continuous posture management, automated.', color: '#f59e0b' },
  { num: '05', icon: Server, title: 'Managed IT Services', desc: 'Full-spectrum IT management: helpdesk, patching, infrastructure — unlimited and proactive.', color: '#00e676' },
  { num: '06', icon: AlertTriangle, title: 'Security Audits', desc: 'Penetration testing, compliance gap analysis, and red-team exercises by certified experts.', color: '#ef4444' },
]

const testimonials = [
  {
    quote: "Predator Tech identified three critical vulnerabilities in our logistics network within the first 48 hours. Their SOC team works like an extension of our own — except they never sleep.",
    name: 'Marcus Johnson', title: 'CEO', company: 'Summit Logistics Group', rating: 5, initials: 'MJ',
  },
  {
    quote: "The threat monitoring dashboard gives visibility I never had before. They stopped a sophisticated phishing campaign targeting our finance team before a single dollar moved.",
    name: 'Sarah Chen', title: 'IT Director', company: 'Pacific Manufacturing', rating: 5, initials: 'SC',
  },
  {
    quote: "We went from reactive to proactive. Their managed security model actually reduced our cyber insurance premium by 28%. ROI was clear in the first quarter.",
    name: 'David Torres', title: 'Operations Manager', company: 'CoreTech Distribution', rating: 5, initials: 'DT',
  },
]

const trustedBy = [
  'Summit Logistics', 'Pacific Corp', 'CoreTech Industries', 'Apex Manufacturing',
  'Nexus Financial', 'Delta Warehousing', 'ProFleet Inc', 'ArrowHead Energy',
  'Titan Industrial', 'Meridian Health', 'Cascade Retail', 'Vertex Systems',
]

const industries = [
  { icon: Truck, label: 'Logistics & Transport' },
  { icon: Factory, label: 'Manufacturing' },
  { icon: Package, label: 'Warehousing' },
  { icon: Building2, label: 'Corporate Offices' },
  { icon: Heart, label: 'Healthcare' },
  { icon: DollarSign, label: 'Financial Services' },
  { icon: Cpu, label: 'Industrial Tech' },
  { icon: Globe, label: 'Professional Services' },
]

// ── Animated Counter ───────────────────────────────────────────────
function Counter({ end, decimals = 0, prefix = '', suffix = '' }: {
  end: number; decimals?: number; prefix?: string; suffix?: string;
}) {
  const [val, setVal] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const started = useRef(false)

  useEffect(() => {
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true
        const steps = 50
        let i = 0
        const id = setInterval(() => {
          i++
          setVal(+(end * (i / steps)).toFixed(decimals))
          if (i >= steps) clearInterval(id)
        }, 1600 / steps)
      }
    }, { threshold: 0.4 })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [end, decimals])

  return <span ref={ref}>{prefix}{decimals ? val.toFixed(decimals) : val.toLocaleString()}{suffix}</span>
}

// ── Radar Visual ───────────────────────────────────────────────────
function RadarVisual() {
  return (
    <div className="relative w-48 h-48 flex-shrink-0" style={{ margin: '0 auto' }}>
      {/* Rings */}
      {[100, 72, 44].map((s, i) => (
        <div
          key={s}
          className="absolute top-1/2 left-1/2 rounded-full"
          style={{
            width: s + '%', height: s + '%',
            transform: 'translate(-50%, -50%)',
            border: `1px solid rgba(191,36,36,${0.1 + i * 0.06})`,
          }}
        />
      ))}
      {/* Sweep */}
      <div
        className="absolute top-1/2 left-1/2 w-1/2 origin-left"
        style={{
          height: '1px',
          background: 'linear-gradient(90deg, rgba(191,36,36,0.8), transparent)',
          animation: 'radar-sweep 4s linear infinite',
          transformOrigin: '0 50%',
          transform: 'translate(0, -50%)',
        }}
      />
      {/* Center dot */}
      <div className="absolute top-1/2 left-1/2 w-2 h-2 rounded-full -translate-x-1/2 -translate-y-1/2"
        style={{ background: '#bf2424', boxShadow: '0 0 12px rgba(191,36,36,0.8)' }} />
      {/* Blips */}
      {[
        { top: '25%', left: '60%', delay: '1s' },
        { top: '65%', left: '30%', delay: '2.5s' },
        { top: '40%', left: '75%', delay: '0.5s' },
      ].map((b, i) => (
        <div key={i} className="absolute w-2 h-2 rounded-full"
          style={{
            top: b.top, left: b.left,
            background: '#ef4444',
            boxShadow: '0 0 8px rgba(239,68,68,0.8)',
            animation: `threat-pulse 2s ease-in-out ${b.delay} infinite`,
          }}
        />
      ))}
      {/* Label */}
      <div className="absolute -bottom-7 left-1/2 -translate-x-1/2 font-mono-data text-center"
        style={{ color: '#bf2424', fontSize: '0.55rem', letterSpacing: '0.15em', whiteSpace: 'nowrap' }}>
        NETWORK SCAN ACTIVE
      </div>
    </div>
  )
}

// ── Main Component ─────────────────────────────────────────────────
export function HomePage() {
  const [activeTestimonial, setActiveTestimonial] = useState(0)

  return (
    <div className="overflow-x-hidden">

      {/* ════════════════════════════════════════
          HERO
      ════════════════════════════════════════ */}
      <section className="relative min-h-screen flex items-center overflow-hidden" style={{ paddingTop: '64px' }}>

        {/* — BG layers — */}
        <div className="absolute inset-0 hero-grid" />

        {/* corner frames */}
        {[
          { cls: 'top-20 left-6', borders: 'borderTop borderLeft' },
          { cls: 'top-20 right-6', borders: 'borderTop borderRight' },
        ].map(({ cls }, i) => (
          <div key={i} className={`absolute ${cls} w-20 h-20`} style={{
            border: '1px solid rgba(191,36,36,0.18)',
            ...(i === 0 ? { borderRight: 'none', borderBottom: 'none' } : { borderLeft: 'none', borderBottom: 'none' }),
          }} />
        ))}

        {/* — Content — */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-20 w-full">
          <div className="max-w-3xl">

            {/* Left */}
            <div>

              {/* Headline */}
              <h1 className="font-display mb-6" style={{
                fontWeight: 800,
                lineHeight: 0.92,
                fontSize: 'clamp(3.6rem, 8.5vw, 7.2rem)',
                letterSpacing: '-0.02em',
                color: '#e8edf3',
              }}>
                <span>Predator</span>{' '}
                <span style={{ color: '#bf2424' }}>Technologies</span>
              </h1>

              <p className="mb-10 max-w-lg" style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: '1.05rem', lineHeight: 1.75, color: '#7d8a96',
              }}>
                Predator Tech delivers enterprise-grade cybersecurity and managed IT for businesses that cannot afford to be compromised. We hunt threats before they hunt you.
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap gap-4 mb-12">
                <Link to="/consultation">
                  <FancyButton>Book Free Consultation <ArrowRight className="w-4 h-4" /></FancyButton>
                </Link>
                <Link to="/threat-report">
                  <FancyButton><Download className="w-4 h-4" /> Free Threat Report</FancyButton>
                </Link>
              </div>

              {/* Stats row */}
              <div className="flex flex-wrap items-center gap-8 pt-6" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
                {[
                  { val: 2400, suf: '+', label: 'Businesses Protected' },
                  { val: 99.97, suf: '%', label: 'Threat Block Rate', dec: 2 },
                  { val: 15, suf: ' min', label: 'Avg Response Time' },
                ].map(({ val, suf, label, dec }) => (
                  <div key={label}>
                    <div className="stat-number" style={{ fontSize: 'clamp(1.6rem, 2.5vw, 2.2rem)' }}>
                      <Counter end={val} decimals={dec} suffix={suf} />
                    </div>
                    <div className="text-xs mt-0.5" style={{ color: '#5a6472', fontFamily: "'DM Sans', sans-serif", letterSpacing: '0.04em' }}>
                      {label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Scroll hint */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30">
          <div className="w-px h-10" style={{ background: 'linear-gradient(transparent, #bf2424)' }} />
          <span className="font-mono-data" style={{ color: '#bf2424', fontSize: '0.55rem', letterSpacing: '0.2em' }}>SCROLL</span>
        </div>
      </section>

      {/* ════════════════════════════════════════
          TRUSTED BY — Marquee
      ════════════════════════════════════════ */}
      <section style={{ borderTop: '1px solid rgba(255,255,255,0.05)', borderBottom: '1px solid rgba(255,255,255,0.05)', padding: '3rem 0', overflow: 'hidden' }}>
        <div className="max-w-7xl mx-auto px-6 mb-5">
          <p className="section-label text-center">Trusted by forward-thinking businesses across North America</p>
        </div>
        <div className="relative">
          {/* Fade masks */}
          <div className="absolute left-0 top-0 bottom-0 w-24 z-10" style={{ background: 'linear-gradient(90deg, #06080b, transparent)' }} />
          <div className="absolute right-0 top-0 bottom-0 w-24 z-10" style={{ background: 'linear-gradient(270deg, #06080b, transparent)' }} />
          {/* Marquee track */}
          <div className="flex" style={{ animation: 'marquee 28s linear infinite', width: 'max-content' }}>
            {[...trustedBy, ...trustedBy].map((name, i) => (
              <div key={i} className="flex items-center gap-6 px-8">
                <span className="font-display" style={{
                  fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.2em',
                  color: '#3d4a56', textTransform: 'uppercase', whiteSpace: 'nowrap',
                }}>
                  {name}
                </span>
                <div className="w-1 h-1 rounded-full" style={{ background: '#1e2832', flexShrink: 0 }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          SERVICES
      ════════════════════════════════════════ */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-14 gap-6">
            <div>
              <p className="section-label mb-4">Full-Spectrum Security</p>
              <h2 className="font-display" style={{ fontWeight: 800, color: '#e8edf3', fontSize: 'clamp(2rem, 5vw, 3.5rem)', lineHeight: 1 }}>
                EVERY LAYER.<br />
                <span className="text-primary">EVERY THREAT.</span>
              </h2>
            </div>
            <Link to="/services" className="shrink-0">
              <FancyButton>View all services <ArrowRight className="w-4 h-4" /></FancyButton>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map(({ num, icon: Icon, title, desc, color }) => (
              <div
                key={title}
                className="group p-7 rounded-xl relative overflow-hidden cursor-default"
                style={{
                  background: 'var(--card)',
                  border: '1px solid rgba(255,255,255,0.06)',
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLDivElement
                  el.style.borderColor = `${color}35`
                  el.style.background = '#0d1117'
                  el.style.transform = 'translateY(-4px)'
                  el.style.boxShadow = `0 20px 50px rgba(0,0,0,0.4), 0 0 30px ${color}12`
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLDivElement
                  el.style.borderColor = 'rgba(255,255,255,0.06)'
                  el.style.background = 'var(--card)'
                  el.style.transform = 'translateY(0)'
                  el.style.boxShadow = 'none'
                }}
              >
                {/* Number */}
                <div className="absolute top-5 right-5 font-mono-data" style={{ color: 'rgba(255,255,255,0.04)', fontSize: '2.5rem', fontWeight: 800, lineHeight: 1, letterSpacing: '-0.05em' }}>
                  {num}
                </div>

                <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-5"
                  style={{ background: `${color}12`, border: `1px solid ${color}25` }}>
                  <Icon className="w-5 h-5" style={{ color }} />
                </div>

                <h3 className="font-display mb-2.5" style={{ fontSize: '1.25rem', fontWeight: 700, color: '#e8edf3', lineHeight: 1.15 }}>
                  {title}
                </h3>
                <p className="text-sm leading-relaxed mb-5" style={{ color: '#5a6472', fontFamily: "'DM Sans', sans-serif" }}>
                  {desc}
                </p>
                <Link to="/services" className="inline-flex items-center gap-1.5 text-sm font-semibold transition-all duration-200"
                  style={{ color, fontFamily: "'DM Sans', sans-serif" }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.gap = '8px' }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.gap = '6px' }}>
                  Learn more <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          THREAT INTELLIGENCE — full dashboard
      ════════════════════════════════════════ */}
      <section className="threat-intel-section relative py-24 overflow-hidden" style={{
        background: 'linear-gradient(180deg, #06080b 0%, #060a0e 50%, #06080b 100%)',
        borderTop: '1px solid rgba(255,255,255,0.05)',
        borderBottom: '1px solid rgba(255,255,255,0.05)',
      }}>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="section-label mb-5">Always-On Protection</p>
            <h2 className="font-display mb-5" style={{ fontWeight: 800, color: '#e8edf3', fontSize: 'clamp(2rem, 4vw, 3rem)', lineHeight: 1 }}>
              YOUR THREATS.
              <br />OUR WATCH.
              <br /><span className="text-primary">24/7/365.</span>
            </h2>
            <p className="mb-8 text-sm leading-relaxed" style={{ color: '#5a6472', fontFamily: "'DM Sans', sans-serif" }}>
              Our Security Operations Center operates around the clock. Every alert has a human analyst behind it. Every threat gets a response — in under 15 minutes.
            </p>


            <Link to="/services">
              <FancyButton>Explore Threat Monitoring <ArrowRight className="w-4 h-4" /></FancyButton>
            </Link>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          WHY CHOOSE US — Metrics
      ════════════════════════════════════════ */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="section-label mb-4">Built Different</p>
            <h2 className="font-display" style={{ fontWeight: 800, color: '#e8edf3', fontSize: 'clamp(2rem, 5vw, 3.5rem)', lineHeight: 1 }}>
              THE NUMBERS BEHIND<br />
              <span className="text-primary">THE PROTECTION</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { icon: Clock, stat: '< 15', unit: 'min', label: 'Mean Response Time', desc: 'Fastest guaranteed response in the industry' },
              { icon: Shield, stat: '99.97', unit: '%', label: 'Threat Block Rate', desc: 'AI-driven detection across 400B+ signals' },
              { icon: Award, stat: '15+', unit: 'yrs', label: 'Industry Experience', desc: 'Fortune 500, gov, and SMB security veterans' },
              { icon: Users, stat: '2,400', unit: '+', label: 'Clients Protected', desc: '10-person offices to 500-person warehouses' },
            ].map(({ icon: Icon, stat, unit, label, desc }) => (
              <div key={label}
                className="p-7 rounded-xl text-center relative overflow-hidden cursor-default"
                style={{ background: 'var(--card)', border: '1px solid rgba(255,255,255,0.06)', transition: 'all 0.3s' }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLDivElement
                  el.style.borderColor = 'rgba(191,36,36,0.25)'
                  el.style.transform = 'translateY(-3px)'
                  el.style.boxShadow = '0 20px 50px rgba(0,0,0,0.3), 0 0 25px rgba(191,36,36,0.08)'
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLDivElement
                  el.style.borderColor = 'rgba(255,255,255,0.06)'
                  el.style.transform = 'translateY(0)'
                  el.style.boxShadow = 'none'
                }}
              >
                <div className="w-11 h-11 rounded-xl flex items-center justify-center mx-auto mb-4"
                  style={{ background: 'rgba(191,36,36,0.08)', border: '1px solid rgba(191,36,36,0.15)' }}>
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <div className="stat-number mb-0.5" style={{ fontSize: 'clamp(2rem, 3.5vw, 2.8rem)' }}>
                  {stat}<span className="text-primary" style={{ fontSize: '1.2rem' }}>{unit}</span>
                </div>
                <div className="font-display mb-2" style={{ fontSize: '0.8rem', fontWeight: 700, color: '#8b949e', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
                  {label}
                </div>
                <p className="text-xs leading-relaxed" style={{ color: '#4b5563', fontFamily: "'DM Sans', sans-serif" }}>
                  {desc}
                </p>
              </div>
            ))}
          </div>

          {/* Compliance strip */}
          <div className="mt-10 py-5 px-6 rounded-xl flex flex-wrap items-center justify-between gap-4" style={{
            background: 'rgba(191,36,36,0.03)',
            border: '1px solid rgba(191,36,36,0.08)',
          }}>
            <span className="section-label">Compliance Frameworks Covered</span>
            <div className="flex flex-wrap gap-2">
              {['ISO 27001', 'SOC 2 Type II', 'NIST CSF', 'CMMC L2', 'HIPAA', 'PCI DSS'].map(cert => (
                <span key={cert} className="font-mono-data px-3 py-1.5 rounded text-xs"
                  style={{ border: '1px solid rgba(191,36,36,0.18)', color: '#bf2424', background: 'rgba(191,36,36,0.05)', fontSize: '0.65rem', letterSpacing: '0.05em' }}>
                  {cert}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          TESTIMONIALS
      ════════════════════════════════════════ */}
      <section className="testimonials-section py-24 relative overflow-hidden" style={{
        background: '#080b0f',
        borderTop: '1px solid rgba(255,255,255,0.05)',
        borderBottom: '1px solid rgba(255,255,255,0.05)',
      }}>
        <div className="absolute inset-0" style={{
          background: 'radial-gradient(ellipse 70% 60% at 50% 50%, rgba(191,36,36,0.03) 0%, transparent 70%)',
        }} />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="section-label mb-4">Client Results</p>
            <h2 className="font-display" style={{ fontWeight: 800, fontSize: 'clamp(2rem, 5vw, 3.2rem)', lineHeight: 1 }}>
              What people
              <br /><span className="text-primary">have to say</span>
            </h2>
          </div>

          {/* 3-column grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {testimonials.map(({ quote, name, title, company, rating, initials }) => (
              <div key={name} className="p-7 rounded-xl flex flex-col"
                style={{ background: '#0a0d12', border: '1px solid rgba(255,255,255,0.06)', transition: 'all 0.3s' }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLDivElement
                  el.style.borderColor = 'rgba(191,36,36,0.2)'
                  el.style.transform = 'translateY(-3px)'
                  el.style.boxShadow = '0 20px 50px rgba(0,0,0,0.3)'
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLDivElement
                  el.style.borderColor = 'rgba(255,255,255,0.06)'
                  el.style.transform = 'translateY(0)'
                  el.style.boxShadow = 'none'
                }}
              >
                {/* Stars */}
                <div className="flex gap-1 mb-5">
                  {[...Array(rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5" style={{ fill: '#bf2424', color: '#bf2424' }} />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-sm leading-relaxed flex-1 mb-6" style={{ color: '#8b949e', fontFamily: "'DM Sans', sans-serif", fontStyle: 'italic' }}>
                  "{quote}"
                </blockquote>

                {/* Author */}
                <div className="flex items-center gap-3 pt-5" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
                  <div className="w-9 h-9 rounded-full flex items-center justify-center shrink-0"
                    style={{ background: 'rgba(191,36,36,0.1)', border: '1px solid rgba(191,36,36,0.2)' }}>
                    <span className="font-display text-xs font-bold" style={{ color: '#bf2424' }}>{initials}</span>
                  </div>
                  <div>
                    <div className="font-display text-sm" style={{ fontWeight: 700, color: '#e8edf3' }}>{name}</div>
                    <div className="text-xs" style={{ color: '#5a6472', fontFamily: "'DM Sans', sans-serif" }}>
                      {title} · {company}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Secondary CTA */}
          <div className="text-center mt-12">
            <Link to="/consultation">
              <FancyButton>Read all case studies <ArrowRight className="w-4 h-4" /></FancyButton>
            </Link>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          INDUSTRIES
      ════════════════════════════════════════ */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="section-label mb-4">Industries We Serve</p>
            <h2 className="font-display" style={{ fontWeight: 800, color: '#e8edf3', fontSize: 'clamp(2rem, 5vw, 3.2rem)', lineHeight: 1 }}>
              WE PROTECT THE BUSINESSES<br />
              <span className="text-primary">THAT KEEP THE WORLD RUNNING</span>
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {industries.map(({ icon: Icon, label }) => (
              <div key={label}
                className="p-6 rounded-xl flex flex-col items-center text-center cursor-default"
                style={{ background: 'var(--card)', border: '1px solid rgba(255,255,255,0.06)', transition: 'all 0.3s' }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLDivElement
                  el.style.borderColor = 'rgba(191,36,36,0.25)'
                  el.style.transform = 'translateY(-3px)'
                  el.style.background = '#0d1117'
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLDivElement
                  el.style.borderColor = 'rgba(255,255,255,0.06)'
                  el.style.transform = 'translateY(0)'
                  el.style.background = 'var(--card)'
                }}
              >
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                  style={{ background: 'rgba(191,36,36,0.07)', border: '1px solid rgba(191,36,36,0.12)' }}>
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <span className="font-display" style={{ fontSize: '0.9rem', fontWeight: 600, color: '#c9d1d9', letterSpacing: '0.02em' }}>
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          THREAT REPORT CTA — lead gen
      ════════════════════════════════════════ */}
      <section className="threat-report-cta-section py-20 relative overflow-hidden" style={{
        background: 'linear-gradient(135deg, #06080b 0%, #060c10 100%)',
        borderTop: '1px solid rgba(191,36,36,0.08)',
        borderBottom: '1px solid rgba(191,36,36,0.08)',
      }}>
        <div className="absolute inset-0" style={{
          background: 'radial-gradient(ellipse 80% 80% at 20% 50%, rgba(191,36,36,0.05) 0%, transparent 60%)',
        }} />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded mb-8"
            style={{ background: 'rgba(191,36,36,0.07)', border: '1px solid rgba(191,36,36,0.18)' }}>
            <Download className="w-3.5 h-3.5 text-primary" />
            <span className="font-mono-data" style={{ color: '#bf2424', fontSize: '0.62rem', letterSpacing: '0.14em' }}>FREE DOWNLOAD — INSTANT ACCESS</span>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left: heading */}
            <h2 className="font-display" style={{ fontWeight: 800, color: '#e8edf3', fontSize: 'clamp(2rem, 4vw, 3.2rem)', lineHeight: 1 }}>
              2025 SMB THREAT<br />
              <span className="text-primary">LANDSCAPE REPORT</span>
            </h2>

            {/* Right: description + checklist + button */}
            <div>
              <p className="mb-6 text-sm leading-relaxed" style={{ color: '#5a6472', fontFamily: "'DM Sans', sans-serif" }}>
                Built from analysis of 2,400+ organizations. Discover the 7 vulnerabilities attackers are actively exploiting in your sector — and the exact steps to close them.
              </p>
              <ul className="flex flex-col gap-2 mb-8">
                {[
                  'Most-targeted industries in 2025',
                  'Real incident data and attacker playbooks',
                  'Your 30-day security quick-start checklist',
                  'Average SMB breach cost breakdown',
                ].map(item => (
                  <li key={item} className="flex items-center gap-2.5">
                    <CheckCircle className="w-4 h-4 text-primary shrink-0" />
                    <span className="text-sm" style={{ color: '#7d8a96', fontFamily: "'DM Sans', sans-serif" }}>{item}</span>
                  </li>
                ))}
              </ul>
              <Link to="/threat-report">
                <FancyButton>Download Free Report <Download className="w-4 h-4" /></FancyButton>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          FINAL CTA
      ════════════════════════════════════════ */}
      <section className="py-28 lg:py-36 relative overflow-hidden">
        <div className="absolute inset-0 hero-grid opacity-40" />
        <div className="absolute inset-0" style={{
          background: 'radial-gradient(ellipse 70% 80% at 50% 50%, rgba(191,36,36,0.06) 0%, transparent 70%)',
        }} />
        {/* Top + bottom accents */}
        <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(191,36,36,0.3), transparent)' }} />
        <div className="absolute bottom-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(191,36,36,0.15), transparent)' }} />

        <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <p className="section-label mb-7">Don't Wait to Get Attacked</p>
          <h2 className="font-display mb-7" style={{
            fontWeight: 800,
            lineHeight: 0.9,
            fontSize: 'clamp(3rem, 8vw, 6.5rem)',
            letterSpacing: '-0.02em',
          }}>
            <span style={{ color: '#1a1919' }}>AVOID</span>{' '}
            <span style={{ color: '#bf2424' }}>ATTACKS</span>
          </h2>
          <p className="mb-12 mx-auto" style={{
            fontFamily: "'DM Sans', sans-serif",
            color: '#5a6472',
            lineHeight: 1.75,
            fontSize: '1.05rem',
            maxWidth: '480px',
          }}>
            Book your free 30-minute consultation and let our security architects identify your top vulnerabilities — before your adversaries do.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
            <Link to="/consultation">
              <FancyButton>Book Free Consultation <ArrowRight className="w-4 h-4" /></FancyButton>
            </Link>
            <a href="tel:+27677497876">
              <FancyButton><Phone className="w-4 h-4" /> +27 67 749 7876</FancyButton>
            </a>
          </div>
          <p className="text-xs" style={{ color: '#3d4a56', fontFamily: "'DM Sans', sans-serif" }}>
            No commitment. Response within 2 business hours guaranteed.
          </p>
        </div>
      </section>

    </div>
  )
}
