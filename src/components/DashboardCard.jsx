import React from 'react'

export default function DashboardCard({ metric }) {
  return (
    <div className="glass-card rounded-2xl p-5 border border-white hover:shadow-lg hover:shadow-indigo-100/50 transition-all duration-300 hover:-translate-y-1">
      <div className="flex items-start justify-between mb-4">
        <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${metric.gradient} flex items-center justify-center text-xl shadow-md`}>
          {metric.icon}
        </div>
        <div className={`flex items-center gap-1 text-xs font-bold px-2 py-1 rounded-full ${metric.trend > 0 ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'}`}>
          <svg className={`w-3 h-3 ${metric.trend > 0 ? '' : 'rotate-180'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
          {Math.abs(metric.trend)}%
        </div>
      </div>
      
      <div className="mb-1">
        <div className="text-2xl font-black text-gray-900 stat-counter">{metric.value}</div>
      </div>
      <div className="text-sm font-semibold text-gray-700 mb-1">{metric.label}</div>
      <div className="text-xs text-gray-400">{metric.sublabel}</div>

      {/* Mini bar chart */}
      <div className="mt-4 flex items-end gap-1 h-8">
        {metric.sparkline.map((v, i) => (
          <div
            key={i}
            className={`flex-1 rounded-sm bg-gradient-to-t ${metric.gradient} opacity-${i === metric.sparkline.length - 1 ? '100' : '40'}`}
            style={{ height: `${(v / Math.max(...metric.sparkline)) * 100}%` }}
          />
        ))}
      </div>
    </div>
  )
}
