import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export const SurveyIntro: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl mx-auto bg-white p-8 rounded-3xl shadow-xl border border-purple-100"
      >
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-purple-700">ADHD 테스트 소개</h1>
          <div className="w-20 h-1 bg-purple-500 mx-auto rounded-full"></div>
        </div>
        
        <div className="mb-8">
          <p className="text-lg mb-4 text-gray-700">
            ADHD(주의력 결핍 과잉행동 장애)는 주의력 부족, 과잉행동, 충동성 등의 증상을 특징으로 하는 신경발달장애입니다.
          </p>
          <p className="text-lg mb-4 text-gray-700">
            이 테스트는 ADHD 증상이 있는지 확인하는 데 도움을 주는 자가진단 도구입니다. 약 5-10분 정도 소요됩니다.
          </p>
          <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-r-lg">
            <p className="font-semibold text-red-700">
              이 테스트는 참고용이며, 정확한 진단은 전문의와 상담하시기 바랍니다.
            </p>
          </div>
        </div>
        
        <div className="mb-8 bg-purple-50 p-6 rounded-2xl">
          <h2 className="text-xl font-semibold mb-4 text-purple-800">테스트 진행 방법</h2>
          <ol className="list-decimal pl-5 space-y-3">
            <li className="text-gray-700">각 질문에 대해 자신에게 해당하는 정도를 선택합니다.</li>
            <li className="text-gray-700">모든 질문에 솔직하게 답변해 주세요.</li>
            <li className="text-gray-700">테스트 완료 후 결과를 확인할 수 있습니다.</li>
            <li className="text-gray-700">결과에 따라 추천 사항을 제공해 드립니다.</li>
          </ol>
        </div>
        
        <div className="mb-10 bg-blue-50 p-6 rounded-2xl">
          <h2 className="text-xl font-semibold mb-4 text-blue-800">개인정보 보호</h2>
          <p className="text-gray-700">
            귀하의 응답은 익명으로 처리되며, 테스트 결과는 통계 및 연구 목적으로만 사용됩니다.
            개인 식별 정보는 수집하지 않습니다.
          </p>
        </div>
        
        <div className="flex justify-center">
          <Link to="/tests/self-check">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-purple-600 to-purple-800 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-lg transition-all duration-300"
            >
              테스트 시작하기
            </motion.button>
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default SurveyIntro; 