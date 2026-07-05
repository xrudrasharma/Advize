import { motion } from 'framer-motion';

const GrowthFormula = () => {
  const steps = [
    {
      number: "01",
      title: "System Audit",
      description: "We analyze your current digital footprint to uncover major conversion bottlenecks and identify the most profitable growth channels."
    },
    {
      number: "02",
      title: "Engine Build",
      description: "We design and engineer a custom, lightning-fast digital architecture optimized to capture leads and convert traffic effortlessly."
    },
    {
      number: "03",
      title: "Profit Scaling",
      description: "We deploy aggressive SEO and social mechanics to flood your new engine with high-intent traffic, scaling your ROI."
    }
  ];

  return (
    <section id="growth" className="py-24 relative bg-dark z-10">
      <div className="container mx-auto px-6">
        
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 mb-4 rounded-full border border-neon bg-neon/10"
          >
            <span className="text-neon text-sm font-bold tracking-widest uppercase">Proprietary System</span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            The ₹20K <span className="text-neon text-glow">Growth Formula</span>
          </motion.h2>
        </div>

        <div className="max-w-5xl mx-auto relative">
          {/* Connecting Line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-neon/50 to-transparent -translate-x-1/2" />

          <div className="space-y-12 md:space-y-24">
            {steps.map((step, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className={`flex flex-col md:flex-row items-center justify-between gap-8 md:gap-0 ${index % 2 === 0 ? '' : 'md:flex-row-reverse'}`}
              >
                {/* Content */}
                <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'} relative z-10`}>
                  <div className="glassmorphism p-8 rounded-2xl hover:border-neon/40 transition-colors duration-300 relative group">
                    <div className="absolute inset-0 bg-neon/0 group-hover:bg-neon/5 transition-colors duration-300 rounded-2xl" />
                    <h3 className="text-2xl font-bold text-white mb-3">{step.title}</h3>
                    <p className="text-gray-400">{step.description}</p>
                  </div>
                </div>

                {/* Node */}
                <div className="w-14 h-14 rounded-full bg-dark border-2 border-neon flex items-center justify-center relative z-20 shadow-[0_0_15px_rgba(13,240,135,0.5)]">
                  <span className="text-neon font-bold">{step.number}</span>
                </div>

                {/* Spacer */}
                <div className="hidden md:block w-5/12" />
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default GrowthFormula;
