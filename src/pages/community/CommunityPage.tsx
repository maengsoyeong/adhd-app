import React from 'react';

const CommunityPage: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">커뮤니티</h1>
      
      <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
        <p className="text-lg text-gray-700">
          이곳은 ADHD에 관심이 있는 사람들이 정보와 경험을 나누는 커뮤니티 공간입니다.
          서로를 존중하고 지지하는 대화를 나누어 주세요.
        </p>
      </div>
      
      <div className="grid grid-cols-1 gap-4">
        <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-purple-500">
          <h2 className="text-xl font-semibold mb-2">ADHD 관련 커뮤니티 기능 준비 중</h2>
          <p className="text-gray-700">
            현재 ADHD 관련 게시판, 질문/답변, 정보 공유 등의 커뮤니티 기능을 개발하고 있습니다.
            곧 더 나은 서비스로 찾아뵙겠습니다.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CommunityPage;
