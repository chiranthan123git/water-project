export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white py-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-500 to-teal-400 flex items-center justify-center shadow-md">
                <span className="text-white text-lg">💧</span>
              </div>
              <span className="font-bold text-xl tracking-tight">
                Aqua<span className="text-teal-400">Circle</span>
              </span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              A circular economy solution to Bangalore's water tanker crisis. Transparent. Regulated. Sustainable.
            </p>
            <div className="flex gap-3 mt-4">
              <span className="px-3 py-1 rounded-full bg-white/5 text-xs text-slate-400">🏙️ Bangalore</span>
              <span className="px-3 py-1 rounded-full bg-white/5 text-xs text-slate-400">♻️ Circular Economy</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-sm text-teal-400 mb-4 uppercase tracking-wide">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { label: "Problem Statement", href: "#problem" },
                { label: "Our Solution", href: "#solution" },
                { label: "How It Works", href: "#how-it-works" },
                { label: "Impact & Benefits", href: "#impact" },
                { label: "Policy Framework", href: "#policy" },
                { label: "Get Involved", href: "#join" },
              ].map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-slate-400 text-sm hover:text-teal-400 transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Key Facts */}
          <div>
            <h4 className="font-bold text-sm text-teal-400 mb-4 uppercase tracking-wide">Key Numbers</h4>
            <div className="space-y-3">
              {[
                { label: "STPs being built in Bangalore", value: "26" },
                { label: "Water cost reduction projected", value: "40–50%" },
                { label: "Apartment revenue per litre", value: "₹3–5" },
                { label: "Treated water reuse target", value: "100%" },
              ].map((stat) => (
                <div key={stat.label} className="flex justify-between items-center">
                  <span className="text-slate-500 text-xs">{stat.label}</span>
                  <span className="text-teal-400 font-bold text-sm">{stat.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-600 text-xs">
            © 2025 AquaCircle · Green Innovators Club Ideathon Submission · BTRIB Institute of Technology
          </p>
          <p className="text-slate-600 text-xs">
            Built for Problem Statement #3: The Management & All-Rounder Challenge
          </p>
        </div>
      </div>
    </footer>
  );
}
