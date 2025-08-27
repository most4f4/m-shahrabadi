"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import styles from "./HeroSection.module.css";

export default function HeroSection() {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {/* Text Content */}
          <motion.div
            className={styles.textContent}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.h1
              className={styles.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Hi, I&apos;m <span className={styles.nameHighlight}>Mostafa</span>
            </motion.h1>

            <motion.p
              className={styles.description}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              To me, every problem is like a puzzle waiting to be solved - and I
              absolutely love the challenge! As a computer programmer with an
              engineering background (MSc), I&apos;m passionate about app
              development. I piece together solutions using cloud technologies,
              machine learning, and computer vision to create meaningful
              applications.
            </motion.p>

            <motion.div
              className={styles.buttonGroup}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <a href="/projects" className={styles.primaryButton}>
                View My Work
              </a>
              <a href="/contact" className={styles.secondaryButton}>
                Get In Touch
              </a>
            </motion.div>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            className={styles.imageContainer}
            initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{
              duration: 1,
              delay: 0.3,
              ease: "easeOut",
            }}
          >
            <motion.div
              className={styles.imageWrapper}
              whileHover={{
                scale: 1.05,
                rotate: 2,
                transition: { duration: 0.3 },
              }}
            >
              <div className={styles.imageFrame}>
                <div className={styles.glowEffect}></div>
                <Image
                  src="/images/personal2.jpg"
                  alt="Mostafa - Computer Engineer"
                  fill
                  className={styles.profileImage}
                  priority
                />
                <motion.div
                  className={styles.animatedGlow}
                  animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.75, 0.5, 0.75],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
