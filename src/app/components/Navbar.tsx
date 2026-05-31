import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router'
import { Menu, X, Sun, Moon, Shield } from 'lucide-react'
import { useTheme } from '../ThemeContext'
import { FancyButton } from './FancyButton'

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'Services', path: '/services' },
  { label: 'Contact', path: '/contact' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()
  const { theme, toggleTheme } = useTheme()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [location.pathname])

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled
          ? theme === 'dark' ? 'rgba(6,8,11,0.92)' : 'rgba(217,215,215,0.95)'
          : theme === 'dark' ? 'rgba(6,8,11,0.6)' : 'rgba(217,215,215,0.7)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        borderBottom: scrolled
          ? theme === 'dark' ? '1px solid rgba(255,255,255,0.07)' : '1px solid rgba(36,35,35,0.12)'
          : '1px solid transparent',
        boxShadow: scrolled ? '0 4px 40px rgba(0,0,0,0.2)' : 'none',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5 group">
            <div
              className="w-8 h-8 rounded flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:neon-glow"
              style={{ background: '#bf2424', boxShadow: '0 0 15px rgba(191,36,36,0.3)' }}
            >
              <Shield className="w-4 h-4 text-white" strokeWidth={2.5} />
            </div>
            <div className="font-technor tracking-wide">
              <span style={{ fontSize: '1.05rem', letterSpacing: '0.05em', color: theme === 'dark' ? '#e8edf3' : '#1a1919' }}>
                PREDATOR
              </span>
              <span className="text-primary ml-1" style={{ fontSize: '1.05rem', letterSpacing: '0.05em' }}>
                TECH
              </span>
            </div>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="transition-colors duration-200 text-sm tracking-wide"
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontWeight: 500,
                  color: location.pathname === link.path ? '#bf2424' : '#8b949e',
                }}
                onMouseEnter={(e) => {
                  if (location.pathname !== link.path) {
                    (e.currentTarget as HTMLAnchorElement).style.color = '#e8edf3'
                  }
                }}
                onMouseLeave={(e) => {
                  if (location.pathname !== link.path) {
                    (e.currentTarget as HTMLAnchorElement).style.color = '#8b949e'
                  }
                }}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Link to="/threat-report">
              <FancyButton>Free Threat Report</FancyButton>
            </Link>
            <Link to="/consultation">
              <FancyButton>Book Consultation</FancyButton>
            </Link>
          </div>

          {/* Theme toggle */}
          <button
            onClick={toggleTheme}
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            className="w-8 h-8 flex items-center justify-center rounded transition-all duration-200"
            style={{
              border: `1px solid ${theme === 'dark' ? 'rgba(255,255,255,0.12)' : 'rgba(36,35,35,0.15)'}`,
              color: theme === 'dark' ? '#8b949e' : '#6b6868',
              background: 'transparent',
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLButtonElement).style.borderColor = 'rgba(191,36,36,0.4)'
              ;(e.currentTarget as HTMLButtonElement).style.color = '#bf2424'
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLButtonElement).style.borderColor = theme === 'dark' ? 'rgba(255,255,255,0.12)' : 'rgba(36,35,35,0.15)'
              ;(e.currentTarget as HTMLButtonElement).style.color = theme === 'dark' ? '#8b949e' : '#6b6868'
            }}
          >
            {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded transition-colors"
            style={{ color: theme === 'dark' ? '#8b949e' : '#6b6868' }}
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div
          className="md:hidden border-t"
          style={{
            background: theme === 'dark' ? 'rgba(6,8,11,0.98)' : 'rgba(217,215,215,0.98)',
            borderColor: theme === 'dark' ? 'rgba(255,255,255,0.07)' : 'rgba(36,35,35,0.12)',
          }}
        >
          <div className="px-6 py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="py-3 text-sm transition-colors border-b"
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontWeight: 500,
                  color: location.pathname === link.path ? '#bf2424' : '#8b949e',
                  borderColor: 'rgba(255,255,255,0.05)',
                }}
              >
                {link.label}
              </Link>
            ))}
            <div className="flex flex-col gap-3 pt-4">
              <Link to="/threat-report">
                <FancyButton className="w-full">Free Threat Report</FancyButton>
              </Link>
              <Link to="/consultation">
                <FancyButton className="w-full">Book Consultation</FancyButton>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
