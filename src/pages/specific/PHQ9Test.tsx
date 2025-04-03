import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import NavBar from '../../components/common/NavBar';
import Card from '../../components/common/Card';
import ProgressBar from '../../components/common/ProgressBar';
import jsPDF from 'jspdf';
import 'jspdf-autotable';

interface Question {
  id: number;
  text: string;
}

const PHQ9Test: React.FC = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<number[]>(Array(9).fill(-1));
  const [showResult, setShowResult] = useState(false);
  const [userName, setUserName] = useState('');
  const [userAge, setUserAge] = useState('');
  const [userGender, setUserGender] = useState('');
  
  const questions: Question[] = [
    { id: 1, text: '지난 2주일 동안 얼마나 자주 일이나 여가 활동을 하는 데 흥미나 즐거움을 느끼지 못했습니까?' },
    { id: 2, text: '지난 2주일 동안 얼마나 자주 기분이 가라앉거나, 우울하거나, 희망이 없다고 느꼈습니까?' },
    { id: 3, text: '지난 2주일 동안 얼마나 자주 잠들기 어렵거나 자주 깼습니까? 또는 너무 많이 잤습니까?' },
    { id: 4, text: '지난 2주일 동안 얼마나 자주 피곤하다고 느끼거나 기운이 거의 없었습니까?' },
    { id: 5, text: '지난 2주일 동안 얼마나 자주 식욕이 줄었거나 너무 많이 먹었습니까?' },
    { id: 6, text: '지난 2주일 동안 얼마나 자주 자신이 실패자라고 느끼거나, 자신이나 가족을 실망시켰다고 느꼈습니까?' },
    { id: 7, text: '지난 2주일 동안 얼마나 자주 신문을 읽거나 TV를 보는 것과 같은 일에 집중하기 어려웠습니까?' },
    { id: 8, text: '지난 2주일 동안 얼마나 자주 다른 사람들이 눈치 챌 정도로 너무 느리게 움직이거나 말을 했습니까? 또는 반대로 평소보다 많이 움직여서 너무 안절부절 못하거나 들떠 있었습니까?' },
    { id: 9, text: '지난 2주일 동안 얼마나 자주 자신이 죽는 것이 더 낫다고 생각하거나 어떤 식으로든 자신을 해칠 것이라고 생각했습니까?' }
  ];
  
  const options = [
    { value: 0, label: '전혀 그렇지 않다' },
    { value: 1, label: '며칠 동안 그렇다' },
    { value: 2, label: '7일 이상 그렇다' },
    { value: 3, label: '거의 매일 그렇다' }
  ];
  
  // 답변 선택 시 자동으로 다음 문항으로 이동
  const handleAnswerSelect = (questionIndex: number, value: number) => {
    const newAnswers = [...answers];
    newAnswers[questionIndex] = value;
    setAnswers(newAnswers);
    
    // 마지막 문항이 아니면 자동으로 다음 문항으로 이동
    if (questionIndex < questions.length - 1) {
      setTimeout(() => {
        setCurrentStep(questionIndex + 1);
      }, 500); // 0.5초 후 다음 문항으로 이동 (사용자가 선택을 확인할 시간을 줌)
    } else if (questionIndex === questions.length - 1) {
      // 마지막 문항이면 1초 후 결과 페이지로 이동
      setTimeout(() => {
        setShowResult(true);
      }, 1000);
    }
  };
  
  const handleNext = () => {
    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setShowResult(true);
    }
  };
  
  const handlePrev = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };
  
  const calculateScore = () => {
    return answers.reduce((sum, answer) => sum + (answer >= 0 ? answer : 0), 0);
  };
  
  const getResultInterpretation = (score: number) => {
    if (score >= 0 && score <= 4) {
      return {
        level: '우울증 아님',
        description: '현재 우울 증상이 거의 없습니다. 현재 상태를 유지하세요.',
        color: 'text-green-600'
      };
    } else if (score >= 5 && score <= 9) {
      return {
        level: '가벼운 우울증',
        description: '경미한 우울 증상이 있습니다. 자기 관리에 신경 쓰고 증상이 지속되면 전문가와 상담하세요.',
        color: 'text-yellow-600'
      };
    } else if (score >= 10 && score <= 14) {
      return {
        level: '중간 정도 우울증',
        description: '중간 정도의 우울 증상이 있습니다. 전문가와 상담하는 것을 권장합니다.',
        color: 'text-orange-600'
      };
    } else if (score >= 15 && score <= 19) {
      return {
        level: '약간 심한 우울증',
        description: '심각한 우울 증상이 있습니다. 가능한 빨리 전문가의 도움을 받으세요.',
        color: 'text-red-500'
      };
    } else {
      return {
        level: '심한 우울증',
        description: '매우 심각한 우울 증상이 있습니다. 즉시 전문가의 도움을 받으세요.',
        color: 'text-red-600'
      };
    }
  };
  
  // PDF 생성 및 다운로드 함수
  const generatePDF = () => {
    const score = calculateScore();
    const result = getResultInterpretation(score);
    const doc = new jsPDF();
    
    // 제목 추가
    doc.setFontSize(20);
    doc.text('PHQ-9 우울증 자가검진 결과', 105, 20, { align: 'center' });
    
    // 검사 정보
    doc.setFontSize(12);
    doc.text(`검사일: ${new Date().toLocaleDateString()}`, 20, 40);
    
    if (userName) doc.text(`이름: ${userName}`, 20, 50);
    if (userAge) doc.text(`나이: ${userAge}세`, 20, 60);
    if (userGender) doc.text(`성별: ${userGender}`, 20, 70);
    
    // 결과 요약
    doc.setFontSize(16);
    doc.text('검사 결과 요약', 20, 90);
    
    doc.setFontSize(14);
    doc.text(`총점: ${score}/27`, 20, 100);
    doc.text(`우울 수준: ${result.level}`, 20, 110);
    
    // 결과 설명
    doc.setFontSize(12);
    const splitDescription = doc.splitTextToSize(result.description, 170);
    doc.text(splitDescription, 20, 120);
    
    // 문항별 응답 테이블
    doc.setFontSize(14);
    doc.text('문항별 응답', 20, 140);
    
    const tableData = questions.map((question, index) => [
      index + 1,
      question.text,
      answers[index] >= 0 ? options[answers[index]].label : '응답 없음',
      answers[index] >= 0 ? answers[index].toString() : '-'
    ]);
    
    // @ts-ignore (jspdf-autotable 타입 문제)
    doc.autoTable({
      startY: 150,
      head: [['번호', '문항', '응답', '점수']],
      body: tableData,
      theme: 'striped',
      headStyles: { fillColor: [100, 100, 255] },
      columnStyles: {
        0: { cellWidth: 10 },
        1: { cellWidth: 100 },
        2: { cellWidth: 50 },
        3: { cellWidth: 10 }
      }
    });
    
    // 주의사항
    const lastY = (doc as any).lastAutoTable.finalY + 20;
    doc.setFontSize(12);
    doc.text('주의사항', 20, lastY);
    
    const cautionText = '이 검사 결과는 참고용으로만 활용하시고, 정확한 진단과 치료를 위해서는 반드시 전문가와 상담하시기 바랍니다. 심각한 증상이 있거나 일상생활에 어려움을 겪고 있다면 즉시 전문가의 도움을 받으세요.';
    const splitCaution = doc.splitTextToSize(cautionText, 170);
    doc.text(splitCaution, 20, lastY + 10);
    
    // PDF 저장
    doc.save('PHQ-9_우울증_자가검진_결과.pdf');
  };
  
  // 진행률 계산
  const progressPercentage = showResult 
    ? 100 
    : Math.round(((currentStep + (answers[currentStep] >= 0 ? 1 : 0)) / questions.length) * 100);
  
  return (
    <div className="min-h-screen bg-gray-50">
      <NavBar />
      
      <div className="max-w-3xl mx-auto px-4 py-12">
        {!showResult ? (
          <Card className="mb-8">
            <h1 className="text-2xl font-bold text-gray-800 mb-6">PHQ-9 우울증 자가검진</h1>
            
            <ProgressBar currentStep={currentStep + 1} totalSteps={questions.length} />
            
            <div className="mt-8">
              <h2 className="text-xl font-semibold text-gray-700 mb-4">
                {currentStep + 1}. {questions[currentStep].text}
              </h2>
              
              <div className="space-y-3 mt-6">
                {options.map((option) => (
                  <button
                    key={option.value}
                    onClick={() => handleAnswerSelect(currentStep, option.value)}
                    className={`w-full text-left p-4 rounded-lg border transition-colors ${
                      answers[currentStep] === option.value
                        ? 'bg-primary-50 border-primary-500 text-primary-700'
                        : 'border-gray-300 hover:bg-gray-50'
                    }`}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
              
              <div className="flex justify-between mt-8">
                <button
                  onClick={handlePrev}
                  disabled={currentStep === 0}
                  className={`px-4 py-2 rounded-lg ${
                    currentStep === 0
                      ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  이전
                </button>
                
                <button
                  onClick={handleNext}
                  disabled={answers[currentStep] === -1}
                  className={`px-4 py-2 rounded-lg ${
                    answers[currentStep] === -1
                      ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                      : 'bg-primary-600 text-white hover:bg-primary-700'
                  }`}
                >
                  {currentStep === questions.length - 1 ? '결과 보기' : '다음'}
                </button>
              </div>
            </div>
          </Card>
        ) : (
          <div className="space-y-8">
            <Card className="text-center">
              <h1 className="text-2xl font-bold text-gray-800 mb-6">PHQ-9 우울증 자가검진 결과</h1>
              
              <div className="mb-6">
                <div className="inline-block rounded-full bg-primary-100 p-4 mb-4">
                  <span className="text-4xl font-bold text-primary-600">{calculateScore()}</span>
                  <span className="text-xl text-primary-600">/27</span>
                </div>
                <h2 className={`text-xl font-semibold ${getResultInterpretation(calculateScore()).color}`}>
                  {getResultInterpretation(calculateScore()).level}
                </h2>
                <p className="text-gray-600 mt-2">
                  {getResultInterpretation(calculateScore()).description}
                </p>
              </div>
              
              <div className="mb-8 p-4 bg-gray-50 rounded-lg">
                <h3 className="font-semibold mb-2 text-gray-700">결과 해석</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <span className={`inline-block w-3 h-3 mt-1.5 mr-2 rounded-full ${calculateScore() <= 4 ? 'bg-green-500' : 'bg-gray-300'}`}></span>
                    <span>0-4점: 우울증 아님</span>
                  </li>
                  <li className="flex items-start">
                    <span className={`inline-block w-3 h-3 mt-1.5 mr-2 rounded-full ${calculateScore() >= 5 && calculateScore() <= 9 ? 'bg-yellow-500' : 'bg-gray-300'}`}></span>
                    <span>5-9점: 가벼운 우울증</span>
                  </li>
                  <li className="flex items-start">
                    <span className={`inline-block w-3 h-3 mt-1.5 mr-2 rounded-full ${calculateScore() >= 10 && calculateScore() <= 14 ? 'bg-orange-500' : 'bg-gray-300'}`}></span>
                    <span>10-14점: 중간 정도 우울증</span>
                  </li>
                  <li className="flex items-start">
                    <span className={`inline-block w-3 h-3 mt-1.5 mr-2 rounded-full ${calculateScore() >= 15 && calculateScore() <= 19 ? 'bg-red-400' : 'bg-gray-300'}`}></span>
                    <span>15-19점: 약간 심한 우울증</span>
                  </li>
                  <li className="flex items-start">
                    <span className={`inline-block w-3 h-3 mt-1.5 mr-2 rounded-full ${calculateScore() >= 20 ? 'bg-red-600' : 'bg-gray-300'}`}></span>
                    <span>20-27점: 심한 우울증</span>
                  </li>
                </ul>
              </div>
              
              <div className="flex flex-col sm:flex-row justify-center space-y-3 sm:space-y-0 sm:space-x-4">
                <button
                  onClick={generatePDF}
                  className="btn-primary flex items-center justify-center"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                  PDF로 저장하기
                </button>
                
                <button
                  onClick={() => navigate('/tests/self-check')}
                  className="btn-outline"
                >
                  다른 검사하기
                </button>
              </div>
            </Card>
            
            <div className="border-t pt-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">문항별 응답</h3>
              
              <div className="space-y-3">
                {questions.map((question, index) => (
                  <div key={question.id} className="flex items-start py-2 border-b border-gray-100">
                    <div className="flex-shrink-0 w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center text-primary-600 mr-3">
                      {index + 1}
                    </div>
                    <div className="flex-grow">
                      <p className="text-gray-800 mb-1">{question.text}</p>
                      <p className="text-gray-600 text-sm">
                        {answers[index] >= 0 
                          ? `${options[answers[index]].label} (${answers[index]}점)` 
                          : '응답 없음'}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="mt-8 bg-yellow-50 rounded-lg p-4 text-sm text-yellow-800">
              <p className="font-medium mb-2">주의사항</p>
              <p>
                이 검사 결과는 참고용으로만 활용하시고, 정확한 진단과 치료를 위해서는 반드시 전문가와 상담하시기 바랍니다.
                심각한 증상이 있거나 일상생활에 어려움을 겪고 있다면 즉시 전문가의 도움을 받으세요.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PHQ9Test; 