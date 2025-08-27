"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ExternalLink,
  Github,
  Calendar,
  Code,
  Tag,
  CheckCircle,
  Clock,
  Archive,
} from "lucide-react";
import { Project, getProjectsByCategory } from "../../data/projects";
import ProjectCard from "./ProjectCard";
import styles from "./ProjectDetail.module.css";

interface ProjectDetailProps {
  project: Project;
}

export default function ProjectDetail({ project }: ProjectDetailProps) {
  const relatedProjects = getProjectsByCategory(project.category)
    .filter((p) => p.id !== project.id)
    .slice(0, 3);

  const statusIcons = {
    completed: CheckCircle,
    "in-progress": Clock,
    archived: Archive,
  };

  const StatusIcon = statusIcons[project.status];

  return (
    <div className={styles.container}>
      {/* Back Navigation */}
      <motion.div
        className={styles.backNav}
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Link href="/projects" className={styles.backLink}>
          <ArrowLeft size={20} />
          Back to Projects
        </Link>
      </motion.div>

      {/* Hero Section */}
      <motion.section
        className={styles.hero}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className={styles.heroContent}>
          <div className={styles.heroText}>
            <div className={styles.projectMeta}>
              <span className={styles.category}>
                <Tag size={16} />
                {project.category}
              </span>
              <span className={styles.year}>
                <Calendar size={16} />
                {project.year}
              </span>
              <span className={`${styles.status} ${styles[project.status]}`}>
                <StatusIcon size={16} />
                {project.status.charAt(0).toUpperCase() +
                  project.status.slice(1).replace("-", " ")}
              </span>
            </div>

            <h1 className={styles.title}>{project.title}</h1>
            <p className={styles.description}>{project.description}</p>

            <div className={styles.actions}>
              {project.demoUrl && (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.primaryButton}
                >
                  <ExternalLink size={20} />
                  Live Demo
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.secondaryButton}
                >
                  <Github size={20} />
                  Source Code
                </a>
              )}
            </div>
          </div>

          <div className={styles.heroImage}>
            <motion.div
              className={styles.imageWrapper}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Image
                src={project.image}
                alt={project.title}
                fill
                className={styles.projectImage}
                priority
              />
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Technologies Section */}
      <motion.section
        className={styles.technologiesSection}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <div className={styles.sectionContent}>
          <h2 className={styles.sectionTitle}>
            <Code size={24} />
            Technologies Used
          </h2>
          <div className={styles.technologies}>
            {project.technologies.map((tech, index) => (
              <motion.span
                key={tech}
                className={styles.techBadge}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.1 * index }}
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Project Details Section - This will be customized per project */}
      <motion.section
        className={styles.detailsSection}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <div className={styles.sectionContent}>
          <h2 className={styles.sectionTitle}>Project Overview</h2>
          <div className={styles.detailsContent}>
            {getProjectContent(project)}
          </div>
        </div>
      </motion.section>

      {/* Related Projects */}
      {relatedProjects.length > 0 && (
        <motion.section
          className={styles.relatedSection}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <div className={styles.sectionContent}>
            <h2 className={styles.sectionTitle}>Related Projects</h2>
            <div className={styles.relatedProjects}>
              {relatedProjects.map((relatedProject, index) => (
                <ProjectCard
                  key={relatedProject.id}
                  project={relatedProject}
                  index={index}
                />
              ))}
            </div>
          </div>
        </motion.section>
      )}
    </div>
  );
}

// Function to get project-specific content
function getProjectContent(project: Project) {
  const projectContent = {
    chowhub: (
      <div className={styles.projectContent}>
        <div className={styles.contentGrid}>
          <div className={styles.contentBlock}>
            <h3>Key Features</h3>
            <ul>
              <li>
                Real-time Dashboard with live overview of restaurant performance
              </li>
              <li>
                AI-Powered Insights using Claude AI integration for business
                intelligence
              </li>
              <li>Comprehensive Order Management with real-time tracking</li>
              <li>Advanced Analytics with sales performance tracking</li>
              <li>Role-based Access Control for managers and staff</li>
              <li>Inventory Management with low stock alerts</li>
            </ul>
          </div>
          <div className={styles.contentBlock}>
            <h3>Technical Highlights</h3>
            <ul>
              <li>Built with Next.js 15.3.2 and React 19.0.0</li>
              <li>MongoDB with Mongoose ODM for data persistence</li>
              <li>Jotai for atomic state management</li>
              <li>Bootstrap 5.3.6 for responsive UI</li>
              <li>Chart.js for data visualization</li>
              <li>JWT authentication and authorization</li>
            </ul>
          </div>
        </div>
        <div className={styles.achievement}>
          <h4>🏆 Achievement</h4>
          <p>
            Successfully deployed on Vercel with 92%+ test coverage and handles
            real-time data processing for multiple restaurant locations.
          </p>
        </div>
      </div>
    ),

    bookworm: (
      <div className={styles.projectContent}>
        <div className={styles.contentGrid}>
          <div className={styles.contentBlock}>
            <h3>Unique Features</h3>
            <ul>
              <li>
                Interactive Map Discovery with real-time book box locations
              </li>
              <li>Personal Library Management with reading goals tracking</li>
              <li>Community Book Sharing through mapped exchange locations</li>
              <li>
                Google Books API integration for comprehensive book search
              </li>
              <li>Real-time location services with GPS functionality</li>
            </ul>
          </div>
          <div className={styles.contentBlock}>
            <h3>Development Challenge</h3>
            <ul>
              <li>Built in just 3 days during a 10-day summer camp</li>
              <li>International team collaboration (Canada 🇨🇦 & Belgium 🇧🇪)</li>
              <li>React Native with Expo SDK 53</li>
              <li>TypeScript for type safety</li>
              <li>Supabase for backend and real-time features</li>
            </ul>
          </div>
        </div>
        <div className={styles.achievement}>
          <h4>🌟 Innovation</h4>
          <p>
            Solved the problem of &quot;disconnected reading communities&quot;
            by unifying personal book tracking with community sharing in one
            seamless mobile experience.
          </p>
        </div>
      </div>
    ),

    "sports-motion-detection": (
      <div className={styles.projectContent}>
        <div className={styles.contentGrid}>
          <div className={styles.contentBlock}>
            <h3>Computer Vision Features</h3>
            <ul>
              <li>
                Frame differencing with noise filtering for motion detection
              </li>
              <li>
                Weighted average viewport tracking for smooth camera movement
              </li>
              <li>Automatic interface recovery and error handling</li>
              <li>Real-time processing at 15-20 FPS on standard hardware</li>
              <li>Configurable parameters for different sports scenarios</li>
            </ul>
          </div>
          <div className={styles.contentBlock}>
            <h3>Technical Implementation</h3>
            <ul>
              <li>Python with OpenCV for computer vision processing</li>
              <li>NumPy for efficient array operations</li>
              <li>Gaussian blur for noise reduction (21×21 kernel)</li>
              <li>Morphological dilation for motion region connection</li>
              <li>Exponential smoothing for viewport movement</li>
            </ul>
          </div>
        </div>
        <div className={styles.achievement}>
          <h4>📊 Performance</h4>
          <p>
            Achieved 85%+ accuracy in sports scenario motion detection with 40%
            improvement in tracking smoothness through weighted average
            approach.
          </p>
        </div>
      </div>
    ),

    clouddocs: (
      <div className={styles.projectContent}>
        <div className={styles.contentGrid}>
          <div className={styles.contentBlock}>
            <h3>Cloud Integration</h3>
            <ul>
              <li>AWS Cognito authentication with OIDC implementation</li>
              <li>Secure fragment management and conversion system</li>
              <li>Real-time file format conversion capabilities</li>
              <li>Professional dashboard with usage statistics</li>
              <li>Multi-format support (text, data, images)</li>
            </ul>
          </div>
          <div className={styles.contentBlock}>
            <h3>Security Features</h3>
            <ul>
              <li>Enterprise-grade AWS Cognito authentication</li>
              <li>Authorization Code Flow with PKCE</li>
              <li>Secure API communication with Bearer tokens</li>
              <li>Input validation and error handling</li>
              <li>Responsive design with accessibility compliance</li>
            </ul>
          </div>
        </div>
      </div>
    ),

    // Add more project-specific content as needed
    default: (
      <div className={styles.projectContent}>
        <div className={styles.contentBlock}>
          <h3>Project Overview</h3>
          <p>
            This project demonstrates advanced programming concepts and
            showcases technical expertise in {project.technologies.join(", ")}.
          </p>

          <h3>Key Technologies</h3>
          <div className={styles.techList}>
            {project.technologies.map((tech) => (
              <span key={tech} className={styles.techItem}>
                {tech}
              </span>
            ))}
          </div>

          {project.demoUrl && (
            <div className={styles.demoSection}>
              <h3>Live Demo</h3>
              <p>
                Experience the project in action through the live demo link
                above.
              </p>
            </div>
          )}

          {project.githubUrl && (
            <div className={styles.sourceSection}>
              <h3>Source Code</h3>
              <p>
                Explore the complete implementation and technical details in the
                GitHub repository.
              </p>
            </div>
          )}
        </div>
      </div>
    ),
  };

  return (
    projectContent[project.id as keyof typeof projectContent] ||
    projectContent.default
  );
}
