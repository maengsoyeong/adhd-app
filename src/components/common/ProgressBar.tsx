import React from 'react';

// ProgressBar 컴포넌트 정의
interface ProgressBarProps {
  currentStep: number;
  totalSteps: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ currentStep, totalSteps }) => {
  const progressPercentage = (currentStep / totalSteps) * 100;
  
  // 인라인 스타일 대신 Tailwind 클래스 사용
  // 0-100% 범위를 Tailwind의 width 클래스로 매핑
  const getWidthClass = (percentage: number) => {
    if (percentage <= 0) return 'w-0';
    if (percentage <= 10) return 'w-1/12';
    if (percentage <= 20) return 'w-2/12';
    if (percentage <= 25) return 'w-1/4';
    if (percentage <= 30) return 'w-3/12';
    if (percentage <= 33) return 'w-1/3';
    if (percentage <= 40) return 'w-4/12';
    if (percentage <= 50) return 'w-1/2';
    if (percentage <= 60) return 'w-6/12';
    if (percentage <= 66) return 'w-2/3';
    if (percentage <= 70) return 'w-7/12';
    if (percentage <= 75) return 'w-3/4';
    if (percentage <= 80) return 'w-8/12';
    if (percentage <= 90) return 'w-9/12';
    if (percentage <= 100) return 'w-full';
    return 'w-full';
  };

  return (
    <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 my-4">
      <div 
        className={`bg-primary-600 h-2.5 rounded-full transition-all duration-500 ease-out ${getWidthClass(progressPercentage)}`}
      ></div>
      <div className="flex justify-between mt-2 text-sm text-gray-600">
        <span>진행률: {Math.round(progressPercentage)}%</span>
        <span>{currentStep}/{totalSteps}</span>
      </div>
    </div>
  );
};

// 파일 끝에 default export 추가
export default ProgressBar; 