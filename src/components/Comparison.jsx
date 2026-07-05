import { motion } from 'framer-motion';
import { XCircle, CheckCircle2 } from 'lucide-react';

const Comparison = () => {
  const traditional = [
    "Slow 2-month turnarounds",
    "Bloated template websites",
    "Confusing vanity metrics",
    "Expensive overhead"
  ];

  const advize = [
    "Lightning-fast React launches",
    "Custom high-performance code",
    "Transparent ROI tracking",
    "Direct founder-to-founder communication"
  ];

  return (
    <section className="py-24 relative bg-dark z-10 overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            ADVIZE vs <span className="text-gray-500">Traditional Agencies</span>
          </motion.h2>
        </div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 relative">
          
          {/* Traditional Column */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white/5 backdrop-blur-xl p-8 md:p-10 rounded-2xl border border-white/5 opacity-80"
          >
            <h3 className="text-2xl font-bold text-gray-400 mb-8 flex items-center gap-3">
              Traditional Agencies
            </h3>
            <ul className="space-y-6">
              {traditional.map((item, index) => (
                <li key={index} className="flex items-start gap-4 text-gray-500">
                  <XCircle className="shrink-0 mt-0.5 text-red-900/50" />
                  <span className="font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* VS Badge (Desktop) */}
          <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-dark border border-white/10 rounded-full items-center justify-center z-20 font-bold text-gray-400">
            VS
          </div>

          {/* ADVIZE Column */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white/5 backdrop-blur-2xl p-8 md:p-10 rounded-2xl border border-neon/50 shadow-[0_0_40px_rgba(13,240,135,0.15)] relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-neon/10 rounded-full blur-[100px] pointer-events-none" />
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
              ADVIZE System
              <span className="px-3 py-1 rounded-full bg-neon/20 border border-neon text-neon text-xs tracking-widest uppercase ml-auto text-glow">Superior</span>
            </h3>
            <ul className="space-y-6 relative z-10">
              {advize.map((item, index) => (
                <li key={index} className="flex items-start gap-4 text-gray-100">
                  <CheckCircle2 className="shrink-0 mt-0.5 text-neon drop-shadow-[0_0_8px_rgba(13,240,135,0.8)]" />
                  <span className="font-semibold">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Comparison;
