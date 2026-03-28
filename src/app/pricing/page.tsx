import Link from "next/link";

const plans = [
  {
    name: "Starter",
    price: 19,
    description: "Perfect for solo founders just getting started.",
    features: [
      "1 product / data source",
      "MRR, ARR, churn rate, LTV",
      "Simple dashboard with charts",
      "Weekly email digest",
      "Churn alerts (email)",
      "30-day data history",
    ],
    notIncluded: ["Cohort analysis", "Multi-platform", "API access", "White-label reports"],
    cta: "Start Free Trial",
    popular: false,
    color: "border-foreground/10",
    badge: null,
  },
  {
    name: "Growth",
    price: 49,
    description: "For growing SaaS products that need deeper insights.",
    features: [
      "3 products / data sources",
      "Everything in Starter",
      "Cohort retention analysis",
      "Revenue forecasting",
      "Slack + email alerts",
      "Multi-platform (iOS / Android)",
      "12-month data history",
      "Priority email support",
    ],
    notIncluded: ["API access", "White-label reports"],
    cta: "Start Free Trial",
    popular: true,
    color: "border-primary",
    badge: "Most Popular",
  },
  {
    name: "Pro",
    price: 99,
    description: "For serious founders who want the full picture.",
    features: [
      "Unlimited products",
      "Everything in Growth",
      "Full API access",
      "White-label reports",
      "Custom dashboards",
      "Unlimited data history",
      "Revenue benchmarks",
      "Dedicated support",
    ],
    notIncluded: [],
    cta: "Start Free Trial",
    popular: false,
    color: "border-foreground/10",
    badge: null,
  },
];

const faqs = [
  {
    q: "Can I try Submetrics for free?",
    a: "Yes! All plans come with a 14-day free trial. No credit card required. Connect your Stripe account and start seeing your metrics immediately.",
  },
  {
    q: "What happens after the trial ends?",
    a: "You'll be prompted to pick a plan. If you don't, your account goes to read-only mode — you won't lose any data. You can upgrade anytime to resume full access.",
  },
  {
    q: "Can I switch plans later?",
    a: "Absolutely. Upgrade or downgrade anytime. Changes take effect immediately, and we'll prorate the difference.",
  },
  {
    q: "Do you offer annual billing?",
    a: "Yes — save 20% when you pay annually. That's $15/mo for Starter, $39/mo for Growth, and $79/mo for Pro.",
  },
  {
    q: "Is my Stripe data secure?",
    a: "We use Stripe OAuth with read-only access. We never store your Stripe API keys, and all data is encrypted at rest and in transit.",
  },
  {
    q: "What if I have more than 3 products on the Growth plan?",
    a: "You'll need the Pro plan for unlimited products. Or contact us — we may be able to work something out.",
  },
];

export default function PricingPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative py-20 sm:py-28 overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-flex items-center px-3 py-1 rounded-full bg-tertiary/10 text-tertiary text-sm font-medium mb-6">
            Simple Pricing
          </span>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight">
            Analytics that don&apos;t
            <br />
            <span className="text-primary">break the bank</span>
          </h1>
          <p className="mt-6 text-lg text-muted max-w-2xl mx-auto">
            Start at $19/month. No hidden fees, no per-seat pricing, no surprises. Every plan includes a 14-day free trial.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="pb-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`relative bg-white rounded-2xl border-2 ${plan.color} overflow-hidden card-hover ${
                  plan.popular ? "shadow-xl scale-[1.02]" : "shadow-md"
                }`}
              >
                {plan.badge && (
                  <div className="bg-primary text-white text-center py-2 text-xs font-bold uppercase tracking-wider">
                    {plan.badge}
                  </div>
                )}
                <div className="p-8">
                  <h3 className="font-display text-xl font-bold">{plan.name}</h3>
                  <p className="text-sm text-muted mt-1 mb-6">{plan.description}</p>

                  <div className="flex items-baseline gap-1 mb-8">
                    <span className="text-5xl font-display font-extrabold">${plan.price}</span>
                    <span className="text-muted text-sm">/month</span>
                  </div>

                  <Link
                    href="/dashboard"
                    className={`block text-center py-3.5 rounded-xl font-semibold text-sm transition-all ${
                      plan.popular
                        ? "bg-primary text-white hover:bg-primary/90 shadow-lg"
                        : "bg-foreground/5 text-foreground hover:bg-foreground/10"
                    }`}
                  >
                    {plan.cta}
                  </Link>

                  <div className="mt-8">
                    <p className="text-xs font-semibold text-foreground/40 uppercase tracking-wider mb-3">
                      What&apos;s included
                    </p>
                    <ul className="space-y-2.5">
                      {plan.features.map((f) => (
                        <li key={f} className="flex items-start gap-2.5 text-sm">
                          <svg
                            className="w-4 h-4 text-tertiary mt-0.5 shrink-0"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="2.5"
                          >
                            <path d="M5 13l4 4L19 7" />
                          </svg>
                          {f}
                        </li>
                      ))}
                      {plan.notIncluded.map((f) => (
                        <li key={f} className="flex items-start gap-2.5 text-sm text-muted/50">
                          <svg
                            className="w-4 h-4 text-foreground/20 mt-0.5 shrink-0"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="2"
                          >
                            <path d="M6 18L18 6M6 6l12 12" />
                          </svg>
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <p className="text-center text-sm text-muted mt-8">
            All prices in USD. Save 20% with annual billing.
          </p>
        </div>
      </section>

      {/* Target customer */}
      <section className="py-20 bg-white/40">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl font-bold mb-4">Built for the indie founder budget</h2>
          <p className="text-muted text-lg mb-10 max-w-2xl mx-auto">
            Most analytics tools start at $100+/month. We believe early-stage founders deserve great tools at a fair price.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { icon: "🚀", title: "Solo Founders", desc: "Building your first SaaS product under $50K MRR" },
              { icon: "🛠", title: "Dev Agencies", desc: "Running multiple subscription products for clients" },
              { icon: "💡", title: "Indie Hackers", desc: "No-code builders launching their first paid tool" },
            ].map((t) => (
              <div key={t.title} className="bg-white rounded-2xl p-6 border border-foreground/5">
                <div className="text-3xl mb-3">{t.icon}</div>
                <h3 className="font-display font-bold mb-1">{t.title}</h3>
                <p className="text-sm text-muted">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl font-bold">Frequently asked questions</h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq) => (
              <div key={faq.q} className="bg-white rounded-2xl p-6 border border-foreground/5">
                <h3 className="font-display font-semibold mb-2">{faq.q}</h3>
                <p className="text-sm text-muted leading-relaxed">{faq.a}</p>
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
                Start tracking your metrics today
              </h2>
              <p className="text-white/60 text-lg mb-8">
                14-day free trial. No credit card. Cancel anytime.
              </p>
              <Link
                href="/dashboard"
                className="inline-flex px-8 py-4 bg-primary text-white rounded-xl text-base font-semibold hover:bg-primary/90 transition-all shadow-lg"
              >
                Start Free Trial
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
