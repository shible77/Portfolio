import type { JSX } from "react";
import { motion } from "framer-motion";

type Project = {
  name: string;
  desc: string;
  notes: string[];
  ele: string[];
  links: string[];
  tag: string;
};

const projects: Project[] = [
  {
    name: "Human Resource Management System",
    desc: "Web-based system to manage employee data, roles, and organizational workflows.",
    notes: [
      "Role-based access control (RBAC)",
      "Manages employee records, payroll and leave workflow",
      "Secure authentication & authorization",
    ],
    ele: ["Node.js", "Express", "TypeScript", "PostgreSQL", "Drizzle ORM", "Swagger", "Redis", "BullMQ", "Docker"],
    links: ["https://hr-management-system-api-8qlg.onrender.com/docs", "https://github.com/shible77/HR-Management-System-Server"],
    tag: "RestAPI",
  },
  {
    name: "Real-Time Chat Application",
    desc: "Web-based group chat system enabling instant group messaging using WebSocket.",
    notes: [
      "Real-time messaging using Socket.IO",
      "JWT-based authentication system",
      "Handles concurrent users with consistent message delivery",
    ],
    ele: ["Node.js", "Express", "TypeScript", "MySQL", "Socket.IO", "React"],
    links: ["https://real-time-chatting-app-gamma.vercel.app", "https://github.com/shible77/Real-Time-Chatting-App"],
    tag: "Real-Time",
  },
  {
    name: "Tomato Leaf Disease Identifier",
    desc: "Machine learning-based image classification system for detecting tomato leaf diseases.",
    notes: [
      "CNN-based image classification model",
      "Image preprocessing for feature enhancement",
      "Trained and evaluated on plant disease dataset",
    ],
    ele: ["Python", "TensorFlow/Keras", "OpenCV", "EfficientNet/MobileNetV3", "React", "FastAPI", "Docker"],
    links: ["https://tomato-leaf-disease-predictor.onrender.com/", "https://github.com/shible77/FullStack-Tomato-Plant-Disease-Classification"],
    tag: "Machine Learning",
  },
  {
    name: "Free School",
    desc: "Mobile app for online teaching and learning.",
    notes: [
      "Built with React Native (Expo) and Firebase Firestore",
      "Student and teacher role-based access",
      "Simple, user-friendly mobile UI for accessibility",
    ],
    ele: ["React Native", "Expo", "Firebase", "GraphQL"],
    links: ["https://drive.google.com/file/d/1VUj5IspU2GIupVbA4lj2o8gl0PjEs7Hz/view?usp=sharing", "https://github.com/shible77/free-school"],
    tag: "Mobile",
  },
  {
    name: "Real-Time To-Do Application",
    desc: "Task management system with real-time synchronization across users.",
    notes: [
      "Real-time task updates using WebSockets",
      "JWT authentication and user sessions",
      "CRUD operations with persistent storage",
    ],
    ele: ["Node.js", "Express", "TypeScript", "MySQL", "Socket.IO", "React", "Redux"],
    links: ["https://a-real-time-todo-app.onrender.com", "https://github.com/shible77/A-comprehensive-realtime-ToDo-app-using-Redux-and-socket.io"],
    tag: "Real-Time",
  },
  {
    name: "Residence Automation System",
    desc: "Web-based building and tenant management system.",
    notes: [
      "Handles multiple buildings and tenants",
      "Email-based notification system",
      "Simplifies management for building owners and tenants",
    ],
    ele: ["PHP", "HTML", "CSS"],
    links: ["https://github.com/shible77/Residence-Automation-System-"],
    tag: "Web App",
  },
];

const tagStyles: Record<string, string> = {
  "RestAPI":       "bg-violet-100 text-violet-700 dark:bg-violet-900/40 dark:text-violet-300",
  "Real-Time":        "bg-sky-100 text-sky-700 dark:bg-sky-900/40 dark:text-sky-300",
  "Machine Learning": "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300",
  "Mobile":           "bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-300",
  "Web App":          "bg-pink-100 text-pink-700 dark:bg-pink-900/40 dark:text-pink-300",
};

const dotColors: Record<string, string> = {
  "RestAPI":       "bg-violet-400 dark:bg-violet-500",
  "Real-Time":        "bg-sky-400 dark:bg-sky-500",
  "Machine Learning": "bg-emerald-400 dark:bg-emerald-500",
  "Mobile":           "bg-amber-400 dark:bg-amber-500",
  "Web App":          "bg-pink-400 dark:bg-pink-500",
};

const linkAccent: Record<string, string> = {
  "RestAPI":       "text-violet-600 dark:text-violet-400 hover:text-violet-800 dark:hover:text-violet-200",
  "Real-Time":        "text-sky-600 dark:text-sky-400 hover:text-sky-800 dark:hover:text-sky-200",
  "Machine Learning": "text-emerald-600 dark:text-emerald-400 hover:text-emerald-800 dark:hover:text-emerald-200",
  "Mobile":           "text-amber-600 dark:text-amber-400 hover:text-amber-800 dark:hover:text-amber-200",
  "Web App":          "text-pink-600 dark:text-pink-400 hover:text-pink-800 dark:hover:text-pink-200",
};

export default function Projects(): JSX.Element {
  return (
    <section
      id="projects"
      className="scroll-mt-20 py-20 bg-gray-50 dark:bg-gray-800"
    >
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading — same style as About */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold mb-2"
        >
          Projects
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-sm mb-10"
        >
          A collection of things I've built — from real-time systems to machine learning tools.
        </motion.p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.15 }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="flex flex-col rounded-2xl bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-700/60 shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden"
            >
              {/* Card body */}
              <div className="flex flex-col gap-4 p-6 flex-1">

                {/* Tag */}
                <div>
                  <span
                    className={`inline-block text-[11px] font-semibold tracking-wide uppercase px-2.5 py-1 rounded-full ${tagStyles[project.tag] ?? "bg-gray-100 text-gray-600 dark:bg-gray-700 dark:text-gray-300"}`}
                  >
                    {project.tag}
                  </span>
                </div>

                {/* Name */}
                <h3 className="font-semibold text-gray-900 dark:text-gray-100 leading-snug">
                  {project.name}
                </h3>

                {/* Description */}
                <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                  {project.desc}
                </p>

                {/* Notes */}
                <ul className="flex flex-col gap-1.5">
                  {project.notes.map((note, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-300">
                      <span
                        className={`mt-1.75 shrink-0 w-1.5 h-1.5 rounded-full ${dotColors[project.tag] ?? "bg-gray-400"}`}
                      />
                      {note}
                    </li>
                  ))}
                </ul>

                {/* Tech badges */}
                <div className="flex flex-wrap gap-1.5 mt-auto pt-2">
                  {project.ele.map((tech, idx) => (
                    <span
                      key={idx}
                      className="text-[11px] font-medium px-2.5 py-0.5 rounded-full bg-gray-100 dark:bg-gray-700/70 text-gray-600 dark:text-gray-300 border border-gray-200 dark:border-gray-600/50"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card footer */}
              <div className="flex items-center gap-4 px-6 py-4 border-t border-gray-100 dark:border-gray-700/60">
                {project.links.length === 1 ? (
                  <a
                    href={project.links[0]}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-100 transition-colors duration-200"
                  >
                    <GitHubIcon />
                    GitHub
                  </a>
                ) : (
                  <>
                    <a
                      href={project.links[0]}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center gap-1.5 text-sm font-medium transition-colors duration-200 ${linkAccent[project.tag] ?? "text-gray-600 dark:text-gray-300"}`}
                    >
                      <LiveIcon />
                      Live Demo
                    </a>
                    <span className="text-gray-200 dark:text-gray-700 select-none">|</span>
                    <a
                      href={project.links[1]}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-100 transition-colors duration-200"
                    >
                      <GitHubIcon />
                      GitHub
                    </a>
                  </>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function GitHubIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

function LiveIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  );
}