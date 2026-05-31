import { Link } from 'react-router'
import { Shield, Mail, Phone, MapPin, Linkedin, Twitter, Github, ArrowRight } from 'lucide-react'

const services = [
  'Endpoint Protection',
  'Network Security',
  '24/7 Threat Monitoring',
  'Cloud Security',
  'Managed IT Services',
  'Security Audits',
]

const company = [
  { label: 'About Us', path: '/' },
  { label: 'Services', path: '/services' },
  { label: 'Contact', path: '/contact' },
]

const resources = [
  { label: 'Free Threat Report', path: '/threat-report' },
  { label: 'Book Consultation', path: '/consultation' },
  { label: 'Case Studies', path: '/' },
  { label: 'Documentation', path: '/' },
  { label: 'Privacy Policy', path: '/' },
]

export function Footer() {
  return (
    <footer
      className="footer-section"
      style={{
        background: '#04060a',
        borderTop: '1px solid rgba(255,255,255,0.07)',
      }}
    >
      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2.5 mb-6">
              <div
                className="w-9 h-9 rounded flex items-center justify-center flex-shrink-0"
                style={{
                  background: '#bf2424',
                  boxShadow: '0 0 15px rgba(191,36,36,0.25)',
                }}
              >
                <Shield className="w-5 h-5 text-black" strokeWidth={2.5} />
              </div>
              <div className="font-display">
                <span className="text-white" style={{ fontSize: '1.2rem', fontWeight: 700, letterSpacing: '0.05em' }}>PREDATOR</span>
                <span className="text-primary ml-1" style={{ fontSize: '1.2rem', fontWeight: 700, letterSpacing: '0.05em' }}>TECH</span>
              </div>
            </div>

            <p className="text-sm leading-relaxed mb-6" style={{ color: '#6b7685', maxWidth: '300px', fontFamily: "'DM Sans', sans-serif" }}>
              Enterprise-grade cybersecurity and managed IT services for businesses that can't afford to be compromised. We hunt threats before they find you.
            </p>

            <div className="flex flex-col gap-3 mb-8">
              <a
                href="tel:+27677497876"
                className="flex items-center gap-2.5 text-sm transition-colors hover:text-primary"
                style={{ color: '#8b949e', fontFamily: "'DM Sans', sans-serif" }}
              >
                <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                +27 67 749 7876
              </a>
              <a
                href="mailto:technical@predatortech.co.za"
                className="flex items-center gap-2.5 text-sm transition-colors hover:text-primary"
                style={{ color: '#8b949e', fontFamily: "'DM Sans', sans-serif" }}
              >
                <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                technical@predatortech.co.za
              </a>
              <div
                className="flex items-center gap-2.5 text-sm"
                style={{ color: '#8b949e', fontFamily: "'DM Sans', sans-serif" }}
              >
                <MapPin className="w-4 h-4 text-primary flex-shrink-0" />
                Lydenburg, MP
              </div>
            </div>

            <div className="flex items-center gap-3">
              {[Linkedin, Twitter, Github].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded flex items-center justify-center transition-all duration-200 hover:border-primary"
                  style={{
                    border: '1px solid rgba(255,255,255,0.1)',
                    color: '#6b7685',
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLAnchorElement
                    el.style.color = '#bf2424'
                    el.style.borderColor = 'rgba(191,36,36,0.4)'
                    el.style.background = 'rgba(191,36,36,0.05)'
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLAnchorElement
                    el.style.color = '#6b7685'
                    el.style.borderColor = 'rgba(255,255,255,0.1)'
                    el.style.background = 'transparent'
                  }}
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4
              className="font-display mb-5"
              style={{ fontSize: '0.85rem', fontWeight: 700, letterSpacing: '0.1em', color: '#e8edf3', textTransform: 'uppercase' }}
            >
              Services
            </h4>
            <ul className="flex flex-col gap-2.5">
              {services.map((service) => (
                <li key={service}>
                  <Link
                    to="/services"
                    className="text-sm transition-colors flex items-center gap-1.5 group"
                    style={{ color: '#6b7685', fontFamily: "'DM Sans', sans-serif" }}
                    onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = '#bf2424')}
                    onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = '#6b7685')}
                  >
                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" style={{ color: '#bf2424' }} />
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4
              className="font-display mb-5"
              style={{ fontSize: '0.85rem', fontWeight: 700, letterSpacing: '0.1em', color: '#e8edf3', textTransform: 'uppercase' }}
            >
              Company
            </h4>
            <ul className="flex flex-col gap-2.5">
              {company.map(({ label, path }) => (
                <li key={label}>
                  <Link
                    to={path}
                    className="text-sm transition-colors flex items-center gap-1.5 group"
                    style={{ color: '#6b7685', fontFamily: "'DM Sans', sans-serif" }}
                    onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = '#bf2424')}
                    onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = '#6b7685')}
                  >
                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" style={{ color: '#bf2424' }} />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4
              className="font-display mb-5"
              style={{ fontSize: '0.85rem', fontWeight: 700, letterSpacing: '0.1em', color: '#e8edf3', textTransform: 'uppercase' }}
            >
              Resources
            </h4>
            <ul className="flex flex-col gap-2.5">
              {resources.map(({ label, path }) => (
                <li key={label}>
                  <Link
                    to={path}
                    className="text-sm transition-colors flex items-center gap-1.5 group"
                    style={{ color: '#6b7685', fontFamily: "'DM Sans', sans-serif" }}
                    onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = '#bf2424')}
                    onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = '#6b7685')}
                  >
                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" style={{ color: '#bf2424' }} />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Certifications */}
            <div className="mt-8">
              <p className="section-label mb-4">Certifications</p>
              <div className="flex flex-wrap gap-2">
                {['ISO 27001', 'SOC 2', 'NIST', 'CMMC'].map((cert) => (
                  <span
                    key={cert}
                    className="font-mono-data text-xs px-2 py-1 rounded"
                    style={{
                      border: '1px solid rgba(191,36,36,0.2)',
                      color: '#bf2424',
                      background: 'rgba(191,36,36,0.05)',
                      fontSize: '0.65rem',
                    }}
                  >
                    {cert}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        style={{
          borderTop: '1px solid rgba(255,255,255,0.05)',
        }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p
            className="text-xs"
            style={{ color: '#4b5563', fontFamily: "'DM Sans', sans-serif" }}
          >
            © 2025 Predator Tech Pty Ltd. All rights reserved. Protecting businesses across South Africa.
          </p>
          <div className="flex items-center gap-1.5">
            <div
              className="w-1.5 h-1.5 rounded-full"
              style={{
                background: '#bf2424',
                boxShadow: '0 0 6px rgba(191,36,36,0.8)',
                animation: 'pulse-glow 2s ease-in-out infinite',
              }}
            />
            <span
              className="font-mono-data text-xs"
              style={{ color: '#4b5563', fontSize: '0.65rem' }}
            >
              ALL SYSTEMS OPERATIONAL
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}
