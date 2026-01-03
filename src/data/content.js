// Personal Information
export const personalInfo = {
  name: 'Rahul Kadyan',
  role: 'AI/ML Engineer',
  tagline: 'Decision Systems | ML + Backend Integration | Explainable AI',
  headline: 'I build AI systems that make decisions—not just predictions',
  location: 'Panipat, Haryana, India',
  email: 'rahulkadyan.dev@gmail.com',
  
  links: {
    github: 'https://github.com/soulrahulrk',
    linkedin: 'https://www.linkedin.com/in/rahul-kadyan-409630251/',
    leetcode: 'https://leetcode.com/u/j5Fa0igpi6/',
    resume: '/resume.pdf',
  },
};

// About Section Content
export const aboutContent = {
  summary: [
    'I build AI systems where the output is a decision, not a dashboard. My work combines rule-based logic with ML models to create systems that can explain why they made a choice—not just what they predicted.',
    'Most of my projects involve integrating ML pipelines with FastAPI backends, vector search, or business rule engines. I focus on problems where prediction alone is not enough: voyage cost estimation, candidate-assessment matching, placement risk scoring.',
    'I am targeting ML Engineer and AI Engineer roles where I can work on systems that ship to production and require reasoning under constraints.',
  ],
  
  focus: [
    {
      title: 'Decision-Grade AI',
      description: 'Systems that output actionable decisions with risk flags, confidence scores, and override logic',
      icon: 'Brain',
    },
    {
      title: 'ML + Backend Integration',
      description: 'FastAPI services that serve ML models with proper error handling, logging, and latency control',
      icon: 'Server',
    },
    {
      title: 'Rule + ML Hybrid Systems',
      description: 'Combining business rules with learned models for explainable, auditable outputs',
      icon: 'Search',
    },
    {
      title: 'Vector Search & LLM Orchestration',
      description: 'Semantic retrieval pipelines with LLM re-ranking for recommendation and matching systems',
      icon: 'Database',
    },
  ],
};

// Tech Stack
export const techStack = {
  languages: [
    { name: 'Python', level: 95 },
    { name: 'SQL', level: 85 },
    { name: 'JavaScript', level: 70 },
  ],
  ml: [
    'Scikit-learn',
    'XGBoost',
    'Random Forest',
    'Hugging Face Transformers',
    'LangChain',
    'Sentence Transformers',
  ],
  data: [
    'Pandas',
    'NumPy',
    'PostgreSQL',
    'ChromaDB',
    'FAISS',
    'Power BI',
  ],
  tools: [
    'FastAPI',
    'Streamlit',
    'Git',
    'Docker',
    'REST APIs',
  ],
  concepts: [
    'Vector Search',
    'Semantic Retrieval',
    'Rule Engines',
    'Feature Engineering',
    'Model Explainability',
  ],
};

// Featured Projects (Tier-1 only - manually curated)
export const featuredProjects = [
  {
    id: 'ai-voyage-estimation',
    name: 'AI Voyage Estimation & Decision System',
    description: 'Rule-based AI decision engine for maritime voyage profitability. Combines fuel cost modeling, risk flag generation, and profit estimation with explainable override logic.',
    problem: 'Voyage planning decisions require weighing fuel costs, port delays, weather risks, and cargo value—too complex for spreadsheets, too critical for black-box ML.',
    architecture: [
      'Rule engine with configurable risk thresholds and business constraints',
      'Cost estimation models for fuel, port fees, and delay penalties',
      'Decision output with confidence scores and override recommendations',
      'FastAPI backend serving decision requests with full audit logging',
    ],
    impact: 'System outputs GO/NO-GO decisions with itemized cost breakdowns and risk justifications',
    tech: ['Python', 'FastAPI', 'Rule Engine', 'PostgreSQL', 'Pandas'],
    github: 'https://github.com/soulrahulrk/ai-voyage-estimation',
    featured: true,
    category: 'Decision Systems',
  },
  {
    id: 'shl-recommendation',
    name: 'SHL Assessment Recommendation Engine',
    description: 'Semantic search system that matches job descriptions to psychometric assessments. Uses vector embeddings and LLM re-ranking to recommend relevant assessments with explanations.',
    problem: 'HR teams manually search through 50+ assessment types per role. Matching is inconsistent and time-intensive.',
    architecture: [
      'Sentence Transformer embeddings for job description encoding',
      'ChromaDB vector store for semantic assessment retrieval',
      'LLM-based re-ranking to filter and justify top recommendations',
      'Streamlit interface for HR users to input JD and receive ranked assessments',
    ],
    impact: 'Returns top-5 assessment recommendations with match explanations in under 3 seconds',
    tech: ['Python', 'Sentence Transformers', 'ChromaDB', 'LangChain', 'Streamlit'],
    github: 'https://github.com/soulrahulrk/shl-recommendation-engine',
    featured: true,
    category: 'Semantic Search / Recommendation',
  },
  {
    id: 'placement-intelligence',
    name: 'College Placement Intelligence System',
    description: 'Decision support system for placement cells. Scores resume credibility, flags risk factors, and generates placement-readiness assessments with reasoning.',
    problem: 'Placement officers review 500+ resumes manually. No systematic way to flag weak profiles or prioritize coaching interventions.',
    architecture: [
      'Resume parser extracting structured fields (skills, projects, experience)',
      'Rule-based credibility scoring with weighted factors',
      'Risk flag generator for missing sections, skill gaps, inconsistencies',
      'Decision output: Placement-ready / Needs coaching / High-risk',
    ],
    impact: 'Reduces manual screening time by surfacing high-risk profiles for human review',
    tech: ['Python', 'NLP', 'Rule Engine', 'FastAPI', 'Pandas'],
    github: 'https://github.com/soulrahulrk/placement-intelligence',
    featured: true,
    category: 'Decision Support',
  },
];

// Tier-2 Projects (Portfolio/GitHub only)
export const secondaryProjects = [
  {
    id: 'college-resource-management',
    name: 'College Resource Management System',
    description: 'Full-stack system for managing college resources, room bookings, and equipment allocation with role-based access control.',
    tech: ['Python', 'Flask', 'PostgreSQL', 'React'],
    github: 'https://github.com/soulrahulrk/college-resource-management',
    category: 'Full Stack',
  },
  {
    id: 'insulin-resistance',
    name: 'Insulin Resistance Prediction',
    description: 'Classification model predicting insulin resistance from metabolic markers. Includes feature importance analysis and threshold tuning for clinical use.',
    tech: ['Python', 'Scikit-learn', 'XGBoost', 'SHAP'],
    github: 'https://github.com/soulrahulrk/insulin-resistance-prediction',
    category: 'Healthcare ML',
  },
];

// Experience Timeline
export const experience = [
  {
    id: 'grades-global',
    company: 'Grades Global',
    role: 'Data Science Intern',
    period: '2024',
    location: 'Remote',
    type: 'Internship',
    description: 'Built forecasting models and business intelligence dashboards for operations teams.',
    achievements: [
      'Developed demand forecasting models using Random Forest and XGBoost',
      'Created Power BI dashboards for real-time operational metrics',
      'Automated weekly reporting pipeline, reducing manual effort',
    ],
    tech: ['Python', 'XGBoost', 'Random Forest', 'Power BI', 'Pandas', 'SQL'],
  },
  {
    id: 'imarticus',
    company: 'Imarticus Learning',
    role: 'Machine Learning Intern',
    period: '2024',
    location: 'Remote',
    type: 'Internship',
    description: 'Worked on ML pipeline development and model experimentation in a team environment.',
    achievements: [
      'Built and evaluated ML pipelines for classification tasks',
      'Collaborated on model experimentation and hyperparameter tuning',
      'Documented model performance and presented findings to team',
    ],
    tech: ['Python', 'Scikit-learn', 'Pandas', 'Jupyter', 'Git'],
  },
];

// LeetCode Stats (fallback data - will be overwritten by API if available)
export const leetcodeStats = {
  username: 'j5Fa0igpi6',
  totalSolved: 287,
  ranking: null,
  breakdown: {
    easy: { solved: 95, total: 800 },
    medium: { solved: 150, total: 1700 },
    hard: { solved: 42, total: 750 },
  },
  strengths: ['Arrays', 'Dynamic Programming', 'Graphs', 'Hashing'],
  primaryLanguage: 'Python',
  recentSubmissions: [],
};

// Skills for Recruiter View
export const recruiterSkills = [
  { name: 'Python', level: 'Strong' },
  { name: 'Machine Learning', level: 'Strong' },
  { name: 'FastAPI / Backend', level: 'Working' },
  { name: 'Vector Search', level: 'Working' },
  { name: 'LLM Orchestration', level: 'Working' },
  { name: 'SQL', level: 'Working' },
  { name: 'Rule-based Systems', level: 'Working' },
  { name: 'Pandas / Data Wrangling', level: 'Strong' },
];

// Recruiter Summary
export const recruiterSummary = {
  oneLiner: 'AI/ML Engineer building decision-grade systems with rule + ML hybrid architectures',
  targetRoles: ['ML Engineer (Junior)', 'AI Engineer', 'Data Analyst (Technical)'],
  topProjects: [
    'AI Voyage Estimation & Decision System',
    'SHL Assessment Recommendation Engine',
    'College Placement Intelligence System',
  ],
  keyStrengths: [
    'Decision systems with explainable outputs',
    'ML + backend integration (FastAPI)',
    'Vector search and semantic retrieval',
    'Problem-solving: 287 LeetCode problems',
  ],
};

// Navigation Links
export const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'LeetCode', href: '#leetcode' },
  { name: 'Experience', href: '#experience' },
  { name: 'Contact', href: '#contact' },
];
