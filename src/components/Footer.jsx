import { ArrowUpRight } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative bg-black pt-16 pb-8 border-t border-white/10 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-[1px] bg-gradient-to-r from-transparent via-neon/50 to-transparent" />
      
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          
          <div className="mb-6 md:mb-0 flex flex-col items-center md:items-start gap-4">
             <img src="/logo.png" alt="ADVIZE" className="h-8 object-contain" />
             <div className="text-gray-500 text-sm text-center md:text-left space-y-1">
               <p>Powai, Mumbai, India</p>
               <p>+91 90797 84795</p>
             </div>
          </div>
          
          <div className="flex gap-6">
            <a href="#" className="text-gray-400 hover:text-neon transition-colors flex items-center gap-1 text-sm font-medium">
              TWITTER <ArrowUpRight size={14} />
            </a>
            <a href="#" className="text-gray-400 hover:text-neon transition-colors flex items-center gap-1 text-sm font-medium">
              LINKEDIN <ArrowUpRight size={14} />
            </a>
            <a href="#" className="text-gray-400 hover:text-neon transition-colors flex items-center gap-1 text-sm font-medium">
              INSTAGRAM <ArrowUpRight size={14} />
            </a>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center text-gray-500 text-xs">
          <p>&copy; {new Date().getFullYear()} Advize Agency. All systems operational.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
