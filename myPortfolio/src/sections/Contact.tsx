import type { JSX } from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";

const SOCIAL_LINKS = {
  facebook: "https://facebook.com/shible7",
  gmail: "mailto:shible0805@gmail.com",
  github: "https://github.com/shible77",
};

export default function Contact(): JSX.Element {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSending, setIsSending] = useState(false);
  const [modal, setModal] = useState<{
    open: boolean;
    type: "success" | "error";
    message: string;
  }>({
    open: false,
    type: "success",
    message: "",
  });

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setModal({
        open: true,
        type: "error",
        message: "Please fill out all fields before sending your message.",
      });
      return;
    }

    setIsSending(true);
    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID || "service_vixzehz",
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "template_wp3olcl",
        {
          name: formData.name,
          message: formData.message,
          email: formData.email,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "6z1BWjQTwOyQYEd8f"
      );

      setModal({
        open: true,
        type: "success",
        message: "Message sent successfully. Thank you for reaching out.",
      });
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("EmailJS send error:", error);
      setModal({
        open: true,
        type: "error",
        message: "Failed to send message. Please try again in a moment.",
      });
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section id="contact" className="scroll-mt-24 py-20 max-w-4xl mx-auto px-6">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        className="text-3xl font-bold mb-6"
      >
        Contact Me
      </motion.h2>
      <motion.form
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        className="grid gap-4"
        onSubmit={handleSubmit}
      >
        <input
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="p-3 rounded border text-black dark:bg-gray-800 dark:text-white"
          placeholder="Name"
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="p-3 rounded border text-black dark:bg-gray-800 dark:text-white"
          placeholder="Email"
        />
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          className="p-3 h-40 rounded border text-black dark:bg-gray-800 dark:text-white"
          placeholder="Message"
        />
        <button
          type="submit"
          disabled={isSending}
          className="bg-blue-600 text-white py-2 rounded hover:cursor-pointer hover:bg-blue-500 disabled:cursor-not-allowed disabled:opacity-70"
        >
          {isSending ? "Sending..." : "Send"}
        </button>
        <div className="mt-3 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-gray-500 dark:text-gray-400">
          <span className="h-px flex-1 bg-gray-300 dark:bg-gray-700" />
          <span>Catch Me On</span>
          <span className="h-px flex-1 bg-gray-300 dark:bg-gray-700" />
        </div>
        <div className="mt-2 flex items-center justify-center gap-4">
          <a
            href={SOCIAL_LINKS.facebook}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Open Facebook profile"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 text-gray-600 transition-colors duration-200 hover:border-blue-500 hover:text-blue-600 dark:border-gray-700 dark:text-gray-300 dark:hover:border-blue-400 dark:hover:text-blue-400"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden="true">
              <path d="M13.5 8.5V6.8c0-.8.5-1.3 1.4-1.3h1.6V2.6c-.3 0-.9-.1-1.9-.1-2.8 0-4.6 1.7-4.6 4.8v1.2H7v3.4h3v9.3h3.5v-9.3h2.8l.4-3.4h-3.2z" />
            </svg>
          </a>
          <a
            href={SOCIAL_LINKS.gmail}
            aria-label="Send email with Gmail"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 text-gray-600 transition-colors duration-200 hover:border-red-500 hover:text-red-500 dark:border-gray-700 dark:text-gray-300 dark:hover:border-red-400 dark:hover:text-red-400"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden="true">
              <path d="M20.5 5h-17A2.5 2.5 0 0 0 1 7.5v9A2.5 2.5 0 0 0 3.5 19h17a2.5 2.5 0 0 0 2.5-2.5v-9A2.5 2.5 0 0 0 20.5 5zm.2 2.1v.2L12 13 3.3 7.3v-.2H20.7zM3.3 16.7V8.8L12 14.4l8.7-5.6v7.9H3.3z" />
            </svg>
          </a>
          <a
            href={SOCIAL_LINKS.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Open GitHub profile"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 text-gray-600 transition-colors duration-200 hover:border-gray-900 hover:text-gray-900 dark:border-gray-700 dark:text-gray-300 dark:hover:border-white dark:hover:text-white"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden="true">
              <path d="M12 1.8A10.2 10.2 0 0 0 8.8 21.7c.5.1.7-.2.7-.5v-1.8c-2.9.6-3.5-1.2-3.5-1.2-.5-1.1-1.1-1.4-1.1-1.4-.9-.6.1-.6.1-.6 1 .1 1.6 1 1.6 1 .9 1.5 2.5 1.1 3.1.8.1-.7.4-1.1.7-1.4-2.3-.3-4.7-1.2-4.7-5A3.9 3.9 0 0 1 6.8 8c-.1-.3-.4-1.3.1-2.8 0 0 .9-.3 3 .9a10.4 10.4 0 0 1 5.4 0c2.1-1.2 3-.9 3-.9.5 1.5.2 2.5.1 2.8a3.9 3.9 0 0 1 1.1 2.7c0 3.8-2.3 4.7-4.6 5 .4.3.8 1 .8 2v3c0 .3.2.6.7.5A10.2 10.2 0 0 0 12 1.8z" />
            </svg>
          </a>
        </div>
      </motion.form>

      <AnimatePresence>
        {modal.open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-80 flex items-center justify-center bg-black/30 p-4 backdrop-blur-sm"
            onClick={() => setModal((prev) => ({ ...prev, open: false }))}
          >
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 12, scale: 0.96 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="w-full max-w-md rounded-2xl border border-white/25 bg-white/20 p-6 text-center shadow-2xl backdrop-blur-xl dark:border-white/15 dark:bg-gray-900/30"
              onClick={(event) => event.stopPropagation()}
            >
              <div
                className={`mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full text-xl ${
                  modal.type === "success"
                    ? "bg-emerald-500/20 text-emerald-200"
                    : "bg-rose-500/20 text-rose-200"
                }`}
              >
                {modal.type === "success" ? "✓" : "!"}
              </div>
              <h3 className="text-lg font-semibold text-white">
                {modal.type === "success" ? "Message Sent" : "Message Not Sent"}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-white/85">
                {modal.message}
              </p>
              <button
                onClick={() => setModal((prev) => ({ ...prev, open: false }))}
                className="mt-5 rounded-lg bg-white/20 px-5 py-2 text-sm font-medium text-white transition-colors duration-200 hover:bg-white/30"
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
