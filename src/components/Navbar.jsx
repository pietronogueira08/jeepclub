import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const NAV_LINKS = [
  { label: 'Início',   href: '#hero'    },
  { label: 'Sobre',    href: '#sobre'   },
  { label: 'Eventos',  href: '#eventos' },
  { label: 'Galeria',  href: '#galeria' },
  { label: 'Loja',     href: '#loja'    },
  { label: 'Membros',  href: '#membros' },
]

export default function Navbar() {
  const [scrolled,    setScrolled]    = useState(false)
  const [menuOpen,    setMenuOpen]    = useState(false)
  const [activeLink,  setActiveLink]  = useState('#hero')

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40)

      const sections = NAV_LINKS.map(l => l.href.slice(1))
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i])
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveLink('#' + sections[i])
          break
        }
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNav = (href) => {
    setMenuOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <motion.header
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-brand-bg/95 backdrop-blur-md border-b border-white/5 shadow-lg shadow-black/50'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <button
              onClick={() => handleNav('#hero')}
              className="flex items-center gap-3 group"
            >
              <div className="flex items-center gap-2 transition-transform duration-300 group-hover:scale-105">
                <div className="w-8 h-8 bg-brand-primary rounded flex items-center justify-center">
                  <span className="text-white font-display text-sm">JC</span>
                </div>
                <div className="text-left">
                  <div className="font-display text-brand-text text-sm tracking-widest leading-none">JEEP CLUBE</div>
                  <div className="font-mono text-brand-primary text-[10px] tracking-wider">SÃO JOÃO DA BARRA</div>
                </div>
              </div>
            </button>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-1">
              {NAV_LINKS.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNav(link.href)}
                  className={`relative px-4 py-2 font-body font-medium text-sm tracking-wide transition-colors duration-200 rounded-md group ${
                    activeLink === link.href
                      ? 'text-brand-primary'
                      : 'text-brand-muted hover:text-brand-text'
                  }`}
                >
                  {link.label}
                  {activeLink === link.href && (
                    <motion.div
                      layoutId="nav-indicator"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-primary rounded-full"
                    />
                  )}
                </button>
              ))}
              <button
                onClick={() => handleNav('#membros')}
                className="ml-4 px-5 py-2 bg-brand-primary hover:bg-brand-accent text-white font-body font-semibold text-sm rounded-md transition-all duration-200 glow-orange"
              >
                SEJA MEMBRO
              </button>
            </nav>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMenuOpen((o) => !o)}
              className={`md:hidden p-2 rounded-md text-brand-text transition-colors ${menuOpen ? 'hamburger-open' : ''}`}
              aria-label="Menu"
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMenuOpen(false)}
              className="fixed inset-0 bg-black/70 z-40 md:hidden"
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-72 bg-brand-surface border-l border-white/5 z-50 md:hidden flex flex-col"
            >
              <div className="flex items-center justify-between p-6 border-b border-white/5">
                <span className="font-display text-brand-text text-lg tracking-widest">MENU</span>
                <button onClick={() => setMenuOpen(false)} className="text-brand-muted hover:text-brand-text">
                  <X size={20} />
                </button>
              </div>
              <nav className="flex flex-col p-4 gap-1 flex-1">
                {NAV_LINKS.map((link, i) => (
                  <motion.button
                    key={link.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    onClick={() => handleNav(link.href)}
                    className={`text-left px-4 py-3 rounded-lg font-body font-medium text-base transition-colors ${
                      activeLink === link.href
                        ? 'text-brand-primary bg-brand-primary/10'
                        : 'text-brand-muted hover:text-brand-text hover:bg-white/5'
                    }`}
                  >
                    {link.label}
                  </motion.button>
                ))}
              </nav>
              <div className="p-6 border-t border-white/5">
                <button
                  onClick={() => handleNav('#membros')}
                  className="w-full py-3 bg-brand-primary hover:bg-brand-accent text-white font-body font-semibold rounded-lg transition-colors glow-orange"
                >
                  SEJA MEMBRO
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
