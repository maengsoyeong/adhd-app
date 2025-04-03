import React from 'react';
import { motion } from 'framer-motion';

// ProgressBar 컴포넌트 정의
interface ProgressBarProps {
  currentStep: number;
  totalSteps: number;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({ currentStep, totalSteps }) => {
  const progress = (currentStep / totalSteps) * 100;
  
  return (
    <div className="w-full mb-6">
      <div className="flex justify-between mb-2">
        <span className="text-sm font-medium text-purple-700">시작</span>
        <span className="text-sm font-medium text-purple-700">완료</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2.5">
        <motion.div 
          initial={{ width: "0%" }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.5 }}
          className="bg-purple-600 h-2.5 rounded-full"
        ></motion.div>
      </div>
      <div className="flex justify-between mt-2">
        <span className="text-xs text-gray-500">질문 {currentStep}/{totalSteps}</span>
        <span className="text-xs text-gray-500">{Math.round(progress)}% 완료</span>
      </div>
    </div>
  );
};

// 파일 끝에 default export 추가
export default ProgressBar; 