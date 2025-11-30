'use client';

import { useInView } from 'react-intersection-observer';
import styles from './About.module.css';

export default function About() {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: false,
  });

  return (
  <section id="about" className={styles.section} ref={ref}>
  <div className={`${styles.content} ${inView ? styles.visible : ''}`}>
    <h2 className={styles.heading}>About</h2>

    <div className={styles.text}>

      <p>
        I am a Fullstack Software Engineer with 4 years of experience building scalable, high-performance systems.
        My work focuses on backend engineering, performance optimization, automation, and designing systems that
        handle high traffic and large-scale data operations.
      </p>

      <ul className={styles.aboutPoints}>
        <li>Optimized critical MySQL queries from <strong>15s to under 2s</strong> for high-volume production systems.</li>
        <li>Built secure payment systems processing <strong>lakhs of rupees in monthly transactions</strong>.</li>
        <li>Designed and deployed scalable REST APIs using <strong>Node.js, Express.js, JWT, MySQL, Redis</strong>.</li>
        <li>Implemented real-time communication features using <strong>WebSockets & Socket.IO</strong>.</li>
        <li>Experienced with <strong>Docker, PM2, Nginx, CI/CD</strong>, and cloud-based deployments.</li>
        <li>Developed and published cross-platform mobile applications using <strong>Flutter</strong> on Play Store & App Store.</li>
        <li>Skilled in system design, performance tuning, code reviews, and mentoring engineering teams.</li>
      </ul>

    </div>
  </div>
</section>
  );
}

