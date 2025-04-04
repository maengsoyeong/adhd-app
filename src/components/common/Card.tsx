import React from 'react';
import { useTheme } from '../../contexts/ThemeContext';

export interface CardProps {
  /** 카드 내용 */
  children: React.ReactNode;
  /** 카드 제목 */
  title?: string;
  /** 추가 클래스명 */
  className?: string;
  /** 헤더 클래스명 */
  headerClassName?: string;
  /** 본문 클래스명 */
  bodyClassName?: string;
  /** 푸터 내용 */
  footer?: React.ReactNode;
  /** 푸터 클래스명 */
  footerClassName?: string;
  /** 그림자 크기 */
  shadow?: 'none' | 'sm' | 'md' | 'lg';
  /** 테두리 여부 */
  bordered?: boolean;
  /** 패딩 여부 */
  noPadding?: boolean;
  /** 헤더 액션 버튼 */
  headerAction?: React.ReactNode;
}

/**
 * 다양한 레이아웃 옵션을 제공하는 카드 컴포넌트
 */
const Card: React.FC<CardProps> = ({
  children,
  title,
  className = '',
  headerClassName = '',
  bodyClassName = '',
  footer,
  footerClassName = '',
  shadow = 'md',
  bordered = false,
  noPadding = false,
  headerAction,
}) => {
  const { mode } = useTheme();
  const isDark = mode === 'dark';
  
  // 그림자 클래스
  const shadowClasses = {
    none: '',
    sm: 'shadow-sm',
    md: 'shadow-md',
    lg: 'shadow-lg',
  };
  
  // 배경 및 테두리 클래스
  const bgClass = isDark ? 'bg-gray-800' : 'bg-white';
  const borderClass = bordered 
    ? isDark ? 'border border-gray-700' : 'border border-gray-200' 
    : '';
  const textClass = isDark ? 'text-gray-200' : 'text-gray-800';
  
  // 패딩 클래스
  const paddingClass = noPadding ? '' : 'p-4';
  
  return (
    <div className={`rounded-lg overflow-hidden ${bgClass} ${borderClass} ${shadowClasses[shadow]} ${className}`}>
      {title && (
        <div className={`flex justify-between items-center px-4 py-3 border-b ${isDark ? 'border-gray-700' : 'border-gray-200'} ${headerClassName}`}>
          <h3 className={`text-lg font-semibold ${textClass}`}>{title}</h3>
          {headerAction && <div>{headerAction}</div>}
        </div>
      )}
      
      <div className={`${noPadding ? '' : paddingClass} ${bodyClassName}`}>
        {children}
      </div>
      
      {footer && (
        <div className={`px-4 py-3 ${isDark ? 'bg-gray-700 border-t border-gray-700' : 'bg-gray-50 border-t border-gray-200'} ${footerClassName}`}>
          {footer}
        </div>
      )}
    </div>
  );
};

export default Card; 