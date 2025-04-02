import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'  // 명시적으로 .tsx 확장자 사용
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
) 