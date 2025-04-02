import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../components/NavBar';

const LandingPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-purple-50 overflow-hidden relative">
      {/* 네비게이션 바 */}
      <NavBar />

      {/* 메인 컨텐츠 */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 flex flex-col items-center justify-center relative z-10">
        {/* 중앙 메시지 */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-center mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600">
          혹시, 나도 ADHD?!
        </h1>
        
        <p className="text-xl text-gray-600 text-center max-w-3xl mb-12">
          간단한 자가진단으로 ADHD 증상을 확인하고, 전문가의 도움을 받아보세요.
          당신의 정신 건강을 위한 첫 걸음을 퍼즐핏과 함께 시작하세요.
        </p>

        {/* 시작하기 버튼 */}
        <Link 
          to="/intro" 
          className="px-8 py-4 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 text-lg font-medium"
        >
          지금 바로 시작하기
        </Link>

        {/* 자가검진 바로가기 */}
        <div className="mt-8">
          <Link 
            to="/self-check" 
            className="text-purple-600 hover:text-purple-800 font-medium flex items-center"
          >
            다른 자가검진 보기
            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

        {/* 사용자 수 표시 */}
        <div className="mt-16 flex items-center bg-white rounded-full px-6 py-3 shadow-md">
          <div className="flex -space-x-2 mr-4">
            <div className="w-10 h-10 rounded-full bg-green-400 flex items-center justify-center text-white text-xs">
              😊
            </div>
            <div className="w-10 h-10 rounded-full bg-pink-400 flex items-center justify-center text-white text-xs">
              😄
            </div>
            <div className="w-10 h-10 rounded-full bg-blue-400 flex items-center justify-center text-white text-xs">
              😃
            </div>
          </div>
          <div>
            <span className="text-gray-700 font-medium">80+ 행복한 사용자</span>
            <p className="text-xs text-gray-500">매일 새로운 사용자들이 참여하고 있습니다</p>
          </div>
        </div>
      </div>

      {/* 3D 오브젝트들 */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        {/* 오브젝트들 */}
        <div className="absolute top-[15%] left-[15%] w-32 h-32 bg-gradient-to-br from-orange-400 to-orange-500 rounded-lg transform rotate-45 animate-float-slow opacity-70"></div>
        <div className="absolute top-[15%] right-[15%] w-32 h-32 bg-gradient-to-br from-teal-300 to-teal-400 rounded-[40%] transform rotate-[30deg] animate-float-medium opacity-70"></div>
        <div className="absolute top-[40%] left-[10%] w-40 h-40 bg-gradient-to-br from-purple-400 to-purple-500 rounded-full animate-float opacity-70"></div>
        <div className="absolute bottom-[20%] left-[20%] w-28 h-40 bg-gradient-to-br from-blue-400 to-blue-500 rounded-full animate-float-medium opacity-70"></div>
        <div className="absolute bottom-[20%] right-[20%] w-32 h-32 bg-gradient-to-br from-yellow-300 to-yellow-400 rounded-lg transform rotate-12 animate-float-slow opacity-70"></div>
        <div className="absolute top-[40%] right-[10%] w-36 h-36 bg-gradient-to-br from-lime-300 to-lime-400 rounded-lg transform rotate-45 animate-float opacity-70"></div>
      </div>
      
      {/* 하단 정보 섹션 */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">퍼즐핏이 제공하는 서비스</h2>
            <p className="mt-4 text-lg text-gray-600">
              정신 건강 관리를 위한 다양한 서비스를 경험해보세요
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-purple-50 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 text-xl mb-4">
                🧠
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">ADHD 자가진단</h3>
              <p className="text-gray-600">
                과학적으로 검증된 설문을 통해 ADHD 증상을 확인하고 결과를 분석해드립니다.
              </p>
            </div>
            
            <div className="bg-blue-50 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 text-xl mb-4">
                📊
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">다양한 자가검진</h3>
              <p className="text-gray-600">
                우울증, 불안장애 등 다양한 정신 건강 검사를 무료로 제공합니다.
              </p>
            </div>
            
            <div className="bg-green-50 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600 text-xl mb-4">
                🤝
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">전문가 연결</h3>
              <p className="text-gray-600">
                검사 결과를 바탕으로 적합한 전문가를 추천해드립니다.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage; 