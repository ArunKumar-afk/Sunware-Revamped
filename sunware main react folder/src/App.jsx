import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useEffect } from 'react'
import Layout from './components/Layout/Layout'
import ScrollToTop from './components/ScrollToTop'

// Pages
import Home from './pages/Home'
import About from './pages/About'
import Careers from './pages/Careers'
import Blog from './pages/Blog'
import BlogDetails from './pages/BlogDetails'

// Industry pages
import HealthcareLifeSciences from './pages/industries/HealthcareLifeSciences'
import BankingFinance from './pages/industries/BankingFinance'
import RetailEcommerce from './pages/industries/RetailEcommerce'
import MediaEntertainment from './pages/industries/MediaEntertainment'

// Service pages
import CloudSolutions from './pages/services/CloudSolutions'
import AutomationEfficiency from './pages/services/AutomationEfficiency'
import DataScienceAI from './pages/services/DataScienceAI'
import SalesforceExpertise from './pages/services/SalesforceExpertise'
import MicrosoftSolutions from './pages/services/MicrosoftSolutions'
import IotInnovations from './pages/services/IotInnovations'
import CybersecurityServices from './pages/services/CybersecurityServices'
import MobileAppDevelopment from './pages/services/MobileAppDevelopment'
import AiotIntegrations from './pages/services/AiotIntegrations'
import OdooSolutions from './pages/services/OdooSolutions'

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="careers" element={<Careers />} />
          <Route path="blog" element={<Blog />} />
          <Route path="blog/:slug" element={<BlogDetails />} />

          {/* Industries */}
          <Route path="healthcare-lifesciences" element={<HealthcareLifeSciences />} />
          <Route path="banking-finance" element={<BankingFinance />} />
          <Route path="retail-ecommerce" element={<RetailEcommerce />} />
          <Route path="media-entertainment" element={<MediaEntertainment />} />

          {/* Services */}
          <Route path="cloud-solutions" element={<CloudSolutions />} />
          <Route path="automation-efficiency" element={<AutomationEfficiency />} />
          <Route path="data-science-ai" element={<DataScienceAI />} />
          <Route path="salesforce-expertise" element={<SalesforceExpertise />} />
          <Route path="microsoft-solutions" element={<MicrosoftSolutions />} />
          <Route path="iot-innovations" element={<IotInnovations />} />
          <Route path="cybersecurity-services" element={<CybersecurityServices />} />
          <Route path="mobile-app-development" element={<MobileAppDevelopment />} />
          <Route path="aiot-integrations" element={<AiotIntegrations />} />
          <Route path="odoo-solutions" element={<OdooSolutions />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
