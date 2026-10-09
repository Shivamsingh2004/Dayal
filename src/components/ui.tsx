import { motion, useScroll, useTransform, MotionValue } from 'framer-motion'
import { ReactNode, useEffect, useRef, useState } from 'react'

export function FadeIn({ children, delay = 0, duration = 0.7, x = 0, y = 30, className = '' }:
  { children: ReactNode; delay?: number; duration?: number; x?: number; y?: number; className?: string }) {
  return (<motion.div className={className} initial={{ opacity: 0, x, y }} whileInView={{ opacity: 1, x: 0, y: 0 }}
    viewport={{ once: true, margin: '50px', amount: 0 }} transition={{ duration, delay, ease: [0.25, 0.1, 0.25, 1] }}>{children}</motion.div>)
}

export function Magnet({ children, padding = 150, strength = 3, className = '' }:
  { children: ReactNode; padding?: number; strength?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const [pos, setPos] = useState({ x: 0, y: 0 }); const [active, setActive] = useState(false)
  useEffect(() => {
    const move = (e: MouseEvent) => {
      const el = ref.current; if (!el) return
      const r = el.getBoundingClientRect(); const dx = e.clientX - (r.left + r.width / 2); const dy = e.clientY - (r.top + r.height / 2)
      if (Math.abs(dx) < r.width / 2 + padding && Math.abs(dy) < r.height / 2 + padding) { setActive(true); setPos({ x: dx / strength, y: dy / strength }) }
      else { setActive(false); setPos({ x: 0, y: 0 }) }
    }
    window.addEventListener('mousemove', move); return () => window.removeEventListener('mousemove', move)
  }, [padding, strength])
  return (<div ref={ref} className={className} style={{ transform: `translate3d(${pos.x}px,${pos.y}px,0)`, willChange: 'transform',
    transition: active ? 'transform 0.3s ease-out' : 'transform 0.6s ease-in-out' }}>{children}</div>)
}

function Char({ c, i, n, p }: { c: string; i: number; n: number; p: MotionValue<number> }) {
  const o = useTransform(p, [i / n, (i + 1) / n], [0.2, 1])
  return (<span className="relative"><span className="opacity-0">{c}</span><motion.span style={{ opacity: o }} className="absolute left-0 top-0">{c}</motion.span></span>)
}
export function AnimatedText({ text, className = '', style }: { text: string; className?: string; style?: React.CSSProperties }) {
  const ref = useRef<HTMLParagraphElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 0.8', 'end 0.2'] })
  let k = 0; const n = text.length
  return (<p ref={ref} className={className} style={style}>
    {text.split(' ').map((w, wi) => (<span key={wi} className="inline-block whitespace-nowrap">
      {w.split('').map((c) => <Char key={k} c={c} i={k++} n={n} p={scrollYProgress} />)}{'\u00A0'}</span>))}
  </p>)
}

export function ContactButton({ href, children = 'Contact Me' }: { href: string; children?: ReactNode }) {
  return (<a href={href} className="inline-block rounded-full text-white font-medium uppercase tracking-widest px-8 py-3 sm:px-10 sm:py-3.5 md:px-12 md:py-4 text-xs sm:text-sm md:text-base whitespace-nowrap"
    style={{ background: 'linear-gradient(123deg,#04122B 7%,#1F5FD6 37%,#2F7BFF 72%,#5AA9FF 100%)',
      boxShadow: '0px 4px 4px rgba(47,123,255,.25), 4px 4px 12px #2F7BFF inset', outline: '2px solid #fff', outlineOffset: '-3px' }}>{children}</a>)
}
export function GhostButton({ href, children }: { href: string; children: ReactNode }) {
  return (<a href={href} target="_blank" rel="noopener noreferrer" className="inline-block rounded-full border-2 border-[#D7E2EA] text-[#D7E2EA] font-medium uppercase tracking-widest px-8 py-3 sm:px-10 sm:py-3.5 text-sm sm:text-base hover:bg-[#D7E2EA]/10 transition">{children}</a>)
}
