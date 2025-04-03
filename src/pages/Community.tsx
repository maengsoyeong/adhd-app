import React from 'react';
import { motion } from 'framer-motion';
import './Community.css';

const Community: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-10">
        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-purple-700">커뮤니티</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          ADHD 관련 정보와 경험을 공유하는 공간입니다. 함께 성장하고 지원하는 커뮤니티에 참여해보세요.
        </p>
        <div className="w-20 h-1 bg-purple-500 mx-auto rounded-full mt-4"></div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-white p-6 rounded-3xl shadow-lg mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-purple-800">인기 게시글</h2>
              
              <div className="space-y-6">
                <div className="p-5 bg-purple-50 rounded-2xl hover:shadow-md transition-shadow cursor-pointer">
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">ADHD와 함께 살아가는 방법</h3>
                  <p className="text-sm text-gray-500 mb-3">작성자: 사용자1 | 날짜: 2023-05-15</p>
                  <p className="text-gray-700 mb-4">
                    ADHD를 가지고 살아가면서 제가 발견한 효과적인 전략들을 공유합니다. 일상에서 실천할 수 있는 작은 습관들이 큰 변화를 가져올 수 있습니다.
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <span className="flex items-center text-gray-600">
                        <svg className="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                          <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z" />
                        </svg>
                        24
                      </span>
                      <span className="flex items-center text-gray-600">
                        <svg className="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z" clipRule="evenodd" />
                        </svg>
                        8
                      </span>
                    </div>
                    <button className="text-purple-600 hover:text-purple-800 font-medium">더 읽기</button>
                  </div>
                </div>
                
                <div className="p-5 bg-purple-50 rounded-2xl hover:shadow-md transition-shadow cursor-pointer">
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">약물치료 경험 공유</h3>
                  <p className="text-sm text-gray-500 mb-3">작성자: 사용자2 | 날짜: 2023-05-10</p>
                  <p className="text-gray-700 mb-4">
                    ADHD 약물치료를 시작한 지 3개월이 지났습니다. 제 경험과 느낀 변화들, 그리고 부작용에 대처하는 방법을 공유합니다.
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <span className="flex items-center text-gray-600">
                        <svg className="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                          <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z" />
                        </svg>
                        36
                      </span>
                      <span className="flex items-center text-gray-600">
                        <svg className="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z" clipRule="evenodd" />
                        </svg>
                        15
                      </span>
                    </div>
                    <button className="text-purple-600 hover:text-purple-800 font-medium">더 읽기</button>
                  </div>
                </div>
                
                <div className="p-5 bg-purple-50 rounded-2xl hover:shadow-md transition-shadow cursor-pointer">
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">집중력 향상을 위한 팁</h3>
                  <p className="text-sm text-gray-500 mb-3">작성자: 사용자3 | 날짜: 2023-05-05</p>
                  <p className="text-gray-700 mb-4">
                    ADHD가 있어도 집중력을 향상시킬 수 있는 방법들을 소개합니다. 작업 환경 조성부터 시간 관리 기법까지 다양한 팁을 알려드립니다.
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <span className="flex items-center text-gray-600">
                        <svg className="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                          <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z" />
                        </svg>
                        42
                      </span>
                      <span className="flex items-center text-gray-600">
                        <svg className="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z" clipRule="evenodd" />
                        </svg>
                        23
                      </span>
                    </div>
                    <button className="text-purple-600 hover:text-purple-800 font-medium">더 읽기</button>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 text-center">
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-purple-100 text-purple-700 px-6 py-3 rounded-full hover:bg-purple-200 transition-colors font-medium"
                >
                  더 많은 게시글 보기
                </motion.button>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-3xl shadow-lg">
              <h2 className="text-2xl font-semibold mb-6 text-purple-800">새 게시글 작성</h2>
              
              <form>
                <div className="mb-4">
                  <label htmlFor="title" className="block text-gray-700 mb-2 font-medium">제목</label>
                  <input
                    type="text"
                    id="title"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    placeholder="제목을 입력하세요"
                  />
                </div>
                
                <div className="mb-4">
                  <label htmlFor="category" className="block text-gray-700 mb-2 font-medium">카테고리</label>
                  <select
                    id="category"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent bg-white"
                  >
                    <option value="">카테고리 선택</option>
                    <option value="experience">경험 공유</option>
                    <option value="question">질문</option>
                    <option value="tips">팁과 노하우</option>
                    <option value="support">응원과 지지</option>
                  </select>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="content" className="block text-gray-700 mb-2 font-medium">내용</label>
                  <textarea
                    id="content"
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    placeholder="내용을 입력하세요"
                  ></textarea>
                </div>
                
                <div className="flex justify-end">
                  <motion.button 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    type="submit"
                    className="bg-gradient-to-r from-purple-600 to-purple-800 text-white px-6 py-3 rounded-full hover:shadow-lg transition-all duration-300"
                  >
                    게시글 등록
                  </motion.button>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
        
        <div className="lg:col-span-1">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="bg-white p-6 rounded-3xl shadow-lg mb-8">
              <h2 className="text-xl font-semibold mb-4 text-purple-800">인기 주제</h2>
              <ul className="space-y-2">
                <li className="p-3 bg-purple-50 rounded-xl hover:bg-purple-100 transition-colors cursor-pointer">
                  <a href="#" className="flex items-center text-gray-700">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                    약물치료
                  </a>
                </li>
                <li className="p-3 bg-purple-50 rounded-xl hover:bg-purple-100 transition-colors cursor-pointer">
                  <a href="#" className="flex items-center text-gray-700">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                    행동치료
                  </a>
                </li>
                <li className="p-3 bg-purple-50 rounded-xl hover:bg-purple-100 transition-colors cursor-pointer">
                  <a href="#" className="flex items-center text-gray-700">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                    일상생활 관리
                  </a>
                </li>
                <li className="p-3 bg-purple-50 rounded-xl hover:bg-purple-100 transition-colors cursor-pointer">
                  <a href="#" className="flex items-center text-gray-700">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                    학업/직장 생활
                  </a>
                </li>
                <li className="p-3 bg-purple-50 rounded-xl hover:bg-purple-100 transition-colors cursor-pointer">
                  <a href="#" className="flex items-center text-gray-700">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                    관계 형성
                  </a>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-3xl shadow-lg mb-8">
              <h2 className="text-xl font-semibold mb-4 text-purple-800">커뮤니티 통계</h2>
              <div className="space-y-3">
                <div className="flex justify-between items-center p-3 bg-purple-50 rounded-xl">
                  <span className="text-gray-700">회원 수</span>
                  <span className="font-semibold text-purple-700">1,245</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-purple-50 rounded-xl">
                  <span className="text-gray-700">게시물 수</span>
                  <span className="font-semibold text-purple-700">3,567</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-purple-50 rounded-xl">
                  <span className="text-gray-700">오늘 방문자</span>
                  <span className="font-semibold text-purple-700">89</span>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-purple-600 to-purple-800 p-6 rounded-3xl shadow-lg text-white">
              <h2 className="text-xl font-semibold mb-4">도움이 필요하신가요?</h2>
              <p className="mb-6">
                ADHD 관련 전문가와 상담하고 싶으시다면 아래 버튼을 클릭하세요.
              </p>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-white text-purple-700 px-4 py-3 rounded-full font-medium hover:shadow-lg transition-all duration-300"
              >
                전문가 찾기
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Community; 