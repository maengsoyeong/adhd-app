import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ProblemAwareness: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  const issues = [
    {
      title: '주의력 부족',
      description: '중요한 일을 해도 금방 딴생각에 빠지거나, 세세한 디테일을 자주 놓칩니다.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      title: '과잉 집중 (하이퍼포커스)',
      description: '관심 있는 일엔 몰입하지만, 그 외의 일은 시작조차 어렵습니다.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
        </svg>
      )
    },
    {
      title: '감정 기복',
      description: '짜증, 불안, 분노 등의 감정이 빠르게 올라오며, 조절이 어렵습니다.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: '충동성',
      description: '말이나 행동이 앞서나가 후회하는 경우가 많고, 대인관계에 마찰이 생깁니다.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      title: '실행 기능 저하',
      description: '해야 할 일의 우선순위를 정하고, 계획하고, 완료하는 데 어려움을 겪습니다.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
        </svg>
      )
    },
    {
      title: '시간 감각의 왜곡',
      description: '시간이 얼마나 흘렀는지 감지하지 못하고, 자주 마감을 놓치거나 지각합니다.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: '작업 시작의 어려움',
      description: '해야 하는 걸 알고 있어도, 시작하기까지 엄청난 에너지가 필요합니다.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 9v6m3-3H7m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: '만성 피로와 수면 문제',
      description: '충분히 자도 개운하지 않고, 아침에 일어나는 게 극도로 어렵고 알람을 여러 번 끕니다.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
        </svg>
      )
    },
    {
      title: '기억력 저하',
      description: '방금 들은 이야기나 해야 할 일을 자주 잊어버립니다. 메모 없이 어렵습니다.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      title: '지속적 동기 부족',
      description: '보상이 뚜렷하지 않으면 행동으로 이어지지 않고, 쉽게 지칩니다.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
        </svg>
      )
    },
    {
      title: '과도한 걱정과 불안',
      description: '작은 일에도 \'망하면 어쩌지\' 생각이 끊임없이 떠오르고, 긴장이 지속됩니다.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: '감각 과민',
      description: '시끄러운 소리, 강한 빛, 특정 냄새 등에 예민하게 반응하고 쉽게 지칩니다.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
        </svg>
      )
    }
  ];

  // 총 페이지 수 계산 (3개씩 묶음)
  const totalPages = Math.ceil(issues.length / 3);

  // 자동 슬라이드 기능
  useEffect(() => {
    let interval: ReturnType<typeof setTimeout>;
    
    if (autoPlay) {
      interval = setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % totalPages);
      }, 2000); // 2초마다 다음 페이지로
    }
    
    return () => clearInterval(interval);
  }, [autoPlay, totalPages]);

  // 슬라이드 변환 함수
  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % totalPages);
    setAutoPlay(false);
    setTimeout(() => setAutoPlay(true), 10000);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + totalPages) % totalPages);
    setAutoPlay(false);
    setTimeout(() => setAutoPlay(true), 10000);
  };

  // 현재 페이지에 표시할 카드 인덱스들 (3개씩)
  const getVisibleCardIndices = (): number[] => {
    const startIdx = activeIndex * 3;
    const result: number[] = [];
    for (let i = 0; i < 3; i++) {
      if (startIdx + i < issues.length) {
        result.push(startIdx + i);
      }
    }
    return result;
  };

  return (
    <section className="py-20 bg-gradient-to-b from-white to-purple-50">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            놓치기 쉬운 성인 ADHD
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            성인 ADHD는 다양한 증상으로 나타나지만
            <br className="hidden md:block" />
            많은 사람들이 자신이 그런지조차 모릅니다.
            <br className="hidden md:block" />
            <span className="text-purple-600 font-medium">퍼즐핏은 당신의 패턴을 정밀하게 분석해드립니다.</span>
          </p>
        </motion.div>

        {/* 모바일: 카드 슬라이더 */}
        <div className="md:hidden relative overflow-hidden">
          <div className="flex justify-between items-center mb-4">
            <button 
              onClick={prevSlide}
              className="z-10 p-2 rounded-full bg-purple-100 text-purple-600 hover:bg-purple-200 transition-colors"
              aria-label="이전 슬라이드"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </button>
            <div className="text-gray-500 text-sm">
              {activeIndex + 1} / {totalPages}
            </div>
            <button 
              onClick={nextSlide}
              className="z-10 p-2 rounded-full bg-purple-100 text-purple-600 hover:bg-purple-200 transition-colors"
              aria-label="다음 슬라이드"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
            </button>
          </div>

          <div className="relative h-[350px]">
            <AnimatePresence initial={false} mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 bg-white rounded-2xl p-8 shadow-md"
              >
                <div className="flex flex-col items-center text-center h-full justify-center">
                  <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 mb-6">
                    {issues[activeIndex * 3].icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">{issues[activeIndex * 3].title}</h3>
                  <p className="text-gray-600">{issues[activeIndex * 3].description}</p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* 진행 표시기 */}
          <div className="flex justify-center gap-2 mt-6">
            {Array.from({ length: totalPages }).map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setActiveIndex(index);
                  setAutoPlay(false);
                  setTimeout(() => setAutoPlay(true), 10000);
                }}
                className={`w-2 h-2 rounded-full transition-colors ${index === activeIndex ? 'bg-purple-600' : 'bg-purple-200'}`}
                aria-label={`페이지 ${index + 1}로 이동`}
              />
            ))}
          </div>
        </div>

        {/* 데스크톱: 그리드 레이아웃 + 슬라이드 효과 */}
        <div className="hidden md:block relative">
          <div className="flex justify-between items-center mb-4">
            <button 
              onClick={prevSlide}
              className="z-10 p-2 rounded-full bg-purple-100 text-purple-600 hover:bg-purple-200 transition-colors"
              aria-label="이전 슬라이드"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </button>
            <div className="text-gray-500 text-sm">
              {activeIndex + 1} / {totalPages} 페이지
            </div>
            <button 
              onClick={nextSlide}
              className="z-10 p-2 rounded-full bg-purple-100 text-purple-600 hover:bg-purple-200 transition-colors"
              aria-label="다음 슬라이드"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
            </button>
          </div>

          <div className="min-h-[350px] relative">
            <AnimatePresence mode="wait">
              <motion.div 
                key={`group-${activeIndex}`}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="grid grid-cols-3 gap-8"
              >
                {getVisibleCardIndices().map((cardIndex, position) => (
                  <motion.div
                    key={`card-${cardIndex}`}
                    custom={position}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ 
                      opacity: 1, 
                      y: 0,
                      transition: { delay: position * 0.1 }
                    }}
                    whileHover={{ y: -5 }}
                    className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300"
                  >
                    <div className="flex flex-col items-center text-center">
                      <motion.div 
                        className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 mb-6"
                        whileHover={{ 
                          scale: 1.1,
                          boxShadow: "0 0 0 8px rgba(168, 85, 247, 0.1)"
                        }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                      >
                        {issues[cardIndex].icon}
                      </motion.div>
                      <h3 className="text-xl font-semibold mb-3 text-gray-800">{issues[cardIndex].title}</h3>
                      <p className="text-gray-600">{issues[cardIndex].description}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* 진행 표시기 */}
          <div className="flex justify-center gap-3 mt-8">
            {Array.from({ length: totalPages }).map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setActiveIndex(index);
                  setAutoPlay(false);
                  setTimeout(() => setAutoPlay(true), 10000);
                }}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === activeIndex ? 'bg-purple-600' : 'bg-purple-200'
                }`}
                aria-label={`페이지 ${index + 1}로 이동`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemAwareness;
