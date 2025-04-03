import React from 'react';

const AboutPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">About Us</h1>
      <p className="mb-4">
        퍼즐핏은 ADHD를 가진 사람들이 자신의 상태를 이해하고 관리할 수 있도록 돕는 플랫폼입니다.
      </p>
      <p className="mb-4">
        우리는 ADHD에 대한 정확한 정보 제공, 자가진단 도구, 그리고 전문가 연결 서비스를 통해
        ADHD를 가진 분들의 삶의 질을 향상시키는 것을 목표로 합니다.
      </p>
      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
        <p>
          ADHD에 대한 사회적 인식을 개선하고, ADHD를 가진 사람들이 자신의 강점을 발견하고
          잠재력을 최대한 발휘할 수 있도록 지원하는 것입니다.
        </p>
      </div>
    </div>
  );
};

export default AboutPage; 