import React from 'react';
import Button from '../common/Button';

interface InquiryFormProps {
  type: 'education' | 'corporate';
  onSubmit: (formData: any) => void;
}

const InquiryForm: React.FC<InquiryFormProps> = ({ type, onSubmit }) => {
  // 폼 상태 및 제출 로직 구현
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // 폼 데이터 수집 및 제출
    onSubmit({
      // 폼 데이터
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* 공통 필드 */}
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
          이름
        </label>
        <input
          type="text"
          id="name"
          name="name"
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
        />
      </div>
      
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
          이메일
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
        />
      </div>
      
      {/* 타입별 특정 필드 */}
      {type === 'education' && (
        <div>
          <label htmlFor="school" className="block text-sm font-medium text-gray-700">
            학교/기관명
          </label>
          <input
            type="text"
            id="school"
            name="school"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
          />
        </div>
      )}
      
      {type === 'corporate' && (
        <div>
          <label htmlFor="company" className="block text-sm font-medium text-gray-700">
            회사명
          </label>
          <input
            type="text"
            id="company"
            name="company"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
          />
        </div>
      )}
      
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700">
          문의 내용
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
        ></textarea>
      </div>
      
      <div>
        <Button type="submit" variant="primary" fullWidth>
          문의하기
        </Button>
      </div>
    </form>
  );
};

export default InquiryForm; 