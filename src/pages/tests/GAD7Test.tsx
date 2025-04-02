import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import NavBar from '../../components/NavBar';
import jsPDF from 'jspdf';
import 'jspdf-autotable';

interface Question {
  id: number;
  text: string;
}

const GAD7Test: React.FC = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<number[]>(Array(7).fill(-1));
  const [showResult, setShowResult] = useState(false);
  const [userName, setUserName] = useState('');
  const [userAge, setUserAge] = useState('');
  const [userGender, setUserGender] = useState('');
  
  const questions: Question[] = [
    { id: 1, text: '지난 2주일 동안 얼마나 자주 초조하거나 불안하거나 조마조마하게 느껴졌습니까?' },
    { id: 2, text: '지난 2주일 동안 얼마나 자주 걱정하는 것을 멈추거나 조절할 수 없었습니까?' },
    { id: 3, text: '지난 2주일 동안 얼마나 자주 여러 가지 것들에 대해 너무 많이 걱정했습니까?' },
    { id: 4, text: '지난 2주일 동안 얼마나 자주 편하게 쉬는 것이 어려웠습니까?' },
    { id: 5, text: '지난 2주일 동안 얼마나 자주 가만히 앉아 있기 어려울 정도로 안절부절 못했습니까?' },
    { id: 6, text: '지난 2주일 동안 얼마나 자주 쉽게 짜증이 나거나 화가 났습니까?' },
    { id: 7, text: '지난 2주일 동안 얼마나 자주 나쁜 일이 일어날 것 같은 두려움을 느꼈습니까?' }
  ];
  
  const options = [
    { value: 0, label: '전혀 방해받지 않았다' },
    { value: 1, label: '며칠 동안 방해받았다' },
    { value: 2, label: '7일 이상 방해받았다' },
    { value: 3, label: '거의 매일 방해받았다' }
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
        level: '정상',
        description: '불안 증상이 거의 없습니다. 현재 상태를 유지하세요.',
        color: 'text-green-600'
      };
    } else if (score >= 5 && score <= 9) {
      return {
        level: '가벼운 불안',
        description: '경미한 불안 증상이 있습니다. 자기 관리에 신경 쓰고 증상이 지속되면 전문가와 상담하세요.',
        color: 'text-yellow-600'
      };
    } else if (score >= 10 && score <= 14) {
      return {
        level: '중간 정도 불안',
        description: '중간 정도의 불안 증상이 있습니다. 전문가와 상담하는 것을 권장합니다.',
        color: 'text-orange-600'
      };
    } else {
      return {
        level: '심한 불안',
        description: '심한 불안 증상이 있습니다. 가능한 빨리 전문가의 도움을 받으세요.',
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
    doc.text('GAD-7 불안장애 자가검진 결과', 105, 20, { align: 'center' });
    
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
    doc.text(`총점: ${score}/21`, 20, 100);
    doc.text(`불안 수준: ${result.level}`, 20, 110);
    
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
    doc.save('GAD-7_불안장애_자가검진_결과.pdf');
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
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">GAD-7 불안장애 자가검진</h1>
            
            {/* 진행 상태 표시 */}
            <div className="mb-8">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm text-gray-600">진행률</span>
                <span className="text-sm font-medium text-blue-600">{progressPercentage}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div 
                  className="bg-blue-600 h-2.5 rounded-full transition-all duration-300" 
                  style={{ width: `${progressPercentage}%` }}
                ></div>
              </div>
            </div>
            
            {/* 문항 네비게이션 */}
            <div className="flex justify-center mb-8">
              <div className="flex space-x-2">
                {questions.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentStep(index)}
                    className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium transition-colors
                      ${currentStep === index 
                        ? 'bg-blue-600 text-white' 
                        : answers[index] >= 0 
                          ? 'bg-green-500 text-white' 
                          : 'bg-gray-200 text-gray-600 hover:bg-gray-300'}`}
                  >
                    {index + 1}
                  </button>
                ))}
              </div>
            </div>
            
            <div className="mb-8">
              <h2 className="text-xl font-semibold text-gray-800 mb-6">
                {questions[currentStep].text}
              </h2>
              
              <div className="space-y-3">
                {options.map((option) => (
                  <button
                    key={option.value}
                    onClick={() => handleAnswerSelect(currentStep, option.value)}
                    className={`w-full text-left p-4 rounded-lg border transition-colors
                      ${answers[currentStep] === option.value 
                        ? 'bg-blue-50 border-blue-500 text-blue-700' 
                        : 'border-gray-300 hover:bg-gray-50'}`}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            </div>
            
            <div className="flex justify-between">
              <button
                onClick={handlePrev}
                className={`px-6 py-2 rounded-lg transition-colors ${
                  currentStep === 0 
                    ? 'bg-gray-200 text-gray-400 cursor-not-allowed' 
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
                disabled={currentStep === 0}
              >
                이전
              </button>
              
              <button
                onClick={handleNext}
                disabled={answers[currentStep] < 0}
                className={`px-6 py-2 rounded-lg transition-colors ${
                  answers[currentStep] < 0 
                    ? 'bg-blue-300 text-white cursor-not-allowed' 
                    : 'bg-blue-600 text-white hover:bg-blue-700'
                }`}
              >
                {currentStep === questions.length - 1 ? '결과 보기' : '다음'}
              </button>
            </div>
          </div>
        ) : (
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">GAD-7 불안장애 자가검진 결과</h1>
            
            <div className="mb-8">
              <p className="text-gray-600 text-center mb-6">
                검사에 응답해주셔서 감사합니다. 아래는 귀하의 GAD-7 검사 결과입니다.
                결과를 PDF로 저장하시려면 아래 정보를 입력해주세요. (선택사항)
              </p>
              
              <div className="grid md:grid-cols-3 gap-4 mb-6">
                <div>
                  <label htmlFor="userName" className="block text-sm font-medium text-gray-700 mb-1">이름 (선택)</label>
                  <input
                    type="text"
                    id="userName"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="이름"
                  />
                </div>
                
                <div>
                  <label htmlFor="userAge" className="block text-sm font-medium text-gray-700 mb-1">나이 (선택)</label>
                  <input
                    type="number"
                    id="userAge"
                    value={userAge}
                    onChange={(e) => setUserAge(e.target.value)}
                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="나이"
                    min="0"
                    max="120"
                  />
                </div>
                
                <div>
                  <label htmlFor="userGender" className="block text-sm font-medium text-gray-700 mb-1">성별 (선택)</label>
                  <select
                    id="userGender"
                    value={userGender}
                    onChange={(e) => setUserGender(e.target.value)}
                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">선택</option>
                    <option value="남성">남성</option>
                    <option value="여성">여성</option>
                    <option value="기타">기타</option>
                  </select>
                </div>
              </div>
            </div>
            
            {(() => {
              const score = calculateScore();
              const result = getResultInterpretation(score);
              
              return (
                <div className="text-center mb-8">
                  <div className="inline-block rounded-full bg-gray-100 px-6 py-3 mb-4">
                    <span className="text-gray-700 font-medium">총점:</span>
                    <span className="text-2xl font-bold ml-2">{score}</span>
                    <span className="text-gray-500 ml-1">/ 21</span>
                  </div>
                  
                  <h2 className={`text-2xl font-bold mb-2 ${result.color}`}>
                    {result.level}
                  </h2>
                  
                  <p className="text-gray-700 mb-6 max-w-lg mx-auto">
                    {result.description}
                  </p>
                  
                  <div className="w-full bg-gray-200 h-4 rounded-full mb-8">
                    <div 
                      className={`h-4 rounded-full ${
                        score <= 4 ? 'bg-green-500' :
                        score <= 9 ? 'bg-yellow-500' :
                        score <= 14 ? 'bg-orange-500' : 'bg-red-500'
                      }`}
                      style={{ width: `${(score / 21) * 100}%` }}
                    ></div>
                  </div>
                  
                  <div className="flex justify-center space-x-4 mb-6">
                    <button
                      onClick={generatePDF}
                      className="px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors flex items-center"
                    >
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                      </svg>
                      PDF로 저장하기
                    </button>
                    
                    <button
                      onClick={() => navigate('/self-check')}
                      className="px-6 py-3 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors"
                    >
                      다른 검사하기
                    </button>
                  </div>
                </div>
              );
            })()}
            
            <div className="border-t pt-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">문항별 응답</h3>
              
              <div className="space-y-3">
                {questions.map((question, index) => (
                  <div key={question.id} className="flex items-start py-2 border-b border-gray-100">
                    <div className="flex-shrink-0 w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center text-yellow-600 mr-3">
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

export default GAD7Test; 