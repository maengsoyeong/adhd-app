import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const HeroSection: React.FC = () => {
  return (
    <div className="relative z-10 max-w-6xl mx-auto px-4 pt-12 md:pt-28">
      <div className="text-center mb-16">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-bold mb-6"
        >
          <span className="text-gray-800">혹시 나도, </span>
          <span className="text-purple-600">성인 ADHD</span>
          <span className="text-gray-800">?!</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl text-gray-600 max-w-3xl mx-auto"
        >
          15분 만에 어디에서나 검사가능! 성인 ADHD 가능성을 확인하고 전문가의 도움을 받아보세요.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-12"
        >
          <Link
            to="/adhd-test/intro"
            className="px-10 py-4 bg-purple-600 text-white font-medium rounded-full text-lg shadow-lg hover:bg-purple-700 hover:shadow-xl transition-all duration-300"
          >
            지금 바로 시작하기
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection; 