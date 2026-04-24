export default function SolutionSection() {
  const pillars = [
    {
      icon: "🏢",
      number: "01",
      title: "Mandatory STP in Every Large Apartment",
      desc: "Every large apartment complex must have at least one Sewage Treatment Plant (STP) to treat wastewater produced on-site, turning waste into a tradeable resource.",
      highlight: "Decentralized water treatment at scale",
      color: "blue",
    },
    {
      icon: "📜",
      number: "02",
      title: "Licensed Tankers Only",
      desc: "Only government-licensed tankers are permitted to transport water. Each license holder must comply with quality standards, GPS tracking mandates, and government data reporting.",
      highlight: "End of unregulated water transport",
      color: "teal",
    },
    {
      icon: "📡",
      number: "03",
      title: "Real-Time Government Data Dashboard",
      desc: "All tanker movements, water sources, delivery points, and prices are recorded in real-time by the government. Full transparency — no more shadow operations.",
      highlight: "Complete supply chain visibility",
      color: "cyan",
    },
    {
      icon: "📍",
      number: "04",
      title: "GPS Tracking on All Tankers",
      desc: "Every licensed tanker is fitted with mandatory GPS. Authorities and consumers can track tanker routes, ensure delivery accuracy, and prevent black-market diversion.",
      highlight: "Live tracking for accountability",
      color: "green",
    },
    {
      icon: "🏅",
      number: "05",
      title: "Quality Certification for Treated Water",
      desc: "Treated wastewater from STPs receives a government-issued quality certificate, classifying it for use in horticulture, industrial processes, data centres, or toilet flushing.",
      highlight: "Standardized water quality grading",
      color: "purple",
    },
    {
      icon: "💰",
      number: "06",
      title: "Revenue for Apartment Complexes",
      desc: "Apartments that sell treated water to construction sites, parks, or industries earn ₹3–5 per litre revenue. This incentivizes participation and creates a self-sustaining circular economy.",
      highlight: "₹3–5 per litre apartment revenue",
      color: "orange",
    },
  ];

  const colorMap: Record<string, { bg: string; border: string; badge: string; icon: string; text: string }> = {
    blue: {
      bg: "bg-blue-50",
      border: "border-blue-200",
      badge: "bg-blue-100 text-blue-700",
      icon: "bg-gradient-to-br from-blue-400 to-blue-600",
      text: "text-blue-700",
    },
    teal: {
      bg: "bg-teal-50",
      border: "border-teal-200",
      badge: "bg-teal-100 text-teal-700",
      icon: "bg-gradient-to-br from-teal-400 to-teal-600",
      text: "text-teal-700",
    },
    cyan: {
      bg: "bg-cyan-50",
      border: "border-cyan-200",
      badge: "bg-cyan-100 text-cyan-700",
      icon: "bg-gradient-to-br from-cyan-400 to-cyan-600",
      text: "text-cyan-700",
    },
    green: {
      bg: "bg-green-50",
      border: "border-green-200",
      badge: "bg-green-100 text-green-700",
      icon: "bg-gradient-to-br from-green-400 to-green-600",
      text: "text-green-700",
    },
    purple: {
      bg: "bg-purple-50",
      border: "border-purple-200",
      badge: "bg-purple-100 text-purple-700",
      icon: "bg-gradient-to-br from-purple-400 to-purple-600",
      text: "text-purple-700",
    },
    orange: {
      bg: "bg-orange-50",
      border: "border-orange-200",
      badge: "bg-orange-100 text-orange-700",
      icon: "bg-gradient-to-br from-orange-400 to-orange-600",
      text: "text-orange-700",
    },
  };

  return (
    <section id="solution" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-teal-100 text-teal-700 text-sm font-semibold mb-4">
            ✅ Our Proposed Solution
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4">
            6 Pillars of the{" "}
            <span className="bg-gradient-to-r from-teal-500 to-blue-500 bg-clip-text text-transparent">
              Circular Tanker Economy
            </span>
          </h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">
            A comprehensive policy framework and business model that eliminates the water mafia, ensures quality,
            and creates a thriving secondary market for treated water.
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pillars.map((pillar) => {
            const c = colorMap[pillar.color];
            return (
              <div
                key={pillar.number}
                className={`${c.bg} ${c.border} border-2 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-12 h-12 rounded-xl ${c.icon} flex items-center justify-center text-2xl shadow-md`}>
                    {pillar.icon}
                  </div>
                  <span className={`text-4xl font-black opacity-20 ${c.text}`}>{pillar.number}</span>
                </div>
                <h3 className="text-base font-bold text-slate-800 mb-2">{pillar.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">{pillar.desc}</p>
                <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full ${c.badge} text-xs font-semibold`}>
                  ✓ {pillar.highlight}
                </div>
              </div>
            );
          })}
        </div>

        {/* Uses of Treated Water */}
        <div className="mt-16 bg-gradient-to-br from-teal-600 to-blue-700 rounded-3xl p-8 md:p-10 text-white">
          <h3 className="text-2xl font-bold mb-2 text-center">♻️ What Can Treated Water Be Used For?</h3>
          <p className="text-teal-100 text-center text-sm mb-8">
            Quality-certified treated wastewater has massive utility across multiple sectors
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: "🌳", label: "Horticulture", desc: "Parks, gardens, urban forests" },
              { icon: "🏗️", label: "Construction", desc: "Concrete mixing, dust suppression" },
              { icon: "🖥️", label: "Data Centres", desc: "Cooling towers, heat exchange" },
              { icon: "🚽", label: "Toilet Flushing", desc: "Non-potable building uses" },
            ].map((use) => (
              <div key={use.label} className="bg-white/10 border border-white/20 rounded-xl p-4 text-center hover:bg-white/20 transition-all">
                <div className="text-3xl mb-2">{use.icon}</div>
                <div className="font-bold text-sm">{use.label}</div>
                <div className="text-teal-200 text-xs mt-1">{use.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
