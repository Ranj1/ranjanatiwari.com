'use client';

import { useInView } from 'react-intersection-observer';
import styles from './Experience.module.css';

interface ExperienceItemProps {
  period: string;
  title: string;
  company: string;
  description: string;
  technologies: string[];
  link?: string;
}

const experiences: ExperienceItemProps[] = [
  {
    period: 'July 2021 — Present',
    title: 'Software Engineer - Full Stack',
    company: 'Zeki Software Pvt. Ltd',
    description: 'Improved MySQL query performance, cutting API response time from 15s to under 2s across 5M+ visitor records. Created secure payment processing system handling ₹20 lakhs monthly. Implemented RBAC with JWT authentication, built Entry/Exit APIs with barcode integration, and developed high-performance Android and iOS apps with Flutter. Worked extensively with Google Maps API, GPS tracking, and notification services.',
    technologies: ['Node.js', 'MySQL', 'Flutter', 'JWT', 'Redis', 'Firebase', 'Google APIs'],
    link: '#'
  },
  {
    period: 'January 2020 — April 2021',
    title: 'Backend Developer',
    company: 'FreshVnF Pvt. Ltd',
    description: 'Developed and maintained back-end and front-end functionality using React.js and Node.js. Employed AJAX and JSON technologies for seamless data exchange. Wrote cross-browser compliant code ensuring optimal performance across platforms.',
    technologies: ['Node.js', 'React.js', 'JavaScript', 'AJAX', 'JSON', 'HTML', 'CSS'],
    link: '#'
  }
];

function ExperienceItem({ period, title, company, description, technologies, link }: ExperienceItemProps) {
  return (
    <div className={styles.item}>
      <div className={styles.period}>{period}</div>
      <div className={styles.details}>
        <h3 className={styles.title}>
          {title} · {link ? (
            <a href={link} target="_blank" rel="noopener noreferrer" className={styles.company}>
              {company}
            </a>
          ) : company}
        </h3>
        <p className={styles.description}>{description}</p>
        <div className={styles.technologies}>
          {technologies.map((tech, index) => (
            <span key={index} className={styles.tech}>{tech}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Experience() {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: false,
  });

  return (
    <section id="experience" className={styles.section} ref={ref}>
      <div className={`${styles.content} ${inView ? styles.visible : ''}`}>
        <h2 className={styles.heading}>Experience</h2>
        <div className={styles.timeline}>
          {experiences.map((exp, index) => (
            <ExperienceItem key={index} {...exp} />
          ))}
        </div>
        <div className={styles.resumeSection}>
          <a 
            href="/resume.pdf" 
            target="_blank" 
            rel="noopener noreferrer"
            className={styles.resumeLink}
          >
            View Full Resume
            <svg className={styles.arrow} viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7V17" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}

