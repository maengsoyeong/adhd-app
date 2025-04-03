import React from 'react';
import InquiryForm from '../components/forms/InquiryForm';

const CorporateInquiryPage: React.FC = () => {
  const handleSubmit = (formData: any) => {
    console.log('기업 문의 제출:', formData);
    // API 호출 또는 다른 처리
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-center mb-8">기업 문의</h1>
      <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md">
        <p className="text-gray-600 mb-6">
          퍼즐핏의 기업 솔루션에 관심이 있으신가요? 아래 양식을 작성하시면 담당자가 빠르게 연락드립니다.
        </p>
        <InquiryForm type="corporate" onSubmit={handleSubmit} />
      </div>
    </div>
  );
};

export default CorporateInquiryPage; 