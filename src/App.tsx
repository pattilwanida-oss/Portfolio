import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { SkillsSection } from './components/SkillsSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ResumeSection } from './components/ResumeSection';
import { ContactSection } from './components/ContactSection';
import { LanguageProvider } from './context/LanguageContext';

import { Grainient } from './components/Grainient';

export function BackgroundDecorations() {
  return (
    <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden">
      <Grainient
        color1="#ccc3c0"
        color2="#706760"
        color3="#eed5b9"
        timeSpeed={0.25}
        colorBalance={0}
        warpStrength={1}
        warpFrequency={5}
        warpSpeed={2}
        warpAmplitude={50}
        blendAngle={0}
        blendSoftness={0.05}
        rotationAmount={500}
        noiseScale={2}
        grainAmount={0.1}
        grainScale={2}
        grainAnimated={false}
        contrast={1.5}
        gamma={1}
        saturation={1}
        centerX={0}
        centerY={0}
        zoom={0.9}
      />
      {/* 05. TRANSPARENT GRID */}
      <div className="absolute inset-0 bg-grid-pattern h-[150vh] -top-[25vh]"></div>
    </div>
  );
}

function App() {
  return (
    <LanguageProvider>
      <div className="w-full min-h-screen bg-cream text-brown font-sans selection:bg-yellow selection:text-brown relative z-0">
        <BackgroundDecorations />
        
        <Navbar />
        
        <main className="flex flex-col relative z-10">
          <HeroSection />
          <AboutSection />
          <SkillsSection />
          <ProjectsSection />
          <ResumeSection />
          <ContactSection />
        </main>
      </div>
    </LanguageProvider>
  );
}

export default App;
