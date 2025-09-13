import { motion } from 'framer-motion'

type Props = { id?: string; title?: string; eyebrow?: string; children: React.ReactNode; className?: string }
export default function Section({ id, title, eyebrow, children, className }: Props) {
  return (
    <section id={id} className={`py-12 md:py-16 ${className ?? ''}`}>
      <div className="container mx-auto px-4">
        {eyebrow && <p className="text-sm uppercase tracking-wide text-slate-500">{eyebrow}</p>}
        {title && (
          <motion.h2 initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-2xl md:text-3xl font-bold mt-2">
            {title}
          </motion.h2>
        )}
        <div className="mt-6">{children}</div>
      </div>
    </section>
  )
}
