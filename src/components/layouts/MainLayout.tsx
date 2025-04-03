import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../common/NavBar';
import Footer from '../common/Footer';

const MainLayout: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout; 