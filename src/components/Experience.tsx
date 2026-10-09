import { useRef } from 'react'
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion'
import { jobs } from '../data'
type Job = typeof jobs[number]
function Card({ j, i, total, p }: { j: Job; i: number; total: number; p: MotionValue<number> }) {
  const target = 1 - (total - 1 - i) * 0.03
  const scale = useTransform(p, [i / total, 1], [1, target])
  return (<div className="sticky top-24 md:top-32 min-h-[85vh]"><motion.div style={{ scale, top: i * 28, transformOrigin: 'top center' }}
    className="relative rounded-[40px] sm:rounded-[50px] md:rounded-[60px] border-2 border-[#D7E2EA] bg-[#0C0C0C] p-5 sm:p-7 md:p-10">
    <div className="flex flex-wrap items-start justify-between gap-4">
      <span className="hero-heading font-black leading-none" style={{ fontSize: 'clamp(3rem,10vw,140px)' }}>{j.n}</span>
      <div className="text-right text-[#D7E2EA]"><div className="text-sm sm:text-base uppercase tracking-widest opacity-60">{j.dates}</div>
        {j.current && <span className="inline-block mt-2 rounded-full border-2 border-[#6ED6B0] text-[#6ED6B0] px-4 py-1 text-xs uppercase tracking-widest">Current role</span>}</div></div>
    <div className="mt-4 text-[#D7E2EA]"><div className="text-[#5AA9FF] uppercase tracking-widest text-sm">{j.co} · {j.loc}</div>
      <h3 className="font-black uppercase leading-tight mt-1" style={{ fontSize: 'clamp(1.6rem,4vw,3.5rem)' }}>{j.role}</h3>
      <p className="font-light leading-relaxed max-w-3xl mt-4 opacity-80" style={{ fontSize: 'clamp(0.9rem,1.5vw,1.2rem)' }}>{j.d}</p>
      {j.pts.length > 0 && <ul className="mt-6 grid md:grid-cols-2 gap-x-8 gap-y-2 font-light opacity-80">{j.pts.map((t) => <li key={t} className="flex gap-3"><span className="text-[#5AA9FF]">▸</span>{t}</li>)}</ul>}
    </div></motion.div></div>)
}
export default function Experience() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end end'] })
  return (<section id="experience" className="relative z-10 -mt-10 sm:-mt-12 md:-mt-14 bg-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 pt-20 sm:pt-24 md:pt-32">
    <h2 className="hero-heading font-black uppercase leading-none tracking-tight text-center mb-16" style={{ fontSize: 'clamp(3rem,12vw,160px)' }}>Experience</h2>
    <div ref={ref} className="max-w-6xl mx-auto">{jobs.map((j, i) => <Card key={j.n} j={j} i={i} total={jobs.length} p={scrollYProgress} />)}</div></section>)
}
