import { motion } from 'framer-motion';
import { Terminal, Globe, Layers, Wrench, Database, Lightbulb, Users } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export function SkillsSection() {
  const { t } = useLanguage();

  const SKILL_CATEGORIES = [
    {
      title: t('skills.cat.lang'),
      icon: Terminal,
      variant: "blue",
      skills: ["JavaScript", "TypeScript", "HTML", "CSS"]
    },
    {
      title: t('skills.cat.web'),
      icon: Globe,
      variant: "blue",
      skills: ["React", "Next.js", "Tailwind CSS", t('skills.web.resp')]
    },
    {
      title: t('skills.cat.fw'),
      icon: Layers,
      variant: "yellow",
      skills: ["React Native (Expo)", "Node.js (Basic)"]
    },
    {
      title: t('skills.cat.tools'),
      icon: Wrench,
      variant: "cream",
      skills: ["VS Code", "Git", "GitHub", "Figma", "Postman"]
    },
    {
      title: t('skills.cat.db'),
      icon: Database,
      variant: "blue",
      skills: ["MySQL", "SQLite"]
    },
    {
      title: t('skills.cat.other'),
      icon: Lightbulb,
      variant: "cream",
      skills: ["REST API", "UI/UX Basics", "OOP", t('skills.soft.ps')]
    },
    {
      title: t('skills.cat.soft'),
      icon: Users,
      variant: "blue",
      skills: [t('skills.soft.ps'), t('skills.soft.lt'), t('skills.soft.tc'), t('skills.soft.comm'), t('skills.soft.sl')]
    }
  ];

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-transparent">
      
      {/* Background Section Transition - Transparent Yellow Blob */}
      <motion.div 
        animate={{ scale: [1, 1.05, 1], rotate: [0, 5, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[-10%] left-[-20%] w-[1000px] h-[1000px] rounded-[60%_40%_30%_70%] border border-yellow/10 bg-yellow/[0.03] backdrop-blur-md z-0 pointer-events-none"
      />
      
      {/* Editorial grid lines */}
      <div className="absolute top-1/2 left-0 right-0 h-px bg-brown/10 z-0"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-black text-brown tracking-tighter uppercase mb-4 relative inline-block">
            {t('skills.title')}
            {/* Red decorative dot */}
            <div className="absolute -top-2 -right-6 w-4 h-4 bg-red rounded-full border-2 border-brown"></div>
          </h2>
          <p className="text-xl font-bold text-brown">
            {t('skills.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SKILL_CATEGORIES.map((category, idx) => {
            const Icon = category.icon;
            
            // Define styling based on variant
            let cardClasses = "";
            let textClasses = "";
            let iconClasses = "text-red"; // small icons in red
            
            if (category.variant === "blue") {
              cardClasses = "bg-blue hover:bg-red border-2 border-brown";
              textClasses = "text-white";
            } else if (category.variant === "cream") {
              cardClasses = "bg-paper hover:bg-yellow border-2 border-brown";
              textClasses = "text-brown";
            } else if (category.variant === "yellow") {
              cardClasses = "bg-yellow hover:bg-blue border-2 border-brown group/yellow";
              textClasses = "text-brown group-hover/yellow:text-white";
            }

            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: idx * 0.1 }}
                className={`p-6 rounded-2xl shadow-[6px_6px_0px_rgba(98,63,27,1)] transition-colors duration-300 group flex flex-col ${cardClasses}`}
              >
                <div className="flex items-center gap-4 mb-6 pb-4 border-b-2 border-current opacity-80">
                  <div className={`p-2 bg-cream border-2 border-brown rounded-2xl group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className={`w-6 h-6 ${iconClasses}`} />
                  </div>
                  <h3 className={`font-black text-sm tracking-wider uppercase ${textClasses}`}>{category.title}</h3>
                </div>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {category.skills.map(skill => (
                    <span 
                      key={skill}
                      className={`px-3 py-1 font-bold text-xs uppercase border-2 border-current transition-colors duration-300 ${textClasses}`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}


