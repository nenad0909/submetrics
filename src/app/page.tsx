import Link from "next/link";
import AnimateOnScroll from "@/components/AnimateOnScroll";

const features = [
  {
    label: "MRR & ARR",
    desc: "Watch revenue update in real-time. New subs, expansions, contractions and churn as they happen.",
    icon: "↗",
  },
  {
    label: "Churn Alerts",
    desc: "Instant Slack or email alerts when a customer cancels. Act fast to save at-risk customers.",
    icon: "◎",
  },
  {
    label: "Customer LTV",
    desc: "Know exactly what each customer is worth. Segment by plan, cohort, or acquisition channel.",
    icon: "◈",
  },
  {
    label: "Cohort Retention",
    desc: "Beautiful retention heatmaps showing how each monthly cohort retains over time.",
    icon: "⊞",
  },
  {
    label: "Revenue Forecasting",
    desc: "AI-powered projections based on your historical data. See where MRR is headed in 3–12 months.",
    icon: "◇",
  },
  {
    label: "Multi-Platform",
    desc: "Stripe, RevenueCat, Paddle — one dashboard for all your subscription revenue.",
    icon: "⊕",
  },
];

const testimonials = [
  {
    quote: "Finally analytics I can actually afford. Set up in 2 minutes and it just works.",
    name: "Marcus T.",
    role: "Founder, ShipFast",
    avatar: "MT",
  },
  {
    quote: "Saw my churn spike before it became a crisis. Submetrics paid for itself in week one.",
    name: "Priya S.",
    role: "Indie Hacker",
    avatar: "PS",
  },
  {
    quote: "The cohort retention view is incredible. I finally understand why users stick around.",
    name: "Jake L.",
    role: "Founder, Notifly",
    avatar: "JL",
  },
];

const integrations = ["Stripe", "RevenueCat", "Paddle", "LemonSqueezy", "App Store", "Google Play"];

/* Shared sticky styles — each section stacks on top of the previous */
const NAV_H = 64; // matches h-16 on the navbar

function stickyStyle(zIndex: number): React.CSSProperties {
  return {
    position: "sticky",
    top: NAV_H,
    zIndex,
    height: `calc(100vh - ${NAV_H}px)`,
    backgroundColor: "var(--background)",
  };
}

function stackStyle(zIndex: number): React.CSSProperties {
  return {
    ...stickyStyle(zIndex),
    borderRadius: "16px 16px 0 0",
    boxShadow: "0 -12px 60px rgba(0,0,0,0.5)",
    overflow: "hidden",
  };
}

function HeroSection() {
  return (
    <section
      style={stickyStyle(10)}
      className="relative flex flex-col justify-start overflow-hidden"
    >
      {/* Subtle noise/grain overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 w-full">
        {/* Section label */}
        <div className="overflow-hidden mb-8">
          <p
            className="section-label hero-reveal"
            style={{ "--delay": "0ms" } as React.CSSProperties}
          >
            01 / Analytics for Indie Founders
          </p>
        </div>

        {/* Main heading — line by line for staggered clip reveal */}
        <div className="overflow-hidden mb-2">
          <h1
            className="hero-reveal font-display font-extrabold tracking-tight leading-[0.95] text-white"
            style={{ fontSize: "clamp(3.5rem, 11vw, 9.5rem)", "--delay": "80ms" } as React.CSSProperties}
          >
            Know Your
          </h1>
        </div>
        <div className="overflow-hidden mb-10">
          <h1
            className="hero-reveal font-display font-extrabold tracking-tight leading-[0.95] text-primary"
            style={{ fontSize: "clamp(3.5rem, 11vw, 9.5rem)", "--delay": "200ms" } as React.CSSProperties}
          >
            Numbers.
          </h1>
        </div>

        {/* Subtitle */}
        <p
          className="hero-fade-up text-lg sm:text-xl text-white/50 max-w-xl leading-relaxed mb-10"
          style={{ "--delay": "380ms" } as React.CSSProperties}
        >
          The simplest subscription analytics dashboard for indie founders.
          Connect Stripe in 2 minutes — track MRR, churn, LTV with no spreadsheets.
        </p>

        {/* CTAs */}
        <div
          className="hero-fade-up flex flex-col sm:flex-row gap-4"
          style={{ "--delay": "520ms" } as React.CSSProperties}
        >
          <Link
            href="/dashboard"
            className="animate-pulse-glow inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-white rounded-xl text-base font-semibold hover:bg-primary/90 transition-all duration-200"
          >
            Start Free Trial
            <span className="text-lg">→</span>
          </Link>
          <Link
            href="/features"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/5 border border-white/10 text-white rounded-xl text-base font-semibold hover:bg-white/10 transition-all duration-200"
          >
            See Features
          </Link>
        </div>

        <p
          className="hero-fade-up mt-5 text-xs text-white/30"
          style={{ "--delay": "620ms" } as React.CSSProperties}
        >
          No credit card required · 14-day free trial · Cancel anytime
        </p>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/20">
        <span className="text-[10px] tracking-widest uppercase">Scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-white/20 to-transparent" />
      </div>
    </section>
  );
}

function IntegrationsSection() {
  return (
    <section style={stackStyle(11)} className="flex flex-col justify-start border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 w-full">
        <AnimateOnScroll>
          <p className="section-label mb-10 fade-up">02 / Integrations</p>
          <div className="flex flex-wrap items-center gap-10 sm:gap-16">
            {integrations.map((name, i) => (
              <div
                key={name}
                className="fade-up text-white/25 hover:text-white/60 transition-colors text-sm font-medium tracking-wider uppercase"
                style={{ "--delay": `${i * 80}ms` } as React.CSSProperties}
              >
                {name}
              </div>
            ))}
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}

function FeaturesSection() {
  return (
    <section style={stackStyle(12)} className="flex flex-col justify-start">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 w-full">
        <AnimateOnScroll className="mb-16">
          <p className="section-label mb-6 fade-up">03 / Features</p>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <h2
              className="reveal-text font-display font-extrabold text-white leading-[0.95]"
              style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}
            >
              Everything you need
              <br />
              <span className="text-primary">nothing you don&apos;t.</span>
            </h2>
            <p
              className="fade-up text-white/45 max-w-md text-base leading-relaxed lg:mb-2"
              style={{ "--delay": "200ms" } as React.CSSProperties}
            >
              Built specifically for indie SaaS founders who need clarity without complexity.
            </p>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map((f, i) => (
            <div
              key={f.label}
              className="fade-up group bg-white/3 border border-white/8 rounded-2xl p-7 hover:border-primary/40 hover:bg-white/5 transition-all duration-300 cursor-default"
              style={{ "--delay": `${i * 80}ms` } as React.CSSProperties}
            >
              <div className="text-2xl text-primary mb-5 font-mono">{f.icon}</div>
              <h3 className="font-display text-lg font-bold text-white mb-2">{f.label}</h3>
              <p className="text-sm text-white/45 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </AnimateOnScroll>

        <AnimateOnScroll className="mt-10">
          <Link
            href="/features"
            className="fade-up inline-flex items-center gap-2 text-sm text-white/50 hover:text-white transition-colors border-b border-white/20 hover:border-white/50 pb-0.5"
          >
            View all features <span>→</span>
          </Link>
        </AnimateOnScroll>
      </div>
    </section>
  );
}

function HowItWorksSection() {
  const steps = [
    {
      num: "01",
      title: "Connect Stripe",
      desc: "Click 'Connect with Stripe' and authorize read-only access. We never touch your billing settings.",
    },
    {
      num: "02",
      title: "Import Your Data",
      desc: "We automatically pull your subscription history. All metrics are calculated instantly — no setup needed.",
    },
    {
      num: "03",
      title: "Get Insights",
      desc: "Your dashboard is live. MRR, churn, LTV, cohort retention — set up alerts and weekly email digests.",
    },
  ];

  return (
    <section style={stackStyle(13)} className="flex flex-col justify-start">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 w-full">
        <AnimateOnScroll className="mb-16">
          <p className="section-label mb-6 fade-up">04 / How It Works</p>
          <h2
            className="reveal-text font-display font-extrabold text-white leading-[0.95]"
            style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}
          >
            Up and running in
            <br />
            <span className="text-primary">under 2 minutes.</span>
          </h2>
        </AnimateOnScroll>

        <AnimateOnScroll className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/5 rounded-2xl overflow-hidden">
          {steps.map((s, i) => (
            <div
              key={s.num}
              className="fade-up p-10"
              style={{ backgroundColor: "var(--background)", "--delay": `${i * 120}ms` } as React.CSSProperties}
            >
              <div
                className="font-display font-extrabold text-white/5 leading-none mb-8 select-none"
                style={{ fontSize: "clamp(5rem, 10vw, 8rem)" }}
              >
                {s.num}
              </div>
              <h3 className="font-display text-xl font-bold text-white mb-3">{s.title}</h3>
              <p className="text-sm text-white/45 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </AnimateOnScroll>
      </div>
    </section>
  );
}

function TestimonialsSection() {
  return (
    <section style={stackStyle(14)} className="flex flex-col justify-start">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 w-full">
        <AnimateOnScroll className="mb-16">
          <p className="section-label mb-6 fade-up">05 / Founders Love It</p>
          <h2
            className="reveal-text font-display font-extrabold text-white leading-[0.95]"
            style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}
          >
            From the community.
          </h2>
        </AnimateOnScroll>

        <AnimateOnScroll className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className="fade-up bg-white/3 border border-white/8 rounded-2xl p-8 hover:border-white/15 transition-all duration-300"
              style={{ "--delay": `${i * 120}ms` } as React.CSSProperties}
            >
              <p className="text-white/70 text-base leading-relaxed mb-8 font-light">&ldquo;{t.quote}&rdquo;</p>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-primary/20 text-primary flex items-center justify-center text-xs font-bold">
                  {t.avatar}
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">{t.name}</p>
                  <p className="text-xs text-white/35">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </AnimateOnScroll>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section style={stackStyle(15)} className="flex flex-col justify-start">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 w-full">
        <AnimateOnScroll>
          <p className="section-label mb-8 fade-up">06 / Get Started</p>
          <h2
            className="reveal-text font-display font-extrabold text-white leading-[0.95] mb-8"
            style={{ fontSize: "clamp(2.8rem, 7vw, 6rem)" }}
          >
            Ready to understand
            <br />
            your <span className="text-primary">revenue?</span>
          </h2>
          <p
            className="fade-up text-white/45 text-lg mb-12 max-w-xl leading-relaxed"
            style={{ "--delay": "200ms" } as React.CSSProperties}
          >
            Join hundreds of indie founders who track SaaS metrics with Submetrics.
            Setup takes less than 2 minutes.
          </p>
          <div
            className="fade-up flex flex-col sm:flex-row items-start gap-4"
            style={{ "--delay": "320ms" } as React.CSSProperties}
          >
            <Link
              href="/dashboard"
              className="animate-pulse-glow px-10 py-4 bg-primary text-white rounded-xl text-base font-semibold hover:bg-primary/90 transition-all"
            >
              Start Free — No Card Required
            </Link>
            <Link
              href="/pricing"
              className="px-10 py-4 bg-white/5 border border-white/10 text-white rounded-xl text-base font-semibold hover:bg-white/10 transition-all"
            >
              View Pricing
            </Link>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <IntegrationsSection />
      <FeaturesSection />
      <HowItWorksSection />
      <TestimonialsSection />
      <CTASection />
    </>
  );
}
