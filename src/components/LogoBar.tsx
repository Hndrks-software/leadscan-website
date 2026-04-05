import { motion } from 'framer-motion';

export function LogoBar() {
  return (
    <section className="py-16 border-y border-gray-100 bg-gray-50/50">
      <div className="max-w-6xl mx-auto px-6">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-xs uppercase tracking-[0.2em] text-gray-500 mb-10"
        >
          Vertrouwd door sales teams in heel Europa
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center items-center gap-x-16 gap-y-8"
        >
          {['TechCorp', 'PharmaSolutions', 'LogiFlow', 'DataDriven', 'SalesForward'].map((name, i) => (
            <span key={i} className="text-xl font-bold font-['Montserrat'] text-gray-200 hover:text-gray-400 transition-colors">
              {name}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
