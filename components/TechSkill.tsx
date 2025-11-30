'use client';

import { useInView } from 'react-intersection-observer';
import styles from './TechSkill.module.css';

export default function TechSkill() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });

  return (
    <section id="techSkill" className={styles.section} ref={ref}>
      <div className={`${styles.content} ${inView ? styles.visible : ''}`}>
        <h2 className={styles.heading}>Technologies & Skills</h2>
        
          
          <div className={styles.text}>

            <p>
              <strong className={styles.tech} >Languages:</strong>{" "}
              JavaScript (ES6+), TypeScript, Dart, SQL
            </p>

            <p>
              <strong className={styles.tech} >Frameworks & Libraries:</strong>{" "}
              Node.js, Express.js, Flutter, Socket.IO, WebSockets
            </p>

            <p>
              <strong className={styles.tech} >Databases:</strong>{" "}
              MySQL, PostgreSQL, MongoDB, Redis, Firebase Firestore
            </p>

            <p>
              <strong className={styles.tech} >Tools & Platforms:</strong>{" "}
              Git, GitHub, Postman, Firebase, FCM Notifications, WebRTC
            </p>

            <p>
              <strong className={styles.tech}>DevOps & Deployment:</strong>{" "}
              Docker, CI/CD Pipelines, Nginx, PM2 (Node.js process manager)
            </p>


          </div>
          </div>
    </section>
  );
}

