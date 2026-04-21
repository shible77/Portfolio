import type { JSX } from "react/jsx-runtime";
import { motion } from "framer-motion";

export default function About(): JSX.Element {
  return (
    <section id="about" className="scroll-mt-24 py-20 max-w-5xl mx-auto px-6  bg-gray-50 dark:bg-gray-800">
      <motion.h2
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-3xl font-bold mb-6"
      >
        About Me
      </motion.h2>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="space-y-4 text-gray-600 dark:text-gray-300"
      >
        <p>
          I'm Salauddin, a backend-focused software developer based in Bangladesh with hands-on
          experience building scalable, production-ready systems using Node.js, TypeScript, and
          PostgreSQL.
        </p>
        <p>
          I specialize in designing clean REST APIs, implementing secure authentication systems
          with JWT and role-based access control, and architecting normalized relational databases
          with Drizzle ORM. I've also built real-time features using Socket.IO and have experience
          deploying services with Docker.
        </p>
        <p>
          Beyond backend work, I've explored machine learning — building a deep learning pipeline
          for tomato leaf disease detection using TensorFlow, FastAPI, and OpenCV. I'm passionate
          about writing maintainable code, clean architecture, and systems that scale.
        </p>
        <p>
          I completed my BSc in Computer Science from the University of Chittagong and hold a
          Full-Stack Web Development certification from EDGE.
        </p>
      </motion.div>
    </section>
  );
}