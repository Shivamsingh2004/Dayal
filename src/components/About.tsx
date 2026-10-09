import { ServerCog, Network, Cloud, ShieldCheck } from 'lucide-react'
import { FadeIn, AnimatedText, ContactButton } from './ui'
import { EMAIL } from '../data'
const deco = [
  { I: ServerCog, c: 'top-[4%] left-[1%] sm:left-[2%] md:left-[4%] w-[90px] sm:w-[130px] md:w-[170px]', x: -80, d: 0.1 },
  { I: Network, c: 'bottom-[8%] left-[3%] sm:left-[6%] md:left-[10%] w-[80px] sm:w-[110px] md:w-[140px]', x: -80, d: 0.25 },
  { I: Cloud, c: 'top-[4%] right-[1%] sm:right-[2%] md:right-[4%] w-[90px] sm:w-[130px] md:w-[170px]', x: 80, d: 0.15 },
  { I: ShieldCheck, c: 'bottom-[8%] right-[3%] sm:right-[6%] md:right-[10%] w-[80px] sm:w-[110px] md:w-[140px]', x: 80, d: 0.3 },
]
const facts = [['15+', 'Years in IT'], ['Droisys', 'Current employer'], ['West Delhi', 'Based in'], ['Hindi · English', 'Languages']]
export default function About() {
  return (<section id="about" className="relative min-h-screen flex flex-col items-center justify-center px-5 sm:px-8 md:px-10 py-20 gap-16 sm:gap-20 md:gap-24" style={{ overflowX: 'clip' }}>
    {deco.map(({ I, c, x, d }, i) => (<div key={i} className={`absolute ${c}`}><FadeIn x={x} y={0} delay={d} duration={0.9}>
      <div className="aspect-square rounded-3xl border border-[#D7E2EA]/20 grid place-items-center" style={{ background: 'linear-gradient(160deg,#142136,#0C0C0C)' }}><I className="text-[#5AA9FF] w-1/2 h-1/2" strokeWidth={1.3} /></div></FadeIn></div>))}
    <div className="relative flex flex-col items-center gap-10 sm:gap-14 md:gap-16">
      <FadeIn y={40}><h2 className="hero-heading font-black uppercase leading-none tracking-tight text-center" style={{ fontSize: 'clamp(3rem,12vw,160px)' }}>About me</h2></FadeIn>
      <AnimatedText className="text-[#D7E2EA] font-medium text-center leading-relaxed max-w-[560px]" style={{ fontSize: 'clamp(1rem,2vw,1.35rem)' }}
        text="With more than fifteen years in networking, infrastructure and system administration, i focus on reliable, secure IT operations — from LAN and routing troubleshooting to information security, ISMS and privacy protection. Let's connect and exchange ideas!" />
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 w-full max-w-3xl">{facts.map(([a, b]) => (
        <div key={b} className="rounded-2xl border border-[#D7E2EA]/20 p-4 text-center"><div className="text-[#D7E2EA] font-bold text-lg">{a}</div><div className="text-[#D7E2EA]/60 text-xs uppercase tracking-widest">{b}</div></div>))}</div>
    </div>
    <FadeIn y={20}><ContactButton href={`mailto:${EMAIL}`} /></FadeIn></section>)
}
