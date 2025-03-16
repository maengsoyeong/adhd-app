import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { SurveyIntro } from './pages/SurveyIntro';
import { SurveyTest } from './pages/SurveyTest';
import { SurveyResult } from './pages/SurveyResult';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        {/* 로고 */}
        <div className="fixed top-4 left-4 z-50">
          <img 
            src={logo} 
            alt="ADHD Test Logo" 
            className="w-12 h-12 hover:scale-110 transition-transform duration-200"
          />
        </div>

        <Routes>
          <Route path="/" element={<SurveyIntro />} />
          <Route path="/test" element={<SurveyTest />} />
          <Route path="/result" element={<SurveyResult />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App; 