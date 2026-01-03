import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Server, Brain, Search, Database } from 'lucide-react';
import { aboutContent, techStack } from '../../data/content';

// Map icon names to components
const iconMap = {
  Server: Server,
  Brain: Brain,
  Search: Search,
  Database: Database,
};

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  return (
    <section id="about" className="py-24 lg:py-32 relative">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-0 w-[600px] h-[600px] bg-primary-500/5 rounded-full blur-3xl -translate-x-1/2" />
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
              <span className="text-white">Engineering </span>
              <span className="gradient-text">Profile</span>
            </h2>
            <p className="section-subtitle">
              Building AI systems that make decisions, not just predictions.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Summary */}
            <motion.div variants={itemVariants} className="space-y-6">
              {aboutContent.summary.map((paragraph, index) => (
                <p key={index} className="text-surface-300 leading-relaxed text-lg">
                  {paragraph}
                </p>
              ))}
            </motion.div>

            {/* Focus Areas */}
            <motion.div variants={itemVariants} className="grid sm:grid-cols-2 gap-4">
              {aboutContent.focus.map((item, index) => {
                const IconComponent = iconMap[item.icon];
                return (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.02, y: -4 }}
                    className="glass-card p-6 group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500/20 to-accent-500/20 flex items-center justify-center mb-4 group-hover:from-primary-500/30 group-hover:to-accent-500/30 transition-all">
                      <IconComponent className="w-6 h-6 text-primary-400" />
                    </div>
                    <h3 className="text-white font-semibold text-lg mb-2">
                      {item.title}
                    </h3>
                    <p className="text-surface-400 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>

          {/* Tech Stack */}
          <motion.div variants={itemVariants} className="mt-20">
            <h3 className="text-2xl font-bold text-white mb-8">Tech Stack</h3>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Languages */}
              <div className="glass-card p-6">
                <h4 className="text-primary-400 font-semibold mb-4 text-sm uppercase tracking-wider">
                  Languages
                </h4>
                <div className="space-y-3">
                  {techStack.languages.map((lang) => (
                    <div key={lang.name}>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-surface-300">{lang.name}</span>
                        <span className="text-surface-500">{lang.level}%</span>
                      </div>
                      <div className="progress-bar">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={inView ? { width: `${lang.level}%` } : { width: 0 }}
                          transition={{ duration: 1, delay: 0.5, ease: 'easeOut' }}
                          className="progress-bar-fill"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* ML & AI */}
              <div className="glass-card p-6">
                <h4 className="text-accent-400 font-semibold mb-4 text-sm uppercase tracking-wider">
                  ML & AI
                </h4>
                <div className="flex flex-wrap gap-2">
                  {techStack.ml.map((tech) => (
                    <span key={tech} className="tech-badge">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Data & Infrastructure */}
              <div className="glass-card p-6">
                <h4 className="text-green-400 font-semibold mb-4 text-sm uppercase tracking-wider">
                  Data & Infra
                </h4>
                <div className="flex flex-wrap gap-2">
                  {techStack.data.map((tech) => (
                    <span key={tech} className="tech-badge">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Tools & Platforms */}
              <div className="glass-card p-6">
                <h4 className="text-orange-400 font-semibold mb-4 text-sm uppercase tracking-wider">
                  Tools & Platforms
                </h4>
                <div className="flex flex-wrap gap-2">
                  {techStack.tools.map((tech) => (
                    <span key={tech} className="tech-badge">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
