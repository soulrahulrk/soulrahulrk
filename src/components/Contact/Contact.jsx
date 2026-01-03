import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, MapPin, Github, Linkedin, FileCode, Send, MessageSquare } from 'lucide-react';
import { personalInfo } from '../../data/content';

const Contact = () => {
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

  const socialLinks = [
    {
      name: 'GitHub',
      href: personalInfo.links.github,
      icon: Github,
      color: 'hover:text-white hover:bg-surface-700',
      description: 'Check out my code',
    },
    {
      name: 'LinkedIn',
      href: personalInfo.links.linkedin,
      icon: Linkedin,
      color: 'hover:text-blue-400 hover:bg-blue-500/10',
      description: 'Connect with me',
    },
    {
      name: 'LeetCode',
      href: personalInfo.links.leetcode,
      icon: FileCode,
      color: 'hover:text-yellow-400 hover:bg-yellow-500/10',
      description: 'See my problem-solving',
    },
  ];

  return (
    <section id="contact" className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-t from-primary-500/10 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="section-container relative z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="section-title">
              <span className="text-white">Let's </span>
              <span className="gradient-text">Connect</span>
            </h2>
            <p className="section-subtitle mx-auto">
              Interested in collaboration, opportunities, or just want to chat about AI/ML?
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {/* Main Contact Card */}
            <motion.div variants={itemVariants} className="glass-card p-8 lg:p-12 mb-8">
              <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
                {/* Contact Info */}
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500/20 to-accent-500/20 flex items-center justify-center">
                      <MessageSquare className="w-6 h-6 text-primary-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">Get in Touch</h3>
                      <p className="text-surface-400 text-sm">I'd love to hear from you</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    {/* Email */}
                    <a
                      href={`mailto:${personalInfo.email}`}
                      className="flex items-center gap-4 p-4 rounded-xl bg-surface-800/50 hover:bg-surface-700/50 transition-all group"
                    >
                      <div className="w-10 h-10 rounded-lg bg-primary-500/20 flex items-center justify-center group-hover:bg-primary-500/30 transition-colors">
                        <Mail size={20} className="text-primary-400" />
                      </div>
                      <div>
                        <p className="text-surface-400 text-xs mb-0.5">Email</p>
                        <p className="text-white font-medium group-hover:text-primary-400 transition-colors">
                          {personalInfo.email}
                        </p>
                      </div>
                    </a>

                    {/* Location */}
                    <div className="flex items-center gap-4 p-4 rounded-xl bg-surface-800/50">
                      <div className="w-10 h-10 rounded-lg bg-accent-500/20 flex items-center justify-center">
                        <MapPin size={20} className="text-accent-400" />
                      </div>
                      <div>
                        <p className="text-surface-400 text-xs mb-0.5">Location</p>
                        <p className="text-white font-medium">{personalInfo.location}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* CTA */}
                <div className="flex flex-col justify-center">
                  <h3 className="text-lg font-semibold text-white mb-2">
                    Open for Opportunities
                  </h3>
                  <p className="text-surface-400 mb-6 leading-relaxed">
                    I'm actively looking for AI/ML engineering roles where I can build impactful systems.
                    Whether it's a full-time position, internship, or an exciting project—let's talk.
                  </p>
                  
                  <motion.a
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    href={`mailto:${personalInfo.email}?subject=Opportunity%20for%20Rahul%20Kadyan`}
                    className="btn-primary justify-center py-4"
                  >
                    <Send size={18} />
                    Send me an email
                  </motion.a>
                </div>
              </div>
            </motion.div>

            {/* Social Links */}
            <motion.div variants={itemVariants}>
              <h3 className="text-center text-surface-400 text-sm mb-6">
                Find me on
              </h3>
              <div className="flex flex-wrap justify-center gap-4">
                {socialLinks.map((link) => (
                  <motion.a
                    key={link.name}
                    whileHover={{ scale: 1.05, y: -4 }}
                    whileTap={{ scale: 0.95 }}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-3 px-6 py-4 rounded-xl bg-surface-800/50 border border-surface-700/50 text-surface-400 transition-all ${link.color}`}
                  >
                    <link.icon size={24} />
                    <div className="text-left">
                      <p className="font-medium text-current">{link.name}</p>
                      <p className="text-xs opacity-70">{link.description}</p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
