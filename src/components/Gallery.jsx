import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'

function InstagramIcon({ size = 20, className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
    </svg>
  )
}

const PHOTOS = [
  {
    id: 1,
    src: '/gallery-1.png',
    thumb: '/gallery-1.png',
    title: 'Lagoa Feia — Julho 2025',
    tall: false,
  },
  {
    id: 2,
    src: '/gallery-2.png',
    thumb: '/gallery-2.png',
    title: 'Serra Verde — Verão 2025',
    tall: true,
  },
  {
    id: 3,
    src: '/gallery-3.png',
    thumb: '/gallery-3.png',
    title: 'Dunas de Grussaí — Agosto 2025',
    tall: false,
  },
  {
    id: 4,
    src: '/gallery-4.png',
    thumb: '/gallery-4.png',
    title: 'Pôr do Sol no Campo — Outubro 2025',
    tall: true,
  },
  {
    id: 5,
    src: '/gallery-5.png',
    thumb: '/gallery-5.png',
    title: 'Travessia da Baixada — Março 2025',
    tall: false,
  },
  {
    id: 6,
    src: '/gallery-6.png',
    thumb: '/gallery-6.png',
    title: 'Expedição Serra do Itaoca — 2024',
    tall: true,
  },
  {
    id: 7,
    src: '/gallery-7.png',
    thumb: '/gallery-7.png',
    title: 'Confraternização — Natal 2024',
    tall: false,
  },
  {
    id: 8,
    src: '/gallery-8.png',
    thumb: '/gallery-8.png',
    title: 'Chapada dos Guimarães — Agosto 2024',
    tall: true,
  },
  {
    id: 9,
    src: '/gallery-9.png',
    thumb: '/gallery-9.png',
    title: 'Trilha Noturna — Outubro 2024',
    tall: false,
  },
]

function Lightbox({ photos, initialIndex, onClose }) {
  const [current, setCurrent] = useState(initialIndex)

  const prev = () => setCurrent((i) => (i - 1 + photos.length) % photos.length)
  const next = () => setCurrent((i) => (i + 1) % photos.length)

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowLeft') prev()
    if (e.key === 'ArrowRight') next()
    if (e.key === 'Escape') onClose()
  }

  return (
    <motion.div
      className="lightbox-backdrop"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      onKeyDown={handleKeyDown}
      tabIndex={0}
    >
      {/* Close */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors z-10"
      >
        <X size={20} />
      </button>

      {/* Prev */}
      <button
        onClick={(e) => { e.stopPropagation(); prev() }}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 hover:bg-brand-primary flex items-center justify-center text-white transition-colors z-10"
      >
        <ChevronLeft size={20} />
      </button>

      {/* Image */}
      <motion.div
        key={current}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.25 }}
        onClick={(e) => e.stopPropagation()}
        className="max-w-4xl max-h-[85vh] mx-16 rounded-xl overflow-hidden"
      >
        <img
          src={photos[current].src}
          alt={photos[current].title}
          className="max-w-full max-h-[75vh] object-contain"
        />
        <div className="bg-brand-surface p-4 flex justify-between items-center">
          <span className="font-body text-brand-muted text-sm">{photos[current].title}</span>
          <span className="font-mono text-brand-primary text-xs">{current + 1} / {photos.length}</span>
        </div>
      </motion.div>

      {/* Next */}
      <button
        onClick={(e) => { e.stopPropagation(); next() }}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 hover:bg-brand-primary flex items-center justify-center text-white transition-colors z-10"
      >
        <ChevronRight size={20} />
      </button>

      {/* Thumbnail strip */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 px-4 z-10">
        {photos.map((p, i) => (
          <button
            key={p.id}
            onClick={(e) => { e.stopPropagation(); setCurrent(i) }}
            className={`w-10 h-10 rounded overflow-hidden border-2 transition-all ${
              i === current ? 'border-brand-primary scale-110' : 'border-transparent opacity-50 hover:opacity-80'
            }`}
          >
            <img src={p.thumb} alt="" className="w-full h-full object-cover" />
          </button>
        ))}
      </div>
    </motion.div>
  )
}

export default function Gallery() {
  const [lightboxIndex, setLightboxIndex] = useState(null)

  return (
    <section id="galeria" className="relative bg-brand-bg py-24 lg:py-32 overflow-hidden">
      {/* Subtle grain */}
      <div
        className="absolute inset-0 opacity-30 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.05'/%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-14">
          <motion.div
            className="section-label mb-3"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            ◈ MEMÓRIAS DE TRILHA
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-brand-text leading-none"
            style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)' }}
          >
            GALERIA<span className="text-brand-primary"> OFF-ROAD</span>
          </motion.h2>
        </div>

        {/* Masonry Grid */}
        <motion.div
          className="masonry-grid"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {PHOTOS.map((photo, i) => (
            <motion.div
              key={photo.id}
              className="masonry-item group relative rounded-lg overflow-hidden cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06, duration: 0.5 }}
              onClick={() => setLightboxIndex(i)}
            >
              <div className="relative overflow-hidden rounded-lg">
                <img
                  src={photo.thumb}
                  alt={photo.title}
                  loading="lazy"
                  className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  style={{ aspectRatio: photo.tall ? '3/4' : '4/3' }}
                />
                {/* Orange hover overlay */}
                <div className="absolute inset-0 bg-brand-primary/0 group-hover:bg-brand-primary/25 transition-all duration-300" />
                <div className="absolute inset-0 flex items-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-brand-bg/90 backdrop-blur-sm rounded-md px-3 py-2 w-full">
                    <p className="font-body text-brand-text text-xs font-medium truncate">{photo.title}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Instagram CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex justify-center mt-12"
        >
          <a
            href="https://instagram.com/jeepclube_sjb"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-8 py-4 border border-brand-primary/40 hover:border-brand-primary hover:bg-brand-primary/10 text-brand-text font-display tracking-[0.12em] text-base rounded-lg transition-all duration-300 group"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-brand-primary group-hover:scale-110 transition-transform"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
            VER MAIS FOTOS NO INSTAGRAM
          </a>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <Lightbox
            photos={PHOTOS}
            initialIndex={lightboxIndex}
            onClose={() => setLightboxIndex(null)}
          />
        )}
      </AnimatePresence>
    </section>
  )
}
