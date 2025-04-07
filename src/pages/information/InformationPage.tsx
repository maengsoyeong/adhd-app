import React from 'react';

const InformationPage: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-purple-800">ADHD 정보</h1>
      
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-xl font-semibold mb-4 text-purple-700">ADHD란?</h2>
        <p className="text-gray-700 mb-4">
          주의력 결핍 과잉행동장애(ADHD)는 주의력 부족, 과잉행동, 충동성 등의 증상을 특징으로 하는 
          신경발달장애입니다. 이는 일상생활, 학업, 직장에서의 기능에 영향을 미칠 수 있습니다.
        </p>
        <p className="text-gray-700">
          ADHD는 아동기에 시작되며, 많은 경우 성인기까지 지속됩니다. 적절한 치료와 관리를 통해 
          증상을 효과적으로 관리하고 삶의 질을 높일 수 있습니다.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4 text-purple-700">주요 증상</h2>
          <h3 className="font-medium text-purple-600 mb-2">주의력 결핍</h3>
          <ul className="mb-4 text-gray-700 space-y-1">
            <li>• 세부사항에 주의를 기울이지 못함</li>
            <li>• 과제나 활동에 집중을 유지하기 어려움</li>
            <li>• 지시사항을 놓치거나 따르지 못함</li>
            <li>• 물건을 자주 잃어버림</li>
          </ul>
          
          <h3 className="font-medium text-purple-600 mb-2">과잉행동/충동성</h3>
          <ul className="text-gray-700 space-y-1">
            <li>• 지나치게 활동적이거나 가만히 있지 못함</li>
            <li>• 부적절한 상황에서도 뛰거나 기어오름</li>
            <li>• 차례를 기다리지 못함</li>
            <li>• 다른 사람의 대화를 방해하거나 끼어듦</li>
          </ul>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4 text-purple-700">진단 및 관리</h2>
          <h3 className="font-medium text-purple-600 mb-2">진단</h3>
          <p className="mb-4 text-gray-700">
            ADHD 진단은 전문의(정신건강의학과 의사, 소아청소년정신과 의사)에 의해 이루어집니다. 
            자가진단은 참고 자료일 뿐이며, 전문적인 진단을 대체할 수 없습니다.
          </p>
          
          <h3 className="font-medium text-purple-600 mb-2">관리 방법</h3>
          <ul className="text-gray-700 space-y-1">
            <li>• 약물치료</li>
            <li>• 인지행동치료</li>
            <li>• 생활습관 개선</li>
            <li>• 환경적 조정</li>
            <li>• 교육 및 부모 훈련</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default InformationPage;
