import React from 'react'

export default function TestimonialCard({ testimonial }) {
  return (
    <div className="glass-card rounded-2xl p-6 hover:shadow-xl hover:shadow-indigo-100/40 transition-all duration-300 hover:-translate-y-1 border border-white/60 bg-white">
      {/* Stars */}
      <div className="flex gap-0.5 mb-4">
        {Array.from({ length: testimonial.rating }).map((_, i) => (
          <svg key={i} className="w-4 h-4 text-amber-400 fill-amber-400" viewBox="0 0 24 24">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
          </svg>
        ))}
      </div>

      {/* Quote */}
      <div className="relative mb-5">
        <svg className="absolute -top-1 -left-1 w-7 h-7 text-indigo-200" fill="currentColor" viewBox="0 0 24 24">
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
        </svg>
        <p className="text-gray-700 text-sm leading-relaxed pl-4 italic">
          "{testimonial.quote}"
        </p>
      </div>

      {/* Metric Badge */}
      <div className="inline-flex items-center gap-1.5 bg-indigo-50 text-indigo-700 text-xs font-bold px-3 py-1.5 rounded-full mb-4 border border-indigo-100">
        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
        {testimonial.metric}
      </div>

      {/* Author */}
      <div className="flex items-center gap-3 border-t border-gray-100 pt-4">
        <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${testimonial.avatarColor} flex items-center justify-center text-white font-bold text-sm shrink-0`}>
          {testimonial.avatar}
        </div>
        <div>
          <div className="font-bold text-gray-900 text-sm">{testimonial.name}</div>
          <div className="text-xs text-gray-500">{testimonial.title}</div>
          <div className="text-xs text-indigo-600 font-medium">{testimonial.institution}, {testimonial.country}</div>
        </div>
      </div>
    </div>
  )
}
