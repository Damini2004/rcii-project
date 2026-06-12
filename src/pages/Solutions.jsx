import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import SectionTitle from '../components/SectionTitle.jsx'
import { solutionsResearchers, solutionsInstitutions, solutionsPublishers } from '../data/services.js'

const tabs = ['For Researchers', 'For Institutions', 'For Publishers']

export default function Solutions() {
  const [activeTab, setActiveTab] = useState(0)

  const tabData = [
    {
      data: solutionsResearchers,
      heroImg: '/For Researchers.png',
      heroTitle: 'Empowering Individual Researchers',
      heroDesc: 'Whether you are a PhD student, early-career researcher, or established professor — our solutions accelerate your research career at every stage.',
    },
    {
      data: solutionsInstitutions,
      heroImg: '/Institutions Research Analytics.png',
      heroTitle: 'Transforming Institutional Research',
      heroDesc: 'Comprehensive solutions for universities, research institutes, and colleges to build research capacity, improve rankings, and achieve accreditation.',
    },
    {
      data: solutionsPublishers,
      heroImg: '/publsher page 1.png',
      heroTitle: 'Accelerating Publisher Growth',
      heroDesc: 'From editorial workflow automation to indexing readiness and journal growth strategy — we help publishers thrive in a competitive landscape.',
    },
  ]

  const current = tabData[activeTab]

  return (
    <>
      {/* Header */}
      <section className="pt-28 pb-16 bg-gradient-to-br from-slate-900 via-indigo-950 to-blue-950 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: 'linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)',
          backgroundSize: '48px 48px'
        }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 bg-cyan-500/20 text-cyan-300 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4 border border-cyan-500/30">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
            Tailored Solutions
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-4">
            Solutions Built for <span className="text-cyan-300">Every Stakeholder</span>
          </h1>
          <p className="text-xl text-blue-200 max-w-2xl mx-auto">
            Researcher Connect offers specialized solution suites for researchers, institutions, and publishers — each designed with domain-specific expertise.
          </p>
        </div>
      </section>

      {/* Tab Navigation */}
      <div className="bg-white border-b border-gray-100 sticky top-16 z-30 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-2 overflow-x-auto py-3">
            {tabs.map((tab, i) => (
              <button
                key={tab}
                onClick={() => setActiveTab(i)}
                className={`shrink-0 px-6 py-2.5 rounded-xl text-sm font-bold transition-all ${
                  activeTab === i
                    ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-500/30'
                    : 'text-gray-600 hover:text-indigo-600 hover:bg-indigo-50'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Hero for tab */}
      <section className="py-20 bg-gradient-to-br from-indigo-50/50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-4 leading-tight">
                {current.heroTitle}
              </h2>
              <p className="text-lg text-gray-500 leading-relaxed mb-8">{current.heroDesc}</p>
              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                {current.data.map((sol) => (
                  <div key={sol.title} className="flex items-start gap-3 p-4 rounded-xl bg-white border border-gray-100 hover:border-indigo-100 shadow-sm hover:shadow-md transition-all">
                    <span className="text-2xl">{sol.icon}</span>
                    <div>
                      <div className="font-bold text-gray-900 text-sm">{sol.title}</div>
                      <div className="text-xs text-gray-500 mt-1">{sol.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
              <Link to="/contact" className="btn-primary">
                Explore {tabs[activeTab]}
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
            <div>
              <img src={current.heroImg} alt={tabs[activeTab]} className="rounded-3xl shadow-2xl shadow-indigo-200/30 w-full" />
            </div>
          </div>
        </div>
      </section>

      {/* Solution detail cards */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            eyebrow={tabs[activeTab]}
            title={<>All <span className="gradient-text">{tabs[activeTab]}</span> Solutions</>}
            subtitle="Deep-dive into each solution with detailed capabilities and outcomes."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {current.data.map((sol) => (
              <div key={sol.title} className="group bg-white rounded-2xl border border-gray-100 hover:border-indigo-100 shadow-sm hover:shadow-xl hover:shadow-indigo-100/40 overflow-hidden transition-all hover:-translate-y-1">
                {sol.image && (
                  <div className="h-44 overflow-hidden bg-indigo-50">
                    <img src={sol.image} alt={sol.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                )}
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-3xl">{sol.icon}</span>
                    <h3 className="font-bold text-gray-900 group-hover:text-indigo-700 transition-colors">{sol.title}</h3>
                  </div>
                  <p className="text-gray-500 text-sm leading-relaxed mb-4">{sol.desc}</p>
                  <Link to="/contact" className="text-indigo-600 text-sm font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
                    Learn More
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-indigo-600 via-blue-600 to-cyan-600">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">
            Not Sure Which Solution Is Right for You?
          </h2>
          <p className="text-xl text-blue-100 mb-8">Our consultants will help you identify the perfect package for your specific needs.</p>
          <Link to="/contact" className="bg-white text-indigo-700 font-bold px-10 py-4 rounded-xl hover:bg-indigo-50 transition-colors inline-flex items-center gap-2 shadow-lg text-lg">
            Talk to an Expert — Free
          </Link>
        </div>
      </section>
    </>
  )
}
