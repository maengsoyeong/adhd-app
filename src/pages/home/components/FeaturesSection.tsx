import React from 'react';
import { motion } from 'framer-motion';
import AnimatedIcon, { IconVariants } from '../../../components/layout/AnimatedIcon';

const FeaturesSection: React.FC = () => {
  const features = [
    {
      icon: IconVariants.Brain,
      title: "전문가 설계 테스트",
      description: "정신건강 전문의와 함께 개발한 신뢰도 높은 ADHD 자가진단 테스트를 제공합니다."
    },
    {
      icon: IconVariants.Lightning,
      title: "빠른 결과 분석",
      description: "15분 만에 완료되는 테스트로 당신의 ADHD 성향을 즉시 분석해드립니다."
    },
    {
      icon: IconVariants.Star,
      title: "맞춤형 솔루션",
      description: "개인별 결과에 따른 맞춤형 조언과 전문가 연계 서비스를 제공합니다."
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-white via-purple-50/30 to-white">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            퍼즐핏만의 특별한 기능
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            전문성과 편리성을 모두 갖춘 ADHD 자가진단 서비스를 경험해보세요
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div className="flex flex-col items-center text-center">
                <AnimatedIcon
                  icon={feature.icon}
                  size="lg"
                  animation="hover"
                  className="mb-6"
                />
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
