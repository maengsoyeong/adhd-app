import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export const SurveyResult: React.FC = () => {
  // 실제 앱에서는 이전 페이지에서 계산된 점수를 받아와야 합니다
  const score = 18; // 예시 점수
  
  const getResultMessage = () => {
    if (score >= 24) {
      return {
        level: "높음",
        message: "ADHD 증상이 상당히 높게 나타납니다. 전문가와 상담하는 것을 권장합니다.",
        color: "text-red-600",
        bgColor: "bg-red-100",
        borderColor: "border-red-300",
        progressColor: "bg-red-500"
      };
    } else if (score >= 15) {
      return {
        level: "중간",
        message: "ADHD 증상이 중간 정도로 나타납니다. 추가적인 평가가 도움이 될 수 있습니다.",
        color: "text-yellow-600",
        bgColor: "bg-yellow-100",
        borderColor: "border-yellow-300",
        progressColor: "bg-yellow-500"
      };
    } else {
      return {
        level: "낮음",
        message: "ADHD 증상이 낮게 나타납니다. 하지만 증상이 걱정된다면 전문가와 상담하세요.",
        color: "text-green-600",
        bgColor: "bg-green-100",
        borderColor: "border-green-300",
        progressColor: "bg-green-500"
      };
    }
  };
  
  const result = getResultMessage();
  
  return (
    <div className="container mx-auto px-4 py-12">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl mx-auto bg-white p-8 rounded-3xl shadow-xl border border-purple-100"
      >
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-purple-700">테스트 결과</h1>
          <div className="w-20 h-1 bg-purple-500 mx-auto rounded-full"></div>
        </div>
        
        <div className={`mb-10 p-6 rounded-2xl ${result.bgColor} ${result.borderColor} border`}>
          <div className="text-center mb-6">
            <p className="text-lg mb-2 text-gray-700">당신의 ADHD 지수:</p>
            <div className="text-6xl font-bold mb-2">{score}</div>
            <div className="w-full bg-white rounded-full h-3 mb-4">
              <motion.div 
                initial={{ width: "0%" }}
                animate={{ width: `${(score/30)*100}%` }}
                transition={{ duration: 1 }}
                className={`h-3 rounded-full ${result.progressColor}`}
              ></motion.div>
            </div>
            <p className={`text-xl font-semibold ${result.color}`}>
              ADHD 가능성: {result.level}
            </p>
          </div>
          
          <p className="mb-4 text-gray-700">{result.message}</p>
          <p className="text-gray-700">
            이 테스트는 참고용이며, 정확한 진단은 전문의와 상담하시기 바랍니다.
            ADHD는 전문가의 종합적인 평가를 통해 진단됩니다.
          </p>
        </div>
        
        <div className="mb-10 bg-purple-50 p-6 rounded-2xl">
          <h2 className="text-xl font-semibold mb-4 text-purple-800">다음 단계 추천</h2>
          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            <li>정신건강의학과 전문의 상담을 고려해보세요.</li>
            <li>일상생활에서 집중력을 향상시키는 전략을 시도해보세요.</li>
            <li>규칙적인 생활 습관과 운동이 증상 관리에 도움이 될 수 있습니다.</li>
            <li>ADHD 관련 자조 그룹이나 커뮤니티에 참여해보세요.</li>
          </ul>
        </div>
        
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <Link to="/tests/intro">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto bg-gray-200 text-gray-800 px-6 py-3 rounded-full hover:bg-gray-300 transition-colors"
            >
              테스트 다시하기
            </motion.button>
          </Link>
          <Link to="/">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto bg-gradient-to-r from-purple-600 to-purple-800 text-white px-6 py-3 rounded-full hover:shadow-lg transition-all duration-300"
            >
              홈으로 돌아가기
            </motion.button>
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default SurveyResult; 