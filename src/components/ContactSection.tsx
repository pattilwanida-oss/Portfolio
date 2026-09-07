import { motion } from 'framer-motion';
import { Mail, Phone, Send } from 'lucide-react';
import { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

const GithubIcon = () => (
  <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

export function ContactSection() {
  const { t } = useLanguage();
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('success');
    setTimeout(() => setStatus('idle'), 3000);
  };

  return (
    <>
      <section id="contact" className="py-24 relative overflow-hidden bg-transparent">
        
        {/* Background Section Transition - Transparent Yellow Blob */}
        <motion.div 
          animate={{ scale: [1, 1.05, 1], rotate: [0, -5, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[-10%] right-[-20%] w-[1000px] h-[1000px] rounded-[70%_30%_50%_50%] border border-yellow/10 bg-yellow/[0.04] backdrop-blur-[6px] z-0 pointer-events-none"
        />

        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            
            {/* Left - Contact Info */}
            <div className="space-y-10">
              <div>
                <h2 className="text-5xl md:text-6xl font-black text-brown tracking-tighter uppercase leading-tight mb-4">
                  {t('contact.title1')} <br/>
                  <span className="text-blue bg-cream px-2 border-2 border-brown shadow-[4px_4px_0px_rgba(98,63,27,1)] inline-block transform -rotate-1 mt-2 mb-2">{t('contact.title2')}</span> <br/>
                  {t('contact.title3')}
                </h2>
                <p className="text-xl font-bold text-brown border-l-4 border-brown pl-4 mt-6">
                  {t('contact.subtitle')}
                </p>
              </div>

              <div className="space-y-6 bg-brown p-8 border-2 border-brown rounded-3xl shadow-[8px_8px_0px_rgba(98,63,27,1)]">
                <a href="mailto:pattilwanida@gmail.com" className="flex items-center gap-4 group">
                  <div className="p-3 bg-brown border-2 border-brown rounded-2xl group-hover:bg-red transition-colors">
                    <Mail className="w-6 h-6 text-blue" />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold text-blue uppercase tracking-widest mb-1">{t('contact.email')}</h3>
                    <p className="font-bold text-cream group-hover:text-blue transition-colors">pattilwanida@gmail.com</p>
                  </div>
                </a>

                <a href="tel:0841576307" className="flex items-center gap-4 group mt-6">
                  <div className="p-3 bg-brown border-2 border-brown rounded-2xl group-hover:bg-red transition-colors">
                    <Phone className="w-6 h-6 text-blue" />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold text-blue uppercase tracking-widest mb-1">{t('contact.phone')}</h3>
                    <p className="font-bold text-cream group-hover:text-blue transition-colors">084 157 6307</p>
                  </div>
                </a>

                <a href="[INSERT GITHUB URL]" target="_blank" rel="noreferrer" className="flex items-center gap-4 group mt-6">
                  <div className="p-3 bg-brown border-2 border-brown rounded-2xl group-hover:bg-red transition-colors flex items-center justify-center text-blue">
                    <GithubIcon />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold text-blue uppercase tracking-widest mb-1">{t('contact.github')}</h3>
                    <p className="font-bold text-cream group-hover:text-blue transition-colors">github.com/pattilwanida-oss</p>
                  </div>
                </a>
              </div>
            </div>

            {/* Right - Contact Form */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="bg-cream p-8 lg:p-12 border-2 border-brown rounded-3xl shadow-[12px_12px_0px_rgba(98,63,27,1)] relative mt-4 lg:mt-0"
            >
              {/* Scrapbook decor */}
              <div className="absolute -top-6 -right-6 px-4 py-2 bg-red text-cream font-black uppercase border-2 border-brown shadow-[4px_4px_0px_rgba(98,63,27,1)] transform rotate-6">
                {t('contact.hello')}
              </div>

              <form onSubmit={handleSubmit} className="space-y-6 mt-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-xs font-bold text-brown uppercase tracking-widest">{t('contact.form.name')}</label>
                  <input 
                    type="text" 
                    id="name"
                    required
                    className="w-full bg-cream border-2 border-brown rounded-2xl px-4 py-3 text-brown font-medium focus:outline-none focus:border-blue transition-colors shadow-[4px_4px_0px_rgba(98,63,27,1)] focus:shadow-[4px_4px_0px_rgba(50,36,112,1)]"
                    placeholder={t('contact.form.name.ph')}
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="email" className="text-xs font-bold text-brown uppercase tracking-widest">{t('contact.form.email')}</label>
                  <input 
                    type="email" 
                    id="email"
                    required
                    className="w-full bg-cream border-2 border-brown rounded-2xl px-4 py-3 text-brown font-medium focus:outline-none focus:border-blue transition-colors shadow-[4px_4px_0px_rgba(98,63,27,1)] focus:shadow-[4px_4px_0px_rgba(50,36,112,1)]"
                    placeholder={t('contact.form.email.ph')}
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-xs font-bold text-brown uppercase tracking-widest">{t('contact.form.msg')}</label>
                  <textarea 
                    id="message"
                    required
                    rows={4}
                    className="w-full bg-cream border-2 border-brown rounded-2xl px-4 py-3 text-brown font-medium focus:outline-none focus:border-blue transition-colors shadow-[4px_4px_0px_rgba(98,63,27,1)] focus:shadow-[4px_4px_0px_rgba(50,36,112,1)] resize-none"
                    placeholder={t('contact.form.msg.ph')}
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  className="w-full py-4 bg-red text-cream font-black uppercase border-2 border-brown hover:bg-blue transition-colors shadow-[4px_4px_0px_rgba(98,63,27,1)] active:shadow-none active:translate-x-[4px] active:translate-y-[4px] flex items-center justify-center gap-2 mt-4"
                >
                  <Send className="w-5 h-5" /> {t('contact.form.send')}
                </button>

                {status === 'success' && (
                  <div className="p-4 bg-cream border-2 border-brown text-blue font-bold text-sm text-center shadow-[4px_4px_0px_rgba(50,36,112,1)] mt-4">
                    {t('contact.msg.success')}
                  </div>
                )}
                {status === 'error' && (
                  <div className="p-4 bg-cream border-2 border-brown text-red font-bold text-sm text-center shadow-[4px_4px_0px_rgba(187,36,10,1)] mt-4">
                    {t('contact.msg.error')}
                  </div>
                )}
              </form>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-brown py-16 text-center border-t-4 border-blue">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl font-black text-blue tracking-widest uppercase mb-4">{t('contact.footer.ty')}</h2>
          <h3 className="text-4xl md:text-5xl font-black text-cream tracking-tighter mb-4">{t('hero.name')}</h3>
          <p className="text-blue font-bold uppercase tracking-widest text-sm mb-12">{t('hero.title2')}</p>
          
          <div className="flex justify-center gap-8">
            <a href="mailto:pattilwanida@gmail.com" className="text-blue hover:text-red font-bold transition-colors uppercase text-sm tracking-widest">{t('contact.email')}</a>
            <a href="tel:0841576307" className="text-blue hover:text-red font-bold transition-colors uppercase text-sm tracking-widest">{t('contact.phone')}</a>
            <a href="[INSERT GITHUB URL]" className="text-blue hover:text-red font-bold transition-colors uppercase text-sm tracking-widest">{t('contact.github')}</a>
          </div>
        </div>
      </footer>
    </>
  );
}

