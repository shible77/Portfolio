import type { JSX } from "react/jsx-runtime";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

interface NavbarProps {
  theme: "light" | "dark";
  setTheme: React.Dispatch<React.SetStateAction<"light" | "dark">>;
}

const NAV_LINKS = [
  { name: "Home", id: "hero" },
  { name: "About", id: "about" },
  { name: "Projects", id: "projects" },
  { name: "Contact", id: "contact" },
];

export default function Navbar({ theme, setTheme }: NavbarProps): JSX.Element {
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const isLight = theme === "light";

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

  useEffect(() => {
    const updateActiveSection = () => {
      const navBar = document.querySelector("nav");
      const navbarHeight = navBar ? navBar.offsetHeight : 80;
      const markerLine = window.scrollY + navbarHeight + 24;

      let currentSection = NAV_LINKS[0].id;

      for (const link of NAV_LINKS) {
        const section = document.getElementById(link.id);
        if (!section) continue;

        if (section.offsetTop <= markerLine) {
          currentSection = link.id;
        }
      }

      setActiveSection(currentSection);
    };

    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);

    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, []);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className="fixed top-0 z-50 w-full border-b border-gray-200/70 bg-white/80 backdrop-blur-xl dark:border-gray-800/80 dark:bg-gray-950/75"
    >
      <div className="mx-auto flex h-20 w-full max-w-6xl items-center justify-between px-6">
        <button
          onClick={() => handleNavigate("hero")}
          className="text-left tracking-tight transition-opacity duration-200 hover:opacity-80"
          aria-label="Go to home section"
        >
          <span className="block text-lg font-semibold text-gray-900 dark:text-gray-100">
            Salauddin Shible
          </span>
          <span className="block text-xs font-medium uppercase tracking-[0.18em] text-gray-500 dark:text-gray-400">
            Fullstack Developer
          </span>
        </button>

        {/* Desktop Menu */}
        <div className="hidden items-center gap-2 md:flex">
          {NAV_LINKS.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNavigate(link.id)}
              aria-current={activeSection === link.id ? "page" : undefined}
              className={`rounded-md px-3 py-2 text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/70 ${
                activeSection === link.id
                  ? "bg-cyan-100/80 text-cyan-700 dark:bg-cyan-900/40 dark:text-cyan-300"
                  : "text-gray-600 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-white"
              }`}
            >
              {link.name}
            </button>
          ))}
          <button
            onClick={() => setTheme(isLight ? "dark" : "light")}
            className="group relative ml-2 inline-flex h-10 w-16 items-center rounded-full border border-gray-300/80 bg-linear-to-r from-slate-100 to-white shadow-sm transition-all duration-300 hover:scale-[1.03] hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/70 dark:border-gray-700 dark:from-gray-800 dark:to-gray-900"
            aria-label={`Switch to ${isLight ? "dark" : "light"} theme`}
          >
            <motion.span
              layout
              transition={{ type: "spring", stiffness: 520, damping: 30 }}
              className={`absolute flex h-8 w-8 items-center justify-center rounded-full bg-white shadow-sm transition-colors duration-300 dark:bg-gray-700 ${
                isLight ? "left-1" : "left-7"
              }`}
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={isLight ? "moon-desktop" : "sun-desktop"}
                  initial={{ opacity: 0, rotate: -20, scale: 0.75 }}
                  animate={{ opacity: 1, rotate: 0, scale: 1 }}
                  exit={{ opacity: 0, rotate: 20, scale: 0.75 }}
                  transition={{ duration: 0.18 }}
                  className="text-sm"
                >
                  {isLight ? "🌙" : "☀️"}
                </motion.span>
              </AnimatePresence>
            </motion.span>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-gray-300 bg-white/80 text-lg text-gray-700 shadow-sm transition-colors duration-200 hover:bg-gray-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/70 dark:border-gray-700 dark:bg-gray-900/80 dark:text-gray-200 dark:hover:bg-gray-800 md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
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
        absolute left-0 top-full z-60 w-full overflow-hidden border-b border-gray-200/60
        bg-white/90 backdrop-blur-xl dark:border-gray-800/70 dark:bg-gray-950/90
        md:hidden
      "
          >
            <div className="mx-auto flex max-w-6xl flex-col items-center gap-3 px-6 py-5">
              {NAV_LINKS.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleNavigate(link.id)}
                  aria-current={activeSection === link.id ? "page" : undefined}
                  className={`w-full rounded-md px-3 py-2 text-center text-base font-medium transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/70 ${
                    activeSection === link.id
                      ? "bg-cyan-100/80 text-cyan-700 dark:bg-cyan-900/40 dark:text-cyan-300"
                      : "text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-200 dark:hover:bg-gray-800 dark:hover:text-white"
                  }`}
                >
                  {link.name}
                </button>
              ))}

              <button
                onClick={() => setTheme(isLight ? "dark" : "light")}
                className="group inline-flex items-center gap-2 rounded-full border border-gray-300 bg-white/80 px-4 py-2 text-sm font-medium shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/70 dark:border-gray-700 dark:bg-gray-800/80"
              >
                <AnimatePresence mode="wait" initial={false}>
                  <motion.span
                    key={isLight ? "moon-mobile" : "sun-mobile"}
                    initial={{ opacity: 0, y: 6, scale: 0.85 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -6, scale: 0.85 }}
                    transition={{ duration: 0.18 }}
                    className="text-base"
                  >
                    {isLight ? "🌙" : "☀️"}
                  </motion.span>
                </AnimatePresence>
                <motion.span
                  key={isLight ? "mobile-dark-label" : "mobile-light-label"}
                  initial={{ opacity: 0.5 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.2 }}
                >
                  {isLight ? "Switch to Dark" : "Switch to Light"}
                </motion.span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
