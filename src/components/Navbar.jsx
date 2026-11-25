import { useState } from 'react'
import { ArrowRight, Menu } from 'lucide-react'

const LINKS = [
  ['About', '#about'],
  ['Skills', '#skills'],
  ['Experience', '#experience'],
  ['Projects', '#projects'],
  ['Contact', '#contact'],
]

export function Brand() {
  return (
    <a className="brand" href="#home">
      <span className="brand-mark">R</span>
      <span>
        rebuma<span className="brand-dot">.</span>
      </span>
    </a>
  )
}

export default function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <header className="header">
      <Brand />
      <button
        className="menu-toggle"
        onClick={() => setOpen(!open)}
        aria-label="Toggle navigation"
      >
        <Menu size={22} />
      </button>
      <nav className={open ? 'nav nav-open' : 'nav'}>
        {LINKS.map(([label, href]) => (
          <a key={label} href={href} onClick={() => setOpen(false)}>
            {label}
          </a>
        ))}
        <a className="nav-contact" href="#contact" onClick={() => setOpen(false)}>
          Contact me <ArrowRight size={15} />
        </a>
      </nav>
    </header>
  )
}
