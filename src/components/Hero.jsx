import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

export default function Hero() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let animFrame
    let particles = []

    const resize = () => {
      canvas.width  = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }
    resize()
    window.addEventListener('resize', resize)

    for (let i = 0; i < 40; i++) {
      particles.push({
        x:     Math.random() * canvas.width,
        y:     Math.random() * canvas.height,
        r:     Math.random() * 1.5 + 0.3,
        speed: Math.random() * 0.4 + 0.1,
        alpha: Math.random() * 0.4 + 0.05,
        dx:    (Math.random() - 0.5) * 0.3,
      })
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      particles.forEach((p) => {
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(232, 118, 10, ${p.alpha})`
        ctx.fill()
        p.y += p.speed
        p.x += p.dx
        if (p.y > canvas.height) { p.y = 0; p.x = Math.random() * canvas.width }
        if (p.x < 0 || p.x > canvas.width) p.dx *= -1
      })
      animFrame = requestAnimationFrame(draw)
    }
    draw()

    return () => {
      cancelAnimationFrame(animFrame)
      window.removeEventListener('resize', resize)
    }
  }, [])

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden noise-overlay"
    >
      {/* Background Layers */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/hero-bg.jpeg')" }}
      />
      <div className="absolute inset-0 bg-brand-bg/70" />

      {/* Radial orange glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 70% 50% at 50% 60%, rgba(232,118,10,0.12) 0%, transparent 70%)',
        }}
      />

      {/* Grid lines — hidden on very small screens to reduce noise */}
      <div
        className="absolute inset-0 opacity-5 pointer-events-none hidden sm:block"
        style={{
          backgroundImage: `
            repeating-linear-gradient(0deg, transparent, transparent 39px, rgba(232,118,10,0.5) 40px),
            repeating-linear-gradient(90deg, transparent, transparent 39px, rgba(232,118,10,0.3) 40px)
          `,
        }}
      />

      {/* Particle canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{ zIndex: 1 }}
      />

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{
          background: 'linear-gradient(to bottom, transparent, #080808)',
          zIndex: 2,
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-5 sm:px-6 max-w-5xl mx-auto w-full">

        {/* Logo */}
        <motion.div
          initial={{ scale: 0.6, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="mb-6 sm:mb-8"
        >
          <motion.div
            className="font-display text-center"
            style={{ filter: 'drop-shadow(0 0 40px rgba(232,118,10,0.5))' }}
          >
            <div
              className="text-brand-primary"
              style={{ fontSize: 'clamp(3.2rem, 18vw, 9rem)', lineHeight: 1 }}
            >
              JEEP
            </div>
            <div
              className="text-brand-text"
              style={{ fontSize: 'clamp(1.8rem, 10vw, 6rem)', lineHeight: 1 }}
            >
              CLUBE
            </div>
            <div className="font-mono text-brand-muted text-[10px] sm:text-sm tracking-[0.2em] sm:tracking-[0.3em] mt-2 px-2">
              SÃO JOÃO DA BARRA – RJ
            </div>
          </motion.div>
        </motion.div>

        {/* Tagline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.7 }}
          className="mb-4 w-full"
        >
          <div className="tire-divider w-32 sm:w-48 mx-auto mb-4 sm:mb-6 opacity-50" />
          <p
            className="font-display text-brand-text tracking-widest"
            style={{ fontSize: 'clamp(1rem, 4.5vw, 2.2rem)' }}
          >
            Lama, adrenalina e{' '}
            <span className="text-brand-primary glow-orange-text">irmandade.</span>
          </p>
          <div className="tire-divider w-32 sm:w-48 mx-auto mt-4 sm:mt-6 opacity-50" />
        </motion.div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="font-body text-brand-muted text-sm tracking-wider mb-8 sm:mb-10 max-w-xs sm:max-w-md px-2"
        >
          Comunidade off-road da região norte fluminense
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-center w-full max-w-sm sm:max-w-none"
        >
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: '0 0 32px rgba(232,118,10,0.6)' }}
            whileTap={{ scale: 0.97 }}
            onClick={() => scrollToSection('membros')}
            className="w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 bg-brand-primary hover:bg-brand-accent text-white font-display tracking-[0.15em] text-base sm:text-lg rounded-md transition-colors duration-200 glow-orange"
          >
            QUERO PARTICIPAR
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05, borderColor: '#F5A623' }}
            whileTap={{ scale: 0.97 }}
            onClick={() => scrollToSection('eventos')}
            className="w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 bg-transparent border-2 border-brand-primary text-brand-primary hover:text-brand-accent font-display tracking-[0.15em] text-base sm:text-lg rounded-md transition-all duration-200"
          >
            PRÓXIMAS TRILHAS
          </motion.button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.button
        onClick={() => scrollToSection('sobre')}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3 }}
        className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1 text-brand-muted hover:text-brand-primary transition-colors group"
      >
        <span className="font-mono text-xs tracking-widest">SCROLL</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown size={20} className="group-hover:text-brand-primary" />
        </motion.div>
      </motion.button>
    </section>
  )
}
