"use client";

import { motion } from "framer-motion";
import { Brain, Cloud, Eye, Code, Database, Cpu } from "lucide-react";
import styles from "./SkillsSection.module.css";

const skills = [
  {
    title: "Problem Solving",
    description:
      "Engineering solutions with analytical thinking and innovative approaches to complex challenges.",
    color: "blue",
    icon: Brain,
    technologies: [
      "Algorithm Design",
      "System Architecture",
      "Debug & Optimization",
    ],
  },
  {
    title: "Cloud Solutions",
    description:
      "Building scalable applications with modern cloud infrastructure and containerization.",
    color: "purple",
    icon: Cloud,
    technologies: ["AWS", "Docker", "Microservices", "CI/CD"],
  },
  {
    title: "ML & Computer Vision",
    description:
      "Creating intelligent solutions using machine learning and computer vision technologies.",
    color: "green",
    icon: Eye,
    technologies: ["TensorFlow", "OpenCV", "Data Analysis", "Neural Networks"],
  },
];

const additionalSkills = [
  { name: "React/Next.js", icon: Code, level: 90 },
  { name: "Node.js", icon: Cpu, level: 85 },
  { name: "MongoDB", icon: Database, level: 80 },
];

export default function SkillsSection() {
  return (
    <section className={styles.skills}>
      <div className={styles.container}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className={styles.title}>Expertise & Passion</h2>
          <p className={styles.subtitle}>
            Combining engineering fundamentals with modern technologies to
            create impactful solutions
          </p>
        </motion.div>

        <motion.div
          className={styles.grid}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {skills.map((skill, index) => {
            const IconComponent = skill.icon;
            return (
              <motion.div
                key={skill.title}
                className={`${styles.card} ${styles[skill.color]}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{
                  y: -8,
                  transition: { duration: 0.3 },
                }}
              >
                <div className={styles.cardHeader}>
                  <div
                    className={`${styles.iconWrapper} ${styles[skill.color]}`}
                  >
                    <IconComponent size={24} className={styles.icon} />
                  </div>
                  <h3 className={styles.cardTitle}>{skill.title}</h3>
                </div>
                <p className={styles.cardDescription}>{skill.description}</p>
                <div className={styles.technologies}>
                  {skill.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className={styles.tech}>
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Additional Skills Bar */}
        {/* <motion.div
          className={styles.additionalSkills}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <h3 className={styles.additionalTitle}>Core Technologies</h3>
          <div className={styles.skillBars}>
            {additionalSkills.map((skill, index) => {
              const IconComponent = skill.icon;
              return (
                <motion.div
                  key={skill.name}
                  className={styles.skillBar}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className={styles.skillInfo}>
                    <IconComponent size={16} className={styles.skillIcon} />
                    <span className={styles.skillName}>{skill.name}</span>
                    <span className={styles.skillLevel}>{skill.level}%</span>
                  </div>
                  <div className={styles.progressBar}>
                    <motion.div
                      className={styles.progress}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: 0.8 + index * 0.1 }}
                      viewport={{ once: true }}
                    />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div> */}
      </div>
    </section>
  );
}
