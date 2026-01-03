import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Github, Linkedin, FileCode, User } from 'lucide-react';
import { navLinks, personalInfo } from '../../data/content';

const Navbar = ({ onRecruiterModeToggle, isRecruiterMode }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-surface-950/80 backdrop-blur-xl border-b border-white/5'
          : 'bg-transparent'
      }`}
    >
      <div className="section-container">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <motion.a
            href="#"
            className="flex items-center gap-2 group"
            whileHover={{ scale: 1.02 }}
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center shadow-glow">
              <span className="text-white font-bold text-lg">RK</span>
            </div>
            <span className="hidden sm:block font-semibold text-lg text-surface-100 group-hover:text-white transition-colors">
              Rahul Kadyan
            </span>
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.href)}
                className="text-surface-400 hover:text-white transition-colors font-medium"
              >
                {link.name}
              </button>
            ))}
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center gap-3">
            {/* Social Links */}
            <div className="hidden sm:flex items-center gap-2">
              <a
                href={personalInfo.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost p-2"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href={personalInfo.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost p-2"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href={personalInfo.links.leetcode}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost p-2"
                aria-label="LeetCode"
              >
                <FileCode size={20} />
              </a>
            </div>

            {/* Recruiter Mode Toggle */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={onRecruiterModeToggle}
              className={`hidden sm:flex items-center gap-2 px-4 py-2 rounded-xl font-medium transition-all ${
                isRecruiterMode
                  ? 'bg-accent-500 text-white shadow-glow-accent'
                  : 'bg-surface-800/50 text-surface-300 hover:bg-surface-700/50 border border-surface-700'
              }`}
            >
              <User size={16} />
              <span className="text-sm">Recruiter View</span>
            </motion.button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden btn-ghost p-2"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-surface-900/95 backdrop-blur-xl border-b border-white/5"
          >
            <div className="section-container py-4 space-y-3">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className="block w-full text-left px-4 py-3 rounded-xl text-surface-300 hover:text-white hover:bg-white/5 transition-colors font-medium"
                >
                  {link.name}
                </button>
              ))}
              
              {/* Mobile Recruiter Toggle */}
              <button
                onClick={() => {
                  onRecruiterModeToggle();
                  setIsMobileMenuOpen(false);
                }}
                className={`w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl font-medium transition-all ${
                  isRecruiterMode
                    ? 'bg-accent-500 text-white'
                    : 'bg-surface-800/50 text-surface-300 border border-surface-700'
                }`}
              >
                <User size={16} />
                <span>Recruiter View</span>
              </button>

              {/* Mobile Social Links */}
              <div className="flex items-center justify-center gap-4 pt-2">
                <a
                  href={personalInfo.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-ghost p-3"
                >
                  <Github size={22} />
                </a>
                <a
                  href={personalInfo.links.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-ghost p-3"
                >
                  <Linkedin size={22} />
                </a>
                <a
                  href={personalInfo.links.leetcode}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-ghost p-3"
                >
                  <FileCode size={22} />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
