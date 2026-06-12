import React from 'react'
import { Link } from 'react-router-dom'

export default function ServiceCard({ service }) {
  return (
    <div className="service-card group relative bg-white rounded-2xl border border-gray-100 hover:border-indigo-100 shadow-sm hover:shadow-xl hover:shadow-indigo-100/40 overflow-hidden cursor-pointer">
      {/* Image */}
      <div className="relative h-44 overflow-hidden bg-gradient-to-br from-slate-100 to-slate-200">
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
          onError={(e) => {
            e.target.style.display = 'none'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className={`absolute top-3 left-3 w-10 h-10 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center text-xl shadow-lg`}>
          {service.icon}
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="font-bold text-gray-900 text-base mb-2 group-hover:text-indigo-700 transition-colors">
          {service.title}
        </h3>
        <p className="text-gray-500 text-sm leading-relaxed mb-4">
          {service.description}
        </p>
        
        {/* Features */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {service.features.slice(0, 3).map((f) => (
            <span key={f} className={`text-xs font-medium px-2.5 py-1 rounded-full ${service.lightColor} ${service.textColor}`}>
              {f}
            </span>
          ))}
        </div>

        <Link to="/services" className="flex items-center gap-1.5 text-indigo-600 text-sm font-semibold group-hover:gap-2.5 transition-all">
          Learn More
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>
      </div>
    </div>
  )
}
