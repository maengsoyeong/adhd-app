import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../../contexts/ThemeContext';

// 로고 이미지 임포트 시도
let logoImage: string | undefined;
try {
  // 동적 임포트 시도
  logoImage = require('../../assets/logo.png');
} catch (error) {
  console.warn('로고 이미지를 찾을 수 없습니다. SVG 로고를 사용합니다.');
  logoImage = undefined;
}

export interface LogoProps {
  /** 추가 클래스명 */
  className?: string;
  /** 로고 크기 */
  size?: 'sm' | 'md' | 'lg';
  /** 링크 비활성화 */
  noLink?: boolean;
  /** 대체 텍스트 */
  alt?: string;
}

/**
 * 애플리케이션 로고 컴포넌트
 */
const Logo: React.FC<LogoProps> = ({
  className = '',
  size = 'md',
  noLink = false,
  alt = 'PuzzleFit Logo',
}) => {
  const { mode } = useTheme();
  
  // 크기 클래스
  const sizeClasses = {
    sm: 'h-6',
    md: 'h-8',
    lg: 'h-10',
  };
  
  // 로고 이미지 또는 SVG
  const logoContent = (
    <img src="/logo.svg" alt={alt} className={`${sizeClasses[size]} ${className}`} />
  );
  
  // 링크 여부에 따라 다른 렌더링
  if (noLink) {
    return logoContent;
  }
  
  return (
    <Link to="/" className="flex items-center">
      {logoContent}
    </Link>
  );
};

// SVG 로고를 렌더링하는 헬퍼 함수
function renderSvgLogo(parent: Element, mode: string) {
  const svgLogo = document.createElement('div');
  svgLogo.innerHTML = `
    <svg 
      width="40" 
      height="40" 
      viewBox="0 0 40 40" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      class="h-10 w-auto"
    >
      <path 
        d="M20 5C21.6569 5 23 6.34315 23 8V11C23 12.6569 24.3431 14 26 14H29C30.6569 14 32 15.3431 32 17V23C32 24.6569 30.6569 26 29 26H26C24.3431 26 23 27.3431 23 29V32C23 33.6569 21.6569 35 20 35H14C12.3431 35 11 33.6569 11 32V29C11 27.3431 9.65685 26 8 26H5C3.34315 26 2 24.6569 2 23V17C2 15.3431 3.34315 14 5 14H8C9.65685 14 11 12.6569 11 11V8C11 6.34315 12.3431 5 14 5H20Z" 
        fill="${mode === 'dark' ? '#a78bfa' : '#8B5CF6'}"
      />
      <path 
        d="M20 10C19.4477 10 19 10.4477 19 11V17C19 17.5523 19.4477 18 20 18C20.5523 18 21 17.5523 21 17V11C21 10.4477 20.5523 10 20 10Z" 
        fill="white"
      />
      <path 
        d="M14 22C13.4477 22 13 22.4477 13 23V29C13 29.5523 13.4477 30 14 30C14.5523 30 15 29.5523 15 29V23C15 22.4477 14.5523 22 14 22Z" 
        fill="white"
      />
    </svg>
  `;
  parent.appendChild(svgLogo.firstChild as Node);
}

export default Logo; 