import type { JSX } from "react/jsx-runtime";
import { motion } from "framer-motion";

export default function About(): JSX.Element {
  const skills = [
    "Node.js", "Express", "NestJS", "TypeScript", "C/C++", "Java", "Python","PostgreSQL", "MySQL", "Drizzle ORM",
    "Socket.IO", "Docker", "React Native", "Expo", "Firebase", "TensorFlow",
    "FastAPI", "OpenCV", "JWT", "REST APIs", "Machine Learning", 
    "React", "Redux", "Git", "Tailwind CSS", "Vercel"
  ];

  return (
    <section
      id="about"
      className="scroll-mt-24 py-20 max-w-5xl mx-auto px-6 bg-gray-50 dark:bg-gray-800"
    >
      <motion.h2
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-3xl font-bold mb-2"
      >
        About Me
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
        className="text-sm mb-12 text-gray-600 dark:text-gray-400"
      >
        Passionate fullstack developer crafting scalable systems and exploring the frontiers of technology.
      </motion.p>

      <div className="grid lg:grid-cols-2 gap-12">
        {/* Bio Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="space-y-4 text-gray-600 dark:text-gray-300"
        >
          <p>
            I'm Salauddin, a fullstack software developer based in
            Bangladesh with hands-on experience building scalable,
            production-ready systems using Node.js, TypeScript, SQL and NoSQL Databases, and React.
          </p>
          <p>
            I specialize in designing clean REST APIs, implementing secure
            authentication systems with JWT and role-based access control, and
            architecting normalized relational databases with Drizzle ORM. I've
            also built real-time features using Socket.IO and have experience
            deploying services with Docker.
          </p>
          <p>
            Beyond web application, I've also built a full-featured cross-platform mobile
            application using React Native (Expo) and Firebase — an online
            education platform where teachers can create courses, upload videos,
            and build quizzes, while students can subscribe to courses, watch
            content, and participate in assessments. This project gave me hands-on
            experience across the full mobile development lifecycle, from
            authentication flows to real-time data with Firestore.
          </p>
          <p>
            I've also explored machine learning — building a deep learning
            pipeline for tomato leaf disease detection using TensorFlow, FastAPI,
            and OpenCV. I'm passionate about writing maintainable code, clean
            architecture, and systems that scale.
          </p>
        </motion.div>

        {/* Skills and Education */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          className="space-y-8"
        >
          {/* Skills */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-gray-100">
              Technologies & Skills
            </h3>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, i) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: false, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                  className="text-xs font-medium px-3 py-1.5 rounded-full bg-gray-100 dark:bg-gray-700/70 text-gray-600 dark:text-gray-300 border border-gray-200 dark:border-gray-600/50"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </div>

          {/* Education */}
          <div className="rounded-2xl bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-700/60 p-6 shadow-sm">
            <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-gray-100">
              Education
            </h3>
            <div className="space-y-3">
              <div>
                <p className="font-medium text-gray-900 dark:text-gray-100">
                  BSc. in Computer Science and Engineering
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  University of Chittagong
                </p>
              </div>
              <div>
                <p className="font-medium text-gray-900 dark:text-gray-100">
                  Full-Stack Web Development Certification
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  EDGE
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
