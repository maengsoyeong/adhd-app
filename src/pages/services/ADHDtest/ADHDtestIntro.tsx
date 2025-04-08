import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

interface UserInfo {
  ageGroup: string;
  gender: string;
  interests: string[];
}

export const ADHDtestIntro: React.FC = () => {
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
    const newTotal = totalTests + 1;
    setTotalTests(newTotal);
    localStorage.setItem('totalTests', newTotal.toString());
    navigate('/adhd-test/test');
  };

  return (
    <div className="min-h-screen relative bg-gradient-to-b from-purple-50 via-white to-purple-50">
      {/* 배경 장식 */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-br from-purple-100/50 to-transparent"></div>
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-purple-100/30 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-indigo-100/30 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto p-6 pt-16">
        {/* 로고 및 타이틀 섹션 */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center mb-12"
        >
          <motion.div 
            className="w-32 h-32 mb-6 bg-gradient-to-br from-purple-600 to-purple-800 rounded-full flex items-center justify-center text-white text-4xl font-bold shadow-lg"
            animate={{ 
              y: [0, -10, 0],
              scale: [1, 1.02, 1]
            }}
            transition={{ 
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            PF
          </motion.div>
          <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-800 to-purple-600 text-center">
            퍼즐핏 ADHD 자가진단
          </h1>
          <p className="text-lg text-purple-600/80 mt-2">
            나에게 맞는 정신건강 솔루션을 찾아보세요
          </p>
        </motion.div>

        {/* 메인 컨텐츠 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* 왼쪽 섹션 - 설명 */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-6 border-l-4 border-purple-500">
              <h2 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-800 to-purple-600 mb-3">
                자가진단의 의미
              </h2>
              <p className="text-gray-700 leading-relaxed">
                ADHD 자가진단은 주의력 결핍 및 과잉행동 장애의 증상을 스스로 확인해볼 수 있는 도구입니다. 
                이 테스트는 전문적인 진단을 대체할 수 없지만, 자신의 상태를 이해하는 첫 걸음이 될 수 있습니다.
              </p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-6">
              <h2 className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-800 to-purple-600 mb-3">
                테스트 진행 방법
              </h2>
              <ul className="space-y-4 text-gray-700">
                {[
                  "각 문항을 주의 깊게 읽고 자신에게 해당하는 정도를 선택하세요.",
                  "모든 문항에 답변하면 종합적인 결과를 확인할 수 있습니다.",
                  "결과는 PDF로 저장하여 필요시 전문가와 상담에 활용할 수 있습니다."
                ].map((text, index) => (
                  <motion.li 
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                    className="flex items-start space-x-3"
                  >
                    <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-gradient-to-br from-purple-100 to-purple-200 text-purple-800 font-medium">
                      {index + 1}
                    </span>
                    <span className="flex-1">{text}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* 오른쪽 섹션 - 정보 입력 및 시작 버튼 */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-8"
          >
            <div className="text-center mb-8">
              <motion.div 
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5 }}
                className="inline-block rounded-full bg-gradient-to-r from-purple-100 to-purple-200 px-6 py-3"
              >
                <span className="text-purple-800 font-medium">
                  지금까지 <span className="text-2xl font-bold">{totalTests}</span>명이 테스트했습니다
                </span>
              </motion.div>
            </div>

            <h2 className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-800 to-purple-600 mb-6">
              기본 정보 입력 (선택사항)
            </h2>
            
            <div className="space-y-5 mb-8">
              <div>
                <label htmlFor="ageGroup" className="block text-sm font-medium text-gray-700 mb-2">연령대</label>
                <select
                  id="ageGroup"
                  name="ageGroup"
                  className="block w-full rounded-xl border-gray-200 shadow-sm focus:border-purple-500 focus:ring-purple-500 bg-white/70"
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
                <label htmlFor="gender" className="block text-sm font-medium text-gray-700 mb-2">성별</label>
                <select
                  id="gender"
                  name="gender"
                  className="block w-full rounded-xl border-gray-200 shadow-sm focus:border-purple-500 focus:ring-purple-500 bg-white/70"
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

            <motion.button
              onClick={handleStart}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-4 px-6 bg-gradient-to-r from-purple-600 to-purple-800 text-white font-medium rounded-xl 
                hover:from-purple-700 hover:to-purple-900 transition-all duration-300 shadow-lg hover:shadow-xl
                flex items-center justify-center space-x-2"
            >
              <span>테스트 시작하기</span>
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-5 w-5" 
                viewBox="0 0 20 20" 
                fill="currentColor"
              >
                <path 
                  fillRule="evenodd" 
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" 
                  clipRule="evenodd" 
                />
              </svg>
            </motion.button>

            <p className="text-sm text-gray-500 text-center mt-4">
              * 이 자가진단 테스트는 참고용이며, 정확한 진단은 전문의와 상담하시기 바랍니다.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ADHDtestIntro;
