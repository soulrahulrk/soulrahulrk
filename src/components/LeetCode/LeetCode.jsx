import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Target, Trophy, Zap, Code } from 'lucide-react';
import { useLeetCode } from '../../hooks';

const LeetCode = () => {
  const { stats, loading, error } = useLeetCode();
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

  // Calculate percentages
  const getPercentage = (solved, total) => {
    if (!total) return 0;
    return Math.round((solved / total) * 100);
  };

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'easy':
        return { bg: 'bg-green-500', text: 'text-green-400', border: 'border-green-500/30' };
      case 'medium':
        return { bg: 'bg-yellow-500', text: 'text-yellow-400', border: 'border-yellow-500/30' };
      case 'hard':
        return { bg: 'bg-red-500', text: 'text-red-400', border: 'border-red-500/30' };
      default:
        return { bg: 'bg-primary-500', text: 'text-primary-400', border: 'border-primary-500/30' };
    }
  };

  return (
    <section id="leetcode" className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary-500/5 rounded-full blur-3xl" />
      </div>

      <div className="section-container relative z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="mb-16 text-center">
            <h2 className="section-title">
              <span className="text-white">Problem-Solving </span>
              <span className="gradient-text">Proof</span>
            </h2>
            <p className="section-subtitle mx-auto">
              Problem-solving discipline backed by data, not claims.
            </p>
          </motion.div>

          {/* Loading State */}
          {loading && (
            <div className="flex items-center justify-center py-12">
              <div className="w-8 h-8 border-2 border-primary-500/30 border-t-primary-500 rounded-full animate-spin" />
            </div>
          )}

          {/* Error State */}
          {error && (
            <div className="text-center py-12">
              <p className="text-surface-400">Unable to load LeetCode stats. Check back later!</p>
            </div>
          )}

          {/* Stats Content */}
          {!loading && stats && (
            <div className="max-w-4xl mx-auto">
              {/* Main Stats */}
              <motion.div
                variants={itemVariants}
                className="grid sm:grid-cols-3 gap-6 mb-12"
              >
                {/* Total Solved */}
                <div className="glass-card p-6 text-center">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary-500/20 to-accent-500/20 flex items-center justify-center mx-auto mb-4">
                    <Code className="w-7 h-7 text-primary-400" />
                  </div>
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={inView ? { scale: 1 } : { scale: 0 }}
                    transition={{ duration: 0.5, delay: 0.3, type: 'spring' }}
                    className="text-4xl font-bold gradient-text mb-2"
                  >
                    {stats.totalSolved}+
                  </motion.div>
                  <p className="text-surface-400 text-sm">Problems Solved</p>
                </div>

                {/* Ranking */}
                <div className="glass-card p-6 text-center">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-yellow-500/20 to-orange-500/20 flex items-center justify-center mx-auto mb-4">
                    <Trophy className="w-7 h-7 text-yellow-400" />
                  </div>
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={inView ? { scale: 1 } : { scale: 0 }}
                    transition={{ duration: 0.5, delay: 0.4, type: 'spring' }}
                    className="text-4xl font-bold text-white mb-2"
                  >
                    {stats.ranking ? `${Math.round(stats.ranking / 1000)}K` : 'Top'}
                  </motion.div>
                  <p className="text-surface-400 text-sm">Global Ranking</p>
                </div>

                {/* Consistency */}
                <div className="glass-card p-6 text-center">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-green-500/20 to-emerald-500/20 flex items-center justify-center mx-auto mb-4">
                    <Target className="w-7 h-7 text-green-400" />
                  </div>
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={inView ? { scale: 1 } : { scale: 0 }}
                    transition={{ duration: 0.5, delay: 0.5, type: 'spring' }}
                    className="text-4xl font-bold text-white mb-2"
                  >
                    {stats.acceptanceRate || '60'}%
                  </motion.div>
                  <p className="text-surface-400 text-sm">Acceptance Rate</p>
                </div>
              </motion.div>

              {/* Difficulty Breakdown */}
              <motion.div variants={itemVariants} className="glass-card p-8">
                <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
                  <Zap className="text-yellow-400" size={20} />
                  Difficulty Breakdown
                </h3>

                <div className="space-y-6">
                  {/* Easy */}
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className={`font-medium ${getDifficultyColor('easy').text}`}>
                        Easy
                      </span>
                      <span className="text-surface-400 text-sm">
                        {stats.breakdown.easy.solved} / {stats.breakdown.easy.total}
                      </span>
                    </div>
                    <div className="h-3 rounded-full bg-surface-800 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${getPercentage(stats.breakdown.easy.solved, stats.breakdown.easy.total)}%` } : { width: 0 }}
                        transition={{ duration: 1, delay: 0.5, ease: 'easeOut' }}
                        className="h-full rounded-full bg-gradient-to-r from-green-500 to-green-400"
                      />
                    </div>
                  </div>

                  {/* Medium */}
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className={`font-medium ${getDifficultyColor('medium').text}`}>
                        Medium
                      </span>
                      <span className="text-surface-400 text-sm">
                        {stats.breakdown.medium.solved} / {stats.breakdown.medium.total}
                      </span>
                    </div>
                    <div className="h-3 rounded-full bg-surface-800 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${getPercentage(stats.breakdown.medium.solved, stats.breakdown.medium.total)}%` } : { width: 0 }}
                        transition={{ duration: 1, delay: 0.6, ease: 'easeOut' }}
                        className="h-full rounded-full bg-gradient-to-r from-yellow-500 to-yellow-400"
                      />
                    </div>
                  </div>

                  {/* Hard */}
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className={`font-medium ${getDifficultyColor('hard').text}`}>
                        Hard
                      </span>
                      <span className="text-surface-400 text-sm">
                        {stats.breakdown.hard.solved} / {stats.breakdown.hard.total}
                      </span>
                    </div>
                    <div className="h-3 rounded-full bg-surface-800 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${getPercentage(stats.breakdown.hard.solved, stats.breakdown.hard.total)}%` } : { width: 0 }}
                        transition={{ duration: 1, delay: 0.7, ease: 'easeOut' }}
                        className="h-full rounded-full bg-gradient-to-r from-red-500 to-red-400"
                      />
                    </div>
                  </div>
                </div>

                {/* Visual Representation */}
                <div className="mt-8 pt-6 border-t border-white/5">
                  <div className="flex items-center justify-center gap-2">
                    {['easy', 'medium', 'hard'].map((difficulty) => {
                      const colors = getDifficultyColor(difficulty);
                      const count = stats.breakdown[difficulty].solved;
                      return (
                        <div key={difficulty} className="flex flex-wrap gap-1 justify-center">
                          {Array.from({ length: Math.min(count, 15) }).map((_, i) => (
                            <motion.div
                              key={i}
                              initial={{ scale: 0, opacity: 0 }}
                              animate={inView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
                              transition={{ duration: 0.2, delay: 0.8 + i * 0.02 }}
                              className={`w-2.5 h-2.5 rounded-sm ${colors.bg}`}
                            />
                          ))}
                          {count > 15 && (
                            <span className={`text-xs ${colors.text} ml-1`}>+{count - 15}</span>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </motion.div>

              {/* LeetCode Link */}
              <motion.div variants={itemVariants} className="mt-8 text-center">
                {/* Strengths */}
                {stats.strengths && stats.strengths.length > 0 && (
                  <div className="glass-card p-6 mb-8 text-left">
                    <h4 className="text-white font-medium mb-4">Strong Topics</h4>
                    <div className="flex flex-wrap gap-2">
                      {stats.strengths.map((topic) => (
                        <span 
                          key={topic} 
                          className="px-3 py-1.5 rounded-lg text-sm bg-primary-500/10 text-primary-300 border border-primary-500/20"
                        >
                          {topic}
                        </span>
                      ))}
                    </div>
                    {stats.primaryLanguage && (
                      <p className="text-surface-400 text-sm mt-4">
                        Primary language: <span className="text-white">{stats.primaryLanguage}</span>
                      </p>
                    )}
                  </div>
                )}
                
                <a
                  href={`https://leetcode.com/u/${stats.username}/`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-surface-400 hover:text-white transition-colors"
                >
                  <span>View full profile on LeetCode</span>
                  <ExternalLink size={16} />
                </a>
              </motion.div>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default LeetCode;
