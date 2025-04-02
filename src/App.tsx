import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { SurveyIntro } from './pages/SurveyIntro';
import { SurveyTest } from './pages/SurveyTest';
import { SurveyResult } from './pages/SurveyResult';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-50">
        <Routes>
          <Route path="/" element={<SurveyIntro />} />
          <Route path="/test" element={<SurveyTest />} />
          <Route path="/result" element={<SurveyResult />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App; 