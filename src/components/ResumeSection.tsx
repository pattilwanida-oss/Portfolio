import { motion } from 'framer-motion';
import { Download, GraduationCap, FolderGit2, Code2, Users } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export function ResumeSection() {
  const { t } = useLanguage();
  return (
    <section id="resume" className="py-24 relative overflow-hidden bg-transparent">
      
      {/* Background Section Transition - Transparent Brown Circles */}
      <motion.div 
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[-20%] left-[-10%] w-[800px] h-[800px] rounded-full border border-brown/10 bg-brown/[0.01] backdrop-blur-[4px] z-0 pointer-events-none"
      />
      <motion.div 
        animate={{ scale: [1, 1.05, 1], rotate: [0, 45, 0] }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-[-10%] left-[5%] w-[600px] h-[600px] rounded-[40%_60%_70%_30%] border border-brown/10 bg-transparent z-0 pointer-events-none"
      />
      
      {/* Editorial thin lines */}
      <div className="absolute top-10 right-1/4 h-[80%] w-px bg-brown/10 z-0"></div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="mb-12 text-center">
          <h2 className="text-4xl md:text-5xl font-black text-blue tracking-tighter uppercase mb-4 relative inline-block">
            {t('resume.title')}
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-24 h-2 bg-red"></div>
          </h2>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="bg-cream border-4 border-brown p-8 md:p-12 shadow-[16px_16px_0px_rgba(98,63,27,1)] relative"
        >
          {/* Top tape decor */}
          <div className="absolute -top-6 left-1/2 -translate-x-1/2 px-4 py-2 bg-blue border-2 border-brown font-bold text-brown text-xs uppercase transform rotate-2 shadow-[2px_2px_0px_rgba(98,63,27,1)] z-10">
            {t('resume.tag')}
          </div>

          {/* Header */}
          <div className="border-b-4 border-brown pb-8 mb-8 flex flex-col md:flex-row gap-6 items-center md:items-start justify-between">
            <div className="flex items-center gap-6">
              <div className="w-20 h-20 bg-cream rounded-2xl overflow-hidden flex items-center justify-center border-2 border-brown shadow-[4px_4px_0px_rgba(98,63,27,1)] shrink-0">
                <img src="/profile.jpg" alt="Wanida Wongjampa" className="w-full h-full object-cover" />
              </div>
              <div className="text-center md:text-left">
                <h3 className="text-3xl font-black text-brown tracking-tight">{t('hero.name')}</h3>
                <p className="text-blue font-bold mt-1 uppercase tracking-widest text-sm">{t('hero.title2')}</p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 shrink-0 mt-4 md:mt-0">
              <a 
                href="/Resume_EN.pdf" 
                target="_blank" 
                rel="noreferrer"
                className="px-6 py-4 bg-red text-cream font-black uppercase border-2 border-brown hover:bg-blue transition-colors shadow-[4px_4px_0px_rgba(98,63,27,1)] active:shadow-none active:translate-x-[4px] active:translate-y-[4px] flex items-center gap-2"
              >
                <Download className="w-5 h-5" /> RESUME (EN)
              </a>
              <a 
                href="/Resume_TH.pdf" 
                target="_blank" 
                rel="noreferrer"
                className="px-6 py-4 bg-blue text-cream font-black uppercase border-2 border-brown hover:bg-red hover:text-cream transition-colors shadow-[4px_4px_0px_rgba(98,63,27,1)] active:shadow-none active:translate-x-[4px] active:translate-y-[4px] flex items-center gap-2"
              >
                <Download className="w-5 h-5" /> RESUME (TH)
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            
            {/* Left Column */}
            <div className="space-y-10">
              
              {/* Education */}
              <div className="space-y-4">
                <h4 className="text-sm font-black text-blue tracking-widest uppercase flex items-center gap-2 border-b-2 border-brown pb-2">
                  <GraduationCap className="w-5 h-5" /> {t('about.education')}
                </h4>
                <div>
                  <h5 className="font-black text-brown text-lg">{t('about.university')}</h5>
                  <p className="text-brown font-bold">{t('about.faculty')}</p>
                  <p className="text-brown/80 font-medium mb-2">{t('about.major')}</p>
                  <ul className="text-sm text-brown font-medium space-y-1 border-l-4 border-blue pl-3">
                    <li>{t('about.status.val')}</li>
                    <li>{t('about.timeline.val')}</li>
                    <li>{t('about.gpa')}: 3.76</li>
                  </ul>
                </div>
              </div>

              {/* Projects */}
              <div className="space-y-4">
                <h4 className="text-sm font-black text-blue tracking-widest uppercase flex items-center gap-2 border-b-2 border-brown pb-2">
                  <FolderGit2 className="w-5 h-5" /> {t('nav.projects')}
                </h4>
                <ul className="space-y-3">
                  <li className="bg-cream px-4 py-2 border-2 border-brown font-black text-brown text-sm uppercase">
                    CSS FILES
                  </li>
                  <li className="bg-cream px-4 py-2 border-2 border-brown font-black text-brown text-sm uppercase">
                    Integrated Task Management
                  </li>
                </ul>
              </div>

            </div>

            {/* Right Column */}
            <div className="space-y-10">
              
              {/* Tech Skills */}
              <div className="space-y-4">
                <h4 className="text-sm font-black text-blue tracking-widest uppercase flex items-center gap-2 border-b-2 border-brown pb-2">
                  <Code2 className="w-5 h-5" /> {t('skills.title')}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {[
                    "JavaScript", "TypeScript", "HTML", "CSS", "React", "Next.js", 
                    "Tailwind CSS", "React Native (Expo)", "Node.js Basic", 
                    "VS Code", "Git", "GitHub", "Figma", "Postman", 
                    "MySQL", "SQLite", "REST API", "UI/UX Basics", "OOP"
                  ].map(skill => (
                    <span key={skill} className="px-2.5 py-1 bg-cream border-2 border-brown text-xs font-bold text-brown uppercase shadow-[2px_2px_0px_rgba(98,63,27,1)]">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Soft Skills */}
              <div className="space-y-4">
                <h4 className="text-sm font-black text-blue tracking-widest uppercase flex items-center gap-2 border-b-2 border-brown pb-2">
                  <Users className="w-5 h-5" /> {t('skills.cat.soft')}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {[
                    t('skills.soft.ps'), t('skills.soft.lt'), 
                    t('skills.soft.tc'), t('skills.soft.comm'), t('skills.soft.sl')
                  ].map(skill => (
                    <span key={skill} className="px-3 py-1.5 bg-yellow border-2 border-brown text-sm font-black text-brown uppercase shadow-[2px_2px_0px_rgba(98,63,27,1)]">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

            </div>

          </div>

        </motion.div>
      </div>
    </section>
  );
}
