import React from 'react'
import AppRoutes from './routes/AppRoutes.jsx'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import ScrollToTop from './components/ScrollToTop.jsx'
import ScrollToTopButton from './components/ScrollToTopButton.jsx'

function App() {
  return (
    <div className="min-h-screen flex flex-col">
        <ScrollToTop />
        <ScrollToTopButton />
      <Navbar />
      <main className="flex-1">
        <AppRoutes />
      </main>
      <Footer />
    </div>
  )
}

export default App
