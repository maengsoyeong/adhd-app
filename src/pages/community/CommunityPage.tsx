import React, { useEffect, useState } from 'react';

// 별에 대한 타입 정의
interface Star {
  id: number;
  x: number;
  y: number;
  size: number;
  opacity: number;
}

// 별똥별에 대한 타입 정의
interface ShootingStar {
  id: number;
  startX: number;
  startY: number;
  length: number;
  speed: number;
  angle: number;
}

const CommunityPage: React.FC = () => {
  // 별 생성을 위한 상태 (명확한 타입 지정)
  const [stars, setStars] = useState<Star[]>([]);
  // 별똥별 생성을 위한 상태 (명확한 타입 지정)
  const [shootingStars, setShootingStars] = useState<ShootingStar[]>([]);
  
  // 마법봉 커서 추가
  useEffect(() => {
    const cursorEl = document.createElement('div');
    cursorEl.id = 'magic-cursor';
    cursorEl.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      width: 32px;
      height: 32px;
      background-image: url('/cursor-wand.png');
      background-size: contain;
      background-repeat: no-repeat;
      pointer-events: none;
      z-index: 9999;
      transform: rotate(-30deg);
      transition: transform 0.1s ease-out;
      display: none;
    `;
    document.body.appendChild(cursorEl);

    // HTMLElement로 타입 지정
    const contentArea = document.querySelector('.community-content') as HTMLElement;
    
    const moveCursor = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (contentArea?.contains(target)) {
        cursorEl.style.display = 'block';
        cursorEl.style.left = `${e.clientX - 16}px`;
        cursorEl.style.top = `${e.clientY - 16}px`;
        const rotation = (Math.sin(Date.now() / 500) * 15) - 30;
        cursorEl.style.transform = `rotate(${rotation}deg)`;
        contentArea.style.cursor = 'none';
      } else {
        cursorEl.style.display = 'none';
        if (contentArea) contentArea.style.cursor = 'auto';
      }
    };

    document.addEventListener('mousemove', moveCursor);

    return () => {
      document.removeEventListener('mousemove', moveCursor);
      document.body.removeChild(cursorEl);
      if (contentArea) contentArea.style.cursor = 'auto';
    };
  }, []);

  // 초기 별 생성
  useEffect(() => {
    const createStars = () => {
      const newStars: Star[] = [];
      const starCount = 100;
      for (let i = 0; i < starCount; i++) {
        newStars.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 0.2 + 0.1,
          opacity: Math.random() * 0.9 + 0.1
        });
      }
      setStars(newStars);
    };
    createStars();
  }, []);

  // 별똥별 생성 효과
  useEffect(() => {
    const createShootingStar = () => {
      const id = Date.now();
      const startX = Math.random() * 100;
      const startY = Math.random() * 30;
      const length = Math.random() * 20 + 10;
      const speed = Math.random() * 4 + 2;
      const angle = Math.random() * 20 + 20;
      setShootingStars(prev => [...prev, { id, startX, startY, length, speed, angle }]);
      setTimeout(() => {
        setShootingStars(prev => prev.filter(star => star.id !== id));
      }, 2000);
    };

    const interval = setInterval(() => {
      createShootingStar();
    }, 5000);

    createShootingStar();
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-900 via-purple-800 to-purple-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a2a] via-[#1a1a4a] to-[#2a1a6a] z-0">
        {stars.map(star => (
          <div
            key={star.id}
            className="absolute rounded-full bg-white animate-twinkle"
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
              width: `${star.size}rem`,
              height: `${star.size}rem`,
              opacity: star.opacity,
              animationDuration: `${Math.random() * 3 + 2}s`,
              boxShadow: `0 0 ${star.size * 3}px rgba(255, 255, 255, 0.8)`
            }}
          />
        ))}

        {shootingStars.map(star => (
          <div
            key={star.id}
            className="absolute animate-shooting-star"
            style={{
              left: `${star.startX}%`,
              top: `${star.startY}%`,
              width: `${star.length}px`,
              height: '2px',
              background: 'linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 100%)',
              boxShadow: '0 0 4px #fff, 0 0 10px #fff',
            }}
          />
        ))}
      </div>

      <div className="relative z-10 pt-20 pb-16 community-content">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <img 
              src="/logo.png" 
              alt="퍼즐핏 로고" 
              className="w-32 h-32 mx-auto mb-6 animate-float"
            />
            <h1 className="text-4xl font-bold text-white mb-4">
              커뮤니티
            </h1>
            <p className="text-xl text-purple-200">
              ADHD에 대한 경험과 정보를 공유하는 공간입니다.
            </p>
          </div>
          
          <div className="bg-white/50 backdrop-blur-md rounded-xl p-8 text-center max-w-2xl mx-auto">
            <h2 className="text-xl font-semibold mb-4 flex items-center">
              <span className="mr-2 text-yellow-300">★</span>
              ADHD 관련 커뮤니티 기능 준비 중
            </h2>
            <p>
              현재 ADHD 관련 게시판, 질문/답변, 정보 공유 등의 커뮤니티 기능을 개발하고 있습니다.</p>
            <p> 곧 더 나은 서비스로 찾아뵙겠습니다. </p>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes twinkle {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 1; }
        }
      `}</style>
    </div>
  );
};

export default CommunityPage;
