import React from 'react'
import { Link } from 'react-router-dom'

export default function BlogCard({ blog, featured = false }) {
  return (
    <div className={`group bg-white rounded-2xl border border-gray-100 hover:border-indigo-100 shadow-sm hover:shadow-xl hover:shadow-indigo-100/40 overflow-hidden transition-all duration-300 hover:-translate-y-1 ${featured ? 'lg:flex' : ''}`}>
      {/* Image */}
      <div className={`relative overflow-hidden bg-gradient-to-br from-indigo-50 to-blue-100 ${featured ? 'lg:w-2/5 h-64 lg:h-auto' : 'h-48'}`}>
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
          onError={(e) => { e.target.style.display = 'none' }}
        />
        <div className="absolute top-3 left-3">
          <span className="bg-indigo-600 text-white text-xs font-bold px-3 py-1.5 rounded-full">
            {blog.category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex-1 flex flex-col">
        <div className="flex items-center gap-3 mb-3 text-xs text-gray-400">
          <span>{blog.date}</span>
          <span className="w-1 h-1 rounded-full bg-gray-300" />
          <span>{blog.readTime}</span>
        </div>

        <h3 className={`font-bold text-gray-900 mb-3 leading-snug group-hover:text-indigo-700 transition-colors ${featured ? 'text-xl' : 'text-base'}`}>
          {blog.title}
        </h3>

        <p className="text-gray-500 text-sm leading-relaxed mb-4 flex-1">
          {blog.excerpt}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {blog.tags.map((tag) => (
            <span key={tag} className="text-xs bg-gray-50 text-gray-600 px-2.5 py-1 rounded-full border border-gray-100">
              #{tag}
            </span>
          ))}
        </div>

        {/* Author + CTA */}
        <div className="flex items-center justify-between pt-3 border-t border-gray-100">
          <div>
            <div className="text-xs font-semibold text-gray-800">{blog.author}</div>
            <div className="text-xs text-gray-400">{blog.authorRole}</div>
          </div>
          <Link to="/blog" className="text-indigo-600 text-sm font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
            Read More
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  )
}
