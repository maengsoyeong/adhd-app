import React from 'react';

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
            <a 
              href="/survey/intro" 
              className="px-10 py-4 bg-purple-600 text-white font-medium rounded-full text-lg shadow-lg hover:bg-purple-700 hover:shadow-xl transition-all duration-300"
            >
              지금 바로 시작하기
            </a>
          </div>
        </div>
        
        {/* 특징 섹션 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-24">
          <div className="bg-white bg-opacity-80 backdrop-blur-sm p-8 rounded-2xl shadow-sm">
            <div className="w-14 h-14 bg-purple-100 rounded-full flex items-center justify-center mb-5 mx-auto">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="text-xl font-medium text-center mb-3">정확한 평가</h3>
            <p className="text-gray-600 text-center">성인에게 맞춤형 문항으로 증상을 체계적으로 평가합니다.</p>
          </div>
          
          <div className="bg-white bg-opacity-80 backdrop-blur-sm p-8 rounded-2xl shadow-sm">
            <div className="w-14 h-14 bg-purple-100 rounded-full flex items-center justify-center mb-5 mx-auto">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
            </div>
            <h3 className="text-xl font-medium text-center mb-3">빠른 진단</h3>
            <p className="text-gray-600 text-center">단 15분 만에 완료되는 간단한 자가진단 테스트입니다.</p>
          </div>
          
          <div className="bg-white bg-opacity-80 backdrop-blur-sm p-8 rounded-2xl shadow-sm">
            <div className="w-14 h-14 bg-purple-100 rounded-full flex items-center justify-center mb-5 mx-auto">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-medium text-center mb-3">맞춤 조언</h3>
            <p className="text-gray-600 text-center">결과에 따른 개인별 맞춤형 조언과 도움이 되는 자료를 제공합니다.</p>
          </div>
        </div>
        
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