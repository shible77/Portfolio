import type { JSX } from "react/jsx-runtime";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

interface NavbarProps {
  theme: "light" | "dark";
  setTheme: React.Dispatch<React.SetStateAction<"light" | "dark">>;
}

export default function Navbar({ theme, setTheme }: NavbarProps): JSX.Element {
  const [open, setOpen] = useState(false);

  const links = [
    { name: "Home", id: "hero" },
    { name: "About", id: "about" },
    { name: "Projects", id: "projects" },
    { name: "Contact", id: "contact" },
  ];

  const handleNavigate = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const navBar = document.querySelector("nav");
      const navbarHeight = navBar ? navBar.offsetHeight : 80;
      const elementPosition =
        el.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
    setOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-0 w-full z-50 bg-white/70 dark:bg-gray-900/70 backdrop-blur-md shadow"
    >
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
        <h1 className="text-xl font-bold">Salauddin Shible</h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          {links.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNavigate(link.id)}
              className="hover:text-cyan-400 transition"
            >
              {link.name}
            </button>
          ))}
          <button
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            className="px-3 py-1 rounded border"
          >
            {theme === "light" ? "🌙" : "☀️"}
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-2xl focus:outline-none"
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Slide Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="
        md:hidden
        absolute top-full left-0 w-full
        z-60
        bg-white/70 dark:bg-gray-900/70
        backdrop-blur-md
        border-t border-gray-200/30 dark:border-gray-700/30
        overflow-hidden
      "
          >
            <div className="flex flex-col items-center py-6 gap-6">
              {links.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleNavigate(link.id)}
                  className="text-lg hover:text-cyan-400 transition"
                >
                  {link.name}
                </button>
              ))}

              <button
                onClick={() => setTheme(theme === "light" ? "dark" : "light")}
                className="px-4 py-2 rounded border border-gray-300 dark:border-gray-700"
              >
                {theme === "light" ? "Switch to Dark 🌙" : "Switch to Light ☀️"}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
