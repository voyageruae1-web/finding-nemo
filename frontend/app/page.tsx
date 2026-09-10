"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Building2,
  ChartNoAxesCombined,
  Database,
  Map,
  Search,
  TrendingUp,
  Waves,
} from "lucide-react";

export default function Home() {
  const features = [
    {
      icon: Search,
      title: "Property Intelligence",
      description:
        "Discover commercial properties with powerful data-driven insights.",
    },
    {
      icon: TrendingUp,
      title: "Market Trends",
      description:
        "Analyze real-time market activity, pricing, demand, and opportunities.",
    },
    {
      icon: ChartNoAxesCombined,
      title: "Sales Velocity",
      description:
        "Understand how quickly commercial properties are selling and renting.",
    },
    {
      icon: Database,
      title: "Property Records",
      description:
        "Explore detailed property information and historical market data.",
    },
  ];

  const metrics = [
    {
      value: "Real-Time",
      label: "Market Intelligence",
    },
    {
      value: "Nationwide",
      label: "Property Coverage",
    },
    {
      value: "AI Powered",
      label: "Market Analysis",
    },
  ];

  return (
    <main className="min-h-screen overflow-hidden bg-[#050B18] text-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[500px] w-[900px] -translate-x-1/2 rounded-full bg-blue-600/10 blur-[140px]" />

        <div className="absolute right-0 top-[400px] h-[400px] w-[400px] rounded-full bg-cyan-500/10 blur-[120px]" />

        <div className="absolute left-0 top-[700px] h-[300px] w-[300px] rounded-full bg-blue-700/10 blur-[100px]" />
      </div>

      <nav className="relative z-10 mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-8">
        <div className="flex items-center gap-3">
          <div className="relative flex h-11 w-11 items-center justify-center overflow-hidden rounded-xl border border-cyan-400/30 bg-cyan-400/10">
            <Waves className="h-6 w-6 text-cyan-300" />

            <div className="absolute inset-0 rounded-xl bg-cyan-400/10 blur-md" />
          </div>

          <div>
            <h1 className="text-lg font-bold tracking-[0.18em] text-white">
              FINDING <span className="text-cyan-400">NEMO</span>
            </h1>

            <p className="text-[8px] tracking-[0.28em] text-slate-400">
              REAL ESTATE INTELLIGENCE
            </p>
          </div>
        </div>

        <div className="hidden items-center gap-8 text-sm text-slate-300 md:flex">
          <a href="#platform" className="transition hover:text-cyan-400">
            Platform
          </a>

          <a href="#intelligence" className="transition hover:text-cyan-400">
            Intelligence
          </a>

          <a href="#markets" className="transition hover:text-cyan-400">
            Markets
          </a>

          <a href="#about" className="transition hover:text-cyan-400">
            About
          </a>
        </div>

        <button className="rounded-xl border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm font-medium text-cyan-300 transition hover:bg-cyan-400 hover:text-[#050B18]">
          Explore Platform
        </button>
      </nav>

      <section className="relative z-10 mx-auto flex min-h-[700px] max-w-7xl flex-col items-center justify-center px-6 pb-24 pt-20 text-center lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/5 px-4 py-2 text-sm text-cyan-300"
        >
          <span className="h-2 w-2 animate-pulse rounded-full bg-cyan-400" />

          NEXT GENERATION PROPTECH INTELLIGENCE
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="max-w-5xl text-5xl font-bold leading-tight tracking-tight md:text-7xl"
        >
          Discover the
          <span className="block bg-gradient-to-r from-cyan-300 via-blue-400 to-cyan-300 bg-clip-text text-transparent">
            Intelligence Behind
          </span>
          Commercial Real Estate.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="mt-8 max-w-3xl text-base leading-8 text-slate-400 md:text-lg"
        >
          Finding Nemo transforms property data into actionable intelligence.
          Analyze market trends, commercial property prices, rent, sales
          velocity, demographics, and investment opportunities.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-10 flex flex-col gap-4 sm:flex-row"
        >
          <button className="group flex items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 px-7 py-4 font-semibold text-[#050B18] transition hover:scale-105">
            Explore Intelligence

            <ArrowRight className="h-5 w-5 transition group-hover:translate-x-1" />
          </button>

          <button className="flex items-center justify-center gap-3 rounded-xl border border-white/10 bg-white/5 px-7 py-4 font-medium text-white transition hover:border-cyan-400/40 hover:bg-cyan-400/5">
            <Map className="h-5 w-5 text-cyan-400" />

            Explore Markets
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="relative mt-20 w-full max-w-6xl"
        >
          <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-cyan-500/20 via-blue-500/10 to-cyan-500/20 blur-xl" />

          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#081225]/80 p-6 backdrop-blur-xl md:p-8">
            <div className="mb-8 flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
              <div className="text-left">
                <p className="text-xs tracking-[0.25em] text-cyan-400">
                  MARKET INTELLIGENCE
                </p>

                <h3 className="mt-2 text-2xl font-semibold">
                  Commercial Market Overview
                </h3>
              </div>

              <div className="rounded-lg border border-green-400/20 bg-green-400/5 px-3 py-2 text-sm text-green-300">
                ● LIVE DATA ENGINE
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              {metrics.map((metric, index) => (
                <motion.div
                  key={metric.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  className="rounded-2xl border border-white/5 bg-white/[0.03] p-6 text-left"
                >
                  <p className="text-2xl font-bold text-cyan-300">
                    {metric.value}
                  </p>

                  <p className="mt-2 text-sm text-slate-400">
                    {metric.label}
                  </p>
                </motion.div>
              ))}
            </div>

            <div className="mt-6 grid min-h-[180px] place-items-center rounded-2xl border border-dashed border-cyan-400/20 bg-gradient-to-br from-cyan-400/[0.04] to-blue-500/[0.03]">
              <div className="text-center">
                <Building2 className="mx-auto h-10 w-10 text-cyan-400" />

                <p className="mt-4 text-sm text-slate-400">
                  Interactive Property Intelligence Dashboard
                </p>

                <p className="mt-2 text-xs text-slate-600">
                  Coming in the next phases
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      <section
        id="platform"
        className="relative z-10 mx-auto max-w-7xl px-6 py-24 lg:px-8"
      >
        <div className="mb-14 text-center">
          <p className="text-sm font-medium tracking-[0.25em] text-cyan-400">
            THE PLATFORM
          </p>

          <h2 className="mt-4 text-4xl font-bold">
            Everything You Need to Understand a Market
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-slate-400">
            A unified commercial real estate intelligence platform built to
            transform complex market data into clear decisions.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="group rounded-2xl border border-white/10 bg-white/[0.02] p-7 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/30 hover:bg-cyan-400/[0.03]"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-400/10">
                  <Icon className="h-6 w-6 text-cyan-400" />
                </div>

                <h3 className="mt-6 text-xl font-semibold">
                  {feature.title}
                </h3>

                <p className="mt-3 leading-7 text-slate-400">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      <section className="relative z-10 border-t border-white/5 px-6 py-10 text-center">
        <p className="text-sm text-slate-500">
          © 2026 Finding Nemo — Real Estate Intelligence Platform
        </p>

        <p className="mt-2 text-xs tracking-[0.2em] text-cyan-500/70">
          ANALYZE • DISCOVER • INVEST
        </p>
      </section>
    </main>
  );
}