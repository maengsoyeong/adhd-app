import React, { useEffect, useRef } from 'react';
import { useTheme } from '../../contexts/ThemeContext';

interface Star {
  x: number;
  y: number;
  size: number;
  opacity: number;
  speed: number;
  twinkleSpeed: number;
  twinkleDirection: number;
  isFalling: boolean;
  fallSpeed: number;
  fallAngle: number;
}

const StarryNightBackground: React.FC = () => {
  const { mode } = useTheme();
  const isDark = mode === 'dark';
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const starsRef = useRef<Star[]>([]);
  const animationRef = useRef<number | null>(null);
  const frameCountRef = useRef(0);

  // 별 초기화 함수
  const initStars = (width: number, height: number) => {
    const stars: Star[] = [];
    const starCount = Math.floor((width * height) / 2500); // 화면 크기에 비례한 별 개수
    
    for (let i = 0; i < starCount; i++) {
      stars.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 2 + 0.5,
        opacity: Math.random() * 0.8 + 0.2,
        speed: Math.random() * 0.05 + 0.01,
        twinkleSpeed: Math.random() * 0.01 + 0.005,
        twinkleDirection: Math.random() > 0.5 ? 1 : -1,
        isFalling: false,
        fallSpeed: Math.random() * 5 + 3,
        fallAngle: Math.random() * 0.5 + 0.2
      });
    }
    
    starsRef.current = stars;
  };

  // 별 그리기 함수
  const drawStars = (ctx: CanvasRenderingContext2D, width: number, height: number) => {
    ctx.clearRect(0, 0, width, height);
    
    // 프레임 카운트 증가
    frameCountRef.current += 1;
    
    // 가끔 별똥별 생성 (약 100프레임마다 1개)
    if (frameCountRef.current % 100 === 0) {
      const starIndex = Math.floor(Math.random() * starsRef.current.length);
      if (!starsRef.current[starIndex].isFalling) {
        starsRef.current[starIndex].isFalling = true;
        starsRef.current[starIndex].size = Math.random() * 2 + 1.5; // 별똥별은 조금 더 크게
      }
    }
    
    starsRef.current.forEach(star => {
      if (star.isFalling) {
        // 별똥별 그리기 (꼬리 포함)
        ctx.beginPath();
        ctx.moveTo(star.x, star.y);
        ctx.lineTo(star.x - star.fallSpeed * 5 * star.fallAngle, star.y - star.fallSpeed * 5);
        ctx.strokeStyle = `rgba(255, 255, 255, ${star.opacity * 0.5})`;
        ctx.lineWidth = star.size / 2;
        ctx.stroke();
        
        // 별똥별 이동
        star.x += star.fallSpeed * star.fallAngle;
        star.y += star.fallSpeed;
        
        // 화면 밖으로 나가면 재설정
        if (star.y > height || star.x > width || star.x < 0) {
          star.isFalling = false;
          star.x = Math.random() * width;
          star.y = Math.random() * (height / 3); // 상단 1/3 영역에서 시작
          star.size = Math.random() * 2 + 0.5;
          star.fallSpeed = Math.random() * 5 + 3;
          star.fallAngle = Math.random() * 0.5 + 0.2;
        }
      } else {
        // 일반 별 반짝임 효과
        star.opacity += star.twinkleSpeed * star.twinkleDirection;
        if (star.opacity >= 1 || star.opacity <= 0.2) {
          star.twinkleDirection *= -1;
        }
        
        // 일반 별 아주 천천히 움직임
        star.y -= star.speed;
        if (star.y < -10) {
          star.y = height + 10;
          star.x = Math.random() * width;
        }
      }
      
      // 별 그리기
      ctx.beginPath();
      ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
      ctx.fill();
    });
  };

  // 애니메이션 함수
  const animate = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    drawStars(ctx, canvas.width, canvas.height);
    animationRef.current = requestAnimationFrame(animate);
  };

  // 캔버스 크기 조정 함수
  const resizeCanvas = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    initStars(canvas.width, canvas.height);
  };

  // 컴포넌트 마운트/언마운트 시 이벤트 처리
  useEffect(() => {
    if (!isDark) {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
        animationRef.current = null;
      }
      return;
    }
    
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    
    animate();
    
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isDark]);

  if (!isDark) return null;

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-[-1]"
    />
  );
};

export default StarryNightBackground; 