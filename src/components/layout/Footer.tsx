import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-4">퍼즐핏</h3>
            <p className="text-gray-600">
              ADHD 자가진단 및 관리를 위한 플랫폼입니다.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">서비스</h3>
            <ul className="space-y-2">
              <li><Link to="/survey/intro" className="text-gray-600 hover:text-purple-600">설문조사</Link></li>
              <li><Link to="/self-check" className="text-gray-600 hover:text-purple-600">자가진단</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">회사 정보</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-600 hover:text-purple-600">소개</Link></li>
              <li><Link to="/contact" className="text-gray-600 hover:text-purple-600">연락하기</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">법적 정보</h3>
            <ul className="space-y-2">
              <li><Link to="/privacy" className="text-gray-600 hover:text-purple-600">개인정보처리방침</Link></li>
              <li><Link to="/terms" className="text-gray-600 hover:text-purple-600">이용약관</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-200 mt-8 pt-6 text-center text-gray-500">
          <p>&copy; 2023 퍼즐핏. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 