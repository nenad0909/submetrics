import Link from "next/link";

const coreFeatures = [
  {
    title: "Real-time MRR & ARR",
    description:
      "Watch your revenue update in real-time. See new subscriptions, expansions, contractions, and churn as they happen — not hours later.",
    icon: (
      <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
    color: "from-primary to-primary/60",
    badge: "Core",
  },
  {
    title: "Churn Tracking & Alerts",
    description:
      "Get instant Slack/email alerts when a customer cancels. See cancellation reasons pulled directly from Stripe metadata. Act fast to save at-risk customers.",
    icon: (
      <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
      </svg>
    ),
    color: "from-secondary to-secondary/60",
    badge: "Core",
  },
  {
    title: "Customer LTV",
    description:
      "Know exactly how much each customer is worth over their lifetime. Segment by plan, cohort, or acquisition channel to understand what drives value.",
    icon: (
      <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    color: "from-tertiary to-tertiary/60",
    badge: "Core",
  },
  {
    title: "Cohort Retention Analysis",
    description:
      "Beautiful retention heatmaps that show exactly how each monthly cohort retains over time. Spot trends and identify what drives long-term stickiness.",
    icon: (
      <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
      </svg>
    ),
    color: "from-primary to-secondary",
    badge: "Growth",
  },
  {
    title: "Weekly Email Digest",
    description:
      "Every Monday morning, get a clean summary of your key metrics. MRR changes, new subscribers, churned customers — all in one email.",
    icon: (
      <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    color: "from-secondary to-tertiary",
    badge: "All Plans",
  },
  {
    title: "Revenue Forecasting",
    description:
      "AI-powered projections based on your historical data. See where your MRR is headed in 3, 6, and 12 months with confidence intervals.",
    icon: (
      <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    color: "from-tertiary to-primary",
    badge: "Pro",
  },
];

const integrations = [
  {
    name: "Stripe",
    description: "1-click OAuth connection. Pull all subscription, charge, and customer data automatically.",
    status: "Live",
    statusColor: "bg-tertiary",
  },
  {
    name: "RevenueCat",
    description: "Unified mobile subscription tracking. Connect iOS and Android revenue in seconds.",
    status: "Live",
    statusColor: "bg-tertiary",
  },
  {
    name: "Paddle",
    description: "Full support for Paddle subscriptions, including trials and one-time charges.",
    status: "Beta",
    statusColor: "bg-secondary",
  },
  {
    name: "LemonSqueezy",
    description: "Track subscriptions and license keys for digital products and SaaS.",
    status: "Coming Soon",
    statusColor: "bg-muted",
  },
  {
    name: "App Store Connect",
    description: "Direct Apple subscription data for iOS apps without RevenueCat middleware.",
    status: "Coming Soon",
    statusColor: "bg-muted",
  },
  {
    name: "Google Play Console",
    description: "Native Android subscription analytics from the Play Developer API.",
    status: "Coming Soon",
    statusColor: "bg-muted",
  },
];

const comparisonRows = [
  { feature: "Starting Price", submetrics: "$19/mo", baremetrics: "$108/mo", chartmogul: "$99/mo" },
  { feature: "Free Trial", submetrics: "14 days", baremetrics: "14 days", chartmogul: "14 days" },
  { feature: "Mobile Revenue", submetrics: "Yes", baremetrics: "No", chartmogul: "Limited" },
  { feature: "Setup Time", submetrics: "< 2 min", baremetrics: "~15 min", chartmogul: "~30 min" },
  { feature: "Cohort Analysis", submetrics: "Yes", baremetrics: "Yes", chartmogul: "Yes" },
  { feature: "Weekly Digest", submetrics: "Yes", baremetrics: "Yes", chartmogul: "No" },
  { feature: "White-label", submetrics: "Pro plan", baremetrics: "Enterprise", chartmogul: "Enterprise" },
  { feature: "API Access", submetrics: "Pro plan", baremetrics: "All plans", chartmogul: "All plans" },
];

export default function FeaturesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative py-20 sm:py-28 overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-flex items-center px-3 py-1 rounded-full bg-secondary/10 text-secondary text-sm font-medium mb-6">
            Features
          </span>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight">
            Built for founders who
            <br />
            <span className="text-primary">care about metrics</span>
          </h1>
          <p className="mt-6 text-lg text-muted max-w-2xl mx-auto">
            Every feature is designed to give you clarity on your subscription revenue — without the complexity or cost of enterprise tools.
          </p>
        </div>
      </section>

      {/* Core Features Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreFeatures.map((f) => (
              <div key={f.title} className="card-hover bg-white rounded-2xl overflow-hidden border border-foreground/5">
                <div className={`h-1.5 bg-gradient-to-r ${f.color}`} />
                <div className="p-7">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-foreground/5 flex items-center justify-center text-foreground/70">
                      {f.icon}
                    </div>
                    <span className="text-[10px] font-semibold uppercase tracking-wider text-muted bg-foreground/5 px-2 py-1 rounded-full">
                      {f.badge}
                    </span>
                  </div>
                  <h3 className="font-display text-lg font-bold mb-2">{f.title}</h3>
                  <p className="text-sm text-muted leading-relaxed">{f.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-white/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl sm:text-4xl font-bold">
              Up and running in <span className="text-primary">under 2 minutes</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Connect Stripe",
                description: "Click 'Connect with Stripe' and authorize read-only access. We never touch your billing settings.",
                color: "text-primary",
              },
              {
                step: "02",
                title: "Import Your Data",
                description: "We automatically pull your subscription history. All metrics are calculated instantly — no setup needed.",
                color: "text-secondary",
              },
              {
                step: "03",
                title: "Get Insights",
                description: "Your dashboard is live. See MRR, churn, LTV, and cohort retention. Set up weekly email digests and churn alerts.",
                color: "text-tertiary",
              },
            ].map((s) => (
              <div key={s.step} className="text-center">
                <div className={`text-5xl font-display font-extrabold ${s.color} opacity-20 mb-4`}>{s.step}</div>
                <h3 className="font-display text-xl font-bold mb-2">{s.title}</h3>
                <p className="text-sm text-muted leading-relaxed">{s.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl sm:text-4xl font-bold">
              Connects to your <span className="text-primary">payment stack</span>
            </h2>
            <p className="mt-4 text-muted text-lg">
              One dashboard for all your subscription revenue, regardless of platform.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {integrations.map((int) => (
              <div key={int.name} className="card-hover bg-white rounded-2xl p-6 border border-foreground/5">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-foreground/5 flex items-center justify-center text-lg font-bold text-foreground/60">
                      {int.name[0]}
                    </div>
                    <h3 className="font-display font-semibold">{int.name}</h3>
                  </div>
                  <span className={`flex items-center gap-1.5 text-xs font-medium`}>
                    <span className={`w-2 h-2 rounded-full ${int.statusColor}`} />
                    {int.status}
                  </span>
                </div>
                <p className="text-sm text-muted leading-relaxed">{int.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20 bg-white/40">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl sm:text-4xl font-bold">
              How we <span className="text-primary">compare</span>
            </h2>
            <p className="mt-4 text-muted">Built for indie founders, not enterprise teams.</p>
          </div>

          <div className="bg-white rounded-2xl border border-foreground/5 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-foreground/10">
                    <th className="text-left p-4 font-medium text-muted">Feature</th>
                    <th className="p-4 font-display font-bold text-primary">Submetrics</th>
                    <th className="p-4 font-medium text-muted">Baremetrics</th>
                    <th className="p-4 font-medium text-muted">ChartMogul</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonRows.map((row, i) => (
                    <tr key={row.feature} className={i % 2 === 0 ? "bg-foreground/[0.02]" : ""}>
                      <td className="p-4 font-medium">{row.feature}</td>
                      <td className="p-4 text-center font-semibold text-foreground">{row.submetrics}</td>
                      <td className="p-4 text-center text-muted">{row.baremetrics}</td>
                      <td className="p-4 text-center text-muted">{row.chartmogul}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">
            Ready to see your metrics clearly?
          </h2>
          <p className="text-muted text-lg mb-8">
            Start your 14-day free trial. No credit card required.
          </p>
          <Link
            href="/dashboard"
            className="inline-flex px-8 py-4 bg-primary text-white rounded-xl text-base font-semibold hover:bg-primary/90 transition-all shadow-lg"
          >
            Start Free Trial
          </Link>
        </div>
      </section>
    </div>
  );
}
