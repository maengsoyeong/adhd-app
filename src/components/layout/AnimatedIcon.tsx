import React from 'react';
import { motion } from 'framer-motion';

interface AnimatedIconProps {
  icon: React.ReactNode;
  color?: string;
  size?: 'sm' | 'md' | 'lg';
  animation?: 'hover' | 'pulse' | 'bounce' | 'spin';
  className?: string;
}

const AnimatedIcon: React.FC<AnimatedIconProps> = ({
  icon,
  color = 'text-purple-600',
  size = 'md',
  animation = 'hover',
  className = '',
}) => {
  // 사이즈별 클래스 매핑
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16',
  };

  // 애니메이션 변형 설정
  const animations = {
    hover: {
      whileHover: { scale: 1.1 },
      whileTap: { scale: 0.95 },
      transition: { type: "spring", stiffness: 400, damping: 17 }
    },
    pulse: {
      animate: {
        scale: [1, 1.05, 1],
        opacity: [0.8, 1, 0.8],
      },
      transition: {
        duration: 2,
        ease: "easeInOut",
        repeat: Infinity,
      }
    },
    bounce: {
      animate: {
        y: ["0%", "-15%", "0%"],
      },
      transition: {
        duration: 1.5,
        ease: "easeInOut",
        repeat: Infinity,
      }
    },
    spin: {
      animate: {
        rotate: 360,
      },
      transition: {
        duration: 2,
        ease: "linear",
        repeat: Infinity,
      }
    }
  };

  // 선택된 애니메이션 설정 가져오기
  const selectedAnimation = animations[animation];

  return (
    <motion.div
      className={`
        flex items-center justify-center rounded-full
        bg-purple-50 ${color} ${sizeClasses[size]} ${className}
        transition-colors duration-300 hover:bg-purple-100
      `}
      {...selectedAnimation}
    >
      {icon}
    </motion.div>
  );
};

// 사용 예시를 위한 미리 정의된 아이콘들
export const IconVariants = {
  Check: (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
    </svg>
  ),
  Star: (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
    </svg>
  ),
  Lightning: (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
  ),
  Brain: (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
    </svg>
  ),
};

export default AnimatedIcon;
