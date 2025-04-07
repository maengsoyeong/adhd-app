import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header: React.FC = () => {
  const location = useLocation();
  
  // 현재 경로에 따라 활성 링크 스타일 적용
  const isActive = (path: string) => {
    return location.pathname === path ? 'text-purple-600 border-b-2 border-purple-600' : 'text-gray-600 hover:text-purple-600';
  };

  return (
    <header className="bg-white shadow-sm">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-xl font-bold text-purple-700 flex items-center">
            <img 
              src="/logo.png" 
              alt="퍼즐핏 로고" 
              className="h-8 w-auto mr-2"
            />
            퍼즐핏
          </Link>
          <div className="flex gap-6">
            <Link to="/" className={`py-2 ${isActive('/')}`}>Home</Link>
            <Link to="/about" className={`py-2 ${isActive('/about')}`}>About</Link>
            <Link to="/services" className={`py-2 ${isActive('/services')}`}>Services</Link>
            <Link to="/information" className={`py-2 ${isActive('/information')}`}>Information</Link>
            <Link to="/community" className={`py-2 ${isActive('/community')}`}>Community</Link>
            <Link to="/contact" className={`py-2 ${isActive('/contact')}`}>Contact</Link>
          </div>
          <Link to="/login" className="bg-purple-600 text-white px-4 py-2 rounded-full hover:bg-purple-700 transition-colors">
            Login
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header; 