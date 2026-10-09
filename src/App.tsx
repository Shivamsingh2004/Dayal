import Hero from './components/Hero'
import Marquee from './components/Marquee'
import About from './components/About'
import Expertise from './components/Expertise'
import Experience from './components/Experience'
import Closing from './components/Closing'
export default function App() {
  return (<main className="bg-[#0C0C0C] font-kanit" style={{ overflowX: 'clip' }}>
    <Hero /><Marquee /><About /><Expertise /><Experience /><Closing />
  </main>)
}
