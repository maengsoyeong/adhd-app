import React from 'react';

const AboutPage: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-purple-800">퍼즐핏 소개</h1>
      
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-xl font-semibold mb-4 text-purple-700">목표와 비전</h2>
        <p className="text-gray-700 mb-4">
          퍼즐핏은 ADHD에 대한 인식을 높이고, 보다 쉽게 자신의 상태를 이해할 수 있도록 돕는 서비스입니다.
          우리는 모든 사람이 자신의 특성을 이해하고 그에 맞는 방법으로 성장할 수 있다고 믿습니다.
        </p>
        <p className="text-gray-700">
          정확한 자가진단 도구와 전문적인 정보 제공을 통해, ADHD로 어려움을 겪는 분들에게 
          실질적인 도움을 드리고자 합니다.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4 text-purple-700">서비스 특징</h2>
          <ul className="space-y-2 text-gray-700">
            <li>• 과학적으로 검증된 ADHD 자가진단 도구</li>
            <li>• 개인 맞춤형 결과 분석 및 조언</li>
            <li>• 전문가의 감수를 받은 정보 콘텐츠</li>
            <li>• 지속적인 상태 관리를 위한 도구</li>
          </ul>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4 text-purple-700">팀 소개</h2>
          <ul className="space-y-2 text-gray-700">
            <li>• 정신건강 전문가와 개발자들의 협업</li>
            <li>• ADHD에 대한 풍부한 연구와 경험</li>
            <li>• 사용자 중심의 서비스 개발 철학</li>
            <li>• 지속적인 서비스 개선과 업데이트</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AboutPage; 