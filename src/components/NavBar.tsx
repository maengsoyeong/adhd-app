import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const NavBar: React.FC = () => {
  const [showServices, setShowServices] = useState(false);
  const [showContact, setShowContact] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const servicesButtonRef = useRef<HTMLButtonElement>(null);
  const contactButtonRef = useRef<HTMLButtonElement>(null);
  const location = useLocation();
  
  useEffect(() => {
    if (servicesButtonRef.current) {
      servicesButtonRef.current.setAttribute('aria-expanded', showServices ? 'true' : 'false');
    }
  }, [showServices]);
  
  useEffect(() => {
    if (contactButtonRef.current) {
      contactButtonRef.current.setAttribute('aria-expanded', showContact ? 'true' : 'false');
    }
  }, [showContact]);
  
  // 페이지 변경 시 모바일 메뉴 닫기
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setShowServices(false);
    setShowContact(false);
  }, [location.pathname]);
  
  // 현재 경로에 따라 활성화된 링크 스타일 적용
  const isActive = (path: string) => {
    return location.pathname === path ? 'text-purple-600 font-medium' : 'text-gray-700 hover:text-purple-600';
  };
  
  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <span className="text-2xl font-bold text-purple-600">퍼즐핏</span>
            </Link>
          </div>
          
          {/* 데스크톱 메뉴 */}
          <div className="hidden md:ml-6 md:flex md:items-center md:space-x-4">
            <Link to="/" className={`px-3 py-2 rounded-md text-sm font-medium ${isActive('/')}`}>
              홈
            </Link>
            <Link to="/about" className={`px-3 py-2 rounded-md text-sm font-medium ${isActive('/about')}`}>
              소개
            </Link>
            
            {/* 서비스 드롭다운 */}
            <div className="relative">
              <button 
                ref={servicesButtonRef}
                className={`px-3 py-2 rounded-md text-sm font-medium flex items-center ${showServices ? 'text-purple-600' : 'text-gray-700 hover:text-purple-600'}`}
                onClick={() => {
                  setShowServices(!showServices);
                  setShowContact(false);
                }}
                aria-expanded="false"
                aria-haspopup="true"
              >
                서비스
                <svg className={`w-4 h-4 ml-1 transition-transform ${showServices ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {showServices && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 py-1 z-50 transition-all duration-200 ease-in-out">
                  <Link 
                    to="/intro" 
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-50"
                    onClick={() => setShowServices(false)}
                  >
                    ADHD 자가진단
                  </Link>
                  <Link 
                    to="/self-check" 
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-50"
                    onClick={() => setShowServices(false)}
                  >
                    무료 자가검진
                  </Link>
                </div>
              )}
            </div>
            
            {/* Contact 드롭다운 */}
            <div className="relative">
              <button 
                ref={contactButtonRef}
                className={`px-3 py-2 rounded-md text-sm font-medium flex items-center ${showContact ? 'text-purple-600' : 'text-gray-700 hover:text-purple-600'}`}
                onClick={() => {
                  setShowContact(!showContact);
                  setShowServices(false);
                }}
                aria-expanded="false"
                aria-haspopup="true"
              >
                문의하기
                <svg className={`w-4 h-4 ml-1 transition-transform ${showContact ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {showContact && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 py-1 z-50 transition-all duration-200 ease-in-out">
                  <Link 
                    to="/contact" 
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-50"
                    onClick={() => setShowContact(false)}
                  >
                    일반 문의
                  </Link>
                  <Link 
                    to="/education-inquiry" 
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-50"
                    onClick={() => setShowContact(false)}
                  >
                    교육 문의
                  </Link>
                  <Link 
                    to="/corporate-inquiry" 
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-50"
                    onClick={() => setShowContact(false)}
                  >
                    기업 문의
                  </Link>
                </div>
              )}
            </div>
          </div>
          
          {/* 모바일 메뉴 버튼 */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-purple-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-purple-500"
              aria-expanded="false"
            >
              <span className="sr-only">메뉴 열기</span>
              {isMobileMenuOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
      
      {/* 모바일 메뉴 */}
      <div className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link to="/" className={`block px-3 py-2 rounded-md text-base font-medium ${isActive('/')}`}>
            홈
          </Link>
          <Link to="/about" className={`block px-3 py-2 rounded-md text-base font-medium ${isActive('/about')}`}>
            소개
          </Link>
          
          <button
            className="w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-purple-600 hover:bg-gray-100"
            onClick={() => setShowServices(!showServices)}
          >
            서비스
            <svg className={`inline-block w-4 h-4 ml-1 transition-transform ${showServices ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          
          {showServices && (
            <div className="pl-4 space-y-1">
              <Link to="/intro" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-purple-600 hover:bg-gray-100">
                ADHD 자가진단
              </Link>
              <Link to="/self-check" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-purple-600 hover:bg-gray-100">
                무료 자가검진
              </Link>
            </div>
          )}
          
          <button
            className="w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-purple-600 hover:bg-gray-100"
            onClick={() => setShowContact(!showContact)}
          >
            문의하기
            <svg className={`inline-block w-4 h-4 ml-1 transition-transform ${showContact ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          
          {showContact && (
            <div className="pl-4 space-y-1">
              <Link to="/contact" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-purple-600 hover:bg-gray-100">
                일반 문의
              </Link>
              <Link to="/education-inquiry" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-purple-600 hover:bg-gray-100">
                교육 문의
              </Link>
              <Link to="/corporate-inquiry" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-purple-600 hover:bg-gray-100">
                기업 문의
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavBar; 