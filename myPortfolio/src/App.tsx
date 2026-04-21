import type { JSX } from 'react/jsx-runtime';
import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Projects from './sections/Projects';
import Contact from './sections/Contact';

export default function App(): JSX.Element {
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    const stored = localStorage.getItem('theme');
    return (stored as 'light' | 'dark') || 'dark';
  });

  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove('light', 'dark');
    root.classList.add(theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <div className="bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100 transition-colors duration-300">
      <Navbar theme={theme} setTheme={setTheme} />
      <Hero />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}