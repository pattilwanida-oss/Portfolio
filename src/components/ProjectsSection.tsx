import { motion } from 'framer-motion';
import { ExternalLink, Code2 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const GithubIcon = () => (
  <svg 
    viewBox="0 0 24 24" 
    width="24" 
    height="24" 
    stroke="currentColor" 
    strokeWidth="2" 
    fill="none" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

export function ProjectsSection() {
  const { t } = useLanguage();

  const PROJECTS = [
    {
      title: "CSS FILES",
      subtitle: t('proj1.subtitle'),
      description: t('proj1.desc'),
      responsibilities: [
        t('proj1.res1'),
        t('proj1.res2'),
        t('proj1.res3'),
        t('proj1.res4')
      ],
      tech: ["HTML5", "CSS3", "JavaScript"],
      links: {
        demo: "#",
        github: "#",
        caseStudy: "#"
      },
      featured: true,
      variant: "blue", // Dark blue card
      image: ""
    },
    {
      title: "Integrated Task Management",
      subtitle: t('proj2.subtitle'),
      description: t('proj2.desc'),
      responsibilities: [
        t('proj2.res1'),
        t('proj2.res2'),
        t('proj2.res3'),
        t('proj2.res4')
      ],
      tech: ["HTML5", "CSS3", "JavaScript", "Vue.js", "Vite"],
      links: {
        demo: "#",
        github: "#",
        caseStudy: "#"
      },
      featured: false,
      variant: "brown", // Brown card
      image: ""
    }
  ];

  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-transparent">
      
      {/* Background Section Transition - Transparent Blue/Red Elements */}
      <motion.div 
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-10 left-[5%] w-[300px] h-[300px] rounded-full border border-blue/10 bg-blue/[0.03] backdrop-blur-[4px] z-0 pointer-events-none"
      />
      <motion.div 
        animate={{ x: [0, 15, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute top-[30%] right-[10%] w-[400px] h-[400px] rounded-[40%_60%_70%_30%] border border-red/10 bg-red/[0.02] backdrop-blur-[8px] z-0 pointer-events-none"
      />
      
      {/* Editorial thin lines */}
      <div className="absolute top-1/4 left-1/4 w-px h-1/2 bg-brown/10 z-0 transform rotate-12"></div>
      
      {/* 12. GLASSY DECORATIVE PANELS */}
      <motion.div 
        animate={{ y: [0, 5, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[20%] left-[-5%] p-6 glass-panel rounded-2xl transform rotate-6 z-0 hidden lg:block"
      >
        <span className="text-xs font-black tracking-widest text-brown opacity-50 uppercase">DESIGN / CODE</span>
      </motion.div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-brown tracking-tighter uppercase mb-4 flex flex-col">
            <span>{t('projects.title1')}</span>
            <span className="text-blue">{t('projects.title2')}</span>
          </h2>
          <p className="text-xl font-bold text-brown border-l-4 border-brown pl-4 max-w-2xl">
            {t('projects.subtitle')}
          </p>
        </div>

        <div className="space-y-24">
          {PROJECTS.map((project) => {
            
            // Variants logic
            let cardClasses = "";
            let textClasses = "";
            let tagBg = "";
            let tagText = "";
            let btnBg = "";
            let btnText = "";
            let btnHover = "";
            let btnHoverText = "";
            
            if (project.variant === "blue") {
              cardClasses = "bg-blue border-2 border-brown shadow-[12px_12px_0px_rgba(98,63,27,1)]";
              textClasses = "text-white";
              tagBg = "bg-yellow";
              tagText = "text-brown";
              btnBg = "bg-yellow";
              btnText = "text-brown";
              btnHover = "hover:bg-red";
              btnHoverText = "hover:text-white";
            } else if (project.variant === "brown") {
              cardClasses = "bg-brown border-2 border-brown shadow-[12px_12px_0px_rgba(50,36,112,1)]";
              textClasses = "text-white";
              tagBg = "bg-paper";
              tagText = "text-brown";
              btnBg = "bg-paper";
              btnText = "text-brown";
              btnHover = "hover:bg-blue";
              btnHoverText = "hover:text-white";
            }

            return (
              <motion.div 
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className={`flex flex-col lg:flex-row gap-0 lg:gap-8 p-6 md:p-8 lg:p-12 relative rounded-3xl ${cardClasses}`}
              >
                {project.featured && (
                  <div className="absolute -top-4 -left-4 px-4 py-1 bg-red text-white font-bold text-sm uppercase border-2 border-brown shadow-[4px_4px_0px_rgba(98,63,27,1)] z-20 transform -rotate-2">
                    {t('projects.featured')}
                  </div>
                )}

                {/* Project Info */}
                <div className={`lg:w-1/2 space-y-6 ${textClasses} z-10`}>
                  <div>
                    <h3 className="text-3xl md:text-4xl font-black tracking-tight mb-2 uppercase border-b-2 border-current pb-4 inline-block">{project.title}</h3>
                    <h4 className="text-lg font-bold mt-4 opacity-90">{project.subtitle}</h4>
                  </div>
                  
                  <p className="font-medium leading-relaxed italic border-l-4 border-current pl-4 opacity-90">
                    {project.description}
                  </p>

                  <div className="space-y-3">
                    <h5 className="text-xs font-black tracking-widest uppercase opacity-80">{t('projects.keyfeatures')}</h5>
                    <ul className="list-disc list-inside text-sm space-y-1 font-medium">
                      {project.responsibilities.map((res, i) => (
                        <li key={i}>{res}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.tech.map(tech => (
                      <span key={tech} className={`px-3 py-1 ${tagBg} ${tagText} text-xs font-bold uppercase border-2 border-brown shadow-[2px_2px_0px_rgba(98,63,27,1)]`}>
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-4 pt-6">
                    <a 
                      href={project.links.caseStudy}
                      className={`px-6 py-3 ${btnBg} ${btnText} ${btnHover} ${btnHoverText} font-black uppercase rounded-xl border-2 border-brown transition-colors shadow-[4px_4px_0px_rgba(98,63,27,1)] active:shadow-none active:translate-x-[4px] active:translate-y-[4px] flex items-center gap-2 text-sm`}
                    >
                      {t('projects.btn.case')}
                    </a>
                    <a 
                      href={project.links.demo}
                      className={`px-4 py-3 bg-cream text-brown hover:bg-blue hover:text-white font-black uppercase rounded-xl border-2 border-brown transition-colors shadow-[4px_4px_0px_rgba(98,63,27,1)] active:shadow-none active:translate-x-[4px] active:translate-y-[4px] flex items-center gap-2 text-sm`}
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                    <a 
                      href={project.links.github}
                      className={`px-4 py-3 bg-cream text-brown hover:bg-red hover:text-white font-black uppercase rounded-xl border-2 border-brown transition-colors shadow-[4px_4px_0px_rgba(98,63,27,1)] active:shadow-none active:translate-x-[4px] active:translate-y-[4px] flex items-center gap-2 text-sm`}
                    >
                      <GithubIcon />
                    </a>
                  </div>
                </div>

                {/* Project Image Placeholder (Editorial Style) */}
                <div className={`lg:w-1/2 mt-8 lg:mt-0 relative flex items-center justify-center`}>
                  <div className="w-full aspect-video min-h-[200px] bg-brown border-2 border-brown rounded-2xl shadow-[8px_8px_0px_rgba(0,0,0,0.2)] flex items-center justify-center p-2 sm:p-4 relative group">
                    <div className="w-full h-full bg-cream border-2 border-brown rounded-2xl flex items-center justify-center relative overflow-hidden transform group-hover:scale-[1.02] transition-transform duration-300">
                      
                      {/* Image Frame Content */}
                      {project.image ? (
                        <img 
                          src={project.image} 
                          alt={project.title} 
                          className="w-full h-full object-cover rounded-xl"
                        />
                      ) : (
                        <div className="text-brown font-mono text-sm flex flex-col items-center gap-2 font-bold opacity-60">
                          <Code2 className="w-12 h-12" />
                          [ IMAGE PLACEHOLDER ]
                        </div>
                      )}

                    </div>
                    
                    {/* Decorative Stickers */}
                    <div className="absolute top-2 right-2 w-8 h-8 bg-red border-2 border-brown rounded-full shadow-[2px_2px_0px_rgba(98,63,27,1)] z-20"></div>
                    <div className="absolute bottom-6 -left-4 w-12 h-4 bg-blue border-2 border-brown shadow-[2px_2px_0px_rgba(98,63,27,1)] transform -rotate-12 z-20"></div>
                  </div>
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}


