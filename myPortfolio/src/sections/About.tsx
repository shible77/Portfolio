import type { JSX } from "react/jsx-runtime";
import { motion } from "framer-motion";

export default function About(): JSX.Element {
  return (
    <section id="about" className="scroll-mt-24 py-20 max-w-5xl mx-auto px-6">
      <motion.h2
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        className="text-3xl font-bold mb-6"
      >
        About Me
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        className="text-gray-600 dark:text-gray-300"
      >
        I build scalable web applications using modern technologies like React,
        Node.js, and TypeScript with a strong focus on performance and UX.
      </motion.p>
    </section>
  );
}
