import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

// 페이지 컴포넌트 임포트
// LandingPage 경로 수정 또는 임시 홈페이지 사용
import LandingPage from './pages/LandingPage'; // 경로 수정
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import EducationInquiryPage from './pages/EducationInquiryPage';
import CorporateInquiryPage from './pages/CorporateInquiryPage';

// 테스트 관련 페이지 임포트
import { SurveyIntro } from './pages/SurveyIntro';
import SelfCheckPage from './pages/SelfCheckPage';
import { SurveyTest } from './pages/SurveyTest';
import { SurveyResult } from './pages/SurveyResult';
import PHQ9Test from './pages/specific/PHQ9Test';
import GAD7Test from './pages/specific/GAD7Test';

function App() {
  return (
    <Router>
      <Routes>
        {/* 메인 페이지 */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<AboutPage />} />
        
        {/* 문의 페이지 */}
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/education-inquiry" element={<EducationInquiryPage />} />
        <Route path="/corporate-inquiry" element={<CorporateInquiryPage />} />
        
        {/* 테스트 페이지 - 경로 수정 */}
        <Route path="/intro" element={<SurveyIntro />} />
        <Route path="/test" element={<SurveyTest />} />
        <Route path="/tests/intro" element={<SurveyIntro />} />
        <Route path="/tests/self-check" element={<SelfCheckPage />} />
        <Route path="/tests/survey" element={<SurveyTest />} />
        <Route path="/tests/result" element={<SurveyResult />} />
        
        {/* 특정 테스트 페이지 - 경로 수정 */}
        <Route path="/test/phq9" element={<PHQ9Test />} />
        <Route path="/test/gad7" element={<GAD7Test />} />
        <Route path="/tests/specific/phq9" element={<PHQ9Test />} />
        <Route path="/tests/specific/gad7" element={<GAD7Test />} />
      </Routes>
    </Router>
  );
}

export default App; 