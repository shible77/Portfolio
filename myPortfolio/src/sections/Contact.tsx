import { motion } from 'framer-motion';
import type { JSX } from 'react/jsx-dev-runtime';

export default function Contact(): JSX.Element {
  return (
    <section id="contact" className="py-20 max-w-4xl mx-auto px-6">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl font-bold mb-6"
      >
        Contact Me
      </motion.h2>
      <form className="grid gap-4">
        <input className="p-3 rounded border dark:bg-gray-800" placeholder="Name" />
        <input className="p-3 rounded border dark:bg-gray-800" placeholder="Email" />
        <textarea className="p-3 rounded border dark:bg-gray-800" placeholder="Message" />
        <button className="bg-blue-600 text-white py-2 rounded">Send</button>
      </form>
    </section>
  );
}