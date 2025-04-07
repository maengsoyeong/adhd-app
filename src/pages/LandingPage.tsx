import React from 'react';

const LandingPage: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto text-center">
      <h1 className="text-5xl font-bold mb-6 text-purple-800">ADHD 자가진단 및 관리 앱</h1>
      <p className="text-xl mb-8">ADHD 증상을 이해하고 관리하는 데 도움을 드립니다.</p>
      <div className="flex justify-center gap-4 mt-8">
        <a href="/survey/intro" className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg transition-colors">
          설문조사 시작하기
        </a>
        <a href="/self-check" className="bg-white border-2 border-purple-600 text-purple-600 hover:bg-purple-50 px-6 py-3 rounded-lg transition-colors">
          자가진단 테스트
        </a>
      </div>
    </div>
  );
};

export default LandingPage; 