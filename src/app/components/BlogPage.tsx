import { useState } from 'react'
import { FancyButton } from './FancyButton'
import { Link } from 'react-router'
import {
  Search, ArrowRight, Clock, Tag, ChevronRight, Shield,
  AlertTriangle, Lock, Cloud, Server, TrendingUp, Eye,
} from 'lucide-react'

type Category = 'all' | 'ransomware' | 'compliance' | 'managed-it' | 'threat-intel' | 'cloud'

const categories: { id: Category; label: string }[] = [
  { id: 'all', label: 'All Posts' },
  { id: 'threat-intel', label: 'Threat Intel' },
  { id: 'ransomware', label: 'Ransomware' },
  { id: 'compliance', label: 'Compliance' },
  { id: 'managed-it', label: 'Managed IT' },
  { id: 'cloud', label: 'Cloud Security' },
]

const posts = [
  {
    id: 1,
    featured: true,
    title: '2025 SMB Threat Landscape: What Every Business Owner Needs to Know Right Now',
    excerpt: 'Cyberattacks on small and mid-size businesses hit a record high in 2024. Our intelligence team breaks down the most critical threats targeting logistics, manufacturing, and warehousing companies — and the exact steps you can take this week to reduce your exposure.',
    category: 'threat-intel' as Category,
    categoryLabel: 'Threat Intel',
    date: 'May 22, 2025',
    readTime: '8 min read',
    icon: AlertTriangle,
    color: '#ef4444',
    tags: ['SMB', 'Threat Intelligence', 'Attack Trends'],
  },
  {
    id: 2,
    featured: false,
    title: '5 Signs Your Business Network Has Already Been Compromised',
    excerpt: 'Attackers often lurk inside networks for months before striking. These are the red flags that most IT teams miss — and how to detect them before it\'s too late.',
    category: 'threat-intel' as Category,
    categoryLabel: 'Threat Intel',
    date: 'May 15, 2025',
    readTime: '6 min read',
    icon: Eye,
    color: '#bf2424',
    tags: ['Network Security', 'Detection', 'Incident Response'],
  },
  {
    id: 3,
    featured: false,
    title: 'Why Managed IT Services Outperform In-House Teams for SMBs',
    excerpt: 'The fully-loaded cost of one senior IT engineer exceeds $180k/year. We break down the ROI comparison and why growing businesses are switching to managed services.',
    category: 'managed-it' as Category,
    categoryLabel: 'Managed IT',
    date: 'May 10, 2025',
    readTime: '7 min read',
    icon: Server,
    color: '#00bcd4',
    tags: ['Managed IT', 'ROI', 'Cost Analysis'],
  },
  {
    id: 4,
    featured: false,
    title: 'Ransomware in Logistics: How Supply Chain Attacks Are Evolving',
    excerpt: 'Logistics companies are the #1 ransomware target in 2025. We analyzed 400 incidents to understand why — and what high-value transport networks can do to protect themselves.',
    category: 'ransomware' as Category,
    categoryLabel: 'Ransomware',
    date: 'May 5, 2025',
    readTime: '9 min read',
    icon: AlertTriangle,
    color: '#ef4444',
    tags: ['Ransomware', 'Logistics', 'Supply Chain'],
  },
  {
    id: 5,
    featured: false,
    title: 'SOC 2 Type II: A Practical Guide for Mid-Size Companies',
    excerpt: 'SOC 2 compliance doesn\'t have to take 18 months or cost $500k. Here\'s a realistic roadmap for mid-size organizations with timelines, costs, and the controls that actually matter.',
    category: 'compliance' as Category,
    categoryLabel: 'Compliance',
    date: 'April 28, 2025',
    readTime: '11 min read',
    icon: Shield,
    color: '#7c3aed',
    tags: ['SOC 2', 'Compliance', 'Audit'],
  },
  {
    id: 6,
    featured: false,
    title: 'Securing Your AWS Environment: The 2025 Configuration Checklist',
    excerpt: 'Misconfigured cloud storage remains the leading cause of data breaches. Our cloud security engineers share the 20 critical checks every AWS account needs before going to production.',
    category: 'cloud' as Category,
    categoryLabel: 'Cloud Security',
    date: 'April 21, 2025',
    readTime: '10 min read',
    icon: Cloud,
    color: '#f59e0b',
    tags: ['AWS', 'Cloud Security', 'Configuration'],
  },
  {
    id: 7,
    featured: false,
    title: 'The Hidden Cost of a Data Breach for a 100-Person Business',
    excerpt: 'Most SMB leaders dramatically underestimate the true cost of a breach. We break down direct costs, downtime, regulatory fines, and long-term brand damage with real case studies.',
    category: 'threat-intel' as Category,
    categoryLabel: 'Threat Intel',
    date: 'April 14, 2025',
    readTime: '8 min read',
    icon: TrendingUp,
    color: '#bf2424',
    tags: ['Data Breach', 'Risk Management', 'SMB'],
  },
  {
    id: 8,
    featured: false,
    title: 'Zero-Trust Architecture: From Concept to Implementation in 90 Days',
    excerpt: 'Zero-trust isn\'t a product — it\'s an architecture. We walk through a practical implementation framework that mid-size businesses can actually execute without a massive team or budget.',
    category: 'compliance' as Category,
    categoryLabel: 'Compliance',
    date: 'April 7, 2025',
    readTime: '12 min read',
    icon: Lock,
    color: '#00bcd4',
    tags: ['Zero Trust', 'Architecture', 'Network'],
  },
]

export function BlogPage() {
  const [activeCategory, setActiveCategory] = useState<Category>('all')
  const [searchQuery, setSearchQuery] = useState('')

  const filtered = posts.filter((p) => {
    const matchesCat = activeCategory === 'all' || p.category === activeCategory
    const matchesSearch =
      searchQuery === '' ||
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCat && matchesSearch
  })

  const featured = posts.find((p) => p.featured)
  const remaining = filtered.filter((p) => !p.featured || activeCategory !== 'all' || searchQuery !== '')

  return (
    <div style={{ paddingTop: '64px' }}>
      {/* Hero */}
      <section
        className="relative py-20"
        style={{
          background: 'linear-gradient(180deg, #04060a 0%, #06080b 100%)',
          borderBottom: '1px solid rgba(255,255,255,0.06)',
        }}
      >
        <div className="absolute inset-0 hero-grid opacity-40" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="section-label mb-5">Threat Intelligence & Insights</p>
            <h1
              className="font-display mb-6"
              style={{ fontWeight: 800, color: '#e8edf3', lineHeight: 0.95, fontSize: 'clamp(3rem, 7vw, 5rem)' }}
            >
              THE PREDATOR
              <br />
              <span className="text-primary text-glow">INTEL BRIEF</span>
            </h1>
            <p
              style={{ fontFamily: "'DM Sans', sans-serif", color: '#8b949e', lineHeight: 1.7, fontSize: '1rem', maxWidth: '440px' }}
            >
              Practical cybersecurity intelligence, threat breakdowns, and IT strategy for business leaders who need to stay ahead.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Search + Filter */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search
                className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4"
                style={{ color: '#4b5563' }}
              />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-lg text-sm outline-none transition-all"
                style={{
                  background: 'var(--card)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  color: '#e8edf3',
                  fontFamily: "'DM Sans', sans-serif",
                }}
                onFocus={(e) => (e.currentTarget.style.borderColor = 'rgba(191,36,36,0.4)')}
                onBlur={(e) => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)')}
              />
            </div>

            {/* Category filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map(({ id, label }) => (
                <button
                  key={id}
                  className="px-4 py-2 rounded-lg text-sm font-semibold transition-all"
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    background: activeCategory === id ? '#bf2424' : 'var(--card)',
                    color: activeCategory === id ? '#ffffff' : '#8b949e',
                    border: activeCategory === id ? '1px solid #bf2424' : '1px solid rgba(255,255,255,0.08)',
                  }}
                  onClick={() => setActiveCategory(id)}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>

          {/* Featured post */}
          {featured && activeCategory === 'all' && searchQuery === '' && (
            <div
              className="rounded-2xl overflow-hidden mb-8 hover-card-glow"
              style={{
                background: 'var(--card)',
                border: '1px solid rgba(191,36,36,0.15)',
              }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-5">
                {/* Visual */}
                <div
                  className="lg:col-span-2 p-10 flex items-center justify-center"
                  style={{
                    background: 'linear-gradient(135deg, #080c10 0%, #0a1018 100%)',
                    borderRight: '1px solid rgba(255,255,255,0.05)',
                    minHeight: '280px',
                  }}
                >
                  <div className="text-center">
                    <div
                      className="w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-4"
                      style={{
                        background: `${featured.color}14`,
                        border: `1px solid ${featured.color}30`,
                        boxShadow: `0 0 30px ${featured.color}20`,
                      }}
                    >
                      <featured.icon className="w-10 h-10" style={{ color: featured.color }} />
                    </div>
                    <div
                      className="font-mono-data px-3 py-1.5 rounded inline-block"
                      style={{
                        background: 'rgba(191,36,36,0.08)',
                        border: '1px solid rgba(191,36,36,0.2)',
                        color: '#bf2424',
                        fontSize: '0.65rem',
                        letterSpacing: '0.12em',
                      }}
                    >
                      FEATURED ARTICLE
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="lg:col-span-3 p-8 lg:p-10">
                  <div className="flex items-center gap-3 mb-4">
                    <span
                      className="font-mono-data text-xs px-2.5 py-1 rounded"
                      style={{
                        background: `${featured.color}14`,
                        color: featured.color,
                        border: `1px solid ${featured.color}25`,
                        fontSize: '0.65rem',
                        letterSpacing: '0.1em',
                      }}
                    >
                      {featured.categoryLabel.toUpperCase()}
                    </span>
                    <span className="text-xs" style={{ color: '#4b5563', fontFamily: "'DM Sans', sans-serif" }}>
                      {featured.date} · {featured.readTime}
                    </span>
                  </div>
                  <h2
                    className="font-display mb-4 hover:text-primary transition-colors cursor-pointer"
                    style={{ fontSize: 'clamp(1.4rem, 2.5vw, 2rem)', fontWeight: 700, color: '#e8edf3', lineHeight: 1.15 }}
                  >
                    {featured.title}
                  </h2>
                  <p
                    className="text-sm leading-relaxed mb-6"
                    style={{ color: '#8b949e', fontFamily: "'DM Sans', sans-serif" }}
                  >
                    {featured.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex flex-wrap gap-2">
                      {featured.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs px-2.5 py-1 rounded"
                          style={{
                            background: 'rgba(255,255,255,0.04)',
                            border: '1px solid rgba(255,255,255,0.07)',
                            color: '#6b7685',
                            fontFamily: "'DM Sans', sans-serif",
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <button
                      className="inline-flex items-center gap-1.5 text-sm font-semibold transition-all hover:gap-2.5"
                      style={{ color: '#bf2424', fontFamily: "'DM Sans', sans-serif", background: 'none', border: 'none', cursor: 'pointer', transition: 'all 0.2s' }}
                    >
                      Read article <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Post grid */}
          {filtered.length === 0 ? (
            <div className="text-center py-16">
              <Search className="w-12 h-12 mx-auto mb-4" style={{ color: '#4b5563' }} />
              <p style={{ color: '#6b7685', fontFamily: "'DM Sans', sans-serif" }}>
                No articles found matching your search.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {(activeCategory === 'all' && searchQuery === '' ? remaining : filtered).map((post) => (
                <article
                  key={post.id}
                  className="rounded-xl overflow-hidden hover-card-glow flex flex-col"
                  style={{
                    background: 'var(--card)',
                    border: '1px solid rgba(255,255,255,0.07)',
                  }}
                >
                  {/* Card top accent */}
                  <div
                    className="h-1"
                    style={{ background: post.color, opacity: 0.6 }}
                  />

                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex items-center justify-between mb-4">
                      <span
                        className="font-mono-data text-xs px-2.5 py-1 rounded"
                        style={{
                          background: `${post.color}14`,
                          color: post.color,
                          border: `1px solid ${post.color}25`,
                          fontSize: '0.62rem',
                          letterSpacing: '0.1em',
                        }}
                      >
                        {post.categoryLabel.toUpperCase()}
                      </span>
                      <div
                        className="w-8 h-8 rounded-lg flex items-center justify-center"
                        style={{ background: `${post.color}10` }}
                      >
                        <post.icon className="w-4 h-4" style={{ color: post.color }} />
                      </div>
                    </div>

                    <h3
                      className="font-display mb-3 flex-1 hover:text-primary transition-colors cursor-pointer"
                      style={{ fontSize: 'clamp(1.1rem, 2vw, 1.3rem)', fontWeight: 700, color: '#e8edf3', lineHeight: 1.2 }}
                    >
                      {post.title}
                    </h3>

                    <p
                      className="text-sm leading-relaxed mb-4"
                      style={{ color: '#6b7685', fontFamily: "'DM Sans', sans-serif" }}
                    >
                      {post.excerpt.slice(0, 120)}...
                    </p>

                    <div className="flex items-center justify-between mt-auto pt-4" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
                      <div className="flex items-center gap-3 text-xs" style={{ color: '#4b5563', fontFamily: "'DM Sans', sans-serif" }}>
                        <span>{post.date}</span>
                        <span>·</span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3" /> {post.readTime}
                        </span>
                      </div>
                      <button
                        className="text-xs font-semibold flex items-center gap-1 transition-all"
                        style={{ color: '#bf2424', fontFamily: "'DM Sans', sans-serif", background: 'none', border: 'none', cursor: 'pointer' }}
                      >
                        Read <ChevronRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}

          {/* Newsletter CTA */}
          <div
            className="mt-16 p-10 rounded-2xl text-center"
            style={{
              background: 'linear-gradient(135deg, #0a0e14 0%, #080c10 100%)',
              border: '1px solid rgba(191,36,36,0.12)',
            }}
          >
            <p className="section-label mb-3">Stay Ahead of Threats</p>
            <h2
              className="font-display mb-4"
              style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: 800, color: '#e8edf3' }}
            >
              GET THE PREDATOR BRIEF
            </h2>
            <p
              className="mb-8 mx-auto"
              style={{ fontFamily: "'DM Sans', sans-serif", color: '#8b949e', lineHeight: 1.7, maxWidth: '440px' }}
            >
              Weekly threat intelligence, breach analysis, and security guidance — written for business leaders, not IT specialists.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="your@company.com"
                className="flex-1 px-4 py-3 rounded-lg outline-none text-sm"
                style={{
                  background: '#0a0e14',
                  border: '1px solid rgba(255,255,255,0.1)',
                  color: '#e8edf3',
                  fontFamily: "'DM Sans', sans-serif",
                }}
                onFocus={(e) => (e.currentTarget.style.borderColor = 'rgba(191,36,36,0.4)')}
                onBlur={(e) => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)')}
              />
              <FancyButton>Subscribe Free <ArrowRight className="w-4 h-4" /></FancyButton>
            </div>
            <p className="mt-4 text-xs" style={{ color: '#4b5563', fontFamily: "'DM Sans', sans-serif" }}>
              Join 14,000+ subscribers. No spam. Unsubscribe any time.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
