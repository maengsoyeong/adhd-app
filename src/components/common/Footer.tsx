import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../../contexts/ThemeContext';
import Logo from './Logo';

const Footer: React.FC = () => {
  const { mode } = useTheme();
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className={`${mode === 'dark' ? 'bg-gray-800' : 'bg-gray-50'} pt-16 pb-8`}>
      <div className="container mx-auto px-4">
        {/* 푸터 상단 섹션 - 3개 컬럼 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* 연락처 섹션 */}
          <div>
            <h3 className={`text-lg font-semibold ${mode === 'dark' ? 'text-white' : 'text-gray-800'} mb-4`}>Contact Us</h3>
            <ul className="space-y-2">
              <li className={`${mode === 'dark' ? 'text-gray-300 hover:text-purple-400' : 'text-gray-600 hover:text-purple-600'} transition-colors`}>
                <a href="tel:02-123-4567" className="flex items-center" aria-label="전화번호: 02-123-4567">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                  </svg>
                  02-123-4567
                </a>
              </li>
              <li className={`${mode === 'dark' ? 'text-gray-300 hover:text-purple-400' : 'text-gray-600 hover:text-purple-600'} transition-colors`}>
                <a href="mailto:contact@puzzlefit.com" className="flex items-center" aria-label="이메일: contact@puzzlefit.com">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                  contact@puzzlefit.com
                </a>
              </li>
              <li className={`${mode === 'dark' ? 'text-gray-300 hover:text-purple-400' : 'text-gray-600 hover:text-purple-600'} transition-colors`}>
                <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="flex items-center" aria-label="주소: 서울특별시 강남구 테헤란로 123">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                  서울특별시 강남구 테헤란로 123
                </a>
              </li>
            </ul>
          </div>
          
          {/* 유용한 링크 섹션 */}
          <div>
            <h3 className={`text-lg font-semibold ${mode === 'dark' ? 'text-white' : 'text-gray-800'} mb-4`}>Useful Links</h3>
            <ul className="space-y-2">
              <li className={`${mode === 'dark' ? 'text-gray-300 hover:text-purple-400' : 'text-gray-600 hover:text-purple-600'} transition-colors`}>
                <Link to="/">Home</Link>
              </li>
              <li className={`${mode === 'dark' ? 'text-gray-300 hover:text-purple-400' : 'text-gray-600 hover:text-purple-600'} transition-colors`}>
                <Link to="/about">About</Link>
              </li>
              <li className={`${mode === 'dark' ? 'text-gray-300 hover:text-purple-400' : 'text-gray-600 hover:text-purple-600'} transition-colors`}>
                <Link to="/tests/intro">ADHD 테스트</Link>
              </li>
              <li className={`${mode === 'dark' ? 'text-gray-300 hover:text-purple-400' : 'text-gray-600 hover:text-purple-600'} transition-colors`}>
                <Link to="/information">Information</Link>
              </li>
              <li className={`${mode === 'dark' ? 'text-gray-300 hover:text-purple-400' : 'text-gray-600 hover:text-purple-600'} transition-colors`}>
                <Link to="/contact">Contact</Link>
              </li>
              <li className={`${mode === 'dark' ? 'text-gray-300 hover:text-purple-400' : 'text-gray-600 hover:text-purple-600'} transition-colors`}>
                <Link to="/privacy-policy">개인정보처리방침</Link>
              </li>
            </ul>
          </div>
          
          {/* 소셜 미디어 섹션 */}
          <div>
            <h3 className={`text-lg font-semibold ${mode === 'dark' ? 'text-white' : 'text-gray-800'} mb-4`}>Social</h3>
            <div className="flex space-x-4">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-purple-600 transition-colors" aria-label="Instagram">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-purple-600 transition-colors" aria-label="Twitter">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-purple-600 transition-colors" aria-label="Facebook">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-purple-600 transition-colors" aria-label="YouTube">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
            </div>
            
            <div className="mt-6">
              <h4 className={`text-sm font-semibold ${mode === 'dark' ? 'text-gray-300' : 'text-gray-700'} mb-2`}>뉴스레터 구독</h4>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="이메일 주소" 
                  aria-label="뉴스레터 구독 이메일"
                  className={`px-4 py-2 w-full rounded-l-md border ${mode === 'dark' ? 'bg-gray-700 border-gray-600 text-white' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent`}
                />
                <button 
                  className="bg-purple-600 text-white px-4 py-2 rounded-r-md hover:bg-purple-700 transition-colors"
                  aria-label="뉴스레터 구독하기"
                >
                  구독
                </button>
              </div>
            </div>
          </div>
        </div>
        
        {/* 구분선 */}
        <div className={`border-t ${mode === 'dark' ? 'border-gray-700' : 'border-gray-200'} pt-8`}>
          {/* 푸터 하단 - 로고와 저작권 */}
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <Logo className="h-8" />
            </div>
            <div className={`${mode === 'dark' ? 'text-gray-400' : 'text-gray-500'} text-sm`}>
              © {currentYear} 퍼즐핏. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 