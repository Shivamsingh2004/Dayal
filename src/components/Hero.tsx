import { FadeIn, Magnet, ContactButton } from './ui'
import { EMAIL } from '../data'
const links = [['About', '#about'], ['Expertise', '#expertise'], ['Experience', '#experience'], ['Contact', '#contact']]
export default function Hero() {
  return (<section className="relative h-screen flex flex-col px-6 md:px-10" style={{ overflowX: 'clip' }}>
    <FadeIn y={-20}><nav className="flex justify-between pt-6 md:pt-8 text-[#D7E2EA] font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.4rem]">
      {links.map(([l, h]) => <a key={l} href={h} className="hover:opacity-70 transition-opacity duration-200">{l}</a>)}</nav></FadeIn>
    <FadeIn delay={0.15} y={40} className="overflow-hidden"><h1 className="hero-heading font-black uppercase tracking-tight leading-none whitespace-nowrap w-full text-[11.5vw] mt-8 sm:mt-6 md:mt-2">Hi, i&apos;m dayal</h1></FadeIn>
    <div className="absolute left-1/2 -translate-x-1/2 z-10 w-[260px] sm:w-[340px] md:w-[420px] lg:w-[480px] top-1/2 -translate-y-1/2 sm:top-auto sm:translate-y-0 sm:bottom-0">
      <FadeIn delay={0.6} y={30}><Magnet padding={150} strength={3}>
        <img src="/images/dayal-singh-gosain.jpg" width={400} height={400} alt="Portrait of Dayal Singh Gosain" className="w-full aspect-square rounded-full object-cover border-2 border-[#D7E2EA]/30" />
      </Magnet></FadeIn></div>
    <div className="relative z-20 mt-auto flex justify-between items-end pb-7 sm:pb-8 md:pb-10 gap-4">
      <FadeIn delay={0.35} y={20}><p className="text-[#D7E2EA] font-light uppercase tracking-wide leading-snug max-w-[160px] sm:max-w-[220px] md:max-w-[260px]" style={{ fontSize: 'clamp(0.75rem,1.4vw,1.5rem)' }}>
        a senior system administrator keeping infrastructure reliable, secure and always on</p></FadeIn>
      <FadeIn delay={0.5} y={20}><ContactButton href={`mailto:${EMAIL}`} /></FadeIn>
    </div></section>)
}
