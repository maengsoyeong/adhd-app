import React from 'react';
import { Link } from 'react-router-dom';

// 아이콘 컴포넌트들
const ServiceIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
  </svg>
);

const CompanyIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
  </svg>
);

const LegalIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
  </svg>
);

const BrandIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#f8f9fa] py-12 font-['Pretendard', 'Noto_Sans_KR', 'sans-serif']">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12">
          <div className="space-y-3">
            <div className="flex items-center mb-5">
              <BrandIcon />
              <h3 className="font-bold text-xl ml-2 text-[#343a40]">퍼즐핏</h3>
            </div>
            <p className="text-[#495057] max-w-xs">
              ADHD 자가진단 및 관리를 위한 플랫폼입니다. 여러분의 더 나은 일상을 함께 만들어갑니다.
            </p>
          </div>

          <div className="space-y-3">
            <div className="flex items-center mb-5">
              <ServiceIcon />
              <h3 className="font-bold text-xl ml-2 text-[#343a40]">서비스</h3>
            </div>
            <ul className="space-y-3">
              <li>
                <Link 
                  to="/survey/intro" 
                  className="text-[#495057] hover:text-purple-600 transition-colors duration-300 flex items-center"
                >
                  <span className="inline-block w-1 h-1 rounded-full bg-purple-400 mr-2"></span>
                  설문조사
                </Link>
              </li>
              <li>
                <Link 
                  to="/self-check" 
                  className="text-[#495057] hover:text-purple-600 transition-colors duration-300 flex items-center"
                >
                  <span className="inline-block w-1 h-1 rounded-full bg-purple-400 mr-2"></span>
                  자가진단
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="space-y-3">
            <div className="flex items-center mb-5">
              <CompanyIcon />
              <h3 className="font-bold text-xl ml-2 text-[#343a40]">회사 정보</h3>
            </div>
            <ul className="space-y-3">
              <li>
                <Link 
                  to="/about" 
                  className="text-[#495057] hover:text-purple-600 transition-colors duration-300 flex items-center"
                >
                  <span className="inline-block w-1 h-1 rounded-full bg-purple-400 mr-2"></span>
                  소개
                </Link>
              </li>
              <li>
                <Link 
                  to="/contact" 
                  className="text-[#495057] hover:text-purple-600 transition-colors duration-300 flex items-center"
                >
                  <span className="inline-block w-1 h-1 rounded-full bg-purple-400 mr-2"></span>
                  연락하기
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="space-y-3">
            <div className="flex items-center mb-5">
              <LegalIcon />
              <h3 className="font-bold text-xl ml-2 text-[#343a40]">법적 정보</h3>
            </div>
            <ul className="space-y-3">
              <li>
                <Link 
                  to="/privacy" 
                  className="text-[#495057] hover:text-purple-600 transition-colors duration-300 flex items-center"
                >
                  <span className="inline-block w-1 h-1 rounded-full bg-purple-400 mr-2"></span>
                  개인정보처리방침
                </Link>
              </li>
              <li>
                <Link 
                  to="/terms" 
                  className="text-[#495057] hover:text-purple-600 transition-colors duration-300 flex items-center"
                >
                  <span className="inline-block w-1 h-1 rounded-full bg-purple-400 mr-2"></span>
                  이용약관
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-10 pt-8 text-center">
          <p className="text-[#6c757d] text-sm">&copy; 2025 퍼즐핏. All rights reserved.</p>
        </div>
      </div>
      
      {/* 추가 스타일 */}
      <style>{`
        @font-face {
          font-family: 'Pretendard';
          src: url('https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard.css');
        }
        
        @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@400;500;700&display=swap');
        
        /* 미세한 리스트 점 애니메이션 */
        .text-[#495057]:hover + span {
          transform: scale(1.5);
          transition: transform 0.3s ease;
        }
      `}</style>
    </footer>
  );
};

export default Footer; 