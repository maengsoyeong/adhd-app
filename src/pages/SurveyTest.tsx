import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ProgressBar } from '../components/common/ProgressBar';

export interface Question {
  id: number;
  text: string;
  options: string[];
  category?: 'attention' | 'impulse' | 'execution';  // optional
  scores?: number[];  // optional
}

export const questions: Question[] = [
  {
    id: 1,
    text: "일상적인 활동이나 업무에서 세부적인 부분에 주의를 기울이지 못하거나 부주의한 실수를 합니까?",
    options: ["전혀 그렇지 않다", "가끔 그렇다", "자주 그렇다", "매우 자주 그렇다"],
    category: 'attention',
    scores: [0, 1, 2, 3]
  },
  {
    id: 2,
    text: "손이나 발을 가만히 두지 못하거나 의자에 앉아서도 몸을 꼼지락거립니까?",
    options: ["전혀 그렇지 않다", "가끔 그렇다", "자주 그렇다", "매우 자주 그렇다"],
    category: 'execution',
    scores: [0, 1, 2, 3]
  },
  {
    id: 3,
    text: "지속적인 정신적 노력이 필요한 과제(예: 수업, 회의)를 피하거나 싫어합니까?",
    options: ["전혀 그렇지 않다", "가끔 그렇다", "자주 그렇다", "매우 자주 그렇다"],
    category: 'execution',
    scores: [0, 1, 2, 3]
  },
  {
    id: 4,
    text: "다른 사람이 말하는 것을 끝까지 듣지 못합니까?",
    options: ["전혀 그렇지 않다", "가끔 그렇다", "자주 그렇다", "매우 자주 그렇다"],
    category: 'attention',
    scores: [0, 1, 2, 3]
  },
  {
    id: 5,
    text: "지시를 따르지 못하고 일이나 과제를 끝내지 못합니까?",
    options: ["전혀 그렇지 않다", "가끔 그렇다", "자주 그렇다", "매우 자주 그렇다"],
    category: 'execution',
    scores: [0, 1, 2, 3]
  },
  {
    id: 6,
    text: "조용히 여가 활동이나 놀이에 참여하는 것이 어렵습니까?",
    options: ["전혀 그렇지 않다", "가끔 그렇다", "자주 그렇다", "매우 자주 그렇다"],
    category: 'execution',
    scores: [0, 1, 2, 3]
  },
  {
    id: 7,
    text: "물건을 자주 잃어버립니까? (예: 열쇠, 지갑, 휴대폰 등)",
    options: ["전혀 그렇지 않다", "가끔 그렇다", "자주 그렇다", "매우 자주 그렇다"],
    category: 'execution',
    scores: [0, 1, 2, 3]
  },
  {
    id: 8,
    text: "외부 자극에 의해 쉽게 주의가 산만해집니까?",
    options: ["전혀 그렇지 않다", "가끔 그렇다", "자주 그렇다", "매우 자주 그렇다"],
    category: 'attention',
    scores: [0, 1, 2, 3]
  },
  {
    id: 9,
    text: "일상적인 활동을 잊어버립니까?",
    options: ["전혀 그렇지 않다", "가끔 그렇다", "자주 그렇다", "매우 자주 그렇다"],
    category: 'attention',
    scores: [0, 1, 2, 3]
  },
  {
    id: 10,
    text: "자리에서 일어나야 하는 상황에서도 가만히 앉아 있기 어렵습니까?",
    options: ["전혀 그렇지 않다", "가끔 그렇다", "자주 그렇다", "매우 자주 그렇다"],
    category: 'execution',
    scores: [0, 1, 2, 3]
  }
];

export const SurveyTest: React.FC = () => {
  const [answers, setAnswers] = useState<{[key: number]: number}>({});
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const navigate = useNavigate();

  const currentQuestion = questions[currentQuestionIndex];
  const answeredCount = Object.keys(answers).length;

  const handleAnswer = (score: number) => {
    setAnswers(prev => ({
      ...prev,
      [currentQuestion.id]: score
    }));
    
    // 자동으로 다음 문항으로 이동
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(prev => prev - 1);
    }
  };

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    }
  };

  // 답변하지 않은 문항들을 찾는 함수 수정
  const getUnansweredQuestions = () => {
    return questions
      .filter(q => answers[q.id] === undefined)  // 수정된 부분
      .map(q => q.id);
  };

  const handleSubmit = () => {
    const unansweredQuestions = getUnansweredQuestions();
    
    if (unansweredQuestions.length === 0) {
      navigate('/result', { state: { answers } });
    } else {
      // 첫 번째 미답변 문항으로 이동
      const firstUnanswered = unansweredQuestions[0];
      const questionIndex = questions.findIndex(q => q.id === firstUnanswered);
      setCurrentQuestionIndex(questionIndex);
      
      // 알림 메시지 표시
      const missingQuestions = unansweredQuestions.join(', ');
      alert(`다음 문항들이 답변되지 않았습니다: ${missingQuestions}번`);
    }
  };

  return (
    <>
      <ProgressBar current={answeredCount} total={questions.length} />
      <div className="flex justify-center p-4 mt-16">
        {/* 문항과 답변을 포함하는 메인 카드 - 고정 너비 적용 */}
        <div className="w-[640px] bg-white rounded-xl shadow-lg p-8 h-[480px] flex flex-col">
          {/* 문항 영역 */}
          <div className="h-[120px] overflow-auto mb-8">
            <h2 className="text-xl font-semibold text-purple-800 whitespace-normal break-words">
              {currentQuestionIndex + 1}. {currentQuestion.text}
            </h2>
          </div>
          
          {/* 구분선 */}
          <div className="border-b border-gray-200 mb-8"></div>

          {/* 답안 선택 영역 */}
          <div className="flex-1 flex flex-col justify-center">
            <div className="w-full max-w-[500px] mx-auto">
              {/* 리커트 척도 라벨 */}
              <div className="flex justify-between mb-4">
                <span className="text-sm text-gray-500">전혀 그렇지 않다</span>
                <span className="text-sm text-gray-500">매우 그렇다</span>
              </div>

              {/* 리커트 척도 버튼 */}
              <div className="relative py-4">
                {/* 배경 라인 */}
                <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gray-200"></div>
                
                {/* 버튼 컨테이너 */}
                <div className="relative flex justify-between">
                  {[0, 1, 2, 3].map((score) => (
                    <button
                      key={score}
                      onClick={() => handleAnswer(score)}
                      className={`w-10 h-10 rounded-full transition-all duration-200 flex items-center justify-center
                        ${answers[currentQuestion.id] === score
                          ? 'bg-purple-600 text-white transform scale-110 shadow-lg z-10'
                          : 'bg-white hover:bg-purple-100 z-10'
                        } border-2 border-purple-200 hover:border-purple-400`}
                    >
                      {score}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* 네비게이션 영역 */}
          <div className="mt-8 pt-4 border-t border-gray-200">
            <div className="flex justify-between items-center">
              {/* 이전 버튼 */}
              <button
                onClick={handlePrevious}
                disabled={currentQuestionIndex === 0}
                className={`px-6 py-2 rounded-lg ${
                  currentQuestionIndex === 0
                    ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                    : 'bg-purple-50 text-purple-600 hover:bg-purple-100'
                }`}
              >
                이전
              </button>

              {/* 진행 상태 */}
              <div className="text-sm text-purple-600">
                {currentQuestionIndex + 1} / {questions.length} 문항
              </div>

              {/* 다음/제출 버튼 */}
              {currentQuestionIndex === questions.length - 1 ? (
                <button
                  onClick={handleSubmit}
                  className={`
                    px-8 py-2 rounded-lg font-semibold
                    transform transition-all duration-200
                    ${Object.keys(answers).length === questions.length
                      ? 'bg-gradient-to-r from-purple-600 to-purple-800 text-white hover:scale-105 hover:shadow-lg'
                      : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                    }
                  `}
                >
                  제출하기
                </button>
              ) : (
                <button
                  onClick={handleNext}
                  className="px-6 py-2 rounded-lg bg-purple-600 text-white hover:bg-purple-700"
                >
                  다음
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SurveyTest; 