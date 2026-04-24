export default function ProblemSection() {
  const problems = [
    {
      icon: "🦹",
      title: "Water Mafia Controls Everything",
      desc: "A cartel dictates who gets water, at what price, and of what quality. Colonies with a single water centre have no choice but to comply — paying any price for any quality.",
      color: "from-red-500 to-orange-500",
      bg: "bg-red-50",
      border: "border-red-200",
    },
    {
      icon: "🙈",
      title: "Zero Transparency",
      desc: "Government has no visibility into tanker operations. Everything operates in the shadows — unmonitored, unregulated, and unaccountable. No records, no checks.",
      color: "from-orange-500 to-yellow-500",
      bg: "bg-orange-50",
      border: "border-orange-200",
    },
    {
      icon: "🚰",
      title: "Treated Water = Wasted Resource",
      desc: "Bangalore is building 26 new Sewage Treatment Plants (STPs), but treated wastewater is seen as 'waste' instead of a valuable resource — leaving it underutilized.",
      color: "from-yellow-500 to-amber-500",
      bg: "bg-yellow-50",
      border: "border-yellow-200",
    },
    {
      icon: "💸",
      title: "Skyrocketing Water Costs",
      desc: "With monopolistic control, residents pay inflated prices for water of unknown quality. Poor localities bear the heaviest burden with the least alternatives.",
      color: "from-purple-500 to-pink-500",
      bg: "bg-purple-50",
      border: "border-purple-200",
    },
  ];

  return (
    <section id="problem" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-100 text-red-600 text-sm font-semibold mb-4">
            ⚠️ Problem Statement #3 — Management & All-Rounder Challenge
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4">
            The{" "}
            <span className="bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
              Water Crisis
            </span>{" "}
            in Bangalore
          </h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">
            Bangalore's tanker economy is a multi-crore, unregulated industry. Here's what's broken:
          </p>
        </div>

        {/* Problem Cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {problems.map((p) => (
            <div
              key={p.title}
              className={`${p.bg} ${p.border} border-2 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1`}
            >
              <div className="flex items-start gap-4">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${p.color} flex items-center justify-center text-2xl shadow-md flex-shrink-0`}>
                  {p.icon}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-800 mb-2">{p.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{p.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Problem Statement Box */}
        <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl p-8 md:p-10 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl" />
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-blue-500/20 flex items-center justify-center text-xl">📋</div>
              <div>
                <p className="text-blue-300 text-sm font-medium">Official Problem Statement</p>
                <h3 className="text-xl font-bold">"The Circular Tanker Economy"</h3>
              </div>
            </div>

            <div className="space-y-4 text-slate-300 text-sm leading-relaxed">
              <div className="flex gap-3">
                <span className="text-teal-400 font-bold shrink-0">TARGET:</span>
                <span>Management (MBA), Economics, Public Policy, and General Stream Students</span>
              </div>
              <div className="flex gap-3">
                <span className="text-teal-400 font-bold shrink-0">CONTEXT:</span>
                <span>
                  Bangalore's "Tanker Economy" is a multi-crore, largely unregulated industry. The city is
                  building 26 new STPs, but treated wastewater is seen as "waste" rather than a "resource,"
                  leaving it underutilized by industries and construction sites.
                </span>
              </div>
              <div className="flex gap-3">
                <span className="text-teal-400 font-bold shrink-0">PROBLEM:</span>
                <span>
                  Develop a <strong className="text-white">Business Model or Policy Framework</strong> to formalize
                  the water tank market and create a "secondary market" for treated wastewater. Incentivize
                  apartment complexes to sell their treated water to nearby construction sites or parks.
                </span>
              </div>
              <div className="flex gap-3">
                <span className="text-teal-400 font-bold shrink-0">EXPECTED:</span>
                <span>
                  A comprehensive business plan or policy whitepaper with a pricing strategy, logistical model
                  for "Treated Water Delivery," and a regulatory framework that ensures quality standards while
                  breaking the monopoly of the "water mafia."
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
