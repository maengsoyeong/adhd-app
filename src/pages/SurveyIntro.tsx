import React, { useState, useEffect } from 'react';
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
  const [totalTests, setTotalTests] = useState<number>(0);

  useEffect(() => {
    // localStorage에서 총 검사 수를 가져옴
    const savedTotal = localStorage.getItem('totalTests');
    setTotalTests(savedTotal ? parseInt(savedTotal) : 0);
  }, []);

  const handleStart = () => {
    // 검사 시작 시 카운트 증가
    const newTotal = totalTests + 1;
    setTotalTests(newTotal);
    localStorage.setItem('totalTests', newTotal.toString());
    navigate('/test');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      <div className="max-w-4xl mx-auto p-6 pt-16">
        {/* 로고 대신 텍스트 사용 */}
        <div className="flex flex-col items-center mb-12">
          <div className="w-32 h-32 mb-6 bg-purple-600 rounded-full flex items-center justify-center text-white text-4xl font-bold animate-float">
            PF
          </div>
          <h1 className="text-4xl font-bold text-purple-800 text-center">
            퍼즐핏 <span className="text-purple-600">ADHD</span> 자가진단
          </h1>
          <p className="text-lg text-purple-600 mt-2">
            나에게 맞는 정신건강 솔루션을 찾아보세요
          </p>
        </div>

        {/* 메인 컨텐츠 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* 왼쪽 섹션 - 설명 */}
          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-purple-500">
              <h2 className="text-2xl font-semibold text-purple-800 mb-3">
                자가진단의 의미
              </h2>
              <p className="text-gray-700">
                ADHD 자가진단은 주의력 결핍 및 과잉행동 장애의 증상을 스스로 확인해볼 수 있는 도구입니다. 
                이 테스트는 전문적인 진단을 대체할 수 없지만, 자신의 상태를 이해하는 첫 걸음이 될 수 있습니다.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6">
              <h2 className="text-xl font-semibold text-purple-800 mb-3">
                테스트 진행 방법
              </h2>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-purple-100 text-purple-800 mr-2">1</span>
                  <span>각 문항을 주의 깊게 읽고 자신에게 해당하는 정도를 선택하세요.</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-purple-100 text-purple-800 mr-2">2</span>
                  <span>모든 문항에 답변하면 종합적인 결과를 확인할 수 있습니다.</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-purple-100 text-purple-800 mr-2">3</span>
                  <span>결과는 PDF로 저장하여 필요시 전문가와 상담에 활용할 수 있습니다.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* 오른쪽 섹션 - 정보 입력 및 시작 버튼 */}
          <div className="bg-white rounded-xl shadow-md p-6">
            <div className="text-center mb-6">
              <div className="inline-block rounded-full bg-purple-100 px-4 py-2 text-purple-800 font-medium">
                지금까지 <span className="text-xl font-bold">{totalTests}</span>명이 테스트했습니다
              </div>
            </div>

            <h2 className="text-xl font-semibold text-purple-800 mb-4">
              기본 정보 입력 (선택사항)
            </h2>
            
            <div className="space-y-4 mb-6">
              <div>
                <label htmlFor="ageGroup" className="block text-sm font-medium text-gray-700 mb-1">연령대</label>
                <select
                  id="ageGroup"
                  name="ageGroup"
                  aria-label="연령대 선택"
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
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
                <label htmlFor="gender" className="block text-sm font-medium text-gray-700 mb-1">성별</label>
                <select
                  id="gender"
                  name="gender"
                  aria-label="성별 선택"
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
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

            <button
              onClick={handleStart}
              className="w-full py-3 px-4 bg-gradient-to-r from-purple-600 to-purple-800 text-white font-medium rounded-lg hover:from-purple-700 hover:to-purple-900 transition-all shadow-md hover:shadow-lg transform hover:scale-[1.02] active:scale-[0.98]"
            >
              테스트 시작하기
            </button>

            <p className="text-sm text-gray-500 text-center mt-4">
              * 이 자가진단 테스트는 참고용이며, 정확한 진단은 전문의와 상담하시기 바랍니다.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}; 