import { motion } from 'framer-motion'
import { MessageCircle, ShoppingBag, Tag } from 'lucide-react'

const WA_NUMBER = '5522990000000'

const PRODUCTS = [
  {
    id: 1,
    name: 'Camiseta Oficial do Clube',
    price: 'R$ 79,90',
    desc: 'Camiseta 100% algodão com o brasão do clube bordado no peito. Disponível em P, M, G e GG. Cor: Preta e laranja.',
    image: '/mockup-1.jpeg',
    tag: 'MAIS VENDIDO',
    tagColor: 'text-yellow-400 bg-yellow-400/10',
    whatsappMsg: 'Olá! Quero pedir a Camiseta Oficial do Clube (R$ 79,90). Me envie as opções de tamanho disponíveis!',
  },
  {
    id: 2,
    name: 'Adesivo Logo Oficial',
    price: 'R$ 24,90',
    desc: 'Adesivo resinado impermeável com o logo do clube. Alta aderência para uso externo. Kit com 3 tamanhos (P, M, G).',
    image: '/mockup-2.jpeg',
    tag: 'NOVO',
    tagColor: 'text-green-400 bg-green-400/10',
    whatsappMsg: 'Olá! Quero pedir o Adesivo Logo Oficial (R$ 24,90). Qual a disponibilidade?',
  },
  {
    id: 3,
    name: 'Boné Trucker Clube',
    price: 'R$ 69,90',
    desc: 'Boné modelo trucker com tela traseira, logo bordado e ajuste snapback. Unissex. Cores: Preto/Laranja.',
    image: '/mockup-3.jpeg',
    tag: 'EDIÇÃO LIMITADA',
    tagColor: 'text-brand-primary bg-brand-primary/10',
    whatsappMsg: 'Olá! Quero pedir o Boné Trucker do Clube (R$ 69,90). Ainda tem em estoque?',
  },
]

export default function Store() {
  return (
    <section
      id="loja"
      className="relative bg-brand-surface py-20 sm:py-24 lg:py-32 overflow-hidden"
    >
      {/* Border accents */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(to right, transparent, rgba(232,118,10,0.4), transparent)' }}
      />
      <div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(to right, transparent, rgba(232,118,10,0.4), transparent)' }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-10 sm:mb-14">
          <motion.div
            className="section-label mb-3"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            ◈ LOJA OFICIAL
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex flex-col sm:flex-row sm:items-end gap-3 justify-between"
          >
            <h2
              className="font-display text-brand-text leading-none"
              style={{ fontSize: 'clamp(2.2rem, 7vw, 4.5rem)' }}
            >
              MERCH DO
              <span className="text-brand-primary"> CLUBE</span>
            </h2>
            <p className="font-body text-brand-muted text-sm max-w-xs">
              Use com orgulho. Represente o clube onde for.
            </p>
          </motion.div>
        </div>

        {/* Products */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-8">
          {PRODUCTS.map((product, i) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              whileHover={{ y: -6 }}
              className="group bg-brand-bg border border-white/5 hover:border-brand-primary/30 rounded-xl overflow-hidden transition-all duration-300 flex flex-col"
            >
              {/* Product image */}
              <div className="relative h-56 sm:h-60 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-bg via-transparent to-transparent" />

                <span className={`absolute top-3 left-3 px-2.5 py-1 rounded text-xs font-mono tracking-wider ${product.tagColor}`}>
                  {product.tag}
                </span>

                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-12 h-12 rounded-full bg-brand-primary/90 flex items-center justify-center">
                    <ShoppingBag size={20} className="text-white" />
                  </div>
                </div>
              </div>

              <div className="p-4 sm:p-5 flex flex-col gap-3 flex-1">
                <div className="flex items-start justify-between gap-2">
                  <h3 className="font-display text-brand-text text-lg leading-tight group-hover:text-brand-primary transition-colors">
                    {product.name}
                  </h3>
                  <span className="font-mono text-brand-accent text-base font-medium whitespace-nowrap">
                    {product.price}
                  </span>
                </div>

                <p className="font-body text-brand-muted text-sm leading-relaxed flex-1">
                  {product.desc}
                </p>

                <div className="tire-divider my-1" />

                {/* WhatsApp CTA — large touch target */}
                <a
                  href={`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(product.whatsappMsg)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-3.5 bg-[#25D366] hover:bg-[#1da851] active:bg-[#1da851] text-white font-body font-semibold text-sm rounded-lg transition-all duration-200 shadow-lg shadow-green-900/20 touch-manipulation"
                >
                  <MessageCircle size={16} />
                  PEDIR VIA WHATSAPP
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom info */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-8 sm:mt-10 flex flex-wrap gap-4 sm:gap-6 justify-center text-brand-muted text-xs sm:text-sm font-body"
        >
          {['Entrega em toda a região', 'Retirada na sede do clube', 'Pagamento via PIX ou dinheiro'].map((info) => (
            <div key={info} className="flex items-center gap-2">
              <Tag size={12} className="text-brand-primary" />
              {info}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
