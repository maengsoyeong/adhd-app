import React, { ReactNode } from 'react';
import NavBar from '../common/NavBar';
import Footer from './Footer';

interface PageContainerProps {
  children: ReactNode;
  className?: string;
  withFooter?: boolean;
  withNavBar?: boolean;
  bgColor?: string;
}

const PageContainer: React.FC<PageContainerProps> = ({
  children,
  className = '',
  withFooter = true,
  withNavBar = true,
  bgColor = 'bg-gray-50'
}) => {
  return (
    <div className={`min-h-screen flex flex-col ${bgColor}`}>
      {withNavBar && <NavBar />}
      
      <main className={`flex-grow ${className}`}>
        {children}
      </main>
      
      {withFooter && <Footer />}
    </div>
  );
};

export default PageContainer; 