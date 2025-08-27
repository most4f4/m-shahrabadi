"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Github,
  Linkedin,
  MessageSquare,
  Clock,
  CheckCircle,
  AlertCircle,
} from "lucide-react";
import styles from "./ContactSection.module.css";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormStatus {
  type: "idle" | "loading" | "success" | "error";
  message: string;
}

export default function ContactSection() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [formStatus, setFormStatus] = useState<FormStatus>({
    type: "idle",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus({
        type: "error",
        message: "Please fill in all required fields.",
      });
      return;
    }

    setFormStatus({
      type: "loading",
      message: "Sending your message...",
    });

    try {
      // Using Formspree - replace YOUR_FORM_ID with your actual Formspree form ID
      const response = await fetch("https://formspree.io/f/xjkevzjb", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject || "Contact from Portfolio",
          message: formData.message,
          _replyto: formData.email, // Formspree will use this for reply-to
        }),
      });

      if (response.ok) {
        setFormStatus({
          type: "success",
          message:
            "Thank you! Your message has been sent successfully. I'll get back to you soon.",
        });

        // Reset form
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      } else {
        throw new Error("Form submission failed");
      }
    } catch (error) {
      setFormStatus({
        type: "error",
        message:
          "Sorry, there was an error sending your message. Please try again or contact me directly.",
      });
    }
  };

  const contactMethods = [
    {
      icon: Mail,
      title: "Email",
      value: "mhasanalipourshahrab@myseneca.ca",
      href: "mailto:mhasanalipourshahrab@myseneca.ca",
      description: "Send me an email anytime",
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+1 (647) 898-8084",
      href: "tel:+16478988084",
      description: "Available Mon-Fri, 9AM-6PM EST",
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Richmond Hill, ON, Canada",
      href: "https://maps.google.com/?q=Richmond+Hill,+ON,+Canada",
      description: "Available for local meetings",
    },
  ];

  const socialLinks = [
    {
      icon: Github,
      name: "GitHub",
      href: "https://github.com/most4f4",
      color: "#333",
    },
    {
      icon: Linkedin,
      name: "LinkedIn",
      href: "https://linkedin.com/in/mostafa-shah",
      color: "#0077b5",
    },
  ];

  return (
    <div className={styles.container}>
      {/* Header Section */}
      <motion.section
        className={styles.header}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className={styles.headerContent}>
          <h1 className={styles.title}>Get In Touch</h1>
          <p className={styles.subtitle}>
            I&apos;m always interested in new opportunities, challenging
            projects, and meaningful collaborations. Whether you have a project
            in mind, want to discuss technology, or just say hello, I&apos;d
            love to hear from you.
          </p>
        </div>
      </motion.section>

      <div className={styles.contentGrid}>
        {/* Contact Methods */}
        <motion.section
          className={styles.contactMethods}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className={styles.sectionTitle}>Contact Information</h2>

          <div className={styles.methodsList}>
            {contactMethods.map((method, index) => (
              <motion.a
                key={method.title}
                href={method.href}
                className={styles.methodCard}
                target={method.href.startsWith("http") ? "_blank" : "_self"}
                rel={
                  method.href.startsWith("http") ? "noopener noreferrer" : ""
                }
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className={styles.methodIcon}>
                  <method.icon size={24} />
                </div>
                <div className={styles.methodInfo}>
                  <h3 className={styles.methodTitle}>{method.title}</h3>
                  <p className={styles.methodValue}>{method.value}</p>
                  <p className={styles.methodDescription}>
                    {method.description}
                  </p>
                </div>
              </motion.a>
            ))}
          </div>

          {/* Social Links */}
          <div className={styles.socialSection}>
            <h3 className={styles.socialTitle}>Connect With Me</h3>
            <div className={styles.socialLinks}>
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialLink}
                  style={
                    { "--hover-color": social.color } as React.CSSProperties
                  }
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.6 + index * 0.1 }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon size={20} />
                  <span>{social.name}</span>
                </motion.a>
              ))}
            </div>
          </div>

          {/* Response Time */}
          <motion.div
            className={styles.responseInfo}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.8 }}
          >
            <Clock size={20} />
            <div>
              <p className={styles.responseTitle}>Response Time</p>
              <p className={styles.responseText}>
                I typically respond within 24 hours
              </p>
            </div>
          </motion.div>
        </motion.section>

        {/* Contact Form */}
        <motion.section
          className={styles.contactForm}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h2 className={styles.sectionTitle}>Send Me a Message</h2>

          <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.formGrid}>
              <div className={styles.inputGroup}>
                <label htmlFor="name" className={styles.label}>
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className={styles.input}
                  placeholder="Your full name"
                  required
                />
              </div>

              <div className={styles.inputGroup}>
                <label htmlFor="email" className={styles.label}>
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={styles.input}
                  placeholder="your.email@example.com"
                  required
                />
              </div>
            </div>

            <div className={styles.inputGroup}>
              <label htmlFor="subject" className={styles.label}>
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                className={styles.input}
                placeholder="What's this about?"
              />
            </div>

            <div className={styles.inputGroup}>
              <label htmlFor="message" className={styles.label}>
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                className={styles.textarea}
                placeholder="Tell me about your project, question, or just say hello..."
                rows={6}
                required
              />
            </div>

            {/* Form Status */}
            {formStatus.type !== "idle" && (
              <motion.div
                className={`${styles.formStatus} ${styles[formStatus.type]}`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                {formStatus.type === "loading" && <MessageSquare size={20} />}
                {formStatus.type === "success" && <CheckCircle size={20} />}
                {formStatus.type === "error" && <AlertCircle size={20} />}
                <span>{formStatus.message}</span>
              </motion.div>
            )}

            <motion.button
              type="submit"
              className={styles.submitButton}
              disabled={formStatus.type === "loading"}
              whileHover={{ scale: formStatus.type === "loading" ? 1 : 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {formStatus.type === "loading" ? (
                <>
                  <div className={styles.spinner} />
                  Sending...
                </>
              ) : (
                <>
                  <Send size={20} />
                  Send Message
                </>
              )}
            </motion.button>
          </form>
        </motion.section>
      </div>
    </div>
  );
}
