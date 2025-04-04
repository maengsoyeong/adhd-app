import React from 'react';
import InquiryForm from '../components/forms/InquiryForm';
import './EducationInquiryPage.css';

const EducationInquiryPage: React.FC = () => {
  const handleSubmit = (formData: any) => {
    console.log('교육 문의 제출:', formData);
    // API 호출 또는 다른 처리
  };

  return (
    <div>
      {/* 헤더 섹션 */}
      <div className="education-inquiry-header">
        <div className="container">
          <h1 className="education-inquiry-title">문의</h1>
        </div>
      </div>
      
      {/* 메인 콘텐츠 */}
      <div className="education-inquiry-content">
        <div className="container">
          <h2 className="section-title">교육 기관 문의</h2>
          <div className="inquiry-card">
            <p className="inquiry-description">
              퍼즐핏의 교육 프로그램에 관심이 있으신가요? 아래 양식을 작성하시면 담당자가 빠르게 연락드립니다.
            </p>
            <InquiryForm type="education" onSubmit={handleSubmit} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationInquiryPage; 