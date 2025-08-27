"use client";

import { motion } from "framer-motion";
import styles from "./SkillsSection.module.css";

const skills = [
  {
    title: "Problem Solving",
    description:
      "Engineering solutions with analytical thinking and innovative approaches to complex challenges.",
    color: "blue",
  },
  {
    title: "Cloud Solutions",
    description:
      "Leveraging modern cloud technologies to build scalable and efficient applications.",
    color: "purple",
  },
  {
    title: "ML & Computer Vision",
    description:
      "Exploring machine learning and big data technologies to create intelligent solutions.",
    color: "green",
  },
];

export default function SkillsSection() {
  return (
    <section className={styles.skills}>
      <div className={styles.container}>
        <motion.h2
          className={styles.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Expertise & Passion
        </motion.h2>

        <motion.div
          className={styles.grid}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {skills.map((skill, index) => (
            <motion.div
              key={skill.title}
              className={`${styles.card} ${styles[skill.color]}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{
                y: -5,
                transition: { duration: 0.2 },
              }}
            >
              <h3 className={styles.cardTitle}>{skill.title}</h3>
              <p className={styles.cardDescription}>{skill.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
