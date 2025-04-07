import React, { useEffect } from 'react';

const ContactPage: React.FC = () => {
  useEffect(() => {
    // 페이지가 로드되면 FormSubmit 링크로 리디렉션
    window.location.href = 'https://formsubmit.co/el/yefici';
  }, []);

  // 리디렉션 전 잠시 표시될 로딩 UI
  return (
    <div className="flex flex-col items-center justify-center min-h-[50vh]">
      <h1 className="text-2xl font-bold mb-4">문의하기 페이지로 이동 중...</h1>
      <p className="text-gray-600">
        잠시만 기다려주세요. 자동으로 문의 양식으로 이동합니다.
      </p>
      <div className="mt-6">
        <p>
          자동으로 이동하지 않는 경우 
          <a 
            href="https://formsubmit.co/el/yefici" 
            className="text-purple-600 font-medium ml-1"
          >
            여기를 클릭하세요.
          </a>
        </p>
      </div>
    </div>
  );
};

export default ContactPage; 