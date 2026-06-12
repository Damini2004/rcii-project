import React from "react";
import { Link } from "react-router-dom";
import heroBg from "../assets/heroBG.png";

export default function Home() {
  return (
    <div className="bg-white text-slate-900 mt-16">
      {/* HERO */}
      <section
  className="relative min-h-screen bg-cover bg-center bg-no-repeat flex items-center"
  style={{
    backgroundImage: `url(${heroBg})`,
  }}
>
  {/* Dark Overlay */}
  {/* <div className="absolute inset-0 bg-black/20"></div> */}

  {/* Content */}
  <div className="w-[490px] mx-16 mt-16">
    <div className="">
      <h1 className="text-[32px] md:text-[42px] lg:text-[52px] text-white font-bold leading-[1.1]">
        Research.
        <br />
        <span className="text-cyan-400">Innovation.</span>
        <br />
        Impact.
        <span className="text-secondary"> Delivered.</span>
      </h1>

      <p className="mt-6 font-medium text-[17px] text-gray-200 leading-relaxed max-w-xl">
        Ethical. Transparent. Technology-driven solutions empowering
        researchers, strengthening institutions, enabling publishers,
        and protecting innovations.
      </p>

      <div className="flex flex-wrap gap-5 mt-10">
        <button className="px-8 py-4 rounded-xl text-white bg-gradient-to-r from-indigo-600 to-violet-600 font-semibold shadow-xl hover:scale-105 transition">
          Explore Our Services →
        </button>

        <button className="flex items-center gap-3 text-white font-medium">
          <div className="w-12 h-12 rounded-full border border-white flex items-center justify-center">
            ▶
          </div>
          Watch Our Story
        </button>
      </div>

      {/* Bottom Features */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-14">
        {[
          {
            title: "Ethical",
            sub: "By Commitment",
          },
          {
            title: "Transparent",
            sub: "By Process",
          },
          {
            title: "Reliable",
            sub: "By Expertise",
          },
          {
            title: "Impactful",
            sub: "By Purpose",
          },
        ].map((item) => (
          <div key={item.title}>
            <div className="text-cyan-400 text-lg mb-2">◉</div>

            <h4 className="font-semibold">
              {item.title}
            </h4>

            <p className="text-sm text-gray-400">
              {item.sub}
            </p>
          </div>
        ))}
      </div>
    </div>
  </div>
</section>

      {/* SOLUTIONS */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-center text-indigo-600 font-black text-xs uppercase">
            Our Core Solutions
          </p>
          <h2 className="text-center text-3xl font-black mt-3">
            Comprehensive Solutions. Measurable Impact.
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {[
              ["👤", "For Researchers", "Empowering you at every step of your research journey."],
              ["🏛️", "For Institutions", "Strengthening research excellence and institutional performance."],
              ["📖", "For Publishers", "Technology and services for modern publishing."],
              ["💡", "Innovation & IP", "From ideas to protection and commercialization."],
            ].map((card, i) => (
              <div
                key={card[1]}
                className="rounded-2xl border border-indigo-100 bg-white p-7 shadow-sm hover:shadow-xl transition"
              >
                <div className="text-4xl">{card[0]}</div>
                <h3 className="mt-5 font-black text-indigo-700">{card[1]}</h3>
                <p className="mt-4 text-sm text-slate-600 leading-relaxed">
                  {card[2]}
                </p>
                <ul className="mt-6 space-y-3 text-sm">
                  {[
                    "Author & Publication Services",
                    "Research Profiling & Visibility",
                    "Patent Drafting & Filing Support",
                    "Career Guidance",
                  ].map((x) => (
                    <li key={x}>✔ {x}</li>
                  ))}
                </ul>
                <Link className="inline-block mt-7 text-indigo-600 font-bold text-sm">
                  Explore Services →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TECHNOLOGY */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="rounded-3xl bg-[#020617] text-white p-10 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-cyan-400 font-bold text-xs uppercase">
              Technology & Platforms
            </p>
            <h2 className="text-4xl font-black mt-4">
              Smart Solutions Built for Research Excellence
            </h2>

            <div className="grid grid-cols-5 gap-5 mt-10 text-center text-xs">
              {["RAMS", "Journal Hosting", "DOI Solutions", "Conference System", "Research Profiles"].map(
                (x) => (
                  <div key={x}>
                    <div className="text-3xl text-cyan-400">◎</div>
                    <b>{x}</b>
                  </div>
                )
              )}
            </div>

            <Link className="inline-block mt-8 bg-cyan-500 px-6 py-3 rounded-lg font-bold text-sm">
              Explore Our Technology →
            </Link>
          </div>

          <div className="bg-white rounded-2xl p-6 text-slate-900">
            <h3 className="font-black">Welcome back, Admin</h3>
            <div className="grid grid-cols-4 gap-4 mt-5">
              {["12,540", "45,669", "28", "128"].map((x) => (
                <div key={x} className="bg-indigo-50 rounded-xl p-4">
                  <b>{x}</b>
                  <p className="text-xs text-slate-500">Total</p>
                </div>
              ))}
            </div>
            <div className="h-48 bg-indigo-50 rounded-xl mt-5" />
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="max-w-7xl mx-auto px-6 py-10">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-5 rounded-2xl border bg-white shadow-sm p-7 text-center">
          {[
            ["10K+", "Researchers Empowered"],
            ["500+", "Institutions Served"],
            ["300+", "Journals Managed"],
            ["2K+", "Patents Assisted"],
            ["25+", "Countries Worldwide"],
          ].map((s) => (
            <div key={s[0]}>
              <h3 className="text-3xl font-black text-indigo-600">{s[0]}</h3>
              <p className="text-sm font-semibold text-slate-600">{s[1]}</p>
            </div>
          ))}
        </div>
      </section>

      {/* HOW WE WORK */}
      <section className="py-16">
        <p className="text-center text-indigo-600 font-black text-xs uppercase">
          How We Work
        </p>
        <h2 className="text-center text-3xl font-black mt-3">
          From Research to Real-World Impact
        </h2>

        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-5 gap-6 mt-12 text-center">
          {["Discover", "Develop", "Publish", "Protect", "Measure"].map((x) => (
            <div key={x}>
              <div className="mx-auto w-16 h-16 rounded-full bg-gradient-to-r from-indigo-600 to-cyan-500 text-white flex items-center justify-center text-2xl">
                ◉
              </div>
              <h3 className="font-black mt-4 text-indigo-700">{x}</h3>
              <p className="text-xs text-slate-500 mt-2">
                Track performance and maximize impact.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-[#020617] text-white py-20">
        <p className="text-center text-cyan-400 font-black text-xs uppercase">
          Trusted by the Research Community
        </p>
        <h2 className="text-center text-3xl font-black mt-3">
          Voices That Inspire
        </h2>

        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8 mt-12">
          {[1, 2, 3].map((i) => (
            <div key={i} className="bg-white text-slate-900 rounded-2xl p-7">
              <div className="text-indigo-600 text-4xl">“</div>
              <p className="text-sm">
                RCII's publication support and guidance helped me publish in
                top-tier journals. Their professionalism is unmatched.
              </p>
              <h4 className="font-black mt-6">Dr. Neha Sharma</h4>
              <p className="text-xs text-slate-500">Researcher, IIT Delhi</p>
            </div>
          ))}
        </div>
      </section>

      {/* BLOG */}
      <section className="py-20 bg-[#F8FAFC]">
        <p className="text-center text-indigo-600 font-black text-xs uppercase">
          Resources & Insights
        </p>
        <h2 className="text-center text-3xl font-black mt-3">
          Stay Informed. Stay Ahead.
        </h2>

        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-5 gap-6 mt-12">
          {["Blog", "Guide", "Webinar", "News"].map((x) => (
            <div key={x} className="bg-white rounded-2xl overflow-hidden shadow-sm">
              <div className="h-36 bg-gradient-to-r from-indigo-200 to-cyan-200" />
              <div className="p-5">
                <span className="bg-indigo-600 text-white text-xs px-3 py-1 rounded-full">
                  {x}
                </span>
                <h3 className="font-black mt-4 text-sm">
                  How to Choose the Right Journal for Your Research
                </h3>
                <Link className="text-indigo-600 font-bold text-sm mt-4 inline-block">
                  Read More →
                </Link>
              </div>
            </div>
          ))}

          <div className="bg-white rounded-2xl p-7 shadow-sm">
            <div className="text-4xl">✉️</div>
            <h3 className="font-black mt-5">Subscribe to our Newsletter</h3>
            <p className="text-sm text-slate-500 mt-3">
              Get the latest updates, resources, and events.
            </p>
            <input
              className="w-full border rounded-lg px-4 py-3 mt-5 text-sm"
              placeholder="Enter your email"
            />
            <button className="w-full mt-4 bg-indigo-600 text-white rounded-lg py-3 font-bold">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#020617] text-white py-14">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-6 gap-10">
          <div className="md:col-span-2">
            <div className="text-4xl font-black text-indigo-500">RC</div>
            <p className="text-sm text-gray-400 mt-4 max-w-xs">
              Empowering researchers, institutions and publishers with ethical
              solutions and advanced technology.
            </p>
          </div>

          {["For Researchers", "For Institutions", "For Publishers", "Technology"].map(
            (x) => (
              <div key={x}>
                <h4 className="font-black mb-4">{x}</h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>Author Services</li>
                  <li>Publication Support</li>
                  <li>Research Profiles</li>
                  <li>Career Support</li>
                </ul>
              </div>
            )
          )}
        </div>

        <div className="max-w-7xl mx-auto px-6 mt-10 pt-6 border-t border-white/10 text-sm text-gray-400">
          © 2024 Researcher Connect Innovation and Impact Private Limited. All
          Rights Reserved.
        </div>
      </footer>
    </div>
  );
}