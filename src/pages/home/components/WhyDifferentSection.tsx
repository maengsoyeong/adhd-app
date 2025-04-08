import React from 'react';
import { motion } from 'framer-motion';

const WhyDifferentSection: React.FC = () => {
  const comparisons = [
    {
      traditional: "의학적 증상 중심",
      puzzlefit: "일상 경험 중심",
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      traditional: "일반적인 ADHD 증상",
      puzzlefit: "고기능 ADHD 포함",
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      traditional: "단순 점수 결과",
      puzzlefit: "맞춤형 대처 가이드",
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    }
  ];

  const painPoints = [
    {
      title: "정확한 자기 인식의 어려움",
      description: "성인 ADHD는 학창 시절과 증상이 달라 자기 판단이 어렵고, 주변에서 '성격' 문제로 치부됨.",
      quote: "저는 그냥 게으른 줄 알았어요. 성격 탓인 줄 알았죠.",
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="24" cy="16" r="8" />
          <path d="M18 32a6 6 0 0112 0v4a2 2 0 01-2 2h-8a2 2 0 01-2-2v-4z" />
          <path d="M15 36c-3-3-5-3-9-3m27 3c3-3 5-3 9-3" strokeLinecap="round" />
        </svg>
      )
    },
    {
      title: "진단 후 실질적인 대처법 부족",
      description: "진단은 받았으나 생활에 바로 적용 가능한 가이드는 부족하여 '이후 대처'에 막막함.",
      quote: "이제 어떻게 해야 할지 모르겠어요. 구체적인 방법이 필요해요.",
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M24 6v12m0 0l-8-8m8 8l8-8" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M6 26v8a8 8 0 008 8h20a8 8 0 008-8v-8" strokeLinecap="round"/>
          <rect x="12" y="18" width="24" height="16" rx="2"/>
        </svg>
      )
    },
    {
      title: "공감 가능한 콘텐츠와 커뮤니티의 부재",
      description: "주변에 털어놓기 어렵고, 공감받을 수 있는 안전한 공간이 없어 정서적 고립감이 큼.",
      quote: "저와 비슷한 경험을 가진 사람들의 이야기가 궁금해요.",
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="16" cy="24" r="8"/>
          <circle cx="32" cy="24" r="8"/>
          <path d="M16 32c0 4 3.5 8 8 8s8-4 8-8" strokeLinecap="round"/>
        </svg>
      )
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-white via-purple-50/30 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            우리가 만든 자가검진,<br className="sm:hidden"/> 
            <span className="text-indigo-600">뭐가 달라요?</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            기존의 딱딱한 진단을 넘어, 당신의 일상에 실질적인 도움이 되는 솔루션을 제공합니다
          </p>
        </motion.div>

        {/* 비교 테이블 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="relative mb-24"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-600 transform -skew-y-3 rounded-3xl opacity-10"></div>
          <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8 p-8">
            {comparisons.map((item, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg">
                <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-indigo-100 text-indigo-600 mb-4">
                  {item.icon}
                </div>
                <div className="space-y-4">
                  <div className="p-3 bg-gray-50 rounded-lg">
                    <p className="text-gray-500 text-sm">기존 자가진단</p>
                    <p className="font-medium text-gray-900">{item.traditional}</p>
                  </div>
                  <div className="p-3 bg-indigo-50 rounded-lg">
                    <p className="text-indigo-600 text-sm">퍼즐핏의 접근</p>
                    <p className="font-medium text-gray-900">{item.puzzlefit}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Pain Points 카드 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {painPoints.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="flex flex-col h-full">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="flex-shrink-0 w-16 h-16 rounded-xl bg-indigo-100 text-indigo-600 flex items-center justify-center">
                    {point.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">
                    {point.title}
                  </h3>
                </div>
                <p className="text-gray-600 mb-4 flex-grow">
                  {point.description}
                </p>
                <div className="bg-purple-50 rounded-lg p-4 mt-4">
                  <p className="text-purple-700 italic text-sm">
                    {point.quote}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyDifferentSection;
