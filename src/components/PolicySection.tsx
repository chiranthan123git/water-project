export default function PolicySection() {
  const framework = [
    {
      phase: "Phase 1",
      title: "Regulation & Licensing",
      duration: "0–6 Months",
      color: "blue",
      items: [
        "Register all existing water tankers under a government licensing body",
        "Mandate GPS installation on every licensed tanker",
        "Launch the AquaCircle real-time tracking portal",
        "Set maximum price caps per litre by water grade",
        "Penalize unlicensed tanker operations with heavy fines",
      ],
    },
    {
      phase: "Phase 2",
      title: "STP Mandate & Certification",
      duration: "6–18 Months",
      color: "teal",
      items: [
        "Require all apartment complexes >100 units to install functional STPs",
        "Establish a government-accredited water quality testing body",
        "Issue digital Quality Certificates via the AquaCircle platform",
        "Define 3 water grades: Grade A (horticulture), Grade B (industrial), Grade C (flushing)",
        "Provide subsidies/tax breaks to apartments that install STPs",
      ],
    },
    {
      phase: "Phase 3",
      title: "Secondary Market Launch",
      duration: "18–36 Months",
      color: "green",
      items: [
        "Launch treated water marketplace connecting sellers (apartments) and buyers (industries)",
        "Apartments earn ₹3–5 per litre for certified treated water",
        "Construction companies and data centres registered as priority buyers",
        "Government earns 5–8% transaction fee funding the regulatory body",
        "Parks and BBMP infrastructure supplied treated water at subsidized rates",
      ],
    },
    {
      phase: "Phase 4",
      title: "Scale & Optimize",
      duration: "36+ Months",
      color: "purple",
      items: [
        "Expand model to other water-stressed Indian cities (Chennai, Hyderabad)",
        "Introduce dynamic pricing based on real-time supply and demand",
        "Partner with industries for long-term treated water supply contracts",
        "Publish annual Circular Water Economy Report for public accountability",
        "Achieve 100% STP coverage and zero water mafia operations",
      ],
    },
  ];

  const colorMap: Record<string, { badge: string; border: string; dot: string; header: string }> = {
    blue: {
      badge: "bg-blue-100 text-blue-700",
      border: "border-l-blue-500",
      dot: "bg-blue-500",
      header: "text-blue-700",
    },
    teal: {
      badge: "bg-teal-100 text-teal-700",
      border: "border-l-teal-500",
      dot: "bg-teal-500",
      header: "text-teal-700",
    },
    green: {
      badge: "bg-green-100 text-green-700",
      border: "border-l-green-500",
      dot: "bg-green-500",
      header: "text-green-700",
    },
    purple: {
      badge: "bg-purple-100 text-purple-700",
      border: "border-l-purple-500",
      dot: "bg-purple-500",
      header: "text-purple-700",
    },
  };

  return (
    <section id="policy" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-100 text-purple-700 text-sm font-semibold mb-4">
            📑 Policy Roadmap
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4">
            Implementation{" "}
            <span className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
              Framework
            </span>
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">
            A phased policy rollout that transitions Bangalore from an unregulated tanker economy to a
            fully circular, transparent water market over 36 months.
          </p>
        </div>

        {/* Phase Cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {framework.map((phase) => {
            const c = colorMap[phase.color];
            return (
              <div
                key={phase.phase}
                className={`bg-white border-l-4 ${c.border} rounded-2xl shadow-sm hover:shadow-lg transition-all p-6`}
              >
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <span className={`text-xs font-bold px-2 py-1 rounded-full ${c.badge}`}>{phase.phase}</span>
                    <h3 className={`text-lg font-extrabold mt-2 ${c.header}`}>{phase.title}</h3>
                  </div>
                  <div className="text-right">
                    <span className="text-xs text-slate-400 font-medium">Timeline</span>
                    <div className="text-sm font-bold text-slate-700">{phase.duration}</div>
                  </div>
                </div>
                <ul className="space-y-2.5">
                  {phase.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-slate-600">
                      <span className={`w-1.5 h-1.5 rounded-full ${c.dot} mt-2 flex-shrink-0`} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* Pricing Model */}
        <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl p-8 md:p-10 text-white">
          <h3 className="text-2xl font-bold text-center mb-2">💱 Pricing Strategy</h3>
          <p className="text-slate-400 text-center text-sm mb-8">
            Transparent, grade-based pricing that eliminates arbitrary mafia pricing
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left py-3 px-4 text-teal-400">Water Grade</th>
                  <th className="text-left py-3 px-4 text-teal-400">Quality Standard</th>
                  <th className="text-left py-3 px-4 text-teal-400">Use Cases</th>
                  <th className="text-left py-3 px-4 text-teal-400">Price per Litre</th>
                  <th className="text-left py-3 px-4 text-teal-400">Apartment Revenue</th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    grade: "Grade A",
                    quality: "Tertiary Treated",
                    uses: "Horticulture, Landscaping",
                    price: "₹4–5",
                    rev: "₹3.5–4.5/L",
                    highlight: true,
                  },
                  {
                    grade: "Grade B",
                    quality: "Secondary Treated",
                    uses: "Construction, Industrial, Data Centres",
                    price: "₹3–4",
                    rev: "₹2.5–3.5/L",
                    highlight: false,
                  },
                  {
                    grade: "Grade C",
                    quality: "Basic Treated",
                    uses: "Toilet Flushing, Dust Suppression",
                    price: "₹2–3",
                    rev: "₹1.5–2.5/L",
                    highlight: false,
                  },
                ].map((row) => (
                  <tr
                    key={row.grade}
                    className={`border-b border-white/5 ${row.highlight ? "bg-teal-500/10" : "hover:bg-white/5"} transition-colors`}
                  >
                    <td className="py-4 px-4 font-bold text-white">{row.grade}</td>
                    <td className="py-4 px-4 text-slate-300">{row.quality}</td>
                    <td className="py-4 px-4 text-slate-300">{row.uses}</td>
                    <td className="py-4 px-4 text-teal-300 font-bold">{row.price}</td>
                    <td className="py-4 px-4 text-green-400 font-bold">{row.rev}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-slate-500 text-xs text-center mt-4">
            * Government earns 5–8% transaction fee. Prices set by regulatory authority based on treatment cost benchmarks.
          </p>
        </div>
      </div>
    </section>
  );
}
