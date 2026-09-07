import { motion } from 'framer-motion';
import { Code2, FileText } from 'lucide-react';
import ReactBitsLanyard from './ReactBitsLanyard';
import { useLanguage } from '../context/LanguageContext';

export function HeroSection() {
  const { t } = useLanguage();
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="min-h-screen relative flex items-center justify-center pt-20 overflow-hidden bg-transparent">
      
      {/* Editorial Line */}
      <div className="absolute top-32 left-0 right-0 h-px bg-brown/10 z-0"></div>
      
      {/* Background Section Transition - Transparent Blue Circle */}
      <motion.div 
        animate={{ scale: [1, 1.02, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 -left-32 w-96 h-96 rounded-full border border-blue/10 bg-white/5 backdrop-blur-sm z-0"
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center relative z-10">
        
        {/* Left Content */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <div className="inline-block relative">
            <span className="text-brown font-bold tracking-widest text-sm mb-2 block uppercase">{t('hero.hello')}</span>
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-black text-[#0A3323] tracking-tighter leading-tight relative z-10 uppercase whitespace-pre-wrap">
              {t('hero.name').replace(' ', '\n')}
            </h1>
            {/* Sticky note */}
            <div className="absolute -top-4 -right-8 bg-yellow text-brown text-xs font-bold px-3 py-2 shadow-sm transform rotate-6 hover:rotate-12 transition-transform border border-brown">
              <span className="block border-b border-brown/20 pb-1 mb-1 uppercase text-[10px]">{t('hero.status')}</span>
              {t('hero.available')}
            </div>
          </div>

          <div className="space-y-2">
            <h2 className="text-xl sm:text-2xl font-bold text-brown">{t('hero.title1')}</h2>
            <h3 className="text-lg sm:text-xl font-bold text-brown/70">{t('hero.title2')}</h3>
          </div>

          <div className="space-y-4 max-w-lg">
            <p className="text-brown font-medium leading-relaxed">
              {t('hero.desc1')}
            </p>
            <p className="text-brown leading-relaxed border-l-4 border-yellow pl-4 italic font-medium">
              {t('hero.desc2')}
            </p>
          </div>

          <div className="flex flex-wrap gap-4 pt-4">
            <button 
              onClick={() => scrollTo('projects')}
              className="px-6 py-3 bg-blue text-white font-bold rounded-2xl border-2 border-brown hover:bg-red hover:text-white transition-colors shadow-[4px_4px_0px_rgba(98,63,27,1)] active:shadow-none active:translate-x-[4px] active:translate-y-[4px] flex items-center gap-2"
            >
              <Code2 className="w-5 h-5" />
              {t('hero.btn.projects')}
            </button>
            <button 
              onClick={() => scrollTo('resume')}
              className="px-6 py-3 bg-yellow text-brown font-bold rounded-2xl border-2 border-brown hover:bg-red hover:text-white transition-colors shadow-[4px_4px_0px_rgba(98,63,27,1)] active:shadow-none active:translate-x-[4px] active:translate-y-[4px] flex items-center gap-2"
            >
              <FileText className="w-5 h-5" />
              {t('hero.btn.resume')}
            </button>
          </div>
        </motion.div>

        {/* Visuals - 3D Lanyard Card with Grounded Physical Anchor */}
        <div className="relative w-full h-[480px] sm:h-[520px] lg:h-[600px] flex items-center justify-center order-first lg:order-last">
          
          {/* Physical Anchor Mount (Brass Retro Wall Clip & Metal Ring) */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center pointer-events-none">
            {/* Brass Wall Clip */}
            <div className="w-10 h-4 bg-gradient-to-b from-[#F7E7A9] via-[#EDCC4D] to-[#B88C30] border-2 border-brown rounded-sm shadow-[2px_2px_0px_rgba(98,63,27,1)] flex items-center justify-center">
              <div className="w-2.5 h-1 bg-brown/70 rounded-full"></div>
            </div>
            {/* Metal Ring Loop */}
            <div className="w-5 h-3 border-2 border-t-0 border-brown rounded-b-full -mt-0.5 bg-transparent shadow-[1px_1px_0px_rgba(98,63,27,0.3)]"></div>
          </div>

          {/* Lanyard 3D Card Canvas */}
          <div className="absolute inset-0 z-10 cursor-grab active:cursor-grabbing">
            <ReactBitsLanyard position={[0, -2, 20]} fov={14} frontImage="/profile3.jpg" />
          </div>

        </div>
      </div>
    </section>
  );
}


