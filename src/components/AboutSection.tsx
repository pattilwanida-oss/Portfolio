import { motion } from 'framer-motion';
import { Target } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export function AboutSection() {
  const { t } = useLanguage();
  return (
    <section id="about" className="py-24 relative overflow-hidden bg-transparent">
      
      {/* Background Section Transition - Transparent Brown Shape */}
      <motion.div 
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-10 right-[-10%] w-3/4 h-3/4 max-w-[800px] max-h-[800px] rounded-[30%_70%_50%_50%] border border-brown/10 bg-brown/[0.02] backdrop-blur-[10px] z-0 pointer-events-none"
      />
      
      {/* Editorial thin lines */}
      <div className="absolute top-0 bottom-0 left-10 w-px bg-brown/10 z-0"></div>
      
      {/* GLASSY DECORATIVE PANEL */}
      <motion.div 
        animate={{ y: [0, -5, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute top-[40%] right-[-2%] p-8 glass-panel rounded-3xl transform -rotate-12 z-0 hidden lg:block"
      >
        <span className="text-xs font-black tracking-widest text-brown opacity-50 uppercase flex flex-col items-center gap-2">
          <span>CREATIVE</span>
          <span className="w-8 h-px bg-brown/30"></span>
          <span>PORTFOLIO</span>
        </span>
      </motion.div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-brown tracking-tighter uppercase mb-4 flex flex-col">
            <span>{t('about.title')}</span>
            <span className="text-blue">{t('about.me')}</span>
          </h2>
          <p className="text-xl font-bold text-brown border-l-4 border-blue pl-4">
            {t('about.subtitle')}
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          
          {/* Profile & Intro */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="bg-cream p-8 rounded-2xl border-2 border-brown shadow-[8px_8px_0px_rgba(98,63,27,1)] relative h-full flex flex-col justify-start"
          >
            <div className="absolute -top-4 -left-4 px-3 py-1 bg-blue text-brown font-bold text-xs uppercase border-2 border-brown shadow-[2px_2px_0px_rgba(98,63,27,1)] transform -rotate-3 z-10">
              {t('about.profile')}
            </div>
            
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mb-8 pt-2">
              <div className="w-20 h-20 bg-cream rounded-2xl flex items-center justify-center border-2 border-blue shadow-[4px_4px_0px_rgba(50,36,112,1)] shrink-0 overflow-hidden">
                <img src="/profile.jpg" alt="Profile" className="w-full h-full object-cover" />
              </div>
              <div>
                <h3 className="text-3xl font-black text-brown">{t('hero.name')}</h3>
                <p className="text-base font-bold text-red mt-2">{t('hero.title2')}</p>
              </div>
            </div>

            <div>
              <h4 className="text-sm font-bold text-brown tracking-widest uppercase mb-3 flex items-center gap-2">
                <div className="w-2 h-2 bg-red border border-brown"></div> {t('about.intro')}
              </h4>
              <p className="text-brown font-medium leading-relaxed text-lg">
                {t('about.intro.desc')}
              </p>
            </div>
          </motion.div>

          {/* Career Objective */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.2 }}
            className="bg-cream p-8 rounded-2xl border-2 border-brown shadow-[8px_8px_0px_rgba(98,63,27,1)] relative h-full flex flex-col justify-start"
          >
            <div className="absolute -top-4 -left-4 px-3 py-1 bg-blue text-brown font-bold text-xs uppercase border-2 border-brown shadow-[2px_2px_0px_rgba(98,63,27,1)] transform -rotate-3 z-10">
              OBJECTIVE
            </div>
            
            <div className="pt-2">
              <h4 className="text-sm font-bold text-brown tracking-widest uppercase mb-4 flex items-center gap-2">
                <Target className="w-6 h-6 text-red" /> {t('about.objective')}
              </h4>
              <p className="text-brown font-medium leading-relaxed text-lg">
                {t('about.objective.desc')}
              </p>
            </div>
          </motion.div>

        </div>

        {/* Skills Marquee */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mt-16 relative w-full"
        >
          <div className="tech-marquee-container">
            <div className="tech-marquee-row left">
              {[
                { id: 'html', name: 'HTML' },
                { id: 'css', name: 'CSS' },
                { id: 'js', name: 'JavaScript' },
                { id: 'ts', name: 'TypeScript' },
                { id: 'react', name: 'React' },
                { id: 'nextjs', name: 'Next.js' },
                { id: 'python', name: 'Python' },
                { id: 'html', name: 'HTML' },
                { id: 'css', name: 'CSS' },
                { id: 'js', name: 'JavaScript' },
                { id: 'ts', name: 'TypeScript' },
                { id: 'react', name: 'React' },
                { id: 'nextjs', name: 'Next.js' },
                { id: 'python', name: 'Python' }
              ].map((skill, i) => (
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-cream border-2 border-brown rounded-full font-bold text-sm text-brown shadow-[2px_2px_0px_rgba(98,63,27,1)] whitespace-nowrap hover:bg-blue transition-colors" title={skill.name} key={`row1-${i}`}>
                  <img src={`https://skillicons.dev/icons?i=${skill.id}`} alt={skill.name} loading="lazy" decoding="async" style={{ width: '18px', height: '18px' }} />
                  <span>{skill.name}</span>
                </div>
              ))}
            </div>
            <div className="tech-marquee-row right mt-2">
              {[
                { id: 'nodejs', name: 'Node.js' },
                { id: 'tailwind', name: 'Tailwind' },
                { id: 'figma', name: 'Figma' },
                { id: 'git', name: 'Git' },
                { id: 'github', name: 'GitHub' },
                { id: 'vscode', name: 'VS Code' },
                { id: 'nodejs', name: 'Node.js' },
                { id: 'tailwind', name: 'Tailwind' },
                { id: 'figma', name: 'Figma' },
                { id: 'git', name: 'Git' },
                { id: 'github', name: 'GitHub' },
                { id: 'vscode', name: 'VS Code' }
              ].map((skill, i) => (
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-cream border-2 border-brown rounded-full font-bold text-sm text-brown shadow-[2px_2px_0px_rgba(98,63,27,1)] whitespace-nowrap hover:bg-blue transition-colors" title={skill.name} key={`row2-${i}`}>
                  <img src={`https://skillicons.dev/icons?i=${skill.id}`} alt={skill.name} loading="lazy" decoding="async" style={{ width: '18px', height: '18px' }} />
                  <span>{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

