import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { MapPin, Users, Mountain, Calendar } from 'lucide-react'

function CountUp({ target, suffix = '', duration = 2000 }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  useEffect(() => {
    if (!inView) return
    let start = 0
    const step = target / (duration / 16)
    const timer = setInterval(() => {
      start += step
      if (start >= target) {
        setCount(target)
        clearInterval(timer)
      } else {
        setCount(Math.floor(start))
      }
    }, 16)
    return () => clearInterval(timer)
  }, [inView, target, duration])

  return (
    <span ref={ref} className="stat-number">
      {count}{suffix}
    </span>
  )
}

const STATS = [
  { icon: Users,    target: 87,   suffix: '+', label: 'Membros Ativos',     desc: 'Aventureiros apaixonados' },
  { icon: Mountain, target: 140,  suffix: '+', label: 'Trilhas Realizadas', desc: 'Por todo o norte fluminense' },
  { icon: Calendar, target: 2005, suffix: '',  label: 'Fundação',           desc: 'Desde agosto de 2005' },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
}
const itemVariants = {
  hidden:   { opacity: 0, y: 40 },
  visible:  { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
}

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section id="sobre" className="relative bg-brand-bg py-20 sm:py-24 lg:py-36 overflow-hidden">
      {/* Background accent */}
      <div
        className="absolute top-0 right-0 w-full sm:w-1/2 h-full pointer-events-none opacity-5"
        style={{
          background: 'radial-gradient(ellipse at 80% 50%, rgba(232,118,10,0.8), transparent 60%)',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="section-label mb-3"
        >
          ◈ SOBRE O CLUBE
        </motion.div>

        <div ref={ref} className="grid lg:grid-cols-2 gap-10 lg:gap-24 items-center">
          {/* LEFT: Stats */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className="space-y-6 sm:space-y-8"
          >
            {STATS.map(({ icon: Icon, target, suffix, label, desc }) => (
              <motion.div
                key={label}
                variants={itemVariants}
                className="flex items-end gap-4 sm:gap-6 group"
              >
                <div className="flex-1 min-w-0">
                  <div className="flex items-baseline gap-2 flex-wrap">
                    <CountUp target={target} suffix={suffix} />
                  </div>
                  <div className="flex items-center gap-2 mt-1">
                    <Icon size={14} className="text-brand-primary flex-shrink-0" />
                    <span className="font-body font-semibold text-brand-text tracking-wide text-xs sm:text-sm uppercase">
                      {label}
                    </span>
                  </div>
                  <p className="font-body text-brand-muted text-xs mt-0.5">{desc}</p>
                </div>
                <div
                  className="w-12 sm:w-16 h-px flex-shrink-0 transition-all duration-500 group-hover:w-20"
                  style={{ background: 'linear-gradient(to right, #E8760A, transparent)' }}
                />
              </motion.div>
            ))}

            {/* Location pill — truncated safely on mobile */}
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full border border-brand-primary/30 bg-brand-primary/5 max-w-full overflow-hidden"
            >
              <MapPin size={14} className="text-brand-primary flex-shrink-0" />
              <span className="font-mono text-brand-muted text-[10px] sm:text-xs tracking-wider truncate">
                São João da Barra, RJ · Brasil
              </span>
            </motion.div>
          </motion.div>

          {/* RIGHT: Text content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-5 sm:space-y-6"
          >
            <h2
              className="font-display text-brand-text leading-none"
              style={{ fontSize: 'clamp(2rem, 7vw, 4.5rem)' }}
            >
              UNIDOS PELA{' '}
              <span className="text-brand-primary glow-orange-text">LAMA</span>
              <br />E PELO MOTOR.
            </h2>

            <div className="w-16 h-1 bg-brand-primary rounded-full" />

            <p className="font-body text-brand-muted leading-relaxed text-sm sm:text-base lg:text-lg">
              O <strong className="text-brand-text">Jeep Clube São João da Barra</strong> nasceu da paixão
              compartilhada de moradores e apaixonados pelo off-road no extremo norte do Rio de Janeiro.
              Fundado em agosto de 2005, hoje reunimos mais de 87 membros ativos que exploram cada palmo de terra,
              lama e areia da nossa região.
            </p>

            <p className="font-body text-brand-muted leading-relaxed text-sm sm:text-base">
              São João da Barra oferece uma geografia única: campos, praias desertas, manguezais e estradas
              de chão batido que só fazem sentido para quem tem rodas e coragem suficientes.
              Aqui, cada trilha é uma história nova.
            </p>

            <p className="font-body text-brand-muted leading-relaxed text-sm sm:text-base">
              Nosso clube é mais que um grupo — é uma irmandade. Da preparação dos Jeeps nas garagens
              aos churrascos pós-trilha, cultivamos respeito, segurança e a adrenalina que só o 4×4 proporciona.
            </p>

            <div className="grid grid-cols-2 gap-3 pt-2">
              {['Segurança em primeiro lugar', 'Respeito à natureza', 'Apoio mútuo', 'Trilhas em família'].map((val) => (
                <div key={val} className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-primary flex-shrink-0 mt-1.5" />
                  <span className="font-body text-brand-muted text-xs sm:text-sm">{val}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
