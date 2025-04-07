import React from 'react';
import { Link } from 'react-router-dom';

const ServicesPage: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-purple-800">서비스</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Link 
          to="/survey/intro"
          className="block bg-white p-6 rounded-lg shadow-md border-l-4 border-purple-500 hover:shadow-lg transition-shadow"
        >
          <h2 className="text-xl font-semibold mb-4 text-purple-700">ADHD 설문조사</h2>
          <p className="text-gray-700 mb-4">
            과학적으로 검증된 문항을 통해 ADHD 성향을 종합적으로 평가합니다.
            결과에 따른 맞춤형 조언을 받아보세요.
          </p>
          <div className="flex justify-end">
            <span className="inline-flex items-center text-purple-600 hover:text-purple-800">
              시작하기
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </span>
          </div>
        </Link>
        
        <Link 
          to="/self-check"
          className="block bg-white p-6 rounded-lg shadow-md border-l-4 border-purple-500 hover:shadow-lg transition-shadow"
        >
          <h2 className="text-xl font-semibold mb-4 text-purple-700">ADHD 자가진단</h2>
          <p className="text-gray-700 mb-4">
            간단한 자가진단 도구를 통해 ADHD 증상을 확인해보세요.
            정확한 진단을 위한 첫 걸음입니다.
          </p>
          <div className="flex justify-end">
            <span className="inline-flex items-center text-purple-600 hover:text-purple-800">
              진단하기
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </span>
          </div>
        </Link>
      </div>
      
      <div className="mt-10 bg-gradient-to-r from-purple-50 to-purple-100 p-8 rounded-lg shadow-sm">
        <h2 className="text-2xl font-semibold mb-4 text-purple-800">추가 서비스 준비 중</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h3 className="font-medium text-purple-700 mb-2">ADHD 관리 도구</h3>
            <p className="text-gray-600 text-sm">
              일상에서 ADHD 증상을 관리하는 데 도움이 되는 다양한 도구와 팁을 제공할 예정입니다.
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h3 className="font-medium text-purple-700 mb-2">맞춤형 훈련 프로그램</h3>
            <p className="text-gray-600 text-sm">
              개인의 증상과 필요에 맞춘 인지 훈련 및 자기 관리 프로그램을 준비 중입니다.
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h3 className="font-medium text-purple-700 mb-2">전문가 연결 서비스</h3>
            <p className="text-gray-600 text-sm">
              검증된 ADHD 전문가와의 상담 연결 서비스를 개발 중입니다.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
