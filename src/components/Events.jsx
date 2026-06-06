import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Calendar, MapPin, ChevronRight, X, Zap, Waves, Mountain, Car } from 'lucide-react'

const DIFFICULTY = {
  FÁCIL:   { cls: 'badge-facil',   label: 'FÁCIL'   },
  MÉDIO:   { cls: 'badge-medio',   label: 'MÉDIO'   },
  DIFÍCIL: { cls: 'badge-dificil', label: 'DIFÍCIL' },
  EXTREMO: { cls: 'badge-extremo', label: 'EXTREMO' },
}

const TERRAIN_ICONS = {
  Praia:   Waves,
  Serra:   Mountain,
  Lama:    Zap,
  Urbano:  Car,
}

const EVENTS = [
  {
    id: 1,
    name: 'Trilha da Lagoa Feia',
    date: '2026-07-12',
    dateDisplay: 'SAB · 12 JUL 2026',
    difficulty: 'MÉDIO',
    terrain: 'Lama',
    location: 'Lagoa Feia, SJB – RJ',
    shortDesc: 'Percurso de 45km pelas margens da maior lagoa costeira da América Latina, com trechos de lama profunda.',
    fullDesc: `Uma das trilhas mais tradicionais do clube, a Trilha da Lagoa Feia percorre 45 quilômetros pelas bordas lamacentas da maior lagoa costeira da América Latina. O percurso começa na sede do clube e atravessa estradas de chão batido até os campos de arroz da região.

Espere atolamentos garantidos nos trechos próximos ao leito da lagoa, onde a lama alcança facilmente os 50cm de profundidade. Ideal para Jeeps com lift de no mínimo 3 polegadas e pneus All-Terrain.

O percurso tem ponto de apoio no Km 20, com abastecimento de água e borracheiro de plantão. Ao final, o tradicional churrasco de confraternização na sede.`,
    requirements: ['Lift mínimo 3"', 'Pneus A/T ou M/T', 'Guincho recomendado', 'Estepe + kit de recuperação'],
    meetPoint: 'Sede do Clube — Av. Litorânea, 1200, SJB',
    meetTime: '06:30',
    maxParticipants: 30,
    registered: 22,
    image: '/event-1.png',
  },
  {
    id: 2,
    name: 'Desafio das Dunas — Grussaí',
    date: '2026-08-02',
    dateDisplay: 'DOM · 02 AGO 2026',
    difficulty: 'EXTREMO',
    terrain: 'Praia',
    location: 'Grussaí, SJB – RJ',
    shortDesc: 'Confronto épico nas dunas de Grussaí: areia mole, descidas íngremes e a adrenalina do surf de areia.',
    fullDesc: `O Desafio das Dunas é o evento mais aguardado do ano pelo clube. Realizado nas famosas dunas de Grussaí, o percurso de 20km é curto em distância mas absurdo em intensidade.

As dunas atingem até 18 metros de altura e a areia solta exige tração nas quatro rodas o tempo todo. Saídas de areia e borrachamentos são comuns — e divertidos. O evento conta com equipe de apoio de 4 membros experientes posicionados em pontos estratégicos.

A modalidade "Sand Surfing" é opcional: descer as dunas na carroceria coberta por lona é a cereja do bolo. Ao final, banho obrigatório no Atlântico!`,
    requirements: ['4x4 obrigatório', 'Redutora funcional', 'Pneus M/T', 'Plaquinha de segurança', 'Cabo de reboque'],
    meetPoint: 'Acesso principal Praia de Grussaí — Km 6',
    meetTime: '07:00',
    maxParticipants: 20,
    registered: 18,
    image: '/event-2.png',
  },
  {
    id: 3,
    name: 'Expedição Serra do Itaoca',
    date: '2026-09-06',
    dateDisplay: 'DOM · 06 SET 2026',
    difficulty: 'DIFÍCIL',
    terrain: 'Serra',
    location: 'Itaoca, Itaperuna – RJ',
    shortDesc: 'Dois dias na Serra do Itaoca com acampamento incluso. Trilhas rochosas e vistas espetaculares do norte fluminense.',
    fullDesc: `A expedição de dois dias pela Serra do Itaoca é a aventura mais completa do calendário do clube. Partindo de São João da Barra, o comboio segue em direção a Itaperuna, adentrando pela estrada de terra da Serra do Itaoca.

O percurso tem 80km de trilha em solo rochoso, com escaladas de rampa que chegam a 45° de inclinação. O acampamento é montado no pico da Serra, a 820m de altitude, com vista para toda a região norte fluminense.

No segundo dia, a descida pelo lado oposto da Serra apresenta os trechos mais técnicos do percurso. Obrigatório ter experiência prévia em terreno rochoso. Evento limitado a 15 veículos.`,
    requirements: ['Experiência em pedra', 'Articulação de eixo', 'Locker ou LSD', 'Acampamento completo', 'Rádio PX'],
    meetPoint: 'Posto Ipiranga — BR-356 com acesso Itaperuna',
    meetTime: '05:30',
    maxParticipants: 15,
    registered: 11,
    image: '/event-3.png',
  },
]

function EventModal({ event, onClose }) {
  const diff = DIFFICULTY[event.difficulty]
  const TerrainIcon = TERRAIN_ICONS[event.terrain]
  const filled = Math.round((event.registered / event.maxParticipants) * 100)

  return (
    <AnimatePresence>
      <motion.div
        className="lightbox-backdrop"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ type: 'spring', damping: 25 }}
          onClick={(e) => e.stopPropagation()}
          className="relative bg-brand-surface border border-white/10 rounded-xl max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto"
        >
          {/* Header image */}
          <div className="relative h-48 overflow-hidden rounded-t-xl">
            <img
              src={event.image}
              alt={event.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-surface via-transparent to-transparent" />
            <button
              onClick={onClose}
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-black/60 flex items-center justify-center text-brand-muted hover:text-brand-text transition-colors"
            >
              <X size={16} />
            </button>
            <div className="absolute bottom-4 left-4 flex gap-2">
              <span className={`px-2.5 py-1 rounded-full text-xs font-mono font-medium ${diff.cls}`}>
                {diff.label}
              </span>
              <span className="px-2.5 py-1 rounded-full text-xs font-mono bg-white/10 text-brand-muted flex items-center gap-1">
                {TerrainIcon && <TerrainIcon size={11} />} {event.terrain}
              </span>
            </div>
          </div>

          <div className="p-6 space-y-5">
            <div>
              <h3 className="font-display text-brand-text text-2xl mb-1">{event.name}</h3>
              <div className="flex flex-wrap gap-4 text-sm font-mono text-brand-muted">
                <span className="flex items-center gap-1.5 text-brand-primary">
                  <Calendar size={13} /> {event.dateDisplay}
                </span>
                <span className="flex items-center gap-1.5">
                  <MapPin size={13} /> {event.location}
                </span>
              </div>
            </div>

            {/* Vagas */}
            <div>
              <div className="flex justify-between text-xs font-mono text-brand-muted mb-1.5">
                <span>VAGAS PREENCHIDAS</span>
                <span className="text-brand-primary">{event.registered}/{event.maxParticipants}</span>
              </div>
              <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${filled}%` }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="h-full bg-brand-primary rounded-full"
                />
              </div>
            </div>

            <p className="font-body text-brand-muted text-sm leading-relaxed whitespace-pre-line">
              {event.fullDesc}
            </p>

            {/* Requirements */}
            <div>
              <h4 className="section-label mb-3">REQUISITOS</h4>
              <div className="grid grid-cols-2 gap-2">
                {event.requirements.map((req) => (
                  <div key={req} className="flex items-center gap-2 text-sm text-brand-muted">
                    <div className="w-1 h-1 rounded-full bg-brand-primary flex-shrink-0" />
                    {req}
                  </div>
                ))}
              </div>
            </div>

            {/* Meet info */}
            <div className="bg-brand-bg rounded-lg p-4 space-y-2 text-sm font-mono">
              <div className="text-brand-muted">
                <span className="text-brand-primary mr-2">PONTO:</span>{event.meetPoint}
              </div>
              <div className="text-brand-muted">
                <span className="text-brand-primary mr-2">HORÁRIO:</span>{event.meetTime}
              </div>
            </div>

            {/* CTA */}
            <a
              href={`https://wa.me/5522990000000?text=Olá! Tenho interesse em participar da trilha: ${encodeURIComponent(event.name)} — ${event.dateDisplay}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-3 bg-brand-primary hover:bg-brand-accent text-white font-display tracking-widest text-base rounded-lg transition-colors glow-orange"
            >
              INSCREVER-SE VIA WHATSAPP
              <ChevronRight size={18} />
            </a>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

export default function Events() {
  const [selectedEvent, setSelectedEvent] = useState(null)

  return (
    <section
      id="eventos"
      className="relative bg-brand-surface py-24 lg:py-32 clip-diagonal-reverse"
      style={{ marginTop: '-4rem' }}
    >
      {/* Background pattern */}
      <div
        className="absolute inset-0 opacity-3 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(232,118,10,0.15) 1px, transparent 0)',
          backgroundSize: '40px 40px',
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
            ◈ AGENDA OFICIAL
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-brand-text leading-none"
            style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)' }}
          >
            PRÓXIMAS
            <span className="text-brand-primary"> TRILHAS</span>
          </motion.h2>
        </div>

        {/* Event Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {EVENTS.map((event, i) => {
            const diff = DIFFICULTY[event.difficulty]
            const TerrainIcon = TERRAIN_ICONS[event.terrain]
            const filled = Math.round((event.registered / event.maxParticipants) * 100)

            return (
              <motion.article
                key={event.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12, duration: 0.6 }}
                whileHover={{ y: -6 }}
                className="group bg-brand-bg border border-white/5 hover:border-brand-primary/30 rounded-xl overflow-hidden transition-all duration-300 cursor-pointer flex flex-col"
                onClick={() => setSelectedEvent(event)}
              >
                {/* Card image */}
                <div className="relative h-44 overflow-hidden">
                  <img
                    src={event.image}
                    alt={event.name}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-bg via-brand-bg/20 to-transparent" />
                  {/* Terrain badge */}
                  <span className="absolute top-3 left-3 flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-mono bg-black/70 text-brand-muted backdrop-blur-sm">
                    {TerrainIcon && <TerrainIcon size={11} />} {event.terrain}
                  </span>
                </div>

                <div className="p-5 flex flex-col flex-1 gap-3">
                  {/* Difficulty */}
                  <span className={`self-start px-2.5 py-0.5 rounded text-xs font-mono tracking-wider ${diff.cls}`}>
                    {diff.label}
                  </span>

                  {/* Title */}
                  <h3 className="font-display text-brand-text text-xl leading-tight group-hover:text-brand-primary transition-colors">
                    {event.name}
                  </h3>

                  {/* Date */}
                  <div className="flex items-center gap-2 font-mono text-brand-primary text-xs">
                    <Calendar size={12} />
                    {event.dateDisplay}
                  </div>

                  {/* Description */}
                  <p className="font-body text-brand-muted text-sm leading-relaxed line-clamp-2 flex-1">
                    {event.shortDesc}
                  </p>

                  {/* Vagas */}
                  <div>
                    <div className="flex justify-between text-xs font-mono text-brand-muted mb-1">
                      <span>VAGAS</span>
                      <span>{event.registered}/{event.maxParticipants}</span>
                    </div>
                    <div className="h-1 bg-white/10 rounded-full">
                      <div
                        className="h-full bg-brand-primary rounded-full transition-all duration-500"
                        style={{ width: `${filled}%` }}
                      />
                    </div>
                  </div>

                  {/* CTA */}
                  <button className="flex items-center justify-center gap-2 w-full mt-1 py-2.5 border border-brand-primary/40 hover:bg-brand-primary hover:border-brand-primary text-brand-primary hover:text-white font-body font-semibold text-sm rounded-lg transition-all duration-200 group-hover:border-brand-primary">
                    VER DETALHES
                    <ChevronRight size={15} className="transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              </motion.article>
            )
          })}
        </div>
      </div>

      {selectedEvent && (
        <EventModal event={selectedEvent} onClose={() => setSelectedEvent(null)} />
      )}
    </section>
  )
}
