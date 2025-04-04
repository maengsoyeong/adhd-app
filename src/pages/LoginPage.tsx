import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // 여기에 로그인 로직 구현
    console.log('로그인 시도:', { email, password, rememberMe });
  };
  
  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">로그인/회원가입</h1>
        <p className="text-lg mb-4">사용중인 이메일로 간편하게 가입하세요.</p>
        <div className="bg-yellow-100 text-yellow-800 px-4 py-2 rounded-md inline-block mb-8 font-medium text-sm">
          맨 아래에서 비회원 주문/조회도 가능해요!
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* 왼쪽 섹션 - 일러스트와 혜택 정보 */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-emerald-500 rounded-3xl p-8 text-white relative overflow-hidden"
          >
            <div className="relative z-10">
              <h2 className="text-2xl font-bold mb-4">회원가입 후 구매하면<br />주어지는 혜택이에요.</h2>
              
              <div className="mt-16 grid grid-cols-3 gap-4">
                <div className="text-center">
                  <img 
                    src="/images/benefit1.png" 
                    alt="혜택 1" 
                    className="w-24 h-24 mx-auto mb-2"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = 'https://via.placeholder.com/100?text=혜택1';
                    }}
                  />
                  <p className="text-sm font-medium">[추천인 제도]<br />참가기회</p>
                </div>
                
                <div className="text-center">
                  <img 
                    src="/images/benefit2.png" 
                    alt="혜택 2" 
                    className="w-24 h-24 mx-auto mb-2"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = 'https://via.placeholder.com/100?text=혜택2';
                    }}
                  />
                  <p className="text-sm font-medium">추천받은 친구는<br />2천원 할인</p>
                </div>
                
                <div className="text-center">
                  <img 
                    src="/images/benefit3.png" 
                    alt="혜택 3" 
                    className="w-24 h-24 mx-auto mb-2"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = 'https://via.placeholder.com/100?text=혜택3';
                    }}
                  />
                  <p className="text-sm font-medium">추천한 해적단원은<br />5천원 보상</p>
                </div>
              </div>
            </div>
            
            {/* 일러스트 캐릭터 */}
            <div className="absolute top-10 right-10">
              <img 
                src="/images/character.png" 
                alt="캐릭터" 
                className="w-32 h-32"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = 'https://via.placeholder.com/150?text=캐릭터';
                }}
              />
            </div>
          </motion.div>
          
          {/* 오른쪽 섹션 - 로그인 폼 */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-3xl p-8 shadow-md"
          >
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="appearance-none block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                  placeholder="이메일"
                />
              </div>
              
              <div>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="appearance-none block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                  placeholder="비밀번호"
                />
              </div>
              
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">
                  로그인상태유지
                </label>
              </div>
              
              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
                >
                  로그인
                </button>
              </div>
            </form>
            
            <div className="mt-6 flex justify-between">
              <button className="text-sm text-gray-600 hover:text-gray-900">
                회원가입
              </button>
              <div className="text-sm">
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  아이디 · 비밀번호 찾기
                </a>
              </div>
            </div>
            
            <div className="mt-8 relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">또는</span>
              </div>
            </div>
            
            <div className="mt-6 space-y-4">
              <button
                type="button"
                className="w-full flex justify-center py-3 px-4 border border-gray-300 rounded-md shadow-sm bg-emerald-500 text-white text-sm font-medium hover:bg-emerald-600"
              >
                네이버로 시작하기
              </button>
              
              <button
                type="button"
                className="w-full flex justify-center py-3 px-4 border border-gray-300 rounded-md shadow-sm bg-yellow-400 text-white text-sm font-medium hover:bg-yellow-500"
              >
                카카오로 시작하기
              </button>
              
              <button
                type="button"
                className="w-full flex justify-center py-3 px-4 border border-gray-300 rounded-md shadow-sm bg-gray-500 text-white text-sm font-medium hover:bg-gray-600"
              >
                비회원 주문
              </button>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* 도움말 캐릭터 */}
      <div className="fixed bottom-4 right-4">
        <div className="bg-white p-2 rounded-full shadow-lg relative">
          <div className="absolute -top-10 -left-32 bg-white p-2 rounded-lg shadow-md text-sm">
            궁금한게 있나요?
          </div>
          <img 
            src="/images/help-character.png" 
            alt="도움말 캐릭터" 
            className="w-16 h-16"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = 'https://via.placeholder.com/64?text=도움말';
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default LoginPage; 