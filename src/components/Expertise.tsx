import { FadeIn } from './ui'
import { expertise } from '../data'
export default function Expertise() {
  return (<section id="expertise" className="relative bg-white rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 pb-32">
    <h2 className="text-[#0C0C0C] font-black uppercase text-center mb-16 sm:mb-20 md:mb-28" style={{ fontSize: 'clamp(3rem,12vw,160px)' }}>Expertise</h2>
    <div className="max-w-5xl mx-auto">{expertise.map((s, i) => (
      <FadeIn key={s.n} delay={i * 0.1}><div className="flex gap-6 md:gap-12 py-8 sm:py-10 md:py-12 border-t" style={{ borderColor: 'rgba(12,12,12,.15)' }}>
        <span className="font-black text-[#0C0C0C] leading-none" style={{ fontSize: 'clamp(3rem,10vw,140px)' }}>{s.n}</span>
        <div className="flex flex-col gap-3"><h3 className="font-medium uppercase text-[#0C0C0C]" style={{ fontSize: 'clamp(1rem,2.2vw,2.1rem)' }}>{s.t}</h3>
          <p className="font-light leading-relaxed max-w-2xl text-[#0C0C0C] opacity-60" style={{ fontSize: 'clamp(0.85rem,1.6vw,1.25rem)' }}>{s.d}</p></div></div></FadeIn>))}</div></section>)
}
