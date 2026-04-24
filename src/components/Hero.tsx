export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-blue-950 to-teal-900">
      {/* Animated background circles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-1/3 -right-32 w-80 h-80 bg-teal-400/20 rounded-full blur-3xl animate-pulse delay-700" />
        <div className="absolute bottom-0 left-1/3 w-72 h-72 bg-cyan-500/15 rounded-full blur-3xl animate-pulse delay-1000" />

        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `linear-gradient(rgba(99,179,237,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(99,179,237,0.3) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-sm font-medium mb-8 backdrop-blur-sm">
          <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
          Green Innovators Club — Ideathon 2025
        </div>

        {/* Headline */}
        <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-6">
          The{" "}
          <span className="bg-gradient-to-r from-teal-300 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Circular
          </span>
          <br />
          Tanker Economy
        </h1>

        <p className="text-lg md:text-xl text-blue-200/80 max-w-3xl mx-auto mb-4 leading-relaxed">
          Bangalore's water tanker market is a{" "}
          <span className="text-red-400 font-semibold">multi-crore, unregulated industry</span> dominated
          by a "Water Mafia." We're building a transparent, circular economy that slashes water costs by{" "}
          <span className="text-teal-300 font-bold">40–50%</span> and turns wastewater into revenue.
        </p>

        <p className="text-base text-blue-300/60 mb-10 font-medium">
          🏙️ Bengaluru, Karnataka — Where treated water meets opportunity
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#solution"
            className="px-8 py-4 rounded-xl bg-gradient-to-r from-teal-400 to-blue-500 text-white font-bold text-lg shadow-xl shadow-blue-900/40 hover:scale-105 hover:shadow-2xl transition-all duration-300"
          >
            🌊 Explore Our Solution
          </a>
          <a
            href="#problem"
            className="px-8 py-4 rounded-xl bg-white/10 border border-white/20 text-white font-bold text-lg backdrop-blur-sm hover:bg-white/20 hover:scale-105 transition-all duration-300"
          >
            📋 View Problem Statement
          </a>
        </div>

        {/* Stats row */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {[
            { value: "26", label: "New STPs Being Built", suffix: "" },
            { value: "40-50", label: "Cost Reduction", suffix: "%" },
            { value: "₹3-5", label: "Revenue per Litre", suffix: "" },
            { value: "0", label: "Water Mafia Control", suffix: "" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all"
            >
              <div className="text-3xl font-extrabold text-teal-300">
                {stat.value}
                <span className="text-xl">{stat.suffix}</span>
              </div>
              <div className="text-xs text-blue-200/70 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Scroll indicator */}
        <div className="mt-16 flex justify-center">
          <a href="#problem" className="animate-bounce text-blue-300/50 hover:text-blue-300 transition-colors">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
