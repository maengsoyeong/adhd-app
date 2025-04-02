import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import NavBar from '../../components/NavBar';
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
    { id: 1, text: '지난 2주일 동안 얼마나 자주 일에 대한 흥미나 재미를 느끼지 못하였습니까?' },
    { id: 2, text: '지난 2주일 동안 얼마나 자주 기분이 가라앉거나, 우울하거나, 희망이 없다고 느꼈습니까?' },
    { id: 3, text: '지난 2주일 동안 얼마나 자주 잠들기 어렵거나 자꾸 깨어나거나 혹은 너무 많이 잤습니까?' },
    { id: 4, text: '지난 2주일 동안 얼마나 자주 피곤하다고 느끼거나 기운이 없었습니까?' },
    { id: 5, text: '지난 2주일 동안 얼마나 자주 식욕이 없거나 혹은 너무 많이 먹었습니까?' },
    { id: 6, text: '지난 2주일 동안 얼마나 자주 자신이 나쁜 사람이라고 느끼거나 혹은 자신이 실패자라고 느끼거나 자신이나 가족을 실망시켰다고 느꼈습니까?' },
    { id: 7, text: '지난 2주일 동안 얼마나 자주 신문을 읽거나 TV를 보는 것과 같은 일에 집중하기 어려웠습니까?' },
    { id: 8, text: '지난 2주일 동안 얼마나 자주 다른 사람들이 알아챌 정도로 너무 느리게 움직이거나 말을 하였습니까? 또는 반대로 너무 안절부절 못해서 평소보다 많이 돌아다니거나 움직였습니까?' },
    { id: 9, text: '지난 2주일 동안 얼마나 자주 자신이 죽는 것이 더 낫다고 생각하거나 어떤 식으로든 자신을 해칠 것이라고 생각했습니까?' }
  ];
  
  const options = [
    { value: 0, label: '전혀 그렇지 않다' },
    { value: 1, label: '며칠 동안 그렇다' },
    { value: 2, label: '일주일 이상 그렇다' },
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
      // 마지막 문항이면 2초 후 결과 페이지로 이동
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
        description: '우울 증상이 거의 없습니다. 현재 상태를 유지하세요.',
        color: 'text-green-600'
      };
    } else if (score >= 5 && score <= 9) {
      return {
        level: '가벼운 우울',
        description: '경미한 우울 증상이 있습니다. 자기 관리에 신경 쓰고 증상이 지속되면 전문가와 상담하세요.',
        color: 'text-yellow-600'
      };
    } else if (score >= 10 && score <= 14) {
      return {
        level: '중간 정도 우울',
        description: '중간 정도의 우울 증상이 있습니다. 전문가와 상담하는 것을 권장합니다.',
        color: 'text-orange-600'
      };
    } else if (score >= 15 && score <= 19) {
      return {
        level: '심한 우울',
        description: '심한 우울 증상이 있습니다. 가능한 빨리 전문가의 도움을 받으세요.',
        color: 'text-red-600'
      };
    } else {
      return {
        level: '매우 심한 우울',
        description: '매우 심한 우울 증상이 있습니다. 즉시 전문가의 도움을 받으세요.',
        color: 'text-red-800'
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
    
    // 로고 추가 (이미지 URL이 있는 경우)
    // doc.addImage('로고_이미지_URL', 'PNG', 10, 10, 30, 30);
    
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
    
    (doc as any).autoTable({
      startY: 150,
      head: [['번호', '문항', '응답', '점수']],
      body: tableData,
      theme: 'striped',
      headStyles: { fillColor: [100, 100, 255] },
      margin: { top: 150 }
    });
    
    // 주의사항
    const pageCount = (doc as any).internal.getNumberOfPages();
    doc.setPage(pageCount);
    const finalY = (doc as any).lastAutoTable.finalY + 10;
    
    doc.setFontSize(12);
    doc.text('주의사항:', 20, finalY);
    doc.setFontSize(10);
    const cautionText = '이 검사 결과는 참고용으로만 활용하시고, 정확한 진단과 치료를 위해서는 반드시 전문가와 상담하시기 바랍니다. 심각한 증상이 있거나 자해/자살 생각이 있는 경우 즉시 전문가의 도움을 받으세요.';
    const splitCaution = doc.splitTextToSize(cautionText, 170);
    doc.text(splitCaution, 20, finalY + 10);
    
    // 바닥글
    const pageHeight = doc.internal.pageSize.height;
    doc.setFontSize(10);
    doc.text('© 퍼즐핏 - PHQ-9 우울증 자가검진', 105, pageHeight - 10, { align: 'center' });
    
    // PDF 다운로드
    doc.save('PHQ-9_우울증_자가검진_결과.pdf');
  };
  
  // 진행 상태 표시 바
  const progressPercentage = ((currentStep + 1) / questions.length) * 100;
  
  return (
    <div className="min-h-screen bg-gray-50">
      <NavBar />
      
      <div className="max-w-3xl mx-auto px-4 py-12">
        {!showResult ? (
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">PHQ-9 우울증 자가검진</h1>
            
            {/* 진행 상태 표시 */}
            <div className="mb-8">
              <div className="flex justify-between text-sm text-gray-600 mb-1">
                <span>문항 {currentStep + 1} / {questions.length}</span>
                <span>{Math.round(progressPercentage)}% 완료</span>
              </div>
              <div className="w-full bg-gray-200 h-2 rounded-full">
                <div 
                  className="bg-blue-500 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${progressPercentage}%` }}
                ></div>
              </div>
            </div>
            
            {/* 문항 네비게이션 */}
            <div className="flex justify-center mb-6 overflow-x-auto py-2">
              <div className="flex space-x-2">
                {questions.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentStep(index)}
                    className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium transition-colors
                      ${currentStep === index 
                        ? 'bg-blue-600 text-white' 
                        : answers[index] >= 0 
                          ? 'bg-green-100 text-green-800 border border-green-300' 
                          : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                      }`}
                  >
                    {index + 1}
                  </button>
                ))}
              </div>
            </div>
            
            <div className="mb-8">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">
                {questions[currentStep].text}
              </h2>
              
              <div className="space-y-3">
                {options.map((option) => (
                  <div 
                    key={option.value}
                    onClick={() => handleAnswerSelect(currentStep, option.value)}
                    className={`p-4 border rounded-lg cursor-pointer transition-all
                      ${answers[currentStep] === option.value 
                        ? 'border-blue-500 bg-blue-50' 
                        : 'border-gray-200 hover:border-blue-300 hover:bg-blue-50'
                      }`}
                  >
                    <div className="flex items-center">
                      <div className={`w-5 h-5 rounded-full border flex items-center justify-center mr-3
                        ${answers[currentStep] === option.value 
                          ? 'border-blue-500 bg-blue-500' 
                          : 'border-gray-300'
                        }`}
                      >
                        {answers[currentStep] === option.value && (
                          <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        )}
                      </div>
                      <span className="text-gray-800">{option.label}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="flex justify-between">
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
                disabled={answers[currentStep] < 0}
                className={`px-4 py-2 rounded-lg ${
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
            <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">PHQ-9 우울증 자가검진 결과</h1>
            
            <div className="mb-8">
              <p className="text-gray-600 text-center mb-6">
                검사에 응답해주셔서 감사합니다. 아래는 귀하의 PHQ-9 검사 결과입니다.
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
                    <span className="text-gray-500 ml-1">/ 27</span>
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
                        score <= 14 ? 'bg-orange-500' :
                        score <= 19 ? 'bg-red-500' : 'bg-red-700'
                      }`}
                      style={{ width: `${(score / 27) * 100}%` }}
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
                    <div className="flex-shrink-0 w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 mr-3">
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
                심각한 증상이 있거나 자해/자살 생각이 있는 경우 즉시 전문가의 도움을 받으세요.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PHQ9Test; 