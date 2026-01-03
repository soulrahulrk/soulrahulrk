# Rahul Kadyan | AI/ML Engineer Portfolio

A recruiter-grade, production-quality personal portfolio website built with React, Tailwind CSS, and Framer Motion. Designed to showcase AI/ML engineering work with visual authority and technical credibility.

![Portfolio Preview](https://img.shields.io/badge/Status-Live-success?style=for-the-badge)
![React](https://img.shields.io/badge/React-18.2-blue?style=for-the-badge&logo=react)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38bdf8?style=for-the-badge&logo=tailwindcss)
![Vite](https://img.shields.io/badge/Vite-5.0-646CFF?style=for-the-badge&logo=vite)

## 🎯 Purpose

This portfolio is designed for **recruiters and hiring managers** to quickly understand:
- Who Rahul Kadyan is and his engineering capabilities
- What production-grade projects he has built
- Proof of problem-solving discipline (LeetCode stats)
- Real-world AI/ML work with measurable impact
- Why he's worth interviewing

## ✨ Features

### 🏠 Landing / Hero Section
- Full-screen animated hero with gradient background
- Floating orbs with smooth animations
- Clear value proposition and CTA buttons
- Subtle motion effects using Framer Motion

### 👤 Engineering Profile
- Concise, impact-focused summary
- Visual tech stack cards with skill levels
- Focus areas: Production ML, Decision Systems, Explainable AI

### 🚀 Flagship Projects
- Curated project cards with:
  - Problem statements
  - Architecture highlights
  - Tech stack badges
  - Business impact metrics
- GitHub API integration for live stats
- Deep-dive modals for detailed exploration

### 📊 LeetCode Proof Section
- Dynamic stats fetching via API
- Visual progress bars by difficulty
- Problem-solving consistency metrics
- Fallback to static data when API unavailable

### 💼 Experience Timeline
- Interactive timeline UI
- Achievement-focused content
- Tech stack per role
- LinkedIn integration

### 🎯 Recruiter Mode (Critical Feature)
- Toggle button in navbar
- Summarized profile view
- Key skills at a glance
- Top 3 projects overview
- Resume download button
- Quick contact links

### 📬 Contact Section
- Direct email link
- Social profiles (GitHub, LinkedIn, LeetCode)
- Clean, professional design

## 🛠 Tech Stack

### Frontend
- **React 18** - Modern UI library with hooks
- **Vite** - Next-gen frontend tooling
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Production-ready animations
- **Lucide React** - Beautiful icons

### APIs
- **GitHub API** - Repository and profile data
- **LeetCode Stats API** - Problem-solving metrics

### Development
- **ESLint** - Code linting
- **Prettier** - Code formatting
- **PostCSS** - CSS processing

## 📂 Project Structure

```
soulrkrahul/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── About/
│   │   ├── Contact/
│   │   ├── Experience/
│   │   ├── Hero/
│   │   ├── LeetCode/
│   │   ├── Projects/
│   │   ├── RecruiterMode/
│   │   └── layout/
│   │       ├── Navbar.jsx
│   │       └── Footer.jsx
│   ├── data/
│   │   └── content.js          # All portfolio content
│   ├── hooks/
│   │   ├── useGitHub.js
│   │   └── useLeetCode.js
│   ├── services/
│   │   ├── github.js           # GitHub API client
│   │   └── leetcode.js         # LeetCode API client
│   ├── styles/
│   │   └── index.css           # Global styles
│   ├── App.jsx
│   └── main.jsx
├── .env.example
├── .eslintrc.cjs
├── .prettierrc
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
└── vite.config.js
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/soulrahulrk/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   ```
   
   Optional: Add your GitHub token to increase API rate limits:
   ```
   VITE_GITHUB_TOKEN=your_github_token
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```

5. **Open in browser**
   ```
   http://localhost:5173
   ```

### Build for Production

```bash
npm run build
npm run preview
```

## 📡 Deployment

### Vercel (Recommended)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Netlify
```bash
# Install Netlify CLI
npm i -g netlify-cli

# Deploy
netlify deploy --prod
```

### GitHub Pages
1. Update `vite.config.js` with base URL
2. Run `npm run build`
3. Deploy `dist` folder

## 🎨 Customization

### Content Updates
All portfolio content is in `src/data/content.js`:
- Personal information
- About section
- Projects
- Experience
- Skills

### Styling
- Global styles: `src/styles/index.css`
- Tailwind config: `tailwind.config.js`
- Component-specific styles use Tailwind classes

### Adding New Sections
1. Create component in `src/components/`
2. Export from index.js
3. Import in `App.jsx`

## 📈 Performance

Optimized for:
- **Lighthouse Score > 90**
- Lazy loading for heavy components
- Optimized animations
- Minimal bundle size
- Mobile-first responsive design

## 🔗 Links

- **Portfolio**: [Live Site URL]
- **GitHub**: https://github.com/soulrahulrk
- **LinkedIn**: https://www.linkedin.com/in/rahul-kadyan-409630251/
- **LeetCode**: https://leetcode.com/u/j5Fa0igpi6/

## 📝 For Recruiters

### Quick Navigation
1. **Recruiter View**: Click "Recruiter View" button in navbar for a summarized profile
2. **Projects**: Deep-dive into each project for architecture and impact details
3. **LeetCode**: Verify problem-solving capabilities
4. **Experience**: Review professional timeline
5. **Contact**: Multiple ways to connect

### Key Highlights
- 3+ production-grade AI/ML projects
- 150+ LeetCode problems solved
- Real internship experience at tech companies
- End-to-end ML pipeline expertise
- Strong communication and documentation skills

## 📄 License

MIT License - feel free to use this as a template for your own portfolio.

---

**Built with ❤️ by Rahul Kadyan**

*This portfolio represents real engineering work, not a template. Every line of code was written with intention.*
