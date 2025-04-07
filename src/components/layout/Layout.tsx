import React from 'react';
import { Outlet } from 'react-router-dom';

const Layout: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-white shadow-sm">
        <nav className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <a href="/" className="text-xl font-bold text-purple-700">ADHD App</a>
            <div className="flex gap-4">
              <a href="/survey/intro" className="hover:text-purple-700">설문조사</a>
              <a href="/self-check" className="hover:text-purple-700">자가진단</a>
              <a href="/contact" className="hover:text-purple-700">연락하기</a>
            </div>
          </div>
        </nav>
      </header>
      <main className="flex-grow container mx-auto px-4 py-8">
        <Outlet />
      </main>
      <footer className="bg-gray-100 py-6">
        <div className="container mx-auto px-4 text-center text-gray-600">
          <p>© 2023 ADHD App. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Layout; 