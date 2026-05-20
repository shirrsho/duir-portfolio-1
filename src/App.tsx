import { Routes, Route, useLocation, Navigate } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Home from '@/pages/Home'
import About from '@/pages/About'
import Faculty from '@/pages/Faculty'
import Programs from '@/pages/Programs'
import Research from '@/pages/Research'
import News from '@/pages/News'
import Alumni from '@/pages/Alumni'
import Contact from '@/pages/Contact'
import ScrollToTop from '@/components/layout/ScrollToTop'

export default function App() {
  const location = useLocation()

  return (
    <>
      <ScrollToTop />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/"          element={<Home />} />
          <Route path="/about"     element={<About />} />
          <Route path="/faculty"   element={<Faculty />} />
          <Route path="/programs"  element={<Programs />} />
          <Route path="/research"  element={<Research />} />
          <Route path="/news"      element={<News />} />
          <Route path="/alumni"    element={<Alumni />} />
          <Route path="/contact"   element={<Contact />} />
          <Route path="*"          element={<Navigate to="/" replace />} />
        </Routes>
      </AnimatePresence>
    </>
  )
}
