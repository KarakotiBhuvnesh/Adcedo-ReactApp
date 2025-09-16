import { Suspense, lazy } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import RootLayout from '@/layouts/RootLayout'
import ScrollToTop from '@/components/ScrollToTop'

const Home     = lazy(() => import("@/pages/Home"));
const About    = lazy(() => import("@/pages/About"));
const Services = lazy(() => import("@/pages/Services"));
const Projects = lazy(() => import("@/pages/Projects"));
const Team     = lazy(() => import("@/pages/Team"));
const Contact  = lazy(() => import("@/pages/Contact"));
const Soon     = lazy(() => import("@/pages/Soon"));
const NotFound = lazy(() => import("@/pages/NotFound"));

export default function App() {
  const location = useLocation()
  return (
    <Suspense fallback={<div className="p-8">Loading…</div>}>
      <ScrollToTop key={location.pathname} />
      <Routes>
        {/* 👇 give the layout a base path */}
        <Route path="/" element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="services" element={<Services />} />
          <Route path="projects" element={<Projects />} />
          <Route path="team" element={<Team />} />
          <Route path="contact" element={<Contact />} />
          <Route path="soon" element={<Soon />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Suspense>
  )
}

