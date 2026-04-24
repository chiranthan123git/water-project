export default function ImpactSection() {
  const impacts = [
    {
      icon: "💸",
      metric: "40–50%",
      label: "Water Cost Reduction",
      desc: "Transparent pricing and regulated supply breaks monopoly pricing, making water affordable for all residents.",
      color: "from-green-400 to-emerald-500",
    },
    {
      icon: "🦹",
      metric: "0",
      label: "Water Mafia Control",
      desc: "Licensing, GPS tracking, and real-time government oversight completely eliminates unregulated water cartels.",
      color: "from-red-400 to-orange-500",
    },
    {
      icon: "💧",
      metric: "₹3–5",
      label: "Revenue per Litre for Apartments",
      desc: "Apartment complexes turn wastewater from a cost into a revenue stream, incentivizing sustainable STP maintenance.",
      color: "from-blue-400 to-cyan-500",
    },
    {
      icon: "♻️",
      metric: "100%",
      label: "Treated Water Reutilized",
      desc: "Every litre of STP-treated water is directed to horticulture, construction, data centres, or flushing — zero wastage.",
      color: "from-teal-400 to-green-500",
    },
  ];

  const beforeAfter = [
    {
      before: "Unregulated, unmonitored tankers",
      after: "Licensed tankers with GPS & government tracking",
    },
    {
      before: "Water mafia sets arbitrary prices",
      after: "Transparent government-regulated pricing",
    },
    {
      before: "No quality check on water supply",
      after: "Certified water grades for every delivery",
    },
    {
      before: "Treated wastewater dumped/wasted",
      after: "Sold to industries at ₹3–5/litre revenue",
    },
    {
      before: "Government blind to supply chain",
      after: "Real-time dashboard for full visibility",
    },
    {
      before: "Residents pay monopoly prices",
      after: "Water costs reduced by 40–50%",
    },
  ];

  return (
    <section id="impact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-green-100 text-green-700 text-sm font-semibold mb-4">
            📈 Projected Impact
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4">
            A Transformation That{" "}
            <span className="bg-gradient-to-r from-green-500 to-teal-500 bg-clip-text text-transparent">
              Benefits Everyone
            </span>
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">
            From residents to industry to government — the Circular Tanker Economy creates value across the entire ecosystem.
          </p>
        </div>

        {/* Impact Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {impacts.map((item) => (
            <div
              key={item.label}
              className={`bg-gradient-to-br ${item.color} rounded-2xl p-6 text-white shadow-xl hover:scale-105 transition-all duration-300`}
            >
              <div className="text-4xl mb-3">{item.icon}</div>
              <div className="text-3xl font-extrabold mb-1">{item.metric}</div>
              <div className="font-bold text-sm mb-3 opacity-90">{item.label}</div>
              <div className="text-xs opacity-80 leading-relaxed">{item.desc}</div>
            </div>
          ))}
        </div>

        {/* Before vs After */}
        <div className="rounded-3xl border border-slate-200 overflow-hidden shadow-lg">
          <div className="grid grid-cols-2">
            <div className="bg-red-600 text-white p-6 text-center font-bold text-lg">
              ❌ Before AquaCircle
            </div>
            <div className="bg-green-600 text-white p-6 text-center font-bold text-lg">
              ✅ After AquaCircle
            </div>
          </div>
          {beforeAfter.map((item, i) => (
            <div
              key={i}
              className={`grid grid-cols-2 ${i % 2 === 0 ? "bg-slate-50" : "bg-white"}`}
            >
              <div className="p-5 border-r border-slate-200 flex items-center gap-3">
                <span className="w-6 h-6 rounded-full bg-red-100 text-red-500 flex items-center justify-center text-xs font-bold flex-shrink-0">✗</span>
                <span className="text-slate-700 text-sm">{item.before}</span>
              </div>
              <div className="p-5 flex items-center gap-3">
                <span className="w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center text-xs font-bold flex-shrink-0">✓</span>
                <span className="text-slate-700 text-sm">{item.after}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Stakeholder Benefits */}
        <div className="mt-16 grid md:grid-cols-3 gap-6">
          {[
            {
              icon: "🏘️",
              title: "For Residents",
              points: [
                "Water costs drop by 40–50%",
                "Guaranteed quality-certified supply",
                "No more monopoly exploitation",
                "Transparent pricing portal access",
              ],
              color: "bg-blue-50 border-blue-200",
              accent: "text-blue-700",
            },
            {
              icon: "🏗️",
              title: "For Industries & Buyers",
              points: [
                "Reliable, certified treated water supply",
                "Lower cost vs. freshwater tankers",
                "Sustainable sourcing credentials",
                "Digital delivery tracking",
              ],
              color: "bg-teal-50 border-teal-200",
              accent: "text-teal-700",
            },
            {
              icon: "🏛️",
              title: "For Government",
              points: [
                "Full tanker supply chain visibility",
                "Transaction fee revenue stream",
                "Achieves STP utilization targets",
                "Eliminates unregulated water mafia",
              ],
              color: "bg-purple-50 border-purple-200",
              accent: "text-purple-700",
            },
          ].map((s) => (
            <div key={s.title} className={`${s.color} border-2 rounded-2xl p-6`}>
              <div className="text-3xl mb-3">{s.icon}</div>
              <h3 className={`font-bold text-lg ${s.accent} mb-4`}>{s.title}</h3>
              <ul className="space-y-2">
                {s.points.map((p) => (
                  <li key={p} className="flex items-start gap-2 text-sm text-slate-600">
                    <span className="text-green-500 mt-0.5">✓</span>
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
