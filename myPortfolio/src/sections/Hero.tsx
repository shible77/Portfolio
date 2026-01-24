import { motion } from 'framer-motion';
import type { JSX } from 'react/jsx-runtime';

export default function Hero(): JSX.Element {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-black via-gray-900 to-black"
    >
      {/* Glow Blobs */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-purple-600/30 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse" />

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="relative z-10 text-center max-w-3xl px-6"
      >
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500">
          Salauddin Shible
        </h1>
        <p className="mt-6 text-lg md:text-xl text-gray-300">
          Full Stack Developer • React • Node.js • AI Enthusiast
        </p>
        <div className="mt-10 flex justify-center gap-6">
          <a
            href="#projects"
            className="px-6 py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold shadow-lg hover:scale-105 transition-transform"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="px-6 py-3 rounded-lg border border-white/20 text-white hover:bg-white/10 transition"
          >
            Contact Me
          </a>
        </div>
      </motion.div>
    </section>
  );
}