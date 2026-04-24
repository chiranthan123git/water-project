export default function HowItWorks() {
  const steps = [
    {
      step: "1",
      icon: "🏢",
      title: "Apartment Treats Wastewater",
      desc: "Large apartment complexes operate their mandatory STP. Daily wastewater is treated and tested on-site, generating certified, reusable water.",
      arrow: true,
    },
    {
      step: "2",
      icon: "📋",
      title: "Quality Certificate Issued",
      desc: "Government-accredited body tests the treated water and issues a digital Quality Certificate classifying it by grade (A/B/C) for different use cases.",
      arrow: true,
    },
    {
      step: "3",
      icon: "📲",
      title: "Listed on Digital Marketplace",
      desc: "The apartment lists available treated water volume, grade, and price on the AquaCircle platform. Buyers (construction sites, parks, industries) browse and book.",
      arrow: true,
    },
    {
      step: "4",
      icon: "🚛",
      title: "Licensed Tanker Dispatched",
      desc: "A government-licensed tanker with GPS tracking is dispatched to collect from the STP. Route, time, volume, and delivery point are recorded in real-time.",
      arrow: true,
    },
    {
      step: "5",
      icon: "🏗️",
      title: "Delivery to Buyer",
      desc: "Treated water is delivered to the construction site, park, data centre, or industrial buyer. Both parties digitally confirm receipt through the platform.",
      arrow: true,
    },
    {
      step: "6",
      icon: "💰",
      title: "Apartment Earns ₹3–5/Litre",
      desc: "Revenue is automatically credited to the apartment's account. Government collects a small transaction fee, creating a self-sustaining regulatory fund.",
      arrow: false,
    },
  ];

  return (
    <section id="how-it-works" className="py-24 bg-gradient-to-br from-slate-900 to-blue-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/20 text-blue-300 text-sm font-semibold mb-4 border border-blue-500/30">
            ⚙️ The Process
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            How{" "}
            <span className="bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">
              AquaCircle
            </span>{" "}
            Works
          </h2>
          <p className="text-blue-200/70 text-lg max-w-2xl mx-auto">
            A seamless end-to-end flow from wastewater generation to certified delivery — all tracked, regulated, and transparent.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {steps.map((step) => (
            <div
              key={step.step}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-teal-400/30 transition-all duration-300 hover:-translate-y-1 group relative"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-teal-400 to-blue-500 flex items-center justify-center text-white font-black text-sm shadow-lg">
                    {step.step}
                  </div>
                </div>
                <div>
                  <div className="text-2xl mb-2">{step.icon}</div>
                  <h3 className="text-white font-bold text-base mb-2">{step.title}</h3>
                  <p className="text-blue-200/60 text-sm leading-relaxed">{step.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Platform Features */}
        <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
          <h3 className="text-xl font-bold text-white text-center mb-8">
            🖥️ The AquaCircle Platform — All-in-One Dashboard
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: "🗺️",
                title: "Live Tanker Map",
                desc: "Real-time GPS map showing all active licensed tankers, their routes, capacity, and current delivery status across Bangalore.",
              },
              {
                icon: "📊",
                title: "Government Analytics Portal",
                desc: "Authorities get full visibility — total water traded, price trends, licensed vs. unlicensed activity, and regional demand heatmaps.",
              },
              {
                icon: "💧",
                title: "Apartment STP Dashboard",
                desc: "Apartment managers track daily wastewater output, treatment status, water grade, and revenue earned from treated water sales.",
              },
            ].map((feat) => (
              <div key={feat.title} className="text-center">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-teal-500 to-blue-600 flex items-center justify-center text-2xl mx-auto mb-4 shadow-lg">
                  {feat.icon}
                </div>
                <h4 className="text-white font-bold mb-2">{feat.title}</h4>
                <p className="text-blue-200/60 text-sm leading-relaxed">{feat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
