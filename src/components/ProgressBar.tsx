import React from 'react';

interface ProgressBarProps {
  currentStep: number;
  totalSteps: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ currentStep, totalSteps }) => {
  const progress = Math.min((currentStep / totalSteps) * 100, 100);

  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-white/70 backdrop-blur-md shadow-sm">
      <div className="max-w-3xl mx-auto px-4 py-2">
        {/* 라벨과 퍼센트 표시 */}
        <div className="flex justify-between items-center mb-1 text-sm font-medium text-gray-700">
          <span>진행 중</span>
          <span>{currentStep} / {totalSteps} 문항</span>
        </div>

        {/* 프로그래스 바 */}
        <div className="w-full bg-gray-200 rounded-full h-3 shadow-inner">
          <div
            className="bg-gradient-to-r from-purple-500 to-indigo-500 h-full rounded-full transition-all duration-500 ease-in-out"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* 퍼센트 텍스트 */}
        <div className="text-right text-xs text-gray-500 mt-1">
          {Math.floor(progress)}%
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
