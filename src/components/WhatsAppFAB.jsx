import { motion } from 'framer-motion'
import { MessageCircle } from 'lucide-react'

const WA_NUMBER = '5522990000000'
const WA_MSG = 'Olá! Vim pelo site do Jeep Clube São João da Barra e gostaria de mais informações!'

export default function WhatsAppFAB() {
  return (
    <motion.a
      href={`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(WA_MSG)}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar pelo WhatsApp"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1.5, type: 'spring', damping: 15 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed z-40 w-14 h-14 sm:w-14 sm:h-14 rounded-full bg-[#25D366] flex items-center justify-center shadow-xl shadow-green-900/40 whatsapp-fab group whatsapp-fab-wrap touch-manipulation"
      style={{ bottom: 'max(1.5rem, calc(env(safe-area-inset-bottom, 0px) + 1rem))', right: 'max(1.5rem, calc(env(safe-area-inset-right, 0px) + 1rem))' }}
    >
      <MessageCircle size={26} className="text-white fill-white" />

      {/* Tooltip — desktop only */}
      <div className="hidden sm:block absolute right-16 top-1/2 -translate-y-1/2 bg-brand-surface border border-white/10 text-brand-text text-xs font-body whitespace-nowrap px-3 py-1.5 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
        Falar no WhatsApp
        <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-full border-4 border-transparent border-l-brand-surface" />
      </div>
    </motion.a>
  )
}

