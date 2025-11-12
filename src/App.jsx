import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Sparkles, ShieldCheck, Zap, LineChart, Globe2, Play } from 'lucide-react'
import Spline from '@splinetool/react-spline'

function Stat({ label, value }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-5">
      <div className="text-xs uppercase tracking-widest text-white/60">{label}</div>
      <div className="mt-1 text-2xl font-semibold text-white">{value}</div>
    </div>
  )
}

function Feature({ icon: Icon, title, description }) {
  return (
    <motion.div
      initial={{ y: 16, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.5 }}
      className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl hover:bg-white/10 transition-colors"
    >
      <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-violet-500/30 to-cyan-400/30 grid place-items-center border border-white/10">
        <Icon className="h-6 w-6 text-white" />
      </div>
      <h3 className="mt-4 text-lg font-semibold text-white">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-white/70">{description}</p>
      <div className="mt-4 text-sm text-cyan-300/80 opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1">
        Learn more <ArrowRight className="h-4 w-4" />
      </div>
    </motion.div>
  )
}

export default function App() {
  const [ctaHover, setCtaHover] = useState(false)

  return (
    <div className="min-h-screen bg-[#05060a] text-white">
      {/* Background decorations */}
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(50%_50%_at_50%_0%,rgba(99,102,241,0.25),rgba(5,6,10,0))]" />
        <div className="absolute -top-48 left-1/2 -translate-x-1/2 h-[38rem] w-[38rem] rounded-full blur-3xl bg-gradient-to-br from-fuchsia-500/20 via-violet-500/20 to-cyan-500/20" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.06),transparent)]" />
      </div>

      {/* Navbar */}
      <nav className="sticky top-0 z-40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl">
            <div className="flex items-center justify-between px-4 py-3">
              <a href="#" className="flex items-center gap-2">
                <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-violet-500 via-fuchsia-500 to-cyan-400 p-[2px]">
                  <div className="h-full w-full rounded-[10px] bg-black/70 grid place-items-center">
                    <Sparkles className="h-5 w-5 text-white" />
                  </div>
                </div>
                <span className="font-semibold tracking-tight">NeonChain</span>
              </a>
              <div className="hidden md:flex items-center gap-8">
                {['Features', 'Why Us', 'Ecosystem', 'Docs'].map((l) => (
                  <a key={l} href={`#${l.toLowerCase().replace(/ /g,'-')}`} className="text-sm text-white/70 hover:text-white transition-colors">
                    {l}
                  </a>
                ))}
                <a href="#get-started" className="text-sm font-medium text-black bg-white rounded-xl px-4 py-2 hover:bg-white/90 transition-colors">
                  Launch dApp
                </a>
              </div>
              <button className="md:hidden rounded-xl border border-white/10 p-2 text-white/80" aria-label="menu">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-white/80"><path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative pt-20 md:pt-24" id="home">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
          <div className="relative z-10">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-balance text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight"
            >
              The futuristic web3 stack for builders
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0, transition: { delay: 0.1 } }}
              className="mt-4 text-lg text-white/70"
            >
              Ship trustless, scalable dApps with a minimalist, lightning-fast developer experience.
            </motion.p>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0, transition: { delay: 0.2 } }} className="mt-8 flex flex-wrap items-center gap-3">
              <button
                onMouseEnter={() => setCtaHover(true)}
                onMouseLeave={() => setCtaHover(false)}
                className="relative inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-black font-medium shadow-[0_0_0_1px_rgba(255,255,255,0.15)_inset] transition-transform hover:scale-[1.02] active:scale-[0.99]"
              >
                <span>Deploy your first contract</span>
                <ArrowRight className="h-4 w-4" />
                {ctaHover && (
                  <motion.span layoutId="spark" className="absolute -right-2 -top-2 grid place-items-center" initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}>
                    <span className="h-6 w-6 rounded-full bg-gradient-to-br from-fuchsia-500 to-cyan-400 blur-[2px] opacity-70" />
                  </motion.span>
                )}
              </button>
              <button className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-white/90 backdrop-blur-xl hover:bg-white/10 transition-colors">
                <Play className="h-4 w-4" /> Quick demo
              </button>
            </motion.div>

            <div className="mt-8 grid grid-cols-3 gap-3 max-w-md">
              <Stat label="TX/sec" value="12,400+" />
              <Stat label="Gas savings" value="-62%" />
              <Stat label="Nodes" value="> 3,000" />
            </div>
          </div>

          <div className="relative h-[520px] w-full rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl overflow-hidden">
            <div className="absolute inset-0">
              <Spline scene="https://prod.spline.design/VyGeZv58yuk8j7Yy/scene.splinecode" style={{ width: '100%', height: '100%' }} />
            </div>
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#05060a] via-transparent to-transparent" />
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="relative mt-20 md:mt-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 flex items-center gap-2 text-sm text-cyan-300/80">
            <div className="h-6 w-6 rounded-md bg-gradient-to-br from-violet-500/40 to-cyan-400/40 grid place-items-center border border-white/10">
              <Zap className="h-3.5 w-3.5" />
            </div>
            Built for scale and simplicity
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <Feature icon={ShieldCheck} title="Security-first" description="Audited primitives, formal verification hooks, and safe defaults across the stack." />
            <Feature icon={Zap} title="Blazing performance" description="Parallelized VM, EVM-compat, and near-instant finality for silky user flows." />
            <Feature icon={LineChart} title="On-chain analytics" description="Real-time observability with prebuilt dashboards and anomaly alerts." />
            <Feature icon={Globe2} title="Multi-chain ready" description="Seamless cross-chain messaging and canonical bridges out of the box." />
            <Feature icon={Sparkles} title="DX that delights" description="CLI, templates, and SDKs that get you from idea to mainnet in minutes." />
            <Feature icon={ArrowRight} title="Composable by design" description="Plug into a growing ecosystem of modules for identity, payments, and more." />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="get-started" className="relative mt-24 mb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-8 sm:p-10"
          >
            <div className="pointer-events-none absolute -top-24 -left-24 h-64 w-64 rounded-full bg-gradient-to-br from-fuchsia-500/40 to-cyan-400/40 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-24 -right-24 h-64 w-64 rounded-full bg-gradient-to-br from-violet-500/40 to-cyan-400/40 blur-3xl" />
            <div className="relative">
              <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h2 className="text-2xl sm:text-3xl font-semibold">Ready to build the future?</h2>
                  <p className="mt-2 text-white/70">Kickstart your dApp with templates, SDKs, and a deploy button that just works.</p>
                </div>
                <div className="flex gap-3">
                  <a href="#" className="rounded-xl bg-white px-5 py-3 text-black font-medium hover:bg-white/90">Create a project</a>
                  <a href="#" className="rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-white/90 hover:bg-white/10">Read the docs</a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative border-t border-white/10/20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 text-white/60 text-sm">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-violet-500 via-fuchsia-500 to-cyan-400 p-[2px]">
                <div className="h-full w-full rounded-md bg-black/70 grid place-items-center">
                  <Sparkles className="h-4 w-4 text-white" />
                </div>
              </div>
              <span>NeonChain</span>
            </div>
            <div className="flex items-center gap-6">
              <a className="hover:text-white" href="#">Twitter</a>
              <a className="hover:text-white" href="#">Discord</a>
              <a className="hover:text-white" href="#">GitHub</a>
            </div>
            <div>© {new Date().getFullYear()} NeonChain. All rights reserved.</div>
          </div>
        </div>
      </footer>
    </div>
  )
}
