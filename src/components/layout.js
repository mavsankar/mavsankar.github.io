import * as React from 'react';
import { useEffect, useState } from 'react';
import { Link } from 'gatsby';
import { RiMoonLine, RiSunLine, RiMenuLine, RiCloseLine, RiGithubFill, RiLinkedinBoxFill, RiMailLine } from 'react-icons/ri';
import cv from '../assets/files/Software_Engineer_Resume.pdf';

const navLinks = [
  { label: 'About', href: '/#about' },
  { label: 'Experience', href: '/#experience' },
  { label: 'Projects', href: '/#projects' },
  { label: 'Skills', href: '/#skills' },
  { label: 'Contact', href: '/#contact' },
];

const ThemeToggle = () => {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    setDark(document.documentElement.classList.contains('dark'));
  }, []);

  const toggle = () => {
    const next = !dark;
    document.documentElement.classList.toggle('dark', next);
    try { localStorage.setItem('theme', next ? 'dark' : 'light'); } catch (e) { }
    setDark(next);
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'}
      className="rounded-lg p-2 text-slate-600 transition hover:bg-slate-100 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white"
    >
      {dark ? <RiSunLine size={18} /> : <RiMoonLine size={18} />}
    </button>
  );
};

const Layout = ({ children }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="flex min-h-screen flex-col overflow-x-clip">
      <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/80 backdrop-blur dark:border-slate-800/70 dark:bg-slate-950/80">
        <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-4 sm:px-6">
          <Link to="/" className="group flex items-center gap-2.5 font-semibold text-slate-900 dark:text-white">
            <span className="grid h-8 w-8 place-items-center rounded-lg bg-blue-600 font-mono text-xs text-white transition group-hover:rotate-6 dark:bg-blue-500 dark:text-slate-950">SM</span>
            <span className="hidden sm:inline">Sankar Mantripragada</span>
          </Link>

          <nav className="hidden items-center gap-1 md:flex" aria-label="Main">
            {navLinks.map((l) => (
              <a key={l.label} href={l.href} className="rounded-lg px-3 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-100 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white">
                {l.label}
              </a>
            ))}
            <a href="https://blog.mavsankar.com" target="_blank" rel="noreferrer" className="rounded-lg px-3 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-100 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white">
              Blog
            </a>
            <a href={cv} target="_blank" rel="noreferrer" className="ml-2 rounded-lg bg-slate-900 px-3 py-2 text-sm font-semibold text-white transition hover:bg-slate-700 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200">
              Resume
            </a>
            <span className="ml-1"><ThemeToggle /></span>
          </nav>

          <div className="flex items-center gap-1 md:hidden">
            <ThemeToggle />
            <button
              type="button"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
              className="rounded-lg p-2 text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-800"
            >
              {menuOpen ? <RiCloseLine size={20} /> : <RiMenuLine size={20} />}
            </button>
          </div>
        </div>

        {menuOpen && (
          <nav className="border-t border-slate-200 px-4 py-3 dark:border-slate-800 md:hidden" aria-label="Mobile">
            {navLinks.map((l) => (
              <a key={l.label} href={l.href} onClick={() => setMenuOpen(false)} className="block rounded-lg px-3 py-2.5 font-medium text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-800">
                {l.label}
              </a>
            ))}
            <a href="https://blog.mavsankar.com" target="_blank" rel="noreferrer" className="block rounded-lg px-3 py-2.5 font-medium text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-800">Blog</a>
            <a href={cv} target="_blank" rel="noreferrer" className="block rounded-lg px-3 py-2.5 font-semibold text-blue-600 hover:bg-slate-100 dark:text-blue-400 dark:hover:bg-slate-800">Resume (PDF)</a>
          </nav>
        )}
      </header>

      <main className="mx-auto w-full max-w-5xl flex-grow px-4 sm:px-6">
        {children}
      </main>

      <footer className="border-t border-slate-200 dark:border-slate-800">
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 px-4 py-8 text-sm text-slate-500 dark:text-slate-400 sm:flex-row sm:px-6">
          <p>© {new Date().getFullYear()} Sankar Mantripragada</p>
          <div className="flex items-center gap-4">
            <a href="mailto:mavsankar@gmail.com" aria-label="Email" className="hover:text-slate-900 dark:hover:text-white"><RiMailLine size={20} /></a>
            <a href="https://www.linkedin.com/in/mavsankar" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="hover:text-slate-900 dark:hover:text-white"><RiLinkedinBoxFill size={20} /></a>
            <a href="https://github.com/mavsankar" target="_blank" rel="noreferrer" aria-label="GitHub" className="hover:text-slate-900 dark:hover:text-white"><RiGithubFill size={20} /></a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
