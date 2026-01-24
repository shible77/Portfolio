import { motion } from 'framer-motion';
import type { JSX } from 'react/jsx-dev-runtime';

export default function Projects(): JSX.Element {
  const projects = [1, 2, 3];
  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-10">Projects</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-6 rounded-xl bg-white dark:bg-gray-900 shadow"
            >
              <h3 className="font-semibold">Project {i + 1}</h3>
              <p className="text-sm text-gray-500">Description of project.</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}