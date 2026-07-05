import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { Search, Code2, Share2 } from 'lucide-react';
import { useRef } from 'react';

const TiltCard = ({ service, index }) => {
  const ref = useRef(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 15 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 15 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="relative group cursor-pointer"
    >
      <div 
        className="absolute inset-0 bg-neon rounded-xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500"
        style={{ transform: "translateZ(-50px)" }}
      />
      <div 
        className="bg-white/5 backdrop-blur-2xl p-8 rounded-xl h-full border border-white/20 group-hover:border-neon/60 transition-colors duration-500 flex flex-col items-start relative z-10 overflow-hidden shadow-2xl"
        style={{ transform: "translateZ(50px)" }}
      >
        <div className="absolute -right-10 -top-10 w-32 h-32 bg-neon/10 rounded-full blur-2xl group-hover:bg-neon/20 transition-colors duration-500" />
        
        <div className="w-14 h-14 rounded-lg bg-dark/50 border border-white/10 flex items-center justify-center mb-6 text-neon group-hover:scale-110 transition-transform duration-500 shadow-[0_0_15px_rgba(13,240,135,0.1)] group-hover:shadow-[0_0_20px_rgba(13,240,135,0.4)]">
          {service.icon}
        </div>
        
        <h3 className="text-2xl font-bold mb-4 text-white">{service.title}</h3>
        <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
          {service.description}
        </p>

        <div className="mt-8 flex items-center text-neon text-sm font-semibold uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity translate-y-4 group-hover:translate-y-0 duration-300">
          Explore Protocol &rarr;
        </div>
      </div>
    </motion.div>
  );
};

const Services = () => {
  const services = [
    {
      title: "SEO Optimization",
      description: "Dominate search results and capture high-intent traffic that is actively looking to buy what you sell.",
      icon: <Search size={28} />
    },
    {
      title: "Web Development",
      description: "Sites that load instantly and convert cold traffic. Built on React for maximum performance and security.",
      icon: <Code2 size={28} />
    },
    {
      title: "Social Media Dominance",
      description: "Viral marketing systems that hijack attention and build a cult-like following for your brand.",
      icon: <Share2 size={28} />
    }
  ];

  return (
    <section id="services" className="py-24 relative z-10 bg-dark">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Core <span className="text-neon text-glow">Protocols</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 max-w-2xl mx-auto"
          >
            We don't just build websites. We architect growth engines designed to dominate the digital landscape.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 perspective-[1000px]">
          {services.map((service, index) => (
            <TiltCard key={index} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
