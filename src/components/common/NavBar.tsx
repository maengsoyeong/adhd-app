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

  // 네비게이션 링크 정의 - 이미지에 맞게 수정
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
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-sm py-2' : 'bg-white py-4'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* 로고 - 이미지에 맞게 수정 */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center">
              <span className="text-3xl font-bold text-purple-600">퍼즐핏</span>
            </Link>
          </div>

          {/* 데스크탑 메뉴 - 이미지에 맞게 수정 */}
          <div className="hidden md:flex md:items-center md:space-x-12">
            {navLinks.map((link) => 
              !link.children ? (
                <Link
                  key={link.name}
                  to={link.href}
                  className={`relative px-1 py-2 font-medium text-base transition-colors duration-200 ${
                    location.pathname === link.href
                      ? 'text-gray-900 font-semibold'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  {link.name}
                </Link>
              ) : (
                <Menu as="div" key={link.name} className="relative">
                  {({ open }) => (
                    <>
                      <Menu.Button 
                        className="group inline-flex items-center px-1 py-2 font-medium text-base text-gray-600 hover:text-gray-900"
                      >
                        {link.name}
                        <ChevronDownIcon 
                          className={`ml-1 h-4 w-4 transition-transform duration-200 ${
                            open ? 'rotate-180' : ''
                          } text-gray-500`}
                        />
                      </Menu.Button>
                      <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                      >
                        <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                          <div className="py-1">
                            {link.children.map((child) => (
                              <Menu.Item key={child.name}>
                                {({ active }) => (
                                  <Link
                                    to={child.href}
                                    className={`${
                                      active ? 'bg-gray-100 text-gray-900' : 'text-gray-700'
                                    } block px-4 py-2 text-sm`}
                                  >
                                    {child.name}
                                  </Link>
                                )}
                              </Menu.Item>
                            ))}
                          </div>
                        </Menu.Items>
                      </Transition>
                    </>
                  )}
                </Menu>
              )
            )}
          </div>

          {/* 모바일 메뉴 버튼 */}
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100"
            >
              {isMobileMenuOpen ? (
                <XIcon className="h-6 w-6" />
              ) : (
                <MenuIcon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* 모바일 메뉴 */}
      <div 
        className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden bg-white shadow-lg ${
          isMobileMenuOpen ? 'max-h-[500px]' : 'max-h-0'
        }`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1">
          {navLinks.map((link) => 
            !link.children ? (
              <Link
                key={link.name}
                to={link.href}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  location.pathname === link.href
                    ? 'bg-gray-100 text-gray-900'
                    : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'
                }`}
              >
                {link.name}
              </Link>
            ) : (
              <Disclosure key={link.name}>
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex justify-between w-full px-3 py-2 text-base font-medium text-gray-700 rounded-md hover:bg-gray-100 hover:text-gray-900">
                      <span>{link.name}</span>
                      <ChevronDownIcon
                        className={`${
                          open ? 'transform rotate-180' : ''
                        } w-5 h-5 text-gray-500`}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className="px-4 pt-2 pb-2 space-y-1">
                      {link.children.map((child) => (
                        <Link
                          key={child.name}
                          to={child.href}
                          className="block pl-3 pr-4 py-2 text-sm text-gray-600 hover:bg-gray-100 hover:text-gray-900 rounded-md"
                        >
                          {child.name}
                        </Link>
                      ))}
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            )
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavBar; 