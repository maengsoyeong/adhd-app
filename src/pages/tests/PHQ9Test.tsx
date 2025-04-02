import React, { useState } from 'react';
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
  
  const handleAnswerSelect = (questionIndex: number, value: number) => {
    const newAnswers = [...answers];
    newAnswers[questionIndex] = value;
    setAnswers(newAnswers);
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
  
  const generatePDF = () => {
    const score = calculateScore();
    const result = getResultInterpretation(score);
    
    const doc = new jsPDF();
    
    // 제목
    doc.setFontSize(20);
    doc.text('PHQ-9 우울증 검사 결과', 105, 20, { align: 'center' });
    
    // 개인 정보
    doc.setFontSize(12);
    doc.text(`이름: ${userName || '미입력'}`, 20, 40);
    doc.text(`나이: ${userAge || '미입력'}`, 20, 50);
    doc.text(`성별: ${userGender || '미입력'}`, 20, 60);
    doc.text(`검사 일자: ${new Date().toLocaleDateString()}`, 20, 70);
    
    // 점수 및 해석
    doc.setFontSize(16);
    doc.text('검사 결과', 105, 90, { align: 'center' });
    
    doc.setFontSize(14);
    doc.text(`총점: ${score}점 / 27점`, 105, 105, { align: 'center' });
    doc.text(`우울 수준: ${result.level}`, 105, 115, { align: 'center' });
    
    // 결과 해석
    doc.setFontSize(12);
    const splitDescription = doc.splitTextToSize(result.description, 170);
    doc.text(splitDescription, 105, 130, { align: 'center' });
    
    // 문항별 응답
    doc.setFontSize(14);
    doc.text('문항별 응답', 105, 150, { align: 'center' });
    
    const tableColumn = ["문항", "응답"];
    const tableRows: any[] = [];
    
    questions.forEach((question, index) => {
      const answerText = answers[index] >= 0 ? options[answers[index]].label : '응답 없음';
      tableRows.push([`${index + 1}. ${question.text.substring(0, 40)}...`, answerText]);
    });
    
    (doc as any).autoTable({
      head: [tableColumn],
      body: tableRows,
      startY: 160,
      theme: 'grid',
      headStyles: { fillColor: [100, 50, 150] },
      margin: { top: 160 }
    });
    
    // 주의사항
    const pageCount = (doc as any).internal.getNumberOfPages();
    doc.setPage(pageCount);
    const finalY = (doc as any).lastAutoTable.finalY + 10;
    
    doc.setFontSize(10);
    doc.setTextColor(100);
    doc.text('※ 주의사항: 이 결과는 참고용으로만 활용하시고, 정확한 진단을 위해서는 반드시 전문가와 상담하시기 바랍니다.', 105, finalY, { align: 'center' });
    
    // PDF 저장
    doc.save('PHQ9_검사결과.pdf');
  };
  
  return (
    <div className="min-h-screen bg-gray-50">
      <NavBar />
      
      <div className="max-w-3xl mx-auto px-4 py-12">
        {!showResult ? (
          <>
            <div className="mb-8">
              <h1 className="text-2xl font-bold text-gray-800 mb-2">PHQ-9 우울증 선별 검사</h1>
              <p className="text-gray-600">
                지난 2주 동안 당신이 겪은 증상에 대해 가장 적절한 답변을 선택해주세요.
              </p>
              
              <div className="w-full bg-gray-200 h-2 mt-6 rounded-full">
                <div 
                  className="bg-purple-600 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${((currentStep + 1) / questions.length) * 100}%` }}
                ></div>
              </div>
              <div className="text-right text-sm text-purple-600 mt-1">
                {currentStep + 1} / {questions.length}
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">
                {questions[currentStep].text}
              </h2>
              
              <div className="space-y-3 mt-6">
                {options.map((option) => (
                  <div 
                    key={option.value}
                    className={`p-4 border rounded-lg cursor-pointer transition-colors ${
                      answers[currentStep] === option.value 
                        ? 'border-purple-500 bg-purple-50' 
                        : 'border-gray-200 hover:border-purple-300'
                    }`}
                    onClick={() => handleAnswerSelect(currentStep, option.value)}
                  >
                    <div className="flex items-center">
                      <div className={`w-5 h-5 rounded-full border flex items-center justify-center mr-3 ${
                        answers[currentStep] === option.value 
                          ? 'border-purple-500' 
                          : 'border-gray-400'
                      }`}>
                        {answers[currentStep] === option.value && (
                          <div className="w-3 h-3 rounded-full bg-purple-500"></div>
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
                className={`px-6 py-2 rounded-lg ${
                  currentStep === 0 
                    ? 'bg-gray-200 text-gray-500 cursor-not-allowed' 
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                이전
              </button>
              
              <button
                onClick={handleNext}
                disabled={answers[currentStep] === -1}
                className={`px-6 py-2 rounded-lg ${
                  answers[currentStep] === -1 
                    ? 'bg-purple-300 text-white cursor-not-allowed' 
                    : 'bg-purple-600 text-white hover:bg-purple-700'
                }`}
              >
                {currentStep === questions.length - 1 ? '결과 보기' : '다음'}
              </button>
            </div>
          </>
        ) : (
          <div className="bg-white rounded-lg shadow-sm p-8">
            <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">PHQ-9 검사 결과</h1>
            
            <div className="mb-8">
              <p className="text-gray-600 mb-4">
                결과를 PDF로 저장하기 위해 아래 정보를 입력해주세요. (선택사항)
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">이름</label>
                  <input
                    type="text"
                    id="name"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    placeholder="이름 입력"
                  />
                </div>
                
                <div>
                  <label htmlFor="age" className="block text-sm font-medium text-gray-700 mb-1">나이</label>
                  <input
                    type="number"
                    id="age"
                    value={userAge}
                    onChange={(e) => setUserAge(e.target.value)}
                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    placeholder="나이 입력"
                  />
                </div>
                
                <div>
                  <label htmlFor="gender" className="block text-sm font-medium text-gray-700 mb-1">성별</label>
                  <select
                    id="gender"
                    value={userGender}
                    onChange={(e) => setUserGender(e.target.value)}
                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
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