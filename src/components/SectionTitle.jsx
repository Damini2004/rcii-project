import React from 'react'

export default function SectionTitle({ eyebrow, title, subtitle, align = 'center', light = false }) {
  const alignClass = align === 'left' ? 'text-left' : 'text-center mx-auto'
  
  return (
    <div className={`max-w-3xl mb-14 ${alignClass}`}>
      {eyebrow && (
        <div className="inline-flex items-center gap-2 bg-indigo-50 text-indigo-700 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4 border border-indigo-100">
          <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse"></span>
          {eyebrow}
        </div>
      )}
      <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-black leading-tight mb-4 ${light ? 'text-white' : 'text-gray-900'}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`text-lg leading-relaxed ${light ? 'text-blue-100' : 'text-gray-500'}`}>
          {subtitle}
        </p>
      )}
    </div>
  )
}
