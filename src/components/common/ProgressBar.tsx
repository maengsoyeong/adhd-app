import React from 'react';

export interface ProgressBarProps {
  /** 진행률 (0-100) */
  value: number;
  /** 최대값 */
  max?: number;
  /** 프로그레스 바 크기 */
  size?: 'sm' | 'md' | 'lg';
  /** 프로그레스 바 색상 */
  color?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info';
  /** 스트라이프 패턴 적용 */
  striped?: boolean;
  /** 애니메이션 적용 */
  animated?: boolean;
  /** 라벨 표시 */
  label?: string;
  /** 퍼센트 표시 */
  showPercent?: boolean;
  /** 추가 클래스명 */
  className?: string;
}

// 라벨 컴포넌트
const ProgressLabel: React.FC<{
  label: string;
  showPercent: boolean;
  percentage: number;
}> = ({ label, showPercent, percentage }) => (
  <div className="flex justify-between items-center mb-2">
    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
      {label}
    </span>
    {showPercent && (
      <span className="text-xs font-medium text-gray-500 dark:text-gray-400">
        {Math.round(percentage)}%
      </span>
    )}
  </div>
);

/**
 * 진행 상태를 표시하는 프로그레스 바 컴포넌트
 */
const ProgressBar: React.FC<ProgressBarProps> = ({
  value,
  max = 100,
  size = 'md',
  color = 'primary',
  striped = false,
  animated = false,
  label,
  showPercent = false,
  className = '',
}) => {
  // 진행률 계산 (0-100 사이의 값으로 제한)
  const percentage = Math.min(Math.max(0, (value / max) * 100), 100);
  
  // 크기에 따른 높이 클래스
  const sizeClasses = {
    sm: 'h-1',
    md: 'h-2',
    lg: 'h-3',
  };
  
  // 색상에 따른 배경색 클래스
  const colorClasses = {
    primary: 'bg-purple-600',
    secondary: 'bg-gray-500',
    success: 'bg-green-500',
    danger: 'bg-red-500',
    warning: 'bg-yellow-500',
    info: 'bg-blue-500',
  };
  
  // 애니메이션 클래스
  const animationClass = animated ? 'animate-pulse' : '';
  
  // 스트라이프 패턴을 위한 스타일 객체
  const stripedStyle = striped ? {
    backgroundImage: 'linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent)',
    backgroundSize: '1rem 1rem',
  } : {};
  
  return (
    <div className={className}>
      {label && (
        <ProgressLabel 
          label={label} 
          showPercent={showPercent} 
          percentage={percentage} 
        />
      )}
      
      <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700 overflow-hidden">
        <div 
          className={`${sizeClasses[size]} ${colorClasses[color]} rounded-full ${animationClass}`}
          style={{ 
            width: `${percentage}%`,
            ...stripedStyle
          }}
          role="progressbar"
          aria-valuenow={value}
          aria-valuemin={0}
          aria-valuemax={max}
        />
      </div>
    </div>
  );
};

export default ProgressBar; 