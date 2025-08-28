"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  GraduationCap,
  Briefcase,
  Code,
  Award,
  Lightbulb,
  Target,
  Heart,
  ChevronRight,
  Download,
  Github,
  Linkedin,
  Mail,
} from "lucide-react";
import styles from "./AboutSection.module.css";

export default function AboutSection() {
  const stats = [
    {
      icon: GraduationCap,
      label: "Education",
      value: "M.Eng + Adv. Diploma",
      description: "University of Birmingham & Seneca Polytechnic",
    },
    {
      icon: Award,
      label: "Academic Honors",
      value: "5× Honor List",
      description: "President's Honor List + Research Selection",
    },
    {
      icon: Code,
      label: "Projects Portfolio",
      value: "20+",
      description: "Full-stack, mobile, ML & system programming",
    },
    {
      icon: Briefcase,
      label: "Professional Experience",
      value: "Web Developer",
      description: "Questrade Financial Inc. (Sep-Dec 2024)",
    },
  ];

  const skills = {
    "Programming Languages": [
      "Python",
      "Java",
      "C++",
      "C",
      "JavaScript",
      "TypeScript",
      "Swift",
      "PHP",
    ],
    "Frontend Development": [
      "React",
      "Next.js",
      "Angular",
      "React Native",
      "HTML",
      "CSS",
      "Bootstrap",
      "Tailwind CSS",
    ],
    "Backend Development": [
      "Node.js",
      "Express.js",
      "RESTful APIs",
      "Microservices",
      "WordPress",
    ],
    "Cloud & DevOps": [
      "AWS (ECS, Fargate, DynamoDB, S3, Cognito)",
      "Docker",
      "CI/CD",
      "Git",
    ],
    Databases: ["MongoDB", "DB2", "Oracle SQL", "Supabase", "Firebase"],
    "Machine Learning": [
      "TensorFlow",
      "Scikit-Learn",
      "OpenCV",
      "Pandas",
      "NumPy",
      "MTCNN",
    ],
    "Development Tools": [
      "VS Code",
      "IntelliJ IDEA",
      "Xcode",
      "Visual Studio",
      "Jira",
      "AutoCAD",
    ],
  };

  return (
    <div className={styles.container}>
      {/* Hero Section */}
      <motion.section
        className={styles.hero}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className={styles.heroContent}>
          <div className={styles.heroText}>
            <motion.h1
              className={styles.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              About Mostafa
            </motion.h1>

            <motion.div
              className={styles.subtitle}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <GraduationCap size={20} />
              <span>From Engineering Research to Software Innovation</span>
            </motion.div>

            <motion.p
              className={styles.introText}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              With a Master&apos;s in Engineering from the University of
              Birmingham and an Advanced Diploma in Computer Programming &
              Analysis from Seneca Polytechnic, I bring a unique blend of
              analytical thinking and creative problem-solving to software
              development. My engineering background gives me a systematic
              approach to building robust, scalable applications.
            </motion.p>

            <motion.div
              className={styles.heroActions}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <Link href="/contact" className={styles.primaryButton}>
                <Mail size={20} />
                Get In Touch
              </Link>

              <a href="/Resume.pdf" download className={styles.secondaryButton}>
                <Download size={20} />
                Download Resume
              </a>
            </motion.div>

            <motion.div
              className={styles.socialLinks}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <a
                href="https://github.com/most4f4"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
              >
                <Github size={20} />
              </a>
              <a
                href="https://linkedin.com/in/mostafa-shah"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
              >
                <Linkedin size={20} />
              </a>
            </motion.div>
          </div>

          <motion.div
            className={styles.heroImage}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className={styles.imageWrapper}>
              <Image
                src="/images/personal.jpg"
                alt="Mostafa Hasanalipourshahrabadi"
                fill
                className={styles.profileImage}
                priority
              />
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Stats Section */}
      <motion.section
        className={styles.statsSection}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className={styles.statsGrid}>
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className={styles.statCard}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className={styles.statIcon}>
                <stat.icon size={24} />
              </div>
              <div className={styles.statContent}>
                <h3 className={styles.statValue}>{stat.value}</h3>
                <p className={styles.statLabel}>{stat.label}</p>
                <p className={styles.statDescription}>{stat.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* My Journey Section */}
      <motion.section
        className={styles.journeySection}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className={styles.sectionContent}>
          <h2 className={styles.sectionTitle}>
            <Lightbulb size={28} />
            My Journey
          </h2>

          <div className={styles.journeyContent}>
            <div className={styles.journeyStory}>
              <div className={styles.storyBlock}>
                <div className={styles.storyContent}>
                  <h3>🎓 Engineering Foundation & Research Excellence</h3>
                  <p>
                    I earned my{" "}
                    <strong>
                      Master&apos;s in Engineering from the University of
                      Birmingham (UK)
                    </strong>
                    , where my thesis focused on Earth Boundary Layer simulation
                    in wind tunnels. During my studies, my{" "}
                    <strong>
                      research work was selected by the faculty of the
                      Department of Civil and Mechanical Engineering
                    </strong>{" "}
                    and I received a{" "}
                    <strong>
                      bursary from Birmingham Center for Railway Systems
                      Engineering and Integration
                    </strong>
                    . This research required me to work with big data excavated
                    by probes to verify simulated wind patterns—and that&apos;s
                    when my interest in programming first sparked.
                  </p>
                </div>
                <div className={styles.storyImage}>
                  <Image
                    src="/images/journey/university.jpg"
                    alt="University research"
                    fill
                    className={styles.storyPhoto}
                  />
                </div>
              </div>

              <div className={styles.storyBlock}>
                <div className={styles.storyContent}>
                  <h3>🏆 Engineering Competitions & Innovation</h3>
                  <p>
                    My engineering journey was marked by competitive success. I
                    achieved{" "}
                    <strong>
                      First and Third place in the National Competition of
                      Spaghetti Structures in two consecutive years
                    </strong>
                    , designing and building bridges with spaghetti while
                    maintaining the heaviest loads. These competitions taught me
                    the importance of optimization, structural integrity, and
                    innovative problem-solving under constraints—principles I
                    now apply to software architecture.
                  </p>
                </div>
                <div className={styles.storyImage}>
                  <Image
                    src="/images/journey/competition.jpg"
                    alt="Engineering competition"
                    fill
                    className={styles.storyPhoto}
                  />
                </div>
              </div>

              <div className={styles.storyBlock}>
                <div className={styles.storyContent}>
                  <h3>🌍 The Career Transition</h3>
                  <p>
                    When I moved to Canada, I saw it as a perfect opportunity
                    for both personal and professional transformation. Although
                    I was fortunate to secure a{" "}
                    <strong>
                      Project Engineer position at Aldani Master Group
                    </strong>{" "}
                    within my first month, I realized my true passion lay in
                    software development. After 8 months, I made the bold
                    decision to enroll in the{" "}
                    <strong>
                      Computer Programming & Analysis program at Seneca
                      Polytechnic
                    </strong>
                    .
                  </p>
                </div>
                <div className={styles.storyImage}>
                  <Image
                    src="/images/journey/canada.jpg"
                    alt="Career transition"
                    fill
                    className={styles.storyPhoto}
                  />
                </div>
              </div>

              <div className={styles.storyBlock}>
                <div className={styles.storyContent}>
                  <h3>🎯 Academic Excellence in Programming</h3>
                  <p>
                    At Seneca, I maintained exceptional academic performance,
                    earning the honor of being on the
                    <strong> President&apos;s Honor List 5 times</strong>. This
                    achievement reflects my dedication to mastering new
                    technologies while successfully transitioning from
                    engineering to software development. I&apos;m set to
                    graduate in September 2025.
                  </p>
                </div>
                <div className={styles.storyImage}>
                  <Image
                    src="/images/journey/seneca.png"
                    alt="Seneca studies"
                    fill
                    className={styles.storyPhoto}
                  />
                </div>
              </div>

              <div className={styles.storyBlock}>
                <div className={styles.storyContent}>
                  <h3>💼 Professional Software Development</h3>
                  <p>
                    I secured a{" "}
                    <strong>
                      Web Developer Intern position at Questrade Financial Inc.
                    </strong>{" "}
                    (September-December 2024), where I maintained and enhanced
                    external corporate websites and internal departmental Google
                    Sites. I collaborated with cross-functional teams to fulfill
                    design requirements, integrate event tracking systems, and
                    resolve website issues, improving functionality and UI
                    consistency across multiple platforms.
                  </p>
                </div>
                <div className={styles.storyImage}>
                  <Image
                    src="/images/journey/questrade.jpeg"
                    alt="Professional development"
                    fill
                    className={styles.storyPhoto}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Skills Section */}
      <motion.section
        className={styles.skillsSection}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className={styles.sectionContent}>
          <h2 className={styles.sectionTitle}>
            <Code size={28} />
            Technical Expertise
          </h2>

          <div className={styles.skillsGrid}>
            {Object.entries(skills).map(([category, techs], index) => (
              <motion.div
                key={category}
                className={styles.skillCategory}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className={styles.skillCategoryTitle}>{category}</h3>
                <div className={styles.skillTags}>
                  {techs.map((tech) => (
                    <span key={tech} className={styles.skillTag}>
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Philosophy Section */}
      <motion.section
        className={styles.philosophySection}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className={styles.sectionContent}>
          <h2 className={styles.sectionTitle}>
            <Heart size={28} />
            What Drives Me
          </h2>

          <div className={styles.philosophyContent}>
            <div className={styles.philosophyGrid}>
              <div className={styles.philosophyCard}>
                <h3>🧩 Problem-Solving Mindset</h3>
                <p>
                  Every challenge is a puzzle waiting to be solved. I approach
                  each problem systematically, breaking it down into manageable
                  pieces and finding elegant solutions through code.
                </p>
              </div>

              <div className={styles.philosophyCard}>
                <h3>🚀 Continuous Learning</h3>
                <p>
                  Technology evolves rapidly, and I embrace lifelong learning.
                  From my engineering roots to mastering new programming
                  paradigms, I&apos;m always expanding my knowledge and skills.
                </p>
              </div>

              <div className={styles.philosophyCard}>
                <h3>🛠️ Engineering Excellence</h3>
                <p>
                  My engineering background instilled in me a appreciation for
                  precision, efficiency, and robust solutions. I apply these
                  principles to every line of code I write.
                </p>
              </div>

              <div className={styles.philosophyCard}>
                <h3>🌍 Real-World Impact</h3>
                <p>
                  I&apos;m passionate about creating applications that solve
                  real problems and make people&apos;s lives easier, more
                  productive, or more enjoyable.
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Call to Action */}
      <motion.section
        className={styles.ctaSection}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className={styles.ctaContent}>
          <h2 className={styles.ctaTitle}>
            Let&apos;s Build Something Amazing Together
          </h2>
          <p className={styles.ctaText}>
            I&apos;m always excited to work on new challenges and collaborate
            with fellow developers, entrepreneurs, and organizations who are
            passionate about creating innovative solutions.
          </p>

          <div className={styles.ctaActions}>
            <Link href="/projects" className={styles.ctaButton}>
              <Target size={20} />
              View My Work
              <ChevronRight size={16} />
            </Link>

            <Link href="/contact" className={styles.ctaSecondary}>
              <Mail size={20} />
              Start a Conversation
            </Link>
          </div>
        </div>
      </motion.section>
    </div>
  );
}
