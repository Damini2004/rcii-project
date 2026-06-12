import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'

const stats = [
  { value: '10,000+', label: 'Researchers Supported', icon: '👨‍🔬' },
  { value: '500+', label: 'Institutions', icon: '🏛️' },
  { value: '200+', label: 'Journals', icon: '📚' },
  { value: '50+', label: 'Countries', icon: '🌍' },
]

const features = [
  'Publication in Q1/Q2 Journals',
  'Scopus & WoS Indexing',
  'Research Grant Funding',
  'Institutional Accreditation',
]

export default function Hero() {
  const [featureIdx, setFeatureIdx] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => setFeatureIdx((i) => (i + 1) % features.length), 2800)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center hero-gradient overflow-hidden pt-20">
      {/* Decorative blobs */}
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-indigo-200/30 hero-blob" />
      <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-cyan-200/30 hero-blob" style={{ animationDelay: '3s' }} />
      <div className="absolute top-1/2 right-1/4 w-48 h-48 bg-purple-200/20 hero-blob" style={{ animationDelay: '5s' }} />

      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: 'linear-gradient(#4F46E5 1px, transparent 1px), linear-gradient(90deg, #4F46E5 1px, transparent 1px)',
        backgroundSize: '40px 40px'
      }} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-indigo-100 text-indigo-700 text-sm font-semibold px-4 py-2 rounded-full mb-6 shadow-sm">
              <span className="flex w-2 h-2 rounded-full bg-indigo-500 animate-pulse" />
              India's #1 Research Consulting Platform
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 leading-[1.05] mb-6">
              Research Excellence{' '}
              <span className="gradient-text">Through Innovation</span>
            </h1>

            {/* Rotating feature */}
            <div className="flex items-center gap-3 mb-5 h-9">
              <svg className="w-5 h-5 text-indigo-600 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-lg text-indigo-700 font-semibold transition-all duration-300">
                {features[featureIdx]}
              </span>
            </div>

            <p className="text-lg text-gray-500 leading-relaxed mb-8 max-w-xl">
              Helping Researchers, Institutions, Publishers, and Funding Agencies Accelerate Global Research Impact through expert consulting, cutting-edge technology, and proven strategies.
            </p>

            <div className="flex flex-wrap gap-4 mb-12">
              <Link to="/contact" className="btn-primary">
                Get Started Free
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link to="/contact" className="btn-secondary">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                Book Consultation
              </Link>
            </div>

            {/* Trust row */}
            <div className="flex flex-wrap items-center gap-5 text-sm text-gray-500">
              <div className="flex items-center gap-1.5">
                <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                NAAC Certified Consultants
              </div>
              <div className="flex items-center gap-1.5">
                <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                Scopus Expert Partners
              </div>
              <div className="flex items-center gap-1.5">
                <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                ISO 9001:2015
              </div>
            </div>
          </div>

          {/* Right - Dashboard visual */}
          <div className="relative">
            <div className="relative z-10">
              {/* Main image */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-indigo-200/40 border border-white/80">
                <img
                  src="/home 3.png"
                  alt="Research Excellence Dashboard"
                  className="w-full h-auto object-cover"
                  onError={(e) => {
                    e.target.style.display = 'none'
                    e.target.parentElement.classList.add('bg-gradient-to-br', 'from-indigo-100', 'to-blue-100', 'aspect-video', 'flex', 'items-center', 'justify-center')
                  }}
                />
              </div>

              {/* Floating stats cards */}
              <div className="absolute -bottom-5 -left-5 glass-card rounded-2xl px-5 py-3.5 shadow-xl border border-white/80 animate-float">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-emerald-500 rounded-xl flex items-center justify-center text-lg shadow">
                    📈
                  </div>
                  <div>
                    <div className="text-lg font-black text-gray-900">+248%</div>
                    <div className="text-xs text-gray-500">Citation Growth</div>
                  </div>
                </div>
              </div>

              <div className="absolute -top-4 -right-4 glass-card rounded-2xl px-5 py-3.5 shadow-xl border border-white/80 animate-float-delayed">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-indigo-400 to-purple-500 rounded-xl flex items-center justify-center text-lg shadow">
                    🏆
                  </div>
                  <div>
                    <div className="text-lg font-black text-gray-900">500+</div>
                    <div className="text-xs text-gray-500">Institutions</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats bar */}
        <div className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat) => (
            <div key={stat.label} className="glass-card rounded-2xl p-5 border border-white/60 text-center hover:shadow-lg transition-shadow">
              <div className="text-2xl mb-1">{stat.icon}</div>
              <div className="text-2xl sm:text-3xl font-black gradient-text">{stat.value}</div>
              <div className="text-sm text-gray-500 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
