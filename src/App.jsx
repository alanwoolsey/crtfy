import { useEffect, useState } from 'react'
import { NavLink, Outlet, Route, Routes, useLocation } from 'react-router-dom'
import { Blocks, Building2, ChevronDown, Menu, ShieldCheck, Sparkles } from 'lucide-react'
import HomePage from './pages/HomePage'
import StudentPage from './pages/StudentPage'
import PlatformPage from './pages/PlatformPage'
import ResourcesPage from './pages/ResourcesPage'
import BrandLogo from './components/BrandLogo'
import ProductShell from './components/ProductShell'
import { StudentRecordsProvider } from './context/StudentRecordsContext'
import { allOfferings, managedServices, primaryNav, productOfferings, advisoryOfferings } from './data/siteData'
import OfferingPage from './pages/OfferingPage'
import ProductsPage from './pages/ProductsPage'
import ServicesPage from './pages/ServicesPage'
import IndustriesPage from './pages/IndustriesPage'

const offeringLookup = Object.fromEntries(allOfferings.map((offering) => [offering.slug, offering]))
const productMenuItems = productOfferings
const serviceMenuItems = [...managedServices, ...advisoryOfferings]

function Topbar() {
  const location = useLocation()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)

  useEffect(() => {
    setMobileMenuOpen(false)
    setMobileProductsOpen(false)
    setMobileServicesOpen(false)
  }, [location.pathname])

  return (
    <header className="site-header">
      <div className="container nav-shell">
        <NavLink to="/" className="brand">
          <div>
            <BrandLogo />
            <div className="brand-sub">Unified security and compliance for SLED organizations</div>
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
          <div className="nav-dropdown">
            <button type="button" className="nav-link nav-link-icon nav-dropdown-trigger" aria-haspopup="true">
              Services <ChevronDown size={14} />
            </button>
            <div className="nav-dropdown-menu">
              {serviceMenuItems.map((item) => (
                <NavLink key={item.to} to={item.to} className="nav-dropdown-item">
                  <div className="nav-dropdown-title">{item.title}</div>
                  <div className="nav-dropdown-copy">{item.shortTitle}</div>
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
          <NavLink to="/products/verify" className="button button-secondary">See products</NavLink>
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

          <div className="mobile-nav-group">
            <button
              type="button"
              className="mobile-nav-toggle"
              aria-expanded={mobileServicesOpen}
              onClick={() => setMobileServicesOpen((open) => !open)}
            >
              <span>Services</span>
              <ChevronDown size={16} className={mobileServicesOpen ? 'mobile-nav-chevron is-open' : 'mobile-nav-chevron'} />
            </button>
            {mobileServicesOpen ? (
              <div className="mobile-nav-submenu">
                {serviceMenuItems.map((item) => (
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
            <NavLink to="/products/verify" className="button button-secondary">See products</NavLink>
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
              <p>One accountable platform for SLED security and compliance.</p>
            </div>
          </div>
          <p className="footer-copy">
            Crtfy helps institutions and agencies reduce risk, pass audits, and protect sensitive data without juggling disconnected vendors.
          </p>
        </div>
        <div>
          <h4>Explore</h4>
          <div className="footer-links">
            <NavLink to="/products">Products</NavLink>
            <NavLink to="/services">Services</NavLink>
            <NavLink to="/platform">Platform</NavLink>
            <NavLink to="/industries">Industries</NavLink>
            <NavLink to="/resources">Resources</NavLink>
          </div>
        </div>
        <div>
          <h4>Capabilities</h4>
          <div className="footer-list">
            <span><ShieldCheck size={16} /> Core software products</span>
            <span><Blocks size={16} /> Managed services</span>
            <span><Sparkles size={16} /> Advisory and compliance</span>
            <span><Building2 size={16} /> Platform infrastructure</span>
          </div>
        </div>
        <div>
          <h4>Product offerings</h4>
          <div className="footer-links">
            <NavLink to="/products/evaluate">Evaluate</NavLink>
            <NavLink to="/products/verify">Verify</NavLink>
            <NavLink to="/products/certify">Certify</NavLink>
            <NavLink to="/products/crtfy-student">Crtfy Student</NavLink>
            <NavLink to="/product/command-center">Product view</NavLink>
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
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/products/evaluate" element={<OfferingPage offering={offeringLookup.evaluate} />} />
        <Route path="/products/verify" element={<OfferingPage offering={offeringLookup.verify} />} />
        <Route path="/products/certify" element={<OfferingPage offering={offeringLookup.certify} />} />
        <Route path="/products/engage" element={<OfferingPage offering={offeringLookup.engage} />} />
        <Route path="/products/insight" element={<OfferingPage offering={offeringLookup.insight} />} />
        <Route path="/products/crtfy-student" element={<StudentPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/services/secure" element={<OfferingPage offering={offeringLookup.secure} />} />
        <Route path="/services/govern" element={<OfferingPage offering={offeringLookup.govern} />} />
        <Route path="/services/operate" element={<OfferingPage offering={offeringLookup.operate} />} />
        <Route path="/services/advisory" element={<OfferingPage offering={offeringLookup.advisory} />} />
        <Route path="/services/compliance" element={<OfferingPage offering={offeringLookup.compliance} />} />
        <Route path="/services/risk" element={<OfferingPage offering={offeringLookup.risk} />} />
        <Route path="/platform" element={<PlatformPage />} />
        <Route path="/platform/connect" element={<OfferingPage offering={offeringLookup.connect} />} />
        <Route path="/platform/orchestrate" element={<OfferingPage offering={offeringLookup.orchestrate} />} />
        <Route path="/platform/protect" element={<OfferingPage offering={offeringLookup.protect} />} />
        <Route path="/industries" element={<IndustriesPage />} />
        <Route path="/student" element={<StudentPage />} />
        <Route path="/bundles" element={<ServicesPage />} />
        <Route path="/sled" element={<IndustriesPage />} />
        <Route path="/why-crtfy" element={<IndustriesPage />} />
        <Route path="/resources" element={<ResourcesPage />} />
        <Route path="/demo" element={<ProductsPage />} />
      </Route>
    </Routes>
  )
}
