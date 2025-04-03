import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/common/NavBar';
import Footer from './components/layout/Footer';
import Community from './pages/Community';
import './App.css';
import './pages/Community.css';

// 페이지 컴포넌트 임포트
import LandingPage from './pages/LandingPage';
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

const App: React.FC = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <NavBar />
        <main className="flex-grow">
          <Routes>
            {/* 메인 페이지 */}
            <Route path="/" element={<LandingPage />} />
            <Route path="/community" element={<Community />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            
            {/* 문의 페이지 */}
            <Route path="/education-inquiry" element={<EducationInquiryPage />} />
            <Route path="/corporate-inquiry" element={<CorporateInquiryPage />} />
            
            {/* 테스트 페이지 */}
            <Route path="/intro" element={<SurveyIntro />} />
            <Route path="/test" element={<SurveyTest />} />
            <Route path="/tests/intro" element={<SurveyIntro />} />
            <Route path="/tests/self-check" element={<SelfCheckPage />} />
            <Route path="/tests/survey" element={<SurveyTest />} />
            <Route path="/tests/result" element={<SurveyResult />} />
            
            {/* 특정 테스트 페이지 */}
            <Route path="/test/phq9" element={<PHQ9Test />} />
            <Route path="/test/gad7" element={<GAD7Test />} />
            <Route path="/tests/specific/phq9" element={<PHQ9Test />} />
            <Route path="/tests/specific/gad7" element={<GAD7Test />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App; 