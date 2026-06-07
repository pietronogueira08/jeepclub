import { useState } from 'react'
import { motion } from 'framer-motion'
import { Check, Send, User, Phone, Car } from 'lucide-react'

const WA_NUMBER = '5522990000000'

const BENEFITS = [
  'Acesso a trilhas exclusivas do clube',
  'Desconto em borracharias e acessórios parceiros',
  'Comunidade ativa no WhatsApp',
  'Kit de boas-vindas do clube',
  'Participação em eventos e expedições',
  'Seguro coletivo em trilhas oficiais',
  'Suporte mecânico em campo',
  'Acesso ao calendário de eventos com antecedência',
]

const JEEP_MODELS = [
  'Jeep Wrangler', 'Jeep Renegade', 'Jeep Compass', 'Jeep Commander',
  'Jeep Cherokee', 'Jeep Grand Cherokee', 'Jeep Gladiator', 'Outro',
]

export default function Members() {
  const [form, setForm] = useState({ nome: '', telefone: '', jeep: '' })
  const [errors, setErrors] = useState({})

  const validate = () => {
    const e = {}
    if (!form.nome.trim())     e.nome     = 'Nome obrigatório'
    if (!form.telefone.trim()) e.telefone = 'Telefone obrigatório'
    if (!form.jeep.trim())     e.jeep     = 'Modelo obrigatório'
    setErrors(e)
    return Object.keys(e).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!validate()) return
    const msg = `Olá! Quero me tornar membro do Jeep Clube SJB! 🚙\n\n*Nome:* ${form.nome}\n*Telefone:* ${form.telefone}\n*Modelo do Jeep:* ${form.jeep}\n\nAguardo as informações para associação!`
    window.open(`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`, '_blank')
  }

  const handleChange = (field, value) => {
    setForm(prev => ({ ...prev, [field]: value }))
    if (errors[field]) setErrors(prev => ({ ...prev, [field]: '' }))
  }

  return (
    <section
      id="membros"
      className="relative bg-brand-bg py-20 sm:py-24 lg:py-36 overflow-hidden"
    >
      <div className="tire-divider absolute top-0 left-0 right-0 opacity-20" />

      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 60% 60% at 50% 50%, rgba(232,118,10,0.06) 0%, transparent 70%)',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="section-label mb-3"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          ◈ ASSOCIAÇÃO
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-display text-brand-text leading-none mb-10 sm:mb-14"
          style={{ fontSize: 'clamp(2.2rem, 7vw, 4.5rem)' }}
        >
          SEJA UM<span className="text-brand-primary"> MEMBRO</span>
        </motion.h2>

        {/* Main card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="relative rounded-2xl overflow-hidden"
          style={{
            background: 'linear-gradient(135deg, #141414 0%, #0e0e0e 100%)',
            boxShadow: '0 0 60px rgba(232,118,10,0.15), 0 0 0 1px rgba(232,118,10,0.2)',
          }}
        >
          <div
            className="absolute top-0 right-0 w-60 sm:w-80 h-60 sm:h-80 pointer-events-none"
            style={{
              background: 'radial-gradient(circle at top right, rgba(232,118,10,0.08), transparent 60%)',
            }}
          />

          <div className="grid lg:grid-cols-2 gap-0">
            {/* LEFT: Benefits */}
            <div className="p-6 sm:p-8 lg:p-12 border-b lg:border-b-0 lg:border-r border-white/5">
              <div className="mb-6 sm:mb-8">
                <h3 className="font-display text-brand-text text-xl sm:text-2xl mb-2">O QUE VOCÊ GANHA</h3>
                <div className="w-12 h-0.5 bg-brand-primary" />
              </div>

              <ul className="space-y-3 sm:space-y-4">
                {BENEFITS.map((benefit, i) => (
                  <motion.li
                    key={benefit}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 + i * 0.06 }}
                    className="flex items-start gap-3 group"
                  >
                    <div className="w-5 h-5 rounded-full bg-brand-primary/20 border border-brand-primary/50 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-brand-primary/40 transition-colors">
                      <Check size={10} className="text-brand-primary" />
                    </div>
                    <span className="font-body text-brand-muted text-sm leading-relaxed group-hover:text-brand-text transition-colors">
                      {benefit}
                    </span>
                  </motion.li>
                ))}
              </ul>

              {/* Stats */}
              <div className="mt-8 sm:mt-10 grid grid-cols-2 gap-3 sm:gap-4">
                <div className="p-3 sm:p-4 rounded-xl bg-brand-primary/5 border border-brand-primary/15 text-center">
                  <div className="font-display text-brand-primary text-2xl sm:text-3xl">R$ 40</div>
                  <div className="font-mono text-brand-muted text-xs mt-1">MENSALIDADE</div>
                </div>
                <div className="p-3 sm:p-4 rounded-xl bg-brand-primary/5 border border-brand-primary/15 text-center">
                  <div className="font-display text-brand-primary text-2xl sm:text-3xl">87+</div>
                  <div className="font-mono text-brand-muted text-xs mt-1">MEMBROS ATIVOS</div>
                </div>
              </div>
            </div>

            {/* RIGHT: Form */}
            <div className="p-6 sm:p-8 lg:p-12">
              <div className="mb-6 sm:mb-8">
                <h3 className="font-display text-brand-text text-xl sm:text-2xl mb-2">QUERO PARTICIPAR</h3>
                <div className="w-12 h-0.5 bg-brand-primary" />
                <p className="font-body text-brand-muted text-sm mt-3">
                  Preencha o formulário e entraremos em contato via WhatsApp!
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                {/* Nome */}
                <div>
                  <label className="section-label text-[10px] block mb-2">SEU NOME</label>
                  <div className="relative">
                    <User size={14} className="absolute left-4 top-1/2 -translate-y-1/2 text-brand-muted" />
                    <input
                      type="text"
                      placeholder="Ex: João da Silva"
                      value={form.nome}
                      onChange={(e) => handleChange('nome', e.target.value)}
                      className="input-field pl-10"
                    />
                  </div>
                  {errors.nome && <p className="text-red-400 text-xs mt-1 font-mono">{errors.nome}</p>}
                </div>

                {/* Telefone */}
                <div>
                  <label className="section-label text-[10px] block mb-2">TELEFONE / WHATSAPP</label>
                  <div className="relative">
                    <Phone size={14} className="absolute left-4 top-1/2 -translate-y-1/2 text-brand-muted" />
                    <input
                      type="tel"
                      inputMode="tel"
                      placeholder="(22) 9XXXX-XXXX"
                      value={form.telefone}
                      onChange={(e) => handleChange('telefone', e.target.value)}
                      className="input-field pl-10"
                    />
                  </div>
                  {errors.telefone && <p className="text-red-400 text-xs mt-1 font-mono">{errors.telefone}</p>}
                </div>

                {/* Modelo do Jeep */}
                <div>
                  <label className="section-label text-[10px] block mb-2">MODELO DO JEEP</label>
                  <div className="relative">
                    <Car size={14} className="absolute left-4 top-1/2 -translate-y-1/2 text-brand-muted pointer-events-none" />
                    <select
                      value={form.jeep}
                      onChange={(e) => handleChange('jeep', e.target.value)}
                      className="input-field pl-10 appearance-none cursor-pointer"
                    >
                      <option value="" disabled>Selecione seu Jeep</option>
                      {JEEP_MODELS.map(m => (
                        <option key={m} value={m}>{m}</option>
                      ))}
                    </select>
                  </div>
                  {errors.jeep && <p className="text-red-400 text-xs mt-1 font-mono">{errors.jeep}</p>}
                </div>

                {/* Submit */}
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02, boxShadow: '0 0 32px rgba(232,118,10,0.5)' }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center justify-center gap-3 w-full py-4 bg-brand-primary hover:bg-brand-accent text-white font-display tracking-[0.12em] sm:tracking-[0.15em] text-sm sm:text-base rounded-lg transition-colors duration-200 glow-orange mt-2 touch-manipulation"
                >
                  ENVIAR SOLICITAÇÃO
                  <Send size={16} />
                </motion.button>

                <p className="text-center font-mono text-brand-muted text-xs">
                  Você será redirecionado ao WhatsApp para finalizar
                </p>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
