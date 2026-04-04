"use client";

import Link from "next/link";
import { useState } from "react";
import AnimateOnScroll from "@/components/AnimateOnScroll";

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

function AccordionItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-white/8 last:border-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-5 text-left group"
      >
        <span className="font-display font-semibold text-white group-hover:text-primary transition-colors pr-8">
          {q}
        </span>
        <span
          className={`shrink-0 w-6 h-6 rounded-full border border-white/15 flex items-center justify-center text-white/50 transition-all duration-300 ${
            open ? "rotate-45 border-primary text-primary" : ""
          }`}
        >
          <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
            <path d="M5 1v8M1 5h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          open ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <p className="pb-5 text-sm text-white/45 leading-relaxed">{a}</p>
      </div>
    </div>
  );
}

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

export default function PricingPage() {
  return (
    <>
      {/* Hero */}
      <section style={heroStyle} className="relative flex flex-col justify-start overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 w-full">
          <p
            className="section-label mb-6 hero-reveal"
            style={{ "--delay": "0ms" } as React.CSSProperties}
          >
            01 / Pricing
          </p>
          <div className="overflow-hidden mb-2">
            <h1
              className="hero-reveal font-display font-extrabold text-white leading-[0.95]"
              style={{ fontSize: "clamp(3rem, 9vw, 8rem)", "--delay": "80ms" } as React.CSSProperties}
            >
              Analytics that don&apos;t
            </h1>
          </div>
          <div className="overflow-hidden mb-8">
            <h1
              className="hero-reveal font-display font-extrabold leading-[0.95]"
              style={{ fontSize: "clamp(3rem, 9vw, 8rem)", "--delay": "200ms", color: "var(--primary)" } as React.CSSProperties}
            >
              break the bank.
            </h1>
          </div>
          <p
            className="hero-fade-up text-white/45 text-lg max-w-2xl leading-relaxed"
            style={{ "--delay": "380ms" } as React.CSSProperties}
          >
            Start at $19/month. No hidden fees, no per-seat pricing, no surprises.
            Every plan includes a 14-day free trial.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section style={stackStyle(11)} className="flex flex-col justify-start">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
          <AnimateOnScroll className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {plans.map((plan, i) => (
              <div
                key={plan.name}
                className={`fade-up relative rounded-2xl overflow-hidden transition-all duration-300 ${
                  plan.popular ? "border-2 border-primary" : "border border-white/8"
                } bg-white/3 hover:bg-white/5`}
                style={{
                  "--delay": `${i * 100}ms`,
                  ...(plan.popular
                    ? { boxShadow: "0 0 60px rgba(235,89,54,0.12), 0 0 120px rgba(235,89,54,0.05)" }
                    : {}),
                } as React.CSSProperties}
              >
                {plan.badge && (
                  <div className="bg-primary text-white text-center py-2 text-xs font-bold uppercase tracking-widest">
                    {plan.badge}
                  </div>
                )}
                <div className="p-8">
                  <h3 className="font-display text-xl font-bold text-white">{plan.name}</h3>
                  <p className="text-sm text-white/40 mt-1 mb-7">{plan.description}</p>
                  <div className="flex items-baseline gap-1 mb-8">
                    <span className="text-5xl font-display font-extrabold text-white">${plan.price}</span>
                    <span className="text-white/35 text-sm">/month</span>
                  </div>
                  <Link
                    href="/dashboard"
                    className={`block text-center py-3.5 rounded-xl font-semibold text-sm transition-all duration-200 ${
                      plan.popular
                        ? "bg-primary text-white hover:bg-primary/90"
                        : "bg-white/8 text-white hover:bg-white/12 border border-white/10"
                    }`}
                  >
                    {plan.cta}
                  </Link>
                  <div className="mt-8">
                    <p className="text-[10px] font-semibold text-white/25 uppercase tracking-widest mb-4">
                      What&apos;s included
                    </p>
                    <ul className="space-y-2.5">
                      {plan.features.map((f) => (
                        <li key={f} className="flex items-start gap-2.5 text-sm text-white/70">
                          <svg className="w-4 h-4 text-tertiary mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                            <path d="M5 13l4 4L19 7" />
                          </svg>
                          {f}
                        </li>
                      ))}
                      {plan.notIncluded.map((f) => (
                        <li key={f} className="flex items-start gap-2.5 text-sm text-white/20">
                          <svg className="w-4 h-4 text-white/15 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
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
          </AnimateOnScroll>
          <AnimateOnScroll>
            <p className="fade-up text-center text-sm text-white/30 mt-8">
              All prices in USD. Save 20% with annual billing.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Who It's For */}
      <section style={stackStyle(12)} className="flex flex-col justify-start">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-24 w-full">
          <AnimateOnScroll className="text-center mb-14">
            <p className="section-label justify-center mb-6 fade-up">02 / Who It&apos;s For</p>
            <h2
              className="reveal-text font-display font-extrabold text-white leading-[0.95] mb-5"
              style={{ fontSize: "clamp(2rem, 5vw, 4rem)" }}
            >
              Built for the indie founder budget.
            </h2>
            <p
              className="fade-up text-white/45 text-lg max-w-xl mx-auto"
              style={{ "--delay": "200ms" } as React.CSSProperties}
            >
              Most analytics tools start at $100+/month. Early-stage founders deserve great tools at a fair price.
            </p>
          </AnimateOnScroll>
          <AnimateOnScroll className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { title: "Solo Founders", desc: "Building your first SaaS product under $50K MRR", icon: "◉" },
              { title: "Dev Agencies", desc: "Running multiple subscription products for clients", icon: "◈" },
              { title: "Indie Hackers", desc: "No-code builders launching their first paid tool", icon: "◇" },
            ].map((t, i) => (
              <div
                key={t.title}
                className="fade-up bg-white/3 border border-white/8 rounded-2xl p-8 text-center hover:border-white/15 transition-all duration-300"
                style={{ "--delay": `${i * 100}ms` } as React.CSSProperties}
              >
                <div className="text-3xl text-primary font-mono mb-4">{t.icon}</div>
                <h3 className="font-display font-bold text-white mb-2">{t.title}</h3>
                <p className="text-sm text-white/40">{t.desc}</p>
              </div>
            ))}
          </AnimateOnScroll>
        </div>
      </section>

      {/* FAQ */}
      <section style={stackStyle(13)} className="flex flex-col justify-start">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-24 w-full">
          <AnimateOnScroll className="mb-12">
            <p className="section-label mb-6 fade-up">03 / FAQ</p>
            <h2
              className="reveal-text font-display font-extrabold text-white leading-[0.95]"
              style={{ fontSize: "clamp(2rem, 5vw, 4rem)" }}
            >
              Frequently asked questions.
            </h2>
          </AnimateOnScroll>
          <AnimateOnScroll>
            <div className="fade-up bg-white/3 border border-white/8 rounded-2xl px-8 py-2">
              {faqs.map((faq) => (
                <AccordionItem key={faq.q} q={faq.q} a={faq.a} />
              ))}
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* CTA */}
      <section style={stackStyle(14)} className="flex flex-col justify-start">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24 w-full text-center">
          <AnimateOnScroll>
            <h2
              className="reveal-text font-display font-extrabold text-white leading-[0.95] mb-6"
              style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}
            >
              Start tracking your
              <br />
              <span className="text-primary">metrics today.</span>
            </h2>
            <p className="fade-up text-white/45 text-lg mb-10" style={{ "--delay": "200ms" } as React.CSSProperties}>
              14-day free trial. No credit card. Cancel anytime.
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
