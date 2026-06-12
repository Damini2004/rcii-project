import React, { useState } from 'react'
import SectionTitle from '../components/SectionTitle.jsx'

const contactInfo = [
  { icon: '📧', label: 'Email Us', value: 'contact@researcherconnect.com', href: 'mailto:contact@researcherconnect.com' },
  { icon: '📞', label: 'Call Us', value: '+91 9960266198', href: 'tel:+919960266198' },
  { icon: '🌐', label: 'Website', value: 'researcherconnect.com', href: 'https://researcherconnect.com' },
  { icon: '📍', label: 'Location', value: 'Pune, Maharashtra, India', href: '#' },
]

const services = [
  'Publication Support', 'Author Services', 'Editorial Support',
  'Indexing Support', 'Accreditation Support', 'Research Profiling',
  'Grant Support', 'Research Data Management', 'Technology Solutions',
  'Other',
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', institution: '', service: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <>
      {/* Header */}
      <section className="pt-28 pb-16 bg-gradient-to-br from-indigo-50 via-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-indigo-50 text-indigo-700 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4 border border-indigo-100">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse" />
              Get in Touch
            </div>
            <h1 className="text-4xl sm:text-5xl font-black text-gray-900 mb-4">
              Let's Elevate Your <span className="gradient-text">Research Impact</span>
            </h1>
            <p className="text-lg text-gray-500">
              Reach out to our team of expert consultants. Free initial consultation included for all inquiries.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Left - Info */}
            <div className="lg:col-span-2 space-y-6">
              <div>
                <h2 className="text-2xl font-black text-gray-900 mb-2">Contact Information</h2>
                <p className="text-gray-500 text-sm">Available Monday to Saturday, 9 AM – 7 PM IST</p>
              </div>

              {contactInfo.map((info) => (
                <a key={info.label} href={info.href} className="flex items-start gap-4 p-5 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:border-indigo-100 transition-all group">
                  <div className="w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center text-2xl group-hover:bg-indigo-100 transition-colors shrink-0">
                    {info.icon}
                  </div>
                  <div>
                    <div className="text-xs text-gray-400 font-medium mb-0.5">{info.label}</div>
                    <div className="font-semibold text-gray-900 text-sm group-hover:text-indigo-700 transition-colors">{info.value}</div>
                  </div>
                </a>
              ))}

              {/* Response time */}
              <div className="bg-gradient-to-br from-indigo-600 to-blue-700 rounded-2xl p-6 text-white">
                <div className="text-3xl mb-3">⚡</div>
                <h3 className="font-bold text-lg mb-2">Fast Response Guarantee</h3>
                <p className="text-blue-100 text-sm leading-relaxed">
                  All consultation requests receive a personalized response within 24 hours from a dedicated senior consultant.
                </p>
                <div className="mt-4 grid grid-cols-3 gap-3 text-center">
                  {[['&lt;24hr', 'Response'], ['Free', 'Assessment'], ['98%', 'Satisfaction']].map(([val, label]) => (
                    <div key={label} className="bg-white/10 rounded-xl py-2">
                      <div className="font-black text-base" dangerouslySetInnerHTML={{ __html: val }} />
                      <div className="text-xs text-blue-200">{label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right - Form */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-3xl border border-gray-100 shadow-xl shadow-indigo-100/20 p-8">
                {submitted ? (
                  <div className="text-center py-12">
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center text-4xl mx-auto mb-4">✅</div>
                    <h3 className="text-2xl font-black text-gray-900 mb-2">Thank You!</h3>
                    <p className="text-gray-500 mb-6">Your consultation request has been received. Our senior consultant will reach out within 24 hours.</p>
                    <button onClick={() => setSubmitted(false)} className="btn-secondary text-sm py-2.5 px-6">
                      Submit Another Request
                    </button>
                  </div>
                ) : (
                  <>
                    <h2 className="text-2xl font-black text-gray-900 mb-2">Book Your Free Consultation</h2>
                    <p className="text-gray-500 text-sm mb-6">Fill in your details and a senior consultant will contact you within 24 hours.</p>

                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="grid sm:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-1.5">Full Name *</label>
                          <input
                            type="text" name="name" required value={form.name} onChange={handleChange}
                            placeholder="Dr. / Prof. Your Name"
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100 outline-none text-sm transition-all"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-1.5">Email Address *</label>
                          <input
                            type="email" name="email" required value={form.email} onChange={handleChange}
                            placeholder="your@institution.edu"
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100 outline-none text-sm transition-all"
                          />
                        </div>
                      </div>
                      <div className="grid sm:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-1.5">Phone Number</label>
                          <input
                            type="tel" name="phone" value={form.phone} onChange={handleChange}
                            placeholder="+91 XXXXX XXXXX"
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100 outline-none text-sm transition-all"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-1.5">Institution / Organization</label>
                          <input
                            type="text" name="institution" value={form.institution} onChange={handleChange}
                            placeholder="University / Institute Name"
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100 outline-none text-sm transition-all"
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1.5">Service of Interest *</label>
                        <select
                          name="service" required value={form.service} onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100 outline-none text-sm transition-all bg-white"
                        >
                          <option value="">Select a service...</option>
                          {services.map((s) => <option key={s} value={s}>{s}</option>)}
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1.5">Message / Research Goals</label>
                        <textarea
                          name="message" rows={4} value={form.message} onChange={handleChange}
                          placeholder="Briefly describe your research goals or challenges..."
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100 outline-none text-sm transition-all resize-none"
                        />
                      </div>
                      <button type="submit" className="w-full btn-primary justify-center text-base py-4">
                        Request Free Consultation
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </button>
                      <p className="text-xs text-gray-400 text-center">
                        By submitting, you agree to our Privacy Policy. Your information is 100% confidential.
                      </p>
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map placeholder */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl overflow-hidden shadow-xl bg-gradient-to-br from-indigo-100 to-blue-100 h-64 flex items-center justify-center border border-indigo-100">
            <div className="text-center">
              <div className="text-5xl mb-3">📍</div>
              <div className="font-bold text-gray-700 text-lg">Researcher Connect Innovation & Impact Pvt. Ltd.</div>
              <div className="text-gray-500 text-sm mt-1">Pune, Maharashtra, India — 411001</div>
              <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 mt-3 text-indigo-600 text-sm font-semibold hover:underline">
                View on Google Maps →
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
