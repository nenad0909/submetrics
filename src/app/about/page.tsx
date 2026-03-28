import Link from "next/link";

const values = [
  {
    title: "Simplicity First",
    description:
      "We believe the best tools are the ones you don't have to think about. No setup wizards, no configuration headaches. Connect Stripe and go.",
    icon: (
      <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: "Built for Indie",
    description:
      "We're indie founders too. We build for people like us — bootstrapped, budget-conscious, and focused on shipping. Not enterprise committees.",
    icon: (
      <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
  {
    title: "Transparency",
    description:
      "No hidden fees, no surprise pricing tiers, no dark patterns. What you see is what you get. We'll even share our own metrics publicly.",
    icon: (
      <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
      </svg>
    ),
  },
  {
    title: "Privacy Matters",
    description:
      "Read-only Stripe access. We never store API keys. Your data is encrypted end-to-end. We exist to help you understand your numbers, not exploit them.",
    icon: (
      <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
  },
];

const milestones = [
  { date: "Q4 2025", title: "Idea Born", desc: "Frustrated with tracking MRR in spreadsheets, we started building Submetrics." },
  { date: "Q1 2026", title: "Beta Launch", desc: "Launched to 50 beta users on IndieHackers. First paying customer within a week." },
  { date: "Q1 2026", title: "Mobile Support", desc: "Added RevenueCat integration for iOS and Android subscription tracking." },
  { date: "Q2 2026", title: "Growing Fast", desc: "200+ founders on the platform. Launched cohort analysis and revenue forecasting." },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative py-20 sm:py-28 overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              About Us
            </span>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1]">
              We&apos;re building the analytics tool
              <span className="text-primary"> we always wanted</span>
            </h1>
            <p className="mt-6 text-lg text-muted leading-relaxed max-w-2xl">
              Submetrics was born out of frustration. As indie founders ourselves, we were tired of choosing between
              expensive enterprise tools and messy spreadsheets. So we built something better — simpler, affordable,
              and designed specifically for founders like us.
            </p>
          </div>
        </div>
      </section>

      {/* The Problem */}
      <section className="py-20 bg-white/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-display text-3xl sm:text-4xl font-bold mb-6">
                The problem with <span className="text-primary">subscription analytics</span>
              </h2>
              <div className="space-y-4 text-muted leading-relaxed">
                <p>
                  Most SaaS founders track revenue in Stripe, churn in spreadsheets, and LTV nowhere.
                  The tools that exist — Baremetrics, ChartMogul, ProfitWell — are built for scale-ups
                  with $100K+ MRR and budgets to match.
                </p>
                <p>
                  If you&apos;re a solo founder with $2K MRR, spending $108/month on analytics doesn&apos;t
                  make sense. But flying blind on your metrics is even worse.
                </p>
                <p>
                  We built Submetrics to fill this gap: a beautiful, simple analytics dashboard that
                  starts at $19/month and gives you everything you need to understand your subscription
                  business.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: "$19", label: "Starting price / month", color: "text-primary" },
                { value: "< 2min", label: "Setup time", color: "text-secondary" },
                { value: "200+", label: "Founders on board", color: "text-tertiary" },
                { value: "3", label: "Platforms supported", color: "text-primary" },
              ].map((stat) => (
                <div key={stat.label} className="bg-white rounded-2xl p-6 border border-foreground/5 text-center">
                  <p className={`text-3xl font-display font-extrabold ${stat.color}`}>{stat.value}</p>
                  <p className="text-sm text-muted mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl sm:text-4xl font-bold">
              What we <span className="text-primary">believe in</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((v) => (
              <div key={v.title} className="card-hover bg-white rounded-2xl p-8 border border-foreground/5">
                <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-5">
                  {v.icon}
                </div>
                <h3 className="font-display text-xl font-bold mb-3">{v.title}</h3>
                <p className="text-muted leading-relaxed">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-white/40">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl sm:text-4xl font-bold">
              Our <span className="text-primary">journey</span>
            </h2>
          </div>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-foreground/10" />

            <div className="space-y-10">
              {milestones.map((m, i) => (
                <div key={m.title} className="relative flex gap-6">
                  <div className="relative z-10 w-12 h-12 rounded-full bg-white border-2 border-primary flex items-center justify-center shrink-0">
                    <span className="text-xs font-bold text-primary">{i + 1}</span>
                  </div>
                  <div className="pt-2">
                    <span className="text-xs font-medium text-muted uppercase tracking-wider">{m.date}</span>
                    <h3 className="font-display text-lg font-bold mt-1">{m.title}</h3>
                    <p className="text-sm text-muted mt-1 leading-relaxed">{m.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Open Metrics */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">
            We practice what we preach
          </h2>
          <p className="text-muted text-lg mb-10 max-w-2xl mx-auto">
            We believe in transparency. Here are our own metrics, tracked with Submetrics (of course).
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: "MRR", value: "$4,200", color: "text-primary" },
              { label: "Customers", value: "214", color: "text-secondary" },
              { label: "Churn", value: "2.8%", color: "text-tertiary" },
              { label: "Growth", value: "+18%", color: "text-primary" },
            ].map((m) => (
              <div key={m.label} className="bg-white rounded-2xl p-6 border border-foreground/5">
                <p className="text-xs text-muted font-medium">{m.label}</p>
                <p className={`text-3xl font-display font-extrabold mt-1 ${m.color}`}>{m.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-foreground rounded-3xl p-10 sm:p-16 text-center relative overflow-hidden">
            <div className="relative">
              <h2 className="font-display text-3xl font-bold text-white mb-4">
                Join us on this journey
              </h2>
              <p className="text-white/60 text-lg mb-8 max-w-xl mx-auto">
                We&apos;re building Submetrics in public and we&apos;d love for you to be part of the story.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="/dashboard"
                  className="w-full sm:w-auto px-8 py-4 bg-primary text-white rounded-xl text-base font-semibold hover:bg-primary/90 transition-all shadow-lg"
                >
                  Start Free Trial
                </Link>
                <Link
                  href="/pricing"
                  className="w-full sm:w-auto px-8 py-4 bg-white/10 text-white rounded-xl text-base font-semibold hover:bg-white/20 transition-all border border-white/20"
                >
                  View Pricing
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
