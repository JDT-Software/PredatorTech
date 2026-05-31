import { Link } from 'react-router'
import {
  Shield, Eye, Lock, Cloud, Server, Database, HardDrive, Cpu,
  CheckCircle, ArrowRight, ChevronRight, Zap, Globe, AlertTriangle,
} from 'lucide-react'

const services = [
  {
    icon: Shield,
    title: 'Endpoint Protection',
    tagline: 'Every device. Every threat. Neutralized.',
    desc: 'Our AI-powered endpoint detection and response (EDR) platform monitors behavior across all devices in real time. Zero-day exploits, ransomware, fileless attacks — nothing gets through undetected.',
    features: [
      'Behavioral AI threat detection',
      'Ransomware rollback capability',
      'USB and removable media control',
      'Automated threat isolation',
      'Cross-platform (Windows, Mac, Linux)',
      'Real-time vulnerability scanning',
    ],
    color: '#bf2424',
  },
  {
    icon: Eye,
    title: '24/7 Threat Monitoring',
    tagline: 'Our SOC never blinks.',
    desc: 'Predator Tech operates a fully staffed Security Operations Center 365 days a year. Our analysts correlate signals across your entire environment, triaging alerts and launching response in under 15 minutes.',
    features: [
      'SIEM-powered event correlation',
      'Human analyst-led response',
      'Dark web credential monitoring',
      'Threat hunting campaigns',
      'Custom detection rules',
      'Executive threat briefings',
    ],
    color: '#00bcd4',
  },
  {
    icon: Lock,
    title: 'Network Security',
    tagline: 'Attackers can\'t pivot what they can\'t enter.',
    desc: 'We design and manage layered network defenses that eliminate lateral movement, segment high-value assets, and enforce zero-trust access policies across your entire infrastructure.',
    features: [
      'Next-gen firewall management',
      'Intrusion detection & prevention (IDS/IPS)',
      'Network micro-segmentation',
      'Zero-trust network access (ZTNA)',
      'SD-WAN security integration',
      'Network traffic analysis (NTA)',
    ],
    color: '#7c3aed',
  },
  {
    icon: Cloud,
    title: 'Cloud Security',
    tagline: 'Secure your cloud posture, continuously.',
    desc: 'Whether you\'re on AWS, Azure, GCP, or a hybrid environment, our cloud security engineers harden your configurations, monitor workloads, and enforce compliance across your cloud estate.',
    features: [
      'Cloud Security Posture Management (CSPM)',
      'Cloud Workload Protection (CWPP)',
      'Identity and access governance',
      'Container and Kubernetes security',
      'Cloud-native SIEM integration',
      'Multi-cloud compliance monitoring',
    ],
    color: '#f59e0b',
  },
  {
    icon: Server,
    title: 'Managed IT Services',
    tagline: 'Your full IT team. A fraction of the cost.',
    desc: 'From helpdesk to infrastructure management, our managed IT services eliminate the overhead of in-house IT while delivering enterprise-grade responsiveness and strategic guidance.',
    features: [
      'Unlimited helpdesk support',
      'Proactive patch management',
      'Hardware lifecycle management',
      'Vendor relationship management',
      'IT asset inventory & documentation',
      'Strategic IT roadmap consulting',
    ],
    color: '#00e676',
  },
  {
    icon: AlertTriangle,
    title: 'Security Audits & Pen Testing',
    tagline: 'Find your gaps before attackers do.',
    desc: 'Our certified offensive security team conducts comprehensive penetration tests, vulnerability assessments, and compliance audits to identify weaknesses in your defenses before real adversaries exploit them.',
    features: [
      'Network & application penetration testing',
      'Social engineering & phishing simulations',
      'Red team / purple team exercises',
      'Vulnerability assessment & management',
      'Compliance gap analysis (SOC 2, NIST, HIPAA)',
      'Executive security risk reporting',
    ],
    color: '#ef4444',
  },
  {
    icon: HardDrive,
    title: 'Data Backup & Recovery',
    tagline: 'When the worst happens, we have you.',
    desc: 'Our immutable backup solutions and disaster recovery planning ensure business continuity even in the face of ransomware, hardware failure, or natural disaster. RTO under 4 hours, guaranteed.',
    features: [
      'Immutable, air-gapped backups',
      'Automated backup verification',
      'Ransomware-proof recovery',
      '< 4 hour Recovery Time Objective (RTO)',
      'Cloud and on-premises backup',
      'Business continuity planning',
    ],
    color: '#00bcd4',
  },
  {
    icon: Cpu,
    title: 'Compliance & Risk Management',
    tagline: 'Pass every audit with confidence.',
    desc: 'We map your controls to the frameworks that matter — SOC 2, ISO 27001, HIPAA, PCI DSS, NIST, and CMMC. Our vCISO team handles evidence collection, policy development, and auditor liaison.',
    features: [
      'SOC 2 Type I & II readiness',
      'ISO 27001 gap analysis & remediation',
      'HIPAA risk assessment & BAA management',
      'PCI DSS scoping and compliance',
      'NIST CSF implementation',
      'Virtual CISO (vCISO) advisory',
    ],
    color: '#7c3aed',
  },
]

export function ServicesPage() {
  return (
    <div style={{ paddingTop: '64px' }}>
      {/* Hero */}
      <section
        className="relative py-24 lg:py-32"
        style={{
          background: 'linear-gradient(180deg, #04060a 0%, #06080b 100%)',
          borderBottom: '1px solid rgba(255,255,255,0.06)',
        }}
      >
        <div className="absolute inset-0 hero-grid opacity-60" />
        <div
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse 60% 60% at 50% 40%, rgba(191,36,36,0.06) 0%, transparent 70%)',
          }}
        />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <p className="section-label mb-6">Enterprise Security Services</p>
          <h1
            className="font-display mb-6"
            style={{
              fontWeight: 800,
              color: '#e8edf3',
              lineHeight: 0.95,
              fontSize: 'clamp(3rem, 7vw, 6rem)',
            }}
          >
            EVERY LAYER.
            <br />
            <span className="text-primary text-glow">EVERY THREAT.</span>
          </h1>
          <p
            className="mx-auto mb-10"
            style={{
              fontFamily: "'DM Sans', sans-serif",
              color: '#8b949e',
              lineHeight: 1.7,
              fontSize: '1.1rem',
              maxWidth: '560px',
            }}
          >
            A complete portfolio of cybersecurity and managed IT services designed for businesses that operate in high-stakes environments.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link to="/consultation">
              <button className="btn-primary">
                Book Free Consultation
                <ArrowRight className="w-4 h-4" />
              </button>
            </Link>
            <Link to="/threat-report">
              <button className="btn-ghost">Get Free Threat Report</button>
            </Link>
          </div>
        </div>
      </section>

      {/* Services grid */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col gap-6">
            {services.map(({ icon: Icon, title, tagline, desc, features, color }, idx) => (
              <div
                key={title}
                className="rounded-2xl overflow-hidden"
                style={{
                  background: '#0d1017',
                  border: '1px solid rgba(255,255,255,0.07)',
                }}
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                  {/* Left: info */}
                  <div className="p-8 lg:p-10" style={{ borderRight: '1px solid rgba(255,255,255,0.05)' }}>
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center mb-6"
                      style={{
                        background: `${color}14`,
                        border: `1px solid ${color}30`,
                      }}
                    >
                      <Icon className="w-6 h-6" style={{ color }} />
                    </div>
                    <div
                      className="font-mono-data mb-2"
                      style={{ color: color, fontSize: '0.65rem', letterSpacing: '0.15em' }}
                    >
                      {String(idx + 1).padStart(2, '0')} / {String(services.length).padStart(2, '0')}
                    </div>
                    <h2
                      className="font-display mb-2"
                      style={{ fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', fontWeight: 700, color: '#e8edf3', lineHeight: 1.1 }}
                    >
                      {title}
                    </h2>
                    <p
                      className="mb-4 font-display"
                      style={{ color, fontSize: '1.05rem', fontWeight: 600 }}
                    >
                      {tagline}
                    </p>
                    <p
                      className="leading-relaxed"
                      style={{ fontFamily: "'DM Sans', sans-serif", color: '#8b949e', fontSize: '0.95rem' }}
                    >
                      {desc}
                    </p>
                  </div>

                  {/* Right: features */}
                  <div className="p-8 lg:p-10">
                    <p
                      className="font-mono-data mb-5"
                      style={{ color: '#4b5563', fontSize: '0.65rem', letterSpacing: '0.12em' }}
                    >
                      WHAT'S INCLUDED
                    </p>
                    <ul className="grid grid-cols-1 gap-3">
                      {features.map((feature) => (
                        <li key={feature} className="flex items-start gap-3">
                          <CheckCircle
                            className="w-4 h-4 mt-0.5 shrink-0"
                            style={{ color }}
                          />
                          <span
                            className="text-sm"
                            style={{ fontFamily: "'DM Sans', sans-serif", color: '#c9d1d9' }}
                          >
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-6 pt-6" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
                      <Link to="/consultation">
                        <button
                          className="inline-flex items-center gap-2 text-sm font-semibold transition-all"
                          style={{
                            fontFamily: "'DM Sans', sans-serif",
                            color,
                            background: 'transparent',
                            border: 'none',
                            cursor: 'pointer',
                          }}
                        >
                          Get a custom quote
                          <ChevronRight className="w-4 h-4" />
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="py-20"
        style={{
          background: '#080c10',
          borderTop: '1px solid rgba(255,255,255,0.05)',
        }}
      >
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <p className="section-label mb-4">Ready to Get Protected?</p>
          <h2
            className="font-display mb-6"
            style={{ fontWeight: 800, color: '#e8edf3', fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}
          >
            BUILD YOUR CUSTOM<br />
            <span className="text-primary">SECURITY STACK</span>
          </h2>
          <p
            className="mb-8"
            style={{ fontFamily: "'DM Sans', sans-serif", color: '#8b949e', lineHeight: 1.7 }}
          >
            Every business is different. Our security architects design a custom solution that fits your industry, compliance requirements, and budget.
          </p>
          <Link to="/consultation">
            <button className="btn-primary" style={{ padding: '0.9rem 2.5rem', fontSize: '1rem' }}>
              Schedule a Security Assessment
              <ArrowRight className="w-4 h-4" />
            </button>
          </Link>
        </div>
      </section>
    </div>
  )
}
