import { motion } from 'framer-motion'
import { MapPin, Heart } from 'lucide-react'

/* ─── Inline Social Icons (lucide-react doesn't ship brand icons) ── */
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
      { label: 'WhatsApp: (22) 9XXXX-XXXX', href: 'https://wa.me/5522990000000' },
      { label: 'Email: contato@jeepclubesjb.com', href: 'mailto:contato@jeepclubesjb.com' },
      { label: 'São João da Barra – RJ', href: '#' },
    ],
  },
]

const SOCIALS = [
  { icon: InstagramIcon, href: 'https://instagram.com/jeepclube_sjb', label: 'Instagram' },
  { icon: FacebookIcon,  href: 'https://facebook.com/jeepclubesjb',   label: 'Facebook'  },
  { icon: YoutubeIcon,   href: 'https://youtube.com/@jeepclubesjb',    label: 'YouTube'   },
]

const INSTAGRAM_POSTS = [
  'https://images.unsplash.com/photo-1565343782534-2d3a3ef1e37f?w=200&q=70',
  'https://images.unsplash.com/photo-1601024445121-e5b82f020549?w=200&q=70',
  'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=200&q=70',
  'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=200&q=70',
  'https://images.unsplash.com/photo-1609137144813-7d9921338f24?w=200&q=70',
  'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=200&q=70',
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
      {/* Top tire divider */}
      <div className="tire-divider opacity-20" />

      {/* Instagram Feed strip */}
      <div className="border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center gap-3 mb-5">
            <InstagramIcon size={16} className="text-brand-primary" />
            <span className="font-mono text-brand-muted text-xs tracking-widest">@JEEPCLUBE_SJB NO INSTAGRAM</span>
          </div>
          <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
            {INSTAGRAM_POSTS.map((src, i) => (
              <motion.a
                key={i}
                href="https://instagram.com/jeepclube_sjb"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                whileHover={{ scale: 1.05 }}
                className="aspect-square rounded-lg overflow-hidden group relative"
              >
                <img
                  src={src}
                  alt={`Instagram post ${i + 1}`}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-brand-primary/0 group-hover:bg-brand-primary/30 transition-colors duration-300 flex items-center justify-center">
                  <InstagramIcon size={18} className="text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand column */}
          <div className="lg:col-span-2">
            {/* Logo */}
            <div className="mb-5">
              <img
                src="/logo.png"
                alt="Jeep Clube São João da Barra"
                className="logo-blend h-20 w-auto object-contain"
                onError={(e) => {
                  e.target.style.display = 'none'
                  e.target.nextSibling.style.display = 'block'
                }}
              />
              <div style={{ display: 'none' }}>
                <div className="font-display text-brand-text text-2xl tracking-widest">JEEP CLUBE</div>
                <div className="font-mono text-brand-primary text-xs tracking-wider">SÃO JOÃO DA BARRA – RJ</div>
              </div>
            </div>

            <p className="font-body text-brand-muted text-sm leading-relaxed max-w-sm mb-6">
              Comunidade off-road apaixonada pelas estradas de terra do extremo norte fluminense.
              Unidos pela lama, adrenalina e irmandade desde 2018.
            </p>

            {/* Location */}
            <div className="flex items-center gap-2 text-brand-muted text-sm mb-6">
              <MapPin size={14} className="text-brand-primary flex-shrink-0" />
              <span className="font-body">São João da Barra – RJ, Brasil</span>
            </div>

            {/* Socials */}
            <div className="flex gap-3">
              {SOCIALS.map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="w-9 h-9 rounded-lg bg-white/5 hover:bg-brand-primary/20 border border-white/5 hover:border-brand-primary/30 flex items-center justify-center text-brand-muted hover:text-brand-primary transition-all duration-200"
                >
                  <Icon size={16} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Nav cols */}
          {NAV_COLS.map((col) => (
            <div key={col.title}>
              <h4 className="font-display text-brand-text text-sm tracking-widest mb-5">{col.title.toUpperCase()}</h4>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <button
                      onClick={() => scrollTo(link.href)}
                      className="font-body text-brand-muted hover:text-brand-primary text-sm transition-colors duration-200 text-left leading-snug"
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-mono text-brand-muted text-xs text-center">
            © {new Date().getFullYear()} Jeep Clube São João da Barra – RJ. Todos os direitos reservados.
          </p>
          <p className="font-mono text-brand-muted text-xs flex items-center gap-1.5">
            Feito com <Heart size={10} className="text-brand-primary" /> no norte fluminense
          </p>
        </div>
      </div>
    </footer>
  )
}
