import { Github, Linkedin, FileCode, Mail, MapPin, Heart } from 'lucide-react';
import { personalInfo } from '../../data/content';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/5 bg-surface-950/50">
      <div className="section-container py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center">
                <span className="text-white font-bold text-lg">RK</span>
              </div>
              <span className="font-semibold text-lg text-white">
                Rahul Kadyan
              </span>
            </div>
            <p className="text-surface-400 text-sm leading-relaxed">
              AI/ML Engineer building intelligent systems that make decisions, not just predictions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-surface-400 hover:text-white transition-colors text-sm">
                  About
                </a>
              </li>
              <li>
                <a href="#projects" className="text-surface-400 hover:text-white transition-colors text-sm">
                  Projects
                </a>
              </li>
              <li>
                <a href="#experience" className="text-surface-400 hover:text-white transition-colors text-sm">
                  Experience
                </a>
              </li>
              <li>
                <a href="#contact" className="text-surface-400 hover:text-white transition-colors text-sm">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold mb-4">Get in Touch</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-surface-400 text-sm">
                <Mail size={16} className="text-primary-400" />
                <a href={`mailto:${personalInfo.email}`} className="hover:text-white transition-colors">
                  {personalInfo.email}
                </a>
              </li>
              <li className="flex items-center gap-2 text-surface-400 text-sm">
                <MapPin size={16} className="text-primary-400" />
                <span>{personalInfo.location}</span>
              </li>
            </ul>
            
            {/* Social Links */}
            <div className="flex items-center gap-3 mt-4">
              <a
                href={personalInfo.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-surface-800/50 flex items-center justify-center text-surface-400 hover:text-white hover:bg-surface-700/50 transition-all"
                aria-label="GitHub"
              >
                <Github size={18} />
              </a>
              <a
                href={personalInfo.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-surface-800/50 flex items-center justify-center text-surface-400 hover:text-white hover:bg-surface-700/50 transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a
                href={personalInfo.links.leetcode}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-surface-800/50 flex items-center justify-center text-surface-400 hover:text-white hover:bg-surface-700/50 transition-all"
                aria-label="LeetCode"
              >
                <FileCode size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-surface-500 text-sm">
            © {currentYear} Rahul Kadyan. All rights reserved.
          </p>
          <p className="text-surface-500 text-sm flex items-center gap-1">
            Built with <Heart size={14} className="text-red-500" /> using React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
