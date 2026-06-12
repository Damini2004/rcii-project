import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import SectionTitle from '../components/SectionTitle.jsx'
import ServiceCard from '../components/ServiceCard.jsx'
import { services } from '../data/services.js'

const categories = ['All', 'Publication', 'Institutional', 'Technology', 'Compliance']

export default function Services() {
  const [activeCategory, setActiveCategory] = useState('All')

  return (
    <>
      {/* Header */}
      <section className="pt-28 pb-16 bg-gradient-to-br from-indigo-950 via-blue-900 to-indigo-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '32px 32px'
        }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 text-white text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4 border border-white/20">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
            Research Services
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-4">
            12 Specialized Research <span className="text-cyan-300">Service Areas</span>
          </h1>
          <p className="text-xl text-blue-200 max-w-2xl mx-auto mb-8">
            End-to-end research consulting from publication to commercialization — everything under one roof.
          </p>
          <Link to="/contact" className="bg-white text-indigo-700 font-semibold px-8 py-3.5 rounded-xl hover:bg-indigo-50 transition-colors inline-flex items-center gap-2 shadow-lg">
            Get Free Consultation
          </Link>
        </div>
      </section>

      {/* Filter */}
      <section className="py-8 border-b border-gray-100 bg-white sticky top-16 z-30 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 overflow-x-auto pb-1">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`shrink-0 px-5 py-2 rounded-full text-sm font-semibold transition-all ${
                  activeCategory === cat
                    ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-500/30'
                    : 'bg-gray-100 text-gray-600 hover:bg-indigo-50 hover:text-indigo-600'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-gray-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* Individual service details */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            eyebrow="Service Details"
            title={<>Deep Dive into Our <span className="gradient-text">Core Services</span></>}
            subtitle="Each service is delivered by subject-matter experts with proven track records in their respective domains."
          />
          <div className="space-y-8">
            {services.slice(0, 4).map((service, i) => (
              <div key={service.id} className={`grid lg:grid-cols-2 gap-12 items-center ${i % 2 !== 0 ? 'lg:grid-flow-dense' : ''}`}>
                <div className={i % 2 !== 0 ? 'lg:col-start-2' : ''}>
                  <div className={`inline-flex items-center gap-2 bg-gradient-to-r ${service.color} text-white text-xs font-bold px-4 py-1.5 rounded-full mb-4`}>
                    {service.icon} {service.title}
                  </div>
                  <h3 className="text-2xl font-black text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-gray-500 leading-relaxed mb-6">{service.description}</p>
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    {service.features.map((f) => (
                      <div key={f} className="flex items-center gap-2 text-sm text-gray-700">
                        <svg className="w-4 h-4 text-indigo-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {f}
                      </div>
                    ))}
                  </div>
                  <Link to="/contact" className="btn-primary text-sm py-2.5">
                    Get Started with {service.title}
                  </Link>
                </div>
                <div className={i % 2 !== 0 ? 'lg:col-start-1 lg:row-start-1' : ''}>
                  <img src={service.image} alt={service.title} className="rounded-2xl shadow-xl shadow-indigo-100/40 w-full" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
