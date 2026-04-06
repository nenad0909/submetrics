import Link from "next/link";
import Image from "next/image";
import AnimateOnScroll from "@/components/AnimateOnScroll";

const values = [
  {
    title: "Simplicity First",
    description:
      "We believe the best tools are the ones you don't have to think about. No setup wizards, no configuration headaches. Connect Stripe and go.",
  },
  {
    title: "Built for Indie",
    description:
      "We're indie founders too. We build for people like us — bootstrapped, budget-conscious, and focused on shipping. Not enterprise committees.",
  },
  {
    title: "Transparency",
    description:
      "No hidden fees, no surprise pricing tiers, no dark patterns. What you see is what you get. We'll even share our own metrics publicly.",
  },
  {
    title: "Privacy Matters",
    description:
      "Read-only Stripe access. We never store API keys. Your data is encrypted end-to-end. We exist to help you understand your numbers, not exploit them.",
  },
];

const milestones = [
  {
    date: "Q4 2025",
    title: "Idea Born",
    desc: "Frustrated with tracking MRR in spreadsheets, we started building Submetrics.",
  },
  {
    date: "Q1 2026",
    title: "Beta Launch",
    desc: "Launched to 50 beta users on IndieHackers. First paying customer within a week.",
  },
  {
    date: "Q1 2026",
    title: "Mobile Support",
    desc: "Added RevenueCat integration for iOS and Android subscription tracking.",
  },
  {
    date: "Q2 2026",
    title: "Growing Fast",
    desc: "200+ founders on the platform. Launched cohort analysis and revenue forecasting.",
  },
];

const teamStats = [
  { label: "Founded", value: "2025" },
  { label: "Beta Users", value: "200+" },
  { label: "Integrations", value: "6" },
  { label: "Uptime", value: "99.9%" },
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

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section style={heroStyle} className="relative flex flex-col justify-start overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 w-full">
          <p
            className="section-label mb-6 hero-reveal"
            style={{ "--delay": "0ms" } as React.CSSProperties}
          >
            01 / About
          </p>
          <div className="overflow-hidden mb-1">
            <h1
              className="hero-reveal font-display font-extrabold text-white leading-[0.95]"
              style={{ fontSize: "clamp(3rem, 9vw, 8rem)", "--delay": "80ms" } as React.CSSProperties}
            >
              We&apos;re building
            </h1>
          </div>
          <div className="overflow-hidden mb-1">
            <h1
              className="hero-reveal font-display font-extrabold text-white leading-[0.95]"
              style={{ fontSize: "clamp(3rem, 9vw, 8rem)", "--delay": "200ms" } as React.CSSProperties}
            >
              the analytics tool
            </h1>
          </div>
          <div className="overflow-hidden mb-8">
            <h1
              className="hero-reveal font-display font-extrabold leading-[0.95]"
              style={{ fontSize: "clamp(3rem, 9vw, 8rem)", "--delay": "320ms", color: "var(--primary)" } as React.CSSProperties}
            >
              we always wanted.
            </h1>
          </div>
          <p
            className="hero-fade-up text-white/45 text-lg max-w-xl leading-relaxed"
            style={{ "--delay": "500ms" } as React.CSSProperties}
          >
            Submetrics was born out of frustration. As indie founders ourselves, we were tired of
            choosing between expensive enterprise tools and messy spreadsheets. So we built something
            better — simpler, affordable, and designed specifically for founders like us.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section style={stackStyle(11)} className="flex flex-col justify-start">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
          <AnimateOnScroll className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/5 rounded-2xl overflow-hidden">
            {teamStats.map((s, i) => (
              <div
                key={s.label}
                className="fade-up p-10 text-center"
                style={{ backgroundColor: "var(--background)", "--delay": `${i * 80}ms` } as React.CSSProperties}
              >
                <p className="font-display font-extrabold text-white mb-1" style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}>
                  {s.value}
                </p>
                <p className="text-sm text-white/35 uppercase tracking-widest font-medium">{s.label}</p>
              </div>
            ))}
          </AnimateOnScroll>
        </div>
      </section>

      {/* Values */}
      <section style={stackStyle(12)} className="flex flex-col justify-start">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 w-full">
          <AnimateOnScroll className="mb-16">
            <p className="section-label mb-6 fade-up">02 / Our Values</p>
            <h2
              className="reveal-text font-display font-extrabold text-white leading-[0.95]"
              style={{ fontSize: "clamp(2rem, 5vw, 4.5rem)" }}
            >
              What we believe in.
            </h2>
          </AnimateOnScroll>
          <AnimateOnScroll className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {values.map((v, i) => (
              <div
                key={v.title}
                className="fade-up group bg-white/3 border border-white/8 rounded-2xl p-10 hover:border-primary/30 hover:bg-white/5 transition-all duration-300"
                style={{ "--delay": `${i * 80}ms` } as React.CSSProperties}
              >
                <Image
                  src="/icon.svg"
                  alt=""
                  width={30}
                  height={30}
                  className="mb-6 shrink-0 size-[1.875rem]"
                />
                <h3 className="font-display text-xl font-bold text-white mb-3 leading-snug pb-0.5">
                  {v.title}
                </h3>
                <p className="text-sm text-white/45 leading-relaxed">{v.description}</p>
              </div>
            ))}
          </AnimateOnScroll>
        </div>
      </section>

      {/* Timeline */}
      <section style={stackStyle(13)} className="flex flex-col justify-start">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 w-full">
          <AnimateOnScroll className="mb-16">
            <p className="section-label mb-6 fade-up">03 / Our Journey</p>
            <h2
              className="reveal-text font-display font-extrabold text-white leading-[0.95]"
              style={{ fontSize: "clamp(2rem, 5vw, 4.5rem)" }}
            >
              From frustration
              <br />
              <span className="text-primary">to product.</span>
            </h2>
          </AnimateOnScroll>

          <div className="relative">
            <div className="absolute left-[1.125rem] md:left-[2.125rem] top-0 bottom-0 w-px -translate-x-1/2 bg-white/8" />
            <div className="space-y-0">
              {milestones.map((m, i) => (
                <AnimateOnScroll key={m.title} className="relative pl-14 md:pl-24 pb-16 last:pb-0">
                  <div
                    className="fade-in absolute left-2 md:left-6 top-1 w-5 h-5 rounded-full border-2 border-primary bg-background"
                    style={{ "--delay": "0ms" } as React.CSSProperties}
                  />
                  <div className="fade-up" style={{ "--delay": `${80 + i * 60}ms` } as React.CSSProperties}>
                    <span className="section-label mb-3 inline-flex" style={{ "--delay": "0ms" } as React.CSSProperties}>
                      {m.date}
                    </span>
                    <h3 className="font-display text-2xl md:text-3xl font-bold text-white mb-3">{m.title}</h3>
                    <p className="text-white/45 text-base leading-relaxed max-w-lg">{m.desc}</p>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Snapshot */}
      <section style={stackStyle(14)} className="flex flex-col justify-start">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 w-full">
          <AnimateOnScroll className="mb-16">
            <p className="section-label mb-6 fade-up">04 / Snapshot</p>
            <h2
              className="reveal-text font-display font-extrabold text-white leading-[0.95]"
              style={{ fontSize: "clamp(2rem, 5vw, 4.5rem)" }}
            >
              Where we are today.
            </h2>
          </AnimateOnScroll>
          <AnimateOnScroll className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { label: "MRR", value: "$4,200", color: "text-primary" },
              { label: "Customers", value: "89", color: "text-secondary" },
              { label: "Growth", value: "+18%", color: "text-tertiary" },
            ].map((m, i) => (
              <div
                key={m.label}
                className="fade-up bg-white/3 border border-white/8 rounded-2xl p-8"
                style={{ "--delay": `${i * 100}ms` } as React.CSSProperties}
              >
                <p className="text-xs text-white/35 font-medium uppercase tracking-widest mb-3">{m.label}</p>
                <p className={`font-display font-extrabold ${m.color}`} style={{ fontSize: "clamp(2.5rem, 5vw, 3.5rem)" }}>
                  {m.value}
                </p>
              </div>
            ))}
          </AnimateOnScroll>
        </div>
      </section>

      {/* CTA */}
      <section style={stackStyle(15)} className="flex flex-col justify-start">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24 w-full text-center">
          <AnimateOnScroll>
            <p className="section-label justify-center mb-8 fade-up">05 / Join Us</p>
            <h2
              className="reveal-text font-display font-extrabold text-white leading-[0.95] mb-6"
              style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}
            >
              Join us on
              <br />
              <span className="text-primary">this journey.</span>
            </h2>
            <p
              className="fade-up text-white/45 text-lg mb-10 max-w-xl mx-auto leading-relaxed"
              style={{ "--delay": "200ms" } as React.CSSProperties}
            >
              We&apos;re building Submetrics in public and we&apos;d love for you to be part of the story.
            </p>
            <div
              className="fade-up flex flex-col sm:flex-row items-center justify-center gap-4"
              style={{ "--delay": "320ms" } as React.CSSProperties}
            >
              <Link
                href="/dashboard"
                className="px-10 py-4 bg-primary text-white rounded-xl text-base font-semibold hover:bg-primary/90 transition-all animate-pulse-glow"
              >
                Start Free Trial
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
    </>
  );
}
