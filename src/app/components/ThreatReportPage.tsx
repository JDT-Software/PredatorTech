import { useState } from 'react'
import { Link } from 'react-router'
import {
  Shield, Download, CheckCircle, AlertTriangle, Lock, ArrowRight,
  FileText, Building2, Users, Mail, Phone, Briefcase, ChevronRight,
} from 'lucide-react'

const industries = [
  'Logistics & Transportation',
  'Manufacturing',
  'Warehousing & Distribution',
  'Corporate / Professional Services',
  'Healthcare',
  'Financial Services',
  'Retail',
  'Industrial / Energy',
  'Technology',
  'Government / Public Sector',
  'Other',
]

const employeeRanges = [
  '1–10 employees',
  '11–50 employees',
  '51–200 employees',
  '201–500 employees',
  '501–1,000 employees',
  '1,000+ employees',
]

const reportHighlights = [
  { stat: '87%', desc: 'of SMBs experienced a cyberattack in 2024' },
  { stat: '$1.4M', desc: 'average cost of a data breach for a mid-size business' },
  { stat: '197 days', desc: 'average time to detect a breach without monitoring' },
  { stat: '3x', desc: 'increase in ransomware targeting logistics & warehousing' },
]

export function ThreatReportPage() {
  const [formData, setFormData] = useState({
    name: '', company: '', industry: '', employees: '', email: '', phone: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})

  const validate = () => {
    const e: Record<string, string> = {}
    if (!formData.name.trim()) e.name = 'Full name is required'
    if (!formData.company.trim()) e.company = 'Company name is required'
    if (!formData.industry) e.industry = 'Please select your industry'
    if (!formData.employees) e.employees = 'Please select employee count'
    if (!formData.email.trim() || !formData.email.includes('@')) e.email = 'Valid email is required'
    if (!formData.phone.trim()) e.phone = 'Phone number is required'
    return e
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length > 0) {
      setErrors(errs)
      return
    }
    setSubmitted(true)
  }

  const inputStyle: React.CSSProperties = {
    width: '100%',
    padding: '0.75rem 1rem',
    background: '#0a0e14',
    border: '1px solid rgba(255,255,255,0.1)',
    borderRadius: '0.5rem',
    color: '#e8edf3',
    fontFamily: "'DM Sans', sans-serif",
    fontSize: '0.9rem',
    outline: 'none',
    transition: 'border-color 0.2s',
  }

  const labelStyle: React.CSSProperties = {
    display: 'block',
    fontFamily: "'DM Sans', sans-serif",
    fontSize: '0.8rem',
    fontWeight: 600,
    color: '#8b949e',
    marginBottom: '0.4rem',
    letterSpacing: '0.03em',
  }

  return (
    <div style={{ paddingTop: '64px' }}>
      {/* Hero */}
      <section
        className="relative py-20 lg:py-28"
        style={{
          background: 'linear-gradient(180deg, #04060a 0%, #06080b 100%)',
          borderBottom: '1px solid rgba(255,255,255,0.06)',
        }}
      >
        <div className="absolute inset-0 hero-grid opacity-50" />
        <div
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse 70% 60% at 30% 50%, rgba(191,36,36,0.07) 0%, transparent 65%)',
          }}
        />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left */}
            <div>
              <div
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded mb-6"
                style={{ background: 'rgba(191,36,36,0.08)', border: '1px solid rgba(191,36,36,0.2)' }}
              >
                <Download className="w-3.5 h-3.5 text-primary" />
                <span className="font-mono-data" style={{ color: '#bf2424', fontSize: '0.65rem', letterSpacing: '0.12em' }}>FREE REPORT — NO CREDIT CARD</span>
              </div>

              <h1
                className="font-display mb-6"
                style={{ fontWeight: 800, color: '#e8edf3', lineHeight: 0.95, fontSize: 'clamp(2.5rem, 6vw, 4.5rem)' }}
              >
                2025 SMB THREAT
                <br />
                LANDSCAPE
                <br />
                <span className="text-primary text-glow">REPORT</span>
              </h1>

              <p
                className="mb-8"
                style={{ fontFamily: "'DM Sans', sans-serif", color: '#8b949e', lineHeight: 1.7, fontSize: '1rem' }}
              >
                Discover the exact vulnerabilities attackers are exploiting right now in businesses like yours — and the 7 immediate steps your team can take to reduce exposure today.
              </p>

              {/* Stat highlights */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                {reportHighlights.map(({ stat, desc }) => (
                  <div
                    key={stat}
                    className="p-4 rounded-xl"
                    style={{ background: '#0d1017', border: '1px solid rgba(255,255,255,0.07)' }}
                  >
                    <div
                      className="stat-number mb-1"
                      style={{ fontSize: '1.6rem', color: '#bf2424' }}
                    >
                      {stat}
                    </div>
                    <div className="text-xs" style={{ color: '#6b7685', fontFamily: "'DM Sans', sans-serif", lineHeight: 1.4 }}>
                      {desc}
                    </div>
                  </div>
                ))}
              </div>

              <ul className="flex flex-col gap-2">
                {[
                  'Most-targeted industries in 2025',
                  'Real incident case studies from SMBs',
                  'Attacker playbooks decoded',
                  '30-day security quick-start checklist',
                  'Budget-friendly remediation priorities',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2.5">
                    <CheckCircle className="w-4 h-4 text-primary shrink-0" />
                    <span className="text-sm" style={{ color: '#8b949e', fontFamily: "'DM Sans', sans-serif" }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Form */}
            <div
              className="rounded-2xl overflow-hidden relative"
              style={{
                background: '#0d1017',
                border: '1px solid rgba(191,36,36,0.18)',
                boxShadow: '0 0 60px rgba(0,0,0,0.5), 0 0 40px rgba(191,36,36,0.06)',
              }}
            >
              <div
                className="absolute top-0 left-0 right-0 h-1"
                style={{ background: '#bf2424' }}
              />

              {submitted ? (
                <div className="p-10 text-center">
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6"
                    style={{ background: 'rgba(191,36,36,0.12)', border: '1px solid rgba(191,36,36,0.3)' }}
                  >
                    <CheckCircle className="w-8 h-8 text-primary" />
                  </div>
                  <h3
                    className="font-display mb-3"
                    style={{ fontSize: '1.8rem', fontWeight: 700, color: '#e8edf3' }}
                  >
                    Report on its way!
                  </h3>
                  <p
                    className="mb-6"
                    style={{ fontFamily: "'DM Sans', sans-serif", color: '#8b949e', lineHeight: 1.6 }}
                  >
                    Check your inbox — your copy of the 2025 Threat Landscape Report has been sent to{' '}
                    <span className="text-primary">{formData.email}</span>.
                  </p>
                  <p className="mb-8 text-sm" style={{ color: '#6b7685', fontFamily: "'DM Sans', sans-serif" }}>
                    Want to discuss your specific vulnerabilities with one of our security architects?
                  </p>
                  <Link to="/consultation">
                    <button className="btn-primary w-full">
                      Book Your Free Consultation
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </Link>
                </div>
              ) : (
                <div className="p-8">
                  <div className="mb-6">
                    <h2 className="font-display mb-1" style={{ fontSize: '1.5rem', fontWeight: 700, color: '#e8edf3' }}>
                      Get Your Free Report
                    </h2>
                    <p className="text-sm" style={{ color: '#6b7685', fontFamily: "'DM Sans', sans-serif" }}>
                      Delivered instantly to your inbox.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    {/* Name */}
                    <div>
                      <label style={labelStyle}>Full Name *</label>
                      <input
                        style={{
                          ...inputStyle,
                          borderColor: errors.name ? '#ef4444' : 'rgba(255,255,255,0.1)',
                        }}
                        placeholder="Marcus Johnson"
                        value={formData.name}
                        onChange={(e) => {
                          setFormData((p) => ({ ...p, name: e.target.value }))
                          setErrors((p) => ({ ...p, name: '' }))
                        }}
                        onFocus={(e) => (e.currentTarget.style.borderColor = 'rgba(191,36,36,0.4)')}
                        onBlur={(e) => (e.currentTarget.style.borderColor = errors.name ? '#ef4444' : 'rgba(255,255,255,0.1)')}
                      />
                      {errors.name && <p className="mt-1 text-xs" style={{ color: '#ef4444', fontFamily: "'DM Sans', sans-serif" }}>{errors.name}</p>}
                    </div>

                    {/* Company */}
                    <div>
                      <label style={labelStyle}>Company Name *</label>
                      <input
                        style={{
                          ...inputStyle,
                          borderColor: errors.company ? '#ef4444' : 'rgba(255,255,255,0.1)',
                        }}
                        placeholder="Summit Logistics Group"
                        value={formData.company}
                        onChange={(e) => {
                          setFormData((p) => ({ ...p, company: e.target.value }))
                          setErrors((p) => ({ ...p, company: '' }))
                        }}
                        onFocus={(e) => (e.currentTarget.style.borderColor = 'rgba(191,36,36,0.4)')}
                        onBlur={(e) => (e.currentTarget.style.borderColor = errors.company ? '#ef4444' : 'rgba(255,255,255,0.1)')}
                      />
                      {errors.company && <p className="mt-1 text-xs" style={{ color: '#ef4444', fontFamily: "'DM Sans', sans-serif" }}>{errors.company}</p>}
                    </div>

                    {/* Industry */}
                    <div>
                      <label style={labelStyle}>Industry *</label>
                      <select
                        style={{
                          ...inputStyle,
                          borderColor: errors.industry ? '#ef4444' : 'rgba(255,255,255,0.1)',
                          color: formData.industry ? '#e8edf3' : '#4b5563',
                        }}
                        value={formData.industry}
                        onChange={(e) => {
                          setFormData((p) => ({ ...p, industry: e.target.value }))
                          setErrors((p) => ({ ...p, industry: '' }))
                        }}
                        onFocus={(e) => (e.currentTarget.style.borderColor = 'rgba(191,36,36,0.4)')}
                        onBlur={(e) => (e.currentTarget.style.borderColor = errors.industry ? '#ef4444' : 'rgba(255,255,255,0.1)')}
                      >
                        <option value="" style={{ background: '#0d1017' }}>Select your industry</option>
                        {industries.map((ind) => (
                          <option key={ind} value={ind} style={{ background: '#0d1017' }}>{ind}</option>
                        ))}
                      </select>
                      {errors.industry && <p className="mt-1 text-xs" style={{ color: '#ef4444', fontFamily: "'DM Sans', sans-serif" }}>{errors.industry}</p>}
                    </div>

                    {/* Employees */}
                    <div>
                      <label style={labelStyle}>Number of Employees *</label>
                      <select
                        style={{
                          ...inputStyle,
                          borderColor: errors.employees ? '#ef4444' : 'rgba(255,255,255,0.1)',
                          color: formData.employees ? '#e8edf3' : '#4b5563',
                        }}
                        value={formData.employees}
                        onChange={(e) => {
                          setFormData((p) => ({ ...p, employees: e.target.value }))
                          setErrors((p) => ({ ...p, employees: '' }))
                        }}
                        onFocus={(e) => (e.currentTarget.style.borderColor = 'rgba(191,36,36,0.4)')}
                        onBlur={(e) => (e.currentTarget.style.borderColor = errors.employees ? '#ef4444' : 'rgba(255,255,255,0.1)')}
                      >
                        <option value="" style={{ background: '#0d1017' }}>Select employee range</option>
                        {employeeRanges.map((range) => (
                          <option key={range} value={range} style={{ background: '#0d1017' }}>{range}</option>
                        ))}
                      </select>
                      {errors.employees && <p className="mt-1 text-xs" style={{ color: '#ef4444', fontFamily: "'DM Sans', sans-serif" }}>{errors.employees}</p>}
                    </div>

                    {/* Email */}
                    <div>
                      <label style={labelStyle}>Work Email *</label>
                      <input
                        type="email"
                        style={{
                          ...inputStyle,
                          borderColor: errors.email ? '#ef4444' : 'rgba(255,255,255,0.1)',
                        }}
                        placeholder="marcus@summitlogistics.com"
                        value={formData.email}
                        onChange={(e) => {
                          setFormData((p) => ({ ...p, email: e.target.value }))
                          setErrors((p) => ({ ...p, email: '' }))
                        }}
                        onFocus={(e) => (e.currentTarget.style.borderColor = 'rgba(191,36,36,0.4)')}
                        onBlur={(e) => (e.currentTarget.style.borderColor = errors.email ? '#ef4444' : 'rgba(255,255,255,0.1)')}
                      />
                      {errors.email && <p className="mt-1 text-xs" style={{ color: '#ef4444', fontFamily: "'DM Sans', sans-serif" }}>{errors.email}</p>}
                    </div>

                    {/* Phone */}
                    <div>
                      <label style={labelStyle}>Phone Number *</label>
                      <input
                        type="tel"
                        style={{
                          ...inputStyle,
                          borderColor: errors.phone ? '#ef4444' : 'rgba(255,255,255,0.1)',
                        }}
                        placeholder="+27 67 749 7876"
                        value={formData.phone}
                        onChange={(e) => {
                          setFormData((p) => ({ ...p, phone: e.target.value }))
                          setErrors((p) => ({ ...p, phone: '' }))
                        }}
                        onFocus={(e) => (e.currentTarget.style.borderColor = 'rgba(191,36,36,0.4)')}
                        onBlur={(e) => (e.currentTarget.style.borderColor = errors.phone ? '#ef4444' : 'rgba(255,255,255,0.1)')}
                      />
                      {errors.phone && <p className="mt-1 text-xs" style={{ color: '#ef4444', fontFamily: "'DM Sans', sans-serif" }}>{errors.phone}</p>}
                    </div>

                    <button type="submit" className="btn-primary w-full mt-2" style={{ justifyContent: 'center', padding: '0.85rem' }}>
                      Download Free Report
                      <Download className="w-4 h-4" />
                    </button>

                    <p className="text-center text-xs" style={{ color: '#4b5563', fontFamily: "'DM Sans', sans-serif" }}>
                      🔒 We never sell your data. Unsubscribe any time.
                    </p>
                  </form>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Social proof */}
      <section
        className="py-16"
        style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}
      >
        <div className="max-w-5xl mx-auto px-6 lg:px-8 text-center">
          <p className="section-label mb-10">Downloaded by 14,000+ security leaders</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                quote: "The most actionable threat intelligence report I've read this year. Practical, specific, and genuinely alarming in the right way.",
                name: 'Ryan Caldwell',
                title: 'CISO, Nexus Financial',
              },
              {
                quote: "This report convinced our board to increase the security budget. The data around logistics sector targeting was eye-opening.",
                name: 'Lisa Park',
                title: 'VP Operations, FastFreight Inc.',
              },
              {
                quote: "Shared this with our entire leadership team. The 30-day checklist alone was worth the download.",
                name: 'Tom Nguyen',
                title: 'IT Manager, CoreTech Distribution',
              },
            ].map(({ quote, name, title }) => (
              <div
                key={name}
                className="p-6 rounded-xl text-left"
                style={{ background: '#0d1017', border: '1px solid rgba(255,255,255,0.07)' }}
              >
                <p
                  className="text-sm leading-relaxed mb-4"
                  style={{ fontFamily: "'DM Sans', sans-serif", color: '#8b949e', fontStyle: 'italic' }}
                >
                  "{quote}"
                </p>
                <div className="font-display text-sm" style={{ color: '#e8edf3', fontWeight: 600 }}>{name}</div>
                <div className="text-xs" style={{ color: '#bf2424', fontFamily: "'DM Sans', sans-serif" }}>{title}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
