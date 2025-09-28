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
        <div className={styles.leadership}>
          <h3>🎯 Team Leadership</h3>
          <p>
            Led a team of 4 full-stack developers through the complete software
            development lifecycle, from requirements gathering to deployment and
            maintenance.
          </p>
        </div>
        <div className={styles.contentGrid}>
          <div className={styles.contentBlock}>
            <h3>Backend Architecture</h3>
            <ul>
              <li>RESTful API with Node.js and Express.js</li>
              <li>MongoDB with Mongoose ODM for scalable data management</li>
              <li>JWT authentication with role-based access control</li>
              <li>Real-time inventory tracking and automatic deduction</li>
              <li>AI integration with OpenRouter API for business insights</li>
              <li>Comprehensive test suite with Jest (92%+ coverage)</li>
            </ul>
          </div>
          <div className={styles.contentBlock}>
            <h3>Frontend Features</h3>
            <ul>
              <li>Modern React 19 with Next.js 15 App Router</li>
              <li>Real-time dashboard with advanced analytics</li>
              <li>Responsive design with Bootstrap and custom components</li>
              <li>Interactive data visualization with Chart.js</li>
              <li>State management with Jotai for optimal performance</li>
              <li>Multi-restaurant support with isolated data</li>
            </ul>
          </div>
        </div>
        <div className={styles.achievement}>
          <h4>🏆 Technical Achievement</h4>
          <p>
            Successfully architected and deployed a production-ready full-stack
            application serving multiple restaurant locations with real-time
            data processing, comprehensive testing, and AI-powered business
            intelligence.
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
            <h3>Cloud Architecture</h3>
            <ul>
              <li>
                AWS S3: Object storage for document fragments and converted
                files
              </li>
              <li>
                DynamoDB: NoSQL database for metadata and fragment indexing
              </li>
              <li>AWS Cognito: Enterprise authentication with OIDC/JWT</li>
              <li>ECR/Fargate: Containerized deployment with Docker</li>
              <li>LocalStack: Local AWS services emulation for development</li>
              <li>
                Multi-stage Docker builds: Optimized production containers
              </li>
            </ul>
          </div>
          <div className={styles.contentBlock}>
            <h3>Microservices Backend</h3>
            <ul>
              <li>RESTful API: Express.js with comprehensive endpoints</li>
              <li>Format Conversion: Sharp for images, Markdown-it for text</li>
              <li>Dual Storage: Memory (dev) and AWS (production) backends</li>
              <li>Security: Helmet.js, CORS, input validation</li>
              <li>92%+ Test Coverage: Jest with integration testing</li>
              <li>Production Logging: Structured JSON logging with Pino</li>
            </ul>
          </div>
        </div>
        <div className={styles.achievement}>
          <h4>🏆 Cloud Infrastructure Achievement</h4>
          <p>
            Successfully architected and deployed a production-ready
            cloud-native application using AWS services with containerized
            microservices, achieving 92%+ test coverage and seamless CI/CD
            pipeline with automated format conversion capabilities.
          </p>
        </div>
      </div>
    ),

    "ai-assistant-m3": (
      <div className={styles.projectContent}>
        <div className={styles.leadership}>
          <h3>🤖 AI-Powered Multi-Tool Platform</h3>
          <p>
            Developed a comprehensive AI assistant that combines conversational
            AI with practical tools, featuring intelligent chat modes and
            real-time data integration for enhanced user productivity.
          </p>
        </div>
        <div className={styles.contentGrid}>
          <div className={styles.contentBlock}>
            <h3>Core AI Features</h3>
            <ul>
              <li>
                Three intelligent chat modes: Auto (Smart), Always Search, and
                Chat Only
              </li>
              <li>LangChain integration with Groq&apos;s Llama 3.1 8B model</li>
              <li>Smart search detection using keyword analysis</li>
              <li>Context-aware conversation handling with memory</li>
              <li>Real-time web search integration via SerpAPI</li>
              <li>Error handling and graceful API failure recovery</li>
            </ul>
          </div>
          <div className={styles.contentBlock}>
            <h3>Integrated Tools & APIs</h3>
            <ul>
              <li>
                🌤️ Weather Tool: Real-time weather data via OpenWeatherMap API
              </li>
              <li>
                💱 Currency Converter: Live exchange rates with 50+ currencies
              </li>
              <li>
                📊 Stock Price Lookup: Current market data and financial
                information
              </li>
              <li>🧮 Calculator: Safe mathematical expression evaluation</li>
              <li>Interactive Streamlit interface with responsive design</li>
              <li>Session state management and conversation persistence</li>
            </ul>
          </div>
        </div>
        <div className={styles.achievement}>
          <h4>🏆 Technical Achievement</h4>
          <p>
            Successfully built a production-ready AI platform that intelligently
            routes queries between conversational AI and specialized tools,
            achieving seamless user experience with 4 integrated APIs and robust
            error handling across all components.
          </p>
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
