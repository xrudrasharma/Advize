import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';

const TypewriterText = ({ text }) => {
  const [displayText, setDisplayText] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timer = setTimeout(() => {
        setDisplayText((prev) => prev + text.charAt(index));
        setIndex(index + 1);
      }, Math.random() * 50 + 50);
      return () => clearTimeout(timer);
    }
  }, [index, text]);

  return (
    <span className="inline-block relative">
      {displayText}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ repeat: Infinity, duration: 0.8 }}
        className="inline-block w-1 h-[1em] bg-neon ml-1 align-middle"
      />
    </span>
  );
};

const InteractiveBackground = () => {
  const ref = useRef(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { stiffness: 100, damping: 30, mass: 0.5 };
  const smoothMouseX = useSpring(mouseX, springConfig);
  const smoothMouseY = useSpring(mouseY, springConfig);

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const x = (e.clientX - left) / width - 0.5;
    const y = (e.clientY - top) / height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  // Parallax layers
  const layer1X = useTransform(smoothMouseX, [-0.5, 0.5], [-50, 50]);
  const layer1Y = useTransform(smoothMouseY, [-0.5, 0.5], [-50, 50]);
  
  const layer2X = useTransform(smoothMouseX, [-0.5, 0.5], [80, -80]);
  const layer2Y = useTransform(smoothMouseY, [-0.5, 0.5], [80, -80]);

  const layer3X = useTransform(smoothMouseX, [-0.5, 0.5], [-120, 120]);
  const layer3Y = useTransform(smoothMouseY, [-0.5, 0.5], [-120, 120]);

  return (
    <div 
      ref={ref} 
      onMouseMove={handleMouseMove}
      className="absolute inset-0 z-0 overflow-hidden"
    >
      <div className="absolute inset-0 bg-dark z-0" />
      
      {/* Interactive Glowing Orbs */}
      <motion.div
        style={{ x: layer3X, y: layer3Y }}
        className="absolute top-[20%] left-[15%] w-[40rem] h-[40rem] bg-neon/15 rounded-full blur-[150px] mix-blend-screen"
      />
      <motion.div
        style={{ x: layer2X, y: layer2Y }}
        className="absolute bottom-[10%] right-[10%] w-[35rem] h-[35rem] bg-emerald-700/20 rounded-full blur-[130px] mix-blend-screen"
      />

      
      {/* Dynamic Perspective Grid */}
      <motion.div 
        style={{ x: useTransform(smoothMouseX, [-0.5, 0.5], [-20, 20]), y: useTransform(smoothMouseY, [-0.5, 0.5], [-20, 20]) }}
        className="absolute inset-[-10%] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCI+CjxwYXRoIGQ9Ik0wIDBoNjB2NjBIMHoiIGZpbGw9Im5vbmUiLz4KPHBhdGggZD0iTTAgNjBoNjBNNjAgMHY2MCIgc3Ryb2tlPSJyZ2JhKDAsIDI1NSwgMTAyLCAwLjA1KSIgc3Ryb2tlLXdpZHRoPSIxIi8+Cjwvc3ZnPg==')] z-10 opacity-70"
        style={{ 
          maskImage: 'radial-gradient(ellipse at center, transparent 20%, black 70%)',
          WebkitMaskImage: 'radial-gradient(ellipse at center, transparent 20%, black 70%)',
          perspective: '1000px',
          transform: 'rotateX(60deg) scale(2)',
          transformOrigin: 'bottom'
        }}
      />
    </div>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20">
      
      <InteractiveBackground />

      {/* Content */}
      <div className="container mx-auto px-6 relative z-20 flex flex-col items-center text-center pointer-events-none">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl pointer-events-auto"
        >
          <div className=" mt-16">
          <div className="mb-4 inline-block px-4 py-1.5 rounded-full border border-neon/30 bg-neon/5 backdrop-blur-md">
            <span className="text-neon font-semibold tracking-wider uppercase inline-block text-xs tracking-wider uppercase">Next-Gen Digital Agency</span>
          </div>
          </div>
          
          <h1 className="text-4xl md:text-7xl font-bold mb-6 leading-tight tracking-tight">
            <span className="block text-gray-300">Scale Your Business With</span>
            <span className="block text-white text-glow">
              <TypewriterText text="High-Performance Systems." />
            </span>
          </h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 1 }}
            className="text-lg md:text-xl text-gray-400 mb-8 max-w-2xl mx-auto drop-shadow-lg"
          >
            We engineer high-performance growth systems. Elevate your brand with cutting-edge SEO, web development, and social media dominance.
          </motion.p>
          
          {/* Trust Row */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.1, duration: 0.6 }}
            className="flex flex-wrap justify-center gap-4 mb-10"
          >
            {['Data-Driven', 'Lightning Fast', 'ROI-Focused'].map((badge, i) => (
              <span key={i} className="px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm text-sm font-semibold text-gray-300 flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-neon animate-pulse" />
                {badge}
              </span>
            ))}
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 2.2, duration: 0.5, type: 'spring' }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href="https://wa.me/919079784795"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-neon text-dark font-bold rounded-sm uppercase tracking-widest hover:bg-white hover:text-dark transition-all shadow-[0_0_20px_rgba(13,240,135,0.4)] hover:shadow-[0_0_30px_rgba(255,255,255,0.6)]"
            >
              Initiate Project
            </a>
            <a
              href="#services"
              className="px-8 py-4 bg-dark/50 backdrop-blur-sm border border-gray-600 text-gray-300 font-bold rounded-sm uppercase tracking-widest hover:border-neon hover:text-neon transition-all"
            >
              Explore Matrix
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
