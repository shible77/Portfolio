import type { JSX } from "react/jsx-runtime";
import { motion } from "framer-motion";

export default function Hero(): JSX.Element {
  return (
    <section
      id="hero"
      className="scroll-mt-24 relative min-h-screen flex items-center justify-center overflow-hidden bg-linear-to-br from-black via-gray-900 to-black"
    >
      {/* Glow Blobs */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-purple-600/30 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse" />

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 text-center max-w-3xl px-6"
      >
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight bg-clip-text text-transparent bg-linear-to-br from-cyan-400 to-purple-500">
          Salauddin Shible
        </h1>
        <p className="mt-6 text-lg max-w-full md:text-xl text-gray-300">
          Fullstack Developer | NodeJS | Express | NestJS | React | Deep Learning
        </p>
        <div className="mt-10 flex justify-center gap-6">
          <button
            onClick={() =>
              document
                .getElementById("projects")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="px-6 py-3 rounded-lg bg-linear-to-r from-cyan-500 to-purple-600 text-white font-semibold shadow-lg hover:scale-105 transition-transform"
          >
            View Projects
          </button>
          <button
            onClick={() =>
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="px-6 py-3 rounded-lg border border-white/20 text-white hover:bg-white/10 transition"
          >
            Contact Me
          </button>
        </div>
      </motion.div>
    </section>
  );
}
