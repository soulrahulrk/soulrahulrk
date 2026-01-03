import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  ExternalLink, 
  Github, 
  Layers, 
  TrendingUp, 
  X, 
  ChevronRight,
  Star,
  GitFork
} from 'lucide-react';
import { useProjects } from '../../hooks';

const ProjectCard = ({ project, onOpenModal }) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      className="glass-card group cursor-pointer overflow-hidden"
      onClick={() => onOpenModal(project)}
    >
      {/* Category Badge */}
      <div className="absolute top-4 left-4 z-10">
        <span className="px-3 py-1 rounded-full text-xs font-medium bg-primary-500/20 text-primary-400 border border-primary-500/30">
          {project.category}
        </span>
      </div>

      {/* Content */}
      <div className="p-6 pt-14">
        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary-400 transition-colors">
          {project.name}
        </h3>
        
        <p className="text-surface-400 text-sm mb-4 line-clamp-2">
          {project.description}
        </p>

        {/* Problem Statement */}
        <div className="mb-4 p-3 rounded-lg bg-surface-800/50 border-l-2 border-accent-500">
          <p className="text-surface-300 text-sm italic">
            "{project.problem}"
          </p>
        </div>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.slice(0, 5).map((tech) => (
            <span key={tech} className="tech-badge text-xs">
              {tech}
            </span>
          ))}
          {project.tech.length > 5 && (
            <span className="tech-badge text-xs">+{project.tech.length - 5}</span>
          )}
        </div>

        {/* Impact */}
        <div className="flex items-start gap-2 mb-4 text-sm">
          <TrendingUp size={16} className="text-green-400 mt-0.5 flex-shrink-0" />
          <span className="text-surface-300">{project.impact}</span>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between pt-4 border-t border-white/5">
          <div className="flex items-center gap-4">
            {project.stars !== undefined && (
              <span className="flex items-center gap-1 text-sm text-surface-400">
                <Star size={14} />
                {project.stars}
              </span>
            )}
            {project.forks !== undefined && (
              <span className="flex items-center gap-1 text-sm text-surface-400">
                <GitFork size={14} />
                {project.forks}
              </span>
            )}
          </div>
          
          <span className="text-primary-400 text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
            Deep Dive
            <ChevronRight size={16} />
          </span>
        </div>
      </div>
    </motion.div>
  );
};

const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ duration: 0.3 }}
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-surface-900 rounded-2xl border border-white/10 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-surface-800 text-surface-400 hover:text-white hover:bg-surface-700 transition-all z-10"
        >
          <X size={20} />
        </button>

        {/* Header */}
        <div className="p-8 pb-0">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-primary-500/20 text-primary-400 border border-primary-500/30 mb-4">
            {project.category}
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            {project.name}
          </h2>
          <p className="text-surface-300 text-lg leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* Content */}
        <div className="p-8 space-y-8">
          {/* Problem Statement */}
          <div>
            <h3 className="text-sm font-semibold text-surface-400 uppercase tracking-wider mb-3 flex items-center gap-2">
              <Layers size={16} className="text-accent-400" />
              Problem Statement
            </h3>
            <div className="p-4 rounded-xl bg-surface-800/50 border-l-4 border-accent-500">
              <p className="text-surface-200">{project.problem}</p>
            </div>
          </div>

          {/* Architecture */}
          <div>
            <h3 className="text-sm font-semibold text-surface-400 uppercase tracking-wider mb-3">
              Architecture Highlights
            </h3>
            <ul className="space-y-2">
              {project.architecture.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-lg bg-primary-500/20 flex items-center justify-center text-primary-400 text-xs font-medium flex-shrink-0 mt-0.5">
                    {index + 1}
                  </span>
                  <span className="text-surface-300">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Impact */}
          <div>
            <h3 className="text-sm font-semibold text-surface-400 uppercase tracking-wider mb-3 flex items-center gap-2">
              <TrendingUp size={16} className="text-green-400" />
              Business Impact
            </h3>
            <div className="p-4 rounded-xl bg-green-500/10 border border-green-500/20">
              <p className="text-green-300 font-medium">{project.impact}</p>
            </div>
          </div>

          {/* Tech Stack */}
          <div>
            <h3 className="text-sm font-semibold text-surface-400 uppercase tracking-wider mb-3">
              Technology Stack
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <span key={tech} className="tech-badge">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-wrap gap-4 pt-4 border-t border-white/5">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              <Github size={18} />
              View on GitHub
            </a>
            <button onClick={onClose} className="btn-secondary">
              Close
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const Projects = () => {
  const { projects, loading } = useProjects();
  const [selectedProject, setSelectedProject] = useState(null);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="projects" className="py-24 lg:py-32 relative">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-accent-500/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="section-container relative z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="mb-16">
            <h2 className="section-title">
              <span className="text-white">Flagship </span>
              <span className="gradient-text">Projects</span>
            </h2>
            <p className="section-subtitle">
              Production-grade AI/ML systems solving real-world problems.
            </p>
          </motion.div>

          {/* Loading State */}
          {loading && (
            <div className="flex items-center justify-center py-12">
              <div className="w-8 h-8 border-2 border-primary-500/30 border-t-primary-500 rounded-full animate-spin" />
            </div>
          )}

          {/* Projects Grid */}
          {!loading && (
            <motion.div
              variants={containerVariants}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {projects.filter(p => p.featured).map((project) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  onOpenModal={setSelectedProject}
                />
              ))}
            </motion.div>
          )}

          {/* GitHub Link */}
          <motion.div variants={itemVariants} className="mt-12 text-center">
            <a
              href="https://github.com/soulrahulrk"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-surface-400 hover:text-white transition-colors"
            >
              <span>View all repositories on GitHub</span>
              <ExternalLink size={16} />
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
