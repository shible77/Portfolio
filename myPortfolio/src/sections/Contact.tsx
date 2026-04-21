import type { JSX } from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";
import type { Variants } from "framer-motion";
import { easeOut } from "framer-motion";


const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: easeOut,
    },
  },
};

export default function Contact(): JSX.Element {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSending, setIsSending] = useState(false);
  const [focused, setFocused] = useState<string | null>(null);
  const [modal, setModal] = useState<{
    open: boolean;
    type: "success" | "error";
    message: string;
  }>({ open: false, type: "success", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setModal({ open: true, type: "error", message: "Please fill out all fields before sending your message." });
      return;
    }
    setIsSending(true);
    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID || "service_vixzehz",
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "template_wp3olcl",
        { name: formData.name, message: formData.message, email: formData.email },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "6z1BWjQTwOyQYEd8f"
      );
      setModal({ open: true, type: "success", message: "Message sent successfully. Thank you for reaching out." });
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("EmailJS send error:", error);
      setModal({ open: true, type: "error", message: "Failed to send message. Please try again in a moment." });
    } finally {
      setIsSending(false);
    }
  };

  const inputBase =
    "w-full bg-transparent text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 outline-none transition-all duration-200 text-sm";

  const fieldWrapper = (name: string) =>
    `relative rounded-xl border px-4 py-3 transition-all duration-200 ${
      focused === name
        ? "border-blue-500 dark:border-blue-400 bg-blue-50/40 dark:bg-blue-900/10"
        : "border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800/60 hover:border-gray-300 dark:hover:border-gray-600"
    }`;

  return (
    <section
      id="contact"
      className="scroll-mt-24 py-24 bg-gray-50 dark:bg-gray-800"
    >
      <div className="max-w-4xl mx-auto px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mb-12"
        >
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-blue-500 dark:text-blue-400 mb-3">
            Get In Touch
          </p>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-3">
            Let's Work Together
          </h2>
          <p className="text-gray-500 dark:text-gray-400 max-w-md leading-relaxed text-sm">
            Have a project in mind or just want to say hello? My inbox is always open.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10 items-start">

          {/* Left — info column */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            className="lg:col-span-2 flex flex-col gap-6"
          >
            {/* Info cards */}
            {[
              {
                icon: <MailIcon />,
                label: "Email",
                value: "shible0805@gmail.com",
                href: "mailto:shible0805@gmail.com",
              },
              {
                icon: <GithubSmallIcon />,
                label: "GitHub",
                value: "github.com/shible77",
                href: "https://github.com/shible77",
              },
              {
                icon: <FacebookIcon />,
                label: "Facebook",
                value: "facebook.com/shible7",
                href: "https://facebook.com/shible7",
              },
            ].map((item, i) => (
              <motion.a
                key={i}
                variants={itemVariants}
                href={item.href}
                target={item.href.startsWith("mailto") ? undefined : "_blank"}
                rel="noopener noreferrer"
                className="group flex items-center gap-4 p-4 rounded-2xl bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-700/60 shadow-sm hover:shadow-md hover:border-blue-200 dark:hover:border-blue-800 transition-all duration-300"
              >
                <div className="shrink-0 flex items-center justify-center w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-900/30 text-blue-500 dark:text-blue-400 group-hover:bg-blue-100 dark:group-hover:bg-blue-900/50 transition-colors duration-200">
                  {item.icon}
                </div>
                <div className="min-w-0">
                  <p className="text-[11px] font-semibold uppercase tracking-wider text-gray-400 dark:text-gray-500 mb-0.5">
                    {item.label}
                  </p>
                  <p className="text-sm font-medium text-gray-700 dark:text-gray-300 truncate group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
                    {item.value}
                  </p>
                </div>
                <ArrowIcon className="ml-auto shrink-0 text-gray-300 dark:text-gray-600 group-hover:text-blue-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200" />
              </motion.a>
            ))}

            {/* Availability badge */}
            <motion.div
              variants={itemVariants}
              className="flex items-center gap-2.5 px-4 py-3 rounded-xl bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-100 dark:border-emerald-800/40"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
              </span>
              <p className="text-sm text-emerald-700 dark:text-emerald-400 font-medium">
                Available for new opportunities
              </p>
            </motion.div>
          </motion.div>

          {/* Right — form */}
          <motion.form
            onSubmit={handleSubmit}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            className="lg:col-span-3 flex flex-col gap-4 p-6 sm:p-8 rounded-2xl bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-700/60 shadow-sm"
          >
            <motion.div variants={itemVariants} className={fieldWrapper("name")}>
              <label className="block text-[10px] font-semibold uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-1">
                Name
              </label>
              <input
                name="name"
                value={formData.name}
                onChange={handleChange}
                onFocus={() => setFocused("name")}
                onBlur={() => setFocused(null)}
                placeholder="Your full name"
                className={inputBase}
                autoComplete="name"
              />
            </motion.div>

            <motion.div variants={itemVariants} className={fieldWrapper("email")}>
              <label className="block text-[10px] font-semibold uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-1">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                onFocus={() => setFocused("email")}
                onBlur={() => setFocused(null)}
                placeholder="you@example.com"
                className={inputBase}
                autoComplete="email"
              />
            </motion.div>

            <motion.div variants={itemVariants} className={fieldWrapper("message")}>
              <label className="block text-[10px] font-semibold uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-1">
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                onFocus={() => setFocused("message")}
                onBlur={() => setFocused(null)}
                placeholder="Tell me about your project..."
                rows={5}
                className={`${inputBase} resize-none`}
              />
            </motion.div>

            <motion.button
              variants={itemVariants}
              type="submit"
              disabled={isSending}
              whileHover={{ scale: isSending ? 1 : 1.015 }}
              whileTap={{ scale: isSending ? 1 : 0.985 }}
              className="relative flex items-center justify-center gap-2 w-full py-3 rounded-xl font-semibold text-sm text-white bg-blue-600 hover:bg-blue-500 disabled:opacity-60 disabled:cursor-not-allowed transition-colors duration-200 shadow-sm shadow-blue-500/20"
            >
              {isSending ? (
                <>
                  <SpinnerIcon />
                  Sending…
                </>
              ) : (
                <>
                  Send Message
                  <SendIcon />
                </>
              )}
            </motion.button>
          </motion.form>
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {modal.open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4 backdrop-blur-sm"
            onClick={() => setModal((prev) => ({ ...prev, open: false }))}
          >
            <motion.div
              initial={{ opacity: 0, y: 24, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 12, scale: 0.96 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="w-full max-w-sm rounded-2xl bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-700 shadow-2xl p-7 text-center"
              onClick={(e) => e.stopPropagation()}
            >
              <div
                className={`mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full text-2xl font-bold ${
                  modal.type === "success"
                    ? "bg-emerald-50 dark:bg-emerald-900/30 text-emerald-500"
                    : "bg-rose-50 dark:bg-rose-900/30 text-rose-500"
                }`}
              >
                {modal.type === "success" ? "✓" : "!"}
              </div>
              <h3 className="text-base font-semibold text-gray-900 dark:text-gray-100 mb-2">
                {modal.type === "success" ? "Message Sent!" : "Couldn't Send"}
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                {modal.message}
              </p>
              <button
                onClick={() => setModal((prev) => ({ ...prev, open: false }))}
                className="mt-6 w-full rounded-xl py-2.5 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 transition-colors duration-200"
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

/* ── Icons ─────────────────────────────────────────────────── */

function MailIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <polyline points="2,4 12,13 22,4" />
    </svg>
  );
}

function GithubSmallIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M13.5 8.5V6.8c0-.8.5-1.3 1.4-1.3h1.6V2.6c-.3 0-.9-.1-1.9-.1-2.8 0-4.6 1.7-4.6 4.8v1.2H7v3.4h3v9.3h3.5v-9.3h2.8l.4-3.4h-3.2z" />
    </svg>
  );
}

function ArrowIcon({ className }: { className?: string }) {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <line x1="7" y1="17" x2="17" y2="7" />
      <polyline points="7 7 17 7 17 17" />
    </svg>
  );
}

function SendIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <line x1="22" y1="2" x2="11" y2="13" />
      <polygon points="22 2 15 22 11 13 2 9 22 2" />
    </svg>
  );
}

function SpinnerIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" aria-hidden="true" className="animate-spin">
      <path d="M12 2a10 10 0 0 1 10 10" />
    </svg>
  );
}