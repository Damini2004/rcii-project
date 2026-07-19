import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home.jsx'
import About from '../pages/About.jsx'
import Services from '../pages/Services.jsx'
import Solutions from '../pages/Solutions.jsx'

import Contact from '../pages/Contact.jsx'
import Researches from '../pages/researches/Researches.jsx'
import ResearcherAnalytics from '../pages/Institutions/ResearchAnalytics.jsx'
import ResearchConsulting from '../pages/Institutions/ResearchConsulting.jsx'
import InstitutionalRepository from '../pages/Institutions/InstitutionalRepository.jsx'
import RAMSPlatform from '../pages/Institutions/RAMSPlatform.jsx'
import AccrediationRanking from '../pages/Institutions/AccreditationRanking'
import ResearchInfrastructureSupport from '../pages/Institutions/ResearchInfrastructureSupport.jsx'
import AuthorServices from '../pages/researches/AuthorServices.jsx'
import CareerGrowthResources from '../pages/researches/CareerGrowthResources.jsx'
import GrantFunding from '../pages/researches/GrantFunding.jsx'
import IpinnoSupport from '../pages/researches/IpinnoSupport.jsx'
import PubSupport from '../pages/researches/PubSupport.jsx'
import ReseachResourcesTemplate from '../pages/researches/ResearchResourcesTemplate.jsx'
import ResearchProfileVisibility from '../pages/researches/ResearchProfileVisibility.jsx'
import ResearchFundingGrantsSupport from '../pages/Institutions/ResearchFundingGrantsSupport.jsx'
import ResearchDataManagement from '../pages/Institutions/ResearchDataManagement.jsx'
import Resources from '../pages/resources/Resources.jsx'
import Blogs from '../pages/resources/Blogs.jsx'
import HowToGet from '../pages/resources/HowToGet.jsx'
import BlogDetails from '../pages/resources/BlogDetails.jsx'
import InnovationIP from '../pages/Innovation/InnovationIP.jsx'
import Publisher from '../pages/publisher/Publisher.jsx'
import IndexingSupport from '../pages/publisher/IndexingSupport.jsx'
import EditorialSupport from '../pages/publisher/EditorialSupport.jsx'
import TechnologicalSolutions from '../pages/publisher/TechnologicalSolutions.jsx'
import MarketingStrategic from '../pages/publisher/MarketingStrategic.jsx'
import JournalSolution from '../pages/publisher/JournalSolution.jsx'

// Admin
import AdminLogin from '../admin/pages/AdminLogin.jsx'
import AdminBlogDashboard from '../admin/pages/AdminBlogDashboard.jsx'
import AdminBlogForm from '../admin/pages/AdminBlogForm.jsx'
import AdminBlogPreview from "../admin/pages/AdminBlogPreview.jsx"
import UserDashboard from '../admin/pages/UserDashboard.jsx'
import ProtectedRoute from '../admin/components/ProtectedRoute.jsx'

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />
      <Route path="/solutions" element={<Solutions />} />
      <Route path="/inovation" element={<InnovationIP />} />
      
      <Route path="/contact" element={<Contact />} />
      <Route path="/researchers" element={<Researches />} />
      <Route path="/author-services" element={<AuthorServices/>} />
      <Route path="/publication-support" element={<PubSupport/>} />
      <Route path="/ip-innovation-support" element={<IpinnoSupport/>} />
      <Route path="/reserach-resources-templates" element={<ReseachResourcesTemplate/>} />
      <Route path="/research-profiling-visibility" element={<ResearchProfileVisibility/>} />
      <Route path="/grant-funding-support" element={<GrantFunding/>} />
      <Route path="/career-growth-resources" element={<CareerGrowthResources/>} />
      <Route path="/research-analytics" element={<ResearcherAnalytics />} />
      <Route path="/research-consulting" element={<ResearchConsulting />} />
      <Route path="/institutions" element={<InstitutionalRepository/>} />
       <Route path="/rams-platform" element={<RAMSPlatform/>} />
       <Route path="/ranking-support" element={<AccrediationRanking/>} />
       <Route path="/research-infrastructure-support" element={<ResearchInfrastructureSupport/>} />
        <Route path="/funding-grants-support" element={<ResearchFundingGrantsSupport/>} />
        <Route path="/research-data-management" element={<ResearchDataManagement/>} />
       <Route path="/resources" element={<Resources />} />
       <Route path="/blogs" element={<Blogs />} />
       <Route path="/how-to-get-blog" element={<HowToGet />} />
       <Route path="/blog/:slug" element={<BlogDetails />} />
       <Route path="/publishers" element={<Publisher />} />
       <Route path="/indexing-support" element={<IndexingSupport />} />
      <Route path="/editorial-support" element={<EditorialSupport />} />
      <Route path="/technological-solutions" element={<TechnologicalSolutions />} />
       <Route path="/marketing-strategic" element={<MarketingStrategic />} />
        <Route path="/journal-solution" element={<JournalSolution />} />

        {/* Admin routes */}
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin/blogs" element={<ProtectedRoute><AdminBlogDashboard /></ProtectedRoute>} />
        <Route
          path="/admin/blogs/new"
          element={
            <ProtectedRoute>
              <AdminBlogForm />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/blogs/edit/:id"
          element={
            <ProtectedRoute>
              <AdminBlogForm />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/blogs/view/:id"
          element={
            <ProtectedRoute>
              <AdminBlogPreview />
            </ProtectedRoute>
          }
        />
    </Routes>
  )
}

export default AppRoutes
