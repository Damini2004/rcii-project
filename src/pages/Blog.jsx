import React, { useState } from 'react'
import SectionTitle from '../components/SectionTitle.jsx'
import BlogCard from '../components/BlogCard.jsx'
import { blogs } from '../data/blogs.js'

const categories = ['All', 'Publication Strategy', 'Indexing & Discovery', 'Research Funding', 'Accreditation', 'Research Leadership', 'Research Data']

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState('All')

  const filtered = activeCategory === 'All' ? blogs : blogs.filter((b) => b.category === activeCategory)

  return (
    <>
      {/* Header */}
      <section className="pt-28 pb-16 bg-gradient-to-br from-slate-900 via-indigo-950 to-blue-950 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '32px 32px'
        }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-white/10 text-white text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4 border border-white/20">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                Blog & Insights
              </div>
              <h1 className="text-4xl sm:text-5xl font-black text-white mb-4">
                Research Intelligence <span className="text-cyan-300">Hub</span>
              </h1>
              <p className="text-xl text-blue-200 mb-8">
                Expert articles on publication strategy, research funding, indexing, accreditation, and the future of academic research.
              </p>
              <div className="flex items-center gap-4 text-sm text-blue-200">
                <div className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-green-400" />Updated Weekly</div>
                <div className="flex items-center gap-1.5"><span>📝</span>{blogs.length}+ Articles</div>
                <div className="flex items-center gap-1.5"><span>👁️</span>Expert Authors</div>
              </div>
            </div>
            <div>
              <img src="/bg blog.png" alt="Research Blog" className="rounded-3xl shadow-2xl w-full opacity-90" />
            </div>
          </div>
        </div>
      </section>

      {/* Category filter */}
      <div className="bg-white border-b border-gray-100 sticky top-16 z-30 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex gap-2 overflow-x-auto pb-1">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`shrink-0 px-4 py-2 rounded-full text-xs font-bold transition-all ${
                  activeCategory === cat
                    ? 'bg-indigo-600 text-white shadow-md shadow-indigo-500/30'
                    : 'bg-gray-100 text-gray-600 hover:bg-indigo-50 hover:text-indigo-600'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Blog Grid */}
      <section className="section-padding bg-gray-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filtered.length > 0 ? (
            <div className="grid gap-6">
              {filtered[0] && <BlogCard blog={filtered[0]} featured />}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filtered.slice(1).map((blog) => (
                  <BlogCard key={blog.id} blog={blog} />
                ))}
              </div>
            </div>
          ) : (
            <div className="text-center py-20 text-gray-400">
              <div className="text-5xl mb-4">📭</div>
              <p className="text-lg font-medium">No articles in this category yet</p>
              <p className="text-sm mt-1">Check back soon or explore another category</p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 bg-gradient-to-r from-indigo-600 to-blue-700">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <div className="text-5xl mb-4">📬</div>
          <h2 className="text-3xl font-black text-white mb-3">Stay Ahead in Research</h2>
          <p className="text-blue-100 mb-6">Get the latest insights on publication, funding, and research trends delivered weekly.</p>
          <div className="flex gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Your research email"
              className="flex-1 px-4 py-3 rounded-xl border-0 text-gray-900 text-sm focus:ring-2 focus:ring-white/40 outline-none"
            />
            <button className="bg-white text-indigo-700 font-bold px-6 py-3 rounded-xl hover:bg-indigo-50 transition-colors shrink-0">
              Subscribe
            </button>
          </div>
          <p className="text-blue-200 text-xs mt-3">No spam. Unsubscribe anytime. Join 8,500+ researchers.</p>
        </div>
      </section>
    </>
  )
}
