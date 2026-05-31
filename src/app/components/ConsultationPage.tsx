import { Link } from 'react-router'
import {
  Calendar, CheckCircle, Shield, Clock, Users, Award,
  ArrowRight, Phone, Mail, Zap, Lock, Star,
} from 'lucide-react'

const benefits = [
  {
    icon: Shield,
    title: 'Personalized Threat Assessment',
    desc: 'Our security architect maps your specific industry risks, infrastructure, and existing controls to identify your highest-priority vulnerabilities.',
  },
  {
    icon: Zap,
    title: 'Immediate Actionable Wins',
    desc: 'You leave the call with 3–5 specific, zero-cost improvements you can implement before end of week to reduce your attack surface today.',
  },
  {
    icon: Lock,
    title: 'Custom Security Roadmap',
    desc: 'We build a phased 90-day plan tailored to your budget, team size, and risk tolerance — no generic recommendations.',
  },
  {
    icon: Clock,
    title: 'No Sales Pressure',
    desc: 'This is a strategy session, not a pitch meeting. You get expert guidance whether you become a client or not.',
  },
]

const stats = [
  { value: '2,400+', label: 'Businesses Consulted' },
  { value: '30 min', label: 'No-pressure session' },
  { value: '98%', label: 'Satisfaction rate' },
  { value: '< 2hr', label: 'Response to book' },
]

export function ConsultationPage() {
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
            background: 'radial-gradient(ellipse 60% 70% at 60% 40%, rgba(191,36,36,0.06) 0%, transparent 65%)',
          }}
        />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <p className="section-label mb-6">Free 30-Minute Strategy Session</p>
          <h1
            className="font-display mb-6"
            style={{ fontWeight: 800, color: '#e8edf3', lineHeight: 0.95, fontSize: 'clamp(2.8rem, 7vw, 5.5rem)' }}
          >
            KNOW YOUR RISK.
            <br />
            <span className="text-primary text-glow">OWN YOUR SECURITY.</span>
          </h1>
          <p
            className="mx-auto mb-10"
            style={{ fontFamily: "'DM Sans', sans-serif", color: '#8b949e', lineHeight: 1.7, fontSize: '1.05rem', maxWidth: '540px' }}
          >
            Book a free 30-minute consultation with a Predator Tech security architect. No sales pitch — just a clear picture of your risk and how to fix it.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a href="tel:+27677497876">
              <button className="btn-ghost">
                <Phone className="w-4 h-4" />
                +27 67 749 7876
              </button>
            </a>
            <a href="mailto:technical@predatortech.co.za">
              <button className="btn-ghost">
                <Mail className="w-4 h-4" />
                technical@predatortech.co.za
              </button>
            </a>
          </div>
        </div>
      </section>

      {/* Main content */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Left: benefits */}
            <div>
              <p className="section-label mb-4">What to Expect</p>
              <h2
                className="font-display mb-8"
                style={{ fontWeight: 700, color: '#e8edf3', fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)' }}
              >
                30 Minutes That Could
                <span className="text-primary"> Change Everything</span>
              </h2>

              <div className="flex flex-col gap-6 mb-10">
                {benefits.map(({ icon: Icon, title, desc }) => (
                  <div key={title} className="flex items-start gap-4">
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5"
                      style={{ background: 'rgba(191,36,36,0.1)', border: '1px solid rgba(191,36,36,0.2)' }}
                    >
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3
                        className="font-display mb-1"
                        style={{ fontSize: '1.15rem', fontWeight: 700, color: '#e8edf3' }}
                      >
                        {title}
                      </h3>
                      <p className="text-sm leading-relaxed" style={{ color: '#8b949e', fontFamily: "'DM Sans', sans-serif" }}>
                        {desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4">
                {stats.map(({ value, label }) => (
                  <div
                    key={label}
                    className="p-5 rounded-xl"
                    style={{ background: '#0d1017', border: '1px solid rgba(255,255,255,0.07)' }}
                  >
                    <div className="stat-number mb-1" style={{ fontSize: '1.8rem' }}>{value}</div>
                    <div className="text-xs" style={{ color: '#6b7685', fontFamily: "'DM Sans', sans-serif" }}>{label}</div>
                  </div>
                ))}
              </div>

              {/* Social proof */}
              <div
                className="mt-8 p-6 rounded-xl"
                style={{ background: '#0d1017', border: '1px solid rgba(191,36,36,0.1)' }}
              >
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4" style={{ fill: '#bf2424', color: '#bf2424' }} />
                  ))}
                </div>
                <p
                  className="text-sm leading-relaxed mb-3"
                  style={{ fontFamily: "'DM Sans', sans-serif", color: '#8b949e', fontStyle: 'italic' }}
                >
                  "I expected a sales call. Instead I got a genuine expert who identified two critical vulnerabilities in our network within 20 minutes. We became clients that same week."
                </p>
                <div className="font-display text-sm" style={{ color: '#e8edf3', fontWeight: 600 }}>Tom Rodriguez</div>
                <div className="text-xs" style={{ color: '#bf2424', fontFamily: "'DM Sans', sans-serif" }}>COO, Pacific Warehouse Solutions</div>
              </div>
            </div>

            {/* Right: Calendly placeholder */}
            <div>
              <div
                className="rounded-2xl overflow-hidden"
                style={{
                  background: '#0d1017',
                  border: '1px solid rgba(191,36,36,0.18)',
                  boxShadow: '0 0 60px rgba(0,0,0,0.5), 0 0 30px rgba(191,36,36,0.06)',
                }}
              >
                {/* Header */}
                <div
                  className="p-6"
                  style={{ borderBottom: '1px solid rgba(255,255,255,0.06)', background: 'rgba(0,0,0,0.2)' }}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center"
                      style={{ background: 'rgba(191,36,36,0.1)', border: '1px solid rgba(191,36,36,0.2)' }}
                    >
                      <Calendar className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-display" style={{ fontSize: '1.1rem', fontWeight: 700, color: '#e8edf3' }}>
                        Security Consultation
                      </div>
                      <div className="text-xs" style={{ color: '#bf2424', fontFamily: "'DM Sans', sans-serif" }}>
                        Predator Tech · 30 minutes · Free
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 text-xs" style={{ color: '#6b7685', fontFamily: "'DM Sans', sans-serif" }}>
                    <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" /> 30 min</span>
                    <span className="flex items-center gap-1.5"><Users className="w-3.5 h-3.5" /> Video or Phone</span>
                    <span className="flex items-center gap-1.5"><Shield className="w-3.5 h-3.5 text-primary" /> Confidential</span>
                  </div>
                </div>

                {/* Calendly inline embed */}
                <iframe
                  src="https://calendly.com/devwithjacques/30min?background_color=0d1017&text_color=e8edf3&primary_color=bf2424"
                  width="100%"
                  height="660"
                  frameBorder="0"
                  title="Schedule a consultation"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who we help */}
      <section
        className="py-20"
        style={{ background: '#080c10', borderTop: '1px solid rgba(255,255,255,0.05)' }}
      >
        <div className="max-w-5xl mx-auto px-6 lg:px-8 text-center">
          <p className="section-label mb-4">Who We Consult With</p>
          <h2 className="font-display mb-10" style={{ fontWeight: 700, color: '#e8edf3', fontSize: 'clamp(1.8rem, 4vw, 3rem)' }}>
            Best Fit for Business Leaders Who
            <span className="text-primary"> Are Ready to Act</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
            {[
              "You've experienced a security incident and want to prevent the next one",
              "You're growing fast and security hasn't kept pace with your infrastructure",
              "You're concerned about compliance requirements (SOC 2, HIPAA, NIST)",
              "Your IT team is overwhelmed and you need strategic reinforcement",
              "You're preparing for a board-level audit or investor due diligence",
              "You want to reduce cyber insurance premiums with verified controls",
            ].map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 p-4 rounded-lg"
                style={{ background: '#0d1017', border: '1px solid rgba(255,255,255,0.07)' }}
              >
                <CheckCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                <span className="text-sm" style={{ color: '#8b949e', fontFamily: "'DM Sans', sans-serif" }}>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
