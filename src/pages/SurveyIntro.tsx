import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface UserInfo {
  ageGroup: string;
  gender: string;
  interests: string[];
}

export const SurveyIntro: React.FC = () => {
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState<UserInfo>({
    ageGroup: '',
    gender: '',
    interests: []
  });

  const handleStart = () => {
    // 사용자 정보 저장 후 테스트 페이지로 이동
    navigate('/test');
  };

  return (
    <div className="max-w-2xl mx-auto p-6 space-y-8">
      {/* 설문 개요 섹션 */}
      <section className="space-y-4">
        <h1 className="text-3xl font-bold text-gray-800">
          성인 ADHD 자가진단 테스트
        </h1>
        <p className="text-gray-600">
          이 테스트는 성인 ADHD의 주요 증상을 파악하기 위한 자가진단 도구입니다.
          정확한 진단을 위해서는 반드시 전문의와의 상담이 필요합니다.
        </p>
      </section>

      {/* 설문 진행 안내 섹션 */}
      <section className="bg-gray-50 p-6 rounded-lg space-y-3">
        <h2 className="text-xl font-semibold text-gray-800">설문 진행 안내</h2>
        <ul className="list-disc list-inside text-gray-600 space-y-2">
          <li>총 문항 수: 90문항</li>
          <li>예상 소요 시간: 15-20분</li>
          <li>응답 방식: 5점 척도 (전혀 아니다 ~ 매우 그렇다)</li>
        </ul>
      </section>

      {/* 개인 정보 입력 섹션 */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-gray-800">개인 정보 입력 (선택사항)</h2>
        
        <div className="space-y-3">
          <div>
            <label htmlFor="ageGroup" className="block text-sm font-medium text-gray-700">연령대</label>
            <select
              id="ageGroup"
              name="ageGroup"
              aria-label="연령대 선택"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              value={userInfo.ageGroup}
              onChange={(e) => setUserInfo(prev => ({ ...prev, ageGroup: e.target.value }))}
            >
              <option value="">선택해주세요</option>
              <option value="20s">20대</option>
              <option value="30s">30대</option>
              <option value="40s">40대</option>
              <option value="50s">50대 이상</option>
            </select>
          </div>

          <div>
            <label htmlFor="gender" className="block text-sm font-medium text-gray-700">성별</label>
            <select
              id="gender"
              name="gender"
              aria-label="성별 선택"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              value={userInfo.gender}
              onChange={(e) => setUserInfo(prev => ({ ...prev, gender: e.target.value }))}
            >
              <option value="">선택해주세요</option>
              <option value="male">남성</option>
              <option value="female">여성</option>
              <option value="other">기타</option>
            </select>
          </div>
        </div>
      </section>

      {/* 시작 버튼 */}
      <button
        onClick={handleStart}
        className="w-full py-3 px-4 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
      >
        테스트 시작하기
      </button>

      {/* 주의사항 */}
      <p className="text-sm text-gray-500 text-center">
        * 이 자가진단 테스트는 참고용이며, 정확한 진단은 전문의와 상담하시기 바랍니다.
      </p>
    </div>
  );
}; 