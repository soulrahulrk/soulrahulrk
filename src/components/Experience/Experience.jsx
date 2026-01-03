import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Calendar, MapPin, Building, ExternalLink } from 'lucide-react';
import { experience } from '../../data/content';

const Experience = () => {
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
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="experience" className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-accent-500/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
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
              <span className="text-white">Professional </span>
              <span className="gradient-text">Experience</span>
            </h2>
            <p className="section-subtitle">
              Building real systems that solve real problems.
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="max-w-3xl mx-auto">
            {experience.map((exp, index) => (
              <motion.div
                key={exp.id}
                variants={itemVariants}
                className="timeline-item"
              >
                {/* Timeline Dot */}
                <div className="timeline-dot" />

                {/* Content Card */}
                <motion.div
                  whileHover={{ x: 8 }}
                  className="glass-card p-6 ml-4"
                >
                  {/* Header */}
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-1">
                        {exp.role}
                      </h3>
                      <div className="flex items-center gap-2 text-primary-400">
                        <Building size={16} />
                        <span className="font-medium">{exp.company}</span>
                      </div>
                    </div>

                    <div className="flex flex-col items-end gap-1">
                      <span className="inline-flex items-center gap-1.5 text-sm text-surface-400">
                        <Calendar size={14} />
                        {exp.period}
                      </span>
                      <span className="inline-flex items-center gap-1.5 text-sm text-surface-500">
                        <MapPin size={14} />
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  {/* Type Badge */}
                  <div className="mb-4">
                    <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-accent-500/20 text-accent-400 border border-accent-500/30">
                      {exp.type}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-surface-300 mb-4">
                    {exp.description}
                  </p>

                  {/* Achievements */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-surface-400 uppercase tracking-wider mb-3">
                      Key Achievements
                    </h4>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary-400 mt-2 flex-shrink-0" />
                          <span className="text-surface-300 text-sm">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
                    {exp.tech.map((tech) => (
                      <span key={tech} className="tech-badge text-xs">
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* LinkedIn Link */}
          <motion.div variants={itemVariants} className="mt-12 text-center">
            <a
              href="https://www.linkedin.com/in/rahul-kadyan-409630251/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-surface-400 hover:text-white transition-colors"
            >
              <span>View full experience on LinkedIn</span>
              <ExternalLink size={16} />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
