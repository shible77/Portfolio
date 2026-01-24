import { motion } from 'framer-motion';
import type { JSX } from 'react/jsx-runtime';

export default function About(): JSX.Element {
  return (
    <section id="about" className="py-20 max-w-5xl mx-auto px-6">
      <motion.h2
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="text-3xl font-bold mb-6"
      >
        About Me
      </motion.h2>
      <p className="text-gray-600 dark:text-gray-300">
        I build scalable web applications using modern technologies like React,
        Node.js, and TypeScript with a strong focus on performance and UX.
      </p>
    </section>
  );
}
