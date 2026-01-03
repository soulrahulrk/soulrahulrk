import { useState, useEffect } from 'react';
import { Navbar, Footer } from './components/layout';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import LeetCode from './components/LeetCode';
import Experience from './components/Experience';
import RecruiterMode from './components/RecruiterMode';
import Contact from './components/Contact';

function App() {
  const [isRecruiterMode, setIsRecruiterMode] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Simulate initial loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  // Prevent scroll when recruiter mode is open
  useEffect(() => {
    if (isRecruiterMode) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isRecruiterMode]);

  // Loading Screen
  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-surface-950 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center mx-auto mb-4 animate-pulse">
            <span className="text-white font-bold text-2xl">RK</span>
          </div>
          <div className="w-32 h-1 rounded-full bg-surface-800 overflow-hidden">
            <div className="h-full w-full bg-gradient-to-r from-primary-500 to-accent-500 animate-shimmer" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-surface-950">
      {/* Noise Overlay */}
      <div className="noise-overlay" />
      
      {/* Navigation */}
      <Navbar 
        onRecruiterModeToggle={() => setIsRecruiterMode(!isRecruiterMode)}
        isRecruiterMode={isRecruiterMode}
      />
      
      {/* Main Content */}
      <main>
        <Hero />
        <About />
        <Projects />
        <LeetCode />
        <Experience />
        <Contact />
      </main>
      
      {/* Footer */}
      <Footer />
      
      {/* Recruiter Mode Modal */}
      <RecruiterMode 
        isOpen={isRecruiterMode} 
        onClose={() => setIsRecruiterMode(false)} 
      />
    </div>
  );
}

export default App;
