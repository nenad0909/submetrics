import Link from "next/link";

function HeroSection() {
  return (
    <section className="relative overflow-hidden py-24 sm:py-32 lg:py-40">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          <div className="animate-fade-in-up">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              Now in Beta — Join 200+ founders
            </span>
          </div>

          <h1 className="animate-fade-in-up-delay-1 font-display text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.1]">
            Know Your Numbers.
            <br />
            <span className="text-primary">Grow Your SaaS.</span>
          </h1>

          <p className="animate-fade-in-up-delay-2 mt-6 text-lg sm:text-xl text-muted max-w-2xl mx-auto leading-relaxed">
            The simplest subscription analytics dashboard for indie founders.
            Connect Stripe in 2 minutes. Track MRR, churn, LTV — no spreadsheets needed.
          </p>

          <div className="animate-fade-in-up-delay-3 mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/dashboard"
              className="w-full sm:w-auto px-8 py-4 bg-primary text-white rounded-xl text-base font-semibold hover:bg-primary/90 transition-all duration-200 shadow-lg hover:shadow-xl animate-pulse-glow"
            >
              Start Free Trial
            </Link>
            <Link
              href="/features"
              className="w-full sm:w-auto px-8 py-4 bg-white text-foreground rounded-xl text-base font-semibold hover:bg-white/80 transition-all duration-200 shadow-md"
            >
              See Features
            </Link>
          </div>

          <p className="animate-fade-in-up-delay-4 mt-4 text-sm text-muted">
            No credit card required &middot; 14-day free trial &middot; Cancel anytime
          </p>
        </div>

        {/* Dashboard Preview */}
        <div className="animate-fade-in-up-delay-4 mt-16 sm:mt-20 relative">
          <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden border border-white/50">
            <div className="bg-foreground/5 px-4 py-3 flex items-center gap-2 border-b border-foreground/10">
              <div className="w-3 h-3 rounded-full bg-primary/60" />
              <div className="w-3 h-3 rounded-full bg-tertiary/60" />
              <div className="w-3 h-3 rounded-full bg-secondary/60" />
              <span className="ml-3 text-xs text-muted">app.submetrics.io/dashboard</span>
            </div>
            <div className="p-6 sm:p-8">
              {/* Mini dashboard mockup */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                {[
                  { label: "MRR", value: "$12,450", change: "+12.3%", color: "text-tertiary" },
                  { label: "ARR", value: "$149,400", change: "+12.3%", color: "text-tertiary" },
                  { label: "Churn Rate", value: "3.2%", change: "-0.5%", color: "text-tertiary" },
                  { label: "Active Subs", value: "847", change: "+23", color: "text-tertiary" },
                ].map((metric) => (
                  <div key={metric.label} className="bg-card-alt rounded-xl p-4">
                    <p className="text-xs text-muted font-medium">{metric.label}</p>
                    <p className="text-xl sm:text-2xl font-display font-bold mt-1">{metric.value}</p>
                    <p className={`text-xs font-medium mt-1 ${metric.color}`}>{metric.change}</p>
                  </div>
                ))}
              </div>

              {/* Chart mockup */}
              <div className="bg-card-alt rounded-xl p-6 h-48 flex items-end gap-1">
                {[35, 42, 38, 55, 48, 62, 58, 72, 68, 78, 85, 92].map((h, i) => (
                  <div
                    key={i}
                    className="flex-1 rounded-t-md transition-all duration-500"
                    style={{
                      height: `${Math.round(h * 1.4)}px`,
                      background: `linear-gradient(to top, var(--primary), var(--secondary))`,
                      opacity: 0.7 + i * 0.025,
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function LogoCloud() {
  const integrations = ["Stripe", "RevenueCat", "Paddle", "LemonSqueezy", "App Store", "Google Play"];
  return (
    <section className="py-16 border-y border-foreground/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm text-muted font-medium mb-8">INTEGRATES WITH YOUR FAVORITE TOOLS</p>
        <div className="flex flex-wrap justify-center items-center gap-8 sm:gap-12">
          {integrations.map((name) => (
            <div key={name} className="flex items-center gap-2 text-foreground/40 hover:text-foreground/70 transition-colors">
              <div className="w-8 h-8 rounded-lg bg-foreground/5 flex items-center justify-center">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <rect width="24" height="24" rx="4" opacity="0.3" />
                </svg>
              </div>
              <span className="text-sm font-medium">{name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FeaturesPreview() {
  const features = [
    {
      icon: (
        <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
      title: "Real-time MRR Tracking",
      description: "See your Monthly Recurring Revenue update in real-time as new subscriptions come in and churn happens.",
      color: "bg-primary/10 text-primary",
    },
    {
      icon: (
        <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10" />
          <path d="M12 6v6l4 2" />
        </svg>
      ),
      title: "Churn Alerts",
      description: "Get instant notifications when customers cancel. Understand why they leave and act fast to retain them.",
      color: "bg-secondary/10 text-secondary",
    },
    {
      icon: (
        <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      ),
      title: "Cohort Analysis",
      description: "Track how monthly cohorts retain over time. See your retention heatmap and identify what drives stickiness.",
      color: "bg-tertiary/10 text-tertiary",
    },
    {
      icon: (
        <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <rect x="2" y="3" width="20" height="14" rx="2" />
          <path d="M8 21h8M12 17v4" />
        </svg>
      ),
      title: "Multi-Platform",
      description: "Unified view across Stripe, iOS, and Android. See all your revenue in one dashboard regardless of platform.",
      color: "bg-primary/10 text-primary",
    },
    {
      icon: (
        <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
          <polyline points="22,6 12,13 2,6" />
        </svg>
      ),
      title: "Weekly Digest",
      description: "Get a beautiful email every Monday with your key metrics. Stay informed without logging into the dashboard.",
      color: "bg-secondary/10 text-secondary",
    },
    {
      icon: (
        <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path d="M12 20V10M18 20V4M6 20v-4" />
        </svg>
      ),
      title: "Revenue Forecasting",
      description: "AI-powered projections of your revenue trajectory. Plan ahead with confidence based on real data trends.",
      color: "bg-tertiary/10 text-tertiary",
    },
  ];

  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-display text-3xl sm:text-4xl font-bold">
            Everything you need to <span className="text-primary">understand your revenue</span>
          </h2>
          <p className="mt-4 text-muted text-lg">
            Stop piecing together data from multiple tools. Get the full picture in one place.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="card-hover bg-white rounded-2xl p-7 border border-foreground/5"
            >
              <div className={`w-12 h-12 rounded-xl ${feature.color} flex items-center justify-center mb-5`}>
                {feature.icon}
              </div>
              <h3 className="font-display text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/features"
            className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
          >
            See all features
            <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}

function SocialProof() {
  const testimonials = [
    {
      quote: "Finally, a metrics tool that doesn't cost more than my hosting. Submetrics is exactly what I needed.",
      name: "Sarah K.",
      role: "Founder, TaskFlow",
      avatar: "SK",
    },
    {
      quote: "I used to check Stripe, then open a spreadsheet, then calculate churn manually. Now it's all in one beautiful dashboard.",
      name: "Marcus J.",
      role: "Indie Hacker",
      avatar: "MJ",
    },
    {
      quote: "The weekly email digest alone is worth the price. I know exactly where my SaaS stands every Monday morning.",
      name: "Priya R.",
      role: "Founder, DesignPulse",
      avatar: "PR",
    },
  ];

  return (
    <section className="py-24 bg-white/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl sm:text-4xl font-bold">
            Loved by <span className="text-primary">indie founders</span>
          </h2>
          <p className="mt-4 text-muted text-lg">See what others are saying about Submetrics.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div key={t.name} className="card-hover bg-white rounded-2xl p-7 border border-foreground/5">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="var(--primary)">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>
              <p className="text-foreground/80 text-sm leading-relaxed mb-6">&ldquo;{t.quote}&rdquo;</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-secondary/10 text-secondary flex items-center justify-center text-sm font-bold">
                  {t.avatar}
                </div>
                <div>
                  <p className="text-sm font-semibold">{t.name}</p>
                  <p className="text-xs text-muted">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className="py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative bg-foreground rounded-3xl p-10 sm:p-16 text-center overflow-hidden">
          <div className="relative">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-4">
              Ready to understand your revenue?
            </h2>
            <p className="text-white/60 text-lg mb-8 max-w-xl mx-auto">
              Join hundreds of indie founders who track their SaaS metrics with Submetrics. Setup takes less than 2 minutes.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/dashboard"
                className="w-full sm:w-auto px-8 py-4 bg-primary text-white rounded-xl text-base font-semibold hover:bg-primary/90 transition-all shadow-lg"
              >
                Start Free — No Card Required
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
  );
}

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <LogoCloud />
      <FeaturesPreview />
      <SocialProof />
      <CTASection />
    </>
  );
}
