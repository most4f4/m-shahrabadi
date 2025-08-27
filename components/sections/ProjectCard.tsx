"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ExternalLink, Github, Calendar, Code } from "lucide-react";
import { Project } from "../../data/projects";
import styles from "./ProjectCard.module.css";

interface ProjectCardProps {
  project: Project;
  index?: number;
}

export default function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  return (
    <motion.div
      className={styles.card}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
    >
      <div className={styles.cardContent}>
        {/* Project Image */}
        <div className={styles.imageContainer}>
          <Image
            src={project.image}
            alt={project.title}
            fill
            className={styles.projectImage}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className={styles.imageOverlay}>
            <div className={styles.overlayButtons}>
              {project.demoUrl && (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.overlayButton}
                  aria-label="View Live Demo"
                >
                  <ExternalLink size={20} />
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.overlayButton}
                  aria-label="View Source Code"
                >
                  <Github size={20} />
                </a>
              )}
            </div>
          </div>

          {/* Category Badge */}
          <div className={styles.categoryBadge}>{project.category}</div>

          {/* Featured Badge */}
          {project.featured && (
            <div className={styles.featuredBadge}>⭐ Featured</div>
          )}
        </div>

        {/* Project Info */}
        <div className={styles.cardBody}>
          <div className={styles.cardHeader}>
            <h3 className={styles.projectTitle}>
              <Link
                href={`/projects/${project.id}`}
                className={styles.titleLink}
              >
                {project.title}
              </Link>
            </h3>

            <div className={styles.projectMeta}>
              <span className={styles.metaItem}>
                <Calendar size={14} />
                {project.year}
              </span>
              <span
                className={`${styles.metaItem} ${styles.status} ${
                  styles[project.status]
                }`}
              >
                {project.status.charAt(0).toUpperCase() +
                  project.status.slice(1).replace("-", " ")}
              </span>
            </div>
          </div>

          <p className={styles.projectDescription}>{project.description}</p>

          {/* Technologies */}
          <div className={styles.technologies}>
            {project.technologies.slice(0, 4).map((tech, techIndex) => (
              <span key={techIndex} className={styles.techBadge}>
                <Code size={12} />
                {tech}
              </span>
            ))}
            {project.technologies.length > 4 && (
              <span className={styles.techBadge}>
                +{project.technologies.length - 4} more
              </span>
            )}
          </div>

          {/* Action Buttons */}
          <div className={styles.cardActions}>
            <Link
              href={`/projects/${project.id}`}
              className={styles.primaryButton}
            >
              View Details
            </Link>

            <div className={styles.actionLinks}>
              {project.demoUrl && (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.actionLink}
                  aria-label="Live Demo"
                >
                  <ExternalLink size={16} />
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.actionLink}
                  aria-label="Source Code"
                >
                  <Github size={16} />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
