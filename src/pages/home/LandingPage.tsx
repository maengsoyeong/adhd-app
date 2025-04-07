import React from 'react';
import { Link } from 'react-router-dom';
import FeaturesSection from './components/FeaturesSection';

const LandingPage: React.FC = () => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* 배경 그라데이션 효과 */}
      <div className="absolute -left-1/4 top-1/3 w-1/2 h-1/2 rounded-full bg-orange-300 opacity-20 blur-3xl"></div>
      <div className="absolute left-1/2 top-1/2 w-1/2 h-1/2 rounded-full bg-purple-400 opacity-20 blur-3xl"></div>
      <div className="absolute right-0 bottom-0 w-1/2 h-1/2 rounded-full bg-green-300 opacity-20 blur-3xl"></div>
      
      {/* 콘텐츠 영역 */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 pt-12 md:pt-28">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="text-gray-800">혹시 나도, </span>
            <span className="text-purple-600">성인 ADHD</span>
            <span className="text-gray-800">?!</span>
          </h1>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            15분 만에 어디에서나 검사가능! 성인 ADHD 가능성을 확인하고 전문가의 도움을 받아보세요.
          </p>
          
          <div className="mt-12">
            <Link
              to="/adhd-test/intro"
              className="px-10 py-4 bg-purple-600 text-white font-medium rounded-full text-lg shadow-lg hover:bg-purple-700 hover:shadow-xl transition-all duration-300"
            >
              지금 바로 시작하기
            </Link>
          </div>
        </div>
        
        {/* FeaturesSection 컴포넌트 삽입 */}
        <FeaturesSection />

        
        {/* 하단 CTA */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
            성인 ADHD, 제대로 알고 관리하세요
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            정확한 자가진단은 전문가 상담의 첫 걸음입니다. 지금 시작해보세요.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="/survey/intro" 
              className="px-6 py-3 bg-purple-600 text-white font-medium rounded-lg hover:bg-purple-700 transition-colors"
            >
              테스트 시작하기
            </a>
            <a 
              href="/self-check" 
              className="px-6 py-3 bg-white text-purple-600 font-medium border border-purple-200 rounded-lg hover:border-purple-400 transition-colors"
            >
              자가진단 방법 알아보기
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage; 