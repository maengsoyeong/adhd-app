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
      }, 500);
    } else {
      // 마지막 문항이면 결과 페이지로 이동
      setTimeout(() => {
        setShowResult(true);
      }, 1000);
    }
  };
  
  // 점수 계산
  const calculateScore = () => {
    return answers.reduce((sum, answer) => sum + (answer >= 0 ? answer : 0), 0);
  };
  
  // 결과 해석
  const getResultLevel = () => {
    const score = calculateScore();
    if (score <= 4) return "정상";
    if (score <= 9) return "경미한 불안";
    if (score <= 14) return "중간 정도 불안";
    return "심한 불안";
  };
  
  // PDF 생성
  const generatePDF = () => {
    const doc = new jsPDF();
    
    // 제목
    doc.setFontSize(20);
    doc.text('GAD-7 불안장애 검사 결과', 105, 20, { align: 'center' });
    
    // 기본 정보
    doc.setFontSize(12);
    doc.text(`검사일: ${new Date().toLocaleDateString()}`, 20, 40);
    if (userName) doc.text(`이름: ${userName}`, 20, 50);
    if (userAge) doc.text(`나이: ${userAge}세`, 20, 60);
    if (userGender) doc.text(`성별: ${userGender}`, 20, 70);
    
    // 결과 요약
    doc.setFontSize(16);
    doc.text('검사 결과 요약', 20, 90);
    doc.setFontSize(14);
    doc.text(`총점: ${calculateScore()} / 21`, 20, 100);
    doc.text(`결과: ${getResultLevel()}`, 20, 110);
    
    // 문항별 응답
    doc.setFontSize(16);
    doc.text('문항별 응답', 20, 130);
    
    // 테이블 데이터 준비
    const tableData = questions.map((question, index) => [
      index + 1,
      question.text,
      answers[index] >= 0 ? options[answers[index]].label : '응답 없음',
      answers[index] >= 0 ? answers[index].toString() : '-'
    ]);
    
    // 테이블 생성
    (doc as any).autoTable({
      startY: 140,
      head: [['번호', '문항', '응답', '점수']],
      body: tableData,
      theme: 'grid',
      headStyles: { fillColor: [75, 0, 130] },
      columnStyles: {
        0: { cellWidth: 15 },
        1: { cellWidth: 100 },
        2: { cellWidth: 50 },
        3: { cellWidth: 15 }
      }
    });
    
    // 주의사항
    const finalY = (doc as any).lastAutoTable.finalY + 20;
    doc.setFontSize(12);
    doc.text('주의사항', 20, finalY);
    doc.setFontSize(10);
    doc.text('이 검사 결과는 참고용으로만 활용하시고, 정확한 진단과 치료를 위해서는', 20, finalY + 10);
    doc.text('반드시 전문가와 상담하시기 바랍니다.', 20, finalY + 20);
    
    // PDF 저장
    doc.save('GAD7_검사결과.pdf');
  };
  
  return (
    <div className="min-h-screen bg-gray-50">
      <NavBar />
      
      <div className="max-w-4xl mx-auto p-4 py-8">
        {!showResult ? (
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
              GAD-7 불안장애 검사
            </h1>
            
            <p className="text-gray-600 mb-8 text-center">
              지난 2주 동안 당신이 경험한 증상의 빈도를 선택해주세요.
            </p>
            
            <ProgressBar currentStep={currentStep + 1} totalSteps={questions.length} />
            
            <div className="mt-8">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">
                {currentStep + 1}. {questions[currentStep].text}
              </h2>
              
              <div className="space-y-3 mt-6">
                {options.map((option) => (
                  <button
                    key={option.value}
                    className={`w-full text-left p-4 rounded-lg border transition-colors ${
                      answers[currentStep] === option.value
                        ? 'bg-purple-100 border-purple-300 text-purple-800'
                        : 'bg-white border-gray-200 text-gray-700 hover:bg-gray-50'
                    }`}
                    onClick={() => handleAnswerSelect(currentStep, option.value)}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
              
              <div className="flex justify-between mt-8">
                <button
                  onClick={() => setCurrentStep(Math.max(0, currentStep - 1))}
                  className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors"
                  disabled={currentStep === 0}
                >
                  이전
                </button>
                
                <button
                  onClick={() => currentStep < questions.length - 1 ? setCurrentStep(currentStep + 1) : setShowResult(true)}
                  className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
                  disabled={answers[currentStep] === -1}
                >
                  {currentStep < questions.length - 1 ? '다음' : '결과 보기'}
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div>
            <Card className="mb-8">
              <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
                GAD-7 불안장애 검사 결과
              </h1>
              
              <div className="text-center mb-8">
                <div className="text-5xl font-bold text-purple-700 mb-2">
                  {calculateScore()} <span className="text-xl text-gray-500">/ 21</span>
                </div>
                <div className="text-xl font-medium text-gray-800">
                  {getResultLevel()}
                </div>
              </div>
              
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">결과 해석</h3>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-gray-700 mb-4">
                    {calculateScore() <= 4 ? (
                      "정상 범위입니다. 현재 불안 증상이 거의 없거나 매우 경미합니다."
                    ) : calculateScore() <= 9 ? (
                      "경미한 불안 증상이 있습니다. 자기 관리와 스트레스 관리 기법을 활용해보세요."
                    ) : calculateScore() <= 14 ? (
                      "중간 정도의 불안 증상이 있습니다. 전문가와 상담을 고려해보세요."
                    ) : (
                      "심한 불안 증상이 있습니다. 가능한 빨리 전문가의 도움을 받는 것이 좋습니다."
                    )}
                  </p>
                  
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-start">
                      <span className={`inline-block w-3 h-3 mt-1.5 mr-2 rounded-full ${calculateScore() <= 4 ? 'bg-green-500' : 'bg-gray-300'}`}></span>
                      <span>0-4점: 정상</span>
                    </li>
                    <li className="flex items-start">
                      <span className={`inline-block w-3 h-3 mt-1.5 mr-2 rounded-full ${calculateScore() > 4 && calculateScore() <= 9 ? 'bg-yellow-500' : 'bg-gray-300'}`}></span>
                      <span>5-9점: 경미한 불안</span>
                    </li>
                    <li className="flex items-start">
                      <span className={`inline-block w-3 h-3 mt-1.5 mr-2 rounded-full ${calculateScore() > 9 && calculateScore() <= 14 ? 'bg-orange-500' : 'bg-gray-300'}`}></span>
                      <span>10-14점: 중간 정도 불안</span>
                    </li>
                    <li className="flex items-start">
                      <span className={`inline-block w-3 h-3 mt-1.5 mr-2 rounded-full ${calculateScore() > 14 ? 'bg-red-500' : 'bg-gray-300'}`}></span>
                      <span>15-21점: 심한 불안</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row justify-center space-y-3 sm:space-y-0 sm:space-x-4">
                <button
                  onClick={generatePDF}
                  className="px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors flex items-center justify-center"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                  PDF로 저장하기
                </button>
                
                <button
                  onClick={() => navigate('/tests/self-check')}
                  className="px-6 py-3 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors"
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