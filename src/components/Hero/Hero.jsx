import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, FileCode, Sparkles } from 'lucide-react';
import { personalInfo } from '../../data/content';

const Hero = () => {
  const scrollToProjects = () => {
    const element = document.querySelector('#projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
    },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 gradient-bg">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-surface-950/50 to-surface-950" />
      </div>

      {/* Grid Background */}
      <div className="grid-bg" />

      {/* Floating Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            y: [0, -30, 0],
            x: [0, 15, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary-500/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            y: [0, 20, 0],
            x: [0, -20, 0],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 1,
          }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-500/15 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            y: [0, -15, 0],
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 2,
          }}
          className="absolute top-1/2 right-1/3 w-48 h-48 bg-primary-400/10 rounded-full blur-2xl"
        />
      </div>

      {/* Content */}
      <div className="section-container relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto text-center"
        >
          {/* Badge */}
          <motion.div variants={itemVariants} className="mb-6">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-surface-800/50 backdrop-blur-sm border border-surface-700/50 text-sm text-surface-300">
              <Sparkles size={14} className="text-accent-400" />
              <span>Open to new opportunities</span>
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4"
          >
            <span className="text-white">Hi, I'm </span>
            <span className="gradient-text">{personalInfo.name}</span>
          </motion.h1>

          {/* Role */}
          <motion.div variants={itemVariants} className="mb-6">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-medium text-surface-300">
              {personalInfo.role}
              <span className="mx-3 text-surface-600">|</span>
              <span className="text-primary-400">{personalInfo.tagline}</span>
            </h2>
          </motion.div>

          {/* Headline */}
          <motion.p
            variants={itemVariants}
            className="text-lg sm:text-xl text-surface-400 max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            {personalInfo.headline}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center justify-center gap-4 mb-12"
          >
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              onClick={scrollToProjects}
              className="btn-primary text-base"
            >
              View Projects
              <ArrowDown size={18} />
            </motion.button>

            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              href={personalInfo.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              <Github size={18} />
              GitHub
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              href={personalInfo.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              <Linkedin size={18} />
              LinkedIn
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              href={personalInfo.links.leetcode}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              <FileCode size={18} />
              LeetCode
            </motion.a>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col items-center gap-2"
          >
            <span className="text-surface-500 text-sm">Scroll to explore</span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            >
              <ArrowDown size={20} className="text-surface-500" />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-surface-950 to-transparent" />
    </section>
  );
};

export default Hero;
