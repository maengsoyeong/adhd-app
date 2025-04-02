import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../components/NavBar';

const LandingPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white overflow-hidden relative">
      {/* 네비게이션 바 */}
      <NavBar />

      {/* 메인 컨텐츠 */}
      <div className="max-w-6xl mx-auto px-4 py-16 flex flex-col items-center justify-center relative z-10">
        {/* 중앙 메시지 */}
        <h1 className="text-5xl font-bold text-center mb-12">
          혹시, 나도 ADHD?!
        </h1>

        {/* 시작하기 버튼 */}
        <Link 
          to="/intro" 
          className="px-8 py-4 bg-white text-gray-800 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-lg font-medium"
        >
          지금 바로 시작하기
        </Link>

        {/* 사용자 수 표시 */}
        <div className="mt-16 flex items-center">
          <div className="flex -space-x-2">
            <div className="w-10 h-10 rounded-full bg-green-400 flex items-center justify-center text-white text-xs">
              😊
            </div>
            <div className="w-10 h-10 rounded-full bg-pink-400 flex items-center justify-center text-white text-xs">
              😄
            </div>
            <div className="w-10 h-10 rounded-full bg-green-400 flex items-center justify-center text-white text-xs">
              😃
            </div>
          </div>
          <span className="ml-3 text-gray-700">80+ Happy Clients</span>
        </div>
      </div>

      {/* 3D 오브젝트들 */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        {/* 오브젝트들 */}
        <div className="absolute top-[15%] left-[15%] w-32 h-32 bg-gradient-to-br from-orange-400 to-orange-500 rounded-lg transform rotate-45 animate-float-slow"></div>
        <div className="absolute top-[15%] right-[15%] w-32 h-32 bg-gradient-to-br from-teal-300 to-teal-400 rounded-[40%] transform rotate-[30deg] animate-float-medium"></div>
        <div className="absolute top-[40%] left-[10%] w-40 h-40 bg-gradient-to-br from-purple-400 to-purple-500 rounded-full animate-float"></div>
        <div className="absolute bottom-[20%] left-[20%] w-28 h-40 bg-gradient-to-br from-blue-400 to-blue-500 rounded-full animate-float-medium"></div>
        <div className="absolute bottom-[20%] right-[20%] w-32 h-32 bg-gradient-to-br from-yellow-300 to-yellow-400 rounded-lg transform rotate-12 animate-float-slow"></div>
        <div className="absolute top-[40%] right-[10%] w-36 h-36 bg-gradient-to-br from-lime-300 to-lime-400 rounded-lg transform rotate-45 animate-float"></div>
      </div>
    </div>
  );
};

export default LandingPage; 