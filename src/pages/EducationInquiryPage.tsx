import React from 'react';

const EducationInquiryPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">교육 기관 문의</h1>
      <p className="mb-8">
        학교, 학원 등 교육 기관에서의 ADHD 관련 교육 및 지원 프로그램에 대한 문의를 받고 있습니다.
      </p>
      
      <form className="max-w-lg">
        <div className="mb-4">
          <label htmlFor="institution" className="block text-gray-700 mb-2">기관명</label>
          <input
            type="text"
            id="institution"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
            placeholder="기관명을 입력하세요"
          />
        </div>
        
        <div className="mb-4">
          <label htmlFor="contact" className="block text-gray-700 mb-2">담당자명</label>
          <input
            type="text"
            id="contact"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
            placeholder="담당자명을 입력하세요"
          />
        </div>
        
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 mb-2">이메일</label>
          <input
            type="email"
            id="email"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
            placeholder="이메일을 입력하세요"
          />
        </div>
        
        <div className="mb-4">
          <label htmlFor="inquiry" className="block text-gray-700 mb-2">문의 내용</label>
          <textarea
            id="inquiry"
            rows={5}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
            placeholder="문의 내용을 입력하세요"
          ></textarea>
        </div>
        
        <button
          type="submit"
          className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 transition-colors"
        >
          문의하기
        </button>
      </form>
    </div>
  );
};

export default EducationInquiryPage; 