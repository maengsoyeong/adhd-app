import React from 'react';

interface ProgressBarProps {
  current: number;
  total: number;
}

const ProgressIndicator = ({ width }: { width: number }) => {
  const widthClasses = {
    0: 'w-0',
    10: 'w-[10%]',
    20: 'w-[20%]',
    30: 'w-[30%]',
    40: 'w-[40%]',
    50: 'w-[50%]',
    60: 'w-[60%]',
    70: 'w-[70%]',
    80: 'w-[80%]',
    90: 'w-[90%]',
    100: 'w-full',
  };

  // 가장 가까운 10의 배수로 반올림
  const normalizedWidth = Math.round(width / 10) * 10;
  const widthClass = widthClasses[normalizedWidth as keyof typeof widthClasses] || 'w-0';

  return (
    <div className={`h-full bg-purple-600 transition-all duration-300 ${widthClass}`} />
  );
};

export const ProgressBar: React.FC<ProgressBarProps> = ({ current, total }) => {
  const progress = (current / total) * 100;

  return (
    <div className="fixed top-0 left-0 w-full z-50">
      <div className="h-2 bg-gray-200">
        <ProgressIndicator width={progress} />
      </div>
      <div className="text-center text-sm text-purple-600 mt-1">
        {current} / {total} 문항
      </div>
    </div>
  );
}; 