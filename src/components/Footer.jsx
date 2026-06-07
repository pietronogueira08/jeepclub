import { motion } from 'framer-motion'
import { MapPin, Heart } from 'lucide-react'

function InstagramIcon({ size = 16, className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
    </svg>
  )
}

function FacebookIcon({ size = 16, className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
    </svg>
  )
}

function YoutubeIcon({ size = 16, className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19.13C5.12 19.56 12 19.56 12 19.56s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.43z"/>
      <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/>
    </svg>
  )
}

const NAV_COLS = [
  {
    title: 'Navegação',
    links: [
      { label: 'Início',   href: '#hero'    },
      { label: 'Sobre',    href: '#sobre'   },
      { label: 'Eventos',  href: '#eventos' },
      { label: 'Galeria',  href: '#galeria' },
      { label: 'Loja',     href: '#loja'    },
      { label: 'Membros',  href: '#membros' },
    ],
  },
  {
    title: 'Contato',
    links: [
      { label: 'WhatsApp: (22) 9XXXX-XXXX',       href: 'https://wa.me/5522990000000' },
      { label: 'contato@jeepclubesjb.com',          href: 'mailto:contato@jeepclubesjb.com' },
      { label: 'São João da Barra – RJ',            href: '#' },
    ],
  },
]

const SOCIALS = [
  { icon: InstagramIcon, href: 'https://instagram.com/jeepclube_sjb', label: 'Instagram' },
  { icon: FacebookIcon,  href: 'https://facebook.com/jeepclubesjb',   label: 'Facebook'  },
  { icon: YoutubeIcon,   href: 'https://youtube.com/@jeepclubesjb',    label: 'YouTube'   },
]

export default function Footer() {
  const scrollTo = (href) => {
    if (href.startsWith('#')) {
      document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
    } else {
      window.open(href, '_blank')
    }
  }

  return (
    <footer className="relative bg-brand-surface border-t border-white/5 overflow-hidden">
      <div className="tire-divider opacity-20" />

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">

          {/* Brand column */}
          <div className="sm:col-span-2 lg:col-span-2">
            {/* Logo text */}
            <div className="mb-4 sm:mb-5">
              <div className="font-display text-brand-text text-2xl tracking-widest">JEEP CLUBE</div>
              <div className="font-mono text-brand-primary text-xs tracking-wider">SÃO JOÃO DA BARRA – RJ</div>
            </div>

            <p className="font-body text-brand-muted text-sm leading-relaxed max-w-sm mb-5 sm:mb-6">
              Comunidade off-road apaixonada pelas estradas de terra do extremo norte fluminense.
              Unidos pela lama, adrenalina e irmandade desde 2005.
            </p>

            <div className="flex items-center gap-2 text-brand-muted text-sm mb-5 sm:mb-6">
              <MapPin size={14} className="text-brand-primary flex-shrink-0" />
              <span className="font-body">São João da Barra – RJ, Brasil</span>
            </div>

            {/* Socials — larger touch targets */}
            <div className="flex gap-3">
              {SOCIALS.map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="w-10 h-10 rounded-lg bg-white/5 hover:bg-brand-primary/20 border border-white/5 hover:border-brand-primary/30 flex items-center justify-center text-brand-muted hover:text-brand-primary transition-all duration-200 touch-manipulation"
                >
                  <Icon size={16} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Nav cols */}
          {NAV_COLS.map((col) => (
            <div key={col.title}>
              <h4 className="font-display text-brand-text text-sm tracking-widest mb-4 sm:mb-5">{col.title.toUpperCase()}</h4>
              <ul className="space-y-2.5 sm:space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <button
                      onClick={() => scrollTo(link.href)}
                      className="font-body text-brand-muted hover:text-brand-primary text-sm transition-colors duration-200 text-left leading-snug w-full touch-manipulation"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="font-mono text-brand-muted text-xs text-center">
            © {new Date().getFullYear()} Jeep Clube São João da Barra – RJ.
          </p>
          <p className="font-mono text-brand-muted text-xs flex items-center gap-1.5">
            Feito com <Heart size={10} className="text-brand-primary" /> no norte fluminense
          </p>
        </div>
      </div>
    </footer>
  )
}
