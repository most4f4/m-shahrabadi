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
          <h3>🤖 Conversational RAG Agent with Cloud Storage</h3>
          <p>
            Built a production-grade AI assistant featuring an intelligent
            reasoning agent, RAG-based document Q&A, conversational context
            awareness, and Firebase cloud storage with ChatGPT-style session
            management.
          </p>
        </div>

        <div className={styles.contentGrid}>
          <div className={styles.contentBlock}>
            <h3>🧠 Intelligent Agent System</h3>
            <ul>
              <li>
                Reasoning agent that autonomously selects appropriate tools
                based on context
              </li>
              <li>
                Conversational context awareness - understands pronouns and
                follow-up questions
              </li>
              <li>
                Two-level memory: agent history (10 msgs) + RAG history (20
                msgs)
              </li>
              <li>Custom enhanced prompts for optimal tool selection</li>
              <li>GPT-4 integration with LangChain agent framework</li>
              <li>Handles multi-tool queries intelligently</li>
            </ul>
          </div>

          <div className={styles.contentBlock}>
            <h3>📄 RAG Document Q&A</h3>
            <ul>
              <li>Upload PDFs, Word docs, and text files for Q&A</li>
              <li>ChromaDB vector store with OpenAI embeddings</li>
              <li>
                Conversational RAG - reformulates questions using chat history
              </li>
              <li>Document chunking with recursive text splitter (1000/200)</li>
              <li>Smart retrieval with top-3 similarity search</li>
              <li>
                Supports follow-up questions like "summarize it", "tell me more"
              </li>
            </ul>
          </div>

          <div className={styles.contentBlock}>
            <h3>🛠️ Six Integrated Tools</h3>
            <ul>
              <li>🔍 Web Search - SerpAPI for current information</li>
              <li>🌤️ Weather - Real-time data via OpenWeatherMap</li>
              <li>
                💱 Currency Converter - Live exchange rates (50+ currencies)
              </li>
              <li>📊 Stock Prices - Current market data lookup</li>
              <li>🧮 Calculator - Safe mathematical expression evaluation</li>
              <li>📄 Document Q&A - RAG-based conversational queries</li>
            </ul>
          </div>

          <div className={styles.contentBlock}>
            <h3>☁️ Google Cloud Storage & Session Management</h3>
            <ul>
              <li>Google Cloud Firestore integration for persistent storage</li>
              <li>
                Cloud-native architecture with service account authentication
              </li>
              <li>
                ChatGPT-style UI with smart session titles (generated from first
                message)
              </li>
              <li>
                Lazy loading - sessions load only when clicked (5-8x faster)
              </li>
              <li>Auto-save functionality with session caching</li>
              <li>Delete sessions with one click</li>
              <li>Supports multiple conversations with seamless switching</li>
              <li>
                Scalable cloud infrastructure supporting 100+ concurrent users
              </li>
            </ul>
          </div>

          <div className={styles.contentBlock}>
            <h3>🏗️ Architecture & Design</h3>
            <ul>
              <li>
                Modular architecture: separate tools, agents, RAG, UI, and utils
                packages
              </li>
              <li>Tool decorator pattern for easy extensibility</li>
              <li>Pydantic schemas for type-safe tool inputs</li>
              <li>Session state management with Streamlit</li>
              <li>Error handling and graceful API failure recovery</li>
              <li>Configuration-driven design (easy to customize)</li>
            </ul>
          </div>

          <div className={styles.contentBlock}>
            <h3>⚡ Performance Optimizations</h3>
            <ul>
              <li>Lazy loading for 5-8x faster startup</li>
              <li>Session metadata caching (no repeated Firebase queries)</li>
              <li>Title storage at creation (not generated each time)</li>
              <li>
                Optimized Firestore reads (metadata only, not full messages)
              </li>
              <li>Agent caching with @st.cache_resource</li>
              <li>Configurable auto-load for speed vs UX balance</li>
            </ul>
          </div>
        </div>

        <div className={styles.achievement}>
          <h4>🏆 Technical Achievements</h4>
          <ul>
            <li>
              <strong>Intelligent Agent:</strong> Built reasoning agent that
              autonomously selects and chains tools with conversational context
              awareness
            </li>
            <li>
              <strong>Conversational RAG:</strong> Implemented dual-memory
              system with question reformulation for natural document Q&A
            </li>
            <li>
              <strong>Cloud Architecture:</strong> Integrated Google Cloud
              Firestore for production-grade data persistence with service
              account security
            </li>
            <li>
              <strong>Production Design:</strong> Modular, scalable architecture
              with 6 tools, cloud storage, and ChatGPT-style UX
            </li>
            <li>
              <strong>Performance:</strong> Achieved 5-8x faster load times
              through lazy loading and intelligent caching strategies
            </li>
          </ul>
        </div>

        <div className={styles.keyFeatures}>
          <h4>💡 Key Features</h4>
          <div className={styles.featureHighlights}>
            <span className={styles.badge}>Reasoning Agent</span>
            <span className={styles.badge}>Conversational Context</span>
            <span className={styles.badge}>RAG Document Q&A</span>
            <span className={styles.badge}>Cloud Storage</span>
            <span className={styles.badge}>ChatGPT-style UI</span>
            <span className={styles.badge}>Lazy Loading</span>
            <span className={styles.badge}>Multi-Tool Integration</span>
            <span className={styles.badge}>Modular Architecture</span>
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
