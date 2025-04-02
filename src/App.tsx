import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import { SurveyIntro } from './pages/SurveyIntro';
import { SurveyTest } from './pages/SurveyTest';
import { SurveyResult } from './pages/SurveyResult';
import EducationInquiryPage from './pages/EducationInquiryPage';
import CorporateInquiryPage from './pages/CorporateInquiryPage';
import ContactPage from './pages/ContactPage';
import SelfCheckPage from './pages/SelfCheckPage';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-50">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/intro" element={<SurveyIntro />} />
          <Route path="/test" element={<SurveyTest />} />
          <Route path="/result" element={<SurveyResult />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/education-inquiry" element={<EducationInquiryPage />} />
          <Route path="/corporate-inquiry" element={<CorporateInquiryPage />} />
          <Route path="/self-check" element={<SelfCheckPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App; 