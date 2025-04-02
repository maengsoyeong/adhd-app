import React from 'react';
import { useNavigate } from 'react-router-dom';
import NavBar from '../components/NavBar';

interface TestOption {
  id: string;
  title: string;
  description: string;
  icon: string;
  color: string;
}

const SelfCheckPage: React.FC = () => {
  const navigate = useNavigate();
  
  const testOptions: TestOption[] = [
    {
      id: 'adhd',
      title: 'ADHD 자가검진',
      description: '주의력 결핍 과잉행동장애(ADHD) 증상을 확인하는 검사입니다.',
      icon: '🧠',
      color: 'bg-purple-100 text-purple-600'
    },
    {
      id: 'depression',
      title: '우울증 자가검진 (PHQ-9)',
      description: '우울 증상의 심각도를 평가하는 PHQ-9 검사입니다.',
      icon: '😔',
      color: 'bg-blue-100 text-blue-600'
    },
    {
      id: 'anxiety',
      title: '불안장애 자가검진 (GAD-7)',
      description: '불안 증상의 심각도를 평가하는 GAD-7 검사입니다.',
      icon: '😰',
      color: 'bg-yellow-100 text-yellow-600'
    },
    {
      id: 'stress',
      title: '스트레스 자가검진',
      description: '일상 생활에서 느끼는 스트레스 수준을 평가합니다.',
      icon: '🔥',
      color: 'bg-red-100 text-red-600'
    },
    {
      id: 'sleep',
      title: '수면장애 자가검진',
      description: '수면의 질과 수면 장애 여부를 평가합니다.',
      icon: '😴',
      color: 'bg-indigo-100 text-indigo-600'
    },
    {
      id: 'burnout',
      title: '번아웃 자가검진',
      description: '직무 소진(번아웃) 증상을 평가합니다.',
      icon: '🔋',
      color: 'bg-orange-100 text-orange-600'
    }
  ];
  
  const handleTestSelect = (testId: string) => {
    if (testId === 'adhd') {
      navigate('/intro');
    } else if (testId === 'depression') {
      navigate('/test/phq9');
    } else if (testId === 'anxiety') {
      navigate('/test/gad7');
    } else {
      alert('해당 검사는 준비 중입니다.');
    }
  };
  
  return (
    <div className="min-h-screen bg-gray-50">
      <NavBar />
      
      <div className="max-w-6xl mx-auto px-4 py-16">
        <h1 className="text-3xl font-bold text-gray-800 mb-4 text-center">무료 자가검진</h1>
        <p className="text-gray-600 text-center mb-12 max-w-3xl mx-auto">
          다양한 정신 건강 자가검진 테스트를 무료로 이용해보세요. 
          자가검진 결과는 전문적인 진단을 대체할 수 없으며, 정확한 진단은 전문가와 상담하시기 바랍니다.
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testOptions.map((test) => (
            <div 
              key={test.id}
              className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow cursor-pointer"
              onClick={() => handleTestSelect(test.id)}
            >
              <div className="p-6">
                <div className={`w-12 h-12 ${test.color} rounded-full flex items-center justify-center text-xl mb-4`}>
                  {test.icon}
                </div>
                <h2 className="text-xl font-semibold text-gray-800 mb-2">{test.title}</h2>
                <p className="text-gray-600">{test.description}</p>
                <div className="mt-4 flex justify-between items-center">
                  <span className="text-sm text-gray-500">소요시간: 약 5-10분</span>
                  <button className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-gray-200 transition-colors">
                    시작하기
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 bg-purple-50 rounded-lg p-6 max-w-3xl mx-auto">
          <h2 className="text-xl font-semibold text-purple-800 mb-3">자가검진 결과 해석 안내</h2>
          <p className="text-gray-700 mb-4">
            자가검진 결과는 참고용으로만 활용하시고, 정확한 진단과 치료를 위해서는 반드시 전문가와 상담하시기 바랍니다.
          </p>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start">
              <span className="text-purple-600 mr-2">•</span>
              <span>검사 결과는 현재 상태를 기준으로 하며, 시간에 따라 변할 수 있습니다.</span>
            </li>
            <li className="flex items-start">
              <span className="text-purple-600 mr-2">•</span>
              <span>자가검진은 전문적인 진단 도구가 아니며, 선별 검사의 성격을 가집니다.</span>
            </li>
            <li className="flex items-start">
              <span className="text-purple-600 mr-2">•</span>
              <span>심각한 증상이 있거나 일상생활에 어려움을 겪고 있다면 즉시 전문가의 도움을 받으세요.</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SelfCheckPage; 