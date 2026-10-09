import { useEffect, useRef, useState } from 'react'
import { ServerCog, Network, Cloud, Activity, ShieldCheck, Wrench } from 'lucide-react'
const items = [[ServerCog, 'Systems'], [Network, 'Networking'], [Cloud, 'AWS & Cloud'], [Activity, 'Reliability'], [ShieldCheck, 'Security'], [Wrench, 'Hardware']] as const
const W = items.length * (360 + 12)
function Row({ list, x }: { list: (typeof items[number])[]; x: number }) {
  return (<div className="flex gap-3 w-max" style={{ transform: `translateX(${x}px)`, willChange: 'transform' }}>
    {[...list, ...list, ...list].map(([Icon, label], i) => (
      <div key={i} className="shrink-0 w-[360px] h-[220px] rounded-2xl border border-[#D7E2EA]/20 p-6 flex flex-col justify-between" style={{ background: 'linear-gradient(160deg,#101A2B,#0C0C0C)' }}>
        <Icon className="text-[#5AA9FF]" size={36} strokeWidth={1.4} /><span className="hero-heading text-4xl font-black uppercase">{label}</span></div>))}</div>)
}
export default function Marquee() {
  const ref = useRef<HTMLElement>(null); const [off, setOff] = useState(0)
  useEffect(() => {
    const f = () => { const t = (ref.current?.offsetTop ?? 0); setOff((window.scrollY - t + window.innerHeight) * 0.3) }
    f(); window.addEventListener('scroll', f, { passive: true }); return () => window.removeEventListener('scroll', f)
  }, [])
  const a = [...items], b = [...items].reverse()
  return (<section ref={ref} className="bg-[#0C0C0C] pt-24 sm:pt-32 md:pt-40 pb-10 flex flex-col gap-3 overflow-hidden" aria-hidden="true">
    <Row list={a} x={off - W} /><Row list={b} x={-W - off} /></section>)
}
