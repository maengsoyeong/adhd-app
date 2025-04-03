import React, { useState, useEffect, Fragment } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Disclosure, Menu, Transition } from '@headlessui/react';
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
        { name: 'ADHD 자가진단', href: '/tests/intro' },
        { name: '무료 자가검진', href: '/tests/self-check' },
        { name: '우울증 검사(PHQ-9)', href: '/tests/specific/phq9' },
        { name: '불안장애 검사(GAD-7)', href: '/tests/specific/gad7' },
      ],
    },
    { name: 'Information', href: '/information' },
    { name: 'Community', href: '/community' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <Logo className="h-10 w-auto" />
              <span className="ml-2 text-xl font-bold text-purple-600">퍼즐핏</span>
            </Link>
          </div>
          
          <nav className="flex space-x-8">
            <Link to="/" className="text-gray-700 hover:text-purple-600 px-3 py-2 text-sm font-medium">
              Home
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-purple-600 px-3 py-2 text-sm font-medium">
              About
            </Link>
            <div className="relative group">
              <button className="text-gray-700 hover:text-purple-600 px-3 py-2 text-sm font-medium flex items-center">
                Services
                <svg className="ml-1 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
              <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10 hidden group-hover:block">
                <Link to="/tests/intro" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  ADHD 테스트
                </Link>
                <Link to="/tests/self-check" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  자가진단
                </Link>
              </div>
            </div>
            <Link to="/information" className="text-gray-700 hover:text-purple-600 px-3 py-2 text-sm font-medium">
              Information
            </Link>
            <Link to="/community" className="text-gray-700 hover:text-purple-600 px-3 py-2 text-sm font-medium">
              Community
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-purple-600 px-3 py-2 text-sm font-medium">
              Contact
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default NavBar; 