import React from 'react';
import { motion } from 'framer-motion';
import HeroSection from './components/HeroSection';
import ProblemAwareness from './components/ProblemAwareness';
import FeaturesSection from './components/FeaturesSection';
import CTASection from './components/CTASection';

const LandingPage: React.FC = () => {
  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-b from-purple-50 via-white to-purple-50">
      {/* 배경 그라데이션 효과 */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.2 }}
        transition={{ duration: 2 }}
        className="absolute -left-1/4 top-1/3 w-1/2 h-1/2 rounded-full bg-orange-300 blur-3xl"
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.2 }}
        transition={{ duration: 2, delay: 0.5 }}
        className="absolute left-1/2 top-1/2 w-1/2 h-1/2 rounded-full bg-purple-400 blur-3xl"
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.2 }}
        transition={{ duration: 2, delay: 1 }}
        className="absolute right-0 bottom-0 w-1/2 h-1/2 rounded-full bg-green-300 blur-3xl"
      />
      
      <div className="relative z-10">
        <HeroSection />
        <ProblemAwareness />
        <FeaturesSection />
        <CTASection />
      </div>
    </div>
  );
};

export default LandingPage;
