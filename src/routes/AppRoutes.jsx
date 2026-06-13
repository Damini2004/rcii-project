import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home.jsx'
import About from '../pages/About.jsx'
import Services from '../pages/Services.jsx'
import Solutions from '../pages/Solutions.jsx'
import Blog from '../pages/Blog.jsx'
import Contact from '../pages/Contact.jsx'
import Researches from '../pages/researches/Researches.jsx'
import ResearcherAnalytics from '../pages/Institutions/ResearchAnalytics.jsx'
import ResearchConsulting from '../pages/Institutions/ResearchConsulting.jsx'

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />
      <Route path="/solutions" element={<Solutions />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/researchers" element={<Researches />} />
      <Route path="/research-analytics" element={<ResearcherAnalytics />} />
      <Route path="/research-consulting" element={<ResearchConsulting />} />
    </Routes>
  )
}

export default AppRoutes
