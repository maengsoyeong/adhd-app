import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ProgressBar from '../../../components/ProgressBar';

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
    text: "업무나 공부 중 쉽게 산만해지나요?",
    options: ["전혀 아니다", "가끔 그렇다", "자주 그렇다", "항상 그렇다"],
    category: 'attention',
    scores: [1, 2, 3, 4]
  },
  {
    id: 2,
    text: "일을 시작하기 전에 계획을 세우나요?",
    options: ["항상 그렇다", "자주 그렇다", "가끔 그렇다", "전혀 아니다"],
    category: 'execution',
    scores: [4, 3, 2, 1]
  },
  {
    id: 3,
    text: "주말에 주로 어떤 활동을 하시나요?",
    options: ["취미 활동", "휴식", "친목 모임", "자기 개발"]
  },
  {
    id: 4,
    text: "어려운 결정을 내릴 때 주로 어떤 방식을 선호하시나요?",
    options: ["논리적 분석", "직관적 판단", "타인의 조언", "시간을 두고 고민"]
  },
  {
    id: 5,
    text: "새로운 환경에 적응하는 데 얼마나 걸리시나요?",
    options: ["매우 빠름", "비교적 빠름", "보통", "시간이 필요함"]
  },
  {
    id: 6,
    text: "일상적인 문제 해결 시 어떤 접근 방식을 선호하시나요?",
    options: ["체계적 접근", "창의적 접근", "경험 기반", "즉흥적 대처"]
  },
  {
    id: 7,
    text: "다른 사람들과 소통할 때 선호하는 방식은 무엇인가요?",
    options: ["직접 만남", "전화", "문자/채팅", "이메일"]
  },
  {
    id: 8,
    text: "새로운 기술이나 도구를 배울 때 어떤 방식을 선호하시나요?",
    options: ["직접 시도", "매뉴얼 참고", "전문가 도움", "온라인 강의"]
  },
  {
    id: 9,
    text: "업무나 학업에서 가장 중요하게 생각하는 것은 무엇인가요?",
    options: ["효율성", "창의성", "정확성", "협동"]
  },
  {
    id: 10,
    text: "변화가 필요한 상황에서 어떤 태도를 보이시나요?",
    options: ["적극적 수용", "신중한 검토", "점진적 적용", "현상 유지 선호"]
  }
];

const SurveyTest: React.FC = () => {
  const [answers, setAnswers] = useState<{[key: number]: string}>({});
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const navigate = useNavigate();

  const currentQuestion = questions[currentQuestionIndex];
  const answeredCount = Object.keys(answers).length;

  const handleAnswer = (score: number) => {
    setAnswers(prev => ({
      ...prev,
      [currentQuestion.id]: currentQuestion.options[score]
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
      navigate('/survey/result', { state: { answers } });
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
      <ProgressBar currentStep={answeredCount} totalSteps={questions.length} />
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
                <span className="text-sm text-gray-500">전혀 아니다</span>
                <span className="text-sm text-gray-500">매우 그렇다</span>
              </div>

              {/* 리커트 척도 버튼 */}
              <div className="relative py-4">
                {/* 배경 라인 */}
                <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gray-200"></div>
                
                {/* 버튼 컨테이너 */}
                <div className="relative flex justify-between">
                  {[0, 1, 2, 3, 4].map((score) => (
                    <button
                      key={score}
                      onClick={() => handleAnswer(score)}
                      className={`w-10 h-10 rounded-full transition-all duration-200 flex items-center justify-center
                        ${answers[currentQuestion.id] === currentQuestion.options[score]
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
