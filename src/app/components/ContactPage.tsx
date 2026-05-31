import { useState } from 'react'
import {
  Phone, Mail, MapPin, MessageCircle, CheckCircle, Send,
  Clock, Shield, Users, ArrowRight, Linkedin, Twitter, Github,
} from 'lucide-react'

type Step = 'topic' | 'details' | 'contact' | 'done'

const topics = [
  { id: 'security', label: 'Cybersecurity Services', icon: Shield },
  { id: 'managed', label: 'Managed IT Services', icon: Users },
  { id: 'incident', label: 'Active Incident / Breach', icon: Clock, urgent: true },
  { id: 'audit', label: 'Security Audit / Pen Test', icon: Shield },
  { id: 'consult', label: 'Free Consultation', icon: MessageCircle },
  { id: 'other', label: 'General Inquiry', icon: Mail },
]

export function ContactPage() {
  const [step, setStep] = useState<Step>('topic')
  const [selected, setSelected] = useState('')
  const [details, setDetails] = useState('')
  const [contact, setContact] = useState({ name: '', email: '', phone: '', company: '' })
  const [errors, setErrors] = useState<Record<string, string>>({})

  const validateContact = () => {
    const e: Record<string, string> = {}
    if (!contact.name.trim()) e.name = 'Name required'
    if (!contact.email.trim() || !contact.email.includes('@')) e.email = 'Valid email required'
    if (!contact.phone.trim()) e.phone = 'Phone required'
    return e
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
  }

  return (
    <div style={{ paddingTop: '64px' }}>
      {/* Hero */}
      <section
        className="relative py-20 lg:py-24"
        style={{
          background: 'linear-gradient(180deg, #04060a 0%, #06080b 100%)',
          borderBottom: '1px solid rgba(255,255,255,0.06)',
        }}
      >
        <div className="absolute inset-0 hero-grid opacity-40" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <p className="section-label mb-5">We Respond Fast</p>
          <h1
            className="font-display mb-5"
            style={{ fontWeight: 800, color: '#e8edf3', lineHeight: 0.95, fontSize: 'clamp(3rem, 7vw, 5.5rem)' }}
          >
            LET'S PROTECT
            <br />
            <span className="text-primary text-glow">YOUR BUSINESS</span>
          </h1>
          <p
            className="mx-auto"
            style={{ fontFamily: "'DM Sans', sans-serif", color: '#8b949e', lineHeight: 1.7, fontSize: '1rem', maxWidth: '480px' }}
          >
            Our security team responds within 2 business hours. For active incidents, we're available 24/7.
          </p>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Left sidebar: contact info */}
            <div className="lg:col-span-2 flex flex-col gap-6">
              <div>
                <p className="section-label mb-5">Get in Touch</p>
                <div className="flex flex-col gap-4">
                  {[
                    {
                      icon: Phone,
                      label: 'Call Us',
                      value: '+27 67 749 7876',
                      sub: 'Mon–Fri 8am–6pm EST\n24/7 for active incidents',
                      href: 'tel:+27677497876',
                      color: '#bf2424',
                    },
                    {
                      icon: Mail,
                      label: 'Email Us',
                      value: 'technical@predatortech.co.za',
                      sub: 'Response within 2 business hours',
                      href: 'mailto:technical@predatortech.co.za',
                      color: '#00bcd4',
                    },
                    {
                      icon: MessageCircle,
                      label: 'WhatsApp',
                      value: '+27 67 749 7876',
                      sub: 'Quick questions, fast answers',
                      href: 'https://wa.me/27677497876',
                      color: '#22c55e',
                    },
                  ].map(({ icon: Icon, label, value, sub, href, color }) => (
                    <a
                      key={label}
                      href={href}
                      className="flex items-start gap-4 p-5 rounded-xl transition-all hover-card-glow"
                      style={{
                        background: '#0d1017',
                        border: '1px solid rgba(255,255,255,0.07)',
                        textDecoration: 'none',
                      }}
                    >
                      <div
                        className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                        style={{ background: `${color}14`, border: `1px solid ${color}30` }}
                      >
                        <Icon className="w-5 h-5" style={{ color }} />
                      </div>
                      <div>
                        <div className="text-xs mb-0.5" style={{ color: '#6b7685', fontFamily: "'DM Sans', sans-serif" }}>
                          {label}
                        </div>
                        <div
                          className="font-display"
                          style={{ fontSize: '1rem', fontWeight: 600, color: '#e8edf3' }}
                        >
                          {value}
                        </div>
                        <div className="text-xs mt-0.5" style={{ color: '#6b7685', fontFamily: "'DM Sans', sans-serif", whiteSpace: 'pre-line' }}>
                          {sub}
                        </div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* Office locations */}
              <div
                className="p-6 rounded-xl"
                style={{ background: '#0d1017', border: '1px solid rgba(255,255,255,0.07)' }}
              >
                <div className="flex items-center gap-2 mb-4">
                  <MapPin className="w-4 h-4 text-primary" />
                  <span className="font-display" style={{ fontSize: '1rem', fontWeight: 700, color: '#e8edf3' }}>Offices</span>
                </div>
                {[
                  { city: 'Lydenburg, MP', detail: 'Headquarters' },
                ].map(({ city, detail }) => (
                  <div key={city} className="py-2" style={{ borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
                    <div className="text-sm font-semibold" style={{ color: '#c9d1d9', fontFamily: "'DM Sans', sans-serif" }}>{city}</div>
                    <div className="text-xs" style={{ color: '#6b7685', fontFamily: "'DM Sans', sans-serif" }}>{detail}</div>
                  </div>
                ))}
              </div>

              {/* Social */}
              <div>
                <p className="section-label mb-4">Follow Us</p>
                <div className="flex gap-3">
                  {[
                    { icon: Linkedin, label: 'LinkedIn', href: '#' },
                    { icon: Twitter, label: 'Twitter / X', href: '#' },
                    { icon: Github, label: 'GitHub', href: '#' },
                  ].map(({ icon: Icon, label, href }) => (
                    <a
                      key={label}
                      href={href}
                      className="flex items-center gap-2 px-4 py-2.5 rounded-lg transition-all text-sm"
                      style={{
                        background: '#0d1017',
                        border: '1px solid rgba(255,255,255,0.08)',
                        color: '#6b7685',
                        fontFamily: "'DM Sans', sans-serif",
                        fontWeight: 500,
                        textDecoration: 'none',
                      }}
                      onMouseEnter={(e) => {
                        const el = e.currentTarget as HTMLAnchorElement
                        el.style.borderColor = 'rgba(191,36,36,0.3)'
                        el.style.color = '#bf2424'
                      }}
                      onMouseLeave={(e) => {
                        const el = e.currentTarget as HTMLAnchorElement
                        el.style.borderColor = 'rgba(255,255,255,0.08)'
                        el.style.color = '#6b7685'
                      }}
                    >
                      <Icon className="w-4 h-4" />
                      {label}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: conversational form */}
            <div className="lg:col-span-3">
              <div
                className="rounded-2xl overflow-hidden"
                style={{
                  background: '#0d1017',
                  border: '1px solid rgba(191,36,36,0.15)',
                  boxShadow: '0 0 60px rgba(0,0,0,0.4)',
                }}
              >
                <div
                  className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl"
                  style={{ background: 'linear-gradient(90deg, #bf2424, #00bcd4)' }}
                />

                {/* Progress */}
                <div
                  className="px-8 py-5"
                  style={{ borderBottom: '1px solid rgba(255,255,255,0.06)', background: 'rgba(0,0,0,0.2)' }}
                >
                  <div className="flex items-center gap-3">
                    {(['topic', 'details', 'contact', 'done'] as Step[]).map((s, i) => {
                      const steps: Step[] = ['topic', 'details', 'contact', 'done']
                      const current = steps.indexOf(step)
                      const isActive = s === step
                      const isDone = steps.indexOf(s) < current
                      return (
                        <div key={s} className="flex items-center gap-2">
                          <div
                            className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold transition-all"
                            style={{
                              background: isActive ? '#bf2424' : isDone ? 'rgba(191,36,36,0.2)' : 'rgba(255,255,255,0.06)',
                              color: isActive ? '#ffffff' : isDone ? '#bf2424' : '#4b5563',
                              fontFamily: "'JetBrains Mono', monospace",
                              fontSize: '0.65rem',
                            }}
                          >
                            {isDone ? '✓' : i + 1}
                          </div>
                          {i < 3 && (
                            <div
                              className="w-8 h-px"
                              style={{ background: isDone ? 'rgba(191,36,36,0.4)' : 'rgba(255,255,255,0.08)' }}
                            />
                          )}
                        </div>
                      )
                    })}
                    <span
                      className="ml-2 text-xs"
                      style={{ color: '#6b7685', fontFamily: "'DM Sans', sans-serif" }}
                    >
                      {step === 'topic' ? 'Select topic' : step === 'details' ? 'Add details' : step === 'contact' ? 'Your info' : 'Sent!'}
                    </span>
                  </div>
                </div>

                <div className="p-8">
                  {step === 'topic' && (
                    <div>
                      <h2 className="font-display mb-2" style={{ fontSize: '1.6rem', fontWeight: 700, color: '#e8edf3' }}>
                        How can we help you?
                      </h2>
                      <p className="text-sm mb-6" style={{ color: '#6b7685', fontFamily: "'DM Sans', sans-serif" }}>
                        Select the topic that best describes your need.
                      </p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {topics.map(({ id, label, icon: Icon, urgent }) => (
                          <button
                            key={id}
                            className="flex items-center gap-3 p-4 rounded-xl text-left transition-all"
                            style={{
                              background: selected === id ? 'rgba(191,36,36,0.08)' : 'rgba(255,255,255,0.02)',
                              border: selected === id
                                ? '1px solid rgba(191,36,36,0.35)'
                                : urgent
                                  ? '1px solid rgba(239,68,68,0.25)'
                                  : '1px solid rgba(255,255,255,0.07)',
                              cursor: 'pointer',
                            }}
                            onClick={() => setSelected(id)}
                          >
                            <Icon
                              className="w-5 h-5 flex-shrink-0"
                              style={{ color: urgent ? '#ef4444' : selected === id ? '#bf2424' : '#6b7685' }}
                            />
                            <span
                              className="text-sm font-semibold"
                              style={{
                                fontFamily: "'DM Sans', sans-serif",
                                color: urgent ? '#ef4444' : selected === id ? '#bf2424' : '#c9d1d9',
                              }}
                            >
                              {label}
                              {urgent && ' ⚡'}
                            </span>
                          </button>
                        ))}
                      </div>
                      <div className="mt-6">
                        <button
                          className="btn-primary w-full"
                          style={{ justifyContent: 'center' }}
                          disabled={!selected}
                          onClick={() => selected && setStep('details')}
                        >
                          Continue
                          <ArrowRight className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  )}

                  {step === 'details' && (
                    <div>
                      <h2 className="font-display mb-2" style={{ fontSize: '1.6rem', fontWeight: 700, color: '#e8edf3' }}>
                        Tell us more
                      </h2>
                      <p className="text-sm mb-6" style={{ color: '#6b7685', fontFamily: "'DM Sans', sans-serif" }}>
                        The more context you share, the more prepared our team will be.
                      </p>
                      <textarea
                        className="w-full p-4 rounded-xl resize-none"
                        rows={6}
                        placeholder="Describe your situation, infrastructure size, current security tools, or specific concerns..."
                        style={{
                          background: '#0a0e14',
                          border: '1px solid rgba(255,255,255,0.1)',
                          color: '#e8edf3',
                          fontFamily: "'DM Sans', sans-serif",
                          fontSize: '0.9rem',
                          outline: 'none',
                        }}
                        value={details}
                        onChange={(e) => setDetails(e.target.value)}
                        onFocus={(e) => (e.currentTarget.style.borderColor = 'rgba(191,36,36,0.4)')}
                        onBlur={(e) => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)')}
                      />
                      <div className="flex gap-3 mt-4">
                        <button className="btn-ghost flex-1" style={{ justifyContent: 'center' }} onClick={() => setStep('topic')}>
                          Back
                        </button>
                        <button className="btn-primary flex-1" style={{ justifyContent: 'center' }} onClick={() => setStep('contact')}>
                          Continue
                          <ArrowRight className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  )}

                  {step === 'contact' && (
                    <div>
                      <h2 className="font-display mb-2" style={{ fontSize: '1.6rem', fontWeight: 700, color: '#e8edf3' }}>
                        Your contact info
                      </h2>
                      <p className="text-sm mb-6" style={{ color: '#6b7685', fontFamily: "'DM Sans', sans-serif" }}>
                        We'll reach out within 2 business hours.
                      </p>
                      <div className="flex flex-col gap-4">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                            <label style={labelStyle}>Full Name *</label>
                            <input
                              style={{ ...inputStyle, borderColor: errors.name ? '#ef4444' : 'rgba(255,255,255,0.1)' }}
                              placeholder="Marcus Johnson"
                              value={contact.name}
                              onChange={(e) => {
                                setContact((p) => ({ ...p, name: e.target.value }))
                                setErrors((p) => ({ ...p, name: '' }))
                              }}
                              onFocus={(e) => (e.currentTarget.style.borderColor = 'rgba(191,36,36,0.4)')}
                              onBlur={(e) => (e.currentTarget.style.borderColor = errors.name ? '#ef4444' : 'rgba(255,255,255,0.1)')}
                            />
                            {errors.name && <p className="mt-1 text-xs" style={{ color: '#ef4444', fontFamily: "'DM Sans', sans-serif" }}>{errors.name}</p>}
                          </div>
                          <div>
                            <label style={labelStyle}>Company</label>
                            <input
                              style={inputStyle}
                              placeholder="Summit Logistics"
                              value={contact.company}
                              onChange={(e) => setContact((p) => ({ ...p, company: e.target.value }))}
                              onFocus={(e) => (e.currentTarget.style.borderColor = 'rgba(191,36,36,0.4)')}
                              onBlur={(e) => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)')}
                            />
                          </div>
                        </div>
                        <div>
                          <label style={labelStyle}>Work Email *</label>
                          <input
                            type="email"
                            style={{ ...inputStyle, borderColor: errors.email ? '#ef4444' : 'rgba(255,255,255,0.1)' }}
                            placeholder="marcus@summitlogistics.com"
                            value={contact.email}
                            onChange={(e) => {
                              setContact((p) => ({ ...p, email: e.target.value }))
                              setErrors((p) => ({ ...p, email: '' }))
                            }}
                            onFocus={(e) => (e.currentTarget.style.borderColor = 'rgba(191,36,36,0.4)')}
                            onBlur={(e) => (e.currentTarget.style.borderColor = errors.email ? '#ef4444' : 'rgba(255,255,255,0.1)')}
                          />
                          {errors.email && <p className="mt-1 text-xs" style={{ color: '#ef4444', fontFamily: "'DM Sans', sans-serif" }}>{errors.email}</p>}
                        </div>
                        <div>
                          <label style={labelStyle}>Phone Number *</label>
                          <input
                            type="tel"
                            style={{ ...inputStyle, borderColor: errors.phone ? '#ef4444' : 'rgba(255,255,255,0.1)' }}
                            placeholder="+27 67 749 7876"
                            value={contact.phone}
                            onChange={(e) => {
                              setContact((p) => ({ ...p, phone: e.target.value }))
                              setErrors((p) => ({ ...p, phone: '' }))
                            }}
                            onFocus={(e) => (e.currentTarget.style.borderColor = 'rgba(191,36,36,0.4)')}
                            onBlur={(e) => (e.currentTarget.style.borderColor = errors.phone ? '#ef4444' : 'rgba(255,255,255,0.1)')}
                          />
                          {errors.phone && <p className="mt-1 text-xs" style={{ color: '#ef4444', fontFamily: "'DM Sans', sans-serif" }}>{errors.phone}</p>}
                        </div>
                        <div className="flex gap-3 mt-2">
                          <button className="btn-ghost flex-1" style={{ justifyContent: 'center' }} onClick={() => setStep('details')}>
                            Back
                          </button>
                          <button
                            className="btn-primary flex-1"
                            style={{ justifyContent: 'center' }}
                            onClick={() => {
                              const errs = validateContact()
                              if (Object.keys(errs).length > 0) { setErrors(errs); return }
                              setStep('done')
                            }}
                          >
                            Send Message
                            <Send className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  )}

                  {step === 'done' && (
                    <div className="py-10 text-center">
                      <div
                        className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6"
                        style={{ background: 'rgba(191,36,36,0.1)', border: '2px solid rgba(191,36,36,0.4)', boxShadow: '0 0 40px rgba(191,36,36,0.2)' }}
                      >
                        <CheckCircle className="w-10 h-10 text-primary" />
                      </div>
                      <h2 className="font-display mb-3" style={{ fontSize: '2rem', fontWeight: 800, color: '#e8edf3' }}>
                        Message Received
                      </h2>
                      <p className="mb-2" style={{ fontFamily: "'DM Sans', sans-serif", color: '#8b949e', lineHeight: 1.6 }}>
                        Thank you, <span className="text-primary">{contact.name}</span>. Our team will respond to{' '}
                        <span className="text-primary">{contact.email}</span> within 2 business hours.
                      </p>
                      <p className="text-sm mb-8" style={{ color: '#6b7685', fontFamily: "'DM Sans', sans-serif" }}>
                        For urgent security incidents, call us directly at +27 67 749 7876.
                      </p>
                      <div className="flex gap-3 justify-center">
                        <a href="tel:+27677497876">
                          <button className="btn-ghost">
                            <Phone className="w-4 h-4" />
                            Call Now
                          </button>
                        </a>
                        <button
                          className="btn-primary"
                          onClick={() => {
                            setStep('topic')
                            setSelected('')
                            setDetails('')
                            setContact({ name: '', email: '', phone: '', company: '' })
                          }}
                        >
                          Send Another Message
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Response time guarantee */}
              <div
                className="mt-4 p-4 rounded-xl flex items-center gap-3"
                style={{ background: 'rgba(191,36,36,0.05)', border: '1px solid rgba(191,36,36,0.15)' }}
              >
                <div
                  className="w-2 h-2 rounded-full flex-shrink-0"
                  style={{ background: '#bf2424', boxShadow: '0 0 8px rgba(191,36,36,0.8)', animation: 'pulse-glow 2s ease-in-out infinite' }}
                />
                <span className="text-sm" style={{ color: '#8b949e', fontFamily: "'DM Sans', sans-serif" }}>
                  <span className="text-primary font-semibold">Average response: 47 minutes</span> — We track it every day.
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
