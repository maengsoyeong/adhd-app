import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../components/common/NavBar';
import Card from '../components/common/Card';

const LandingPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <NavBar />
      
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">퍼즐핏에 오신 것을 환영합니다</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            정신 건강 자가진단 및 관리를 위한 최적의 솔루션을 제공합니다.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          <Card className="text-center p-8">
            <div className="bg-primary-100 rounded-full p-4 w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">자가진단 테스트</h3>
            <p className="text-gray-600 mb-4">
              다양한 정신 건강 자가진단 테스트를 통해 현재 상태를 확인하세요.
            </p>
            <Link to="/tests/self-check" className="btn-primary inline-block">
              테스트 시작하기
            </Link>
          </Card>
          
          <Card className="text-center p-8">
            <div className="bg-primary-100 rounded-full p-4 w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">회사 소개</h3>
            <p className="text-gray-600 mb-4">
              퍼즐핏의 비전과 미션, 그리고 우리가 제공하는 서비스에 대해 알아보세요.
            </p>
            <Link to="/about" className="btn-outline inline-block">
              더 알아보기
            </Link>
          </Card>
          
          <Card className="text-center p-8">
            <div className="bg-primary-100 rounded-full p-4 w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">문의하기</h3>
            <p className="text-gray-600 mb-4">
              질문이나 제안사항이 있으신가요? 언제든지 문의해 주세요.
            </p>
            <Link to="/contact" className="btn-outline inline-block">
              문의하기
            </Link>
          </Card>
        </div>
        
        <div className="mt-16 bg-white rounded-lg shadow-sm p-8">
          <h2 className="text-2xl font-bold text-center mb-6">주요 테스트</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Link to="/tests/specific/phq9" className="block p-6 border rounded-lg hover:shadow-md transition-shadow">
              <h3 className="text-lg font-semibold mb-2">PHQ-9 우울증 검사</h3>
              <p className="text-gray-600">
                우울증 증상의 심각도를 평가하는 9가지 문항의 자가진단 테스트입니다.
              </p>
            </Link>
            <Link to="/tests/specific/gad7" className="block p-6 border rounded-lg hover:shadow-md transition-shadow">
              <h3 className="text-lg font-semibold mb-2">GAD-7 불안장애 검사</h3>
              <p className="text-gray-600">
                불안장애 증상의 심각도를 평가하는 7가지 문항의 자가진단 테스트입니다.
              </p>
            </Link>
          </div>
        </div>
      </div>
      
      <footer className="bg-white mt-16 py-8 border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-gray-500 text-sm">
            <p>© {new Date().getFullYear()} 퍼즐핏. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage; 