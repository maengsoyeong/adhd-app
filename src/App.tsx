import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/layout/Layout';
import LandingPage from './pages/LandingPage';
import { SurveyIntro } from './pages/SurveyIntro';
import { SurveyTest } from './pages/SurveyTest';
import { SurveyResult } from './pages/SurveyResult';
import ContactPage from './pages/ContactPage';
import SelfCheckPage from './pages/SelfCheckPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<LandingPage />} />
          <Route path="survey">
            <Route path="intro" element={<SurveyIntro />} />
            <Route path="test" element={<SurveyTest />} />
            <Route path="result" element={<SurveyResult />} />
          </Route>
          <Route path="contact" element={<ContactPage />} />
          <Route path="self-check" element={<SelfCheckPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App; 