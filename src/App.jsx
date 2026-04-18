import { NavLink, Route, Routes } from 'react-router-dom'
import {
  ArrowRight,
  Blocks,
  BookOpen,
  ChevronDown,
  GraduationCap,
  Menu,
  ShieldCheck,
  Sparkles,
} from 'lucide-react'
import HomePage from './pages/HomePage'
import StudentPage from './pages/StudentPage'
import PlatformPage from './pages/PlatformPage'
import WhyPage from './pages/WhyPage'
import ResourcesPage from './pages/ResourcesPage'
import DemoPage from './pages/DemoPage'

const navItems = [
  { to: '/student', label: 'crtfy Student' },
  { to: '/platform', label: 'Platform' },
  { to: '/why-crtfy', label: 'Why crtfy' },
  { to: '/resources', label: 'Resources' },
]

function Topbar() {
  return (
    <header className="site-header">
      <div className="container nav-shell">
        <NavLink to="/" className="brand">
          <div className="brand-mark">c</div>
          <div>
            <div className="brand-word">crtfy</div>
            <div className="brand-sub">Certified intelligence for student decisioning</div>
          </div>
        </NavLink>

        <nav className="desktop-nav">
          {navItems.map((item) => (
            <NavLink key={item.to} to={item.to} className="nav-link">
              {item.label}
            </NavLink>
          ))}
          <a href="#product-suite" className="nav-link nav-link-icon">Solutions <ChevronDown size={14} /></a>
        </nav>

        <div className="nav-actions">
          <NavLink to="/demo" className="button button-secondary">See Demo</NavLink>
          <a href="#contact" className="button button-primary">Request Demo</a>
          <button className="mobile-menu-button" aria-label="Open menu">
            <Menu size={20} />
          </button>
        </div>
      </div>
    </header>
  )
}

function Footer() {
  return (
    <footer className="site-footer" id="contact">
      <div className="container footer-grid">
        <div>
          <div className="footer-brand">
            <div className="brand-mark">c</div>
            <div>
              <strong>crtfy.net</strong>
              <p>Decision certainty for modern enrollment teams.</p>
            </div>
          </div>
          <p className="footer-copy">
            crtfy Student is designed to help institutions move from inquiry to confident decision faster,
            with more trust, more automation, and less operational drag.
          </p>
        </div>
        <div>
          <h4>Explore</h4>
          <div className="footer-links">
            <NavLink to="/student">crtfy Student</NavLink>
            <NavLink to="/platform">Platform</NavLink>
            <NavLink to="/why-crtfy">Why crtfy</NavLink>
            <NavLink to="/resources">Resources</NavLink>
          </div>
        </div>
        <div>
          <h4>What makes us different</h4>
          <div className="footer-list">
            <span><ShieldCheck size={16} /> Explainable decisioning</span>
            <span><Sparkles size={16} /> AI + rules working together</span>
            <span><Blocks size={16} /> Certified connectors</span>
            <span><GraduationCap size={16} /> Student-ready experiences</span>
          </div>
        </div>
        <div>
          <h4>Built for what comes next</h4>
          <p className="footer-copy">
            Launch with pre-admit intelligence, then expand into intake, decision packets, student engagement,
            transfer evaluation, and student lifecycle orchestration.
          </p>
          <NavLink to="/demo" className="inline-link">Open product walkthrough <ArrowRight size={16} /></NavLink>
        </div>
      </div>
    </footer>
  )
}

export default function App() {
  return (
    <div className="marketing-site">
      <Topbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/student" element={<StudentPage />} />
        <Route path="/platform" element={<PlatformPage />} />
        <Route path="/why-crtfy" element={<WhyPage />} />
        <Route path="/resources" element={<ResourcesPage />} />
        <Route path="/demo" element={<DemoPage />} />
      </Routes>
      <Footer />
    </div>
  )
}
