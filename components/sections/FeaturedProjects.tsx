"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getFeaturedProjects, projects } from "../../data/projects";
import ProjectCard from "./ProjectCard";
import styles from "./FeaturedProjects.module.css";

export default function FeaturedProjects() {
  const featuredProjects = getFeaturedProjects();

  // If no featured projects, show first 3 projects
  const displayProjects =
    featuredProjects.length > 0
      ? featuredProjects.slice(0, 3)
      : projects.slice(0, 3);

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* Header */}
        <div className={styles.header}>
          <motion.h2
            className={styles.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Featured Projects
          </motion.h2>

          <motion.p
            className={styles.subtitle}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            A showcase of my most impactful and innovative work
          </motion.p>
        </div>

        {/* Projects Grid */}
        <motion.div
          className={styles.projectsGrid}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {displayProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </motion.div>

        {/* View All Projects Link */}
        <motion.div
          className={styles.viewAllContainer}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <Link href="/projects" className={styles.viewAllButton}>
            <span>View All Projects</span>
            <ArrowRight size={20} />
          </Link>

          <p className={styles.projectCount}>
            {projects.length} total projects available
          </p>
        </motion.div>
      </div>
    </section>
  );
}
