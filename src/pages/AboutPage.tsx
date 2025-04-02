import React, { useEffect, useRef } from 'react';
import NavBar from '../components/NavBar';

const AboutPage: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  // 별이 빛나는 배경 효과 구현
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // 캔버스 크기 설정
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
    
    // 별 생성
    class Star {
      x: number;
      y: number;
      size: number;
      opacity: number;
      speed: number;
      
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2;
        this.opacity = Math.random();
        this.speed = 0.005 + Math.random() * 0.01;
      }
      
      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity})`;
        ctx.fill();
      }
      
      update() {
        this.opacity += Math.sin(Date.now() * this.speed) * 0.01;
        this.opacity = Math.max(0, Math.min(1, this.opacity));
        this.draw();
      }
    }
    
    // 별 배열 생성
    const stars: Star[] = [];
    const starCount = Math.floor((canvas.width * canvas.height) / 2000); // 화면 크기에 비례한 별 개수
    
    for (let i = 0; i < starCount; i++) {
      stars.push(new Star());
    }
    
    // 애니메이션 루프
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // 별 그리기
      stars.forEach(star => star.update());
      
      requestAnimationFrame(animate);
    };
    
    animate();
    
    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);
  
  return (
    <div className="min-h-screen relative overflow-hidden bg-gray-900 text-white">
      {/* 별이 빛나는 배경 */}
      <canvas 
        ref={canvasRef} 
        className="absolute top-0 left-0 w-full h-full z-0"
      />
      
      {/* 네비게이션 바 */}
      <div className="relative z-10">
        <NavBar />
      </div>
      
      {/* 메인 콘텐츠 */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            퍼즐핏에 대하여
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            우리는 정신 건강 관리를 통해 모든 사람이 자신의 잠재력을 최대한 발휘할 수 있도록 돕습니다.
          </p>
        </div>
        
        {/* 회사 소개 섹션 */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <div className="bg-gray-800 bg-opacity-70 p-8 rounded-lg backdrop-filter backdrop-blur-sm">
            <h2 className="text-2xl font-bold mb-4 text-blue-400">우리의 이야기</h2>
            <p className="text-gray-300 mb-4">
              퍼즐핏은 2023년, 정신 건강 관리의 중요성을 인식한 전문가들이 모여 설립했습니다. 
              우리는 ADHD, 우울증, 불안장애 등 다양한 정신 건강 문제를 가진 사람들이 
              적절한 도움을 받지 못하는 현실에 주목했습니다.
            </p>
            <p className="text-gray-300">
              퍼즐핏이라는 이름은 각 개인의 고유한 특성이 사회라는 큰 퍼즐에 완벽하게 맞아떨어질 때 
              진정한 행복과 성취감을 느낄 수 있다는 우리의 믿음을 담고 있습니다.
            </p>
          </div>
          
          <div className="bg-gray-800 bg-opacity-70 p-8 rounded-lg backdrop-filter backdrop-blur-sm">
            <h2 className="text-2xl font-bold mb-4 text-purple-400">미션 & 비전</h2>
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2 text-purple-300">미션</h3>
              <p className="text-gray-300">
                정신 건강에 대한 인식을 개선하고, 누구나 쉽게 접근할 수 있는 
                자가진단 및 관리 도구를 제공하여 더 건강하고 행복한 사회를 만듭니다.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2 text-purple-300">비전</h3>
              <p className="text-gray-300">
                2030년까지 아시아 최고의 정신 건강 플랫폼으로 성장하여 
                1억 명 이상의 사람들이 자신의 정신 건강을 이해하고 관리할 수 있도록 돕습니다.
              </p>
            </div>
          </div>
        </div>
        
        {/* 핵심 가치 섹션 */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">핵심 가치</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-800 bg-opacity-70 p-6 rounded-lg backdrop-filter backdrop-blur-sm text-center">
              <div className="w-16 h-16 bg-blue-500 bg-opacity-20 rounded-full flex items-center justify-center text-blue-400 text-2xl mx-auto mb-4">
                ❤️
              </div>
              <h3 className="text-xl font-semibold mb-3 text-blue-400">공감</h3>
              <p className="text-gray-300">
                우리는 모든 사람의 고유한 경험과 감정을 존중하며, 
                진정한 이해와 공감을 바탕으로 서비스를 제공합니다.
              </p>
            </div>
            
            <div className="bg-gray-800 bg-opacity-70 p-6 rounded-lg backdrop-filter backdrop-blur-sm text-center">
              <div className="w-16 h-16 bg-purple-500 bg-opacity-20 rounded-full flex items-center justify-center text-purple-400 text-2xl mx-auto mb-4">
                🔍
              </div>
              <h3 className="text-xl font-semibold mb-3 text-purple-400">과학적 접근</h3>
              <p className="text-gray-300">
                모든 서비스와 콘텐츠는 최신 연구와 과학적 증거를 
                바탕으로 개발되며 지속적으로 개선됩니다.
              </p>
            </div>
            
            <div className="bg-gray-800 bg-opacity-70 p-6 rounded-lg backdrop-filter backdrop-blur-sm text-center">
              <div className="w-16 h-16 bg-green-500 bg-opacity-20 rounded-full flex items-center justify-center text-green-400 text-2xl mx-auto mb-4">
                🌱
              </div>
              <h3 className="text-xl font-semibold mb-3 text-green-400">접근성</h3>
              <p className="text-gray-300">
                정신 건강 관리는 모든 사람의 권리입니다. 
                우리는 누구나 쉽게 접근하고 이용할 수 있는 서비스를 제공합니다.
              </p>
            </div>
          </div>
        </div>
        
        {/* 팀 소개 섹션 */}
        <div>
          <h2 className="text-3xl font-bold text-center mb-12 text-white">전문가 팀</h2>
          
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { name: '김지원', role: '임상심리전문가', image: '👩‍⚕️' },
              { name: '이민준', role: '정신건강의학과 전문의', image: '👨‍⚕️' },
              { name: '박서연', role: '소프트웨어 엔지니어', image: '👩‍💻' },
              { name: '최준호', role: 'UX/UI 디자이너', image: '👨‍🎨' }
            ].map((member, index) => (
              <div key={index} className="bg-gray-800 bg-opacity-70 p-6 rounded-lg backdrop-filter backdrop-blur-sm text-center">
                <div className="w-20 h-20 bg-gray-700 rounded-full flex items-center justify-center text-4xl mx-auto mb-4">
                  {member.image}
                </div>
                <h3 className="text-xl font-semibold text-white">{member.name}</h3>
                <p className="text-gray-400">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage; 