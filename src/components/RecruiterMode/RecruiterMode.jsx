import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, 
  Download, 
  Github, 
  Linkedin, 
  Mail, 
  MapPin,
  ExternalLink,
  CheckCircle,
  Briefcase,
  Code,
  Award,
  Target
} from 'lucide-react';
import { personalInfo, recruiterSkills, featuredProjects, experience, recruiterSummary, leetcodeStats } from '../../data/content';

const RecruiterMode = ({ isOpen, onClose }) => {
  const topProjects = featuredProjects.filter(p => p.featured).slice(0, 3);
  const latestExperience = experience[0];

  const handleDownloadResume = () => {
    // In production, this would link to an actual PDF file
    // For now, create a placeholder alert
    alert('Resume download will be available once the PDF is uploaded to /public/resume.pdf');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 backdrop-blur-md z-50"
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-4 md:inset-8 lg:inset-12 z-50 overflow-hidden"
          >
            <div className="h-full bg-surface-900 rounded-2xl border border-white/10 shadow-2xl overflow-y-auto">
              {/* Header */}
              <div className="sticky top-0 bg-surface-900/95 backdrop-blur-xl border-b border-white/5 p-6 z-10">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent-500 to-primary-500 flex items-center justify-center">
                      <Briefcase className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h2 className="text-xl font-bold text-white">Recruiter View</h2>
                      <p className="text-surface-400 text-sm">Quick overview for hiring decisions</p>
                    </div>
                  </div>
                  <button
                    onClick={onClose}
                    className="p-2 rounded-full bg-surface-800 text-surface-400 hover:text-white hover:bg-surface-700 transition-all"
                  >
                    <X size={20} />
                  </button>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 lg:p-8">
                <div className="max-w-5xl mx-auto">
                  {/* Profile Summary */}
                  <div className="grid lg:grid-cols-3 gap-8 mb-12">
                    {/* Main Info */}
                    <div className="lg:col-span-2">
                      <div className="glass-card p-6">
                        <div className="flex items-start gap-4 mb-6">
                          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center text-2xl font-bold text-white">
                            RK
                          </div>
                          <div>
                            <h3 className="text-2xl font-bold text-white">{personalInfo.name}</h3>
                            <p className="text-primary-400 font-medium">{personalInfo.role}</p>
                            <div className="flex items-center gap-2 mt-2 text-surface-400 text-sm">
                              <MapPin size={14} />
                              <span>{personalInfo.location}</span>
                            </div>
                          </div>
                        </div>

                        <p className="text-surface-300 mb-6 leading-relaxed">
                          {recruiterSummary.oneLiner}. Targeting {recruiterSummary.targetRoles.join(', ')} roles 
                          where ML systems ship to production and require reasoning under constraints.
                        </p>

                        {/* Quick Stats */}
                        <div className="grid grid-cols-3 gap-4">
                          <div className="text-center p-3 rounded-xl bg-surface-800/50">
                            <div className="text-2xl font-bold gradient-text">{leetcodeStats.totalSolved}</div>
                            <div className="text-surface-400 text-xs">LeetCode Solved</div>
                          </div>
                          <div className="text-center p-3 rounded-xl bg-surface-800/50">
                            <div className="text-2xl font-bold text-white">3</div>
                            <div className="text-surface-400 text-xs">Tier-1 Projects</div>
                          </div>
                          <div className="text-center p-3 rounded-xl bg-surface-800/50">
                            <div className="text-2xl font-bold text-white">2</div>
                            <div className="text-surface-400 text-xs">Internships</div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Contact & Actions */}
                    <div className="space-y-4">
                      {/* Target Roles */}
                      <div className="glass-card p-4 mb-4">
                        <div className="flex items-center gap-2 mb-3 text-sm font-medium text-surface-300">
                          <Target size={16} className="text-accent-400" />
                          Target Roles
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {recruiterSummary.targetRoles.map((role) => (
                            <span key={role} className="px-3 py-1 rounded-full text-xs bg-primary-500/20 text-primary-300 border border-primary-500/30">
                              {role}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Download Resume */}
                      <button
                        onClick={handleDownloadResume}
                        className="w-full btn-primary justify-center py-4 text-base"
                      >
                        <Download size={20} />
                        Download Resume (PDF)
                      </button>

                      {/* Contact Links */}
                      <div className="glass-card p-4 space-y-3">
                        <a
                          href={`mailto:${personalInfo.email}`}
                          className="flex items-center gap-3 p-3 rounded-xl bg-surface-800/50 hover:bg-surface-700/50 transition-colors group"
                        >
                          <Mail size={18} className="text-primary-400" />
                          <span className="text-surface-300 text-sm group-hover:text-white transition-colors truncate">
                            {personalInfo.email}
                          </span>
                        </a>
                        
                        <a
                          href={personalInfo.links.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-3 p-3 rounded-xl bg-surface-800/50 hover:bg-surface-700/50 transition-colors group"
                        >
                          <Linkedin size={18} className="text-blue-400" />
                          <span className="text-surface-300 text-sm group-hover:text-white transition-colors">
                            LinkedIn Profile
                          </span>
                          <ExternalLink size={14} className="ml-auto text-surface-500" />
                        </a>
                        
                        <a
                          href={personalInfo.links.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-3 p-3 rounded-xl bg-surface-800/50 hover:bg-surface-700/50 transition-colors group"
                        >
                          <Github size={18} className="text-surface-300" />
                          <span className="text-surface-300 text-sm group-hover:text-white transition-colors">
                            GitHub Profile
                          </span>
                          <ExternalLink size={14} className="ml-auto text-surface-500" />
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Key Skills */}
                  <div className="mb-12">
                    <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                      <Award size={20} className="text-accent-400" />
                      Key Skills
                    </h3>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
                      {recruiterSkills.map((skill) => (
                        <div
                          key={skill.name}
                          className="flex items-center justify-between p-3 rounded-xl bg-surface-800/50 border border-surface-700/50"
                        >
                          <span className="text-surface-200">{skill.name}</span>
                          <span className={`text-xs px-2 py-1 rounded-full ${
                            skill.level === 'Strong' 
                              ? 'bg-green-500/20 text-green-400' 
                              : skill.level === 'Working'
                              ? 'bg-primary-500/20 text-primary-400'
                              : 'bg-surface-700 text-surface-400'
                          }`}>
                            {skill.level}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Top Projects */}
                  <div className="mb-12">
                    <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                      <Code size={20} className="text-primary-400" />
                      Top 3 Projects
                    </h3>
                    <div className="grid lg:grid-cols-3 gap-4">
                      {topProjects.map((project) => (
                        <div key={project.id} className="glass-card p-5">
                          <div className="flex items-start justify-between mb-3">
                            <h4 className="text-white font-semibold text-sm line-clamp-2">
                              {project.name}
                            </h4>
                          </div>
                          <p className="text-surface-400 text-xs mb-3 line-clamp-2">
                            {project.problem}
                          </p>
                          <div className="flex flex-wrap gap-1 mb-3">
                            {project.tech.slice(0, 3).map((tech) => (
                              <span key={tech} className="px-2 py-0.5 rounded text-xs bg-surface-800 text-surface-400">
                                {tech}
                              </span>
                            ))}
                          </div>
                          <div className="flex items-center gap-1 text-xs text-green-400">
                            <CheckCircle size={12} />
                            <span className="line-clamp-1">{project.impact}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Latest Experience */}
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                      <Briefcase size={20} className="text-yellow-400" />
                      Recent Experience
                    </h3>
                    <div className="glass-card p-6">
                      <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                        <div>
                          <h4 className="text-xl font-bold text-white">{latestExperience.role}</h4>
                          <p className="text-primary-400">{latestExperience.company}</p>
                        </div>
                        <span className="text-surface-400 text-sm">{latestExperience.period}</span>
                      </div>
                      <ul className="space-y-2">
                        {latestExperience.achievements.slice(0, 3).map((achievement, i) => (
                          <li key={i} className="flex items-start gap-2 text-surface-300 text-sm">
                            <CheckCircle size={14} className="text-green-400 mt-0.5 flex-shrink-0" />
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default RecruiterMode;
