import React from 'react';
import { Link } from 'react-router-dom';

const SelfCheckPage: React.FC = () => {
  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">ADHD 자가진단</h1>
      <p className="mb-6">아래 테스트를 통해 ADHD 증상에 대한 기본적인 자가진단을 할 수 있습니다.</p>
      
      <div className="space-y-8 bg-white p-6 rounded-lg shadow-sm">
        <div className="p-4 border border-purple-200 rounded-lg bg-purple-50">
          <h2 className="text-xl font-semibold mb-3">주의사항</h2>
          <p>이 자가진단 테스트는 참고용으로만 사용하시고, 정확한 진단은 전문가와 상담하시기 바랍니다.</p>
        </div>
        
        <div className="space-y-4">
          <Link 
            to="/survey/intro"
            className="block w-full p-4 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
          >
            <h3 className="text-lg font-medium">ADHD 종합 설문조사</h3>
            <p className="text-gray-600">ADHD의 여러 측면을 종합적으로 평가하는 설문입니다.</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SelfCheckPage;
