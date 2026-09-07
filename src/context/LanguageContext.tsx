import { createContext, useContext, useState } from 'react';
import type { ReactNode } from 'react';

type Language = 'en' | 'th';

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    // Navbar
    'nav.home': 'HOME',
    'nav.about': 'ABOUT',
    'nav.skills': 'SKILLS',
    'nav.projects': 'PROJECTS',
    'nav.resume': 'RESUME',
    'nav.contact': 'CONTACT',
    
    // Hero
    'hero.hello': "HELLO, I'M",
    'hero.name': 'WANIDA WONGJAMPA',
    'hero.status': 'STATUS',
    'hero.available': 'Available',
    'hero.title1': 'Computer Science Student',
    'hero.title2': 'Programmer Intern / Software Developer Intern',
    'hero.desc1': 'Four-year Computer Science student with hands-on experience in web development, Python programming, and software project development.',
    'hero.desc2': '"Interested in applying programming and problem-solving skills to real-world software development."',
    'hero.btn.projects': 'VIEW MY PROJECTS',
    'hero.btn.resume': 'DOWNLOAD RESUME',
    'hero.term.start': '> Starting development server...',
    'hero.term.compile': '> Compiling creative portfolio',
    'hero.term.ready': '> Ready on localhost:3000',
    'hero.badgeHint': 'Interactive 3D Badge • Drag to swing',
    
    // About
    'about.title': 'ABOUT',
    'about.me': 'ME',
    'about.subtitle': 'Computer Science Student & Aspiring Software Developer',
    'about.profile': 'PROFILE',
    'about.intro': 'Introduction',
    'about.intro.desc': 'Four-year Computer Science student with hands-on experience in web development, Python programming, and software project development. Familiar with React, Next.js, TypeScript, and basic UI/UX design.',
    'about.objective': 'Career Objective',
    'about.objective.desc': 'Interested in applying programming and problem-solving skills to real-world software development while gaining practical experience in a professional development team.',
    'about.education': 'EDUCATION',
    'about.university': 'Rajamangala University of Technology Suvarnabhumi',
    'about.faculty': 'Faculty of Science and Technology',
    'about.major': 'Computer Science',
    'about.status': 'Status',
    'about.status.val': 'Fourth-Year Student',
    'about.timeline': 'Timeline',
    'about.timeline.val': 'Expected Graduation: 2027',
    'about.gpa': 'Current GPA',
    
    // Skills
    'skills.title': 'TECHNICAL SKILLS',
    'skills.subtitle': 'Interactive Developer Toolbox',
    'skills.cat.programming': 'PROGRAMMING LANGUAGES',
    'skills.cat.web': 'WEB DEVELOPMENT',
    'skills.cat.frameworks': 'FRAMEWORKS & LIBRARIES',
    'skills.cat.tools': 'TOOLS',
    'skills.cat.database': 'DATABASE',
    'skills.cat.other': 'OTHER SKILLS',
    'skills.cat.soft': 'SOFT SKILLS',
    'skills.soft.ps': 'Problem Solving',
    'skills.soft.lt': 'Logical Thinking',
    'skills.soft.tc': 'Team Collaboration',
    'skills.soft.comm': 'Communication',
    'skills.soft.sl': 'Self-Learning',
    
    // Projects
    'projects.title': 'SELECTED',
    'projects.title2': 'PROJECTS',
    'projects.subtitle': '"Projects I\'ve designed and developed during my Computer Science studies."',
    'projects.featured': 'FEATURED PROJECT',
    'projects.key': 'Key Features / Responsibilities',
    'projects.btn.case': 'VIEW CASE STUDY',
    
    // Resume
    'resume.title': 'MY RESUME',
    'resume.tag': 'CONFIDENTIAL / PUBLIC',
    'resume.btn': 'DOWNLOAD FULL RESUME',
    
    // Contact
    'contact.title1': "LET'S BUILD",
    'contact.title2': 'SOMETHING',
    'contact.title3': 'TOGETHER.',
    'contact.subtitle': '"Thank you for visiting my portfolio."',
    'contact.email': 'Email',
    'contact.phone': 'Phone',
    'contact.github': 'GitHub',
    'contact.hello': 'HELLO!',
    'contact.form.name': 'Name',
    'contact.form.name.ph': 'Your Name',
    'contact.form.email': 'Email',
    'contact.form.email.ph': 'your.email@example.com',
    'contact.form.msg': 'Message',
    'contact.form.msg.ph': 'How can I help you?',
    'contact.form.send': 'SEND MESSAGE',
    'contact.msg.success': 'MESSAGE SENT SUCCESSFULLY.',
    'contact.msg.error': 'SOMETHING WENT WRONG. PLEASE TRY AGAIN.',
    'contact.footer.ty': 'THANK YOU',
  },
  th: {
    // Navbar
    'nav.home': 'หน้าหลัก',
    'nav.about': 'เกี่ยวกับ',
    'nav.skills': 'ทักษะ',
    'nav.projects': 'ผลงาน',
    'nav.resume': 'เรซูเม่',
    'nav.contact': 'ติดต่อ',
    
    // Hero
    'hero.hello': "สวัสดี ฉันคือ",
    'hero.name': 'วนิดา วงศ์จำปา',
    'hero.status': 'สถานะ',
    'hero.available': 'พร้อมทำงาน',
    'hero.title1': 'นักศึกษาวิทยาการคอมพิวเตอร์',
    'hero.title2': 'เด็กฝึกงานโปรแกรมเมอร์ / นักพัฒนาซอฟต์แวร์',
    'hero.desc1': 'นักศึกษาปี 4 สาขาวิทยาการคอมพิวเตอร์ มีประสบการณ์ในการพัฒนาเว็บไซต์, เขียนโปรแกรมด้วย Python และพัฒนาโปรเจกต์ซอฟต์แวร์',
    'hero.desc2': '"มีความสนใจในการประยุกต์ใช้ทักษะการเขียนโปรแกรมและการแก้ปัญหาในการพัฒนาซอฟต์แวร์ในโลกแห่งความเป็นจริง"',
    'hero.btn.projects': 'ดูผลงานของฉัน',
    'hero.btn.resume': 'ดาวน์โหลดเรซูเม่',
    'hero.term.start': '> กำลังเริ่มต้นเซิร์ฟเวอร์...',
    'hero.term.compile': '> กำลังคอมไพล์พอร์ตโฟลิโอ...',
    'hero.term.ready': '> พร้อมใช้งานที่ localhost:3000',
    'hero.badgeHint': 'ป้าย 3D แบบอินเทอร์แอคทีฟ • แตะหรือลากเพื่อแกว่ง',
    
    // About
    'about.title': 'เกี่ยวกับ',
    'about.me': 'ฉัน',
    'about.subtitle': 'นักศึกษาวิทยาการคอมพิวเตอร์ & ว่าที่นักพัฒนาซอฟต์แวร์',
    'about.profile': 'โปรไฟล์',
    'about.intro': 'แนะนำตัว',
    'about.intro.desc': 'นักศึกษาปี 4 สาขาวิทยาการคอมพิวเตอร์ มีประสบการณ์ในการพัฒนาเว็บไซต์, เขียนโปรแกรมด้วย Python และพัฒนาโปรเจกต์ซอฟต์แวร์ มีความคุ้นเคยกับ React, Next.js, TypeScript และการออกแบบ UI/UX เบื้องต้น',
    'about.objective': 'เป้าหมายในการทำงาน',
    'about.objective.desc': 'มีความสนใจที่จะนำทักษะการเขียนโปรแกรมและการแก้ปัญหามาใช้กับการพัฒนาซอฟต์แวร์จริง พร้อมทั้งเก็บเกี่ยวประสบการณ์การทำงานร่วมกับทีมพัฒนามืออาชีพ',
    'about.education': 'การศึกษา',
    'about.university': 'มหาวิทยาลัยเทคโนโลยีราชมงคลสุวรรณภูมิ',
    'about.faculty': 'คณะวิทยาศาสตร์และเทคโนโลยี',
    'about.major': 'วิทยาการคอมพิวเตอร์',
    'about.status': 'สถานะ',
    'about.status.val': 'นักศึกษาชั้นปีที่ 4',
    'about.timeline': 'ระยะเวลา',
    'about.timeline.val': 'คาดว่าจะจบการศึกษา: ปี 2570',
    'about.gpa': 'เกรดเฉลี่ยปัจจุบัน',
    
    // Skills
    'skills.title': 'ทักษะทางเทคนิค',
    'skills.subtitle': 'เครื่องมือสำหรับนักพัฒนา',
    'skills.cat.programming': 'ภาษาโปรแกรม',
    'skills.cat.web': 'การพัฒนาเว็บไซต์',
    'skills.cat.frameworks': 'เฟรมเวิร์ก & ไลบรารี',
    'skills.cat.tools': 'เครื่องมือต่างๆ',
    'skills.cat.database': 'ฐานข้อมูล',
    'skills.cat.other': 'ทักษะอื่นๆ',
    'skills.cat.soft': 'ทักษะด้านบุคคล',
    'skills.soft.ps': 'การแก้ปัญหา',
    'skills.soft.lt': 'การคิดเชิงตรรกะ',
    'skills.soft.tc': 'การทำงานเป็นทีม',
    'skills.soft.comm': 'การสื่อสาร',
    'skills.soft.sl': 'การเรียนรู้ด้วยตัวเอง',
    
    // Projects
    'projects.title': 'ผลงาน',
    'projects.title2': 'ที่คัดสรร',
    'projects.subtitle': '"โปรเจกต์ที่ฉันได้ออกแบบและพัฒนาในช่วงที่เรียนวิทยาการคอมพิวเตอร์"',
    'projects.featured': 'โปรเจกต์แนะนำ',
    'projects.key': 'ฟีเจอร์หลัก / หน้าที่รับผิดชอบ',
    'projects.btn.case': 'ดูรายละเอียดโปรเจกต์',
    
    // Resume
    'resume.title': 'เรซูเม่ของฉัน',
    'resume.tag': 'ความลับ / สาธารณะ',
    'resume.btn': 'ดาวน์โหลดเรซูเม่ฉบับเต็ม',
    
    // Contact
    'contact.title1': "มาร่วมสร้าง",
    'contact.title2': 'ผลงาน',
    'contact.title3': 'ด้วยกันเถอะ',
    'contact.subtitle': '"ขอบคุณที่เข้ามาเยี่ยมชมพอร์ตโฟลิโอของฉันค่ะ"',
    'contact.email': 'อีเมล',
    'contact.phone': 'เบอร์โทร',
    'contact.github': 'กิตฮับ',
    'contact.hello': 'สวัสดี!',
    'contact.form.name': 'ชื่อ',
    'contact.form.name.ph': 'ชื่อของคุณ',
    'contact.form.email': 'อีเมล',
    'contact.form.email.ph': 'your.email@example.com',
    'contact.form.msg': 'ข้อความ',
    'contact.form.msg.ph': 'มีอะไรให้ฉันช่วยเหลือไหม?',
    'contact.form.send': 'ส่งข้อความ',
    'contact.msg.success': 'ส่งข้อความสำเร็จ',
    'contact.msg.error': 'เกิดข้อผิดพลาดบางอย่าง โปรดลองอีกครั้ง',
    'contact.footer.ty': 'ขอบคุณค่ะ',
  }
};

export const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'th' : 'en');
  };

  const t = (key: string): string => {
    // @ts-ignore
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
