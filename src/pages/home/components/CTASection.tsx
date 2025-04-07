import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const CTASection: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-purple-900 via-purple-800 to-purple-900">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-3xl bg-purple-800 p-8 md:p-12 lg:p-16"
        >
          {/* 배경 장식 요소 */}
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-purple-600 rounded-full opacity-20 blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-purple-500 rounded-full opacity-20 blur-2xl"></div>
          </div>

          {/* 콘텐츠 */}
          <div className="relative z-10 text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6"
            >
              지금 바로 자가진단으로 시작해보세요!
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-lg md:text-xl text-purple-100 mb-8 max-w-2xl mx-auto"
            >
              15분 만에 완료되는 전문가 설계 테스트로<br className="hidden md:block" />
              당신의 ADHD 성향을 확인하고 더 나은 일상을 시작하세요.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row justify-center items-center gap-4"
            >
              <Link
                to="/adhd-test/intro"
                className="group relative inline-flex items-center"
              >
                <motion.span
                  className="absolute inset-0 rounded-full bg-white opacity-25"
                  initial={{ scale: 0 }}
                  animate={{ scale: [0, 1.2, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 3 }}
                />
                <span className="relative px-8 py-4 bg-white text-purple-800 text-lg font-semibold rounded-full hover:bg-purple-50 transition-colors duration-300 shadow-lg hover:shadow-xl">
                  시작하기
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-5 w-5 ml-2 inline-block transition-transform group-hover:translate-x-1" 
                    viewBox="0 0 20 20" 
                    fill="currentColor"
                  >
                    <path 
                      fillRule="evenodd" 
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" 
                      clipRule="evenodd" 
                    />
                  </svg>
                </span>
              </Link>

              <Link
                to="/about"
                className="text-purple-100 hover:text-white transition-colors duration-300 underline underline-offset-4"
              >
                자세히 알아보기
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
