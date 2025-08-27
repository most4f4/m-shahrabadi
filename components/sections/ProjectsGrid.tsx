"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Search, Filter, Grid, List } from "lucide-react";
import { Project } from "../../data/projects";
import ProjectCard from "./ProjectCard";
import styles from "./ProjectsGrid.module.css";

interface ProjectsGridProps {
  projects: Project[];
  title?: string;
  showFilters?: boolean;
  showSearch?: boolean;
  categories?: string[];
  initialCategory?: string;
}

export default function ProjectsGrid({
  projects,
  title = "Projects",
  showFilters = true,
  showSearch = true,
  categories = [],
  initialCategory = "All",
}: ProjectsGridProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  // Filter projects based on search and category
  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesSearch =
        searchTerm === "" ||
        project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.technologies.some((tech) =>
          tech.toLowerCase().includes(searchTerm.toLowerCase())
        );

      const matchesCategory =
        selectedCategory === "All" || project.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [projects, searchTerm, selectedCategory]);

  const allCategories = ["All", ...categories];

  return (
    <div className={styles.container}>
      {/* Header */}
      <div className={styles.header}>
        <motion.h2
          className={styles.title}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {title}
        </motion.h2>

        {projects.length > 0 && (
          <motion.p
            className={styles.subtitle}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {filteredProjects.length} of {projects.length} projects
          </motion.p>
        )}
      </div>

      {/* Filters and Search */}
      {(showFilters || showSearch) && (
        <motion.div
          className={styles.controls}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {/* Search */}
          {showSearch && (
            <div className={styles.searchContainer}>
              <Search className={styles.searchIcon} size={20} />
              <input
                type="text"
                placeholder="Search projects..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className={styles.searchInput}
              />
            </div>
          )}

          {/* Category Filter */}
          {showFilters && categories.length > 0 && (
            <div className={styles.filterContainer}>
              <Filter className={styles.filterIcon} size={20} />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className={styles.filterSelect}
              >
                {allCategories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>
          )}

          {/* View Mode Toggle */}
          <div className={styles.viewToggle}>
            <button
              onClick={() => setViewMode("grid")}
              className={`${styles.viewButton} ${
                viewMode === "grid" ? styles.active : ""
              }`}
              aria-label="Grid view"
            >
              <Grid size={20} />
            </button>
            <button
              onClick={() => setViewMode("list")}
              className={`${styles.viewButton} ${
                viewMode === "list" ? styles.active : ""
              }`}
              aria-label="List view"
            >
              <List size={20} />
            </button>
          </div>
        </motion.div>
      )}

      {/* Projects Grid/List */}
      {filteredProjects.length > 0 ? (
        <motion.div
          className={`${styles.projectsContainer} ${styles[viewMode]}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </motion.div>
      ) : (
        <motion.div
          className={styles.emptyState}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className={styles.emptyIcon}>🔍</div>
          <h3 className={styles.emptyTitle}>No projects found</h3>
          <p className={styles.emptyDescription}>
            Try adjusting your search terms or filters to find what you&apos;re
            looking for.
          </p>
          {(searchTerm || selectedCategory !== "All") && (
            <button
              onClick={() => {
                setSearchTerm("");
                setSelectedCategory("All");
              }}
              className={styles.resetButton}
            >
              Clear filters
            </button>
          )}
        </motion.div>
      )}
    </div>
  );
}
