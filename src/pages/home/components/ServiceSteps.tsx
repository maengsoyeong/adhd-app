import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import clsx from 'clsx';

const ServiceSteps: React.FC = () => {
  // 모달 상태
  const [selectedStep, setSelectedStep] = useState<number | null>(null);
  
  // 서비스 단계 데이터
  const serviceSteps = [
    {
      id: 1,
      title: '자가진단 설문',
      description: '전문가들이 설계한 68문항 설문으로\nADHD 성향과 특징을 점검해보세요.',
      detailDescription: '성인 ADHD 자가진단은 국제적으로 검증된 척도를 기반으로 제작되었습니다. 약 15-20분 정도 소요되며, 일상생활에서 경험하는 주의력, 충동성, 과잉행동 등의 증상에 대한 질문으로 구성되어 있습니다. 모든 응답은 익명으로 처리되며, 완료 후 즉시 결과를 확인할 수 있습니다.',
      buttonText: '더 알아보기 →',
      illustration: (
        <svg className="w-full h-full" viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="400" height="300" fill="#F5F3FF"/>
          <circle cx="200" cy="150" r="100" fill="white" filter="url(#shadow)"/>
          <path d="M150 130h100M150 150h80M150 170h90" stroke="#818CF8" strokeWidth="3" strokeLinecap="round"/>
          <circle cx="130" cy="130" r="8" fill="#6366F1"/>
          <circle cx="130" cy="150" r="8" fill="#818CF8"/>
          <circle cx="130" cy="170" r="8" fill="#A5B4FC"/>
          <defs>
            <filter id="shadow" x="-20" y="-20" width="440" height="440" filterUnits="userSpaceOnUse">
              <feDropShadow dx="0" dy="4" stdDeviation="8" floodOpacity="0.1"/>
            </filter>
          </defs>
        </svg>
      ),
      color: 'indigo'
    },
    {
      id: 2,
      title: '맞춤 분석 결과 제공',
      description: '답변을 기반으로 주요 증상과\n일상 패턴을 분석해 드립니다.',
      detailDescription: '퍼즐핏의 분석 알고리즘은 다양한 임상 데이터를 기반으로 개발되었습니다. 응답 결과를 종합적으로 분석하여 ADHD 성향 정도, 주요 증상 영역, 일상생활 패턴 등을 시각적 그래프와 함께 제공합니다. 결과는 PDF 형태로 다운로드할 수 있어 의료 전문가와의 상담 시 참고 자료로 활용할 수 있습니다.',
      buttonText: '예시 리포트 보기 →',
      illustration: (
        <svg className="w-full h-full" viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="400" height="300" fill="#FAF5FF"/>
          <circle cx="200" cy="150" r="100" fill="white" filter="url(#shadow)"/>
          <path d="M140 180c20-40 40-60 60-60s40 20 60 60" stroke="#A855F7" strokeWidth="3" strokeLinecap="round"/>
          <circle cx="200" cy="120" r="15" fill="#C084FC"/>
          <path d="M160 200h80" stroke="#E9D5FF" strokeWidth="20" strokeLinecap="round"/>
          <path d="M160 200h40" stroke="#A855F7" strokeWidth="20" strokeLinecap="round"/>
        </svg>
      ),
      color: 'purple',
      hasSampleReport: true
    },
    {
      id: 3,
      title: '나에게 맞는 전략 제안',
      description: '분석 결과에 따라 나에게 필요한\n일상 관리 전략을 제안해 드려요.',
      detailDescription: '분석 결과를 바탕으로 개인 맞춤형 대처 전략을 제안합니다. 업무 효율성 향상, 시간 관리, 집중력 유지, 감정 조절 등 다양한 영역에서 실질적인 도움이 되는 방법을 알려드립니다. 모든 전략은 실제 성인 ADHD 관리에 효과적인 것으로 검증된 방법들로 구성되어 있습니다.',
      buttonText: '전략 예시 보기 →',
      illustration: (
        <svg className="w-full h-full" viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="400" height="300" fill="#FDF4FF"/>
          <circle cx="200" cy="150" r="100" fill="white" filter="url(#shadow)"/>
          <path d="M160 150a40 40 0 1180 0" stroke="#DB2777" strokeWidth="3"/>
          <path d="M160 150l20-20m20 20l20-20m20 20" stroke="#F472B6" strokeWidth="3" strokeLinecap="round"/>
          <circle cx="200" cy="150" r="8" fill="#EC4899"/>
          <path d="M180 180h40" stroke="#FBCFE8" strokeWidth="3" strokeLinecap="round"/>
        </svg>
      ),
      color: 'pink'
    },
    {
      id: 4,
      title: '성인 ADHD 전문가 연결',
      description: '더 깊은 도움이 필요하다면,\n전문가와 연결해 드릴게요.',
      detailDescription: '추가적인 도움이 필요한 경우, 성인 ADHD를 전문적으로 다루는 의료 및 상담 전문가 네트워크를 통해 적절한 지원을 받을 수 있도록 안내해 드립니다. 지역별 전문의 정보, 온라인 상담 서비스, 성인 ADHD 지원 그룹 등 다양한 리소스를 제공합니다.',
      buttonText: '전문가 상담 안내 →',
      illustration: (
        <svg className="w-full h-full" viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="400" height="300" fill="#FFF1F2"/>
          <circle cx="200" cy="150" r="100" fill="white" filter="url(#shadow)"/>
          {/* Left person */}
          <g transform="translate(140,120)">
            <circle cx="0" cy="0" r="20" fill="#FDA4AF"/>
            <circle cx="0" cy="-5" r="12" fill="#FDA4AF"/>
            <path d="M-15 5 C-15 25, 15 25, 15 5" stroke="#E11D48" strokeWidth="3" fill="#FDA4AF"/>
          </g>
          {/* Right person */}
          <g transform="translate(260,120)">
            <circle cx="0" cy="0" r="20" fill="#FDA4AF"/>
            <circle cx="0" cy="-5" r="12" fill="#FDA4AF"/>
            <path d="M-15 5 C-15 25, 15 25, 15 5" stroke="#E11D48" strokeWidth="3" fill="#FDA4AF"/>
          </g>
          {/* Connection line with hearts */}
          <path d="M170 120 C200 120, 200 100, 200 120 C200 140, 200 120, 230 120" stroke="#E11D48" strokeWidth="2" strokeDasharray="4 4"/>
          <circle cx="200" cy="110" r="4" fill="#E11D48"/>
        </svg>
      ),
      color: 'rose'
    }
  ];

  // 4단계 프로세스 도식화 데이터
  const processFlow = [
    {
      id: 1,
      title: '검사',
      description: '과학적 설문으로 ADHD 성향 점검',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      ),
      bgColor: 'bg-gradient-to-br from-blue-500 to-indigo-600'
    },
    {
      id: 2,
      title: '분석',
      description: '데이터 기반의 심층 분석',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      bgColor: 'bg-gradient-to-br from-purple-500 to-indigo-600'
    },
    {
      id: 3,
      title: '리포트',
      description: '맞춤형 분석 결과 제공',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
        </svg>
      ),
      bgColor: 'bg-gradient-to-br from-fuchsia-500 to-purple-600'
    },
    {
      id: 4,
      title: '솔루션',
      description: '맞춤형 전략 및 지원',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      bgColor: 'bg-gradient-to-br from-pink-500 to-rose-600'
    }
  ];

  // 카드 애니메이션 변수
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: 'easeOut'
      }
    })
  };

  // 프로세스 화살표 애니메이션 변수
  const arrowVariants = {
    hidden: { opacity: 0, width: 0 },
    visible: {
      opacity: 1,
      width: '100%',
      transition: {
        delay: 0.6,
        duration: 0.8,
        ease: 'easeInOut'
      }
    }
  };

  // 색상 유틸리티 함수
  const getColorClass = (colorName: string, type: 'bg' | 'text' | 'border', opacity?: string) => {
    const baseClass = `${type}-${colorName}`;
    return opacity ? `${baseClass}-${opacity}` : baseClass;
  };

  // 미리보기 이미지에 대한 fallback 처리
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.src = 'https://via.placeholder.com/300x200?text=퍼즐핏+서비스';
  };

  return (
    <section className="py-20 relative overflow-hidden bg-gradient-to-b from-white to-gray-50">
      {/* 배경 장식 */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-0 w-72 h-72 bg-indigo-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* 섹션 제목 */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            퍼즐핏과 함께<br className="sm:hidden"/>
            <span className="text-indigo-600">ADHD 관리</span>를 시작하세요
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            전문가의 도움으로 설계된 맞춤형 솔루션으로<br className="hidden sm:block"/>
            당신의 일상에 긍정적인 변화를 만들어보세요.
          </p>
        </motion.div>

        {/* 4단계 프로세스 도식화 (모바일: 세로 배치, 데스크톱: 가로 배치) */}
        <div className="mb-20">
          <motion.h3 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-2xl font-semibold text-center mb-10"
          >
            4단계로 이루어지는 간편한 프로세스
          </motion.h3>

          {/* 모바일 뷰 */}
          <div className="md:hidden space-y-6">
            {processFlow.map((step, index) => (
              <motion.div 
                key={step.id}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={index}
                variants={cardVariants}
                className="flex items-center"
              >
                <div className={`flex-shrink-0 w-16 h-16 ${step.bgColor} rounded-full flex items-center justify-center text-white shadow-lg`}>
                  {step.icon}
                </div>
                <div className="ml-4">
                  <h4 className="text-xl font-semibold">{step.title}</h4>
                  <p className="text-gray-600">{step.description}</p>
                </div>
                {index < processFlow.length - 1 && (
                  <div className="absolute left-8 mt-24 h-6 w-0.5 bg-gray-200 z-0"></div>
                )}
              </motion.div>
            ))}
          </div>

          {/* 데스크톱 뷰 */}
          <div className="hidden md:block">
            <div className="flex items-center justify-between">
              {processFlow.map((step, index) => (
                <React.Fragment key={step.id}>
                  <motion.div 
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    custom={index}
                    variants={cardVariants}
                    className="flex flex-col items-center text-center w-52"
                  >
                    <div className={`w-20 h-20 ${step.bgColor} rounded-full flex items-center justify-center text-white shadow-lg mb-4 relative`}>
                      {step.icon}
                      <span className="absolute -top-2 -right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center text-gray-800 font-bold border-2 border-gray-100">
                        {step.id}
                      </span>
                    </div>
                    <h4 className="text-xl font-semibold mb-1">{step.title}</h4>
                    <p className="text-gray-600 text-sm">{step.description}</p>
                  </motion.div>

                  {index < processFlow.length - 1 && (
                    <motion.div 
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      variants={arrowVariants}
                      className="h-0.5 bg-gradient-to-r from-indigo-300 to-purple-500 relative flex-1 mx-2"
                    >
                      <div className="absolute right-0 top-1/2 transform -translate-y-1/2 -translate-x-1/2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </div>
                    </motion.div>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>

        {/* 서비스 카드 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {serviceSteps.map((step, index) => (
            <motion.div
              key={step.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={index}
              variants={cardVariants}
              whileHover={{ 
                y: -10,
                transition: { duration: 0.3 }
              }}
              className={clsx(
                "relative overflow-hidden rounded-2xl bg-white p-6",
                "transform transition-all duration-300",
                "hover:shadow-xl shadow-lg",
                "flex flex-col"
              )}
            >
              {/* 일러스트레이션 */}
              <div className="mb-6 aspect-[4/3] w-full">
                {step.illustration}
              </div>

              {/* 컨텐츠 */}
              <div className="flex-1 flex flex-col">
                <h3 className={clsx(
                  "text-xl font-bold mb-3",
                  `text-${step.color}-600`
                )}>
                  {step.title}
                </h3>
                <p className="text-gray-600 mb-6 whitespace-pre-line leading-relaxed flex-1">
                  {step.description}
                </p>
                
                {/* 버튼 */}
                <button
                  className={clsx(
                    "inline-flex items-center justify-between",
                    "px-4 py-2 rounded-lg",
                    "text-sm font-medium",
                    "transform transition-all duration-200",
                    `text-${step.color}-600 hover:text-${step.color}-700`,
                    `bg-${step.color}-50 hover:bg-${step.color}-100`,
                    "group"
                  )}
                  onClick={() => setSelectedStep(step.id)}
                >
                  {step.buttonText}
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* 모달 */}
      <AnimatePresence>
        {selectedStep !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50 backdrop-blur-sm"
            onClick={() => setSelectedStep(null)}
          >
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
              transition={{ type: "spring", damping: 25 }}
              className="bg-white rounded-2xl p-8 max-w-2xl w-full max-h-[80vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {serviceSteps.filter(step => step.id === selectedStep).map(step => (
                <div key={step.id} className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className={clsx(
                        "w-16 h-16 rounded-xl flex items-center justify-center",
                        `bg-${step.color}-50`
                      )}>
                        {step.illustration}
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900">{step.title}</h3>
                    </div>
                    <button
                      onClick={() => setSelectedStep(null)}
                      className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                      aria-label="모달 닫기"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                  
                  <div className="prose max-w-none">
                    <p className="text-lg text-gray-700 leading-relaxed">{step.detailDescription}</p>
                  </div>
                  
                  <div className="pt-6 border-t border-gray-100">
                    <button
                      className={clsx(
                        "px-6 py-3 rounded-xl text-white font-medium",
                        "transform transition-all duration-200",
                        `bg-${step.color}-500 hover:bg-${step.color}-600`,
                        "shadow-lg shadow-${step.color}-500/20",
                        "flex items-center gap-2"
                      )}
                    >
                      {step.buttonText}
                    </button>
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ServiceSteps;
