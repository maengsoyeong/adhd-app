import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../components/common/NavBar';
import Footer from '../components/layout/Footer';
import Button from '../components/common/Button';

const LandingPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <NavBar />
      
      {/* 히어로 섹션 - 이미지에 맞게 수정 */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          {/* 배경 원형 요소들 */}
          <div className="absolute top-20 right-10 w-80 h-80 bg-teal-300 rounded-full opacity-80 z-0"></div>
          <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-purple-400 rounded-full opacity-80 z-0"></div>
          <div className="absolute bottom-40 right-0 w-64 h-64 bg-lime-300 rounded-full opacity-80 z-0"></div>
          
          {/* 오렌지색 사각형 */}
          <div className="absolute top-20 left-10 w-64 h-64 bg-orange-400 rounded-3xl z-0"></div>
          
          {/* 콘텐츠 */}
          <div className="relative z-10 text-center md:text-right md:mr-20 mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              혹시, 나도 ADHD?!
            </h1>
            
            <div className="mt-10 flex justify-center md:justify-end">
              <Link to="/tests/intro">
                <button className="bg-purple-600 text-white font-medium px-8 py-4 rounded-full text-lg hover:bg-purple-700 transition-colors">
                  지금 바로 시작하기
                </button>
              </Link>
            </div>
          </div>
          
          {/* 행복한 고객 수 표시 */}
          <div className="relative z-10 flex items-center justify-center mt-20">
            <div className="flex -space-x-4">
              <div className="w-12 h-12 bg-green-400 rounded-full flex items-center justify-center text-xl">
                😊
              </div>
              <div className="w-12 h-12 bg-pink-400 rounded-full flex items-center justify-center text-xl">
                😁
              </div>
              <div className="w-12 h-12 bg-green-400 rounded-full flex items-center justify-center text-xl">
                😃
              </div>
            </div>
            <span className="ml-4 text-xl font-medium text-gray-800">80+ Happy Clients</span>
          </div>
        </div>
      </section>
      
      {/* 주요 기능 섹션 */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">퍼즐핏의 주요 기능</h2>
            <p className="text-xl text-gray-500 max-w-3xl mx-auto">
              정신 건강 관리를 위한 다양한 기능을 제공합니다
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* 기능 1 */}
            <div className="bg-purple-50 rounded-xl p-8 text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 text-2xl mx-auto mb-6">
                🧠
              </div>
              <h3 className="text-xl font-semibold mb-3">ADHD 자가진단</h3>
              <p className="text-gray-600">
                과학적으로 검증된 ADHD 자가진단 테스트로 나의 상태를 확인해보세요.
              </p>
            </div>
            
            {/* 기능 2 */}
            <div className="bg-purple-50 rounded-xl p-8 text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 text-2xl mx-auto mb-6">
                📊
              </div>
              <h3 className="text-xl font-semibold mb-3">상세한 결과 분석</h3>
              <p className="text-gray-600">
                테스트 결과를 다양한 측면에서 분석하여 이해하기 쉽게 제공합니다.
              </p>
            </div>
            
            {/* 기능 3 */}
            <div className="bg-purple-50 rounded-xl p-8 text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 text-2xl mx-auto mb-6">
                📱
              </div>
              <h3 className="text-xl font-semibold mb-3">PDF 결과 저장</h3>
              <p className="text-gray-600">
                테스트 결과를 PDF로 저장하여 전문가 상담 시 활용할 수 있습니다.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* 사용 방법 섹션 */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">간단한 3단계로 시작하세요</h2>
            <p className="text-xl text-gray-500 max-w-3xl mx-auto">
              누구나 쉽게 사용할 수 있는 직관적인 프로세스
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* 단계 1 */}
            <div className="relative">
              <div className="absolute -left-4 -top-4 w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center text-white text-xl font-bold">
                1
              </div>
              <div className="bg-white rounded-xl p-8 h-full shadow-sm">
                <h3 className="text-xl font-semibold mb-3">테스트 선택</h3>
                <p className="text-gray-600">
                  다양한 자가진단 테스트 중 원하는 테스트를 선택하세요.
                </p>
              </div>
            </div>
            
            {/* 단계 2 */}
            <div className="relative">
              <div className="absolute -left-4 -top-4 w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center text-white text-xl font-bold">
                2
              </div>
              <div className="bg-white rounded-xl p-8 h-full shadow-sm">
                <h3 className="text-xl font-semibold mb-3">질문에 답변</h3>
                <p className="text-gray-600">
                  간단한 질문에 솔직하게 답변하여 정확한 결과를 얻으세요.
                </p>
              </div>
            </div>
            
            {/* 단계 3 */}
            <div className="relative">
              <div className="absolute -left-4 -top-4 w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center text-white text-xl font-bold">
                3
              </div>
              <div className="bg-white rounded-xl p-8 h-full shadow-sm">
                <h3 className="text-xl font-semibold mb-3">결과 확인</h3>
                <p className="text-gray-600">
                  상세한 결과 분석을 확인하고 필요시 PDF로 저장하세요.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* 신뢰 요소 섹션 */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">많은 분들이 신뢰하고 있습니다</h2>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-4xl font-bold text-purple-600 mb-2">10,000+</p>
              <p className="text-gray-500">월간 사용자</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-purple-600 mb-2">50,000+</p>
              <p className="text-gray-500">완료된 테스트</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-purple-600 mb-2">4.8/5</p>
              <p className="text-gray-500">사용자 만족도</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-purple-600 mb-2">15+</p>
              <p className="text-gray-500">협력 전문가</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ 섹션 */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">자주 묻는 질문</h2>
          </div>
          
          <div className="space-y-6">
            {/* FAQ 항목 1 */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">테스트 결과는 얼마나 정확한가요?</h3>
              <p className="text-gray-600">
                퍼즐핏의 테스트는 과학적으로 검증된 평가 도구를 기반으로 합니다. 
                다만, 자가진단 테스트는 전문가의 진단을 대체할 수 없으며 참고용으로만 활용하시기 바랍니다.
              </p>
            </div>
            
            {/* FAQ 항목 2 */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">테스트 결과는 저장되나요?</h3>
              <p className="text-gray-600">
                현재는 브라우저 세션 동안만 결과가 유지되며, 페이지를 떠나면 결과가 사라집니다. 
                필요하시면 결과 페이지에서 PDF로 저장하여 보관하실 수 있습니다.
              </p>
            </div>
            
            {/* FAQ 항목 3 */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">테스트는 무료인가요?</h3>
              <p className="text-gray-600">
                네, 모든 기본 테스트는 무료로 제공됩니다. 추후 더 상세한 분석이나 추가 기능은 
                유료로 제공될 수 있습니다.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA 섹션 */}
      <section className="py-20 bg-purple-600">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">지금 바로 시작하세요</h2>
          <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
            나의 정신 건강 상태를 이해하는 첫 걸음, 퍼즐핏과 함께 시작해보세요.
          </p>
          <Link to="/tests/intro">
            <Button variant="secondary" size="lg" className="px-8 py-4 text-lg">
              무료 테스트 시작하기
            </Button>
          </Link>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default LandingPage; 