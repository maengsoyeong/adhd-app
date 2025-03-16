import React from 'react';

interface ProgressBarProps {
  current: number;
  total: number;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({ current, total }) => {
  const progress = (current / total) * 100;
  
  // progress 값에 따른 너비 클래스를 동적으로 결정
  const getWidthClass = (percentage: number): string => {
    return `w-[${Math.round(percentage)}%]`;
  };

  return (
    <div className="fixed top-0 left-0 w-full z-50">
      <div className="h-2 bg-gray-200">
        <div 
          className={`h-full bg-purple-600 transition-all duration-300 ${getWidthClass(progress)}`}
        />
      </div>
      <div className="text-center text-sm text-purple-600 mt-1">
        {current} / {total} 문항
      </div>
    </div>
  );
};