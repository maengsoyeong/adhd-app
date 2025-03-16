import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { SurveyIntro } from './pages/SurveyIntro';
import { SurveyTest } from './pages/SurveyTest';
import { SurveyResult } from './pages/SurveyResult';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SurveyIntro />} />
        <Route path="/test" element={<SurveyTest />} />
        <Route path="/result" element={<SurveyResult />} />
      </Routes>
    </Router>
  );
}

export default App;
