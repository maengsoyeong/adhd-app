import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

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
  const navigate = useNavigate();

  const handleAnswer = (questionId: number, answer: string) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: answer
    }));
  };

  const handleSubmit = () => {
    if (Object.keys(answers).length === questions.length) {
      navigate('/result', { state: { answers } });
    } else {
      alert('모든 문항에 답변해주세요.');
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6 text-purple-700">성향 테스트</h1>
      
      {questions.map((question) => (
        <div key={question.id} className="mb-6 p-4 border border-purple-200 rounded-lg hover:border-purple-300 transition-colors">
          <h2 className="font-semibold mb-3 text-purple-800">
            {question.id}. {question.text}
          </h2>
          <div className="space-y-2">
            {question.options.map((option, index) => (
              <label key={index} className="block hover:bg-purple-50 p-2 rounded transition-colors">
                <input
                  type="radio"
                  name={`question-${question.id}`}
                  value={option}
                  checked={answers[question.id] === option}
                  onChange={() => handleAnswer(question.id, option)}
                  className="mr-2 accent-purple-600"
                />
                {option}
              </label>
            ))}
          </div>
        </div>
      ))}

      <button
        onClick={handleSubmit}
        className="w-full bg-purple-600 text-white py-2 px-4 rounded hover:bg-purple-700 transition-colors"
      >
        제출하기
      </button>
    </div>
  );
}; 