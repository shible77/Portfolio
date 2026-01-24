import { motion } from 'framer-motion';
import type { JSX } from 'react/jsx-dev-runtime';

interface NavbarProps {
  theme: 'light' | 'dark';
  setTheme: React.Dispatch<React.SetStateAction<'light' | 'dark'>>;
}

export default function Navbar({ theme, setTheme }: NavbarProps): JSX.Element {
  const links = [
    { name: 'Home', id: 'hero' },
    { name: 'About', id: 'about' },
    { name: 'Projects', id: 'projects' },
    { name: 'Contact', id: 'contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-0 w-full z-50 bg-white/70 dark:bg-gray-900/70 backdrop-blur-md shadow"
    >
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
        <h1 className="text-xl font-bold">Salauddin Shible</h1>
        <div className="flex items-center gap-6">
          {links.map(link => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className="hover:text-blue-500 transition"
            >
              {link.name}
            </a>
          ))}
          <button
            onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
            className="px-3 py-1 rounded border"
          >
            {theme === 'light' ? '🌙' : '☀️'}
          </button>
        </div>
      </div>
    </motion.nav>
  );
}