import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const SelfCheckPage: React.FC = () => {
  const [step, setStep] = useState(1);
  
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-purple-700">ADHD 자가진단</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            아래 질문들을 통해 ADHD 증상이 있는지 확인해 보세요. 이 자가진단은 참고용이며, 정확한 진단은 전문의와 상담하시기 바랍니다.
          </p>
        </div>
        
        {/* 진행 상태 표시 */}
        <div className="mb-8">
          <div className="flex justify-between mb-2">
            <span className="text-sm font-medium text-purple-700">시작</span>
            <span className="text-sm font-medium text-purple-700">완료</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5">
            <motion.div 
              initial={{ width: "0%" }}
              animate={{ width: step === 1 ? "50%" : "100%" }}
              transition={{ duration: 0.5 }}
              className="bg-purple-600 h-2.5 rounded-full"
            ></motion.div>
          </div>
          <div className="flex justify-between mt-2">
            <span className="text-xs text-gray-500">주의력 관련</span>
            <span className="text-xs text-gray-500">과잉행동 관련</span>
          </div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white p-8 rounded-3xl shadow-xl border border-purple-100"
        >
          {step === 1 && (
            <div>
              <h2 className="text-xl font-semibold mb-6 text-purple-800">주의력 관련 질문</h2>
              <div className="space-y-6">
                <div className="p-5 bg-purple-50 rounded-2xl hover:shadow-md transition-shadow">
                  <p className="mb-4 text-gray-800 font-medium">1. 세부적인 것에 주의를 기울이는 데 어려움이 있나요?</p>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    <label className="flex items-center p-3 bg-white rounded-xl border border-gray-200 cursor-pointer hover:border-purple-400 transition-colors">
                      <input type="radio" name="q1" className="w-4 h-4 text-purple-600" />
                      <span className="ml-2 text-gray-700">전혀 없음</span>
                    </label>
                    <label className="flex items-center p-3 bg-white rounded-xl border border-gray-200 cursor-pointer hover:border-purple-400 transition-colors">
                      <input type="radio" name="q1" className="w-4 h-4 text-purple-600" />
                      <span className="ml-2 text-gray-700">가끔</span>
                    </label>
                    <label className="flex items-center p-3 bg-white rounded-xl border border-gray-200 cursor-pointer hover:border-purple-400 transition-colors">
                      <input type="radio" name="q1" className="w-4 h-4 text-purple-600" />
                      <span className="ml-2 text-gray-700">자주</span>
                    </label>
                    <label className="flex items-center p-3 bg-white rounded-xl border border-gray-200 cursor-pointer hover:border-purple-400 transition-colors">
                      <input type="radio" name="q1" className="w-4 h-4 text-purple-600" />
                      <span className="ml-2 text-gray-700">매우 자주</span>
                    </label>
                  </div>
                </div>
                
                <div className="p-5 bg-purple-50 rounded-2xl hover:shadow-md transition-shadow">
                  <p className="mb-4 text-gray-800 font-medium">2. 과제나 활동에 지속적으로 집중하는 것이 어려운가요?</p>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    <label className="flex items-center p-3 bg-white rounded-xl border border-gray-200 cursor-pointer hover:border-purple-400 transition-colors">
                      <input type="radio" name="q2" className="w-4 h-4 text-purple-600" />
                      <span className="ml-2 text-gray-700">전혀 없음</span>
                    </label>
                    <label className="flex items-center p-3 bg-white rounded-xl border border-gray-200 cursor-pointer hover:border-purple-400 transition-colors">
                      <input type="radio" name="q2" className="w-4 h-4 text-purple-600" />
                      <span className="ml-2 text-gray-700">가끔</span>
                    </label>
                    <label className="flex items-center p-3 bg-white rounded-xl border border-gray-200 cursor-pointer hover:border-purple-400 transition-colors">
                      <input type="radio" name="q2" className="w-4 h-4 text-purple-600" />
                      <span className="ml-2 text-gray-700">자주</span>
                    </label>
                    <label className="flex items-center p-3 bg-white rounded-xl border border-gray-200 cursor-pointer hover:border-purple-400 transition-colors">
                      <input type="radio" name="q2" className="w-4 h-4 text-purple-600" />
                      <span className="ml-2 text-gray-700">매우 자주</span>
                    </label>
                  </div>
                </div>
                
                <div className="p-5 bg-purple-50 rounded-2xl hover:shadow-md transition-shadow">
                  <p className="mb-4 text-gray-800 font-medium">3. 다른 사람이 말할 때 경청하지 못하는 경우가 있나요?</p>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    <label className="flex items-center p-3 bg-white rounded-xl border border-gray-200 cursor-pointer hover:border-purple-400 transition-colors">
                      <input type="radio" name="q3" className="w-4 h-4 text-purple-600" />
                      <span className="ml-2 text-gray-700">전혀 없음</span>
                    </label>
                    <label className="flex items-center p-3 bg-white rounded-xl border border-gray-200 cursor-pointer hover:border-purple-400 transition-colors">
                      <input type="radio" name="q3" className="w-4 h-4 text-purple-600" />
                      <span className="ml-2 text-gray-700">가끔</span>
                    </label>
                    <label className="flex items-center p-3 bg-white rounded-xl border border-gray-200 cursor-pointer hover:border-purple-400 transition-colors">
                      <input type="radio" name="q3" className="w-4 h-4 text-purple-600" />
                      <span className="ml-2 text-gray-700">자주</span>
                    </label>
                    <label className="flex items-center p-3 bg-white rounded-xl border border-gray-200 cursor-pointer hover:border-purple-400 transition-colors">
                      <input type="radio" name="q3" className="w-4 h-4 text-purple-600" />
                      <span className="ml-2 text-gray-700">매우 자주</span>
                    </label>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 flex justify-end">
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setStep(2)}
                  className="bg-gradient-to-r from-purple-600 to-purple-800 text-white px-6 py-3 rounded-full hover:shadow-lg transition-all duration-300"
                >
                  다음 단계
                </motion.button>
              </div>
            </div>
          )}
          
          {step === 2 && (
            <div>
              <h2 className="text-xl font-semibold mb-6 text-purple-800">과잉행동 관련 질문</h2>
              <div className="space-y-6">
                <div className="p-5 bg-purple-50 rounded-2xl hover:shadow-md transition-shadow">
                  <p className="mb-4 text-gray-800 font-medium">4. 가만히 앉아 있기 어려운가요?</p>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    <label className="flex items-center p-3 bg-white rounded-xl border border-gray-200 cursor-pointer hover:border-purple-400 transition-colors">
                      <input type="radio" name="q4" className="w-4 h-4 text-purple-600" />
                      <span className="ml-2 text-gray-700">전혀 없음</span>
                    </label>
                    <label className="flex items-center p-3 bg-white rounded-xl border border-gray-200 cursor-pointer hover:border-purple-400 transition-colors">
                      <input type="radio" name="q4" className="w-4 h-4 text-purple-600" />
                      <span className="ml-2 text-gray-700">가끔</span>
                    </label>
                    <label className="flex items-center p-3 bg-white rounded-xl border border-gray-200 cursor-pointer hover:border-purple-400 transition-colors">
                      <input type="radio" name="q4" className="w-4 h-4 text-purple-600" />
                      <span className="ml-2 text-gray-700">자주</span>
                    </label>
                    <label className="flex items-center p-3 bg-white rounded-xl border border-gray-200 cursor-pointer hover:border-purple-400 transition-colors">
                      <input type="radio" name="q4" className="w-4 h-4 text-purple-600" />
                      <span className="ml-2 text-gray-700">매우 자주</span>
                    </label>
                  </div>
                </div>
                
                <div className="p-5 bg-purple-50 rounded-2xl hover:shadow-md transition-shadow">
                  <p className="mb-4 text-gray-800 font-medium">5. 과도하게 말을 많이 하나요?</p>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    <label className="flex items-center p-3 bg-white rounded-xl border border-gray-200 cursor-pointer hover:border-purple-400 transition-colors">
                      <input type="radio" name="q5" className="w-4 h-4 text-purple-600" />
                      <span className="ml-2 text-gray-700">전혀 없음</span>
                    </label>
                    <label className="flex items-center p-3 bg-white rounded-xl border border-gray-200 cursor-pointer hover:border-purple-400 transition-colors">
                      <input type="radio" name="q5" className="w-4 h-4 text-purple-600" />
                      <span className="ml-2 text-gray-700">가끔</span>
                    </label>
                    <label className="flex items-center p-3 bg-white rounded-xl border border-gray-200 cursor-pointer hover:border-purple-400 transition-colors">
                      <input type="radio" name="q5" className="w-4 h-4 text-purple-600" />
                      <span className="ml-2 text-gray-700">자주</span>
                    </label>
                    <label className="flex items-center p-3 bg-white rounded-xl border border-gray-200 cursor-pointer hover:border-purple-400 transition-colors">
                      <input type="radio" name="q5" className="w-4 h-4 text-purple-600" />
                      <span className="ml-2 text-gray-700">매우 자주</span>
                    </label>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 flex justify-between">
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setStep(1)}
                  className="bg-gray-200 text-gray-800 px-6 py-3 rounded-full hover:bg-gray-300 transition-colors"
                >
                  이전 단계
                </motion.button>
                
                <Link to="/tests/result">
                  <motion.button 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-gradient-to-r from-purple-600 to-purple-800 text-white px-6 py-3 rounded-full hover:shadow-lg transition-all duration-300"
                  >
                    결과 보기
                  </motion.button>
                </Link>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default SelfCheckPage; 