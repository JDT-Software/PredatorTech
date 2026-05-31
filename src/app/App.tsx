import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router'
import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Footer } from './components/Footer'
import { HomePage } from './components/HomePage'
import { ServicesPage } from './components/ServicesPage'
import { ThreatReportPage } from './components/ThreatReportPage'
import { ConsultationPage } from './components/ConsultationPage'
import { ContactPage } from './components/ContactPage'
import { BlogPage } from './components/BlogPage'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [pathname])
  return null
}

function AppShell() {
  return (
    <div
      className="min-h-screen"
      style={{
        background: '#06080b',
        color: '#e8edf3',
        fontFamily: "'DM Sans', sans-serif",
      }}
    >
      <ScrollToTop />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/threat-report" element={<ThreatReportPage />} />
          <Route path="/consultation" element={<ConsultationPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/blog" element={<BlogPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default function App() {
  return (
    <Router>
      <AppShell />
    </Router>
  )
}
