import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../../contexts/ThemeContext';
import Logo from './Logo';

// 드롭다운 메뉴 아이템 컴포넌트
const DropdownMenuItem = ({ item, isActive }) => (
  <Link
    to={item.path}
    className={`block px-4 py-2 text-sm ${
      isActive(item.path)
        ? 'bg-gray-100 text-gray-900 dark:bg-gray-700 dark:text-white'
        : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-white'
    }`}
  >
    {item.name}
  </Link>
);

// 네비게이션 링크 컴포넌트
const NavLink = ({ link, isActive, isDark }) => {
  if (link.dropdown) {
    return (
      <div className="relative group">
        <button className={`flex items-center px-3 py-2 rounded-md text-sm font-medium ${
          isDark
            ? 'text-gray-300 hover:text-white hover:bg-gray-800'
            : 'text-gray-700 hover:text-gray-900 hover:bg-gray-100'
        }`}>
          {link.name}
          <svg 
            className="ml-1 h-4 w-4 transition-transform duration-200 group-hover:rotate-180" 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 20 20" 
            fill="currentColor"
          >
            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </button>
        
        {/* 드롭다운 메뉴 */}
        <div className="absolute left-0 mt-1 w-48 origin-top-left rounded-md shadow-lg overflow-hidden opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
          <div className={`py-1 ${isDark ? 'bg-gray-800' : 'bg-white'}`}>
            {link.dropdown.map((item) => (
              <DropdownMenuItem key={item.name} item={item} isActive={isActive} />
            ))}
          </div>
        </div>
      </div>
    );
  }
  
  return (
    <Link
      to={link.path}
      className={`px-3 py-2 rounded-md text-sm font-medium ${
        isActive(link.path)
          ? isDark
            ? 'bg-gray-800 text-white'
            : 'bg-gray-100 text-gray-900'
          : isDark
            ? 'text-gray-300 hover:text-white hover:bg-gray-800'
            : 'text-gray-700 hover:text-gray-900 hover:bg-gray-100'
      }`}
    >
      {link.name}
    </Link>
  );
};

// 모바일 메뉴 아이템 컴포넌트
const MobileMenuItem = ({ link, isActive, isDark }) => {
  if (link.dropdown) {
    return (
      <div className="space-y-1">
        <div className={`px-3 py-2 rounded-md text-base font-medium ${
          isDark ? 'text-gray-300' : 'text-gray-700'
        }`}>
          {link.name}
        </div>
        <div className="pl-4 space-y-1">
          {link.dropdown.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                isActive(item.path)
                  ? isDark
                    ? 'bg-gray-800 text-white'
                    : 'bg-gray-100 text-gray-900'
                  : isDark
                    ? 'text-gray-300 hover:text-white hover:bg-gray-700'
                    : 'text-gray-700 hover:text-gray-900 hover:bg-gray-100'
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    );
  }
  
  return (
    <Link
      to={link.path}
      className={`block px-3 py-2 rounded-md text-base font-medium ${
        isActive(link.path)
          ? isDark
            ? 'bg-gray-800 text-white'
            : 'bg-gray-100 text-gray-900'
          : isDark
            ? 'text-gray-300 hover:text-white hover:bg-gray-700'
            : 'text-gray-700 hover:text-gray-900 hover:bg-gray-100'
      }`}
    >
      {link.name}
    </Link>
  );
};

// 테마 토글 버튼 컴포넌트 수정
const ThemeToggle = () => {
  const { mode, toggleMode } = useTheme();
  const isDark = mode === 'dark';
  
  // 현재 테마 상태에 따른 아이콘 및 스타일 결정
  let buttonClass = '';
  let buttonLabel = '';
  let icon = null;

  if (isDark) {
    // 다크 모드 (별빛 포함)
    buttonClass = 'bg-indigo-700 text-white hover:bg-indigo-800';
    buttonLabel = '라이트 모드로 전환';
    icon = (
      <motion.svg 
        whileHover={{ scale: 1.1 }}
        className="w-5 h-5" 
        fill="none" 
        stroke="currentColor" 
        viewBox="0 0 24 24" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </motion.svg>
    );
  } else {
    // 라이트 모드
    buttonClass = 'bg-gray-100 text-gray-700 hover:bg-gray-200';
    buttonLabel = '다크 모드로 전환';
    icon = (
      <motion.svg 
        initial={{ rotate: 30, opacity: 0 }}
        animate={{ rotate: 0, opacity: 1 }}
        className="w-5 h-5" 
        fill="none" 
        stroke="currentColor" 
        viewBox="0 0 24 24" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path>
      </motion.svg>
    );
  }

  return (
    <button
      onClick={toggleMode}
      className={`p-2 rounded-full ${buttonClass}`}
      aria-label={buttonLabel}
    >
      {icon}
    </button>
  );
};

/**
 * 애플리케이션 네비게이션 바 컴포넌트
 */
const NavBar: React.FC = () => {
  const { mode } = useTheme();
  const isDark = mode === 'dark';
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // 스크롤 감지
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 페이지 변경 시 모바일 메뉴 닫기
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  // 네비게이션 링크 정의
  const navLinks = [
    { name: '홈', path: '/' },
    { name: '소개', path: '/about' },
    { 
      name: '테스트', 
      path: '/tests',
      dropdown: [
        { name: 'ADHD 테스트', path: '/tests/intro' },
        { name: '자가진단', path: '/tests/self-check' }
      ]
    },
    { name: '정보', path: '/information' },
    { name: '커뮤니티', path: '/community' },
    { name: '문의', path: '/contact' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isDark 
          ? 'bg-gray-900 bg-opacity-80' 
          : 'bg-white'
      } ${
        isScrolled 
          ? isDark 
            ? 'bg-opacity-95 backdrop-blur-sm' 
            : 'bg-opacity-95 backdrop-blur-sm shadow-sm'
          : ''
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* 로고 */}
          <Logo size="md" />
          
          {/* 데스크톱 메뉴 */}
          <nav className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <NavLink 
                key={link.name} 
                link={link} 
                isActive={isActive} 
                isDark={isDark} 
              />
            ))}
            
            {/* 테마 토글 버튼 */}
            <ThemeToggle />
            
            {/* 로그인 버튼 */}
            <Link 
              to="/login" 
              className="ml-4 px-4 py-2 rounded-full text-sm font-medium bg-purple-600 text-white hover:bg-purple-700 transition-colors"
            >
              로그인
            </Link>
          </nav>
          
          {/* 모바일 메뉴 버튼 */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2 rounded-md transition-colors ${
                isDark
                  ? 'text-gray-400 hover:text-white hover:bg-gray-800'
                  : 'text-gray-500 hover:text-gray-900 hover:bg-gray-100'
              }`}
              aria-label="메뉴 토글"
              aria-controls="mobile-menu"
              aria-expanded={isMobileMenuOpen ? "true" : "false"}
            >
              <span className="sr-only">메뉴 열기</span>
              {isMobileMenuOpen ? (
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
      
      {/* 모바일 메뉴 */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className={`md:hidden ${isDark ? 'bg-gray-900 border-gray-800' : 'bg-white border-gray-200'} border-t`}
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navLinks.map((link) => (
                <MobileMenuItem 
                  key={link.name} 
                  link={link} 
                  isActive={isActive} 
                  isDark={isDark} 
                />
              ))}
              
              <div className={`pt-4 pb-3 border-t ${isDark ? 'border-gray-700' : 'border-gray-200'}`}>
                <div className="flex items-center justify-between px-3">
                  <ThemeToggle />
                  <Link 
                    to="/login" 
                    className="px-4 py-2 rounded-full text-sm font-medium bg-purple-600 text-white hover:bg-purple-700 transition-colors"
                  >
                    로그인
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default NavBar; 