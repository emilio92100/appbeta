import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import PricingPage from './pages/PricingPage'
import ContactPage from './pages/ContactPage'
import LoginPage from './pages/LoginPage'

export default function App() {
  return (
    <div className="site-shell">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/tarifs" element={<PricingPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/connexion" element={<LoginPage />} />
      </Routes>
      <Footer />
    </div>
  )
}
