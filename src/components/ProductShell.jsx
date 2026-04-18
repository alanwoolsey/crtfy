import {
  Bell,
  ChartColumn,
  CircleGauge,
  FileBadge2,
  FolderSync,
  GraduationCap,
  Search,
  ShieldCheck,
  Sparkles,
  Upload,
} from 'lucide-react'
import { NavLink, Route, Routes, useLocation } from 'react-router-dom'
import BrandLogo from './BrandLogo'
import DashboardPage from '../pages/DashboardPage'
import StudentsPage from '../pages/StudentsPage'
import StudentProfilePage from '../pages/StudentProfilePage'
import QueuePage from '../pages/QueuePage'
import ProspectPortalPage from '../pages/ProspectPortalPage'
import DecisionStudioPage from '../pages/DecisionStudioPage'

const productNavItems = [
  { to: '/product/command-center', label: 'Command Center', icon: ChartColumn },
  { to: '/product/prospect-portal', label: 'Prospect Portal', icon: Sparkles },
  { to: '/product/students', label: 'Student 360', icon: GraduationCap },
  { to: '/product/decision-studio', label: 'Decision Studio', icon: FileBadge2 },
  { to: '/product/workflows', label: 'Workflows', icon: FolderSync },
  { to: '/product/trust-center', label: 'Trust Center', icon: ShieldCheck },
]

const breadcrumbLabels = {
  '/product/command-center': 'Command Center',
  '/product/prospect-portal': 'Prospect Portal',
  '/product/students': 'Student 360',
  '/product/decision-studio': 'Decision Studio',
  '/product/workflows': 'Workflows',
  '/product/trust-center': 'Trust Center',
}

function ProductSidebar() {
  return (
    <aside className="product-sidebar">
      <NavLink to="/product/command-center" className="product-brand">
        <BrandLogo dark />
      </NavLink>
      <div className="product-sidebar-label">Platform</div>
      <nav className="product-nav">
        {productNavItems.map((item) => (
          <NavLink key={item.to} to={item.to} className="product-nav-link">
            <item.icon size={18} />
            <span>{item.label}</span>
          </NavLink>
        ))}
      </nav>
    </aside>
  )
}

function ProductTopbar() {
  const location = useLocation()
  const pageLabel = location.pathname.startsWith('/product/students/')
    ? 'Student Profile'
    : (breadcrumbLabels[location.pathname] || 'Command Center')

  return (
    <header className="product-topbar">
      <div className="product-breadcrumbs">
        <span>Enrollment OS</span>
        <span>/</span>
        <strong>{pageLabel}</strong>
      </div>
      <div className="product-search">
        <Search size={18} />
        <input
          aria-label="Search the product"
          placeholder="Search student, transcript, institution, program, connector, or alert"
        />
      </div>
      <div className="product-topbar-actions">
        <span className="product-chip">Yield lift: <strong>+11.2%</strong></span>
        <span className="product-chip product-chip-success">Auto-certified: <strong>68%</strong></span>
        <span className="product-chip product-chip-alert">Fraud held: <strong>7</strong></span>
        <button type="button" className="product-upload-button"><Upload size={18} /> Upload transcript</button>
        <button type="button" className="product-icon-button" aria-label="Notifications">
          <Bell size={18} />
        </button>
      </div>
    </header>
  )
}

export default function ProductShell() {
  return (
    <div className="product-app">
      <ProductSidebar />
      <main className="product-main">
        <ProductTopbar />
        <Routes>
          <Route index element={<DashboardPage />} />
          <Route path="command-center" element={<DashboardPage />} />
          <Route path="prospect-portal" element={<ProspectPortalPage />} />
          <Route path="students" element={<StudentsPage />} />
          <Route path="students/:studentId" element={<StudentProfilePage />} />
          <Route path="decision-studio" element={<DecisionStudioPage />} />
          <Route path="workflows" element={<QueuePage />} />
          <Route path="trust-center" element={<QueuePage trustView />} />
        </Routes>
      </main>
    </div>
  )
}
