import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import MainLayout from './components/layouts/MainLayout';

// 페이지 컴포넌트 임포트
import LandingPage from './pages/LandingPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import EducationInquiryPage from './pages/EducationInquiryPage';
import CorporateInquiryPage from './pages/CorporateInquiryPage';
import Community from './pages/Community';
import LoginPage from './pages/LoginPage';
import SelfCheckPage from './pages/SelfCheckPage';
import InformationPage from './pages/InformationPage';

// 테스트 관련 페이지 임포트
import SurveyIntro from './pages/SurveyIntro';
import SurveyTest from './pages/SurveyTest';
import SurveyResult from './pages/SurveyResult';
import PHQ9Test from './pages/specific/PHQ9Test';
import GAD7Test from './pages/specific/GAD7Test';

// 스타일 임포트
import './App.css';
import './pages/Community.css';

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <Router>
        <Routes>
          <Route element={<MainLayout />}>
            {/* 메인 페이지 */}
            <Route path="/" element={<LandingPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/community" element={<Community />} />
            <Route path="/login" element={<LoginPage />} />
            
            {/* 문의 페이지 */}
            <Route path="/education-inquiry" element={<EducationInquiryPage />} />
            <Route path="/corporate-inquiry" element={<CorporateInquiryPage />} />
            
            {/* 테스트 페이지 */}
            <Route path="/tests">
              <Route index element={<SurveyIntro />} />
              <Route path="intro" element={<SurveyIntro />} />
              <Route path="self-check" element={<SelfCheckPage />} />
              <Route path="survey" element={<SurveyTest />} />
              <Route path="result" element={<SurveyResult />} />
              <Route path="specific">
                <Route path="phq9" element={<PHQ9Test />} />
                <Route path="gad7" element={<GAD7Test />} />
              </Route>
            </Route>

            <Route path="/information" element={<InformationPage />} />
          </Route>
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App; 