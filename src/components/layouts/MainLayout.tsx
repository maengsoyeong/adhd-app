import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../common/NavBar';
import Footer from '../common/Footer';
import StarryNightBackground from '../common/StarryNightBackground';
import { useTheme } from '../../contexts/ThemeContext';

const MainLayout: React.FC = () => {
  const { mode } = useTheme();
  const isDark = mode === 'dark';
  
  return (
    <div className={`flex flex-col min-h-screen ${
      isDark ? 'bg-gradient-to-b from-indigo-900 via-purple-900 to-gray-900' : ''
    }`}>
      <NavBar />
      {isDark && <StarryNightBackground />}
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout; 