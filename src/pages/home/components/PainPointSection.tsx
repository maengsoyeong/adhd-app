import React from 'react';
import { motion } from 'framer-motion';

const PainPointSection: React.FC = () => {
  const painPoints = [
    {
      emoji: "💭",
      title: "계속 미루게 돼요",
      description: "해야 할 일을 알면서도 손이 안 가요. 마감은 다가오는데, 시작조차 못 해요. '내가 게으른 건가?' 자책만 늘어요. 그 사이 또 다른 일로 바빠져요. 결국 아무것도 끝내지 못한 하루가 돼요.",
      color: "from-amber-100 to-amber-50"
    },
    {
      emoji: "🧠",
      title: "생각이 너무 많고 산만해요",
      description: "하던 말을 자꾸 까먹고, 대화에 집중이 안 돼요. 머릿속이 항상 시끄럽고 정신이 분산돼요. 회의 중에도 다른 생각이 떠올라 버벅여요. 집중하고 싶지만, 방향을 못 잡겠어요. 이게 ADHD일 수도 있다는데, 어디서부터 확인해야 할까요?",
      color: "from-blue-100 to-blue-50"
    },
    {
      emoji: "😣",
      title: "감정 기복이 너무 심해요",
      description: "기분이 좋았다가도 별일 아닌 걸로 화가 나요. 누가 나를 싫어하는 것 같으면 하루 종일 신경 쓰여요. 상처받기 쉬운데, 설명할 수가 없어요. 그런 내가 싫고, 또 자책하게 돼요. 누구도 나를 제대로 이해 못하는 것 같아요.",
      color: "from-rose-100 to-rose-50"
    },
    {
      emoji: "🕓",
      title: "일상 루틴이 무너져 있어요",
      description: "밤낮이 바뀌고, 생활이 엉망이 됐어요. 계획은 세우지만 지키지 못해요. 스스로 통제력이 없다고 느껴져요. 나만 이렇게 힘든 걸까요? 어디서부터 다시 시작해야 할지 모르겠어요.",
      color: "from-indigo-100 to-indigo-50"
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      {/* 배경 효과 */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-purple-50/30 to-white z-0"></div>
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute -top-40 -left-40 w-80 h-80 rounded-full bg-purple-200 opacity-20 blur-3xl"></div>
        <div className="absolute top-1/2 right-0 w-80 h-80 rounded-full bg-indigo-200 opacity-20 blur-3xl"></div>
        <div className="absolute bottom-0 left-1/4 w-80 h-80 rounded-full bg-blue-200 opacity-20 blur-3xl"></div>
      </div>
      
      {/* 그리드 패턴 배경 */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0wIDBoNjB2NjBIMHoiLz48cGF0aCBkPSJNMzAgMzBoMXYxaC0xeiIgZmlsbD0iI2VlZSIvPjwvZz48L3N2Zz4=')] opacity-5 z-0"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-block mb-4 px-4 py-2 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium"
          >
            일상의 어려움
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            성인 ADHD는 단지 <span className="text-indigo-600">산만함</span>만의 문제가 아닙니다.
          </h2>
          <div className="max-w-3xl mx-auto mb-8">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-sm"
            >
              <ul className="text-xl text-gray-700 space-y-3 text-left">
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-indigo-100 text-indigo-600 font-bold mr-3">1</span>
                  <span>집중이 안 되어 일은 늘어지고</span>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-indigo-100 text-indigo-600 font-bold mr-3">2</span>
                  <span>감정 기복은 대인관계에 영향을 주며</span>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-indigo-100 text-indigo-600 font-bold mr-3">3</span>
                  <span>밤낮이 바뀌어 수면이 엉망이 되기도 하죠.</span>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-indigo-100 text-indigo-600 font-bold mr-3">4</span>
                  <span>때론 과몰입 후 탈진하고,</span>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-indigo-100 text-indigo-600 font-bold mr-3">5</span>
                  <span>반복되는 오해에 관계는 멀어집니다.</span>
                </li>
              </ul>
            </motion.div>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-2xl font-medium text-indigo-600"
          >
            이런 일상의 어려움들,<br />
            혹시 당신의 이야기인가요?
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {painPoints.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className={`bg-gradient-to-br ${point.color} rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100`}
            >
              <div className="flex flex-col h-full">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="text-4xl bg-white rounded-full p-3 shadow-sm">{point.emoji}</div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    {point.title}
                  </h3>
                </div>
                <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-sm">
                  <p className="text-gray-700 text-lg leading-relaxed whitespace-pre-line">
                    {point.description}
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

export default PainPointSection;
