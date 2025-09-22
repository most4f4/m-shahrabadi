export interface Project {
  id: string;
  title: string;
  description: string;
  category: string;
  technologies: string[];
  image: string;
  demoUrl?: string;
  githubUrl?: string;
  featured?: boolean;
  year: string;
  status: "completed" | "in-progress" | "archived";
}

export const projects: Project[] = [
  // Featured Project
  {
    id: "chowhub",
    title: "ChowHub - Restaurant Management System",
    description:
      "Led a team of 4 developers to build a comprehensive full-stack restaurant management system with real-time analytics, AI insights, and multi-restaurant support.",
    category: "Web Apps",
    technologies: [
      "Next.js",
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
      "AI Integration",
    ],
    image: "/images/projects/chowhub.png",
    demoUrl: "https://chowhub.vercel.app/",
    githubUrl: "https://github.com/most4f4/chowhub",
    featured: true,
    year: "2025",
    status: "completed",
  },

  // Mobile Apps
  {
    id: "bookworm",
    title: "Bookworm",
    description:
      "A community-driven book sharing mobile app built with React Native and Expo. Combines personal book tracking with community sharing through mapped book exchange locations.",
    category: "Mobile Apps",
    technologies: [
      "React Native",
      "Expo",
      "TypeScript",
      "Supabase",
      "Google Books API",
    ],
    image: "/images/projects/bookworm.png",
    githubUrl: "https://github.com/most4f4/bookworm",
    year: "2025",
    status: "completed",
  },

  // Machine Learning and Computer Vision
  {
    id: "sports-motion-detection",
    title: "Sports Motion Detection & Viewport Tracking",
    description:
      'A Python-based motion detection and viewport tracking system that simulates a "virtual camera" for sports video analysis using computer vision techniques.',
    category: "Machine Learning",
    technologies: ["Python", "OpenCV", "NumPy", "Computer Vision"],
    image: "/images/projects/sports-motion.png",
    githubUrl: "https://github.com/most4f4/Sports_Motion_Detection",
    featured: true,
    year: "2025",
    status: "completed",
  },

  // Cloud Project
  {
    id: "clouddocs",
    title: "CloudDocs - Cloud-Native Document Management",
    description:
      "Full-stack cloud-native application with React frontend and Node.js microservices backend. Features AWS Cognito authentication, S3 storage, DynamoDB, ECR/Fargate deployment, and real-time document conversion.",
    category: "Cloud",
    technologies: [
      "Next.js",
      "React",
      "Node.js",
      "AWS Cognito",
      "AWS S3",
      "DynamoDB",
      "Docker",
      "ECR/Fargate",
    ],
    image: "/images/projects/clouddocs.png",
    demoUrl: "https://clouddocs.vercel.app/",
    githubUrl: "https://github.com/most4f4/fragments-ui",
    featured: true,
    year: "2025",
    status: "completed",
  },

  // Desktop Applications
  {
    id: "hotel-reservation",
    title: "Hotel Reservation Management System",
    description:
      "A JavaFX desktop application designed to simplify hotel operations including room booking, guest data management, and administrative oversight.",
    category: "Desktop Apps",
    technologies: ["Java", "JavaFX", "SQLite", "JDBC", "Maven"],
    image: "/images/projects/hotel-reservation.png",
    githubUrl:
      "https://github.com/most4f4/Hotel-Reservation-Management-System-",
    year: "2025",
    status: "completed",
  },

  {
    id: "inventory-management",
    title: "Inventory Management System",
    description:
      "A comprehensive JavaFX-based desktop application for managing inventory parts and products with persistent data storage capabilities.",
    category: "Desktop Apps",
    technologies: ["Java", "JavaFX", "SQLite", "Maven"],
    image: "/images/projects/inventory-management.png",
    githubUrl: "https://github.com/most4f4/Inventory_Management_System",
    year: "2025",
    status: "completed",
  },

  {
    id: "auto-loan-calculator",
    title: "Auto Loan Calculator",
    description:
      "A comprehensive JavaFX-based desktop application for calculating auto loan payments with detailed amortization schedules and loan management features.",
    category: "Desktop Apps",
    technologies: ["Java", "JavaFX", "FXML", "Maven"],
    image: "/images/projects/auto-loan.png",
    githubUrl: "https://github.com/most4f4/Auto-Loan-Calculator",
    year: "2025",
    status: "completed",
  },

  // Web Apps
  {
    id: "cuisine-crafters",
    title: "Cuisine Crafters",
    description:
      "A comprehensive meal kit delivery platform built with Node.js, Express, and MongoDB. Provides a seamless experience for customers to browse and order fresh meal kits.",
    category: "Web Apps",
    technologies: ["Node.js", "Express", "MongoDB", "EJS", "Bootstrap"],
    image: "/images/projects/cuisine-crafters.png",
    demoUrl: "https://cuisinecrafters.onrender.com/",
    githubUrl: "https://github.com/most4f4/CuisineCrafters",
    year: "2024",
    status: "completed",
  },

  // Unix Programming Projects
  {
    id: "udp-logging-system",
    title: "Embedded Distributed Logging System",
    description:
      "A real-time distributed logging system using UDP socket communication, multithreading, and asynchronous I/O with advanced network programming concepts.",
    category: "Unix Programming",
    technologies: ["C++", "UDP Sockets", "Multithreading", "Linux"],
    image: "/images/projects/udp-logging.png",
    githubUrl:
      "https://github.com/most4f4/Unix-programming/tree/main/01-%20Embedded%20Logging%20System%20-%20UDP%20Asynchornous%20Socket%20communication",
    year: "2024",
    status: "completed",
  },

  {
    id: "shared-memory-ipc",
    title: "Shared Memory & Semaphore IPC System",
    description:
      "Advanced Inter-Process Communication using System V Shared Memory and POSIX Named Semaphores to enable synchronized message exchange between multiple client processes.",
    category: "Unix Programming",
    technologies: ["C", "System V IPC", "POSIX Semaphores", "Linux"],
    image: "/images/projects/shared-memory.png",
    githubUrl:
      "https://github.com/most4f4/Unix-programming/tree/main/02-%20Shared%20Memory%20and%20Semaphore%20-%20IPC%20Multiple%20Clients",
    year: "2024",
    status: "completed",
  },

  {
    id: "socket-server-client",
    title: "Multi-threaded Socket Server-Client",
    description:
      "A high-performance multi-threaded TCP server with asynchronous client handling, mutex-protected shared resources, and timeout-based connection management.",
    category: "Unix Programming",
    technologies: ["C++", "TCP Sockets", "Multithreading", "Mutex", "Linux"],
    image: "/images/projects/socket-server.png",
    githubUrl:
      "https://github.com/most4f4/Unix-programming/tree/main/03-%20Multi-threaded%20Socket%20Server%20Client%20-%20IPC%2C%20Async%2C%20Mutex%2C%20Timeout%2C",
    year: "2024",
    status: "completed",
  },

  {
    id: "message-queue-system",
    title: "Message Queue Server-Client System",
    description:
      "A multi-threaded message queue communication system using System V Message Queues, POSIX threads, and mutex synchronization.",
    category: "Unix Programming",
    technologies: ["C++", "Message Queues", "POSIX Threads", "Mutex", "Linux"],
    image: "/images/projects/message-queue.png",
    githubUrl:
      "https://github.com/most4f4/Unix-programming/tree/main/04-%20Message%20Queue%20Server%20Client%20-%20Multi%20threading%2C%20Mutex",
    year: "2024",
    status: "completed",
  },

  {
    id: "unix-pipe-programming",
    title: "Unix Pipe Programming - IPC System",
    description:
      "A Unix shell pipeline simulator demonstrating advanced Inter-Process Communication using anonymous pipes, process forking, I/O redirection, and command execution.",
    category: "Unix Programming",
    technologies: ["C", "Unix Pipes", "Fork/Exec", "I/O Redirection", "Linux"],
    image: "/images/projects/unix-pipes.png",
    githubUrl:
      "https://github.com/most4f4/Unix-programming/tree/main/05-%20Pipe%20Programming%20-%20IPC%2C%20Fork%2C%20Strtok%2C%20Execlp%2C%20Dup2",
    year: "2024",
    status: "completed",
  },

  {
    id: "unix-domain-socket",
    title: "Unix Domain Socket Client-Server",
    description:
      "Advanced Inter-Process Communication using Unix Domain Sockets with SOCK_STREAM semantics for reliable, high-performance local communication.",
    category: "Unix Programming",
    technologies: ["C", "Unix Domain Sockets", "IPC", "Linux"],
    image: "/images/projects/unix-domain-socket.png",
    githubUrl:
      "https://github.com/most4f4/Unix-programming/tree/main/06-%20IPC%20-%20Unix%20Domain%20Socket%20Client-Server%20Demo",
    year: "2024",
    status: "completed",
  },

  {
    id: "network-monitor-system",
    title: "Network Monitor System",
    description:
      "A distributed network interface monitoring system using advanced IPC, Unix domain sockets, process forking, and real-time file system monitoring.",
    category: "Unix Programming",
    technologies: [
      "C++",
      "Unix Sockets",
      "Fork",
      "Select",
      "File Locking",
      "Linux",
    ],
    image: "/images/projects/network-monitor.png",
    githubUrl:
      "https://github.com/most4f4/Unix-programming/tree/main/07-%20Network%20Monitor%20System%20-%20IPC%2C%20Socket%2C%20Fork%2C%20Select%2C%20WLock%2C%20Ifstream",
    year: "2024",
    status: "completed",
  },

  {
    id: "signal-based-monitor",
    title: "Signal-Based System Monitor",
    description:
      "A signal-driven system monitoring architecture using Unix signals for inter-process communication, fork/exec process management, and real-time network interface monitoring.",
    category: "Unix Programming",
    technologies: ["C++", "Unix Signals", "Fork/Exec", "IPC", "Linux"],
    image: "/images/projects/signal-monitor.png",
    githubUrl:
      "https://github.com/most4f4/Unix-programming/tree/main/08-%20Signal-Based%20System%20Monitor%20-%20Advanced%20Process%20Control%20%26%20IPC",
    year: "2025",
    status: "completed",
  },

  {
    id: "linux-kernel-module",
    title: "Linux Kernel Module - Device Driver",
    description:
      "A Linux kernel module that simulates a hardware device driver using character device interface, kernel threading, ioctl system calls, and kernel-userspace communication.",
    category: "Unix Programming",
    technologies: [
      "C",
      "Linux Kernel",
      "Device Drivers",
      "ioctl",
      "Kernel Threading",
    ],
    image: "/images/projects/kernel-module.png",
    githubUrl:
      "https://github.com/most4f4/Unix-programming/tree/main/09-%20Linux%20Kernel%20Module%20-%20Hardware%20Device%20Driver",
    year: "2025",
    status: "completed",
  },

  {
    id: "ioctl-framebuffer",
    title: "ioctl Framebuffer Control System",
    description:
      "Low-level hardware interaction using ioctl system calls to communicate with the Linux framebuffer device for retrieving graphics hardware information.",
    category: "Unix Programming",
    technologies: ["C++", "ioctl", "Linux Framebuffer", "Hardware Interface"],
    image: "/images/projects/framebuffer.png",
    githubUrl:
      "https://github.com/most4f4/Unix-programming/tree/main/10%20-%20ioctl%20Framebuffer%20Control%20System",
    year: "2025",
    status: "completed",
  },

  {
    id: "network-interface-info",
    title: "Network Interface Information Retrieval",
    description:
      "A comprehensive network interface inspection tool using ioctl system calls and socket-based communication to retrieve detailed network configuration information.",
    category: "Unix Programming",
    technologies: [
      "C++",
      "ioctl",
      "Socket Programming",
      "Network Interface",
      "Linux",
    ],
    image: "/images/projects/network-interface.png",
    githubUrl:
      "https://github.com/most4f4/Unix-programming/tree/main/11-%20Network%20Interface%20Information%20Retrieval%20Program%20-%20Socket%2C%20Ioctl",
    year: "2025",
    status: "completed",
  },
];

export const categories = [
  "Featured",
  "Mobile Apps",
  "Machine Learning",
  "Cloud",
  "Desktop Apps",
  "Web Apps",
  "Unix Programming",
];

// Helper functions
export const getFeaturedProjects = () =>
  projects.filter((project) => project.featured);

export const getProjectsByCategory = (category: string) =>
  projects.filter((project) => project.category === category);

export const getProjectById = (id: string) =>
  projects.find((project) => project.id === id);

export const getAllTechnologies = () => {
  const allTech = projects.flatMap((project) => project.technologies);
  return [...new Set(allTech)].sort();
};
