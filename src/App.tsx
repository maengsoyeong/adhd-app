import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/layout/Layout';

// 페이지 컴포넌트 임포트
import LandingPage from './pages/home/LandingPage';
import AboutPage from './pages/about/AboutPage';
import ServicesPage from './pages/services/ServicesPage';
import SurveyIntro from './pages/services/survey/SurveyIntro';
import SurveyTest from './pages/services/survey/SurveyTest';
import SurveyResult from './pages/services/survey/SurveyResult';
import SelfCheckPage from './pages/services/self-check/SelfCheckPage';
import InformationPage from './pages/information/InformationPage';
import CommunityPage from './pages/community/CommunityPage';
import ContactPage from './pages/contact/ContactPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<LandingPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="services" element={<ServicesPage />} />
          <Route path="survey">
            <Route path="intro" element={<SurveyIntro />} />
            <Route path="test" element={<SurveyTest />} />
            <Route path="result" element={<SurveyResult />} />
          </Route>
          <Route path="self-check" element={<SelfCheckPage />} />
          <Route path="information" element={<InformationPage />} />
          <Route path="community" element={<CommunityPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App; 