'use client';

import { useInView } from 'react-intersection-observer';
import styles from './Projects.module.css';

interface ProjectProps {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  link?: string;
  github?: string;
}

const projects: ProjectProps[] = [
  {
    title: 'Online Interviewer Platform',
    description: 'Built an AI-powered online interviewer platform integrating ChatGPT and Gemini APIs for real-time assessments. Implemented seamless backend integration for automated interview flows, question generation, and candidate evaluation with advanced natural language processing.',
    image: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?w=800&auto=format&fit=crop',
    technologies: ['Node.js', 'ChatGPT API', 'Gemini API', 'Express', 'MySQL'],
    link: 'https://neuratalk-pink.vercel.app/',
    github: 'https://github.com/Ranj1/neuratalk'
  },
  {
    title: 'Flutter Video Calling App',
    description: 'Developed a cross-platform video calling application using Flutter and Node.js with VoIP technology. Implemented real-time audio/video communication with high-quality streaming, call management, and notification services for seamless user experience.',
    image: 'https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=800&auto=format&fit=crop',
    technologies: ['Flutter', 'Dart', 'Node.js', 'VoIP', 'WebRTC', 'Firebase'],
    github: 'https://github.com/Ranj1/Talkify-App'
  },
  {
    title: 'Taskly – Personal Task Management App',
    description: 'Taskly is a simple yet powerful task management application developed using Flutter.It allows users to create tasks, update them, mark them as completed, and delete them easily. The app focuses on a clean UI and smooth user experience, making daily task management effortless.',
    image: 'https://cdni.iconscout.com/illustration/premium/thumb/task-management-illustration-svg-download-png-3449603.png',
    technologies: ['Flutter & Dart', 'Dart', 'BLoC', 'SQLite', 'Lottie', 'Material 3'],
    github: 'https://github.com/Ranj1/Taskly'
  },
  {
    title: 'CircInfo – Cricket Match Dashboard',
    description: 'A responsive cricket match dashboard built using Flutter. This project displays team details, match scorecards, player stats, and match summaries by fetching live JSON data. It focuses on clean UI, efficient parsing, and presenting sports data in a structured and user-friendly format.',
    image: 'https://www.washingtonpost.com/wp-apps/imrs.php?src=https%3A%2F%2Farc-anglerfish-washpost-prod-washpost.s3.amazonaws.com%2Fpublic%2FOTMQWTWLRNGRVFKIH566UZB34I.jpg&w=1440',
    technologies: ['Flutter & Dart', 'REST APIs', 'JSON Parsing', 'State Management', 'Material 3 UI'],
    github: 'https://github.com/Ranj1/sportz_interactive'
  }
  // {
  //   title: 'Visitor Management System',
  //   description: 'Built comprehensive visitor management system handling 5M+ records with Entry/Exit APIs, barcode scanner integration, automated SMS/email alerts, and badge printing. Optimized database queries reducing response time from 15s to under 2s.',
  //   image: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=800&auto=format&fit=crop',
  //   technologies: ['Node.js', 'MySQL', 'Redis', 'JWT', 'Barcode Scanner'],
  //   link: '#'
  // },
  // {
  //   title: 'Secure Payment Processing System',
  //   description: 'Created a robust payment processing system using Node.js and MySQL with JWT-based authentication. Handles approximately ₹20 lakhs per month in transactions with role-based access control and comprehensive security measures.',
  //   image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&auto=format&fit=crop',
  //   technologies: ['Node.js', 'MySQL', 'JWT', 'Payment Gateway', 'RBAC'],
  //   link: '#'
  // }
];

function ProjectCard({ title, description, image, technologies, link, github }: ProjectProps) {
  return (
    <div className={styles.card}>
      <div className={styles.cardLink}>
        <div className={styles.imageWrapper}>
          <img src={image} alt={title} className={styles.image} />
          <div className={styles.overlay}></div>
        </div>
        <div className={styles.cardContent}>
          <h3 className={styles.cardTitle}>
            {title}
            <svg className={styles.linkIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7V17" />
            </svg>
          </h3>
          <p className={styles.cardDescription}>{description}</p>
          <div className={styles.technologies}>
            {technologies.map((tech, index) => (
              <span key={index} className={styles.tech}>{tech}</span>
            ))}
          </div>
          <div className={styles.links}>
          {link && (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.linkLabel}
            >
              View Project
            </a>
          )}
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.linkLabel}
            >
              GitHub
            </a>
          )}
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });

  return (
    <section id="projects" className={styles.section} ref={ref}>
      <div className={`${styles.content} ${inView ? styles.visible : ''}`}>
        <h2 className={styles.heading}>Projects</h2>
        <div className={styles.grid}>
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}

