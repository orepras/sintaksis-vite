import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ServicesPage from './pages/ServicesPage'
import PricingPage from './pages/PricingPage'
import ContactPage from './pages/ContactPage'
import ProcessPage from './pages/ProcessPage'
import PrivacyPolicyPage from './pages/PrivacyPolicyPage'
import TermsPage from './pages/TermsPage'
import ProjectsPage from './pages/ProjectsPage'
import ProjectTokotypePage from './pages/ProjectTokotypePage'
import ProjectBlibliPage from './pages/ProjectBlibliPage'
import ProjectAccessTimePage from './pages/ProjectAccessTimePage'
import ScrollToTop from './components/ScrollToTop'
import './index.css'

function App() {
  return (
    <HelmetProvider>
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/process" element={<ProcessPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="/terms" element={<TermsPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/projects/tokotype-brand-voice" element={<ProjectTokotypePage />} />
          <Route path="/projects/blibli-copy-workflow" element={<ProjectBlibliPage />} />
          <Route path="/projects/accesstime-brand-revolution" element={<ProjectAccessTimePage />} />
        </Routes>
      </Router>
    </HelmetProvider>
  )
}

export default App