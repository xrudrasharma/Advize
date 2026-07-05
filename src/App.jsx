import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Comparison from './components/Comparison';
import GrowthFormula from './components/GrowthFormula';
import Faq from './components/Faq';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen text-white bg-black bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(13,240,135,0.15),rgba(0,0,0,0))]">
      {/* Global Geometric Grid & Ambient Glow Overlay */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        {/* Grid */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+CjxwYXRoIGQ9Ik0wIDBoNDB2NDBIMHoiIGZpbGw9Im5vbmUiLz4KPHBhdGggZD0iTTAgNDBoNDBNNDAgMHY0MCIgc3Ryb2tlPSJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDMpIiBzdHJva2Utd2lkdGg9IjEiLz4KPC9zdmc+')] opacity-50 mix-blend-screen" />
        
        {/* Ambient Mesh Gradient Orbs */}
        <div className="absolute top-[-10%] left-[-10%] w-[45vw] h-[45vw] rounded-full bg-[#0DF087]/10 blur-[150px] mix-blend-screen" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[45vw] h-[45vw] rounded-full bg-[#0DF087]/10 blur-[150px] mix-blend-screen" />
      </div>
      
      <div className="relative z-10">
        <Navbar />
        
        <main>
          <Hero />
          <Services />
          <Comparison />
          <GrowthFormula />
          <Faq />
          <ContactForm />
        </main>

        <Footer />
      </div>
    </div>
  );
}

export default App;
