import React from 'react';

export interface ProgressBarProps {
  current: number;
  total: number;
  className?: string;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ current, total, className = '' }) => {
  const percentage = Math.round((current / total) * 100);
  
  return (
    <div className={`w-full bg-gray-200 rounded-full h-2.5 ${className}`}>
      <div 
        className={`bg-purple-600 h-2.5 rounded-full transition-all duration-300 ease-in-out w-[${percentage}%]`}
      ></div>
    </div>
  );
};

export default ProgressBar; 