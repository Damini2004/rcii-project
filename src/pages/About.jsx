import React from 'react'
import { Link } from 'react-router-dom'
import SectionTitle from '../components/SectionTitle.jsx'

const team = [
  { name: 'Dr. Rajesh Patil', role: 'Founder & CEO', expertise: 'Research Policy & Accreditation', avatar: 'RP', color: 'from-indigo-500 to-blue-600' },
  { name: 'Dr. Anjali Mehta', role: 'Chief Research Officer', expertise: 'Publication Strategy & Scopus', avatar: 'AM', color: 'from-purple-500 to-pink-600' },
  { name: 'Prof. Suresh Kumar', role: 'Head of Institutional Consulting', expertise: 'NAAC, NIRF, QS Rankings', avatar: 'SK', color: 'from-cyan-500 to-teal-600' },
  { name: 'Dr. Priyanka Joshi', role: 'Director, Grant Services', expertise: 'DST, DBT, SERB, Horizon Europe', avatar: 'PJ', color: 'from-amber-500 to-orange-600' },
]

const milestones = [
  { year: '2018', title: 'Founded in Pune', desc: 'Started with 5 researchers and a vision to democratize research excellence.' },
  { year: '2019', title: '100 Institutions', desc: 'Reached our first 100 institutional clients across India.' },
  { year: '2021', title: 'Global Expansion', desc: 'Extended services to 25 countries across Asia, Middle East, and Africa.' },
  { year: '2022', title: 'Technology Launch', desc: 'Launched proprietary research analytics and journal matching platform.' },
  { year: '2024', title: '500+ Institutions', desc: 'Crossed 500 institutional partnerships and 10,000 individual researchers.' },
  { year: '2025', title: 'ISO Certified', desc: 'Achieved ISO 9001:2015 certification for research consulting quality.' },
]

export default function About() {
  return (
    <>
      {/* Page Header */}
      <section className="pt-28 pb-16 bg-gradient-to-br from-indigo-50 via-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-indigo-50 text-indigo-700 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4 border border-indigo-100">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse" />
                About RCII
              </div>
              <h1 className="text-4xl sm:text-5xl font-black text-gray-900 mb-6 leading-tight">
                Pioneering Research Excellence <span className="gradient-text">Since 2018</span>
              </h1>
              <p className="text-lg text-gray-500 leading-relaxed mb-6">
                Researcher Connect Innovation & Impact Pvt. Ltd. (RCII) is India's premier research consulting and academic services platform. We believe every researcher and institution deserves access to world-class guidance, technology, and networks.
              </p>
              <p className="text-gray-500 leading-relaxed mb-8">
                From a small team of passionate researchers in Pune, we have grown into a global platform serving 500+ institutions, 10,000+ researchers, and 200+ journals across 50 countries.
              </p>
              <div className="flex gap-4">
                <Link to="/contact" className="btn-primary">Work With Us</Link>
                <Link to="/services" className="btn-secondary">Our Services</Link>
              </div>
            </div>
            <div className="relative">
              <img src="/about.png" alt="About RCII" className="rounded-3xl shadow-2xl shadow-indigo-200/40 w-full" />
              <div className="absolute -bottom-5 -left-5 glass-card rounded-2xl p-4 shadow-xl border border-white/80">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-blue-600 rounded-xl flex items-center justify-center text-xl">🏆</div>
                  <div>
                    <div className="font-black text-gray-900 text-lg">7+ Years</div>
                    <div className="text-xs text-gray-500">Research Excellence</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: '🎯', title: 'Our Mission', color: 'indigo', desc: 'To democratize access to world-class research consulting services and enable every researcher and institution to achieve their highest potential impact.' },
              { icon: '👁️', title: 'Our Vision', color: 'blue', desc: 'To be the global standard-bearer for research excellence, recognized by every researcher, institution, and publisher as the partner of first choice.' },
              { icon: '⭐', title: 'Our Values', color: 'cyan', desc: 'Excellence, Integrity, Innovation, Collaboration, and Impact — these values guide every decision we make for our clients and the global research community.' },
            ].map((item) => (
              <div key={item.title} className="p-8 rounded-2xl bg-gradient-to-br from-gray-50 to-white border border-gray-100 shadow-sm text-center">
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle eyebrow="Our Journey" title={<>From Startup to <span className="gradient-text">Global Leader</span></>} subtitle="A timeline of milestones that define our growth and commitment to research excellence." />
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-indigo-200 to-blue-200 hidden lg:block" />
            <div className="space-y-8">
              {milestones.map((m, i) => (
                <div key={m.year} className={`flex items-center gap-8 ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                  <div className={`flex-1 ${i % 2 === 0 ? 'lg:text-right' : 'lg:text-left'}`}>
                    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                      <div className="text-indigo-600 font-black text-lg mb-1">{m.year}</div>
                      <h3 className="font-bold text-gray-900 text-base mb-2">{m.title}</h3>
                      <p className="text-gray-500 text-sm">{m.desc}</p>
                    </div>
                  </div>
                  <div className="shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-blue-600 flex items-center justify-center text-white font-black text-sm shadow-lg z-10 hidden lg:flex">
                    {i + 1}
                  </div>
                  <div className="flex-1 hidden lg:block" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle eyebrow="Leadership Team" title={<>The Experts Behind <span className="gradient-text">Your Success</span></>} subtitle="Our leadership team brings together decades of experience in research, academia, publishing, and technology." />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member) => (
              <div key={member.name} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-lg hover:shadow-indigo-100/40 transition-all text-center hover:-translate-y-1">
                <div className={`w-20 h-20 rounded-full bg-gradient-to-br ${member.color} flex items-center justify-center text-white font-black text-xl mx-auto mb-4 shadow-lg`}>
                  {member.avatar}
                </div>
                <h3 className="font-bold text-gray-900 text-base">{member.name}</h3>
                <div className="text-indigo-600 text-sm font-semibold mb-1">{member.role}</div>
                <div className="text-gray-400 text-xs">{member.expertise}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
