import React from 'react';

const ContactPage: React.FC = () => {
  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">연락하기</h1>
      <form className="space-y-4">
        <div>
          <label htmlFor="name" className="block mb-1">이름</label>
          <input 
            type="text" 
            id="name" 
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500" 
            placeholder="이름을 입력하세요"
          />
        </div>
        <div>
          <label htmlFor="email" className="block mb-1">이메일</label>
          <input 
            type="email" 
            id="email" 
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500" 
            placeholder="이메일을 입력하세요"
          />
        </div>
        <div>
          <label htmlFor="message" className="block mb-1">메시지</label>
          <textarea 
            id="message" 
            rows={5} 
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500" 
            placeholder="메시지를 입력하세요"
          ></textarea>
        </div>
        <button 
          type="submit" 
          className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg transition-colors"
        >
          전송하기
        </button>
      </form>
    </div>
  );
};

export default ContactPage; 