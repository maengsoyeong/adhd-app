import React from 'react';
import { Link } from 'react-router-dom';

interface LogoProps {
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({ className = '' }) => {
  return (
    <Link to="/" className={`flex items-center ${className}`}>
      <img 
        src="/logo.png" 
        alt="퍼즐핏 로고" 
        className="h-10 w-auto"
        onError={(e) => {
          console.error("로고 이미지 로드 실패");
          const target = e.target as HTMLImageElement;
          // 로고 이미지 로드 실패 시 SVG 로고로 대체
          target.style.display = 'none';
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
                fill="#8B5CF6"
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
          target.parentElement!.appendChild(svgLogo.firstChild as Node);
        }}
      />
      <span className="ml-2 text-xl font-bold text-purple-600">퍼즐핏</span>
    </Link>
  );
};

export default Logo; 