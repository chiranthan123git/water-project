import { useState } from "react";

export default function JoinSection() {
  const [form, setForm] = useState({ name: "", role: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const roles = [
    { icon: "🏛️", title: "Policy Maker", desc: "Help draft regulatory frameworks and government mandates for tanker licensing and STP compliance." },
    { icon: "💼", title: "Business/MBA Student", desc: "Develop the business model, pricing strategy, and go-to-market plan for the treated water marketplace." },
    { icon: "🏗️", title: "Industry Buyer", desc: "Register your construction site, data centre, or facility as a certified treated water buyer." },
    { icon: "🏢", title: "Apartment Association", desc: "Partner to set up your STP, get quality certification, and start earning revenue from treated water." },
  ];

  return (
    <section id="join" className="py-24 bg-gradient-to-br from-blue-950 via-slate-900 to-teal-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-teal-500/20 text-teal-300 text-sm font-semibold mb-4 border border-teal-500/30">
            🤝 Get Involved
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            Join the{" "}
            <span className="bg-gradient-to-r from-teal-400 to-blue-400 bg-clip-text text-transparent">
              Water Revolution
            </span>
          </h2>
          <p className="text-blue-200/70 text-lg max-w-2xl mx-auto">
            Whether you're a student, policymaker, apartment association, or industry buyer — there's a role
            for you in building Bangalore's circular water economy.
          </p>
        </div>

        {/* Role Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
          {roles.map((role) => (
            <div
              key={role.title}
              className="bg-white/5 border border-white/10 rounded-2xl p-5 hover:bg-white/10 hover:border-teal-400/30 transition-all duration-300 hover:-translate-y-1 cursor-pointer group"
            >
              <div className="text-3xl mb-3">{role.icon}</div>
              <h3 className="text-white font-bold mb-2 group-hover:text-teal-300 transition-colors">{role.title}</h3>
              <p className="text-blue-200/60 text-xs leading-relaxed">{role.desc}</p>
            </div>
          ))}
        </div>

        {/* Contact Form */}
        <div className="max-w-2xl mx-auto">
          <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-sm">
            <h3 className="text-xl font-bold text-white text-center mb-6">
              📬 Express Your Interest
            </h3>

            {submitted ? (
              <div className="text-center py-12">
                <div className="text-6xl mb-4">🎉</div>
                <h4 className="text-2xl font-bold text-white mb-2">Thank You!</h4>
                <p className="text-blue-200/70">
                  We've received your interest. The AquaCircle team will reach out to you shortly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-6 px-6 py-2 rounded-lg bg-teal-500/20 text-teal-300 text-sm hover:bg-teal-500/30 transition-colors"
                >
                  Submit Another Response
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-blue-300 text-xs font-semibold mb-1.5">Full Name *</label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="Your name"
                      className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-2.5 text-white text-sm placeholder-white/30 focus:outline-none focus:border-teal-400 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-blue-300 text-xs font-semibold mb-1.5">Your Role *</label>
                    <select
                      required
                      value={form.role}
                      onChange={(e) => setForm({ ...form, role: e.target.value })}
                      className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-2.5 text-white text-sm focus:outline-none focus:border-teal-400 transition-colors"
                    >
                      <option value="" className="bg-slate-800">Select role</option>
                      <option value="policy" className="bg-slate-800">Policy Maker</option>
                      <option value="business" className="bg-slate-800">Business/MBA Student</option>
                      <option value="buyer" className="bg-slate-800">Industry Buyer</option>
                      <option value="apartment" className="bg-slate-800">Apartment Association</option>
                      <option value="ngo" className="bg-slate-800">NGO / Researcher</option>
                      <option value="other" className="bg-slate-800">Other</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-blue-300 text-xs font-semibold mb-1.5">Email Address *</label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="you@example.com"
                    className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-2.5 text-white text-sm placeholder-white/30 focus:outline-none focus:border-teal-400 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-blue-300 text-xs font-semibold mb-1.5">How Can You Contribute?</label>
                  <textarea
                    rows={3}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Tell us how you'd like to be involved..."
                    className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-2.5 text-white text-sm placeholder-white/30 focus:outline-none focus:border-teal-400 transition-colors resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-teal-400 to-blue-500 text-white font-bold text-base shadow-xl hover:scale-[1.02] hover:shadow-2xl transition-all duration-300"
                >
                  🚀 Join the Movement
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
