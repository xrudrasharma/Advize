import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useRef, useState } from 'react';

const MagneticButton = ({ children, className }) => {
  const ref = useRef(null);
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { stiffness: 150, damping: 15, mass: 0.1 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    x.set(middleX * 0.3);
    y.set(middleY * 0.3);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.button
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x: springX, y: springY }}
      className={`relative ${className}`}
    >
      {children}
    </motion.button>
  );
};

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nMessage: ${formData.message}`;
    const encodedText = encodeURIComponent(text);
    window.open(`https://wa.me/919079784795?text=${encodedText}`, '_blank');
  };

  return (
    <section id="contact" className="py-24 relative z-10 bg-dark overflow-hidden">
      {/* Background flare */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-neon/5 rounded-full blur-[150px] pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10 flex justify-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-2xl glassmorphism p-8 md:p-12 rounded-3xl border border-white/10"
        >
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Initialize <span className="text-neon text-glow">Contact Protocol</span></h2>
            <p className="text-gray-400">Ready to scale? Drop your details into the system and our team will connect within 24 hours.</p>
          </div>

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs text-neon uppercase tracking-wider font-semibold ml-1">Transmission Name</label>
                <input 
                  type="text" 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className="w-full bg-white/5 border border-white/10 focus:border-neon focus:ring-1 focus:ring-neon rounded-lg px-4 py-3 text-white outline-none transition-all placeholder:text-gray-600"
                  required
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs text-neon uppercase tracking-wider font-semibold ml-1">Comms Email</label>
                <input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  className="w-full bg-white/5 border border-white/10 focus:border-neon focus:ring-1 focus:ring-neon rounded-lg px-4 py-3 text-white outline-none transition-all placeholder:text-gray-600"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs text-neon uppercase tracking-wider font-semibold ml-1">Phone Number</label>
              <input 
                type="tel" 
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+1 234 567 8900"
                className="w-full bg-white/5 border border-white/10 focus:border-neon focus:ring-1 focus:ring-neon rounded-lg px-4 py-3 text-white outline-none transition-all placeholder:text-gray-600"
                required
              />
            </div>

            <div className="space-y-2">
              <label className="text-xs text-neon uppercase tracking-wider font-semibold ml-1">System Requirements (Message)</label>
              <textarea 
                rows="4"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Detail your operational needs..."
                className="w-full bg-white/5 border border-white/10 focus:border-neon focus:ring-1 focus:ring-neon rounded-lg px-4 py-3 text-white outline-none transition-all resize-none placeholder:text-gray-600"
                required
              />
            </div>

            <div className="flex justify-center pt-4">
              <MagneticButton className="px-10 py-4 bg-neon text-dark font-bold uppercase tracking-widest rounded shadow-[0_0_20px_rgba(13,240,135,0.4)] hover:shadow-[0_0_30px_rgba(13,240,135,0.7)] transition-shadow">
                Transmit Data
              </MagneticButton>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactForm;
