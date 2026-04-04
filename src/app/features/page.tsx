import Link from "next/link";
import AnimateOnScroll from "@/components/AnimateOnScroll";

const coreFeatures = [
  {
    title: "Real-time MRR & ARR",
    description:
      "Watch your revenue update in real-time. See new subscriptions, expansions, contractions, and churn as they happen — not hours later.",
    badge: "Core",
    icon: "↗",
  },
  {
    title: "Churn Tracking & Alerts",
    description:
      "Get instant Slack/email alerts when a customer cancels. See cancellation reasons pulled directly from Stripe metadata.",
    badge: "Core",
    icon: "◎",
  },
  {
    title: "Customer LTV",
    description:
      "Know exactly how much each customer is worth over their lifetime. Segment by plan, cohort, or acquisition channel.",
    badge: "Core",
    icon: "◈",
  },
  {
    title: "Cohort Retention Analysis",
    description:
      "Beautiful retention heatmaps that show exactly how each monthly cohort retains over time. Spot trends and identify what drives stickiness.",
    badge: "Growth",
    icon: "⊞",
  },
  {
    title: "Weekly Email Digest",
    description:
      "Every Monday morning, get a clean summary of your key metrics. MRR changes, new subscribers, churned customers — all in one email.",
    badge: "All Plans",
    icon: "✉",
  },
  {
    title: "Revenue Forecasting",
    description:
      "AI-powered projections based on your historical data. See where your MRR is headed in 3, 6, and 12 months with confidence intervals.",
    badge: "Pro",
    icon: "◇",
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

const steps = [
  {
    num: "01",
    title: "Connect Stripe",
    description: "Click 'Connect with Stripe' and authorize read-only access. We never touch your billing settings.",
  },
  {
    num: "02",
    title: "Import Your Data",
    description: "We automatically pull your subscription history. All metrics are calculated instantly — no setup needed.",
  },
  {
    num: "03",
    title: "Get Insights",
    description: "Your dashboard is live. See MRR, churn, LTV, and cohort retention. Set up weekly email digests and churn alerts.",
  },
];

const NAV_H = 64;

const heroStyle = {
  position: "sticky" as const,
  top: NAV_H,
  zIndex: 10,
  minHeight: `calc(100vh - ${NAV_H}px)`,
  backgroundColor: "var(--background)",
};

function stackStyle(z: number) {
  return {
    position: "sticky" as const,
    top: NAV_H,
    zIndex: z,
    minHeight: `calc(100vh - ${NAV_H}px)`,
    backgroundColor: "var(--background)",
    borderRadius: "16px 16px 0 0",
    boxShadow: "0 -12px 60px rgba(0,0,0,0.5)",
    overflow: "hidden" as const,
  };
}

export default function FeaturesPage() {
  return (
    <>
      {/* Hero */}
      <section style={heroStyle} className="relative flex flex-col justify-start overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 w-full">
          <p
            className="section-label mb-6 hero-reveal"
            style={{ "--delay": "0ms" } as React.CSSProperties}
          >
            01 / Features
          </p>
          <div className="overflow-hidden mb-2">
            <h1
              className="hero-reveal font-display font-extrabold text-white leading-[0.95]"
              style={{ fontSize: "clamp(3rem, 9vw, 8rem)", "--delay": "80ms" } as React.CSSProperties}
            >
              Built for founders who
            </h1>
          </div>
          <div className="overflow-hidden mb-8">
            <h1
              className="hero-reveal font-display font-extrabold leading-[0.95]"
              style={{ fontSize: "clamp(3rem, 9vw, 8rem)", "--delay": "200ms", color: "var(--primary)" } as React.CSSProperties}
            >
              care about metrics.
            </h1>
          </div>
          <p
            className="hero-fade-up text-white/45 text-lg max-w-2xl leading-relaxed"
            style={{ "--delay": "380ms" } as React.CSSProperties}
          >
            Every feature is designed to give you clarity on your subscription revenue — without the
            complexity or cost of enterprise tools.
          </p>
        </div>
      </section>

      {/* Core Features Grid */}
      <section style={stackStyle(11)} className="flex flex-col justify-start">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 w-full">
          <AnimateOnScroll className="mb-14">
            <p className="section-label mb-4 fade-up">02 / Core Features</p>
          </AnimateOnScroll>

          <AnimateOnScroll className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {coreFeatures.map((f, i) => (
              <div
                key={f.title}
                className="fade-up group relative bg-white/3 border border-white/8 rounded-2xl p-8 hover:border-primary/40 hover:bg-white/5 transition-all duration-300 overflow-hidden"
                style={{ "--delay": `${i * 80}ms` } as React.CSSProperties}
              >
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="flex items-center justify-between mb-6">
                  <span className="text-2xl text-primary font-mono">{f.icon}</span>
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-white/25 bg-white/5 px-2.5 py-1 rounded-full border border-white/8">
                    {f.badge}
                  </span>
                </div>
                <h3 className="font-display text-lg font-bold text-white mb-3">{f.title}</h3>
                <p className="text-sm text-white/45 leading-relaxed">{f.description}</p>
              </div>
            ))}
          </AnimateOnScroll>
        </div>
      </section>

      {/* How It Works */}
      <section style={stackStyle(12)} className="flex flex-col justify-start">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 w-full">
          <AnimateOnScroll className="mb-16">
            <p className="section-label mb-6 fade-up">03 / How It Works</p>
            <h2
              className="reveal-text font-display font-extrabold text-white leading-[0.95]"
              style={{ fontSize: "clamp(2rem, 5vw, 4rem)" }}
            >
              Up and running in
              <span className="text-primary"> under 2 minutes.</span>
            </h2>
          </AnimateOnScroll>

          <AnimateOnScroll className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/5 rounded-2xl overflow-hidden">
            {steps.map((s, i) => (
              <div
                key={s.num}
                className="fade-up p-10"
                style={{ backgroundColor: "var(--background)", "--delay": `${i * 120}ms` } as React.CSSProperties}
              >
                <div className="font-display font-extrabold text-white/5 leading-none mb-8 select-none" style={{ fontSize: "clamp(4rem, 8vw, 7rem)" }}>
                  {s.num}
                </div>
                <h3 className="font-display text-xl font-bold text-white mb-3">{s.title}</h3>
                <p className="text-sm text-white/45 leading-relaxed">{s.description}</p>
              </div>
            ))}
          </AnimateOnScroll>
        </div>
      </section>

      {/* Integrations */}
      <section style={stackStyle(13)} className="flex flex-col justify-start">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 w-full">
          <AnimateOnScroll className="mb-16">
            <p className="section-label mb-6 fade-up">04 / Integrations</p>
            <h2
              className="reveal-text font-display font-extrabold text-white leading-[0.95]"
              style={{ fontSize: "clamp(2rem, 5vw, 4rem)" }}
            >
              Connects to your
              <span className="text-primary"> payment stack.</span>
            </h2>
            <p className="fade-up mt-4 text-white/45 text-lg max-w-xl" style={{ "--delay": "200ms" } as React.CSSProperties}>
              One dashboard for all your subscription revenue, regardless of platform.
            </p>
          </AnimateOnScroll>

          <AnimateOnScroll className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {integrations.map((int, i) => (
              <div
                key={int.name}
                className="fade-up bg-white/3 border border-white/8 rounded-2xl p-6 hover:border-white/15 transition-all duration-300"
                style={{ "--delay": `${i * 80}ms` } as React.CSSProperties}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/8 flex items-center justify-center text-sm font-bold text-white/50">
                      {int.name[0]}
                    </div>
                    <h3 className="font-display font-semibold text-white">{int.name}</h3>
                  </div>
                  <span className="flex items-center gap-1.5 text-xs font-medium text-white/45">
                    <span className={`w-2 h-2 rounded-full ${int.statusColor}`} />
                    {int.status}
                  </span>
                </div>
                <p className="text-sm text-white/40 leading-relaxed">{int.description}</p>
              </div>
            ))}
          </AnimateOnScroll>
        </div>
      </section>

      {/* Comparison Table */}
      <section style={stackStyle(14)} className="flex flex-col justify-start">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 w-full">
          <AnimateOnScroll className="mb-16">
            <p className="section-label mb-6 fade-up">05 / Comparison</p>
            <h2
              className="reveal-text font-display font-extrabold text-white leading-[0.95]"
              style={{ fontSize: "clamp(2rem, 5vw, 4rem)" }}
            >
              How we <span className="text-primary">compare.</span>
            </h2>
            <p className="fade-up mt-4 text-white/45" style={{ "--delay": "200ms" } as React.CSSProperties}>
              Built for indie founders, not enterprise teams.
            </p>
          </AnimateOnScroll>

          <AnimateOnScroll>
            <div className="fade-up bg-white/3 border border-white/8 rounded-2xl overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/8">
                      <th className="text-left p-5 font-medium text-white/40">Feature</th>
                      <th className="p-5 font-display font-bold text-primary">Submetrics</th>
                      <th className="p-5 font-medium text-white/30">Baremetrics</th>
                      <th className="p-5 font-medium text-white/30">ChartMogul</th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparisonRows.map((row, i) => (
                      <tr key={row.feature} className={i % 2 === 0 ? "bg-white/[0.02]" : ""}>
                        <td className="p-5 font-medium text-white/60">{row.feature}</td>
                        <td className="p-5 text-center font-semibold text-white">{row.submetrics}</td>
                        <td className="p-5 text-center text-white/35">{row.baremetrics}</td>
                        <td className="p-5 text-center text-white/35">{row.chartmogul}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* CTA */}
      <section style={stackStyle(15)} className="flex flex-col justify-start">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24 w-full text-center">
          <AnimateOnScroll>
            <h2
              className="reveal-text font-display font-extrabold text-white leading-[0.95] mb-6"
              style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}
            >
              Ready to see your
              <br />
              <span className="text-primary">metrics clearly?</span>
            </h2>
            <p
              className="fade-up text-white/45 text-lg mb-10 max-w-xl mx-auto"
              style={{ "--delay": "200ms" } as React.CSSProperties}
            >
              Start your 14-day free trial. No credit card required.
            </p>
            <Link
              href="/dashboard"
              className="fade-up inline-flex px-10 py-4 bg-primary text-white rounded-xl text-base font-semibold hover:bg-primary/90 transition-all animate-pulse-glow"
              style={{ "--delay": "320ms" } as React.CSSProperties}
            >
              Start Free Trial
            </Link>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  );
}
