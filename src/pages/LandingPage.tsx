import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const LandingPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white overflow-hidden">
      {/* 헤더 섹션 */}
      <div className="relative">
        {/* 배경 장식 요소들 */}
        <div className="absolute top-20 right-10 w-72 h-72 rounded-full bg-teal-300 opacity-80 blur-xl"></div>
        <div className="absolute top-40 left-0 w-96 h-96 rounded-full bg-orange-400 opacity-80 blur-xl"></div>
        <div className="absolute bottom-0 left-40 w-80 h-80 rounded-full bg-purple-500 opacity-70 blur-xl"></div>
        <div className="absolute bottom-20 right-20 w-64 h-64 rounded-full bg-lime-300 opacity-80 blur-xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 rounded-full bg-blue-400 opacity-60 blur-xl"></div>
        
        {/* 메인 콘텐츠 */}
        <div className="relative z-10 container mx-auto px-4 py-20 md:py-32">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-gray-800">
              혹시, 나도 <span className="text-purple-600">ADHD</span>?!
            </h1>
            <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto">
              5분 만에 완료되는 간단한 테스트로 ADHD 성향을 확인하고 전문가의 도움을 받아보세요.
            </p>
            <Link to="/tests/intro">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-purple-600 text-white hover:bg-purple-700 text-lg font-semibold py-4 px-10 rounded-full shadow-lg transition duration-300"
              >
                지금 바로 시작하기
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </div>
      
      {/* 특징 섹션 */}
      <div className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-800">
            퍼즐핏이 <span className="text-purple-600">특별한 이유</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <motion.div 
              whileHover={{ y: -10 }}
              className="bg-white p-8 rounded-2xl shadow-lg"
            >
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-center mb-4 text-gray-800">전문가 검증 테스트</h3>
              <p className="text-gray-600 text-center">
                정신건강 전문가들이 개발하고 검증한 테스트로 신뢰할 수 있는 결과를 제공합니다.
              </p>
            </motion.div>
            
            <motion.div 
              whileHover={{ y: -10 }}
              className="bg-white p-8 rounded-2xl shadow-lg"
            >
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-center mb-4 text-gray-800">맞춤형 솔루션</h3>
              <p className="text-gray-600 text-center">
                테스트 결과에 따라 개인에게 맞는 관리 방법과 전문가 연결 서비스를 제공합니다.
              </p>
            </motion.div>
            
            <motion.div 
              whileHover={{ y: -10 }}
              className="bg-white p-8 rounded-2xl shadow-lg"
            >
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-center mb-4 text-gray-800">커뮤니티 지원</h3>
              <p className="text-gray-600 text-center">
                같은 고민을 가진 사람들과 경험을 나누고 함께 성장할 수 있는 커뮤니티를 제공합니다.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
      
      {/* 통계 섹션 */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-center">
            <div className="flex items-center space-x-2 mx-8 my-4">
              <div className="flex -space-x-2">
                <div className="w-12 h-12 rounded-full bg-green-400 flex items-center justify-center text-white text-xl">
                  😊
                </div>
                <div className="w-12 h-12 rounded-full bg-pink-400 flex items-center justify-center text-white text-xl">
                  😍
                </div>
                <div className="w-12 h-12 rounded-full bg-orange-400 flex items-center justify-center text-white text-xl">
                  🤗
                </div>
              </div>
              <div className="text-2xl font-bold text-gray-800">80+ Happy Clients</div>
            </div>
            
            <div className="mx-8 my-4">
              <div className="text-2xl font-bold text-gray-800">5,000+ 테스트 완료</div>
            </div>
            
            <div className="mx-8 my-4">
              <div className="text-2xl font-bold text-gray-800">20+ 전문가 협력</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* CTA 섹션 */}
      <div className="py-20 bg-purple-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            지금 바로 ADHD 테스트를 시작해보세요
          </h2>
          <p className="text-xl text-purple-100 mb-10 max-w-3xl mx-auto">
            5분 만에 완료되는 간단한 테스트로 ADHD 성향을 확인하고 전문가의 도움을 받아보세요.
          </p>
          <Link to="/tests/intro">
            <button className="bg-white text-purple-600 hover:bg-gray-100 text-lg font-semibold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-1">
              무료 테스트 시작하기
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LandingPage; 