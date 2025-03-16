import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ProgressBar } from '../components/ProgressBar';

export interface Question {
  id: number;
  text: string;
  options: string[];
  category: 'attention' | 'impulse' | 'execution';
  scores: number[]; // 각 옵션별 점수
}

export const questions: Question[] = [
  // 주의력 결핍 문항
  {
    id: 1,
    text: "업무나 공부 중 쉽게 산만해지나요?",
    options: ["전혀 아니다", "가끔 그렇다", "자주 그렇다", "항상 그렇다"],
    category: 'attention',
    scores: [0, 1, 2, 3]
  },
  {
    id: 2,
    text: "세부적인 사항에 주의를 기울이는 것이 어렵나요?",
    options: ["전혀 아니다", "가끔 그렇다", "자주 그렇다", "항상 그렇다"],
    category: 'attention',
    scores: [0, 1, 2, 3]
  },
  {
    id: 3,
    text: "다른 사람이 말할 때 집중해서 듣기 어려운가요?",
    options: ["전혀 아니다", "가끔 그렇다", "자주 그렇다", "항상 그렇다"],
    category: 'attention',
    scores: [0, 1, 2, 3]
  },
  {
    id: 4,
    text: "지시사항을 끝까지 듣지 못하고 놓치는 경우가 있나요?",
    options: ["전혀 아니다", "가끔 그렇다", "자주 그렇다", "항상 그렇다"],
    category: 'attention',
    scores: [0, 1, 2, 3]
  },
  {
    id: 5,
    text: "일상적인 물건들을 자주 잃어버리나요?",
    options: ["전혀 아니다", "가끔 그렇다", "자주 그렇다", "항상 그렇다"],
    category: 'attention',
    scores: [0, 1, 2, 3]
  },
  // 충동성 문항
  {
    id: 6,
    text: "차례를 기다리는 것이 어려운가요?",
    options: ["전혀 아니다", "가끔 그렇다", "자주 그렇다", "항상 그렇다"],
    category: 'impulse',
    scores: [0, 1, 2, 3]
  },
  {
    id: 7,
    text: "생각하기 전에 말이나 행동이 먼저 나오나요?",
    options: ["전혀 아니다", "가끔 그렇다", "자주 그렇다", "항상 그렇다"],
    category: 'impulse',
    scores: [0, 1, 2, 3]
  },
  {
    id: 8,
    text: "즉흥적으로 결정을 내리는 경우가 많나요?",
    options: ["전혀 아니다", "가끔 그렇다", "자주 그렇다", "항상 그렇다"],
    category: 'impulse',
    scores: [0, 1, 2, 3]
  },
  {
    id: 9,
    text: "다른 사람의 대화나 활동을 방해하게 되나요?",
    options: ["전혀 아니다", "가끔 그렇다", "자주 그렇다", "항상 그렇다"],
    category: 'impulse',
    scores: [0, 1, 2, 3]
  },
  {
    id: 10,
    text: "위험한 활동을 충동적으로 하는 경향이 있나요?",
    options: ["전혀 아니다", "가끔 그렇다", "자주 그렇다", "항상 그렇다"],
    category: 'impulse',
    scores: [0, 1, 2, 3]
  },
  // 실행기능 문항
  {
    id: 11,
    text: "일을 시작하기 전에 계획을 세우나요?",
    options: ["항상 그렇다", "자주 그렇다", "가끔 그렇다", "전혀 아니다"],
    category: 'execution',
    scores: [3, 2, 1, 0]
  },
  {
    id: 12,
    text: "복잡한 과제를 작은 단계로 나누어 처리할 수 있나요?",
    options: ["항상 그렇다", "자주 그렇다", "가끔 그렇다", "전혀 아니다"],
    category: 'execution',
    scores: [3, 2, 1, 0]
  },
  {
    id: 13,
    text: "시간 관리를 잘 하시나요?",
    options: ["항상 그렇다", "자주 그렇다", "가끔 그렇다", "전혀 아니다"],
    category: 'execution',
    scores: [3, 2, 1, 0]
  },
  {
    id: 14,
    text: "우선순위를 정하고 그에 따라 일을 처리하나요?",
    options: ["항상 그렇다", "자주 그렇다", "가끔 그렇다", "전혀 아니다"],
    category: 'execution',
    scores: [3, 2, 1, 0]
  },
  {
    id: 15,
    text: "장기적인 목표를 설정하고 달성하기 위해 노력하나요?",
    options: ["항상 그렇다", "자주 그렇다", "가끔 그렇다", "전혀 아니다"],
    category: 'execution',
    scores: [3, 2, 1, 0]
  }
];

export const SurveyTest: React.FC = () => {
  const [answers, setAnswers] = useState<{[key: number]: string}>({});
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const navigate = useNavigate();

  const currentQuestion = questions[currentQuestionIndex];
  const answeredCount = Object.keys(answers).length;

  const handleAnswer = (answer: string) => {
    setAnswers(prev => ({
      ...prev,
      [currentQuestion.id]: answer
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

  const handleSubmit = () => {
    if (Object.keys(answers).length === questions.length) {
      navigate('/result', { state: { answers } });
    } else {
      alert('모든 문항에 답변해주세요.');
    }
  };

  return (
    <>
      <ProgressBar current={answeredCount} total={questions.length} />
      <div className="max-w-2xl mx-auto p-4 mt-16">
        <div className="min-h-[60vh] flex flex-col">
          {/* 현재 문항 */}
          <div className="flex-grow">
            <h2 className="text-xl font-semibold mb-6 text-purple-800">
              {currentQuestionIndex + 1}. {currentQuestion.text}
            </h2>
            <div className="space-y-2">
              {currentQuestion.options.map((option, index) => (
                <button
                  key={index}
                  className={`w-full text-left p-4 rounded-lg transition-colors ${
                    answers[currentQuestion.id] === option
                      ? 'bg-purple-100 border-2 border-purple-500'
                      : 'bg-white border border-gray-200 hover:border-purple-300'
                  }`}
                  onClick={() => handleAnswer(option)}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>

          {/* 네비게이션 버튼 */}
          <div className="flex justify-between items-center mt-8">
            <button
              onClick={handlePrevious}
              disabled={currentQuestionIndex === 0}
              className={`px-6 py-2 rounded ${
                currentQuestionIndex === 0
                  ? 'bg-gray-300 cursor-not-allowed'
                  : 'bg-purple-600 hover:bg-purple-700 text-white'
              }`}
            >
              이전
            </button>

            {currentQuestionIndex === questions.length - 1 ? (
              <button
                onClick={handleSubmit}
                disabled={Object.keys(answers).length !== questions.length}
                className={`px-6 py-2 rounded ${
                  Object.keys(answers).length === questions.length
                    ? 'bg-purple-600 hover:bg-purple-700 text-white'
                    : 'bg-gray-300 cursor-not-allowed'
                }`}
              >
                제출하기
              </button>
            ) : (
              <button
                onClick={handleNext}
                disabled={currentQuestionIndex === questions.length - 1}
                className={`px-6 py-2 rounded ${
                  currentQuestionIndex === questions.length - 1
                    ? 'bg-gray-300 cursor-not-allowed'
                    : 'bg-purple-600 hover:bg-purple-700 text-white'
                }`}
              >
                다음
              </button>
            )}
          </div>

          {/* 진행 상태 표시 */}
          <div className="text-center mt-4 text-sm text-gray-500">
            {currentQuestionIndex + 1} / {questions.length} 문항
          </div>
        </div>
      </div>
    </>
  );
}; 