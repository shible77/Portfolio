import type { JSX } from "react/jsx-runtime";
import { motion } from "framer-motion";

export default function About(): JSX.Element {
  return (
    <section id="about" className="scroll-mt-24 py-20 max-w-5xl mx-auto px-6">
      <motion.h2
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0}}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-3xl font-bold mb-6"
      >
        About Me
      </motion.h2>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        className="space-y-4 text-gray-600 dark:text-gray-300"
      >
        <p>
          I’m a software engineer mainly focused on backend development, with
          hands-on experience building APIs and real-time features using
          Node.js, TypeScript, Express, and MySQL.
        </p>
        <p>
          I’ve worked on projects involving authentication, WebSocket-based
          communication, and handling data consistency issues like race
          conditions. I try to keep my code structured, efficient, and easy to
          maintain.
        </p>
        <p>
          I also have experience with machine learning through academic and
          personal projects, including an image classification model with high
          accuracy. I’m interested in how these models can be integrated into
          real applications instead of staying as isolated experiments.
        </p>
        <p>
          Right now, I’m working on improving my system design skills and
          learning how to build and deploy applications that are reliable and
          scalable.
        </p>
      </motion.div>
    </section>
  );
}
