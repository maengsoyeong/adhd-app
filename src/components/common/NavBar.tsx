import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDownIcon, Bars3Icon as MenuIcon, XMarkIcon as XIcon } from '@heroicons/react/24/outline';
import Logo from './Logo';

const NavBar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  // 스크롤 감지 최적화
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setIsScrolled(scrolled);
      }
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isScrolled]);

  // 페이지 이동 시 모바일 메뉴 닫기
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  // 네비게이션 링크 정의
  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    {
      name: 'Services',
      href: '#',
      children: [
        { name: 'ADHD 테스트', href: '/tests/intro' },
        { name: '자가진단', href: '/tests/self-check' },
      ],
    },
    { name: 'Information', href: '/information' },
    { name: 'Community', href: '/community' },
    { name: 'Contact', href: '/contact' },
  ];

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header className={`bg-white shadow-sm sticky top-0 z-50 ${isScrolled ? 'shadow-md' : ''}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <Logo className="h-10 w-auto" />
            </Link>
          </div>
          
          {/* 데스크톱 메뉴 */}
          <nav className="hidden md:flex space-x-8">
            <Link to="/" className={`text-gray-700 hover:text-purple-600 px-3 py-2 text-sm font-medium ${isActive('/') ? 'text-purple-600 border-b-2 border-purple-600' : ''}`}>
              Home
            </Link>
            <Link to="/about" className={`text-gray-700 hover:text-purple-600 px-3 py-2 text-sm font-medium ${isActive('/about') ? 'text-purple-600 border-b-2 border-purple-600' : ''}`}>
              About
            </Link>
            <div className="relative group">
              <button className={`text-gray-700 hover:text-purple-600 px-3 py-2 text-sm font-medium flex items-center ${isActive('/tests/intro') || isActive('/tests/self-check') ? 'text-purple-600 border-b-2 border-purple-600' : ''}`}>
                Services
                <svg className="ml-1 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
              <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10 hidden group-hover:block">
                <Link to="/tests/intro" className={`block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 ${isActive('/tests/intro') ? 'text-purple-600' : ''}`}>
                  ADHD 테스트
                </Link>
                <Link to="/tests/self-check" className={`block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 ${isActive('/tests/self-check') ? 'text-purple-600' : ''}`}>
                  자가진단
                </Link>
              </div>
            </div>
            <Link to="/information" className={`text-gray-700 hover:text-purple-600 px-3 py-2 text-sm font-medium ${isActive('/information') ? 'text-purple-600 border-b-2 border-purple-600' : ''}`}>
              Information
            </Link>
            <Link to="/community" className={`text-gray-700 hover:text-purple-600 px-3 py-2 text-sm font-medium ${isActive('/community') ? 'text-purple-600 border-b-2 border-purple-600' : ''}`}>
              Community
            </Link>
            <Link to="/contact" className={`text-gray-700 hover:text-purple-600 px-3 py-2 text-sm font-medium ${isActive('/contact') ? 'text-purple-600 border-b-2 border-purple-600' : ''}`}>
              Contact
            </Link>
            <Link to="/login" className="ml-4 px-4 py-2 text-sm font-medium text-white bg-purple-600 rounded-full hover:bg-purple-700 transition-colors">
              Login
            </Link>
          </nav>
          
          {/* 모바일 메뉴 버튼 */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMobileMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-purple-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-purple-500"
              aria-expanded="false"
            >
              <span className="sr-only">메뉴 열기</span>
              {isMobileMenuOpen ? (
                <XIcon className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <MenuIcon className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>
      
      {/* 모바일 메뉴 */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white border-t border-gray-200"
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link 
                to="/" 
                className={`block px-3 py-2 rounded-md text-base font-medium ${isActive('/') ? 'text-white bg-purple-600' : 'text-gray-700 hover:bg-gray-100 hover:text-purple-600'}`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/about" 
                className={`block px-3 py-2 rounded-md text-base font-medium ${isActive('/about') ? 'text-white bg-purple-600' : 'text-gray-700 hover:bg-gray-100 hover:text-purple-600'}`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </Link>
              
              {/* 모바일 서비스 메뉴 */}
              <div className="relative">
                <div className={`block px-3 py-2 rounded-md text-base font-medium text-gray-700`}>
                  Services
                </div>
                <div className="pl-4">
                  <Link 
                    to="/tests/intro" 
                    className={`block px-3 py-2 rounded-md text-base font-medium ${isActive('/tests/intro') ? 'text-white bg-purple-600' : 'text-gray-700 hover:bg-gray-100 hover:text-purple-600'}`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    ADHD 테스트
                  </Link>
                  <Link 
                    to="/tests/self-check" 
                    className={`block px-3 py-2 rounded-md text-base font-medium ${isActive('/tests/self-check') ? 'text-white bg-purple-600' : 'text-gray-700 hover:bg-gray-100 hover:text-purple-600'}`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    자가진단
                  </Link>
                </div>
              </div>
              
              <Link 
                to="/information" 
                className={`block px-3 py-2 rounded-md text-base font-medium ${isActive('/information') ? 'text-white bg-purple-600' : 'text-gray-700 hover:bg-gray-100 hover:text-purple-600'}`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Information
              </Link>
              <Link 
                to="/community" 
                className={`block px-3 py-2 rounded-md text-base font-medium ${isActive('/community') ? 'text-white bg-purple-600' : 'text-gray-700 hover:bg-gray-100 hover:text-purple-600'}`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Community
              </Link>
              <Link 
                to="/contact" 
                className={`block px-3 py-2 rounded-md text-base font-medium ${isActive('/contact') ? 'text-white bg-purple-600' : 'text-gray-700 hover:bg-gray-100 hover:text-purple-600'}`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </Link>
              <Link 
                to="/login" 
                className="block px-3 py-2 rounded-md text-base font-medium text-white bg-purple-600 hover:bg-purple-700"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Login
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default NavBar; 