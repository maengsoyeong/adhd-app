import React from 'react';
import { useTheme } from '../../contexts/ThemeContext';

export interface ButtonProps {
  /** 버튼 내용 */
  children: React.ReactNode;
  /** 버튼 종류 */
  variant?: 'primary' | 'secondary' | 'outline' | 'danger' | 'success';
  /** 버튼 크기 */
  size?: 'sm' | 'md' | 'lg';
  /** 클릭 핸들러 */
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  /** 비활성화 여부 */
  disabled?: boolean;
  /** 추가 클래스명 */
  className?: string;
  /** 버튼 타입 */
  type?: 'button' | 'submit' | 'reset';
  /** 전체 너비 사용 여부 */
  fullWidth?: boolean;
  /** 아이콘 (있는 경우) */
  icon?: React.ReactNode;
  /** 아이콘 위치 */
  iconPosition?: 'left' | 'right';
  /** aria-label (접근성) */
  ariaLabel?: string;
}

/**
 * 다양한 스타일과 크기를 지원하는 버튼 컴포넌트
 */
const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  onClick,
  disabled = false,
  className = '',
  type = 'button',
  fullWidth = false,
  icon,
  iconPosition = 'left',
  ariaLabel,
}) => {
  const { mode } = useTheme();
  const isDark = mode === 'dark';

  // 기본 클래스
  const baseClasses = 'font-medium rounded transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 inline-flex items-center justify-center';
  
  // 변형에 따른 클래스
  const variantClasses = {
    primary: isDark 
      ? 'bg-purple-500 hover:bg-purple-600 text-white focus:ring-purple-400'
      : 'bg-purple-600 hover:bg-purple-700 text-white focus:ring-purple-500',
    secondary: isDark
      ? 'bg-gray-600 hover:bg-gray-700 text-white focus:ring-gray-500'
      : 'bg-gray-200 hover:bg-gray-300 text-gray-800 focus:ring-gray-400',
    outline: isDark
      ? 'bg-transparent border border-purple-400 text-purple-400 hover:bg-purple-900 focus:ring-purple-400'
      : 'bg-transparent border border-purple-600 text-purple-600 hover:bg-purple-50 focus:ring-purple-500',
    danger: isDark
      ? 'bg-red-500 hover:bg-red-600 text-white focus:ring-red-400'
      : 'bg-red-600 hover:bg-red-700 text-white focus:ring-red-500',
    success: isDark
      ? 'bg-green-500 hover:bg-green-600 text-white focus:ring-green-400'
      : 'bg-green-600 hover:bg-green-700 text-white focus:ring-green-500',
  };
  
  // 크기에 따른 클래스
  const sizeClasses = {
    sm: 'py-1 px-3 text-sm',
    md: 'py-2 px-4 text-base',
    lg: 'py-3 px-6 text-lg',
  };
  
  // 너비 클래스
  const widthClass = fullWidth ? 'w-full' : '';
  
  // 비활성화 클래스
  const disabledClass = disabled ? 'opacity-50 cursor-not-allowed' : '';
  
  // 최종 클래스 조합
  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${widthClass} ${disabledClass} ${className}`;
  
  return (
    <button
      type={type}
      className={classes}
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
    >
      {icon && iconPosition === 'left' && <span className="mr-2">{icon}</span>}
      {children}
      {icon && iconPosition === 'right' && <span className="ml-2">{icon}</span>}
    </button>
  );
};

export default Button; 