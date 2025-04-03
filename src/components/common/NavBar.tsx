import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Disclosure, Menu } from '@headlessui/react';
import { ChevronUpIcon } from '@heroicons/react/20/solid';

const NavBar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  // 페이지 이동 시 모바일 메뉴 닫기
  React.useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* 로고 */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="text-2xl font-bold text-primary-600">
              퍼즐핏
            </Link>
          </div>

          {/* 데스크탑 메뉴 */}
          <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
            <Link 
              to="/about" 
              className={`inline-flex items-center px-1 pt-1 border-b-2 ${
                location.pathname === '/about' 
                  ? 'border-primary-500 text-gray-900' 
                  : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
              } text-sm font-medium`}
            >
              회사소개
            </Link>
            
            {/* 서비스 드롭다운 */}
            <Menu as="div" className="relative">
              <Menu.Button className="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700 focus:outline-none">
                <span>서비스</span>
                <svg className="ml-1 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </Menu.Button>
              <Menu.Items className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="py-1">
                  <Menu.Item>
                    {({ active }) => (
                      <Link to="/tests/intro" className={`block px-4 py-2 text-sm ${active ? 'bg-gray-100 text-gray-900' : 'text-gray-700'}`}>
                        ADHD 자가진단
                      </Link>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <Link to="/tests/self-check" className={`block px-4 py-2 text-sm ${active ? 'bg-gray-100 text-gray-900' : 'text-gray-700'}`}>
                        무료 자가검진
                      </Link>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <Link to="/tests/specific/phq9" className={`block px-4 py-2 text-sm ${active ? 'bg-gray-100 text-gray-900' : 'text-gray-700'}`}>
                        우울증 검사(PHQ-9)
                      </Link>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <Link to="/tests/specific/gad7" className={`block px-4 py-2 text-sm ${active ? 'bg-gray-100 text-gray-900' : 'text-gray-700'}`}>
                        불안장애 검사(GAD-7)
                      </Link>
                    )}
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Menu>

            {/* 문의 드롭다운 */}
            <Menu as="div" className="relative">
              <Menu.Button className="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700 focus:outline-none">
                <span>문의하기</span>
                <svg className="ml-1 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </Menu.Button>
              <Menu.Items className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="py-1">
                  <Menu.Item>
                    {({ active }) => (
                      <Link to="/contact" className={`block px-4 py-2 text-sm ${active ? 'bg-gray-100 text-gray-900' : 'text-gray-700'}`}>
                        문의하기
                      </Link>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <Link to="/education-inquiry" className={`block px-4 py-2 text-sm ${active ? 'bg-gray-100 text-gray-900' : 'text-gray-700'}`}>
                        교육 문의
                      </Link>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <Link to="/corporate-inquiry" className={`block px-4 py-2 text-sm ${active ? 'bg-gray-100 text-gray-900' : 'text-gray-700'}`}>
                        기업 문의
                      </Link>
                    )}
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Menu>
          </div>

          {/* 모바일 메뉴 버튼 */}
          <div className="-mr-2 flex items-center sm:hidden">
            <button 
              onClick={toggleMobileMenu} 
              type="button" 
              className="bg-white inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500" 
              aria-controls="mobile-menu" 
              aria-expanded="false"
            >
              <span className="sr-only">메뉴 열기</span>
              {/* 메뉴 닫힘 아이콘 */}
              <svg className={`${isMobileMenuOpen ? 'hidden' : 'block'} h-6 w-6`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              {/* 메뉴 열림 아이콘 */}
              <svg className={`${isMobileMenuOpen ? 'block' : 'hidden'} h-6 w-6`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* 모바일 메뉴 */}
      <div className={`${isMobileMenuOpen ? 'block' : 'hidden'} sm:hidden`} id="mobile-menu">
        <div className="pt-2 pb-3 space-y-1">
          <Link 
            to="/about" 
            className={`block pl-3 pr-4 py-2 border-l-4 ${
              location.pathname === '/about' 
                ? 'border-primary-500 text-primary-700 bg-primary-50' 
                : 'border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800'
            } text-base font-medium`}
          >
            회사소개
          </Link>
          
          {/* 모바일 서비스 링크들 */}
          <Disclosure> 
            {({ open }) => (
              <>
                <Disclosure.Button className="w-full flex justify-between items-center pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800">
                  <span>서비스</span>
                  <ChevronUpIcon className={`${open ? 'transform rotate-180' : ''} w-5 h-5 text-gray-500`} />
                </Disclosure.Button>
                <Disclosure.Panel className="pl-8 pr-4 py-2 space-y-1">
                  <Link to="/tests/intro" className="block text-sm text-gray-600 hover:bg-gray-50 hover:text-gray-800">ADHD 자가진단</Link>
                  <Link to="/tests/self-check" className="block text-sm text-gray-600 hover:bg-gray-50 hover:text-gray-800">무료 자가검진</Link>
                  <Link to="/tests/specific/phq9" className="block text-sm text-gray-600 hover:bg-gray-50 hover:text-gray-800">우울증 검사(PHQ-9)</Link>
                  <Link to="/tests/specific/gad7" className="block text-sm text-gray-600 hover:bg-gray-50 hover:text-gray-800">불안장애 검사(GAD-7)</Link>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
          
          {/* 모바일 문의 링크들 */}
          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button className="w-full flex justify-between items-center pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800">
                  <span>문의하기</span>
                  <ChevronUpIcon className={`${open ? 'transform rotate-180' : ''} w-5 h-5 text-gray-500`} />
                </Disclosure.Button>
                <Disclosure.Panel className="pl-8 pr-4 py-2 space-y-1">
                  <Link to="/contact" className="block text-sm text-gray-600 hover:bg-gray-50 hover:text-gray-800">문의하기</Link>
                  <Link to="/education-inquiry" className="block text-sm text-gray-600 hover:bg-gray-50 hover:text-gray-800">교육 문의</Link>
                  <Link to="/corporate-inquiry" className="block text-sm text-gray-600 hover:bg-gray-50 hover:text-gray-800">기업 문의</Link>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        </div>
      </div>
    </nav>
  );
};

export default NavBar; 