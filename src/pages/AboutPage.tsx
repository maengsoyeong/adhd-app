import React from 'react';
import { motion } from 'framer-motion';

// 이미지 임포트 제거
// import defaultFounderImage from '../assets/default-founder.png';
// import defaultExpertImage from '../assets/default-expert.png';

const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* 헤더 섹션 - 녹색 배경 */}
      <div className="bg-emerald-500 py-20 relative">
        <div className="container mx-auto px-4">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-6xl md:text-8xl font-bold text-white text-right pr-8"
          >
            ABOUT
          </motion.h1>
        </div>
      </div>
      
      {/* 탭 메뉴 */}
      <div className="border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap -mb-px">
            <a href="#mission" className="inline-block p-4 text-lg font-medium text-gray-800 border-b-2 border-purple-600">
              우리의 사명
            </a>
            <a href="#interview" className="inline-block p-4 text-lg font-medium text-gray-500 hover:text-gray-800 border-b-2 border-transparent hover:border-gray-300">
              인터뷰
            </a>
          </div>
        </div>
      </div>
      
      {/* 메인 콘텐츠 */}
      <div className="bg-pink-50 py-16">
        <div className="container mx-auto px-4">
          <div id="mission" className="mb-20">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-800">우리의 사명</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="bg-white p-8 rounded-3xl shadow-lg">
                  <h3 className="text-2xl font-semibold mb-4 text-purple-700">모두를 위한 정신 건강</h3>
                  <p className="text-gray-700 mb-4">
                    퍼즐핏은 ADHD와 같은 정신 건강 문제를 가진 사람들이 자신의 상태를 이해하고 관리할 수 있도록 돕는 것을 목표로 합니다. 
                    우리는 정신 건강 문제에 대한 인식을 높이고, 사회적 낙인을 줄이며, 모든 사람이 필요한 지원과 자원에 접근할 수 있도록 노력합니다.
                  </p>
                  <p className="text-gray-700">
                    우리는 정신 건강이 신체 건강만큼 중요하다고 믿으며, 모든 사람이 자신의 정신 건강을 우선시할 수 있는 세상을 만들기 위해 노력합니다.
                  </p>
                </div>
                
                <div className="bg-white p-8 rounded-3xl shadow-lg">
                  <h3 className="text-2xl font-semibold mb-4 text-purple-700">혁신적인 솔루션</h3>
                  <p className="text-gray-700 mb-4">
                    우리는 최신 기술과 연구를 활용하여 ADHD 진단과 관리를 위한 혁신적인 솔루션을 개발합니다. 
                    사용자 친화적인 인터페이스, 개인화된 경험, 그리고 데이터 기반 인사이트를 통해 사용자들이 자신의 상태를 더 잘 이해하고 관리할 수 있도록 돕습니다.
                  </p>
                  <p className="text-gray-700">
                    우리의 목표는 기술을 통해 정신 건강 관리를 더 접근하기 쉽고, 효과적이며, 지속 가능하게 만드는 것입니다.
                  </p>
                </div>
              </div>
              
              <div className="mt-10 bg-white p-8 rounded-3xl shadow-lg">
                <h3 className="text-2xl font-semibold mb-4 text-purple-700">우리의 가치</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="p-4 bg-purple-50 rounded-2xl">
                    <h4 className="text-xl font-medium mb-2 text-purple-800">공감</h4>
                    <p className="text-gray-700">
                      우리는 ADHD를 가진 사람들의 경험과 어려움을 깊이 이해하고 공감합니다. 모든 결정과 개발 과정에서 사용자의 필요와 감정을 최우선으로 고려합니다.
                    </p>
                  </div>
                  <div className="p-4 bg-purple-50 rounded-2xl">
                    <h4 className="text-xl font-medium mb-2 text-purple-800">포용성</h4>
                    <p className="text-gray-700">
                      우리는 모든 배경, 나이, 성별의 사람들이 우리의 서비스를 이용할 수 있도록 포용적인 디자인과 접근 방식을 채택합니다.
                    </p>
                  </div>
                  <div className="p-4 bg-purple-50 rounded-2xl">
                    <h4 className="text-xl font-medium mb-2 text-purple-800">혁신</h4>
                    <p className="text-gray-700">
                      우리는 끊임없이 새로운 아이디어와 접근 방식을 탐색하여 ADHD 관리를 위한 더 나은 솔루션을 개발합니다.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
          
          <div id="interview" className="mb-20">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-800">인터뷰</h2>
              
              <div className="bg-white p-8 rounded-3xl shadow-lg mb-8">
                <div className="flex flex-col md:flex-row items-start gap-8">
                  <div className="w-full md:w-1/3">
                    <div className="aspect-square bg-purple-200 rounded-2xl overflow-hidden">
                      <img 
                        src="/images/founder.jpg" 
                        alt="창립자 이미지" 
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          // 색상 블록으로 대체
                          target.style.display = 'none';
                          target.parentElement!.style.backgroundColor = '#9061F9';
                        }}
                      />
                    </div>
                  </div>
                  <div className="w-full md:w-2/3">
                    <h3 className="text-2xl font-semibold mb-2 text-purple-700">김지원 창립자 인터뷰</h3>
                    <p className="text-sm text-gray-500 mb-4">2023년 5월 15일</p>
                    <p className="text-gray-700 mb-4">
                      "퍼즐핏을 시작한 이유는 제 자신의 ADHD 진단 경험에서 비롯되었습니다. 진단을 받기까지의 과정이 너무 복잡하고 어려웠고, 
                      많은 사람들이 비슷한 어려움을 겪고 있다는 것을 알게 되었습니다. 저는 이 과정을 더 쉽고 접근하기 쉽게 만들고 싶었습니다."
                    </p>
                    <p className="text-gray-700 mb-4">
                      "우리의 목표는 단순히 ADHD 진단 도구를 제공하는 것이 아니라, ADHD를 가진 사람들이 자신의 상태를 이해하고 
                      관리하는 데 필요한 모든 자원과 지원을 제공하는 것입니다. 우리는 정신 건강 관리의 미래를 재정의하고 있습니다."
                    </p>
                    <p className="text-gray-700">
                      "가장 보람찬 순간은 사용자들로부터 우리 서비스가 그들의 삶에 긍정적인 변화를 가져왔다는 이야기를 들을 때입니다. 
                      그것이 우리가 계속해서 혁신하고 발전하는 원동력입니다."
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-8 rounded-3xl shadow-lg">
                <div className="flex flex-col md:flex-row items-start gap-8">
                  <div className="w-full md:w-1/3">
                    <div className="aspect-square bg-purple-200 rounded-2xl overflow-hidden">
                      <img 
                        src="/images/expert.jpg" 
                        alt="전문가 이미지" 
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          // 색상 블록으로 대체
                          target.style.display = 'none';
                          target.parentElement!.style.backgroundColor = '#9061F9';
                        }}
                      />
                    </div>
                  </div>
                  <div className="w-full md:w-2/3">
                    <h3 className="text-2xl font-semibold mb-2 text-purple-700">박서연 정신건강의학과 전문의 인터뷰</h3>
                    <p className="text-sm text-gray-500 mb-4">2023년 6월 3일</p>
                    <p className="text-gray-700 mb-4">
                      "퍼즐핏과 같은 디지털 도구는 ADHD 진단과 관리에 혁명을 가져오고 있습니다. 이러한 도구는 환자들이 자신의 증상을 
                      더 잘 이해하고 추적할 수 있게 해주며, 의사들에게는 더 정확한 진단을 내릴 수 있는 귀중한 데이터를 제공합니다."
                    </p>
                    <p className="text-gray-700 mb-4">
                      "특히 퍼즐핏의 접근 방식이 마음에 드는 점은 단순히 증상을 확인하는 것을 넘어, 사용자들에게 교육적인 콘텐츠와 
                      자기 관리 도구를 제공한다는 것입니다. 이는 ADHD 관리에 있어 전체적인 접근 방식을 취하는 것이 얼마나 중요한지 보여줍니다."
                    </p>
                    <p className="text-gray-700">
                      "앞으로 퍼즐핏이 더 많은 연구와 임상 데이터를 통합하여 서비스를 발전시키고, 더 많은 사람들에게 도움을 줄 수 있기를 기대합니다."
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage; 