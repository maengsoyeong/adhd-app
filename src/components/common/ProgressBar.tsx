import React from 'react';
import { useTheme } from '../../contexts/ThemeContext';

export interface ProgressBarProps {
  /** 현재 값 */
  value: number;
  /** 최대 값 */
  max: number;
  /** 라벨 텍스트 */
  label?: string;
  /** 퍼센트 표시 여부 */
  showPercentage?: boolean;
  /** 추가 클래스명 */
  className?: string;
  /** 색상 */
  color?: 'primary' | 'success' | 'warning' | 'danger' | 'info';
  /** 크기 */
  size?: 'sm' | 'md' | 'lg';
  /** 애니메이션 여부 */
  animated?: boolean;
  /** 스트라이프 패턴 여부 */
  striped?: boolean;
  /** 라벨 위치 */
  labelPosition?: 'top' | 'inside';
}

/**
 * 다양한 스타일 옵션을 제공하는 진행 표시줄 컴포넌트
 */
const ProgressBar: React.FC<ProgressBarProps> = ({
  value,
  max,
  label,
  showPercentage = false,
  className = '',
  color = 'primary',
  size = 'md',
  animated = false,
  striped = false,
  labelPosition = 'top',
}) => {
  const { mode } = useTheme();
  const isDark = mode === 'dark';
  
  // 퍼센트 계산
  const percentage = Math.min(Math.round((value / max) * 100), 100);
  
  // 색상 클래스
  const colorClasses = {
    primary: isDark ? 'bg-purple-500' : 'bg-purple-600',
    success: isDark ? 'bg-green-500' : 'bg-green-600',
    warning: isDark ? 'bg-yellow-500' : 'bg-yellow-600',
    danger: isDark ? 'bg-red-500' : 'bg-red-600',
    info: isDark ? 'bg-blue-500' : 'bg-blue-600',
  };
  
  // 크기 클래스
  const sizeClasses = {
    sm: 'h-1',
    md: 'h-2.5',
    lg: 'h-4',
  };
  
  // 배경 클래스
  const bgClass = isDark ? 'bg-gray-700' : 'bg-gray-200';
  
  // 애니메이션 클래스
  const animationClass = animated ? 'animate-pulse' : '';
  
  // 스트라이프 패턴 클래스 (CSS로 구현 필요)
  const stripedClass = striped ? 'bg-stripes' : '';
  
  // 라벨 텍스트 색상
  const labelColorClass = isDark ? 'text-gray-300' : 'text-gray-700';
  
  return (
    <div className={`w-full ${className}`}>
      {label && labelPosition === 'top' && (
        <div className="flex justify-between mb-1">
          <span className={`text-sm font-medium ${labelColorClass}`}>{label}</span>
          {showPercentage && (
            <span className={`text-sm font-medium ${labelColorClass}`}>{percentage}%</span>
          )}
        </div>
      )}
      
      <div className={`w-full ${bgClass} rounded-full ${sizeClasses[size]} overflow-hidden`}>
        <div 
          className={`${colorClasses[color]} ${sizeClasses[size]} rounded-full ${animationClass} ${stripedClass} relative`} 
          style={{ width: `${percentage}%` }}
        >
          {label && labelPosition === 'inside' && size === 'lg' && (
            <span className="absolute inset-0 flex items-center justify-center text-xs font-semibold text-white">
              {showPercentage ? `${percentage}%` : label}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProgressBar; 