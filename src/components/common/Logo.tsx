import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'default' | 'white';
}

const Logo: React.FC<LogoProps> = ({ className = "h-8 w-auto", variant = 'default' }) => {
  // 이미지에 맞게 텍스트 로고만 사용
  return (
    <span className={`text-3xl font-bold ${variant === 'white' ? 'text-white' : 'text-purple-600'}`}>
      퍼즐핏
    </span>
  );
};

export default Logo; 