import React from 'react';
import { useLocation } from 'react-router-dom';
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
  ChartData,
  ChartOptions
} from 'chart.js';
import { Radar } from 'react-chartjs-2';
import { questions, Question } from './SurveyTest';

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

interface CategoryScore {
  attention: number;
  impulse: number;
  execution: number;
}

interface ScoreLevel {
  level: '정상' | '경계선' | '주의요망';
  description: string;
}

interface LocationState {
  answers: {
    [key: number]: string;
  };
}

// 점수에 따른 너비 클래스를 반환하는 유틸리티 함수
const getWidthClass = (percentage: number): string => {
  if (percentage <= 0) return 'w-0';
  if (percentage <= 10) return 'w-[10%]';
  if (percentage <= 20) return 'w-[20%]';
  if (percentage <= 30) return 'w-[30%]';
  if (percentage <= 40) return 'w-[40%]';
  if (percentage <= 50) return 'w-[50%]';
  if (percentage <= 60) return 'w-[60%]';
  if (percentage <= 70) return 'w-[70%]';
  if (percentage <= 80) return 'w-[80%]';
  if (percentage <= 90) return 'w-[90%]';
  return 'w-full';
};

// 점수 레벨에 따른 색상 클래스를 반환하는 유틸리티 함수
const getLevelColorClass = (level: '정상' | '경계선' | '주의요망'): string => {
  switch (level) {
    case '정상':
      return 'bg-purple-500';
    case '경계선':
      return 'bg-yellow-500';
    case '주의요망':
      return 'bg-red-500';
    default:
      return 'bg-purple-500';
  }
};

export const SurveyResult: React.FC = () => {
  const location = useLocation();
  const answers = (location.state as LocationState)?.answers || {};

  // 점수 수준 판단 함수
  const getScoreLevel = (score: number, category: keyof CategoryScore): ScoreLevel => {
    // 실행기능은 높을수록 좋고, 나머지는 낮을수록 좋음
    if (category === 'execution') {
      if (score >= 70) return { 
        level: '정상',
        description: '실행기능이 잘 발달되어 있습니다. 현재의 상태를 유지하세요.'
      };
      if (score >= 40) return { 
        level: '경계선',
        description: '실행기능이 보통 수준입니다. 체계적인 계획과 실행 능력을 기르면 좋겠습니다.'
      };
      return { 
        level: '주의요망',
        description: '실행기능 향상이 필요합니다. 전문가와 상담을 고려해보세요.'
      };
    } else {
      if (score <= 30) return { 
        level: '정상',
        description: category === 'attention' 
          ? '주의력이 양호한 수준입니다.'
          : '충동성이 잘 조절되고 있습니다.'
      };
      if (score <= 60) return { 
        level: '경계선',
        description: category === 'attention'
          ? '주의력 조절에 어려움이 있을 수 있습니다. 주의력 향상 훈련을 고려해보세요.'
          : '충동성 조절에 어려움이 있을 수 있습니다. 자기조절 훈련을 고려해보세요.'
      };
      return { 
        level: '주의요망',
        description: category === 'attention'
          ? '주의력 결핍이 의심됩니다. 전문가 상담을 권장합니다.'
          : '충동성 조절에 어려움이 있습니다. 전문가 상담을 권장합니다.'
      };
    }
  };

  const calculateScores = (): CategoryScore => {
    const categoryTotals = {
      attention: 0,
      impulse: 0,
      execution: 0
    };
    
    const categoryQuestions = {
      attention: 0,
      impulse: 0,
      execution: 0
    };

    questions.forEach(question => {
      if (answers[question.id]) {
        const answerIndex = question.options.indexOf(answers[question.id]);
        const score = question.scores[answerIndex];
        
        categoryTotals[question.category] += score;
        categoryQuestions[question.category]++;
      }
    });

    // 각 카테고리별 100점 만점으로 환산
    return {
      attention: Math.round((categoryTotals.attention / (categoryQuestions.attention * 3)) * 100),
      impulse: Math.round((categoryTotals.impulse / (categoryQuestions.impulse * 3)) * 100),
      execution: Math.round((categoryTotals.execution / (categoryQuestions.execution * 3)) * 100)
    };
  };

  const scores = calculateScores();
  const attentionLevel = getScoreLevel(scores.attention, 'attention');
  const impulseLevel = getScoreLevel(scores.impulse, 'impulse');
  const executionLevel = getScoreLevel(scores.execution, 'execution');

  const chartData: ChartData<'radar'> = {
    labels: ['주의력', '충동성', '실행기능'],
    datasets: [
      {
        label: '점수',
        data: [scores.attention, scores.impulse, scores.execution],
        backgroundColor: 'rgba(147, 51, 234, 0.2)',
        borderColor: 'rgb(147, 51, 234)',
        borderWidth: 1,
      },
    ],
  };

  const chartOptions: ChartOptions<'radar'> = {
    scales: {
      r: {
        angleLines: {
          display: true
        },
        suggestedMin: 0,
        suggestedMax: 100
      }
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-8 text-purple-700">테스트 결과</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-lg border border-purple-100">
          <h2 className="text-xl font-semibold mb-4 text-purple-700">점수 분포</h2>
          <Radar data={chartData} options={chartOptions} />
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg border border-purple-100">
          <h2 className="text-xl font-semibold mb-4 text-purple-700">상세 분석</h2>
          
          <div className="space-y-4">
            <div>
              <h3 className="font-medium text-purple-800">주의력</h3>
              <div className="mt-1 bg-purple-100 rounded-full h-4">
                <div 
                  className={`h-4 rounded-full transition-all duration-500 ${getLevelColorClass(attentionLevel.level)} ${getWidthClass(scores.attention)}`}
                ></div>
              </div>
              <p className="mt-2 text-sm text-purple-700">
                점수: {scores.attention}/100 (수준: {attentionLevel.level})
              </p>
              <p className="mt-1 text-sm text-purple-600">{attentionLevel.description}</p>
            </div>

            <div>
              <h3 className="font-medium text-purple-800">충동성</h3>
              <div className="mt-1 bg-purple-100 rounded-full h-4">
                <div 
                  className={`h-4 rounded-full transition-all duration-500 ${getLevelColorClass(impulseLevel.level)} ${getWidthClass(scores.impulse)}`}
                ></div>
              </div>
              <p className="mt-2 text-sm text-purple-700">
                점수: {scores.impulse}/100 (수준: {impulseLevel.level})
              </p>
              <p className="mt-1 text-sm text-purple-600">{impulseLevel.description}</p>
            </div>

            <div>
              <h3 className="font-medium text-purple-800">실행기능</h3>
              <div className="mt-1 bg-purple-100 rounded-full h-4">
                <div 
                  className={`h-4 rounded-full transition-all duration-500 ${getLevelColorClass(executionLevel.level)} ${getWidthClass(scores.execution)}`}
                ></div>
              </div>
              <p className="mt-2 text-sm text-purple-700">
                점수: {scores.execution}/100 (수준: {executionLevel.level})
              </p>
              <p className="mt-1 text-sm text-purple-600">{executionLevel.description}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 bg-white p-6 rounded-lg shadow-lg border border-purple-100">
        <h2 className="text-xl font-semibold mb-4 text-purple-700">종합 평가</h2>
        <p className="text-purple-900">
          {scores.attention > 60 || scores.impulse > 60 || scores.execution < 40 ? (
            "테스트 결과 주의가 필요한 영역이 있습니다. 일상생활에서 어려움을 겪고 계시다면 전문가와 상담해보시는 것을 권장드립니다."
          ) : scores.attention > 30 || scores.impulse > 30 || scores.execution < 70 ? (
            "테스트 결과 경계선 수준의 영역이 있습니다. 해당 영역에 대한 자기관리와 훈련이 도움이 될 수 있습니다."
          ) : (
            "테스트 결과 모든 영역이 정상 수준입니다. 현재의 상태를 잘 유지하시기 바랍니다."
          )}
        </p>
      </div>
    </div>
  );
}; 