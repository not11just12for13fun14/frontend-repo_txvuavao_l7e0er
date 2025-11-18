import { useMemo, useState } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Feed from './pages/Feed'
import Businesses from './pages/Businesses'
import BusinessProfile from './pages/BusinessProfile'
import BusinessDashboard from './pages/BusinessDashboard'
import Pricing from './pages/Pricing'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Profile from './pages/Profile'
import WriteReview from './pages/WriteReview'
import StaticPage from './pages/StaticPage'

function AppShell({ children, rtl }){
  return (
    <div className={`${rtl ? 'direction-rtl' : ''}`}>
      {children}
    </div>
  )
}

export default function App(){
  const [rtl, setRtl] = useState(false)
  const [lang, setLang] = useState('EN')
  const location = useLocation()
  const showFooter = useMemo(()=> !['/login','/signup'].includes(location.pathname), [location.pathname])

  return (
    <div className={`${rtl ? 'rtl' : ''} min-h-screen bg-gray-50 text-gray-900`} dir={rtl? 'rtl' : 'ltr'}>
      <Navbar rtl={rtl} setRtl={setRtl} lang={lang} setLang={setLang} />
      <main className="min-h-[60vh]">
        <Routes>
          <Route path="/" element={<Home lang={lang} rtl={rtl} />} />
          <Route path="/feed" element={<Feed />} />
          <Route path="/businesses" element={<Businesses />} />
          <Route path="/business/:id" element={<BusinessProfile />} />
          <Route path="/business-dashboard" element={<BusinessDashboard />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/review/new" element={<WriteReview />} />
          <Route path="/about" element={<StaticPage title="About" />} />
          <Route path="/contact" element={<StaticPage title="Contact" />} />
          <Route path="/terms" element={<StaticPage title="Terms" />} />
          <Route path="/privacy" element={<StaticPage title="Privacy" />} />
        </Routes>
      </main>
      {showFooter && <Footer/>}
    </div>
  )
}
