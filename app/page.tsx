'use client';

import { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import Sidebar from '@/components/Sidebar';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import TechSkill from '@/components/TechSkill';
import styles from './page.module.css';

export default function Home() {
  const [activeSection, setActiveSection] = useState('about');

  // Intersection observers for each section
  const { ref: aboutRef, inView: aboutInView } = useInView({ threshold: 0.5 });
  const { ref: techSkillRef, inView: techSkillInView } = useInView({ threshold: 0.1 });
  const { ref: experienceRef, inView: experienceInView } = useInView({ threshold: 0.3 });
  const { ref: projectsRef, inView: projectsInView } = useInView({ threshold: 0.2 });
  

  useEffect(() => {
    if (aboutInView) setActiveSection('about');
    else if (techSkillInView) setActiveSection('techSkill'); 
    else if (experienceInView) setActiveSection('experience');
    else if (projectsInView) setActiveSection('projects');
  }, [aboutInView,techSkillInView, experienceInView,projectsInView]);

  return (
    <div className={styles.container}>
      {/* Left Sidebar - Fixed */}
      <Sidebar activeSection={activeSection} />

      {/* Right Content - Scrollable */}
      <main className={styles.main}>
        <div ref={aboutRef}>
          <About />
        </div>
        <div ref={techSkillRef}>
           <TechSkill />
        </div>
        <div ref={experienceRef}>
          <Experience />
        </div>
        <div ref={projectsRef}>
          <Projects />
        </div>
      </main>
    </div>
  );
}
