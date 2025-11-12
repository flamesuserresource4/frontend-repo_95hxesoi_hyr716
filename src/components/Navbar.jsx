import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const navItem = (href, label) => (
    <a href={href} className="text-sm md:text-base text-zinc-300 hover:text-white transition-colors px-3 py-2 rounded-md">
      {label}
    </a>
  )

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all ${scrolled ? 'backdrop-blur-md bg-zinc-900/70 border-b border-white/10' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <a href="#home" className="flex items-center gap-3 group">
            <div className="w-8 h-8 rounded-sm bg-gradient-to-br from-indigo-500 via-sky-500 to-cyan-400 shadow-lg shadow-cyan-500/20" />
            <span className="text-white font-semibold tracking-wider text-lg group-hover:opacity-90">OTH_</span>
          </a>

          <nav className="hidden md:flex items-center gap-2">
            {navItem('#work', 'Work')}
            {navItem('#studio', 'Studio')}
            {navItem('#services', 'Services')}
            {navItem('#contact', 'Contact')}
          </nav>

          <button onClick={() => setOpen(!open)} className="md:hidden text-white p-2">
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-white/10 bg-zinc-900/80 backdrop-blur">
          <div className="px-4 py-3 flex flex-col">
            <a onClick={() => setOpen(false)} href="#work" className="py-2 text-zinc-300 hover:text-white">Work</a>
            <a onClick={() => setOpen(false)} href="#studio" className="py-2 text-zinc-300 hover:text-white">Studio</a>
            <a onClick={() => setOpen(false)} href="#services" className="py-2 text-zinc-300 hover:text-white">Services</a>
            <a onClick={() => setOpen(false)} href="#contact" className="py-2 text-zinc-300 hover:text-white">Contact</a>
          </div>
        </div>
      )}
    </header>
  )
}
