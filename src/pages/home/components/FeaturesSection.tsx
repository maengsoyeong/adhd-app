import React from 'react';
import { motion } from 'framer-motion';
import { IconVariants } from '../../../components/layout/AnimatedIcon';

const FeaturesSection: React.FC = () => {
  const reportFeatures = [
    {
      title: "ADHD 성향 분석",
      description: "주의력, 충동성, 과잉행동 등 주요 영역별 점수를 시각화하여 제공합니다.",
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      title: "일상생활 패턴",
      description: "업무, 학업, 대인관계 등 일상 영역별 영향도를 분석합니다.",
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      title: "맞춤형 전략 제안",
      description: "개인의 특성을 고려한 구체적인 대처 전략을 제시합니다.",
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M13 10V3L4 14h7v7l9-11h-7z" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-white via-purple-50/30 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            상세한 분석 리포트
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            과학적 데이터를 기반으로 한 맞춤형 분석 결과를 제공합니다
          </p>
        </motion.div>

        <div className="relative">
          {/* 예시 리포트 이미지 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative z-10 bg-white rounded-2xl shadow-xl p-8 max-w-4xl mx-auto"
          >
            <div className="aspect-[16/9] w-full bg-white rounded-xl overflow-hidden">
              <svg className="w-full h-full" viewBox="0 0 800 450" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Report Header */}
                <rect width="800" height="450" fill="white"/>
                <rect x="40" y="30" width="720" height="60" rx="8" fill="#F3F4F6"/>
                <circle cx="70" cy="60" r="15" fill="#6366F1"/>
                <rect x="100" y="50" width="200" height="20" rx="4" fill="#4F46E5"/>
                
                {/* Graph Section */}
                <rect x="40" y="110" width="460" height="300" rx="8" fill="#F9FAFB"/>
                <path d="M60 360 L60 140 L480 140" stroke="#E5E7EB" strokeWidth="2"/>
                
                {/* Bar Chart */}
                <rect x="100" y="160" width="40" height="180" rx="4" fill="#818CF8"/>
                <rect x="160" y="200" width="40" height="140" rx="4" fill="#818CF8"/>
                <rect x="220" y="240" width="40" height="100" rx="4" fill="#818CF8"/>
                <rect x="280" y="180" width="40" height="160" rx="4" fill="#818CF8"/>
                
                {/* Line Chart */}
                <path d="M100 280 Q180 200, 220 260 T340 220" stroke="#4F46E5" strokeWidth="3" fill="none"/>
                <circle cx="100" cy="280" r="4" fill="#4F46E5"/>
                <circle cx="220" cy="260" r="4" fill="#4F46E5"/>
                <circle cx="340" cy="220" r="4" fill="#4F46E5"/>
                
                {/* Side Panel */}
                <rect x="520" y="110" width="240" height="300" rx="8" fill="#F9FAFB"/>
                <rect x="540" y="130" width="200" height="30" rx="4" fill="#E0E7FF"/>
                <rect x="540" y="170" width="180" height="30" rx="4" fill="#E0E7FF"/>
                <rect x="540" y="210" width="160" height="30" rx="4" fill="#E0E7FF"/>
                
                {/* Progress Indicators */}
                <rect x="540" y="260" width="200" height="10" rx="5" fill="#E5E7EB"/>
                <rect x="540" y="260" width="160" height="10" rx="5" fill="#6366F1"/>
                <rect x="540" y="290" width="200" height="10" rx="5" fill="#E5E7EB"/>
                <rect x="540" y="290" width="120" height="10" rx="5" fill="#6366F1"/>
                <rect x="540" y="320" width="200" height="10" rx="5" fill="#E5E7EB"/>
                <rect x="540" y="320" width="180" height="10" rx="5" fill="#6366F1"/>
              </svg>
            </div>
          </motion.div>

          {/* Feature Cards */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            {reportFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-indigo-100 text-indigo-600 flex items-center justify-center">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Decorative Elements */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-1/2 left-0 w-72 h-72 bg-indigo-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
            <div className="absolute top-1/2 right-0 w-72 h-72 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </section>
  );
};

export default FeaturesSection;
