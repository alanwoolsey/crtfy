import { useEffect, useState } from 'react'
import { Navigate, NavLink, Outlet, Route, Routes, useLocation } from 'react-router-dom'
import { Blocks, Bot, ChevronDown, FileStack, GraduationCap, Menu } from 'lucide-react'
import HomePage from './pages/HomePage'
import StudentPage from './pages/StudentPage'
import ResourcesPage from './pages/ResourcesPage'
import BrandLogo from './components/BrandLogo'
import ProductShell from './components/ProductShell'
import { StudentRecordsProvider } from './context/StudentRecordsContext'
import { allOfferings, primaryNav, productOfferings } from './data/siteData'
import OfferingPage from './pages/OfferingPage'
import ProductsPage from './pages/ProductsPage'
import AboutPage from './pages/AboutPage'

const offeringLookup = Object.fromEntries(allOfferings.map((offering) => [offering.slug, offering]))
const productMenuItems = productOfferings

function Topbar() {
  const location = useLocation()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false)

  useEffect(() => {
    setMobileMenuOpen(false)
    setMobileProductsOpen(false)
  }, [location.pathname])

  return (
    <header className="site-header">
      <div className="container nav-shell">
        <NavLink to="/" className="brand">
          <div>
            <BrandLogo />
            <div className="brand-sub">Education-first operating platform</div>
          </div>
        </NavLink>

        <nav className="desktop-nav">
          <div className="nav-dropdown">
            <button type="button" className="nav-link nav-link-icon nav-dropdown-trigger" aria-haspopup="true">
              Products <ChevronDown size={14} />
            </button>
            <div className="nav-dropdown-menu">
              {productMenuItems.map((item) => (
                <NavLink key={item.to} to={item.to} className="nav-dropdown-item">
                  <div className="nav-dropdown-title">{item.title}</div>
                  <div className="nav-dropdown-copy">{item.shortTitle === item.title ? item.description : item.shortTitle}</div>
                </NavLink>
              ))}
            </div>
          </div>
          {primaryNav.filter((item) => item.label !== 'Products' && item.label !== 'Services').map((item) => (
            <NavLink key={item.to} to={item.to} className="nav-link">
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="nav-actions">
          <NavLink to="/products" className="button button-secondary">See products</NavLink>
          <a href="#contact" className="button button-primary">Talk to Crtfy</a>
          <button
            className="mobile-menu-button"
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMobileMenuOpen((open) => !open)}
          >
            <Menu size={20} />
          </button>
        </div>
      </div>
      {mobileMenuOpen ? (
        <div className="container mobile-nav-panel" id="mobile-navigation">
          <div className="mobile-nav-group">
            <button
              type="button"
              className="mobile-nav-toggle"
              aria-expanded={mobileProductsOpen}
              onClick={() => setMobileProductsOpen((open) => !open)}
            >
              <span>Products</span>
              <ChevronDown size={16} className={mobileProductsOpen ? 'mobile-nav-chevron is-open' : 'mobile-nav-chevron'} />
            </button>
            {mobileProductsOpen ? (
              <div className="mobile-nav-submenu">
                {productMenuItems.map((item) => (
                  <NavLink key={item.to} to={item.to} className="mobile-nav-item mobile-nav-item-submenu">
                    {item.title}
                  </NavLink>
                ))}
              </div>
            ) : null}
          </div>

          <div className="mobile-nav-links">
            {primaryNav.filter((item) => item.label !== 'Products' && item.label !== 'Services').map((item) => (
              <NavLink key={item.to} to={item.to} className="mobile-nav-item">
                {item.label}
              </NavLink>
            ))}
          </div>

          <div className="mobile-nav-actions">
            <NavLink to="/products" className="button button-secondary">See products</NavLink>
            <a href="#contact" className="button button-primary">Talk to Crtfy</a>
          </div>
        </div>
      ) : null}
    </header>
  )
}

function Footer() {
  return (
    <footer className="site-footer" id="contact">
      <div className="container footer-grid">
        <div>
          <div className="footer-brand">
            <div>
              <BrandLogo compact dark />
              <p>Education-first platform for admissions, governed AI, and intelligent content management.</p>
            </div>
          </div>
          <p className="footer-copy">
            Crtfy helps institutions replace fragmented admissions CRMs, unmanaged AI tools, shared drives, and legacy ECM workflows with governed products built for education.
          </p>
        </div>
        <div>
          <h4>Explore</h4>
          <div className="footer-links">
            <NavLink to="/products">Products</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/resources">Resources</NavLink>
          </div>
        </div>
        <div>
          <h4>Portfolio</h4>
          <div className="footer-list">
            <span><Bot size={16} /> Governed AI workspace</span>
            <span><GraduationCap size={16} /> Admissions operating system</span>
            <span><FileStack size={16} /> Intelligent content management</span>
            <span><Blocks size={16} /> Workflow and governance patterns</span>
          </div>
        </div>
        <div>
          <h4>Product offerings</h4>
          <div className="footer-links">
            <NavLink to="/products/crtfy-ai">Crtfy AI</NavLink>
            <NavLink to="/products/crtfy-student">Crtfy Student</NavLink>
            <NavLink to="/products/crtfy-documents">Crtfy Content</NavLink>
          </div>
        </div>
      </div>
    </footer>
  )
}

function MarketingLayout() {
  return (
    <div className="marketing-site">
      <Topbar />
      <Outlet />
      <Footer />
    </div>
  )
}

export default function App() {
  return (
    <Routes>
      <Route
        path="/product/*"
        element={(
          <StudentRecordsProvider>
            <ProductShell />
          </StudentRecordsProvider>
        )}
      />
      <Route element={<MarketingLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/products/crtfy-ai" element={<OfferingPage offering={offeringLookup['crtfy-ai']} />} />
        <Route path="/products/crtfy-student" element={<StudentPage />} />
        <Route path="/products/crtfy-documents" element={<OfferingPage offering={offeringLookup['crtfy-documents']} />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/resources" element={<ResourcesPage />} />
        <Route path="/demo" element={<ProductsPage />} />
        <Route path="/student" element={<Navigate to="/products/crtfy-student" replace />} />
        <Route path="/services/*" element={<Navigate to="/products" replace />} />
        <Route path="/platform/*" element={<Navigate to="/products" replace />} />
        <Route path="/industries" element={<Navigate to="/about" replace />} />
        <Route path="/sled" element={<Navigate to="/about" replace />} />
        <Route path="/why-crtfy" element={<Navigate to="/about" replace />} />
        <Route path="/products/:legacy" element={<Navigate to="/products" replace />} />
      </Route>
    </Routes>
  )
}
