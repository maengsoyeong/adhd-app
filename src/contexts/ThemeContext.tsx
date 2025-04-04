import React, { createContext, useContext, useState, useEffect } from 'react';
import themeConfig from '../styles/theme';

export type ThemeContextType = {
  mode: 'light' | 'dark';
  toggleMode: () => void;
  colors: {
    primary: string;
    secondary: string;
    background: string;
    text: string;
    // 기타 색상...
  };
  spacing: typeof themeConfig.spacing;
  borderRadius: typeof themeConfig.borderRadius;
};

// theme.js의 설정을 가져와서 사용
const { colors: themeColors, spacing, borderRadius } = themeConfig;

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // 사용자 시스템 설정에 따른 초기 테마 모드 설정
  const prefersDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [mode, setMode] = useState<ThemeContextType['mode']>(prefersDarkMode ? 'dark' : 'light');
  
  // 테마 모드 변경 시 HTML 클래스 업데이트
  useEffect(() => {
    document.documentElement.classList.remove('light', 'dark', 'starry-night');
    
    if (mode === 'dark') {
      document.documentElement.classList.add('dark', 'starry-night');
    } else {
      document.documentElement.classList.add('light');
    }
  }, [mode]);
  
  // 테마 모드 토글 함수 - 라이트 <-> 다크(별빛) 전환
  const toggleMode = () => {
    setMode(prevMode => prevMode === 'light' ? 'dark' : 'light');
  };
  
  // 현재 테마 모드에 따른 색상 설정
  const colors = {
    primary: mode === 'light' ? themeColors.primary[500] : themeColors.primary[400],
    secondary: mode === 'light' ? themeColors.secondary[500] : themeColors.secondary[400],
    background: mode === 'light' ? '#ffffff' : '#0f172a',
    text: mode === 'light' ? '#1f2937' : '#f9fafb',
    // 기타 색상...
  };
  
  return (
    <ThemeContext.Provider value={{ 
      mode, 
      toggleMode, 
      colors, 
      spacing, 
      borderRadius 
    }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}; 