"use client";

import { useState } from "react";

const periods = ["7D", "30D", "90D", "12M"];

const metrics = [
  { label: "MRR", value: "$12,450", change: "+12.3%", trend: "up", icon: "dollar" },
  { label: "ARR", value: "$149,400", change: "+12.3%", trend: "up", icon: "chart" },
  { label: "Churn Rate", value: "3.2%", change: "-0.5%", trend: "down", icon: "users" },
  { label: "Active Subscribers", value: "847", change: "+23", trend: "up", icon: "people" },
  { label: "Avg LTV", value: "$342", change: "+$18", trend: "up", icon: "heart" },
  { label: "New MRR", value: "$2,340", change: "+8.1%", trend: "up", icon: "plus" },
];

const mrrData = [
  { month: "Apr", total: 7200, new: 1800, churned: 400 },
  { month: "May", total: 7800, new: 1200, churned: 600 },
  { month: "Jun", total: 8100, new: 1500, churned: 500 },
  { month: "Jul", total: 8900, new: 1900, churned: 700 },
  { month: "Aug", total: 9200, new: 1600, churned: 300 },
  { month: "Sep", total: 9800, new: 2100, churned: 800 },
  { month: "Oct", total: 10200, new: 1700, churned: 500 },
  { month: "Nov", total: 10800, new: 2000, churned: 600 },
  { month: "Dec", total: 11100, new: 1800, churned: 700 },
  { month: "Jan", total: 11500, new: 1900, churned: 400 },
  { month: "Feb", total: 11900, new: 2200, churned: 800 },
  { month: "Mar", total: 12450, new: 2340, churned: 650 },
];

const recentCancellations = [
  { name: "Alex Thompson", plan: "Growth", reason: "Too expensive", date: "2 hours ago", mrr: "$49" },
  { name: "Lisa Chen", plan: "Starter", reason: "Switched to competitor", date: "5 hours ago", mrr: "$19" },
  { name: "David Park", plan: "Growth", reason: "No longer needed", date: "1 day ago", mrr: "$49" },
  { name: "Emma Wilson", plan: "Pro", reason: "Company downsizing", date: "2 days ago", mrr: "$99" },
  { name: "James Kumar", plan: "Starter", reason: "Missing features", date: "3 days ago", mrr: "$19" },
];

const cohortData = [
  { month: "Oct '25", m0: 100, m1: 88, m2: 79, m3: 72, m4: 68, m5: 65 },
  { month: "Nov '25", m0: 100, m1: 91, m2: 82, m3: 76, m4: 71, m5: null },
  { month: "Dec '25", m0: 100, m1: 87, m2: 80, m3: 74, m4: null, m5: null },
  { month: "Jan '26", m0: 100, m1: 92, m2: 85, m3: null, m4: null, m5: null },
  { month: "Feb '26", m0: 100, m1: 89, m2: null, m3: null, m4: null, m5: null },
  { month: "Mar '26", m0: 100, m1: null, m2: null, m3: null, m4: null, m5: null },
];

const platformData = [
  { platform: "Web (Stripe)", mrr: 7800, pct: 62.7, color: "var(--primary)" },
  { platform: "iOS", mrr: 3100, pct: 24.9, color: "var(--secondary)" },
  { platform: "Android", mrr: 1550, pct: 12.4, color: "var(--tertiary)" },
];

function getCohortColor(value: number | null): string {
  if (value === null) return "bg-foreground/5 text-transparent";
  if (value >= 90) return "bg-tertiary/20 text-tertiary";
  if (value >= 80) return "bg-tertiary/15 text-tertiary/80";
  if (value >= 70) return "bg-yellow-100 text-yellow-700";
  if (value >= 60) return "bg-primary/10 text-primary";
  return "bg-primary/20 text-primary";
}

export default function DashboardPage() {
  const [period, setPeriod] = useState("30D");
  const maxMrr = Math.max(...mrrData.map((d) => d.total));

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
          <div>
            <h1 className="font-display text-2xl sm:text-3xl font-bold">Dashboard</h1>
            <p className="text-sm text-muted mt-1">Welcome back! Here&apos;s your revenue overview.</p>
          </div>
          <div className="flex items-center gap-2">
            {/* Period selector */}
            <div className="flex bg-white rounded-lg p-1 border border-foreground/10">
              {periods.map((p) => (
                <button
                  key={p}
                  onClick={() => setPeriod(p)}
                  className={`px-3 py-1.5 text-xs font-medium rounded-md transition-all ${
                    period === p
                      ? "bg-primary text-white shadow-sm"
                      : "text-muted hover:text-foreground"
                  }`}
                >
                  {p}
                </button>
              ))}
            </div>
            {/* Connected badges */}
            <div className="hidden sm:flex items-center gap-1.5 ml-2">
              {["Stripe", "iOS", "Android"].map((p) => (
                <span
                  key={p}
                  className="flex items-center gap-1 px-2 py-1 rounded-md bg-tertiary/10 text-tertiary text-xs font-medium"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-tertiary" />
                  {p}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Metric Cards */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
          {metrics.map((m) => (
            <div key={m.label} className="bg-white rounded-xl p-4 border border-foreground/5 card-hover">
              <p className="text-xs text-muted font-medium truncate">{m.label}</p>
              <p className="text-xl sm:text-2xl font-display font-bold mt-1">{m.value}</p>
              <p className={`text-xs font-semibold mt-1 ${m.trend === "up" ? "text-tertiary" : "text-primary"}`}>
                {m.change}
              </p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
          {/* MRR Chart */}
          <div className="lg:col-span-2 bg-white rounded-2xl p-6 border border-foreground/5">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="font-display font-semibold">MRR Over Time</h3>
                <p className="text-xs text-muted mt-0.5">Monthly Recurring Revenue trend</p>
              </div>
              <div className="flex items-center gap-4 text-xs">
                <span className="flex items-center gap-1.5">
                  <span className="w-3 h-1.5 rounded-full bg-primary" /> Total
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-3 h-1.5 rounded-full bg-tertiary" /> New
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-3 h-1.5 rounded-full bg-secondary" /> Churned
                </span>
              </div>
            </div>
            <div className="flex items-end gap-2" style={{ height: "224px" }}>
              {mrrData.map((d) => {
                const barHeight = Math.round((d.total / maxMrr) * 180);
                return (
                  <div key={d.month} className="flex-1 flex flex-col items-center gap-1">
                    <div
                      className="w-full bg-primary/80 rounded-t-md transition-all duration-500 relative group cursor-pointer hover:bg-primary"
                      style={{ height: `${barHeight}px` }}
                    >
                      <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-foreground text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                        ${d.total.toLocaleString()}
                      </div>
                    </div>
                    <span className="text-[10px] text-muted">{d.month}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Platform Breakdown */}
          <div className="bg-white rounded-2xl p-6 border border-foreground/5">
            <h3 className="font-display font-semibold mb-1">Platform Revenue</h3>
            <p className="text-xs text-muted mb-6">MRR by payment platform</p>

            {/* Donut visualization */}
            <div className="flex justify-center mb-6">
              <div className="relative w-40 h-40">
                <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90">
                  {platformData.reduce(
                    (acc, d, i) => {
                      const circumference = 2 * Math.PI * 40;
                      const strokeLength = (d.pct / 100) * circumference;
                      acc.elements.push(
                        <circle
                          key={d.platform}
                          cx="50"
                          cy="50"
                          r="40"
                          fill="none"
                          stroke={d.color}
                          strokeWidth="12"
                          strokeDasharray={`${strokeLength} ${circumference - strokeLength}`}
                          strokeDashoffset={`${-acc.offset}`}
                          className="transition-all duration-500"
                        />
                      );
                      acc.offset += strokeLength;
                      return acc;
                    },
                    { elements: [] as React.ReactNode[], offset: 0 }
                  ).elements}
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-2xl font-display font-bold">$12.4k</span>
                  <span className="text-xs text-muted">Total MRR</span>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              {platformData.map((d) => (
                <div key={d.platform} className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full" style={{ background: d.color }} />
                    <span className="text-sm">{d.platform}</span>
                  </div>
                  <div className="text-right">
                    <span className="text-sm font-semibold">${d.mrr.toLocaleString()}</span>
                    <span className="text-xs text-muted ml-2">{d.pct}%</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          {/* Cohort Retention */}
          <div className="bg-white rounded-2xl p-6 border border-foreground/5">
            <h3 className="font-display font-semibold mb-1">Cohort Retention</h3>
            <p className="text-xs text-muted mb-4">How monthly cohorts retain over time</p>

            <div className="overflow-x-auto">
              <table className="w-full text-xs">
                <thead>
                  <tr className="text-muted">
                    <th className="text-left py-2 pr-3 font-medium">Cohort</th>
                    <th className="py-2 px-1 font-medium">M0</th>
                    <th className="py-2 px-1 font-medium">M1</th>
                    <th className="py-2 px-1 font-medium">M2</th>
                    <th className="py-2 px-1 font-medium">M3</th>
                    <th className="py-2 px-1 font-medium">M4</th>
                    <th className="py-2 px-1 font-medium">M5</th>
                  </tr>
                </thead>
                <tbody>
                  {cohortData.map((row) => (
                    <tr key={row.month}>
                      <td className="py-1.5 pr-3 font-medium text-foreground/70">{row.month}</td>
                      {[row.m0, row.m1, row.m2, row.m3, row.m4, row.m5].map((val, i) => (
                        <td key={i} className="py-1.5 px-1">
                          <span
                            className={`block text-center py-1.5 rounded-md font-semibold ${getCohortColor(val)}`}
                          >
                            {val !== null ? `${val}%` : "—"}
                          </span>
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Recent Cancellations */}
          <div className="bg-white rounded-2xl p-6 border border-foreground/5">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="font-display font-semibold">Recent Cancellations</h3>
                <p className="text-xs text-muted mt-0.5">Customers who recently churned</p>
              </div>
              <span className="px-2 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
                5 this week
              </span>
            </div>

            <div className="space-y-3">
              {recentCancellations.map((c) => (
                <div
                  key={c.name}
                  className="flex items-center justify-between py-2.5 border-b border-foreground/5 last:border-0"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xs font-bold">
                      {c.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </div>
                    <div>
                      <p className="text-sm font-medium">{c.name}</p>
                      <p className="text-xs text-muted">{c.reason}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-semibold text-primary">-{c.mrr}</p>
                    <p className="text-xs text-muted">{c.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Platform Comparison Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Trial Conversion */}
          <div className="bg-white rounded-2xl p-6 border border-foreground/5">
            <h3 className="font-display font-semibold mb-1">Trial Conversion</h3>
            <p className="text-xs text-muted mb-4">Trial to paid by platform</p>
            <div className="space-y-4">
              {[
                { platform: "iOS", rate: 42, color: "bg-secondary" },
                { platform: "Android", rate: 31, color: "bg-tertiary" },
                { platform: "Web", rate: 56, color: "bg-primary" },
              ].map((d) => (
                <div key={d.platform}>
                  <div className="flex justify-between text-sm mb-1">
                    <span>{d.platform}</span>
                    <span className="font-semibold">{d.rate}%</span>
                  </div>
                  <div className="w-full h-2 bg-foreground/5 rounded-full overflow-hidden">
                    <div
                      className={`h-full ${d.color} rounded-full transition-all duration-700`}
                      style={{ width: `${d.rate}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Refund Rate */}
          <div className="bg-white rounded-2xl p-6 border border-foreground/5">
            <h3 className="font-display font-semibold mb-1">Refund Rate</h3>
            <p className="text-xs text-muted mb-4">By payment platform</p>
            <div className="space-y-4">
              {[
                { platform: "Apple", rate: 8.2, color: "bg-secondary" },
                { platform: "Google", rate: 3.1, color: "bg-tertiary" },
                { platform: "Stripe", rate: 1.4, color: "bg-primary" },
              ].map((d) => (
                <div key={d.platform}>
                  <div className="flex justify-between text-sm mb-1">
                    <span>{d.platform}</span>
                    <span className="font-semibold">{d.rate}%</span>
                  </div>
                  <div className="w-full h-2 bg-foreground/5 rounded-full overflow-hidden">
                    <div
                      className={`h-full ${d.color} rounded-full transition-all duration-700`}
                      style={{ width: `${d.rate * 5}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Subscriber Growth */}
          <div className="bg-white rounded-2xl p-6 border border-foreground/5">
            <h3 className="font-display font-semibold mb-1">Subscriber Growth</h3>
            <p className="text-xs text-muted mb-4">Mobile platforms (last 6 months)</p>
            <div className="flex items-end gap-1.5 h-32">
              {[
                { ios: 180, android: 120 },
                { ios: 210, android: 140 },
                { ios: 240, android: 155 },
                { ios: 275, android: 170 },
                { ios: 310, android: 185 },
                { ios: 340, android: 200 },
              ].map((d, i) => (
                <div key={i} className="flex-1 flex gap-0.5 items-end h-full">
                  <div
                    className="flex-1 bg-secondary/70 rounded-t-sm transition-all duration-500 hover:bg-secondary"
                    style={{ height: `${(d.ios / 340) * 100}%` }}
                    title={`iOS: ${d.ios}`}
                  />
                  <div
                    className="flex-1 bg-tertiary/70 rounded-t-sm transition-all duration-500 hover:bg-tertiary"
                    style={{ height: `${(d.android / 340) * 100}%` }}
                    title={`Android: ${d.android}`}
                  />
                </div>
              ))}
            </div>
            <div className="flex justify-center gap-4 mt-3 text-xs">
              <span className="flex items-center gap-1">
                <span className="w-2.5 h-2.5 rounded-sm bg-secondary" /> iOS
              </span>
              <span className="flex items-center gap-1">
                <span className="w-2.5 h-2.5 rounded-sm bg-tertiary" /> Android
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
