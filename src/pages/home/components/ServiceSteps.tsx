import React from 'react';
import { motion } from 'framer-motion';

const ServiceSteps: React.FC = () => {
  // 서비스 단계 데이터
  const serviceSteps = [
    {
      id: 1,
      title: '자가진단 설문',
      description: '성인 ADHD 맞춤 68문항 설문으로 당신의 증상을 확인하세요.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
        </svg>
      ),
      color: 'indigo'
    },
    {
      id: 2,
      title: '맞춤 분석 결과 제공',
      description: '데이터 기반의 상세한 분석 결과를 PDF로 제공해 드립니다.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      color: 'purple'
    },
    {
      id: 3,
      title: '나에게 맞는 전략 제안',
      description: '당신의 패턴에 맞춘 관리 전략과 일상생활 팁을 받아보세요.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      color: 'fuchsia'
    },
    {
      id: 4,
      title: '성인 ADHD 전문가 연결',
      description: '일반 심리상담이 아닌 성인 ADHD에게 맞는 전문적인 도움을 받을 수 있습니다.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
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

  return (
    <section className="py-20 relative overflow-hidden">
      {/* 배경 장식 */}
      <div className="absolute inset-0 z-0 opacity-5">
        <div className="absolute top-20 left-0 w-72 h-72 bg-indigo-300 rounded-full mix-blend-multiply filter blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* 섹션 제목 */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            퍼즐핏은 당신에게 원스톱 솔루션을 제공합니다
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            과학적 방법론을 기반으로 한 검사부터 맞춤형 솔루션까지,<br className="hidden md:block"/> 
            ADHD 관리를 위한 모든 과정을 지원합니다.
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

        {/* 4단계 서비스 카드 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {serviceSteps.map((step, index) => (
            <motion.div
              key={step.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={index}
              variants={cardVariants}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className={`bg-white rounded-xl p-6 shadow-lg border-t-4 border-${step.color}-500 hover:shadow-xl transition-all duration-300`}
            >
              <div className={`w-16 h-16 rounded-full bg-${step.color}-100 flex items-center justify-center text-${step.color}-600 mb-4`}>
                {step.icon}
              </div>
              <h4 className="text-xl font-semibold mb-2 flex items-center">
                <span className={`w-8 h-8 rounded-full bg-${step.color}-500 text-white flex items-center justify-center text-sm font-bold mr-2`}>
                  {step.id}
                </span>
                {step.title}
              </h4>
              <p className="text-gray-600">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceSteps;
