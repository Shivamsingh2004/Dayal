import { ExternalLink } from 'lucide-react'
import { FadeIn, ContactButton, GhostButton } from './ui'
import { certs, EMAIL, LINKEDIN } from '../data'
export default function Closing() {
  return (<section id="contact" className="bg-[#0C0C0C] px-5 sm:px-8 md:px-10 pt-32 pb-12">
    <div className="max-w-5xl mx-auto">
      <h2 className="hero-heading font-black uppercase leading-none text-center mb-14" style={{ fontSize: 'clamp(2.5rem,9vw,120px)' }}>Certifications</h2>
      <div className="grid sm:grid-cols-2 gap-3">{certs.map(([c, t], i) => (<FadeIn key={c} delay={i * 0.08} y={20}>
        <div className="rounded-3xl border border-[#D7E2EA]/25 p-6 h-full"><div className="text-[#5AA9FF] uppercase tracking-widest text-sm">{c}</div><div className="text-[#D7E2EA] font-medium text-lg mt-1">{t}</div></div></FadeIn>))}</div>
      <p className="text-[#D7E2EA]/50 text-sm text-center mt-4">Credentials as listed in my professional profile.</p>
      <div className="grid sm:grid-cols-2 gap-3 mt-20 text-[#D7E2EA]">
        <div className="rounded-3xl border border-[#D7E2EA]/25 p-6"><div className="opacity-50 uppercase tracking-widest text-sm">1993 — 1995</div><div className="font-bold text-xl">Bachelor's degree, Computer Science</div><div className="font-light">Kurukshetra University</div></div>
        <div className="rounded-3xl border border-[#D7E2EA]/25 p-6"><div className="opacity-50 uppercase tracking-widest text-sm">1990 — 1992</div><div className="font-bold text-xl">SSCE / AISSE</div><div className="font-light">Kendriya Vidyalaya</div></div></div>
      <div className="text-center mt-32 flex flex-col items-center gap-8">
        <h2 className="hero-heading font-black uppercase leading-none" style={{ fontSize: 'clamp(3rem,12vw,160px)' }}>Let&apos;s talk</h2>
        <div className="flex flex-wrap justify-center gap-4"><ContactButton href={`mailto:${EMAIL}`}>{EMAIL}</ContactButton>
          <GhostButton href={LINKEDIN}><span className="inline-flex items-center gap-2">LinkedIn <ExternalLink size={16} /></span></GhostButton></div></div>
      <p className="text-center text-[#D7E2EA]/40 text-xs uppercase tracking-widest mt-24">© {new Date().getFullYear()} Dayal Singh Gosain · West Delhi, India</p>
    </div></section>)
}
